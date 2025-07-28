// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'MiniBlog - 极简个人博客',
      meta: [
        { name: 'description', content: '一个简洁优雅的个人博客' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})