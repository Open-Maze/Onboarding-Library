import plugin from 'tailwindcss/plugin';

interface ColorConfig {
  colors?: Record<string, string>;
}

const colorConfigPlugin = plugin.withOptions<ColorConfig>(
  (options) => {
    return ({ addUtilities, theme }) => {
      const userColors = options?.colors || {};
      const colors = { ...theme('colors'), ...userColors } as Record<
        string,
        string
      >;

      const newUtilities = Object.keys(colors).reduce(
        (acc, key) => {
          acc[`.bg-${key}`] = { backgroundColor: colors[key] };
          acc[`.text-${key}`] = { color: colors[key] };
          acc[`.border-${key}`] = { borderColor: colors[key] };
          return acc;
        },
        {} as Record<string, any>
      );

      addUtilities(newUtilities);
    };
  },
  (options) => {
    return {
      theme: {
        extend: {
          colors: options?.colors || {
            // Default colors can be defined here
            primary: '#1da1f2',
            secondary: '#14171a',
            danger: '#e0245e',
          },
        },
      },
    };
  }
);

export default colorConfigPlugin;
