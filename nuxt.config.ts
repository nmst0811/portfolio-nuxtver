export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '~/assets/css/tailwind.css',
    'lightbox2/dist/css/lightbox.min.css'
  ],
  
  app: {
    // サブドメイン運用なので baseURL は '/'
    baseURL: '/', 
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, user-scalable=yes',
      title: 'About me | minena',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'minenaのPortfolio' },
        // ここも新しいサブドメインのURLに直しておくと良いです
        { property: 'og:url', content: 'https://portfolio.saphir-vis.com/' },
        { property: 'og:description', content: 'minenaのPortfolio。' },
      ],
      link: [
        // ★修正ポイント：href は '/images/icon.svg' ではなく 'icon.svg' または '/icon.svg'
        // public フォルダの直下に置いたなら '/icon.svg' です。
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
        { rel: 'apple-touch-icon', href: '/icon.svg', sizes: '180x180' },

        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
      ],
      script: [
        { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', defer: true },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js', defer: true }
      ]
    }
  },

  ssr: true,
  nitro: {
    preset: 'static',
  },

  compatibilityDate: '2025-11-14',
})