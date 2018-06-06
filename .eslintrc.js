module.exports = {
  "parserOptions": {
    "ecmaVersion": "6",
    "sourceType": "module"
  },
  "env": {
    "node": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-empty": "error",
    "no-multiple-empty-lines": "warn",
    "no-var": "error",
    "prefer-const": "error",
    "quotes": ["error", "single"],
    "indent": ["error", 2],
    "no-unused-vars": "error",
    "keyword-spacing": 2,
    "space-before-function-paren": ["error", "never"],
    "eqeqeq": ["error", "always"]
  }
};
