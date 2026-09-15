/**
 * THE SHAPE OF EVERY PIECE OF SITE CONTENT.
 *
 * These types are what make the site safe to edit. If you add a sponsor without a
 * logo, or give a team member a role that does not exist, `npm run build` stops and
 * tells you which line is wrong, instead of the site quietly rendering something
 * broken.
 *
 * ── The rule ──────────────────────────────────────────────────────────────────
 *   FACTS go in src/content/*.ts    names, dates, placements, links, image paths.
 *                                   These are the same in English and in French.
 *   WORDS go in messages/*.json     anything a reader reads that changes language.
 *
 * Content files never contain a sentence. They contain a *key* pointing at one, and
 * the page looks the sentence up in the reader's language. A field named `...Key`
 * always means "this is a lookup, not text".
 */

/* ────────────────────────────── Season ────────────────────────────── */

/**
 * Everything that changes when the team rolls over to a new competition year.
 * Edited once a year, in src/content/season.ts, and nowhere else.
 */
export type Season = {
  /** The current competition year, e.g. 2026. */
  year: number
  /** Path to the season logo under public/, e.g. '/logo2026.png'. */
  logo: string
  /**
   * The logo image's REAL pixel dimensions. Get them by right-clicking the file →
   * Properties → Details. If these do not match the file, the logo renders stretched.
   */
  logoWidth: number
  logoHeight: number
  /** Path to the hero video played on the home page, under public/. */
  heroVideo: string
  /** Path to the car image that slides along the history timeline. */
  timelineCar: string
}

/* ────────────────────────────── Navigation ────────────────────────────── */

/** One entry in the site menu. The same list feeds the header and the footer. */
export type NavItem = {
  /** Route path, e.g. '/team'. Must match a folder under src/app/[locale]/. */
  href: string
  /** Message key for the visible label, e.g. 'pages.team.title'. */
  labelKey: string
}

/** One social media icon in the footer. */
export type SocialLink = {
  /** Full external URL. */
  href: string
  /** Icon path under public/Footer/. */
  image: string
  /** Accessible name, e.g. 'Instagram'. Not translated: these are proper nouns. */
  alt: string
}

/* ────────────────────────────── Team ────────────────────────────── */

/** One person on the roster. */
export type Member = {
  /** Full name, as they want it shown. Not translated. */
  name: string
  /** Photo path under public/Team/. */
  image: string
  /**
   * Message key for their degree programme, e.g. 'programs.mechanical-engineering'.
   * The list of valid programmes lives under `team.programs` in messages/en.json.
   * Optional: leave it out if you do not know the person's programme.
   */
  programKey?: string
  /**
   * Message keys for their roles, e.g. ['roles.team-captain'].
   * The list of valid roles lives under `team.roles` in messages/en.json.
   */
  roleKeys: string[]
  /** Optional nickname shown on the member card. Not translated. */
  nickname?: string
  /** Optional full LinkedIn profile URL. */
  linkedin?: string
}

/** One group of people on the team page, e.g. Management or Mechanics. */
export type TeamSection = {
  /** Message key for the section heading, e.g. 'title.management'. */
  titleKey: string
  members: Member[]
}

/* ────────────────────────────── Sponsors ────────────────────────────── */

/**
 * The sponsorship levels, richest first.
 * Adding a level here is a two-step change; see src/content/sponsors.ts.
 */
export type SponsorTierId = 'platinum' | 'gold' | 'silver' | 'bronze'

/** How one sponsorship level looks on the page. */
export type SponsorTier = {
  /** Message key for the tier's display name, e.g. 'ranking.platinum'. */
  labelKey: string
  /** Accent colour for this tier, from src/theme/tokens.mjs. */
  accent: string
  /** Logo box size in pixels. Higher tiers get bigger logos. */
  logoWidth: number
  logoHeight: number
}

/** One sponsor. */
export type Sponsor = {
  /** Company name, exactly as they spell it. Not translated. */
  name: string
  /** Which sponsorship level they bought. Must be one of the four above. */
  tier: SponsorTierId
  /** Logo path under public/Partners/<tier>/. */
  logo: string
  /** The company's website. */
  link: string
  /**
   * Set to false when a sponsorship ends. The entry stays here as a record but
   * disappears from the site. Never delete an entry; flip this instead.
   */
  active: boolean
  /**
   * Optional message key for a thank-you paragraph shown on hover,
   * e.g. 'platinum-messages.BRP'. Only platinum sponsors have one today.
   */
  messageKey?: string
}

/* ────────────────────────────── History ────────────────────────────── */

/** One year on the history timeline. */
export type HistoryEntry = {
  /** The year, e.g. 2026. */
  year: number
  /** Photo path under public/History/. */
  image: string
  /**
   * Message key for that year's story,
   * e.g. 'pages.history.entries.2026'. The text itself lives in messages/.
   */
  textKey: string
}

/* ────────────────────────────── Results ────────────────────────────── */

/**
 * The award categories the team competes in. Using a fixed list instead of free
 * text is what stops the same category being spelled three different ways.
 * To add one: add it here, then add its label under `pages.prizes.categories`
 * in BOTH messages/en.json and messages/fr.json.
 */
export type ResultCategory =
  | 'acceleration'
  | 'business'
  | 'climb'
  | 'cost'
  | 'cross'
  | 'design'
  | 'dynamic'
  | 'endurance'
  | 'maneuverability'
  | 'overall'
  | 'rocks'
  | 'static'
  | 'suspension'

/** Which medal colour the placement earns. */
export type MedalType = 'gold' | 'silver' | 'bronze' | 'other'

/** One placement at one competition. */
export type CompetitionResult = {
  /**
   * The finishing position as a NUMBER: 1, not '1st'.
   * The site writes '1st' in English and '1re' in French from this number, so the
   * ordinal is never wrong in one language.
   */
  place: number
  category: ResultCategory
  medal: MedalType
  /** Optional score, e.g. 919.16. */
  points?: number
  /**
   * Optional message key for the tooltip shown on hover,
   * e.g. 'pages.prizes.details.2026-ny-overall'.
   */
  detailsKey?: string
}

/** One competition the team attended. */
export type Competition = {
  /** Event name, e.g. 'Baja SAE Oregon'. A proper noun, so not translated. */
  title: string
  /** Date in ISO format: YYYY-MM-DD. Displayed in the reader's language. */
  date: string
  /** Optional photo path under public/Prizes/. */
  image?: string
  results: CompetitionResult[]
}

/** All of one season's competitions. */
export type CompetitionYear = {
  year: number
  competitions: Competition[]
}
