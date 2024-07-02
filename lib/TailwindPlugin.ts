import plugin from 'tailwindcss/plugin';
import { PluginOptions } from './types';

// Define default colors to simplify the management of default values
const defaultColors = {
  primary: '#8c1cec',
  secondary: '#39cfe8',
  gray: '#e6e6e6',
  grayDark: '#797979',
  background: '#f4f4f4',
};

const OnboardingLibrary = plugin.withOptions<PluginOptions>((options = {}) => {
  return ({ addComponents }) => {
    // Merge default colors with provided options
    const finalOptions = {
      colors: { ...defaultColors, ...options.colors },
    };

    // Destructure with defaults directly from finalOptions
    const { colors } = finalOptions;

    // Add CSS variables to the root element using the simplified object
    addComponents({
      ':root': {
        '--ol-color-primary': colors.primary,
        '--ol-color-secondary': colors.secondary,
        '--ol-color-gray': colors.gray,
        '--ol-color-gray-dark': colors.grayDark,
        '--ol-color-background': colors.background,
      },
    });
  };
});

export default OnboardingLibrary;
