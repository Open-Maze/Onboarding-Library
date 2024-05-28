import plugin from 'tailwindcss/plugin';
import { CSSRuleObject, CustomThemeConfig } from 'tailwindcss/types/config';

interface ColorConfig {
  colors?: Record<string, string>;
  spacing?: Record<string, string>;
}

function createColorUtilities(
  theme: <
    TDefaultValue = Partial<
      CustomThemeConfig & { extend: Partial<CustomThemeConfig> }
    >,
  >(
    path?: string | undefined,
    defaultValue?: TDefaultValue | undefined
  ) => TDefaultValue,
  options: ColorConfig
) {
  const colors = { ...theme('colors'), ...options.colors };

  const newColorUtilities = Object.keys(colors).reduce(
    (acc, key) => {
      acc[`.bg-${key}`] = { backgroundColor: colors[key] };
      acc[`.text-${key}`] = { color: colors[key] };
      acc[`.border-${key}`] = { borderColor: colors[key] };
      return acc;
    },
    {} as Record<string, CSSRuleObject>
  );

  return newColorUtilities;
}

const OnboardingLibrary = plugin.withOptions<ColorConfig>(
  (options) => {
    return ({ addUtilities, theme }) => {
      const newColorUtilities = createColorUtilities(theme, options);
      addUtilities(newColorUtilities);
    };
  },
  (options) => {
    return {
      theme: {
        extend: {
          colors: {
            primary: options.colors?.primary || '#8c1cec',
            secondary: options.colors?.secondary || '#39cfe8',
            gray: options.colors?.gray || '#E6E6E6',
            'gray-dark': options.colors?.['gray-dark'] || '#797979',
            background: options.colors?.background || '#F4F4F4',
          },
        },
      },
    };
  }
);

export default OnboardingLibrary;
