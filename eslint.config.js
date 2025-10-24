import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import pathPlugin from 'eslint-plugin-path';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

export default tseslint.config([globalIgnores(['dist']), {
  files: ['**/*.{ts,tsx}'],
  extends: [
    js.configs.recommended,
    tseslint.configs.recommended,
    reactHooks.configs['recommended-latest'],
    reactRefresh.configs.vite,
  ],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },

  plugins: {
    'unused-imports': unusedImports,
    'path': pathPlugin,
    'simple-import-sort': simpleImportSort
  },

  rules: {
    'semi': ['warn', 'always'],
    '@next/next/no-img-element': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'jsx-quotes': ['error', 'prefer-double'],

    'quotes': ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],

    'simple-import-sort/imports': ['warn', {
      groups: [
        // Side effect imports (css, etc)
        ['^\\u0000'],

        // React / next firts
        ['^(react|next)$', '^@?\\w'],

        // Packages
        ['^@?\\w', '^(?![^/]+\\.)'],

        // Absolute imports
        ['^~'],

        // Relative imports
        ['^\\./'],

        // CSS modules
        ['^.+\\.(module.css|module.scss)$'],

        // Media imports
        ['^.+\\.(gif|png|svg|jpg)$'],
      ],
    }],

    'path/no-relative-imports': ['error', {
      maxDepth: 0,
    }],
  }
},
])
