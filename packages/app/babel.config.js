module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          navigation: './packages/app/src/navigation',
          screens: './packages/app/src/screens',
        },
        extensions: ['.tsx', '.ts'],
      },
    ],
  ],
};
