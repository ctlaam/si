export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      // ✅ Bootstrap CSS (thấp ưu tiên hơn, import TRƯỚC)
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' },

      // ✅ Tailwind CSS (cao ưu tiên hơn, import SAU)
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css' }
    ],
    script: [
      // ✅ Bootstrap JS + Popper (cho modal, dropdown, v.v.)
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
}
