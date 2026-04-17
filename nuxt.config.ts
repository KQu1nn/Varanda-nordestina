// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false }, // Desativado para evitar peso extra agora
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/icon'
  ],
  fonts: {
    families: [
      { name: 'Playfair Display', provider: 'google' },
      { name: 'Montserrat', provider: 'google', weights: [400, 500, 700] }
    ]
  }
})