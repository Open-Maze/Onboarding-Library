
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
        41: '41',
      },
      colors: {
        gray: {
          DEFAULT: 'var(--ol-color-gray)',
          dark: 'var(--ol-color-gray-dark)',
        },
        primary: {
          DEFAULT: 'var(--ol-color-primary)',
          lighter: 'var(--ol-color-primary-lighter)',
          darker: 'var(--ol-color-primary-darker)',
        },
        secondary: 'var(--ol-color-secondary)',
        background: 'var(--ol-color-background)',
      },
      fontFamily: {
        sans: ['Poppins'],
        heading: ['Manrope'],
      },
    },
  },
  plugins: [],
};