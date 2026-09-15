/**
 * CONTENT CHECK: runs automatically before every build (`npm run build`) and in CI.
 *
 * It catches the mistakes that are easy to make when editing site content and that
 * would otherwise only show up as a broken live site:
 *
 *   1. A message file that is not valid JSON (a missing comma or quote).
 *      This has taken the site down before.
 *   2. A key that exists in English but not French, or the other way round.
 *   3. An image, video or PDF path that points at a file that is not there.
 *   4. A path whose UPPER/lower case does not match the real file. Windows does not
 *      care about case but the server does, so these break only once deployed.
 *   5. A translation key referenced from src/content/ that does not exist.
 *
 * Run it yourself any time:  npm run check
 *
 * Every error tells you the file, the value, and what to do about it.
 */
import fs from 'node:fs'
import path from 'node:path'

const LOCALES = ['en', 'fr']
const CONTENT_DIR = 'src/content'
const PUBLIC_DIR = 'public'

const errors = []
const warnings = []
const fail = (title, detail, fix) => errors.push({ title, detail, fix })

/* ── 1. The message files must parse ─────────────────────────────────────────── */

const messages = {}
for (const locale of LOCALES) {
  const file = `messages/${locale}.json`
  let raw
  try {
    raw = fs.readFileSync(file, 'utf8')
  } catch {
    fail(`${file} is missing`, '', `Restore it from git: git checkout ${file}`)
    continue
  }
  try {
    messages[locale] = JSON.parse(raw)
  } catch (e) {
    fail(
      `${file} is not valid JSON`,
      e.message,
      'Usually a missing comma, a trailing comma before } or ], or a missing quote.\n' +
        '    Open the file in VS Code; the broken line is underlined in red.',
    )
  }
}
if (Object.keys(messages).length < LOCALES.length) report()

/* ── 2. The two locales must have the same keys ──────────────────────────────── */

function keyPaths(obj, prefix = '', out = []) {
  for (const [k, v] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${k}` : k
    if (v && typeof v === 'object' && !Array.isArray(v)) keyPaths(v, p, out)
    else out.push(p)
  }
  return out
}

const keys = Object.fromEntries(LOCALES.map((l) => [l, new Set(keyPaths(messages[l]))]))
const onlyEn = [...keys.en].filter((k) => !keys.fr.has(k))
const onlyFr = [...keys.fr].filter((k) => !keys.en.has(k))

if (onlyEn.length) {
  fail(
    `${onlyEn.length} key(s) exist in English but not in French`,
    onlyEn.map((k) => `      ${k}`).join('\n'),
    'Add the same keys to messages/fr.json with the French text.\n' +
      '    Anything you add to one language must go in the other.',
  )
}
if (onlyFr.length) {
  fail(
    `${onlyFr.length} key(s) exist in French but not in English`,
    onlyFr.map((k) => `      ${k}`).join('\n'),
    'Add the same keys to messages/en.json with the English text.',
  )
}

/* ── 3 & 4. Every referenced file must exist, with exactly the right case ────── */

/** Real on-disk names, so we can catch case mistakes even on Windows. */
const realNameCache = new Map()
function realChildren(dir) {
  if (!realNameCache.has(dir)) {
    try {
      realNameCache.set(dir, fs.readdirSync(dir))
    } catch {
      realNameCache.set(dir, null)
    }
  }
  return realNameCache.get(dir)
}

/** Returns 'ok' | 'missing' | the correctly-cased path. */
function checkAssetPath(urlPath) {
  const parts = urlPath.replace(/^\//, '').split('/').filter(Boolean)
  let dir = PUBLIC_DIR
  const rebuilt = []
  for (const part of parts) {
    const children = realChildren(dir)
    if (children === null) return 'missing'
    const exact = children.find((c) => c === part)
    if (exact) {
      rebuilt.push(exact)
      dir = path.join(dir, exact)
      continue
    }
    const insensitive = children.find((c) => c.toLowerCase() === part.toLowerCase())
    if (insensitive) {
      rebuilt.push(insensitive)
      dir = path.join(dir, insensitive)
      continue
    }
    return 'missing'
  }
  const correct = '/' + rebuilt.join('/')
  return correct === urlPath ? 'ok' : correct
}

/** Collect every asset-looking string from the content modules and message files. */
const ASSET_RE = /["'](\/[A-Za-z0-9_\-./%() ]+\.(?:png|jpe?g|webp|avif|svg|gif|mp4|webm|pdf|ico))["']/gi

const references = [] // { value, source, inactive }

for (const file of fs.readdirSync(CONTENT_DIR)) {
  if (!file.endsWith('.ts')) continue
  const src = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8')
  // A sponsor with active: false is an archive record; its logo may legitimately be gone.
  const blocks = src.split(/\n\s*\},?\s*\n/)
  for (const block of blocks) {
    const inactive = /active:\s*false/.test(block)
    for (const m of block.matchAll(ASSET_RE)) {
      references.push({ value: m[1], source: `${CONTENT_DIR}/${file}`, inactive })
    }
  }
}
for (const locale of LOCALES) {
  const src = fs.readFileSync(`messages/${locale}.json`, 'utf8')
  for (const m of src.matchAll(ASSET_RE)) {
    references.push({ value: m[1], source: `messages/${locale}.json`, inactive: false })
  }
}

const missing = []
const miscased = []
for (const ref of references) {
  const verdict = checkAssetPath(ref.value)
  if (verdict === 'ok') continue
  if (verdict === 'missing') {
    if (ref.inactive) {
      warnings.push(`${ref.value} is missing, but its entry is inactive (${ref.source})`)
    } else {
      missing.push(`      ${ref.value}   (referenced from ${ref.source})`)
    }
  } else {
    miscased.push(`      ${ref.value}\n        should be: ${verdict}   (in ${ref.source})`)
  }
}

if (missing.length) {
  fail(
    `${missing.length} file(s) are referenced but do not exist in public/`,
    [...new Set(missing)].join('\n'),
    'Either add the file to public/, or fix the path.\n' +
      '    Check the spelling and that the folder is right.',
  )
}
if (miscased.length) {
  fail(
    `${miscased.length} path(s) have the wrong upper/lower case`,
    [...new Set(miscased)].join('\n'),
    'These work on your computer but break once the site is deployed,\n' +
      '    because the server treats Photo.JPG and photo.jpg as different files.',
  )
}

/* ── 5. Every message key referenced from content must exist ─────────────────── */

const KEY_FIELD_RE = /\b\w*Keys?\s*:\s*(\[[^\]]*\]|'[^']*'|"[^"]*")/g
const STRING_RE = /['"]([^'"]+)['"]/g

const keyRefs = []
for (const file of fs.readdirSync(CONTENT_DIR)) {
  if (!file.endsWith('.ts')) continue
  const src = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8')
  // Ignore comment lines so the worked examples in the file headers are not checked.
  const code = src
    .split('\n')
    .filter((l) => !/^\s*(\*|\/\/|\/\*)/.test(l))
    .join('\n')
  for (const m of code.matchAll(KEY_FIELD_RE)) {
    for (const s of m[1].matchAll(STRING_RE)) {
      keyRefs.push({ key: s[1], source: `${CONTENT_DIR}/${file}` })
    }
  }
}

const badKeys = []
for (const ref of keyRefs) {
  for (const locale of LOCALES) {
    if (!keys[locale].has(ref.key)) {
      badKeys.push(`      ${ref.key}   missing in messages/${locale}.json   (used by ${ref.source})`)
    }
  }
}
if (badKeys.length) {
  fail(
    `${badKeys.length} translation key(s) referenced from content do not exist`,
    [...new Set(badKeys)].join('\n'),
    'Add the key to the message file, or correct the spelling in the content file.\n' +
      '    Keys are written in full, e.g. "team.roles.team-captain".',
  )
}

/* ── Report ──────────────────────────────────────────────────────────────────── */

report()

function report() {
  if (warnings.length) {
    console.log('\nNotes (not failures):')
    for (const w of [...new Set(warnings)]) console.log('  - ' + w)
  }

  if (!errors.length) {
    console.log(
      `\n  Content check passed.` +
        `\n    ${keys.en?.size ?? 0} translation keys in each language, in step.` +
        `\n    ${new Set(references.map((r) => r.value)).size} files referenced, all present.` +
        `\n    ${new Set(keyRefs.map((r) => r.key)).size} content keys, all defined.\n`,
    )
    process.exit(0)
  }

  console.error('\n' + '='.repeat(74))
  console.error(`  CONTENT CHECK FAILED: ${errors.length} problem(s)`)
  console.error('='.repeat(74))
  errors.forEach((e, i) => {
    console.error(`\n  ${i + 1}. ${e.title}`)
    if (e.detail) console.error(e.detail)
    console.error(`\n    How to fix: ${e.fix}`)
  })
  console.error(
    '\n' +
      '-'.repeat(74) +
      '\n  Nothing was published. Fix the problems above and run `npm run check` again.\n',
  )
  process.exit(1)
}
