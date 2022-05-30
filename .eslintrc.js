module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaVersion: 12,
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	plugins: ['react', '@typescript-eslint', 'unused-imports'],
	ignorePatterns: ['build'],
	rules: {
		'@typescript-eslint/no-unsafe-member-access': 'error',
		'react/prop-types': 'off',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'import/prefer-default-export': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{ vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
		],
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.jsx', '.tsx'],
			},
		],
		'react/react-in-jsx-scope': 'off',
	},
};
