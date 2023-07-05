import postcss from './postcss.config.js'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['~/assets/css/main.css'],
	postcss,
	devtools: { enabled: true }
})
