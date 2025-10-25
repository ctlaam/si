export default {
  ssr: false,
  head: {
    title: 'Slick Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.6.0.min.js', body: true },
      { src: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', body: true }
    ]
  },

  css: ['@/assets/css/index.css'],
  plugins: [
    { src: '~/plugins/slick.client.js', mode: 'client' } // 👈 thêm dòng này
  ]
};
