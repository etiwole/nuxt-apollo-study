// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
// @ts-ignore
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        'Source Sans 3': true,
        download: true,
        inject: true,
      }
    }],
  ]
})
