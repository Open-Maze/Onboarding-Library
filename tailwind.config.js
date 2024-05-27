/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Reference the library only
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: 'ol-',
  theme: {
    extend: {
      zIndex: {
        100: '100',
        99: '99',
      },
      colors: {
        lightgrey: '#F4F4F5',
        current: 'currentColor',
        dark: '#222222',
        gray: {
          DEFAULT: '#E6E6E6',
          dark: '#797979',
        },
        primary: {
          DEFAULT: '#8c1cec',
          lighter: '#dcbaf9',
          darker: '#841be0',
        },
        secondary: '#39cfe8',
        'slate-gray': '#A1A1AA',
        bleach: '#f6f6f6',
        'light-gray': '#c9c9c9',
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
        heading: ['var(--font-manrope)'],
      },
    },
  },
  plugins: [],
};
