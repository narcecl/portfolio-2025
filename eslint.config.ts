// @ts-check
import js from '@eslint/js';
// @ts-ignore - Plugin types are complex
import tsParser from '@typescript-eslint/parser';
// @ts-ignore - Plugin types are complex
import tsPlugin from '@typescript-eslint/eslint-plugin';
// @ts-ignore - Plugin types are complex
import astroPlugin from 'eslint-plugin-astro';
// @ts-ignore - Plugin types are complex
import astroParser from 'astro-eslint-parser';
// @ts-ignore - Plugin types are complex
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
const config = [
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
            // @ts-ignore - Astro plugin config structure
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

export default config;
