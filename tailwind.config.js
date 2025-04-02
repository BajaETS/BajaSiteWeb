/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      bebas: ['Bebas', 'sans-serif'],
      hemi: ['Hemi Head', 'sans-serif'],
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
        'sideways-rl': 'sideways-rl', // Added sideways-rl
        'sideways-lr': 'sideways-lr', // Added sideways-lr
      },
      fontSize: {
        'xxs': '0.5rem', // Custom xxs text size (8px)
        'xxxs': '0.375rem', // Custom xxxs text size (6px)
        'xxxxs': '0.25rem', // Custom xxxx text size (4px)
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translate(-50%, 5px)' },
          '100%': { opacity: 1, transform: 'translate(-50%, 0px)' },
        },
      },
      margin: {
        nav: '115px',
      },
      colors: {
        primary: '#089CE4',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.writing-mode-horizontal-tb': {
            'writing-mode': 'horizontal-tb',
          },
          '.writing-mode-vertical-rl': {
            'writing-mode': 'vertical-rl',
          },
          '.writing-mode-vertical-lr': {
            'writing-mode': 'vertical-lr',
          },
          '.writing-mode-sideways-rl': {  // Added class for sideways-rl
            'writing-mode': 'sideways-rl',
          },
          '.writing-mode-sideways-lr': {  // Added class for sideways-lr
            'writing-mode': 'sideways-lr',
          },
          '.text-orientation-mixed': {
            'text-orientation': 'mixed',
          },
          '.text-orientation-upright': {
            'text-orientation': 'upright',
          },
          '.text-orientation-sideways': {
            'text-orientation': 'sideways',
          },
          '.text-orientation-sideways-right': {
            'text-orientation': 'sideways-right',
          },
          '.text-orientation-use-glyph-orientation': {
            'text-orientation': 'use-glyph-orientation',
          },
        },
        ['responsive', 'hover'],
      );
    },
  ],
};
