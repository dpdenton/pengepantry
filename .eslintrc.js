module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-shadow': 'off',
        'no-undef': 'off',
        'import/no-cycle': 'error',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': 0,
      },
    },
  ],
};
