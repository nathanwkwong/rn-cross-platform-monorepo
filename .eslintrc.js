module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier', 'prettier/react'],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'error',
  },
}
