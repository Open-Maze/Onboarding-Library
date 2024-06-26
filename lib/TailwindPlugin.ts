import plugin from 'tailwindcss/plugin';
import { PluginOptions } from './types';

const OnboardingLibrary = plugin.withOptions<PluginOptions>(
  // The first function is called when the plugin is initialized
  (options = {}) => {
    // Return a function that Tailwind CSS will call to register the plugin
    return ({ addComponents }) => {
      // Merge user-provided options with the default options
      const finalOptions = {
        ...options,
        colors: {
          ...options.colors,
        },
      };

      // Ensure that colors are always defined by providing default values
      const {
        primary,
        primaryLighter,
        primaryDarker,
        secondary,
        gray,
        grayDark,
        background,
      } = finalOptions.colors || {};

      // Add CSS variables to the root element
      addComponents({
        ':root': {
          '--ol-color-primary': primary || '#8c1cec',
          '--ol-color-primary-lighter': primaryLighter || '#dcbaf9',
          '--ol-color-primary-darker': primaryDarker || '#841be0',
          '--ol-color-secondary': secondary || '#39cfe8',
          '--ol-color-gray': gray || '#e6e6e6',
          '--ol-color-gray-dark': grayDark || '#797979',
          '--ol-color-background': background || '#f4f4f4',
        },
      });
    };
  }
);

export default OnboardingLibrary;
