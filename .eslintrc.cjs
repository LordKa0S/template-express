/* eslint-env node */
module.exports = {
    env: {
        'es2021': true,
        'node': true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        indent: [
            'error',
            2,
            {
                SwitchCase: 1
            }
        ],
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'always'
        ]
    }
};
