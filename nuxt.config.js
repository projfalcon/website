
export default {
  /*
  ** Server configuration
  */
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Project Falcon',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'High quality, blazing-fast solutions' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },

      { hid: 'ogType', name: 'og:type', content: 'website' },
      { hid: 'ogUrl', name: 'og:url', content: 'https://projectfalcon.studio' },
      { hid: 'ogTitle', name: 'og:title', content: 'Project Falcon' },
      { hid: 'ogDescription', name: 'og:description', content: 'High quality, blazing-fast solutions' },
      { hid: 'ogImg', name: 'og:image', content: '/logo-short.png' },
      /* Twitter Tags */
      { hid: 'twitterCard', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitterUrl', name: 'twitter:url', content: 'https://projectfalcon.studio' },
      { hid: 'twitterTitle', name: 'twitter:title', content: 'Project Falcon' },
      { hid: 'twitterDescription', name: 'twitter:description', content: 'High quality, blazing-fast solutions' },
      { hid: 'twitterImage', name: 'twitter:image', content: '/logo-short.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', color: '#2d7ff9', href: '/safari-pinned-tab.svg' }
    ]
  },

  /*
  ** Loading animation
  */
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  /*
  ** Global CSS
  */
  css: [],
  /**
   * Style Resources 
  **/
  styleResources: {
    scss: [
      './assets/styles/colors.scss',
      './assets/styles/global.scss',
      './assets/fonts/fonts.scss'
    ]
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',

    '@nuxtjs/style-resources'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
