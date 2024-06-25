import plugin from 'tailwindcss/plugin';

interface TailwindPluginConfig {
  colors: {
    primary?: string;
    secondary?: string;
    gray?: string;
    'gray-dark'?: string;
    background?: string;
  };
}

interface CSSUpdateInterface {
  variableName: string;
  variableType: string;
  newValue: string;
}

function updateCSSVariables({
  variableName,
  variableType,
  newValue,
}: CSSUpdateInterface) {
  const root = document.documentElement;
  const fullVariableName = `--ol-${variableType}-${variableName}`;

  root.style.setProperty(fullVariableName, newValue);
}

function loopThroughColors(colors: TailwindPluginConfig['colors']) {
  const colorKeys: (keyof TailwindPluginConfig['colors'])[] = [
    'primary',
    'secondary',
    'gray',
    'gray-dark',
    'background',
  ];

  colorKeys.forEach((color) => {
    if (colors && colors[color]) {
      updateCSSVariables({
        variableName: color,
        variableType: 'color',
        newValue: colors[color] as string, // Type assertion
      });
    }
  });
}

const OnboardingLibrary = plugin.withOptions<TailwindPluginConfig>(
  (options) => {
    return () => {
      if (options.colors) {
        loopThroughColors(options.colors);
      }
    };
  }
);

export default OnboardingLibrary;
