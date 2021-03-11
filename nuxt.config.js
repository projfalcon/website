
export default {
  /*
  ** Deploy configuration
  */
  target: 'static',
  ssr: false,
  generate: {
    fallback: true
  },

  /*
  ** Server configuration
  */
  server: {
    host: '0.0.0.0',
    port: 3000
  },

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

      // OG tags
      { hid: 'ogType', name: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'ogSiteName', name: 'og:site_name', property: 'og:site_name', content: 'website' },
      { hid: 'ogUrl', name: 'og:url', property: 'og:url', content: 'https://projectfalcon.studio' },
      { hid: 'ogTitle', name: 'og:title', property: 'og:title', content: 'Project Falcon' },
      { hid: 'ogDescription', name: 'og:description', property: 'og:description', content: 'High quality, blazing-fast solutions' },
      { hid: 'ogImg', name: 'og:image', content: '/logo-short.png' },

      /* Twitter Tags */
      { hid: 'twitterCard', name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitterUrl', name: 'twitter:url', property: 'twitter:url', content: 'https://projectfalcon.studio' },
      { hid: 'twitterTitle', name: 'twitter:title', property: 'twitter:title', content: 'Project Falcon' },
      { hid: 'twitterDescription', name: 'twitter:description', property: 'twitter:description', content: 'High quality, blazing-fast solutions' },
      { hid: 'twitterImage', name: 'twitter:image', property: 'twitter:image', content: '/logo-short.png' },

      // PWA
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      // Manifest
      { rel: 'manifest', href: '/manifest.json' },

      // Favicons & PWA Icons
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'mask-icon', color: '#ffffff', href: '/safari-pinned-tab.svg' }
    ]
  },
  pwa: {
    meta: {
      name: 'Project Falcon',
      author: 'Project Falcon',
      description: 'High quality, blazing-fast solutions',
      appleStatusBarStyle: 'black-translucent'
    }
  },

  /*
  ** Loading animation
  */
  loadingIndicator: {
    name: 'circle',
    color: '#2d41f9',
    background: 'white'
  },

  /*
  ** Loading bar
  */
  loading: {},

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Style Resources
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
  components: false,

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
