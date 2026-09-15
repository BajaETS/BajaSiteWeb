/**
 * BRAND TOKENS: the one file to edit when the team's visual identity changes.
 *
 * This file is plain JavaScript (not TypeScript) on purpose: `tailwind.config.mjs`
 * has to import it at build time, before TypeScript exists. It is imported by both
 * the Tailwind config and by React components, so a colour defined here is the same
 * colour everywhere.
 *
 * HOW TO CHANGE THE SITE'S COLOURS
 *   Edit the hex values in COLORS below. Nothing else. Every button, hover state,
 *   gradient and glow on the site is built from these six values.
 *
 * HOW TO USE THEM IN A COMPONENT
 *   Tailwind classes:  bg-primary, text-brand-orange, border-brand-red-dark, ...
 *   Opacity works too: bg-brand-orange/20
 *   Raw value in JS:   import { COLORS } from '@/theme/tokens.mjs'
 *
 * Do NOT paste a hex code into a component. If you need a new colour, name it here.
 */

export const COLORS = {
  /** Baja racing red. The primary brand colour: buttons, accents, the timeline fill. */
  red: '#ff0200',
  /** Darker red. Pressed and hover states on red surfaces. */
  redDark: '#cc0200',
  /** Lighter red. The far end of red gradients. */
  redLight: '#ff4040',

  /** Signal orange. The secondary accent: link hovers, social icons, highlights. */
  orange: '#f79900',
  /** Lighter orange. Gradient partner to `orange`. */
  orangeLight: '#ffb340',
  /** Pale orange. Soft washes and the lightest gradient stop. */
  orangePale: '#ffcf99',
}

/**
 * Medal gradients for competition results.
 * Each entry is [fromColour, toColour] and renders as a vertical gradient bar.
 */
export const MEDALS = {
  gold: ['#EBB512', '#FFE39B'],
  silver: ['#D9D9D9', '#E8E8E8'],
  bronze: ['#EB8612', '#FFCD95'],
  other: ['#9747FF', '#CDA6FF'],
}

/**
 * Sponsor tier accent colours, keyed by tier id.
 * Adding a tier here is not enough; see src/content/sponsors.ts.
 */
export const TIER_COLORS = {
  platinum: '#e5e7eb',
  gold: '#fbbf24',
  silver: '#9ca3af',
  bronze: '#f79900',
}

/**
 * Fonts. The two display faces are loaded from src/app/fonts/ via @font-face
 * in globals.css; the body face is loaded by next/font in the root layout.
 */
export const FONTS = {
  display: 'Bebas',
  accent: 'Hemi Head',
}
