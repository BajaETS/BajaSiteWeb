/**
 * Every piece of site content, in one import.
 *
 *   import { SPONSORS, TEAM_SECTIONS } from '@/content'
 *
 * Each module is documented at the top of its own file, so start there when you want
 * to change something:
 *
 *   season.ts      the logo, hero video and year (the once-a-year rollover)
 *   navigation.ts  the menu, social links and donate button
 *   team.ts        the roster
 *   sponsors.ts    the sponsors and their tiers
 *   history.ts     the history timeline
 *   results.ts     competition results
 *   types.ts       the shape everything above has to follow
 */
export * from './types'
export * from './season'
export * from './navigation'
export * from './team'
export * from './sponsors'
export * from './history'
export * from './results'
