// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],
  
  ssr: true,

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@vueuse/nuxt'
  ],

  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3001'
    }
  }
})