module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'arrow-parens': 0,
    'react/destructuring-assignment': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
  },
  globals: {
    document: 1,
  },
  parser: 'babel-eslint',
  env: {
    browser: 1,
  }
};
