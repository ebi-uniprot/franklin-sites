import { defineConfig } from 'eslint/config';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import reactPlugin from '@eslint-react/eslint-plugin';

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

    extends: [
      ...compat.extends(
        'airbnb-base',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:storybook/recommended'
      ),
      reactPlugin.configs['recommended-typescript'],
    ],

    plugins: {
      '@typescript-eslint': typescriptEslint,
      'react-hooks': reactHooks,
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

      // react-hooks plugin handles these; disable the @eslint-react duplicates
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@eslint-react/rules-of-hooks': 'off',
      '@eslint-react/exhaustive-deps': 'off',

      // useless-fragment replaces react/jsx-no-useless-fragment
      '@eslint-react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

      // Rules that are too prescriptive or not applicable for this codebase
      '@eslint-react/error-boundaries': 'off',
      '@eslint-react/no-array-index-key': 'off',
      '@eslint-react/no-context-provider': 'off',
      '@eslint-react/no-forward-ref': 'off',
      '@eslint-react/no-unnecessary-use-prefix': 'off',
      '@eslint-react/no-use-context': 'off',
      '@eslint-react/purity': 'off',
      '@eslint-react/rsc-function-definition': 'off',
      '@eslint-react/set-state-in-effect': 'off',
      '@eslint-react/use-memo': 'off',
      '@eslint-react/use-state': 'off',

      // was off in eslint-config-airbnb; autoFocus is intentional in some components
      'jsx-a11y/no-autofocus': 'off',

      // Children.toArray/map are still the right tool for opaque children props;
      // replacing them requires an API change (children: ReactNode[]) — revisit later
      '@eslint-react/no-children-to-array': 'off',
      '@eslint-react/no-children-map': 'off',
    },
  },
]);
