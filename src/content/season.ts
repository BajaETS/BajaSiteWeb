import type { Season } from './types'

/**
 * THE YEARLY ROLLOVER. Edit this file once a season; that is the whole job.
 *
 * ── Rolling over to a new year ─────────────────────────────────────────────────
 *   1. Put the new logo, hero video and timeline car image in public/.
 *   2. Change the paths below to point at them.
 *   3. Change `year`.
 *   4. Right-click the new logo → Properties → Details, and copy its real pixel
 *      width and height into logoWidth / logoHeight. Getting these wrong is what
 *      stretches the logo, so copy them, do not guess.
 *   5. Run `npm run check`. It will tell you if any path is misspelled.
 *
 * The timeline's start and end years are NOT set here. They come from the oldest
 * and newest entries in src/content/history.ts, so adding a history year updates
 * the timeline automatically.
 */
export const SEASON: Season = {
  year: 2026,

  logo: '/logo2026.png',
  logoWidth: 2160,
  logoHeight: 822,

  heroVideo: '/videoReveal2026.mp4',

  timelineCar: '/History/RightSide2026.png',
}
