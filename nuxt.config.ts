export default defineNuxtConfig({
  nitro: {experimental: {
    openAPI: true,
  },},
  devtools: { enabled: true },
  modules: ['@nuxthub/core', '@nuxt/ui', 'nuxt-auth-utils', '@nuxt/eslint'],
  hub: {
    database: true
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  }
})
