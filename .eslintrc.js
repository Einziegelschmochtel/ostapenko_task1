module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/button-has-type': 'off',
    'no-unused-vars': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
  },
};
