import { defineConfig } from 'eslint/config';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import { fixupPluginRules } from '@eslint/compat';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
// Needed because of the plugins we use. If they support the "flat config"
// format now then we should use it, but check one by one and while doing so
// maybe re-evaluate if actually needed of if better plugins/presets exist
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  // global ignores (apply to every config that follows)
  {
    ignores: ['storybook-static/**', 'dist/**', 'coverage/**'],
  },
  {
    files: ['{src,stories}/**/*.{ts,tsx}'],
    ignores: ['storybook-static/**', 'dist/**'],

    extends: compat.extends(
      'airbnb',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:storybook/recommended'
    ),

    plugins: {
      '@typescript-eslint': typescriptEslint,
      'react-hooks': fixupPluginRules(reactHooks),
    },

    languageOptions: {
      globals: { ...globals.browser, ...globals.jest },

      parser: tsParser,
      sourceType: 'module',

      parserOptions: { project: './tsconfig.json' },
    },

    settings: {
      'import/core-modules': ['storybook/test'],

      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] },
      },
    },

    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
      ],

      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/prefer-interface': 'off',
      'implicit-arrow-linebreak': 'off',
      'import/extensions': 'off',

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '.storybook/**',
            'stories/**',
            './src/addons/**',
            '**/*.spec.*',
            './src/mock-data/**',
          ],
        },
      ],

      'jest/no-mocks-import': 'off',

      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['to', 'hrefLeft', 'hrefRight'],
          aspects: ['noHref', 'invalidHref', 'preferButton'],
        },
      ],

      'no-restricted-syntax': 'off',
      'no-shadow': 'off',
      'no-use-before-define': 'off',

      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],

      'react/jsx-filename-extension': 'off',
      'react/jsx-one-expression-per-line': 'off',

      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

      'react/jsx-props-no-spreading': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-wrap-multilines': 'off',
      'react/no-did-update-set-state': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]);
