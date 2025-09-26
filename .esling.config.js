import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import astroPlugin from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            'jsx-a11y': jsxA11yPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            ...jsxA11yPlugin.configs.recommended.rules,
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    },
    {
        files: ['**/*.astro'],
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
        },
        plugins: {
            astro: astroPlugin,
        },
        rules: {
            ...astroPlugin.configs.recommended.rules,
        },
    },
    {
        ignores: [
            'node_modules/**',
            'dist/**',
            '.astro/**',
            '.vercel/**',
            '*.config.js',
            '*.config.mjs',
            '*.config.ts',
            '.env*',
            '*.log',
            'package-lock.json',
            'yarn.lock',
            'pnpm-lock.yaml',
        ],
    },
];
