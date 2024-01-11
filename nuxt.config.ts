import eslintPlugin from 'vite-plugin-eslint'
import stylelintPlugin from 'vite-plugin-stylelint'

const isDev = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@pinia/nuxt'],

  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons']
  },

  // https://github.com/nuxt/nuxt/issues/20211
  experimental: {
    renderJsonPayloads: true
  },

  typescript: {
    strict: true
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#vite
  vite: {
    plugins: isDev ? [eslintPlugin(), stylelintPlugin()] : []
  }
})
