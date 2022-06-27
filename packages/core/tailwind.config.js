const {themeConfig} = require('./lib/theme/config');
module.exports = {
  content: [
    '../core/src/components/**/*.{ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      ...themeConfig.theme,
    },
  },
  plugins: [],
};
