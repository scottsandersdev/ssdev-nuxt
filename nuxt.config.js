module.exports = {
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss' }
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Scott Sanders - Web Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Scott Sanders - Web Developer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
   '@nuxtjs/sitemap'
  ],
  loading: { color: '#3B8070' },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://www.scottsandersdev.com',
    generate: true
  },
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loaders: ['markdown-with-front-matter-loader']
      })
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
