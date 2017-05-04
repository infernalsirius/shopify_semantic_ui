module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:shopify/core',
  ],

  parser: 'babel-eslint',

  env: {
    browser: true,
    jquery: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },

  plugins: [
    'babel',
    'promise',
    'sort-class-members',
    'import',
  ],

  settings: {
    'import/ignore': [
      'node_modules',
      '\\.s?css',
    ],
  },
  rules: {
    'shopify/jquery-dollar-sign-reference': 0,
    "no-undef": 0,
    "no-warning-comments": 0,
  },
  "globals": {
        "$": true,
        "visit": true,
        "andThen": true,
        "find": true,
        "findWithAssert": true,
        "click": true,
        "triggerEvent": true,
        "wait": true,
        "ok": true,
        "equal": true,
        "notEqual": true,
        "deepEqual": true,
        "strictEqual": true,
        "throws": true,
        "fillIn": true,
        "exists": true,
        "currentPath": true,
        "currentURL": true,
        "currentRouteName": true,
        "breadcrumbValidator": true,
        "renderProfiler": true,
        "expect": true,
        "_": true,
        "test": true,
        "module": true,
        "YAMP": true,
        "App": true
    }
};
