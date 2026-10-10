import type { BajameisterEvent } from './types'

/**
 * THE BAJAMEISTER EVENT.
 *
 * The fundraiser party the team runs with Jagermeister and Red Bull. Everything that
 * changes from one edition to the next is in this one file.
 *
 * -- Moving the event to a new date --------------------------------------------
 *   1. Change `date` below. It is YYYY-MM-DD, so 13 November 2026 is '2026-11-13'.
 *      The site writes it out in the reader's language, and the floating banner
 *      on every page hides itself automatically the day after the event.
 *   2. Update `venue` and `address` if it has moved, and `logo` if the crest changed.
 *      A crest with a transparent background sits best on the page's animated hero.
 *   3. Get the new link and id from Lepointdevente and update `ticketUrl` and
 *      `ticketEventId`. The id is the number shown as
 *      "Identifiant a utiliser sur WordPress".
 *   4. Run: npm run check
 *
 * -- Taking the event down entirely --------------------------------------------
 *   Remove <BajameisterBanner /> from src/app/[locale]/layout.tsx. The page stays
 *   reachable at /bajameister but stops being advertised. You do not need to touch
 *   anything else: the banner hides itself once the date has passed.
 *
 * The wording on the page (title, tagline, description, opening hours) lives under
 * `pages.bajameister` in messages/en.json and messages/fr.json, because that text
 * changes with the language. Only the facts are here.
 */
export const BAJAMEISTER: BajameisterEvent = {
  date: '2026-11-13',

  logo: '/bajameister/bajameister-logo.png',

  venue: 'Resto-Pub 100 Génies',
  address: '530 rue Peel, Montréal, QC',

  ticketUrl: 'https://lepointdevente.com/billets/bajameister',
  ticketEventId: '544585',
}
