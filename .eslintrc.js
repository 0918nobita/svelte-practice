module.exports = {
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    ignorePatterns: ['node_modules', 'public'],
    overrides: [
        {
            files: ['*.ts', '*.svelte'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: ['./tsconfig.json'],
                extraFileExtensions: ['.svelte'],
            },
            plugins: ['@typescript-eslint'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
        },
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3',
            plugins: ['svelte3', '@typescript-eslint'],
        },
    ],
    settings: {
        'svelte3/typescript': true,
    },
};
