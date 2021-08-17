export default {
  router: {
    mode: 'history'
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'universal',
  generate: {
    dir: 'docs'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'admin-area',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Georama:wght@200;300;400;600;700&display=swap' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: '~/components/Loading.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-underscore', mode: 'client' },
    { src: '~/plugins/vue-i18n' },
    { src: '~/plugins/vue-chart', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    ['nuxt-fontawesome', {
      component: 'fa', //customize component name
      imports: [{
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faLightbulb','faTimes','faChevronDown','faChevronUp','faChevronRight']
      },
        {set: '@fortawesome/free-brands-svg-icons',
          icons: ['faGithub']
        },
        {set: '@fortawesome/free-regular-svg-icons',
          icons: ['faLightbulb']
        },
      ]
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
