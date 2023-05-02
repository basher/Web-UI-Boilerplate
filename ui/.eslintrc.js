module.exports = {
    env: {
        browser: true,
        es6: true,
        commonjs: true,
        node: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser', // Replaces deprecated babel-eslint.
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin.
        'prettier', // Enables eslint-config-prettier. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        requireConfigFile: false, // Fix eslint "no babel config" error.
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['prettier'], // Uses eslint-plugin-prettier.
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
            { 'exceptAfterSingleLine': true }
        ]
    },
}
