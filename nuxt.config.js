export default {
  ssr: false,
    head: {
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: process.env.npm_package_description || ''
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  
        // ✅ Bootstrap CSS (ưu tiên thấp)
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' },
  
        // ✅ Slick Carousel CSS
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css' },
  
        // ✅ Tailwind CSS (ưu tiên cao hơn)
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css' }
      ],
      script: [
        // ✅ jQuery (phải nằm TRƯỚC slick)
        { src: 'https://code.jquery.com/jquery-3.6.0.min.js', body: true },
  
        // ✅ Slick Carousel JS
        { src: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', body: true },
  
        // ✅ Bootstrap JS + Popper
        { src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js', body: true },
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', body: true }
      ]
    },
  
    loading: { color: '#fff' },
    css: ["@/assets/css/index.css"],
    plugins: [],
    buildModules: [],
    modules: [],
    build: {
      extend(config, ctx) {}
    }
  };
  