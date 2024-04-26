/* eslint-disable id-length */
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin', 'deprecation', 'ordered-imports', 'jest', 'unicorn'],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:ordered-imports/recommended',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'prettier',
    ],
    parserOptions: {
        project: true,
        sourceType: 'module',
    },
    rules: {
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/ban-tslint-comment': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'explicit',
                overrides: {
                    constructors: 'no-public',
                    accessors: 'off',
                },
            },
        ],
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_.*$|next$',
                varsIgnorePattern: '^_.*$',
            },
        ],
        '@typescript-eslint/no-var-requires': 'error',
        'arrow-parens': ['error', 'as-needed'],
        'arrow-body-style': 'error',
        'prefer-arrow/prefer-arrow-functions': 'off',
        'id-length': ['error', { max: 40, min: 1 }],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                // Do not use the "I" prefix on interface names: https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#names
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^(?![I][A-Z])[A-Za-z]{0,50}$',
                    match: true,
                },
            },
        ],
        '@typescript-eslint/member-ordering': 'off',
        eqeqeq: 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        'space-infix-ops': 'error',
        '@typescript-eslint/no-unused-expressions': [
            'error',
            {
                allowTernary: true,
            },
        ],
        'no-underscore-dangle': 'error',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/ban-types': 'error',
        'comma-dangle': [
            'error',
            {
                objects: 'always-multiline',
                arrays: 'always-multiline',
                functions: 'never',
                imports: 'always-multiline',
            },
        ],
        'max-len': [
            'error',
            {
                code: 160,
            },
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                max: 2,
            },
        ],
        'no-template-curly-in-string': 'error',
        'prefer-const': [
            'error',
            {
                destructuring: 'all',
            },
        ],
        'id-blacklist': 'error',
        'object-curly-spacing': ['error', 'always'],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
                allowDirectConstAssertionInArrowFunctions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: false,
            },
        ],
        '@typescript-eslint/explicit-module-boundary-types': [
            'error',
            {
                allowArgumentsExplicitlyTypedAsAny: true,
                allowDirectConstAssertionInArrowFunctions: true,
                allowedNames: [],
                allowHigherOrderFunctions: true,
                allowTypedFunctionExpressions: true,
            },
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-inferrable-types': [
            'error',
            {
                ignoreParameters: true,
            },
        ],
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/prefer-as-const': 'error',
        'no-console': 'error',
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        'quote-props': ['error', 'as-needed'],
        'eol-last': ['error', 'always'],
        semi: 'error',
        indent: [
            'error',
            2,
            {
                SwitchCase: 1,
            },
        ],
        '@typescript-eslint/indent': [
            'error',
            2,
            {
                SwitchCase: 1,
                ignoredNodes: ['TSTypeParameterInstantiation', 'TSUnionType', 'MethodDefinition > FunctionExpression Decorator'],
                FunctionDeclaration: {
                    parameters: 'first',
                },
                FunctionExpression: {
                    parameters: 'first',
                },
            },
        ],
        'deprecation/deprecation': 'warn',
        'keyword-spacing': 'error',
        'space-before-blocks': 'error',
        'arrow-spacing': 'error',
        'no-confusing-arrow': 'error',
        curly: ['error', 'all'],
        'jest/no-standalone-expect': [
            'error',
            {
                additionalTestBlockFunctions: ['test.failing', 'it.failing', 'test.failing.each', 'it.failing.each'],
            },
        ],
        'unicorn/filename-case': ['warn', { case: 'kebabCase' }],
        '@typescript-eslint/no-floating-promises': 'error',
    },
    env: {
        node: true,
        jest: true,
    },
};
