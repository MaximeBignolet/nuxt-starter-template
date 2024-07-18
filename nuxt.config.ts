// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	ssr: false,
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
				jsx: true,
			},
		},
	},
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	imports: {
		autoImport: true,
	},
});
