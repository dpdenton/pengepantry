const config = {
  theme: {
    colors: {
      primary: '#E78C4B',
      'primary-inverse': 'white',
      'primary-light': '#FFECD0',
      'primary-light-inverse': 'black',
      action: {
        positive: '#E78C4B',
        'positive-inverse': 'white',
      },
    },
  },
};

type ThemeConfig = typeof config;
export const themeConfig: ThemeConfig = config;
