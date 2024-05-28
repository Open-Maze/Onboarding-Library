const colorConfigPlugin = require('./lib/TailwindPlugin.ts').default;

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
        gray: {
          DEFAULT: '#E6E6E6',
          dark: '#797979',
        },
        primary: '#8c1cec',
        secondary: '#39cfe8',
        background: '#F4F4F4',
      },
      fontFamily: {
        sans: ['Poppins'],
        heading: ['Manrope'],
      },
    },
  },
  plugins: [
    colorConfigPlugin({
      colors: {
        primary: '#fcba03',
        secondary: '#00ff00',
        danger: '#0000ff',
        customColor: '#f0f0f0',
      },
    }),
  ],
};
