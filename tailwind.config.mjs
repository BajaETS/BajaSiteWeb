import { COLORS, FONTS } from './src/theme/tokens.mjs'

/** Turn '#ff0200' into 'rgba(255, 2, 0, <alpha>)' so tokens can drive shadows and glows. */
function rgba(hex, alpha) {
  const n = parseInt(hex.slice(1), 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`
}

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      bebas: [FONTS.display, 'sans-serif'],
      hemi: [FONTS.accent, 'sans-serif'],
    },
    extend: {
      textOrientation: {
        mixed: 'mixed',
        upright: 'upright',
        sideways: 'sideways',
        'sideways-right': 'sideways-right',
        'use-glyph-orientation': 'use-glyph-orientation',
      },
      writingMode: {
        'horizontal-tb': 'horizontal-tb', // default
        'vertical-rl': 'vertical-rl',
        'vertical-lr': 'vertical-lr',
        'sideways-rl': 'sideways-rl',
        'sideways-lr': 'sideways-lr',
      },
      fontSize: {
        xxs: '0.5rem', // 8px
        xxxs: '0.375rem', // 6px
        xxxxs: '0.25rem', // 4px
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in forwards',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translate(-50%, 5px)' },
          '100%': { opacity: 1, transform: 'translate(-50%, 0px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: `0 0 20px 0px ${rgba(COLORS.orange, 0.4)}` },
          '50%': { boxShadow: `0 0 30px 5px ${rgba(COLORS.orange, 0.6)}` },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      margin: {
        nav: '115px',
      },
      colors: {
        // Every colour on the site comes from src/theme/tokens.mjs.
        // `primary` is the Baja red and is used site-wide.
        primary: COLORS.red,
        brand: {
          red: COLORS.red,
          'red-dark': COLORS.redDark,
          'red-light': COLORS.redLight,
          orange: COLORS.orange,
          'orange-light': COLORS.orangeLight,
          'orange-pale': COLORS.orangePale,
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.writing-mode-horizontal-tb': { 'writing-mode': 'horizontal-tb' },
          '.writing-mode-vertical-rl': { 'writing-mode': 'vertical-rl' },
          '.writing-mode-vertical-lr': { 'writing-mode': 'vertical-lr' },
          '.writing-mode-sideways-rl': { 'writing-mode': 'sideways-rl' },
          '.writing-mode-sideways-lr': { 'writing-mode': 'sideways-lr' },
          '.text-orientation-mixed': { 'text-orientation': 'mixed' },
          '.text-orientation-upright': { 'text-orientation': 'upright' },
          '.text-orientation-sideways': { 'text-orientation': 'sideways' },
          '.text-orientation-sideways-right': { 'text-orientation': 'sideways-right' },
          '.text-orientation-use-glyph-orientation': { 'text-orientation': 'use-glyph-orientation' },
        },
        ['responsive', 'hover'],
      )
    },
  ],
}

export default config
