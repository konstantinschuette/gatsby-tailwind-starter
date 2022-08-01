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
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
    'array-element-newline': [
      'error',
      'always',
      {
        minItems: 2,
      },
    ],
    'array-bracket-newline': [
      'error',
      { minItems: 2 },
    ],
    'react/jsx-max-props-per-line': [
      'error',
      { maximum: 1 },
    ],
    'linebreak-style': 0,
  },
};
