/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
    jest: {
      version: 'latest',
    },
  },
  plugins: ['react', '@typescript-eslint', 'react-native', 'import'],
  rules: {
    'import/prefer-default-export': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/no-color-literals': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.tsx'],
      },
    ],
    'import/no-unresolved': ['error', { commonjs: true, amd: true }],
    'import/named': 'error',
    'import/namespace': 'error',
    camelcase: ['error', { ignoreImports: true }],
    'import/default': 'error',
    'import/no-duplicates': 'error',
    'import/export': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'prefer-arrow-callback': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
    // react native rules
    'react-native/no-raw-text': 'off',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'warn',
    'react-native/no-single-element-style-arrays': 'error',
    'react/no-unstable-nested-components': 'warn',
    'no-param-reassign': ['error', { props: false }],
  },
  globals: {
    JSX: true,
    window: true,
    fetch: true,
  },
}
