/* eslint-disable no-undef */
module.exports = {
  extends: ['prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'avoid',
        semi: true,
        // bracketSameLine: true,
        // bracketSpacing: false,
        singleQuote: true,
        trailingComma: 'all',
        endOfLine: 'lf',
        tabWidth: 2,
        printWidth: 120,
        jsxSingleQuote: true,
      },
    ],
  },
};
