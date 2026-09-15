# Baja ÉTS team website

The public site for Baja ÉTS: [bajaets.com](https://bajaets.com)

Built with Next.js, in English and French. Most of what you will ever need to change is
**site content**: the roster, the sponsors, the results. None of that requires
knowing React. Every routine change is one file, and each of those files explains itself
at the top.

If you want to change how the site *works* rather than what it *says*, read
[docs/DEVELOPERS.md](docs/DEVELOPERS.md) instead.

---

## First time setup

You need [Node.js](https://nodejs.org/) version 20 or newer. Then, in this folder:

```bash
npm install
```

To see the site on your own computer while you edit it:

```bash
npm run dev
```

Then open <http://localhost:3000>. The page reloads by itself every time you save a file.

---

## The one rule

There are two kinds of information on this site, and they live in different places:

| | Where it lives | Examples |
|---|---|---|
| **Facts** (the same in both languages) | `src/content/` | names, dates, placements, logos, links, photo paths |
| **Words** (different in each language) | `messages/en.json` and `messages/fr.json` | headings, paragraphs, button labels, role names |

A content file never contains a sentence. It contains a *key* that points at one, and the
site looks up that sentence in whichever language the reader is using. Any field whose
name ends in `Key` is a pointer, not text.

**Anything you add to `messages/en.json` must also go in `messages/fr.json`, and vice
versa.** `npm run check` will stop you if you forget.

---

## Before you commit anything

```bash
npm run check
```

It takes a second and catches the mistakes that have broken the live site before:
a typo in the JSON, a key added to only one language, a photo path pointing at a file
that is not there, or a filename whose capitalisation is wrong.

If it prints errors, read them, because each one says what is wrong and how to fix it. Nothing
is published until it passes.

Then look at the page in your browser (`npm run dev`) before you push. The check cannot
tell you that you attached the *wrong* photo, only that the photo exists.

---

## How to change things

### Add, remove, or update a team member

**File:** `src/content/team.ts`

1. Put the photo in `public/Team/`. A square crop looks best, since the site shows it in a circle.
2. Copy an existing entry, paste it into the right section, edit the values:

```ts
{
  name: 'Annabelle Gagnon',
  image: '/Team/Annabelle2.jpg',
  programKey: 'team.programs.mechanical-engineering',
  roleKeys: ['team.roles.team-captain'],
  nickname: 'Annacool',
  linkedin: 'https://www.linkedin.com/in/annabelle-gagnon-ab8313311/',
},
```

`nickname` and `linkedin` are optional, so leave the whole line out if the person has neither.

`programKey` and `roleKeys` are pointers. The value must already exist under
`team.programs` or `team.roles` in **both** message files. If the role you need is not
there yet, add it to both files first:

```jsonc
// messages/en.json          // messages/fr.json
"roles": {                   "roles": {
  "cooling-lead": "Cooling Lead"   "cooling-lead": "Responsable refroidissement"
}                            }
```

Someone can hold more than one role: `roleKeys: ['team.roles.mechanics', 'team.roles.cvt-lead']`.

**To remove someone:** delete their entry, and delete their photo from `public/Team/` if
nobody else uses it.

### Add or remove a sponsor

**File:** `src/content/sponsors.ts`

1. Put the logo in `public/Partners/<tier>/`, as a PNG with a transparent background.
2. Add an entry in the right tier section:

```ts
{
  name: 'Blaxes',
  tier: 'platinum',
  logo: '/Partners/platinum/Blaxes.png',
  link: 'https://blaxes.com',
  active: true,
},
```

**When a sponsorship ends, do not delete the entry.** Change `active: true` to
`active: false`. They disappear from the site, but the record of their support stays, and
if they come back next year it is a one-word change.

**If a sponsor changes tier:** change `tier`, and move the logo file into the matching
folder under `public/Partners/`.

Only platinum sponsors have a thank-you paragraph. To give one to a sponsor, add
`messageKey: 'partners.platinum-messages.TheirName'` to their entry and write the
paragraph under `partners.platinum-messages` in both message files.

### Add a competition result

**File:** `src/content/results.ts`

Find the year (or add a new year block at the top), then add the competition:

```ts
{
  title: 'Baja SAE Oregon',
  date: '2026-05-07',
  image: '/Prizes/oregon2026.jpeg',
  results: [
    { place: 1, category: 'acceleration', medal: 'gold' },
    { place: 2, category: 'cost', medal: 'silver' },
  ],
},
```

- **`place` is a number**, so write `1`, not `"1st"`. The site writes "1st" in English and "1re"
  in French from that number, so the two can never disagree. (They used to: three French
  results were showing "3rd" and "2nd" in English on the live site.)
- **`category`** must be one from the fixed list in `src/content/types.ts`. That fixed
  list is what stops the same category being spelled four different ways. Before this,
  the data had 20 different French spellings for 13 categories.
- **`medal`** is `gold`, `silver`, `bronze` or `other`, and sets the colour of the bar.
- **`points`** is optional.
- **`detailsKey`** is optional, and holds a sentence shown when you hover the result. Point it at a
  key under `pages.prizes.details` in both message files.

**Dates are `YYYY-MM-DD`.** They are shown in the reader's language automatically.

**To add a new category:** add it to `ResultCategory` in `src/content/types.ts`, then add
its name under `pages.prizes.categories` in both message files. The build fails until you
do both, which is on purpose.

### Add a year to the history timeline

**File:** `src/content/history.ts`

1. Put the photo in `public/History/`.
2. Add an entry, keeping the list newest-first:

```ts
{ year: 2027, image: '/History/2027.jpg', textKey: 'pages.history.entries.2027' },
```

3. Write the story itself under `pages.history.entries.2027` in **both** message files.

The years at each end of the timeline slider update on their own.

### Change the site's colours

**File:** `src/theme/tokens.mjs`

Edit the hex values. That is the whole job, because every button, hover, gradient and glow on
the site is built from those six colours.

```js
export const COLORS = {
  red: '#ff0200',        // the main brand colour
  redDark: '#cc0200',    // pressed and hover states
  redLight: '#ff4040',   // the far end of red gradients
  orange: '#f79900',     // the secondary accent
  orangeLight: '#ffb340',
  orangePale: '#ffcf99',
}
```

Do not paste a hex code into a component. If you need a new colour, give it a name here
first.

### Roll the site over to a new season

**File:** `src/content/season.ts`

1. Put the new logo, hero video and timeline car image in `public/`.
2. Point the paths at them and update `year`.
3. **Copy the logo's real pixel size** into `logoWidth` and `logoHeight` (right-click the
   file → Properties → Details). Do not guess. Getting these wrong is what stretches the
   logo. It was stretched on the live site for a while because these numbers belonged to
   a different file.
4. `npm run check`

### Change the menu or the footer links

**File:** `src/content/navigation.ts`

One list feeds both the header menu and the footer, so they cannot drift apart. The same
file holds the social media links and the Donate button URL.

### Change wording anywhere on the site

**Files:** `messages/en.json` and `messages/fr.json`

Find the text, change it in both files. If you are not sure which key a piece of text
comes from, search for the text itself in `messages/en.json`.

---

## When the check or the build fails

| What it says | What it means | What to do |
|---|---|---|
| `is not valid JSON` | A message file has a typo, usually a missing or extra comma. | Open it in VS Code; the bad line is underlined in red. |
| `key(s) exist in English but not in French` | You added something to one language only. | Add the same keys to the other file. |
| `file(s) are referenced but do not exist` | A photo or logo path is wrong, or the file was never added. | Check the spelling and the folder, or add the file to `public/`. |
| `path(s) have the wrong upper/lower case` | `Photo.JPG` vs `photo.jpg`. | Fix it. This works on Windows but breaks once deployed, because the server treats them as different files. |
| `translation key(s) ... do not exist` | A `...Key` in a content file points at nothing. | Fix the spelling, or add the key to both message files. Keys are written in full, like `team.roles.team-captain`. |
| `Type 'x' is not assignable to type ...` | A value is not one of the allowed options, such as a sponsor tier or a result category that does not exist. | Use one of the allowed values, or add the new one properly (see above). |
| `Property 'name' is missing` | An entry is missing a required field. | Compare it with the entry above it. |

---

## Publishing

Pushing to the `master` branch deploys the site. There is nothing else to do: no button
to press, no empty commit needed.

Every push and pull request also runs the checks above on GitHub. Watch them under the
**Actions** tab, and see the deployment on the [Vercel dashboard](https://vercel.com/dashboard).

Pull requests get their own preview URL from Vercel, so you can look at a roster or
sponsor change on a real page before it goes live. Use it: the automated checks confirm a
photo exists, not that it is the right photo.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Runs the site on your computer at <http://localhost:3000> |
| `npm run check` | Checks the content files for mistakes |
| `npm run build` | Builds the site the way the server does. Runs `check` first. |
| `npm run lint` | Checks the code for common React and Next.js mistakes |
| `npm start` | Serves the built site (run `build` first) |
