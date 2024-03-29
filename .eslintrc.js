'use-strict';

/* eslint-env node */

/** @typedef {import('eslint').Linter.Config} Config */

/** @type {Config} */
const config = {
  ignorePatterns: ['dist/*', 'node_modules/*', '.next/*',],
  overrides: [
    {
      files: ['*.js', '*.jsx',],
      'rules': {
        // doesn't work on .js files
        '@typescript-eslint/explicit-module-boundary-types': ['off',],
      },
    },
  ],
  env: {
    // chose which are appropriate
    'browser': true,
    'node': true,

    'es2021': true,
    'jest': true,
  },
  extends: [
    // 'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'eslint:recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2021,
    'sourceType': ['module', 'commonjs',],
    'ecmaFeatures': {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'indent': ['error', 2, ],
    'linebreak-style': ['error', 'unix',],
    'quotes': ['error', 'single',],
    'semi': ['error', 'always',],
    'comma-dangle': ['error', {
      'functions': 'only-multiline',
      'objects': 'always',
      'arrays': 'always',
    },],
    'prefer-arrow-callback': ['off',],
    'max-len': ['error', { code: 120, },],
    'eqeqeq': ['error', 'smart',],
    'no-trailing-spaces': ['error',],
    'no-unused-vars': ['off',], // favour typescript's no-unused-vars
    'no-undef': ['off',], // favour typescript
    'no-redeclare': ['off',], // favour typescript
    'no-dupe-class-members': ['off',], // favour typescript
    '@typescript-eslint/ban-ts-comment': ['off',],
    '@typescript-eslint/no-non-null-assertion': ['off',],
    '@typescript-eslint/no-this-alias': ['off',],
    '@typescript-eslint/no-empty-interface': ['off',],
    '@typescript-eslint/no-unused-vars': ['off',],
    '@typescript-eslint/explicit-module-boundary-types': ['off',],
    'import/no-anonymous-default-export': ['off',],
  },
};

module.exports = config;
