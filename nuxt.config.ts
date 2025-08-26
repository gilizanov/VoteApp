// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  devServer: {
    port: 5173
  },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
  app: {
    head: {
      title: 'VoteApp',
      titleTemplate: '%s | VoteApp',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' }
      ],
      meta: [{ name: 'apple-mobile-web-app-title', content: 'VoteApp' }]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  icon: {
    customCollections: [
      {
        prefix: 'icon',
        dir: './assets/icons'
      }
    ]
  }
})
