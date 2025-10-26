export default {
  ssr: false,

  head: {
    title: 'Slick Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      // Bootstrap
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
      },
      // Slick Carousel
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css'
      },
      // Swiper CSS
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
      },
      // Font Awesome
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
      }
    ],
    script: [
      // jQuery (cần cho Slick)
      { src: 'https://code.jquery.com/jquery-3.6.0.min.js', body: true },
      // Slick Carousel
      {
        src: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
        body: true
      },
      // Bootstrap JS
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
        body: true
      },
      // Swiper JS
      {
        src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
        body: true
      }
    ]
  },

  plugins: [
    { src: '~/plugins/vue-slick-carousel.client.js', mode: 'client' }
<<<<<<< HEAD

=======
>>>>>>> a2e59103dc8d620d33793671ab604932e78c82a0
  ]
}
