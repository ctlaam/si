export default () => {
  if (process.client) {
    // Đảm bảo jQuery global
    const $ = require('jquery');
    window.$ = window.jQuery = $;

    // Đợi Nuxt load xong rồi mới init
    window.onNuxtReady(() => {
      // Chọn đúng class của slider trong HTML của bạn
      $('.your-slider-class').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      });
      console.log("✅ Slick Carousel initialized");
    });
  }
};
