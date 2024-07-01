/** @type {import('tailwindcss').Config} */

// New configurable variables should be implemented in the tailwind plugin for library users to be able to customize them.
// They should also be added to the variables.css file in the storybook folder so that they will also be applied during development
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
};
