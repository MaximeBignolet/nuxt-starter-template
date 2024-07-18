import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
).override('nuxt/stylistic', {
	rules: {
		'@stylistic/no-mixed-spaces-and-tabs': 'off',
	},
}).override('nuxt/typescript/rules', {
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-extraneous-class': 'off',
	},
});
