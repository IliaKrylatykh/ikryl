module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
	rules: {
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		indent: [2, 'tab'],
		'no-tabs': 'off',
		semi: 0,
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.tsx'] },
		],
		'max-len': [
			'warn',
			{
				ignoreComments: true,
				code: 100,
			},
		],
		'linebreak-style': 'off',
		'operator-linebreak': 'off',
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'react/prop-types': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off',
		'jsx-quotes': [2, 'prefer-single'],
		'react/no-unescaped-entities': 'off',
		'arrow-parens': 'off',
		'comma-dangle': 'off',
		'no-console': 'off',
		'arrow-body-style': [0, 'as-needed'],
		'react/jsx-wrap-multilines': 'off',
		'object-curly-newline': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'no-param-reassign': 'off',
		'i18next/no-literal-string': [
			'warn',
			{
				markupOnly: true,
				ignoreAttribute: ['data-testid', 'to'],
			},
		],
	},
	globals: {
		__IS_DEV__: true,
	},
	overrides: [
		{
			files: ['**/src/**/*.test.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 'off',
			},
		},
		{
			files: ['src/**/*.test.{ts,tsx}', 'config/**/*{ts,tsx}'],
			rules: {
				'import/no-extraneous-dependencies': 'off',
			},
		},
	],
}
