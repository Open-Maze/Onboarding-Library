import plugin from 'tailwindcss/plugin';
import { CSSRuleObject, CustomThemeConfig } from 'tailwindcss/types/config';

interface ColorConfig {
  colors?: Record<string, string>;
  spacing?: Record<string, string>;
}

const prefix = 'ol-';

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
      acc[`.${prefix}bg-${key}`] = { backgroundColor: colors[key] };
      acc[`.${prefix}text-${key}`] = { color: colors[key] };
      acc[`.${prefix}border-${key}`] = { borderColor: colors[key] };
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
    const colorChecker = (property: string, value: string) => {
      return options.colors ? options.colors[property] : value;
    };
    return {
      theme: {
        extend: {
          colors: {
            primary: colorChecker('primary', '#8c1cec'),
            secondary: colorChecker('secondary', '#39cfe8'),
            gray: colorChecker('gray', '#E6E6E6'),
            'gray-dark': colorChecker('gray-dark', '#797979'),
            background: colorChecker('background', '#F4F4F4'),
          },
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
    };
  }
);

export default OnboardingLibrary;
