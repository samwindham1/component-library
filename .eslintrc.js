module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier',
        'plugin:prettier/recommended'
    ],
    plugins: ['react'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        sourceType: 'module',
        ecmaVersion: 2020
    },
    env: {
        browser: true,
        amd: true,
        node: true
    },
    rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': ['off'],
        '@typescript-eslint/no-var-requires': 'off'
    }
};
