/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const {getDefaultConfig, mergeConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts},
  } = await getDefaultConfig();
  return {
    projectRoot: path.resolve(__dirname, '../../'),
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
      resolver: {
        sourceExts: [...sourceExts, 'cjs'],
      },
    },
  };
})();
