/**
 * Type declarations for src/theme/tokens.mjs.
 *
 * The tokens file is plain JavaScript because tailwind.config.mjs has to import it
 * at build time. This file is what lets TypeScript see it. If you add a token to
 * tokens.mjs, add it here too, or TypeScript will not know it exists.
 */
declare module '@/theme/tokens.mjs' {
  export const COLORS: {
    red: string
    redDark: string
    redLight: string
    orange: string
    orangeLight: string
    orangePale: string
  }
  export const MEDALS: {
    gold: readonly [string, string]
    silver: readonly [string, string]
    bronze: readonly [string, string]
    other: readonly [string, string]
  }
  export const TIER_COLORS: {
    platinum: string
    gold: string
    silver: string
    bronze: string
  }
  export const FONTS: { display: string; accent: string }
}
