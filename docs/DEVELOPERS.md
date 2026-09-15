# Developer guide

For changing how the site *works*. If you only need to change what it *says* (the roster,
the sponsors, the results), [README.md](../README.md) covers that and you do not need this file.

---

## Stack

| | |
|---|---|
| Framework | Next.js 14, App Router |
| Language | TypeScript, `strict: true` |
| Styling | Tailwind CSS 3 |
| Translations | next-intl 3 |
| Animation | framer-motion |
| Hosting | Vercel, deploys on push to `master` |

---

## The one idea worth understanding

Everything else in this guide follows from a single split:

```
src/content/     FACTS      locale-independent, typed, checked at build time
messages/*.json  WORDS      one file per language, referenced from content by key
src/theme/       LOOK       colours and brand assets, one source for Tailwind and TS
src/app/         BEHAVIOUR  pages and components, how things are arranged and animated
```

A page component decides *how* something is laid out. It never decides *what* the something
is. If you find yourself typing a person's name, a company name, a date or a hex colour into
a `.tsx` file, it belongs in one of the first three folders instead.

This is not stylistic. Before this split, the sponsors page was 730 lines of which 482 were
data, and the roster was duplicated identically across both translation files, 171 values
maintained twice for no reason. Every content edit meant editing React.

### Why keys instead of text in content files

A team member's role is the same fact in both languages, but reads differently:

```ts
// src/content/team.ts, the fact
roleKeys: ['team.roles.team-captain']
```
```jsonc
// messages/en.json          messages/fr.json
"team-captain": "Team Captain"    "team-captain": "Capitaine d'équipe"
```

So the roster is stored once, and only the twelve or so role *names* are translated,
rather than translating thirty people's entire records. Any field whose name ends in `Key`
or `Keys` works this way, and `npm run check` verifies every one of them resolves.

Keys are always written **in full**, starting from the root of the message file
(`team.roles.team-captain`, not `roles.team-captain`). Pages therefore call
`useTranslations()` with no namespace when resolving a key that came from a content file.

---

## Project layout

```
src/
  app/
    [locale]/
      layout.tsx            the ONLY <html>/<body> in the project
      globals.css           site-wide CSS, the @font-face rules, the background
      (home)/               the home page          shows the large Logo
      (pages)/              team, prizes, partners, bajameister show MiniLogo
      history/              separate because it must not scroll (see below)
    components/             shared React components, <Name>/index.tsx
  content/                  all site data, see README.md
  theme/tokens.mjs          colours, medal gradients, tier colours, fonts
  i18n/routing.ts           locales and URL shape
  middleware.ts             routes /fr/... to the right locale
  global.d.ts               makes translation keys type-checked
messages/                   en.json, fr.json
scripts/check-content.mjs   the content validator
```

### Layouts

There is exactly one `<html>` element, in `src/app/[locale]/layout.tsx`. It loads the fonts,
sets up translations, and renders the menu and footer around every page.

The three folders under it add only their own small difference:

| Layout | Adds |
|---|---|
| `(home)/layout.tsx` | the large `Logo` that shrinks as you scroll |
| `(pages)/layout.tsx` | the small `MiniLogo` that links home |
| `history/layout.tsx` | `MiniLogo`, plus `ScrollLock` |

`(home)` and `(pages)` are *route groups*: the parentheses mean they group files without
appearing in the URL. `/team` lives at `(pages)/team/` but the URL has no "pages" in it.

`history` is not in `(pages)` because its timeline scrolls sideways and is pinned to the
bottom of the screen, so the page itself must not scroll vertically. `ScrollLock` applies
that while the page is open and removes it when you navigate away. A side effect is that
the footer sits below the fold there; that has always been the case.

This used to be three complete copies of the same layout file. They had already drifted:
the history one imported `Footer` and never rendered it.

### Static rendering, and why `unstable_setRequestLocale` is everywhere

Every page is built ahead of time, in both languages, by `npm run build`. That is what makes
the content files load-bearing at build time: a broken translation key or a missing image
fails your build instead of a visitor's page load.

next-intl needs two things for this:

1. `generateStaticParams()` in the root layout, listing the locales.
2. `unstable_setRequestLocale(locale)` called in **every layout and every server page**.

If you add a new layout or a server-rendered page and skip step 2, the build silently falls
back to rendering on demand and stops checking your content. The tell is `ƒ` instead of `●`
next to the route in the build output.

Client pages (`"use client"`) cannot call it, so their parent layout covers them.

---

## Adding a new page

Say you are adding `/vehicle`.

**1. Create the page.** Under `(pages)` so it gets the small logo and standard chrome:

```tsx
// src/app/[locale]/(pages)/vehicle/page.tsx
"use client";

import { useTranslations } from "next-intl";
import Page from "@/app/components/Page";

export default function Vehicle() {
  const t = useTranslations();

  return (
    <Page>
      <h1 className="text-6xl font-bebas text-center pt-8">{t("pages.vehicle.title")}</h1>
    </Page>
  );
}
```

`<Page>` supplies the top margin that clears the fixed menu. Use it on every page.

**2. Add the text** to `messages/en.json` *and* `messages/fr.json`:

```jsonc
"pages": {
  "vehicle": { "title": "The Vehicle" }     // and "Le véhicule" in fr.json
}
```

**3. Give it a browser-tab title.** Pages are Client Components and cannot export
`metadata`, so each route has a small `layout.tsx` beside it:

```tsx
// src/app/[locale]/(pages)/vehicle/layout.tsx
import { ReactNode } from "react";
import { pageMetadata } from "@/app/pageMetadata";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return pageMetadata(locale, "pages.vehicle.title");
}

export default function VehicleLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
```

The site name is appended automatically by the template in the root layout, so
`"The Vehicle"` becomes `"The Vehicle | Baja ÉTS"`.

**4. Add it to the menu** in `src/content/navigation.ts`:

```ts
{ href: '/vehicle', labelKey: 'pages.vehicle.title' },
```

The header and footer both pick it up. Do not add it to a second list, because there isn't one.

**5. If the page has its own data,** create `src/content/vehicle.ts` with a type in
`types.ts`, rather than putting the data in the page. Export it from `content/index.ts`.

**6. Check it:**

```bash
npm run check && npm run build
```

Confirm the new route shows `●` in the build output, not `ƒ`.

Notes:
- URLs are the same in both languages (`/vehicle` and `/fr/vehicle`). There is no per-language
  slug map; see the comment in `src/i18n/routing.ts` for why, and what to do if you want one.
- Always import `Link`, `useRouter`, `usePathname` and `redirect` from `@/i18n/routing`,
  never from `next/link` or `next/navigation`. The wrappers keep the reader in their language.

---

## Adding a new kind of content

Say the team starts tracking published papers.

1. **Define the shape** in `src/content/types.ts`. Comment each field for someone who is not
   a developer, because those comments are the documentation an editor actually reads.
2. **Create `src/content/papers.ts`** with a header block explaining how to add one. Copy the
   tone from `sponsors.ts`.
3. **Put translatable prose in `messages/`**, referenced by a `...Key` field. Anything
   identical in both languages stays in the content file.
4. **Export it** from `src/content/index.ts`.
5. **Document it** in the README's "How to change things" section.

The validator picks up new content files automatically: it scans every `.ts` in
`src/content/`, checks every `/...` path against `public/`, and every `...Key` against both
message files. You do not need to register anything.

---

## Styling

All colours come from `src/theme/tokens.mjs`. `tailwind.config.mjs` imports it, so the same
values are available as Tailwind classes and as raw strings in TypeScript:

```tsx
<div className="bg-primary hover:bg-brand-orange" />          // classes
import { MEDALS } from '@/theme/tokens.mjs'                   // raw values
```

Available: `primary` (the brand red), and `brand-red`, `brand-red-dark`, `brand-red-light`,
`brand-orange`, `brand-orange-light`, `brand-orange-pale`. Opacity modifiers work as normal
(`bg-brand-orange/20`).

`tokens.mjs` is plain JavaScript, not TypeScript, because the Tailwind config has to import
it before TypeScript exists in the build. `src/theme/tokens.d.ts` is what lets TS see it.
**If you add a token, add it there too.**

Do not write a hex code in a component. If you need a new colour, name it in `tokens.mjs`.

Other conventions worth matching:

- Display fonts are `font-bebas` and `font-hemi`, loaded from `src/app/fonts/` via
  `@font-face` in `globals.css`. The body font is Inter, via `next/font` in the root layout.
- Scroll reveals use framer-motion with `initial` / `whileInView` /
  `viewport={{ once: true }}`, staggered with `delay: index * 0.1`.
- Components live in `components/<Name>/index.tsx`, with prop types in a sibling
  `interface.ts`. (One file is spelled `inteface.ts`, a typo from before, not a convention.)

---

## The content check

`scripts/check-content.mjs` runs automatically before every build and in CI. It catches:

1. A message file that is not valid JSON.
2. A key in one language but not the other.
3. An asset path pointing at a file that does not exist.
4. An asset path whose upper/lower case does not match the real filename.
5. A `...Key` in a content file that resolves to nothing.

Number 4 matters more than it sounds: Windows treats `Photo.JPG` and `photo.jpg` as the same
file, Linux does not. Without this check, a path can work on every laptop on the team and
break the moment it deploys.

Sponsors with `active: false` are exempt from the missing-file check, because an ended sponsorship
is an archive record, and its logo may legitimately have been removed. Those are reported as
notes rather than failures.

What the check **cannot** tell you is that you attached the *wrong* photo, or pointed a key
at real-but-incorrect text. Look at the page in a browser before you push.

TypeScript covers a different set: an invalid sponsor tier, an unknown result category, a
missing required field, a misspelled translation key. Between them, every field of every
content file is checked by something.

---

## Deployment

Pushing to `master` deploys. Vercel watches the repository and builds on its own.
Pull requests get preview URLs.

### The Hobby plan constraint, and why the repository is public

The site is hosted on a **Vercel Hobby** account, which has a rule that decided this:

> Hobby cannot deploy a **private** repository owned by an **organization**.

`BajaETS/BajaSiteWeb` is org-owned, so while it was private the project could not be
connected at all. Vercel's own guidance is to make the repository public or upgrade to
Pro, and public org repositories are supported on Hobby.

Making it public also fixed a smaller problem underneath: even for a private *personal*
repo, Hobby only deploys commits authored by the account owner, so anyone else's push
produced nothing. Vercel's docs state that "collaboration is free for public
repositories", so every maintainer's push now deploys normally.

Before the repository was made public it was audited: no credentials, keys or tokens
appear anywhere in the history, and the only personal email in the codebase was removed
(see `DONATE_URL` in `src/content/navigation.ts`).

Two consequences to keep in mind:

- **Do not commit a secret.** On a public repo, anything committed is public the moment
  it is pushed, and rewriting history does not reliably remove it because forks and
  caches keep copies. If a secret is ever needed, use a Vercel environment variable, and
  a GitHub Actions secret for CI.
- The repository is public, so `.git` (over 1 GB, mostly historical images) is cloneable
  by anyone. Keep committing large images to a minimum. See the note further down.

### Stopping a broken build from going live

Vercel deploys whatever lands on `master`, so the place to catch a bad change is the
merge, not the deploy. Make the `Check` job a required status check:

**GitHub > Settings > Branches > Add branch protection rule** for `master`, then enable
**Require status checks to pass before merging** and select **Check**.

That blocks a merge whose content validation, lint or build fails. Four commits in this
repository's history shipped unparseable JSON to `master` and took the live site down;
this is what prevents a fifth.

### If the team ever outgrows Hobby

Hobby's fair use terms restrict it to non-commercial use. On Pro ($20/month per developer
seat, viewer seats free) the repository could go private again and team members could
deploy directly.

Worth knowing: every page of this site prerenders to static HTML, and the only thing
needing a server is the next-intl middleware that handles locale routing. That makes the
site portable. Cloudflare Pages, for instance, has free unlimited collaborators and would
run it. Not a reason to move today, but the exit is cheap if it is ever wanted.

A public repository also makes the project eligible for the
[Vercel Open Source Program](https://vercel.com/open-source-program), which grants credits
and support. Applications open quarterly.

## Things deliberately left alone

- **`BajameisterBanner`** (`src/app/components/BajameisterBanner/`) is written but never
  imported anywhere. It holds the only link to `/bajameister`, so that page is currently
  reachable only by typing the URL. Mount the banner, or delete both, when someone decides
  which it should be.
- **Repository size.** `.git` is over 1 GB because large images have been committed since the
  project started. Deleting files from `public/` does not reclaim that: the bytes stay in
  every past commit. Fixing it properly means rewriting history with `git filter-repo` and a
  force-push, which breaks every existing clone and fork, so it needs to be a coordinated
  decision rather than a surprise. In the meantime, `.gitattributes` and `.gitignore` keep it
  from growing: no camera RAW files, and compress photos before committing them.
- **Image sizes.** `public/` is still around 370 MB and nothing is served as `.webp`. The
  `/bajameister` page in particular loads several very large PNGs. Converting them would be a
  real page-speed win and is the obvious next improvement.
- **`PageHero` and `SectionHeader`.** The hero block and section headers are near-duplicated
  across four pages, roughly 300 lines. Extracting them was considered and skipped: it adds
  indirection to exactly the files a new student opens first, and none of the goals of this
  refactor needed it. Worth revisiting if a fifth page appears.

---

## Removed, and where it went

- **`/game`** iframed `/JSGame.html`, which had been deleted in commit `06524ab`, so the
  route rendered a blank frame. Recover the file with
  `git show 06524ab^:public/JSGame.html` if it is ever wanted.
- **`phaser`, `poly-decomp`**: dependencies of that game, imported nowhere.
- **`motion`**: a second copy of `framer-motion`, which is the one actually used in 14 files.
  Both resolved, so it was possible to end up with two instances of the same library.
- **`pathnames` in `routing.ts`**: declared French URLs that never worked, because it was
  wired to the helper for locale-identical paths.
- **59 files from `public/`** (about 150 MB): referenced by nothing. Recoverable from git.
