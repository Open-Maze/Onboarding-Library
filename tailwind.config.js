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
          DEFAULT: '#E6E6E6',
          dark: '#797979',
        },
        primary: {
          DEFAULT: '#8c1cec',
          lighter: '#dcbaf9',
          darker: '#841be0',
        },
        secondary: '#39cfe8',
        background: '#F4F4F4',
      },
      fontFamily: {
        sans: ['Poppins'],
        heading: ['Manrope'],
      },
    },
  },
  plugins: [],
};
