/* eslint-disable no-dupe-keys */
// eslint-disable-next-line no-undef
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        alias: {
          '~': './src',
          view: './src/view',
        },
      },
    ],
  ],
};
