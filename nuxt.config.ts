const path = require('path');
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/'
  },
  devtools: { enabled: false },
  darkMode: 'class',
  modules: [
    'nuxt-jsonld',
    'nuxt-lazy-load',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss'
  ],
  lazyLoad: {
    images: true,
    videos: true,
    audios: true,
    iframes: true,
    native: false,
    directiveOnly: false,
      
    loadingClass: 'isLoading',
    loadedClass: 'isLoaded',
    appendClass: 'lazyLoad',
    
    observerConfig: {
    }
  },
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
    storageKey: 'nuxt-color-mode'
  },
  alias: {
    'static': path.resolve(__dirname, 'static')
  },
  css: ['~/static/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
