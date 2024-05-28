import OnboardingLibrary from './lib/TailwindPlugin.ts';

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
      fontFamily: {
        sans: ['Poppins'],
        heading: ['Manrope'],
      },
    },
  },
  plugins: [
    OnboardingLibrary({
      colors: {
        primary: '#fcba03',
        secondary: '#00ff00',
        background: '#3a5da0',
        'gray-dark': '#333333',
      },
    }),
  ],
};
