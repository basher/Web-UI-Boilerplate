import { defineConfig, globalIgnores } from 'eslint/config';
import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({
    baseDirectory: __dirname,
    resolvePluginsRelativeTo: __dirname,
});

export default defineConfig([
    globalIgnores(['stories', 'public']),

    {
        // See https://eslint.org/docs/latest/use/configure/language-options.
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                ...globals.node,
                ...globals.jest,
            },

            parser: tsParser, // Replaces deprecated babel-eslint.
            ecmaVersion: 'latest',
            sourceType: 'module',

            parserOptions: {
                requireConfigFile: false, // Fix eslint "no babel config" error.
            },
        },

        extends: compat.extends(
            'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin.
            'plugin:storybook/recommended',
            'prettier', // Enables eslint-config-prettier. Make sure this is always the last configuration in extends.
        ),

        plugins: {
            prettier: prettier,
        },

        rules: {
            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto',
                },
            ],

            '@typescript-eslint/explicit-function-return-type': 1,
            '@typescript-eslint/no-explicit-any': 1,
            'no-console': 1,

            'lines-between-class-members': [
                'error',
                'always',
                {
                    exceptAfterSingleLine: true,
                },
            ],
        },
    },
]);
