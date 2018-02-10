// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'indent': ['warn', 4],
    'no-console': 0,
    'no-unused-vars': [
      'warn'
    ],
    'quotes': [
      'error',
      'single'
    ],
    // 'semi': [
    //   'error',
    //   'always'
    // ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
