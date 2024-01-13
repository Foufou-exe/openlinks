// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    'shadcn-nuxt',
    '@nuxt/image',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    'nuxt-typed-router',
    '@pinia/nuxt',
  ],
  // Configuration store PINIA
  pinia: {
    storesDirs: ['./stores/**'],
  },

  // Configuration Framework UI  : shadcn
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },

  // Configuration Module Color Mode
  colorMode: {
    classSuffix: ''
  },

  // Configuration APP 
  app: {
    // Config HEAD
    head: {
      title: 'Openlinks',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Openlinks - Openlinks is a project designed to bring together new articles, shared links and much more. The aim is to simplify communications between all types of people.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/icon.png' },
      ]
    },
  },

  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
})
