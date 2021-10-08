export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato'
      },
      { rel: 'icon', type: 'image/png', href: '/logo_icon_small.png' }
    ],
    script: [
      
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vuelidate.js", mode: 'client' },
    { src: '~plugins/vue-js-modal.js' },
    { src: '~/plugins/notifications-ssr', ssr: true },
    { src: '~/plugins/notifications-client', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    {path: '~/components/utility/'}
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:8000'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  auth: {
    redirect: {
      login: '/account/login',
      logout: '/',
      callback: '/account/login',
      home: '/dashboard'
    },
    strategies: {
      local: {
        url: 'http://localhost:8000/',
        token: {
          property: 'token',
          global: true,
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: { url: 'http://localhost:8000/account/login', method: 'post' },
          user: { url: 'http://localhost:8000/account/user', method: 'get' },
          logout: false
        }
      }
    }
  },

  publicRuntimeConfig: {
    imageServer: 'http://localhost:8000/images/'
  }
}
