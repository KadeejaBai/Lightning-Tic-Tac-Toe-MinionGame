const warnLevel = 1;
const errorLevel = 2;
module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'globals': {
    'window': true,
    'define': true,
    'require': true,
    'module': true,
    'lng': true,  // Lightning framework
  },
  'extends': 'eslint:recommended',
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'es6': true,
    },
    'sourceType': 'module'
  },
  'rules': {
    // 'off' or 0 - turn rule off
    // 'warn' or 1 - turn rule on as a warning (doesn’t affect exit code)
    // 'error' or 2 - turn rule on as an error (exit code is 1 when triggered)
    'no-unused-vars' : warnLevel,
    'no-console': warnLevel,
    'no-undef': warnLevel,
    'indent': [errorLevel, 2],
    'linebreak-style': [errorLevel, 'unix'],
    'quotes': [errorLevel, 'single'],
    'semi': [errorLevel, 'always'],
    'spaced-comment': [errorLevel, 'always'], // require space at start of comment
    'array-bracket-spacing': [errorLevel, 'always'], // require space inside array
    'space-before-blocks': [errorLevel, 'always'],
    'object-curly-spacing': [errorLevel, 'always'], // add spacing inside braces
    'keyword-spacing': [errorLevel, { 'before': true, 'after': true }],
    'indent': [errorLevel, 2, { 'SwitchCase': 1 }],
    'key-spacing': [errorLevel, { 'afterColon': true }],
    'no-multiple-empty-lines': [errorLevel, { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }],
    'no-debugger': warnLevel,
    'space-in-parens': [errorLevel, 'never'],
    'space-before-blocks': [errorLevel, 'always'],
    'space-infix-ops': ['error', {'int32Hint': false}]
  }
};