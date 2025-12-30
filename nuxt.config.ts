export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '~/assets/css/tailwind.css',  // 既存のTailwind CSS
    '~/assets/css/main.css',      // index.htmlから移行するCSS
    'lightbox2/dist/css/lightbox.min.css'
  ],
  tailwindcss: {
    viewer: true, // Tailwind Viewer を有効にする場合
  },
  
  // ----------------------------------------------------
  // 2. App Configuration (head情報、アイコン、CDNスクリプト)
  // ----------------------------------------------------
  app: {
    head: {
      // 共通のメタ情報
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, user-scalable=yes',
      title: 'About me | minenaの部屋', // index.htmlから移行
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'minenaのPortfolio' },
        { property: 'og:url', content: 'https://nmst0811.github.io/portfolio/' },
        { property: 'og:description', content: 'minenaのPortfolio。ただ、それだけ。' },
        { property: 'og:site_name', content: 'minenaのPortfolio' },
        { property: 'og:locale', content: 'ja_JP' }
      ],
      // ファビコン・タッチアイコンの設定
      link: [
        // Apple Touch Icon (既存のPNGファイルを想定)
        { rel: 'apple-touch-icon', href: '/images/icon.png', sizes: '180x180' },
        
        // ★★★ 修正後の SVG ファビコン ★★★
        // public/images/icon.svg を参照します
        { rel: 'icon', href: '/images/icon.svg', type: 'image/svg+xml' },

        // Google Fonts Preconnect
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ],
      // 外部スクリプトの読み込み（jQueryとLightbox JS）
      script: [
        { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', defer: true },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js', defer: true, type: 'text/javascript' }
      ]
    }
  },

  // ----------------------------------------------------
  // 3. Deployment (既存の設定)
  // ----------------------------------------------------
  // GitHub Pages 用（静的サイト出力）
  ssr: true,
  nitro: {
    preset: 'github-pages',
  },

  compatibilityDate: '2025-11-14',
})