module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"react-app",
		"prettier",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended",
	],
	plugins: ["prettier"],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		"prettier/prettier": [
			"error",
			{
				semi: true,
				trailingComma: "all",
				singleQuote: false,
				printWidth: 100,
				tabWidth: 4,
				endOfLine: "auto",
				useTabs: true,
			},
		],
		"arrow-body-style": "off",
		"prefer-arrow-callback": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
