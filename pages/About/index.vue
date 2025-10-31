<template>
  <div id="site">
    <div id="site-inner">
      <main class="main-wrapper">
        <div class="about-us">
          <div class="d-flex si-breadcrumbs">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h1>HOÀNG HÀ Group</h1>
                  <div class="bg-breadcrumbs mt-4">
                    <nav
                      style="--bs-breadcrumb-divider: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&quot;);"
                      aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#" title="Trang chủ">Trang chủ</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Về HOÀNG HÀ Group</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="my-10 py-5 container">
            <div class="row">
              <div class="col-12">
                <h1 class="text-center si-title"></h1>
                <div class="my-6 excerpt">
                  <p><span style="font-weight: 300;">Thành lập năm 2001 với tiền thân là công ty ESPECO (H.K) Limited.,
                      có trụ sở tại Đặc khu kinh tế Hồng Kông, HOÀNG HÀ Group tự hào là đơn vị dẫn đầu trong lĩnh vực
                      cung cấp
                      Giải pháp Di trú – An cư (sau di trú); Giải pháp kinh doanh thương mại quốc tế; Đầu tư bất động
                      sản quốc tế; </span><span style="font-weight: 300;">và Du lịch Nhà hàng Khách sạn, Khu nghỉ dưỡng
                      cao cấp.&nbsp;</span></p>
                </div>
              </div>
              <div class="col-12">
                <div class="si-banners-border">
                  <SlickCarousel :arrows="true" :dots="true" :infinite="true" :autoplay="false" :autoplaySpeed="4000"
                    :slidesToShow="1" :slidesToScroll="1">
                    <div v-for="(item, index) in banners1" :key="index" class="banner-slide">
                      <!-- Desktop background -->
                      <div class="d-md-block banner-bg d-none"
                        :style="{ backgroundImage: `url(${require(`@/assets/uploads/${item.bgDesktop}`)})` }">
                        <div class="bg-overlay"></div>
                      </div>

                      <!-- Mobile image -->
                      <div class="d-block banner-bg d-md-none">
                        <img :src="require(`@/assets/uploads/${item.bgMobile}`)" :alt="item.alt" class="w-100" />
                      </div>
                    </div>
                  </SlickCarousel>

                </div>
              </div>
              <!-- <div id="gia-tri-cot-loi" class="my-10 py-10 col-12 core-values">
                <h2 class="text-center si-title"> GIÁ TRỊ CỐT LÕI</h2> -->
                <!-- <h3 class="mt-8 text-center">{{ core_value.Content }}</h3> -->
                <!-- <img src="@/assets/uploads/2024/10/Gia-tri-cot-loi-VN.png"
                  alt="@/assets/uploads/2024/10/Gia-tri-cot-loi-VN.png"
                  data-lazy-src="@/assets/uploads/2024/10/Gia-tri-cot-loi-VN.png" data-ll-status="loaded"
                  class="entered lazyloaded"><noscript><img src="@/assets/uploads/2024/10/Gia-tri-cot-loi-VN.png"
                    alt="@/assets/uploads/2024/10/Gia-tri-cot-loi-VN.png"></noscript> -->
                <!-- <div class="d-flex align-items-start justify-content-center mt-4 possible">
                                                              </div> -->
                <!-- <div class="relative mt-10 quote" v-if="core_value.Quote">
                                  {{ core_value.Quote }}
                              </div> -->
              <!-- </div> -->
              <!-- <div id="lich-su-phat-trien" class="mb-10 pb-5 col-12">
                <h2 class="text-center si-title">LỊCH SỬ PHÁT TRIỂN</h2>
                <img src="@/assets/uploads/2024/10/Lich-su-phat-trien-VN-1.jpg"
                  alt="@/assets/uploads/2024/10/Lich-su-phat-trien-VN-1.jpg"
                  data-lazy-src="@/assets/uploads/2024/10/Lich-su-phat-trien-VN-1.jpg" data-ll-status="loaded"
                  class="entered lazyloaded"><noscript><img src="@/assets/uploads/2024/10/Lich-su-phat-trien-VN-1.jpg"
                    alt="@/assets/uploads/2024/10/Lich-su-phat-trien-VN-1.jpg"></noscript> -->
                <!-- <div class="mt-10 text-center history">
                                                              </div> -->
              <!-- </div> -->
              <div class="col-12">
                <div class="my-10 si-line"></div>
              </div>
              <div class="col-12 si-scale">
                <h2 class="text-center si-title">QUY MÔ TẬP ĐOÀN</h2>
                <div class="mt-10 text-center hinh-anh-quy-mo">
                  <!-- <img src="@/assets/uploads/2024/09/SI-LOGO_Full_Brown-1.png"
                    alt="@/assets/uploads/2024/09/SI-LOGO_Full_Brown-1.png"
                    data-lazy-src="@/assets/uploads/2024/09/SI-LOGO_Full_Brown-1.png" data-ll-status="loaded"
                    class="entered lazyloaded"><noscript><img src="@/assets/uploads/2024/09/SI-LOGO_Full_Brown-1.png"
                      alt="@/assets/uploads/2024/09/SI-LOGO_Full_Brown-1.png"></noscript> -->
                </div>
                <div class="company">
                  <div class="img">
                    <a rel="nofollow" target="_blank" href="#"><img src="@/assets/uploads/2024/08/ISI.png"
                        alt="@/assets/uploads/2024/08/ISI.png" data-lazy-src="@/assets/uploads/2024/08/ISI.png"
                        data-ll-status="loaded" class="entered lazyloaded"><noscript><img
                          src="@/assets/uploads/2024/08/ISI.png"
                          alt="@/assets/uploads/2024/08/ISI.png" /></noscript></a>
                  </div>
                  <div class="img">
                    <a rel="nofollow" target="_blank" href="#"><img src="@/assets/uploads/2024/08/TSI.png"
                        alt="@/assets/uploads/2024/08/TSI.png" data-lazy-src="@/assets/uploads/2024/08/TSI.png"
                        data-ll-status="loaded" class="entered lazyloaded"><noscript><img
                          src="@/assets/uploads/2024/08/TSI.png"
                          alt="@/assets/uploads/2024/08/TSI.png" /></noscript></a>
                  </div>
                  <div class="img">
                    <a rel="nofollow" target="_blank" href="#"><img src="@/assets/uploads/2024/08/RSI.png"
                        alt="@/assets/uploads/2024/08/RSI.png" data-lazy-src="@/assets/uploads/2024/08/RSI.png"
                        data-ll-status="loaded" class="entered lazyloaded"><noscript><img
                          src="@/assets/uploads/2024/08/RSI.png"
                          alt="@/assets/uploads/2024/08/RSI.png" /></noscript></a>
                  </div>
                  <div class="img">
                    <a rel="nofollow" target="_blank" href="#"><img src="@/assets/uploads/2024/08/ASI.png"
                        alt="@/assets/uploads/2024/08/ASI.png" data-lazy-src="@/assets/uploads/2024/08/ASI.png"
                        data-ll-status="loaded" class="entered lazyloaded"><noscript><img
                          src="@/assets/uploads/2024/08/ASI.png"
                          alt="@/assets/uploads/2024/08/ASI.png" /></noscript></a>
                  </div>
                  <div class="img">
                    <a rel="nofollow" target="_blank" href="#"><img src="@/assets/uploads/2024/08/BIOTECH.png"
                        alt="@/assets/uploads/2024/08/BIOTECH.png" data-lazy-src="@/assets/uploads/2024/08/BIOTECH.png"
                        data-ll-status="loaded" class="entered lazyloaded"><noscript><img
                          src="@/assets/uploads/2024/08/BIOTECH.png"
                          alt="@/assets/uploads/2024/08/BIOTECH.png" /></noscript></a>
                  </div>
                  <div class="img">
                    <a rel="nofollow" target="_blank" href="#"><img
                        src="@/assets/uploads/2024/08/PHAN-ANH-FOUNDATION.png"
                        alt="@/assets/uploads/2024/08/PHAN-ANH-FOUNDATION.png"
                        data-lazy-src="@/assets/uploads/2024/08/PHAN-ANH-FOUNDATION.png" data-ll-status="loaded"
                        class="entered lazyloaded"><noscript><img src="@/assets/uploads/2024/08/PHAN-ANH-FOUNDATION.png"
                          alt="@/assets/uploads/2024/08/PHAN-ANH-FOUNDATION.png" /></noscript></a>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="my-10 si-line"></div>
              </div>
              <div class="col-12">
                <h2 class="text-center si-title">HOÀNG HÀ Group TRÊN TOÀN CẦU</h2>
                <!-- <img src="@/assets/uploads/2024/11/World-Map-VN-2.png" alt="HOÀNG HÀ Group TRÊN TOÀN CẦU"
                  data-lazy-src="@/assets/uploads/2024/11/World-Map-VN-2.png" data-ll-status="loaded"
                  class="entered lazyloaded"><noscript><img src="@/assets/uploads/2024/11/World-Map-VN-2.png"
                    alt="HOÀNG HÀ Group TRÊN TOÀN CẦU"></noscript> -->
              </div>
            </div>
          </div>
          <div class="managing-director ban-lanh-dao" id="ban-lanh-dao">
            <div class="mb-5 py-10 container">
              <div class="row">
                <div class="col-12">
                  <div class="slides-bod">
                    <SlickCarousel :arrows="true" :dots="false" :infinite="true" :autoplay="false" :autoplaySpeed="2500"
                      :slidesToShow="4" :slidesToScroll="1" :responsive="responsiveSettings">
                      <div v-for="(member, index) in bodList" :key="index" class="my-3 text-center it-bod"
                        @click="openPopup(index)">
                        <img :src="member.img" :alt="member.name" class="shadow-sm rounded img-fluid" />
                        <div>
                          <div class="name">{{ member.name }}</div>
                          <div class="position">{{ member.position }}</div>
                        </div>
                      </div>
                    </SlickCarousel>


                  </div>

                </div>
              </div>
            </div>
          </div>
          <div id="chung-nhan-giai-thuong" class="py-5 container">
            <div class="row">
              <div class="col-12 certification">
                <h2 class="text-center si-title">CHỨNG NHẬN &amp; GIẢI THƯỞNG </h2>
                <div class="si-banners">
                  <SlickCarousel :arrows="false" :dots="true" :infinite="true" :autoplay="true" :autoplaySpeed="2000"
                    :slidesToShow="4" :slidesToScroll="1" :responsive="responsiveSettings"
                    class="d-flex align-items-center justify-content-center">
                    <div v-for="(img, index) in banners" :key="index" class="p-2 it">
                      <img :src="img" class="w-100 h-auto" :alt="`banner-${index}`" />
                    </div>
                  </SlickCarousel>
                </div>
              </div>
            </div>
          </div>
          <div class="py-5 container">
            <div class="row">
              <div class="col-12 certification" id="certification">
                <h2 class="text-center si-title">ĐỐI TÁC CHIẾN LƯỢC</h2>
                <div class="banner-logos">
                  <SlickCarousel :arrows="true" :dots="false" :infinite="true" :autoplay="true" :autoplaySpeed="2000"
                    :slidesToShow="6" :slidesToScroll="1" :responsive="responsiveSettings">
                    <div v-for="(item, index) in logos" :key="index" class="logo-item">
                      <img :src="item" alt="logo" class="logo-img" />
                    </div>
                  </SlickCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>


      <div class="popup-form">
        <div class="position-relative">
          <div class="close-popup"></div>
          <div class="content-popup">Đăng ký thông tin thành công!</div>
        </div>
      </div>
    </div><!-- #site-inner -->
  </div>
</template>

<script>
import "@/assets/css/slick.css"
import "@/assets/css/sig-core.css"
export default {
  components: {
  },
  data() {
    return {
      activePopup: null,
      logos: [
        require("@/assets/uploads/2024/09/US-Citizenship-and-Immigration-Services.png"),
        require("@/assets/uploads/2024/09/Western-Australia.png"),
        require("@/assets/uploads/2024/09/Gov-of-Canada.png"),
        require("@/assets/uploads/2023/10/16_LIVE_IN_MELBOURNE_9e45d747dc.png"),
        require("@/assets/uploads/2023/10/17_SOUTH_AUSTRALIA_GOVERNMENT_ff9d1ea1b0.png"),
        require("@/assets/uploads/2024/09/Queensland.png"),
        require("@/assets/uploads/2024/09/NSW.png"),
        require("@/assets/uploads/2023/10/18_US_DEPARTMENT_OF_STATE_260b357a29.png"),
        require("@/assets/uploads/2023/10/19_USCIS_3e9a9f02de.png"),
        require("@/assets/uploads/2024/09/US-Department-of-state.png"),
        require("@/assets/uploads/2024/09/Hungary.png"),
        require("@/assets/uploads/2024/09/Switzerland.png"),
        require("@/assets/uploads/2024/09/Slovenia.png"),
        require("@/assets/uploads/2024/09/Bahamas.png"),
        require("@/assets/uploads/2024/09/Cyprus.png"),
        require("@/assets/uploads/2024/09/Haiti.png"),
        require("@/assets/uploads/2023/12/21.-DARWIN-INNOVATION-HUB.png"),
        require("@/assets/uploads/2023/12/22.-PORT-HEDLAND.png"),
        require("@/assets/uploads/2023/12/23.-MY-AUSTRALIAN-PROPERTY.png"),
        require("@/assets/uploads/2025/03/Gov-of-Malta.png"),
        require("@/assets/uploads/2025/03/Gov-of-Solomon-Island.png"),
      ],
      banners: [
        require("@/assets/uploads/2025/03/Top-10-Thuong-hieu-manh-QG-1.png"),
        require("@/assets/uploads/2025/03/Thuong-hieu-manh-quoc-gia-1-1.png"),
        require("@/assets/uploads/2025/03/SP-DV-Tin-dung.png"),
        require("@/assets/uploads/2025/03/DN-DN-xuat-sac.png"),
        require("@/assets/uploads/2025/03/Asia-business-awards-1-1.png"),
      ],
      bodList:
        [
          {
            name: "Ông ĐỖ NGỌC TUẤN",
            position: "CEO TẬP ĐOÀN HOÀNG HÀ",
            img: require("@/assets/uploads/2024/08/Co-Ha.png"),
            bio: `<p>Bà Hà Nguyễn là cố vấn kinh tế cho Đại sứ quán Hoa Kỳ ...</p>`
          },
          {
            name: "Bà NHUNG ANNA LE",
            position: "Giám Đốc Điều Hành",
            img: require("@/assets/uploads/2024/08/Chi-Binh-2.png"),
            bio: `<p>Bà Bình có hơn 15 năm kinh nghiệm trong lĩnh vực du lịch, truyền thông...</p>`
          },
          {
            name: "Bà OOI SIEW LINN",
            position: "Phó Giám Đốc",
            img: require("@/assets/uploads/2024/10/Ong-Lesly.png"),
            bio: `<p>Ông Benoit là nhà ngoại giao và điều hành cấp cao...</p>`
          },
          {
            name: "Bà NGUYỄN THỊ BÍCH HÀ",
            position: "Phó Chủ tịch HĐQT",
            img: require("@/assets/uploads/2025/08/Ong-Greg-2-1.png"),
            bio: `<p>Ông Greg McKean là cựu Giám đốc Di trú bang Queensland...</p>`
          }
        ],
      responsiveSettings: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 4 },
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 3 },
        },
        {
          breakpoint: 480,
          settings: { slidesToShow: 2 },
        },
      ],
      banners1: [
        {
          bgDesktop: '2023/11/Hinh-2-VP.jpg',
          bgMobile: '2023/11/Hinh-2-VP.jpg',
          alt: 'Hình 2 - Văn phòng HOÀNG HÀ Group'
        },

      ]
    };
  },
  methods: {
    openPopup(index) {
      this.activePopup = index;
    },
    closePopup() {
      this.activePopup = null;
    }
  }
}
</script>
<style>
.banner-bg {
  background-size: cover;
  background-position: center;
  height: 80vh;
  position: relative;
}

.bg-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
}

.w-100 {
  width: 100%;
}

.vh-80 {
  height: 80vh;
}

.si-banners .slick-dots {
  bottom: -71px !important;
}
</style>
<style scoped>
.about-us .open-letter {
  flex-wrap: wrap;
  align-items: stretch
}

.about-us .open-letter .img {
  width: 305px;
  line-height: 0;
  text-align: center
}

.about-us .open-letter .img div {
  line-height: 1.5;
  padding: 10px 20px
}

.about-us .open-letter h2 {
  font-family: var(--font-semibold);
  text-transform: uppercase;
  font-size: var(--size-20)
}

.about-us .open-letter h2 span {
  font-family: var(--font-black)
}

.about-us .open-letter .letter {
  background-color: var(--quaternary-color);
  width: calc(100% - 305px);
  flex-wrap: wrap
}

.about-us .open-letter .letter strong {
  font-family: var(--font-medium)
}

.about-us .core-values {
  background-image: url(@/assets/themes/sigroup/assets/images/bg-core-values.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover
}

.about-us .core-values h3 {
  font-size: var(--size-30);
  color: var(--octonary-color)
}

.about-us .core-values .quote {
  margin: auto;
  max-width: 946px;
  text-align: center;
  padding: 20px 70px
}

.about-us .core-values .quote::after,
.about-us .core-values .quote::before {
  width: 35px;
  height: 24px;
  content: "";
  position: absolute
}

.about-us .core-values .quote::after {
  top: 11px;
  left: 11px;
  background-image: url(@/assets/themes/sigroup/assets/images/quote-left.png)
}

.about-us .core-values .quote::before {
  right: 11px;
  bottom: 11px;
  background-image: url(@/assets/themes/sigroup/assets/images/quote-right.png)
}

.about-us .possible {
  flex-wrap: wrap;
  text-align: center
}

.about-us .possible>div {
  width: 12.5%
}

.about-us .possible>div>div:nth-child(1) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 134px;
  height: 134px;
  margin: auto;
  color: var(--denary-color);
  font-size: var(--size-35);
  font-family: var(--font-black);
  border: 2px solid var(--si-brown-color);
  border-radius: 50%;
  line-height: 1
}

.about-us .possible>div>div:nth-child(2) {
  margin-top: 12px
}

.about-us .certification .it img {
  max-width: 180px;
  display: block;
  margin: auto
}

.about-us .certification .it h3 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  font-size: var(--size-16);
  font-weight: 400
}

.about-us .certification .it:hover h3 {
  color: var(--background-color)
}

.about-us .si-scale .company {
  text-align: center;
  margin: auto;
  display: flex;
  flex-wrap: wrap
}

.slick-dots {
  bottom: -71px !important;
}

.about-us .si-scale .company .img {
  height: auto;
  width: 16.66%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 100px;
  position: relative
}

.hinh-anh-quy-mo {
  padding-bottom: 100px;
  position: relative;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto
}

.hinh-anh-quy-mo::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 50px;
  background-color: #000
}

.hinh-anh-quy-mo::before {
  content: "";
  position: absolute;
  bottom: 50px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #000;
  left: 50%;
  transform: translateX(-50%)
}

.about-us .si-scale .company .img::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #000
}

.about-us .si-scale .company .img a::after {
  content: "";
  position: absolute;
  top: 0;
  width: 1px;
  height: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000
}

.about-us .si-scale .company .img::before {
  content: "";
  position: absolute;
  top: 50px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #000;
  left: 50%;
  transform: translateX(-50%)
}

.about-us .si-scale .company .img:first-child::after {
  width: 50%;
  left: auto;
  right: 0
}

.about-us .si-scale .company .img:last-child::after {
  width: 50%
}

.about-us .certification .si-banners .it,
.about-us .si-scale .si-banners .it {
  padding-left: 10px;
  padding-right: 10px
}

.about-us .si-scale .company h3 {
  font-size: var(--size-20);
  text-transform: uppercase
}

.about-us .si-scale .company h4 {
  color: var(--octonary-color);
  font-size: var(--size-16);
  font-weight: 400
}

.about-us .si-scale .it {
  padding: 40px 8px 0;
  text-align: center
}

.about-us .si-scale .it .img {
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center
}

.about-us .si-scale .it h3 {
  font-size: var(--size-20);
  text-transform: uppercase
}

.about-us .si-scale .it h4 {
  color: var(--octonary-color);
  font-size: var(--size-16);
  font-weight: 400
}

.about-us .si-banners {
  line-height: 0;
  margin: 0
}

.about-us .si-banners .banner-wrap {
  top: 0;
  left: 0
}

.about-us .banner-flags {
  background-color: var(--primary-color);
  padding: 5px
}

.about-us .banner-flags .it {
  padding: 5px;
  cursor: pointer
}

.about-us .banner-flags .it>div {
  background: #fff;
  border-radius: 10px;
  height: 127px;
  display: flex;
  align-items: center;
  justify-content: center
}

.about-us .history {
  margin: auto;
  max-width: 610px;
  position: relative
}

.about-us .history::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background-color: var(--si-brown-color)
}

.about-us .history .it {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  position: relative
}

.about-us .history .it>div {
  width: 45%;
  padding: 10px
}

.about-us .history .it .info {
  border: 2px solid var(--si-brown-color);
  border-radius: 10px;
  position: relative
}

.about-us .history .it .info::after {
  content: "";
  width: 16px;
  height: 18px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--background-color)
}

.about-us .history .it .time {
  font-family: var(--font-black);
  color: var(--octonary-color);
  font-size: var(--size-20);
  padding: 0
}

.about-us .history .it::after {
  content: "";
  position: absolute
}

.about-us .history .it::after {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-image: url(@/assets/themes/sigroup/assets/images/hexagon-mini.png)
}

.about-us .history .it:nth-child(2n+1) {
  flex-direction: row-reverse
}

.about-us .history .it:nth-child(2n+1) .time {
  text-align: left
}

.about-us .history .it:nth-child(2n+1) .info::after {
  right: -16px;
  background-image: url(@/assets/themes/sigroup/assets/images/tri-right.png)
}

.about-us .history .it:nth-child(2n+2) .time {
  text-align: right
}

.about-us .history .it:nth-child(2n+2) .info::after {
  left: -16px;
  background-image: url(@/assets/themes/sigroup/assets/images/tri-left.png)
}

.about-us .history .it:first-child {
  margin: 0;
  display: inherit;
  flex-direction: inherit;
  border: 2px solid var(--si-brown-color);
  border-radius: 10px;
  padding: 40px 20px 10px;
  background-color: var(--background-color)
}

.about-us .history .it:first-child>div {
  width: 100%;
  padding: 0
}

.about-us .history .it:first-child .info {
  border: none
}

.about-us .history .it:first-child .info::after {
  display: none
}

.about-us .history .it:first-child .time {
  position: absolute;
  border: 2px solid #934d26;
  background-color: #fff;
  border-radius: 50%;
  top: -29px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center
}

.about-us .history .it:first-child::after {
  display: none
}

.about-us .si-banners-border {
  padding: 20px;
  position: relative
}

.about-us .si-banners-border .bg-banner {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover
}

.about-us .si-banners-border::after,
.about-us .si-banners-border::before {
  content: "";
  position: absolute;
  width: calc(100% - 80px);
  height: calc(100% - 80px);
  z-index: 0
}

.about-us .si-banners-border::after {
  border: 2px solid var(--quinary-color);
  top: 0;
  left: 0
}

.about-us .si-banners-border::before {
  border: 2px solid var(--denary-color);
  right: 0;
  bottom: 0
}

.about-us .si-speaker h2 {
  margin-top: 5px;
  margin-bottom: 5px
}

.about-us .si-speaker .img img {
  width: 227px;
  height: 227px
}

.about-us .si-speaker .exp {
  min-height: 63px
}

.about-us .certification .si-banners .slick-prev {
  left: -30px
}

.about-us .certification .si-banners .slick-next {
  right: -30px
}

.about-us .si-banners .slick-arrow::before {
  display: none
}

.about-us .si-banners .slick-arrow {
  border: none;
  background-position: center center;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover
}

.about-us .si-banners .slick-arrow::after {
  display: none
}

.about-us .si-banners .slick-arrow.slick-prev {
  background-image: url(@/assets/themes/sigroup/assets/images/ic-prev-bn.png)
}

.about-us .si-banners .slick-arrow.slick-next {
  background-image: url(@/assets/themes/sigroup/assets/images/ic-next-bn.png)
}

.managing-director {
  background-image: url(@/assets/themes/sigroup/assets/images/bg-bod.jpg);
  background-position: center center;
  background-repeat: no-repeat
}

.managing-director .it-bod {
  cursor: pointer;
  padding-left: 12px;
  padding-right: 12px;
  max-width: 304px;
  margin-left: auto;
  margin-right: auto
}

.managing-director .it-bod>div {
  background-color: #2d2d2d;
  padding: 8px 0 16px
}

.managing-director .name {
  font-size: 20px;
  line-height: 32px;
  font-family: var(--font-heading);
  color: var(--denary-color);
  text-align: center;
  margin-bottom: 6px;
  padding: 0 10px;
}

.managing-director .position {
  text-align: center;
  color: #fff
}

.managing-director .position.text-left,
.managing-director .name.text-left {
  text-align: left
}

.managing-director .position.text-left {
  color: var(--primary-color)
}

.popup-bod {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1234;
  padding: 0 20px;
  background: rgba(0, 0, 0, .5);
  display: none
}

.wrap-bod {
  border-radius: 8px;
  max-width: 1240px;
  margin: 90px auto;
  display: flex;
  position: relative;
  overflow: auto;
  max-height: calc(100vh - 150px);
  cursor: default;
  background-image: url(@/assets/themes/sigroup/assets/images/bg-bod.jpg);
  background-position: center center;
  background-repeat: no-repeat
}

.popup-bod .content {
  max-width: 927px;
  min-width: 62%;
  padding: 58px 30px 107px 30px;
  text-align: left;
  height: 100%
}

.popup-bod .img {
  padding: 58px 30px 100px 30px;
  width: 100%;
  display: flex;
  flex-direction: column
}

.popup-bod .content a {
  text-decoration: underline;
  color: var(--si-brown-color)
}

.popup-bod .content a:hover {
  color: var(--si-brown-color)
}

.popup-bod .content {
  list-style: inside
}

.popup-bod .content p {
  margin: 1rem 0
}

.popup-bod .content .d-flex {
  flex-wrap: wrap
}

.popup-bod .content img {
  margin-top: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: auto;
  object-fit: cover
}

.popup-bod .content h1,
.popup-bod .content h2,
.popup-bod .content h3,
.popup-bod .content h4,
.popup-bod .content h5,
.popup-bod .content h6 {
  font-family: var(--font-black)
}

.popup-bod .content table {
  border-collapse: collapse;
  margin-right: auto;
  margin-left: auto
}

.popup-bod .content td {
  padding: 10px;
  border: 1px solid #010300
}

.popup-bod .content tr:first-child td {
  background-color: #f1d1a9;
  color: #934d26
}

.close-bod {
  position: absolute;
  top: 12px;
  right: 12px;
  content: "";
  width: 16px;
  height: 16px;
  background-image: url(@/assets/themes/sigroup/assets/images/close.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer
}

.wrap-bod .name {
  font-size: 32px;
  line-height: 44px;
  color: #934d26
}

.wrap-bod .position {
  font-weight: 700
}

.slides-bod .slick-prev:before,
.slides-bod .slick-next:before {
  color: #934d26
}

@media only screen and (min-width: 992px) {
  .popup-bod .content {
    min-height: 360px;
    min-width: 62%
  }
}

@media (max-width: 820px) {
  .wrap-bod {
    flex-wrap: wrap
  }

  .popup-bod .img {
    padding: 30px 15px 15px;
    width: 100%
  }

  .popup-bod .content {
    padding: 5px 15px 30px;
    width: 100%;
    order: 2
  }

  .wrap-bod .name {
    font-size: 24px;
    line-height: 34px
  }

  .about-us .possible>div {
    width: 50%
  }

  .about-us .open-letter .letter,
  .about-us .open-letter .img {
    width: 100%
  }

  .about-us .certification .it img {
    max-width: 100%
  }

  .about-us .si-banners .slick-dots li button {
    border: 1px solid var(--octonary-color)
  }

  .si-scale .si-banners .slick-dots {
    position: relative;
    bottom: -71px !important;
  }

  .hinh-anh-quy-mo {
    padding-bottom: 50px
  }

  .hinh-anh-quy-mo::before {
    bottom: 25px
  }

  .about-us .si-scale .company .img a::after,
  .hinh-anh-quy-mo::after {
    height: 25px
  }

  .about-us .si-scale .company .img {
    padding-top: 50px
  }

  .about-us .si-scale .company .img::before {
    top: 25px
  }

  .managing-director .it-bod {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 100%
  }

  .managing-director .it-bod>img {
    width: 80%
  }

  .managing-director .it-bod>div {
    width: 80%;
    margin-left: auto;
    margin-right: auto
  }

  .slides-bod .slick-prev {
    left: 10px
  }

  .slides-bod .slick-next {
    right: 10px
  }

  .managing-director .slick-prev:before,
  .managing-director .slick-next:before {
    color: var(--denary-color)
  }


}
</style>

<style>
.managing-director img.img-fluid.rounded.shadow-sm {
  height: 270px !important;
  width: 100% !important;
  object-fit: cover !important;
}
</style>