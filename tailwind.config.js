/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Reference the llibrary only
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        innercard: '0px 2px 4px 0px rgba(0,0,0,0.25)',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'var(--font-manrope)',
            },
            h2: {
              fontFamily: 'var(--font-manrope)',
            },
            h3: {
              fontFamily: 'var(--font-manrope)',
            },
            h4: {
              fontFamily: 'var(--font-manrope)',
            },
            h5: {
              fontFamily: 'var(--font-manrope)',
            },
            h6: {
              fontFamily: 'var(--font-manrope)',
            },
          },
        },
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '375px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
      colors: {
        transparent: 'transparent',
        lightgrey: '#F4F4F5',
        current: 'currentColor',
        dark: '#222222',
        'dark-gray': '#505050',
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
  darkMode: 'class',
  plugins: [],
};
