<template>
  <div id="site">
    <div id="site-inner">
      <style>
        @media(max-width: 820px) {
          .si-nav .menu-main .sub-menu .sub-menu {
            left: 0 !important;
          }
        }
      </style>
      <main class="home-page si-blog">
        <article id="post-2" class="single-content post-2 page type-page status-publish has-post-thumbnail hentry">
          <div id="section-1" class="mx-auto">
            <div class="home-banner slick-initialized slick-slider">
              <div class="country-banners">
                <SlickCarousel :arrows="true" :dots="true" :infinite="true" :autoplay="false" :autoplaySpeed="4000"
                  :slidesToShow="1" :slidesToScroll="1">
                  <div v-for="(item, index) in banners" :key="index" class="banner-slide">
                    <div class="d-md-block banner-bg d-none" :style="{ backgroundImage: `url(${item.bgDesktop})` }">
                      <div class="bg-overlay"></div>
                    </div>

                    <div class="d-block banner-bg d-md-none" :style="{ backgroundImage: `url(${item.bgMobile})` }">
                      <div class="bg-overlay"></div>
                    </div>

                    <div class="banner-content">
                      <div class="info">
                        <h2>{{ item.title }}</h2>

                        <div class="mt-3" v-if="item.stats">
                          <table>
                            <tbody>
                              <tr v-for="(value, label) in item.stats" :key="label">
                                <td>{{ label }}:</td>
                                <td>{{ value }}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <p v-else>{{ item.description }}</p>

                        <a class="si-btn" href="#">Tìm hiểu thêm</a>
                      </div>

                      <div class="social-links">
                        <div>Social media</div>
                        <div class="line"></div>
                        <div class="gap-x-3 icons">
                          <a href="#"><img src="@/assets/images/facebook.png" alt="Facebook" /></a>
                          <a href="#"><img src="@/assets/images/zalo.png" alt="Zalo" /></a>
                          <a href="#"><img src="@/assets/images/linkedin.png" alt="LinkedIn" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SlickCarousel>
              </div>




            </div>
          </div>
          <div class="container">
            <div id="section-2" class="align-items-center py-10 text-center row">
              <div class="s2-left col-12 col-md-6" data-aos="fade-right">
                <!-- <img class="img-fluid" src="@/assets/uploads/2025/06/su-kien-dau-tu-solomon.jpg" alt="Tìm hiểu thêm" data-lazy-src="@/assets/uploads/2023/10/vie_si_group_logofullbrown.png" /><noscript><img class="img-fluid" src="@/assets/uploads/2023/10/vie_si_group_logofullbrown.png" alt="Tìm hiểu thêm" /></noscript> -->
                <div class="mt-8 text-justify">Bên cạnh việc sở hữu hệ thống hơn sáu văn phòng tại bốn quốc gia và vùng
                  lãnh thổ, đội ngũ chuyên gia và luật sư đầu ngành sở hữu nhiều chứng chỉ và giải thưởng lớn về Di trú,
                  HOÀNG HÀ Group còn là thành viên danh dự của nhiều Tổ chức và Hiệp hội Di trú. Đặc biệt, mạng lưới
                  quan hệ
                  với Chính phủ và quan chức cấp cao của nhiều quốc gia điểm đến, sự hợp tác vững mạnh với nhiều đối tác
                  chiến lược và ngân hàng, Tập đoàn chúng tôi tự tin đồng hành cùng các cá nhân và gia đình vượt qua
                  những rào cản phức tạp của các thủ tục pháp lý quốc tế trong lĩnh vực Di trú - An cư - Đầu tư tài
                  chính và thương mại quốc tế - Y tế và chăm sóc sức khỏe toàn cầu.</div>
                <a class="my-6 si-btn" href="#">Tìm hiểu thêm</a>
              </div>
              <div class="s2-right col-12 col-md-6" data-aos="fade-left">
                <div class="row">
                  <div class="my-3 col-6 col-md-4">
                    <div class="img">
                      <img height="66" width="66" src="@/assets/uploads/2023/11/Chuong_trinh_dinh_cu_4290e839ef.png"
                        alt="100++ ">
                    </div>
                    <div class="s2-right-tt">100++ </div>
                    <p>Chương trình định cư</p>
                  </div>
                  <div class="my-3 col-6 col-md-4">
                    <div class="img">
                      <img height="66" width="66" src="@/assets/uploads/2023/11/Thanh_pho_noi_bat_bc27b8699c.png"
                        alt="30+">
                    </div>
                    <div class="s2-right-tt">30+</div>
                    <p>Thành phố nổi bật</p>
                  </div>
                  <div class="my-3 col-6 col-md-4">
                    <div class="img">
                      <img height="66" width="66" src="@/assets/uploads/2023/11/Ho_so_thanh_cong_33fb00ce65.png"
                        alt="10,660+" data-lazy-src="@/assets/uploads/2023/11/Ho_so_thanh_cong_33fb00ce65.png"
                        data-ll-status="loaded" class="entered lazyloaded"><noscript><img height="66" width="66"
                          src="@/assets/uploads/2023/11/Ho_so_thanh_cong_33fb00ce65.png" alt="10,660+" /></noscript>
                    </div>
                    <div class="s2-right-tt">10,660+</div>
                    <p>Hồ sơ thành công</p>
                  </div>
                  <div class="my-3 col-6 col-md-4">
                    <div class="img">
                      <img height="66" width="66"
                        src="@/assets/uploads/2023/11/Nhap_quoc_tich_thanh_cong_5e58d6668b.png" alt="1,200+"
                        data-lazy-src="@/assets/uploads/2023/11/Nhap_quoc_tich_thanh_cong_5e58d6668b.png"
                        data-ll-status="loaded" class="entered lazyloaded"><noscript><img height="66" width="66"
                          src="@/assets/uploads/2023/11/Nhap_quoc_tich_thanh_cong_5e58d6668b.png"
                          alt="1,200+" /></noscript>
                    </div>
                    <div class="s2-right-tt">1,200+</div>
                    <p>Số lượng nhập quốc tịch thành công</p>
                  </div>
                  <div class="my-3 col-6 col-md-4">
                    <div class="img">
                      <img height="66" width="66" src="@/assets/uploads/2023/11/Kinh_nghiem_596f0aa4ea.png" alt="20+"
                        data-lazy-src="@/assets/uploads/2023/11/Kinh_nghiem_596f0aa4ea.png" data-ll-status="loaded"
                        class="entered lazyloaded"><noscript><img height="66" width="66"
                          src="@/assets/uploads/2023/11/Kinh_nghiem_596f0aa4ea.png" alt="20+" /></noscript>
                    </div>
                    <div class="s2-right-tt">20+</div>
                    <p>Năm kinh nghiệm</p>
                  </div>
                  <div class="my-3 col-6 col-md-4">
                    <div class="img">
                      <img height="66" width="66" src="@/assets/uploads/2023/11/Dich_vu_doc_quyen_3ed4c174ae.png"
                        alt="6+" data-lazy-src="@/assets/uploads/2023/11/Dich_vu_doc_quyen_3ed4c174ae.png"
                        data-ll-status="loaded" class="entered lazyloaded"><noscript><img height="66" width="66"
                          src="@/assets/uploads/2023/11/Dich_vu_doc_quyen_3ed4c174ae.png" alt="6+" /></noscript>
                    </div>
                    <div class="s2-right-tt">6+</div>
                    <p>Dịch vụ di trú độc quyền </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="section-11">
              <div class="container">
                <div class="row">
                  <div class="col-12" data-aos="fade-up">
                    <h4 class="text-center si-title">GIẢI THƯỞNG</h4>
                    <div class="mb-5 text-center"></div>
                  </div>
                </div>
                <div class="justify-center row">
                  <div class="col-12">
                    <div class="awards-carousel">
                      <SlickCarousel :arrows="false" :dots="true" :infinite="true" :autoplay="true"
                        :autoplaySpeed="2000" :slidesToShow="4" :slidesToScroll="1" :responsive="responsiveSettings">
                        <div v-for="(award, index) in awards" :key="index" class="mt-5 text-center">
                          <img class="img-fluid" :src="award.image" :alt="award.title" />
                          <div class="my-1 so_nam">{{ award.type }}</div>
                          <div class="noi_nhan_giai">{{ award.title }}</div>
                        </div>
                      </SlickCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section id="section-3">
              <div class="mx-auto mb-0 si-banners">
                <SlickCarousel :arrows="true" :dots="true" :infinite="true" :autoplay="true" :autoplaySpeed="4000"
                  :slidesToShow="1" :slidesToScroll="1" :responsive="responsiveSettings">
                  <div v-for="(banner, index) in banners2" :key="index" class="position-relative banner-slide">
                    <a :href="banner.link" target="_blank" :title="banner.title">
                      <div class="position-relative bg-banner vh-80">
                        <!-- Ảnh desktop -->
                        <img class="d-md-block w-100 d-none" :src="banner.bgDesktop" :alt="banner.title" />
                        <!-- Ảnh mobile -->
                        <img class="d-block w-100 d-md-none" :src="banner.bgMobile || banner.bgDesktop"
                          :alt="banner.title" />

                        <div class="bg-overlay"></div>

                        <div class="top-0 left-0 position-absolute d-flex align-items-center w-100 h-100 banner-wrap">
                          <div class="px-4 text-content">
                            <h3 class="si-banners-tt">{{ banner.title }}</h3>
                            <p class="mt-3">{{ banner.description }}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </SlickCarousel>
              </div>
            </section>
            <div class="container">
              <div data-aos="fade-up" class="mt-5 row">
                <div class="mt-2 col-12">
                  <h2 class="text-center si-title">CHƯƠNG TRÌNH ĐỘC QUYỀN CỦA HOÀNG HÀ Group</h2>
                </div>
                <div class="col-12">
                  <div id="chuong-trinh-doc-quyen-cua-si-group" class="row">
                    <div data-id="15305" class="col-12 col-md-4">
                      <a target="_blank" href="#" title="Quốc tế hóa doanh nghiệp" class="mt-5 item">
                        <div class="position-relative img">
                          <img src="@/assets/uploads/2025/03/quoc-te-hoa-doanh-nghiep-thumb.jpg"
                            alt="Quốc tế hóa doanh nghiệp" class="blog-thumbnail img-fluid"
                            data-lazy-src="@/assets/uploads/2025/03/quoc-te-hoa-doanh-nghiep-thumb.jpg"><noscript><img
                              src="@/assets/uploads/2025/03/quoc-te-hoa-doanh-nghiep-thumb.jpg"
                              alt="Quốc tế hóa doanh nghiệp" class="blog-thumbnail img-fluid" /></noscript>
                          <div class="flag">
                            <div>
                              <img src="@/assets/uploads/2025/03/quoc-te-hoa-doanh-nghiep-thumb.jpg" alt="Định cư EU"
                                data-lazy-src="@/assets/uploads/2023/10/eu_ead2b9af1e.png"><noscript><img
                                  src="@/assets/uploads/2023/10/eu_ead2b9af1e.png" alt="Định cư EU" /></noscript>
                            </div>
                            <div><span>Định cư EU</span></div>
                          </div>
                        </div>
                        <h2 class="pt-3">Quốc tế hóa doanh nghiệp</h2>
                        <div class="py-2 si-3-line">
                          <p class="item-short-content">Quốc tế hóa doanh nghiệp là giải pháp độc quyền do HOÀNG HÀ
                            Group cung
                            cấp, dành riêng cho các nhà đầu tư và chủ doanh nghiệp Việt Nam mong muốn hưởng lợi ích kép
                            từ việc mở rộng quy mô kinh doanh vươn tầm thế giới. </p>
                        </div>
                      </a>
                    </div>
                    <div data-id="15313" class="col-12 col-md-4">
                      <a target="_blank" href="#"
                        title="Chương trình Đầu tư Sở hữu Quốc tịch Châu Âu chỉ trong 120 ngày" class="mt-5 item">
                        <div class="position-relative img">
                          <img src="@/assets/uploads/2025/03/dau-tu-so-huu-quoc-tich-chau-au-120-ngay-thumb.jpg"
                            alt="Chương trình Đầu tư Sở hữu Quốc tịch Châu Âu chỉ trong 120 ngày"
                            class="blog-thumbnail img-fluid"
                            data-lazy-src="@/assets/uploads/2025/03/dau-tu-so-huu-quoc-tich-chau-au-120-ngay-thumb.jpg"><noscript><img
                              src="@/assets/uploads/2025/03/dau-tu-so-huu-quoc-tich-chau-au-120-ngay-thumb.jpg"
                              alt="Chương trình Đầu tư Sở hữu Quốc tịch Châu Âu chỉ trong 120 ngày"
                              class="blog-thumbnail img-fluid" /></noscript>
                          <div class="flag">
                            <div>
                              <img src="@/assets/uploads/2025/03/dau-tu-so-huu-quoc-tich-chau-au-120-ngay-thumb.jpg"
                                alt="Định cư EU"
                                data-lazy-src="@/assets/uploads/2023/10/eu_ead2b9af1e.png"><noscript><img
                                  src="@/assets/uploads/2023/10/eu_ead2b9af1e.png" alt="Định cư EU" /></noscript>
                            </div>
                            <div><span>Định cư EU</span></div>
                          </div>
                        </div>
                        <h2 class="pt-3">Chương trình Đầu tư Sở hữu Quốc tịch Châu Âu chỉ trong 120 ngày</h2>
                        <div class="py-2 si-3-line">
                          <p class="item-short-content">Chỉ với vốn góp không hoàn lại từ 550,000 EUR/người, cả gia đình
                            nhà đầu tư hoàn toàn có thể sở hữu quốc tịch Châu Âu trong vòng 120 ngày và hưởng trọn vẹn
                            quyền lợi như công dân EU.
                          </p>
                        </div>
                      </a>
                    </div>
                    <div data-id="822" class="col-12 col-md-4">
                      <a target="_blank" href="#"
                        title="Tư vấn quản lý vận hành doanh nghiệp tại Úc cho nhà đầu tư 188A/132A" class="mt-5 item">
                        <div class="position-relative img">
                          <img src="@/assets/uploads/2023/11/2_ca0e447c97.png"
                            alt="Tư vấn quản lý vận hành doanh nghiệp tại Úc cho nhà đầu tư 188A/132A"
                            class="blog-thumbnail img-fluid"
                            data-lazy-src="@/assets/uploads/2023/11/2_ca0e447c97.png"><noscript><img
                              src="@/assets/uploads/2023/11/2_ca0e447c97.png"
                              alt="Tư vấn quản lý vận hành doanh nghiệp tại Úc cho nhà đầu tư 188A/132A"
                              class="blog-thumbnail img-fluid" /></noscript>
                          <div class="flag">
                            <div>
                              <img src="@/assets/uploads/2023/11/2_ca0e447c97.png" alt="Định cư Úc"
                                data-lazy-src="@/assets/uploads/2023/10/au_1dbaf56fd8.png"><noscript><img
                                  src="@/assets/uploads/2023/10/au_1dbaf56fd8.png" alt="Định cư Úc" /></noscript>
                            </div>
                            <div><span>Định cư Úc</span></div>
                          </div>
                        </div>
                        <h2 class="pt-3">Tư vấn quản lý vận hành doanh nghiệp tại Úc cho nhà đầu tư 188A/132A</h2>
                        <div class="py-2 si-3-line">
                          <p class="item-short-content">Tư vấn thủ tục thành lập, quản lý vận hành doanh nghiệp Úc đáp
                            ứng điều kiện nộp hồ sơ lên thường trú nhân Visa 888A hoặc hoàn thành thời gian nghiệm thu
                            kinh doanh hoặc nghiệm thu doanh nghiệp theo yêu cầu của Visa 132A. </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="row">
                    <div class="text-center col-12">
                      <!--<div data-id="chuong-trinh-doc-quyen-cua-si-group" class="mt-4 si-btn home-more">Xem thêm</div>-->
                      <a target="_blank" href="#" class="mt-4 si-btn">Xem thêm</a>
                    </div>
                    <div class="col-12">
                      <div class="my-10 si-line"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" class="mt-5 row">
                <div class="col-12">
                  <h2 class="text-center si-title">GIẢI PHÁP XỬ LÝ HỒ SƠ CHUYÊN BIỆT</h2>
                </div>
                <div class="col-12">
                  <div id="giai-phap-xu-ly-ho-so-doc-quyen" class="row">
                    <div data-id="14698" class="col-12 col-md-4">
                      <a target="_blank" href="#" title="Giải pháp Đầu tư sở hữu Quốc tịch Malta cùng HOÀNG HÀ Group"
                        class="mt-5 item">
                        <div class="position-relative img">
                          <img src="@/assets/uploads/2025/02/Anh-chup-Man-hinh-2025-02-25-luc-14.38.55.jpg"
                            alt="Giải pháp Đầu tư sở hữu Quốc tịch Malta cùng HOÀNG HÀ Group"
                            class="blog-thumbnail img-fluid"
                            data-lazy-src="@/assets/uploads/2025/02/Anh-chup-Man-hinh-2025-02-25-luc-14.38.55.jpg"><noscript><img
                              src="@/assets/uploads/2025/02/Anh-chup-Man-hinh-2025-02-25-luc-14.38.55.jpg"
                              alt="Giải pháp Đầu tư sở hữu Quốc tịch Malta cùng HOÀNG HÀ Group"
                              class="blog-thumbnail img-fluid" /></noscript>
                          <div class="flag">
                            <div>
                              <img src="@/assets/uploads/2025/02/Anh-chup-Man-hinh-2025-02-25-luc-14.38.55.jpg"
                                alt="Định cư EU"
                                data-lazy-src="@/assets/uploads/2023/10/eu_ead2b9af1e.png"><noscript><img
                                  src="@/assets/uploads/2023/10/eu_ead2b9af1e.png" alt="Định cư EU" /></noscript>
                            </div>
                            <div><span>Định cư EU</span></div>
                          </div>
                        </div>
                        <h2 class="pt-3">Giải pháp Đầu tư sở hữu Quốc tịch Malta cùng HOÀNG HÀ Group</h2>
                        <div class="py-2 si-3-line">
                          <p class="item-short-content">Đầu tư sở hữu Quốc tịch Malta cùng HOÀNG HÀ Group, nhà đầu tư
                            được đảm
                            bảo sở hữu Quốc tịch Malta chỉ sau 12 tháng với tỷ lệ thành công gần như tuyệt đối. </p>
                        </div>
                      </a>
                    </div>
                    <div data-id="10056" class="col-12 col-md-4">
                      <a target="_blank" href="#" title="Chương trình thành lập doanh nghiệp tự bảo lãnh tại Thụy Sĩ"
                        class="mt-5 item">
                        <div class="position-relative img">
                          <img
                            src="@/assets/uploads/2024/09/Chuong-trinh-thanh-lap-doanh-nghiep-tu-bao-lanh-tai-Thuy-Si.jpg"
                            alt="Chương trình thành lập doanh nghiệp tự bảo lãnh tại Thụy Sĩ"
                            class="blog-thumbnail img-fluid"
                            data-lazy-src="@/assets/uploads/2024/09/Chuong-trinh-thanh-lap-doanh-nghiep-tu-bao-lanh-tai-Thuy-Si.jpg"><noscript><img
                              src="@/assets/uploads/2024/09/Chuong-trinh-thanh-lap-doanh-nghiep-tu-bao-lanh-tai-Thuy-Si.jpg"
                              alt="Chương trình thành lập doanh nghiệp tự bảo lãnh tại Thụy Sĩ"
                              class="blog-thumbnail img-fluid" /></noscript>
                          <div class="flag">
                            <div>
                              <img
                                src="@/assets/uploads/2024/09/Chuong-trinh-thanh-lap-doanh-nghiep-tu-bao-lanh-tai-Thuy-Si.jpg"
                                alt="Định cư Thụy Sĩ"
                                data-lazy-src="@/assets/uploads/2024/09/switzerlan-national-flag-photo-4k-swiss-flag-waving-3d.jpg"><noscript><img
                                  src="@/assets/uploads/2024/09/switzerlan-national-flag-photo-4k-swiss-flag-waving-3d.jpg"
                                  alt="Định cư Thụy Sĩ" /></noscript>
                            </div>
                            <div><span>Định cư Thụy Sĩ</span></div>
                          </div>
                        </div>
                        <h2 class="pt-3">Chương trình thành lập doanh nghiệp tự bảo lãnh tại Thụy Sĩ</h2>
                        <div class="py-2 si-3-line">
                          <p class="item-short-content">Với vốn thành lập doanh nghiệp ban đầu chỉ từ 20,000 CHF, Chương
                            trình thành lập doanh nghiệp tự bảo lãnh tại Thụy Sĩ mang đến cơ hội trở thành công dân Thụy
                            Sĩ cho nhà đầu tư và gia đình sau 10 năm. </p>
                        </div>
                      </a>
                    </div>
                    <div data-id="690" class="col-12 col-md-4">
                      <a target="_blank" href="#" title="Giải pháp đầu tư EB-5 độc quyền cùng HOÀNG HÀ Group"
                        class="mt-5 item">
                        <div class="position-relative img">
                          <img src="@/assets/uploads/2023/11/2_f164830d12.png"
                            alt="Giải pháp đầu tư EB-5 độc quyền cùng HOÀNG HÀ Group" class="blog-thumbnail img-fluid"
                            data-lazy-src="@/assets/uploads/2023/11/2_f164830d12.png"><noscript><img
                              src="@/assets/uploads/2023/11/2_f164830d12.png"
                              alt="Giải pháp đầu tư EB-5 độc quyền cùng HOÀNG HÀ Group"
                              class="blog-thumbnail img-fluid" /></noscript>
                          <div class="flag">
                            <div>
                              <img src="@/assets/uploads/2023/11/2_f164830d12.png" alt="Định cư Mỹ"
                                data-lazy-src="@/assets/uploads/2023/10/us_72cc7bdefa.png"><noscript><img
                                  src="@/assets/uploads/2023/10/us_72cc7bdefa.png" alt="Định cư Mỹ" /></noscript>
                            </div>
                            <div><span>Định cư Mỹ</span></div>
                          </div>
                        </div>
                        <h2 class="pt-3">Giải pháp đầu tư EB-5 độc quyền cùng HOÀNG HÀ Group</h2>
                        <div class="py-2 si-3-line">
                          <p class="item-short-content">Điều làm nên khác biệt khi đầu tư EB-5 cùng HOÀNG HÀ Group là
                            các cam
                            kết được thể hiện rõ trong hợp đồng với nhà đầu tư về tiến độ và kết quả nhận được.</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="row">
                    <div class="text-center col-12">
                      <!--<div data-id="giai-phap-xu-ly-ho-so-doc-quyen" class="mt-4 si-btn home-more">Xem thêm</div>-->
                      <a target="_blank" href="#" class="mt-4 si-btn">Xem thêm</a>
                    </div>
                    <div class="col-12">
                      <div class="my-10 si-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="section-7 transform container">
              <div class="si-banners">
                <div class="banner-events">
                  <SlickCarousel :="true" :dots="true" :infinite="true" :autoplay="false" :autoplaySpeed="2000"
                    :slidesToShow="1" :slidesToScroll="1">
                    <!-- Slide 1 -->
                    <a target="_blank" href="#"
                      title="HOÀNG HÀ Group ký kết hợp tác chiến lược tại sự kiện đầu tư Solomon, thúc đẩy phát triển Đặc khu Kinh tế SEZ">
                      <div class="position-relative justify-center align-items-center bg-banner vh-80" :style="{
                        background: `url(${require('@/assets/uploads/2025/06/su-kien-dau-tu-solomon.jpg')}) center/cover no-repeat`
                      }">
                        <div class="bg-overlay"></div>
                        <div class="position-relative w-100 h-100 banner-wrap">
                          <div class="mb-13 w-100">
                            <h2>
                              HOÀNG HÀ Group ký kết hợp tác chiến lược tại sự kiện đầu tư
                              Solomon, thúc
                              đẩy phát triển Đặc khu Kinh tế SEZ
                            </h2>
                            <div class="mt-3 mb-2">
                              <span>
                                Lễ ký kết hợp tác chiến lược giữa HOÀNG HÀ Group và Chính
                                phủ
                                Solomon Islands đánh dấu cột mốc lần đầu tiên
                                một doanh nghiệp Việt giữ vai trò cố vấn chiến lược
                                và
                                nhà đầu tư ưu tiên trong quá trình phát triển
                                Đặc khu Kinh tế SEZ quốc tế.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>


                    <!-- Slide 2 -->
                    <a target="_blank" href="#"
                      title="Bộ Ngoại giao Mỹ trao tặng Giải thưởng đóng góp xuất sắc cho Phó Chủ tịch HĐQT HOÀNG HÀ Group – Bà Nguyễn Thị Bích Hà">
                      <div class="position-relative justify-center align-items-center bg-banner vh-80" :style="{
                        background: `url(${require('@/assets/uploads/2025/04/Thumbnail-1-1.jpg')}) center/cover no-repeat`
                      }">
                        <div class="bg-overlay"></div>
                        <div class="position-relative w-100 h-100 banner-wrap">
                          <div class="mb-13 w-100">
                            <h2>Bộ Ngoại giao Mỹ trao tặng Giải thưởng đóng góp xuất sắc
                              cho
                              Phó Chủ tịch HĐQT HOÀNG HÀ Group – Bà Nguyễn Thị Bích Hà</h2>
                            <div class="mt-3 mb-2">
                              <span>
                                Nhằm ghi nhận những đóng góp quan trọng trong việc
                                thúc
                                đẩy quá trình ký kết Hiệp định Thương mại
                                Song phương Việt Nam – Hoa Kỳ vào năm 2000, bà
                                Nguyễn
                                Thị Bích Hà, hiện giữ vị trí Phó Chủ tịch Hội
                                đồng Quản trị Tập đoàn HOÀNG HÀ Group, đã vinh dự được
                                trao
                                tặng giải thưởng “2002 Foreign Service National
                                of the Year Award”.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <!-- Slide 3 -->
                    <a target="_blank" href="#"
                      title="Hội thảo Quản lý Gia sản – Quốc tế hoá doanh nghiệp & Độc quyền sở hữu quốc tịch">
                      <div class="position-relative justify-center align-items-center bg-banner vh-80" :style="{
                        background: `url(${require('@/assets/uploads/2025/04/Thumbnail-3-1.jpg')}) center/cover no-repeat`
                      }">
                        <div class="bg-overlay"></div>
                        <div class="position-relative w-100 h-100 banner-wrap">
                          <div class="mb-13 w-100">
                            <h2>Hội thảo Quản lý Gia sản – Quốc tế hoá doanh nghiệp &
                              Độc
                              quyền sở hữu quốc tịch</h2>
                            <div class="mt-3 mb-2">
                              <span>
                                Vào ngày 29/03/2025 tại Hà Nội và 05/04/2025 tại TP.
                                Hồ
                                Chí Minh, Techcombank phối hợp cùng HOÀNG HÀ Group
                                tổ chức thành công hội thảo “Quản lý Gia sản – Quốc
                                tế
                                hóa Doanh nghiệp & Độc quyền Sở hữu Quốc tịch”.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </SlickCarousel>
                </div>
              </div>

            </div>



            <div id="section-8" class="py-10 container">
              <div class="row">
                <div class="col-12" data-aos="fade-up">
                  <h4 class="text-center si-title">SỰ KIỆN </h4>
                </div>
                <div class="col-12" data-aos="fade-up">
                  <div class="wrap-evt-home slick-initialized slick-slider slick-dotted">
                    <SlickCarousel :="true" :dots="true" :infinite="true" :autoplay="true" :autoplaySpeed="2000"
                      :slidesToShow="3" :slidesToScroll="1">
                      <a target="_blank" href="#"
                        title="HOÀNG HÀ Group ký kết hợp tác chiến lược tại sự kiện đầu tư Solomon, thúc đẩy phát triển Đặc khu Kinh tế SEZ"
                        class="mt-5 px-3 si-event" tabindex="0">
                        <div class="img">
                          <img src="@/assets/uploads/2025/06/su-kien-dau-tu-solomon.jpg"
                            alt="HOÀNG HÀ Group ký kết hợp tác chiến lược tại sự kiện đầu tư Solomon, thúc đẩy phát triển Đặc khu Kinh tế SEZ"
                            class="blog-thumbnail img-fluid"
                            data-lazy-src="@/assets/uploads/2025/06/su-kien-dau-tu-solomon.jpg"><noscript><img
                              src="@/assets/uploads/2025/06/su-kien-dau-tu-solomon.jpg"
                              alt="HOÀNG HÀ Group ký kết hợp tác chiến lược tại sự kiện đầu tư Solomon, thúc đẩy phát triển Đặc khu Kinh tế SEZ"
                              class="blog-thumbnail img-fluid" /></noscript>
                        </div>
                        <div class="info">
                          <h4 class="mb-2">HOÀNG HÀ Group ký kết hợp tác chiến lược tại sự kiện đầu tư Solomon,
                            thúc đẩy
                            phát triển Đặc khu Kinh tế SEZ</h4>
                          <p class="d-flex align-items-center mb-1">
                            <span class="clock"></span><span>30/05/2025</span>
                          </p>
                          <p class="d-flex align-items-center mb-1">
                            <span class="location"></span><span>Hà Nội</span>
                          </p>
                        </div>
                      </a>
                      <a target="_blank" href="#"
                        title="Bộ Ngoại giao Mỹ trao tặng Giải thưởng đóng góp xuất sắc cho Phó Chủ tịch HĐQT HOÀNG HÀ Group – Bà Nguyễn Thị Bích Hà"
                        class="mt-5 px-3 si-event" tabindex="0">
                        <div class="img">
                          <img src="@/assets/uploads/2025/04/Thumbnail-1-1.jpg"
                            alt="Bộ Ngoại giao Mỹ trao tặng Giải thưởng đóng góp xuất sắc cho Phó Chủ tịch HĐQT HOÀNG HÀ Group – Bà Nguyễn Thị Bích Hà"
                            class="blog-thumbnail img-fluid"
                            data-lazy-src="@/assets/uploads/2025/04/Thumbnail-1-1.jpg"><noscript><img
                              src="@/assets/uploads/2025/04/Thumbnail-1-1.jpg"
                              alt="Bộ Ngoại giao Mỹ trao tặng Giải thưởng đóng góp xuất sắc cho Phó Chủ tịch HĐQT HOÀNG HÀ Group &#8211; Bà Nguyễn Thị Bích Hà"
                              class="blog-thumbnail img-fluid" /></noscript>
                        </div>
                        <div class="info">
                          <h4 class="mb-2">Bộ Ngoại giao Mỹ trao tặng Giải thưởng đóng góp xuất sắc cho Phó Chủ
                            tịch
                            HĐQT HOÀNG HÀ Group – Bà Nguyễn Thị Bích Hà</h4>
                          <p class="d-flex align-items-center mb-1">
                            <span class="clock"></span><span></span>
                          </p>
                          <p class="d-flex align-items-center mb-1">
                            <span class="location"></span><span></span>
                          </p>
                        </div>
                      </a>
                      <a target="_blank" href="#"
                        title="Lãnh đạo HOÀNG HÀ Group thảo luận với chính quyền bang Queensland về chiến lược hợp tác đầu tư&nbsp;"
                        class="mt-5 px-3 si-event" tabindex="0">
                        <div class="img">
                          <img src="@/assets/uploads/2025/04/SI-Group-gap-go-chinh-quyen-bang-Queensland_thumb.jpg"
                            alt="Lãnh đạo HOÀNG HÀ Group thảo luận với chính quyền bang Queensland về chiến lược hợp tác đầu tư&nbsp;"
                            class="blog-thumbnail img-fluid"
                            data-lazy-src="@/assets/uploads/2025/04/SI-Group-gap-go-chinh-quyen-bang-Queensland_thumb.jpg"><noscript><img
                              src="@/assets/uploads/2025/04/SI-Group-gap-go-chinh-quyen-bang-Queensland_thumb.jpg"
                              alt="Lãnh đạo HOÀNG HÀ Group thảo luận với chính quyền bang Queensland về chiến lược hợp tác đầu tư "
                              class="blog-thumbnail img-fluid" /></noscript>
                        </div>
                        <div class="info">
                          <h4 class="mb-2">Lãnh đạo HOÀNG HÀ Group thảo luận với chính quyền bang Queensland về
                            chiến
                            lược
                            hợp tác đầu tư&nbsp;</h4>
                          <p class="d-flex align-items-center mb-1">
                            <span class="clock"></span><span></span>
                          </p>
                          <p class="d-flex align-items-center mb-1">
                            <span class="location"></span><span></span>
                          </p>
                        </div>
                      </a>
                    </SlickCarousel>
                  </div>
                </div>
              </div>
            </div>
            <div id="section-bc" class="py-10 container">
              <div data-aos="fade-up" class="mt-5 row">
                <div class="col-12">
                  <h2 class="text-center si-title">BÁO CHÍ</h2>
                </div>
                <div class="col-12">
                  <div class="row" id="newspapers">
                    <div data-id="9209" class="col-12 col-md-4">
                      <a target="_blank" href="#"
                        title="Tập đoàn di trú Việt tự hào với giải thưởng Thương hiệu Tín nhiệm hàng đầu Châu Á"
                        class="mt-5 item">
                        <div class="position-relative img">
                          <img src="@/assets/uploads/2024/09/Giai-thuong-Tin-nhiem-hang-dau-Chau-A-2024.jpg"
                            alt="Tập đoàn di trú Việt tự hào với giải thưởng Thương hiệu Tín nhiệm hàng đầu Châu Á"
                            class="blog-thumbnail img-fluid"
                            data-lazy-src="@/assets/uploads/2024/09/Giai-thuong-Tin-nhiem-hang-dau-Chau-A-2024.jpg"><noscript><img
                              src="@/assets/uploads/2024/09/Giai-thuong-Tin-nhiem-hang-dau-Chau-A-2024.jpg"
                              alt="Tập đoàn di trú Việt tự hào với giải thưởng Thương hiệu Tín nhiệm hàng đầu Châu Á"
                              class="blog-thumbnail img-fluid" /></noscript>
                        </div>
                        <h2 class="pt-3">Tập đoàn di trú Việt tự hào với giải thưởng Thương hiệu Tín nhiệm hàng đầu
                          Châu
                          Á</h2>
                        <div class="py-2 si-3-line">
                          <p class="item-short-content">HOÀNG HÀ Group đã xây dựng hệ sinh thái an cư toàn cầu, đánh dấu
                            năm
                            thứ 25 hoạt động và phát triển.</p>
                        </div>
                      </a>
                    </div>
                    <div data-id="9208" class="col-12 col-md-4">
                      <a target="_blank" href="#"
                        title="Tập đoàn di trú Việt tự hào nhận giải Thương hiệu Tín nhiệm hàng đầu Châu Á"
                        class="mt-5 item">
                        <div class="position-relative img">
                          <img src="@/assets/uploads/2024/08/3-sigroup56-1722585307257279057371.webp"
                            alt="Tập đoàn di trú Việt tự hào nhận giải Thương hiệu Tín nhiệm hàng đầu Châu Á"
                            class="blog-thumbnail img-fluid"
                            data-lazy-src="@/assets/uploads/2024/08/3-sigroup56-1722585307257279057371.webp"><noscript><img
                              src="@/assets/uploads/2024/08/3-sigroup56-1722585307257279057371.webp"
                              alt="Tập đoàn di trú Việt tự hào nhận giải Thương hiệu Tín nhiệm hàng đầu Châu Á"
                              class="blog-thumbnail img-fluid" /></noscript>
                        </div>
                        <h2 class="pt-3">Tập đoàn di trú Việt tự hào nhận giải Thương hiệu Tín nhiệm hàng đầu Châu Á
                        </h2>
                        <div class="py-2 si-3-line">
                          <p class="item-short-content">HOÀNG HÀ Group vinh dự nằm trong Top 10 Thương hiệu Tín nhiệm
                            hàng
                            đầu
                            Châu Á và Nhà lãnh đạo xuất sắc Châu Á.</p>
                        </div>
                      </a>
                    </div>
                    <div data-id="8445" class="col-12 col-md-4">
                      <a target="_blank" href="#"
                        title="HOÀNG HÀ Group tự hào với Giải thưởng Thương hiệu Tín nhiệm hàng đầu Châu Á"
                        class="mt-5 item">
                        <div class="position-relative img">
                          <img src="@/assets/uploads/2024/08/1-sigroup56-17225851943401113341346.webp"
                            alt="HOÀNG HÀ Group tự hào với Giải thưởng Thương hiệu Tín nhiệm hàng đầu Châu Á"
                            class="blog-thumbnail img-fluid"
                            data-lazy-src="@/assets/uploads/2024/08/1-sigroup56-17225851943401113341346.webp"><noscript><img
                              src="@/assets/uploads/2024/08/1-sigroup56-17225851943401113341346.webp"
                              alt="HOÀNG HÀ Group tự hào với Giải thưởng Thương hiệu Tín nhiệm hàng đầu Châu Á"
                              class="blog-thumbnail img-fluid" /></noscript>
                        </div>
                        <h2 class="pt-3">HOÀNG HÀ Group tự hào với Giải thưởng Thương hiệu Tín nhiệm hàng đầu Châu Á
                        </h2>
                        <div class="py-2 si-3-line">
                          <p class="item-short-content">Đánh dấu năm thứ 25 hoạt động và phát triển, HOÀNG HÀ Group tự
                            hào
                            với
                            Thương hiệu Tín nhiệm hàng đầu Châu Á và Thương hiệu Mạnh Quốc gia.</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="text-center col-12">
                  <div data-id="newspapers" class="mt-4 si-btn newspapers-more">Tải thêm</div>
                </div>
                <div class="col-12">
                  <div class="my-10 si-line"></div>
                </div>
              </div>
            </div>
            <div id="section-9" class="mt-5 mb-4 container">
              <div class="row">
                <div class="col-12" data-aos="fade-up">
                  <h4 class="text-center si-title">TIN TỨC CẬP NHẬT</h4>
                </div>
              </div>
              <div class="d-flex align-items-stretch row">
                <div class="col-12 col-md-7" data-aos="fade-right">
                  <a target="_blank" href="#" title="Bộ An ninh Nội địa Hoa Kỳ (DHS) đề xuất giảm phí chương trình EB-5"
                    class="d-block h-100 new big">
                    <div class="img">
                      <img src="@/assets/uploads/2025/10/Anh-size-moi-1-4.jpg"
                        alt="Bộ An ninh Nội địa Hoa Kỳ (DHS) đề xuất giảm phí chương trình EB-5" class="blog-thumbnail"
                        data-lazy-src="@/assets/uploads/2025/10/Anh-size-moi-1-4.jpg"><noscript><img
                          src="@/assets/uploads/2025/10/Anh-size-moi-1-4.jpg"
                          alt="Bộ An ninh Nội địa Hoa Kỳ (DHS) đề xuất giảm phí chương trình EB-5"
                          class="blog-thumbnail" /></noscript>
                    </div>
                    <div class="info">
                      <h4 class="mb-2">Bộ An ninh Nội địa Hoa Kỳ (DHS) đề xuất giảm phí chương trình EB-5</h4>
                      <!-- <h3 class="mb-2">{{ featureNews.ProgramTypeName || "" }}</h3>
                                        <p class="py-3" v-html="featureNews.bref"></p> -->
                      <span class="d-block pb-2">25/10/2025</span>
                    </div>
                  </a>
                </div>
                <div data-aos="fade-left" class="d-flex flex-wrap align-content-space-between col-12 col-md-5">
                  <a target="_blank" href="#"
                    title="Lỗ hổng mới trong chương trình Express Entry Canada: Gian lận kết quả thi tiếng Pháp"
                    class="d-flex w-100 new">
                    <div class="img ratio ratio-16x9">
                      <img src="@/assets/uploads/2025/10/Anh-size-moi-16.jpg"
                        alt="Lỗ hổng mới trong chương trình Express Entry Canada: Gian lận kết quả thi tiếng Pháp"
                        class="blog-thumbnail"
                        data-lazy-src="@/assets/uploads/2025/10/Anh-size-moi-16.jpg"><noscript><img
                          src="@/assets/uploads/2025/10/Anh-size-moi-16.jpg"
                          alt="Lỗ hổng mới trong chương trình Express Entry Canada: Gian lận kết quả thi tiếng Pháp"
                          class="blog-thumbnail" /></noscript>
                    </div>
                    <div class="info">
                      <h4 class="mb-2">Lỗ hổng mới trong chương trình Express Entry Canada: Gian lận kết quả thi tiếng
                        Pháp</h4>
                      <p>20/10/2025</p>
                    </div>
                  </a>
                  <a target="_blank" href="#" title="Mua nhà ở Úc có được định cư không? Bí quyết mua nhà tại Úc"
                    class="d-flex w-100 new">
                    <div class="img ratio ratio-16x9">
                      <img src="@/assets/uploads/2024/05/Anh-size-moi-12.jpg"
                        alt="Mua nhà ở Úc có được định cư không? Bí quyết mua nhà tại Úc" class="blog-thumbnail"
                        data-lazy-src="@/assets/uploads/2024/05/Anh-size-moi-12.jpg"><noscript><img
                          src="@/assets/uploads/2024/05/Anh-size-moi-12.jpg"
                          alt="Mua nhà ở Úc có được định cư không? Bí quyết mua nhà tại Úc"
                          class="blog-thumbnail" /></noscript>
                    </div>
                    <div class="info">
                      <h4 class="mb-2">Mua nhà ở Úc có được định cư không? Bí quyết mua nhà tại Úc</h4>
                      <p>17/10/2025</p>
                    </div>
                  </a>
                  <a target="_blank" href="#" title="Đầu tư bất động sản Úc là gì? Kinh nghiệm cho nhà đầu tư Việt 2025"
                    class="d-flex w-100 new">
                    <div class="img ratio ratio-16x9">
                      <img src="@/assets/uploads/2025/10/Anh-size-moi-6.jpg"
                        alt="Đầu tư bất động sản Úc là gì? Kinh nghiệm cho nhà đầu tư Việt 2025" class="blog-thumbnail"
                        data-lazy-src="@/assets/uploads/2025/10/Anh-size-moi-6.jpg"><noscript><img
                          src="@/assets/uploads/2025/10/Anh-size-moi-6.jpg"
                          alt="Đầu tư bất động sản Úc là gì? Kinh nghiệm cho nhà đầu tư Việt 2025"
                          class="blog-thumbnail" /></noscript>
                    </div>
                    <div class="info">
                      <h4 class="mb-2">Đầu tư bất động sản Úc là gì? Kinh nghiệm cho nhà đầu tư Việt 2025</h4>
                      <p>16/10/2025</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div id="section-10" class="mx-auto py-10 si-form">
              <div class="my-3 container">
                <div class="row">
                  <div class="col-12 col-md-6 info-contact">
                    <div class="si-form-tt">Liên Hệ Tư Vấn</div>
                    <div class="my-4">
                      Điều làm nên khác biệt của HOÀNG HÀ Group chính là từng giải pháp được cá nhân hóa phù hợp với nhu
                      cầu,
                      điều kiện riêng biệt của từng Quý khách hàng. Chúng tôi cung cấp giải pháp tối ưu nhất dành
                      riêng
                      cho Quý khách, đồng thời cam kết tỷ lệ thành công và thời gian hoàn thành cho từng dịch
                      vụ.<br>Để
                      được tư vấn chính xác, nhanh chóng và bảo mật, Quý khách liên hệ trực tiếp Hotline <a
                        href="#">+84 856 936 666</a> hoặc để lại thông tin. Đội ngũ với hơn 20 năm kinh
                      nghiệm của HOÀNG HÀ Group luôn sẵn sàng để kết nối và tư vấn miễn phí. </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <form ref="contactForm" class="home-contact" data-hs-cf-bound="true">
                      <div class="mb-3">
                        <input type="text" class="form-control" id="firstname" name="firstname"
                          placeholder="Họ và Tên*">
                      </div>
                      <div class="row">
                        <div class="mb-3 col-12 col-md-6 d-none">
                          <input type="number" class="form-control" id="your_age" name="your_age" value="2025"
                            placeholder="Năm sinh*">
                        </div>
                        <div class="mb-3 col-12">
                          <input type="text" class="form-control" id="phone" name="phone" placeholder="Số điện thoại*">
                        </div>
                      </div>
                      <div class="mb-3">
                        <input type="email" class="form-control" id="email" name="email" placeholder="Email*">
                      </div>
                      <div class="mb-3">
                        <select class="form-control" name="danh_muc_quan_tam" id="danh_muc_quan_tam">
                          <option value="">Danh mục quan tâm*</option>
                          <option value="Định cư Úc tay nghề">Định cư Úc tay nghề</option>
                          <option value="Định cư Úc đầu tư">Định cư Úc đầu tư</option>
                          <option value="Định cư Mỹ tay nghề">Định cư Mỹ tay nghề</option>
                          <option value="Định cư Mỹ Doanh nhân/Đầu tư">Định cư Mỹ Doanh nhân/Đầu tư</option>
                          <option value="Định cư Canada lao động">Định cư Canada lao động</option>
                          <option value="Định cư Canada đầu tư">Định cư Canada đầu tư</option>
                          <option value="Định cư Châu Âu">Định cư Châu Âu</option>
                          <option value="Định cư Bulgaria">Định cư Bulgaria</option>
                          <option value="Định cư NewZealand">Định cư NewZealand</option>
                          <option value="Định cư Hy Lạp">Định cư Hy Lạp</option>
                          <option value="Bất động sản">Bất động sản</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <select class="form-control" name="chuong_trinh_quan_tam" id="chuong_trinh_quan_tam"
                          >
                          <option value="">Chương trình quan tâm*</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <select class="form-control" name="thanh_pho" id="thanh_pho">
                          <option value="">Tỉnh thành đang sinh sống*</option>
                          <option value="Hòa Bình">Hòa Bình</option>
                          <option value="Sơn La">Sơn La</option>
                          <option value="Điện Biên">Điện Biên</option>
                          <option value="Lai Châu">Lai Châu</option>
                          <option value="Lào Cai">Lào Cai</option>
                          <option value="Yên Bái">Yên Bái</option>
                          <option value="Phú Thọ">Phú Thọ</option>
                          <option value="Hà Giang">Hà Giang</option>
                          <option value="Tuyên Quang">Tuyên Quang</option>
                          <option value="Cao Bằng">Cao Bằng</option>
                          <option value="Bắc Kạn">Bắc Kạn</option>
                          <option value="Thái Nguyên">Thái Nguyên</option>
                          <option value="Lạng Sơn">Lạng Sơn</option>
                          <option value="Bắc Giang">Bắc Giang</option>
                          <option value="Quảng Ninh">Quảng Ninh</option>
                          <option value="Hà Nội">Hà Nội</option>
                          <option value="Bắc Ninh">Bắc Ninh</option>
                          <option value="Hà Nam">Hà Nam</option>
                          <option value="Hải Dương">Hải Dương</option>
                          <option value="Hải Phòng">Hải Phòng</option>
                          <option value="Hưng Yên">Hưng Yên</option>
                          <option value="Nam Định">Nam Định</option>
                          <option value="Thái Bình">Thái Bình</option>
                          <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                          <option value="Ninh Bình">Ninh Bình</option>
                          <option value="Thanh Hóa">Thanh Hóa</option>
                          <option value="Nghệ An">Nghệ An</option>
                          <option value="Hà Tĩnh">Hà Tĩnh</option>
                          <option value="Quảng Bình">Quảng Bình</option>
                          <option value="Quảng Trị">Quảng Trị</option>
                          <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
                          <option value="Đà Nẵng">Đà Nẵng</option>
                          <option value="Quảng Nam">Quảng Nam</option>
                          <option value="Quảng Ngãi">Quảng Ngãi</option>
                          <option value="Bình Định">Bình Định</option>
                          <option value="Phú Yên">Phú Yên</option>
                          <option value="Khánh Hòa">Khánh Hòa</option>
                          <option value="Ninh Thuận">Ninh Thuận</option>
                          <option value="Bình Thuận">Bình Thuận</option>
                          <option value="Kon Tum">Kon Tum</option>
                          <option value="Gia Lai">Gia Lai</option>
                          <option value="Đắk Lắk">Đắk Lắk</option>
                          <option value="Đắk Nông">Đắk Nông</option>
                          <option value="Lâm Đồng">Lâm Đồng</option>
                          <option value="TP Hồ Chí Minh">TP Hồ Chí Minh</option>
                          <option value="Bà rịa Vũng Tàu">Bà rịa Vũng Tàu</option>
                          <option value="Bình Dương">Bình Dương</option>
                          <option value="Bình Phước">Bình Phước</option>
                          <option value="Đồng Nai">Đồng Nai</option>
                          <option value="Tây Ninh">Tây Ninh</option>
                          <option value="An Giang">An Giang</option>
                          <option value="Bạc Liêu">Bạc Liêu</option>
                          <option value="Bến Tre">Bến Tre</option>
                          <option value="Cà Mau">Cà Mau</option>
                          <option value="Cần Thơ">Cần Thơ</option>
                          <option value="Đồng Tháp">Đồng Tháp</option>
                          <option value="Hậu Giang">Hậu Giang</option>
                          <option value="Kiên Giang">Kiên Giang</option>
                          <option value="Long An">Long An</option>
                          <option value="Sóc Trăng">Sóc Trăng</option>
                          <option value="Tiền Giang">Tiền Giang</option>
                          <option value="Trà Vinh">Trà Vinh</option>
                          <option value="Vĩnh Long">Vĩnh Long</option>
                          <option value="Nước ngoài">Nước ngoài</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <textarea class="form-control" id="message" name="message" placeholder="Ghi chú"
                          rows="3"></textarea>
                      </div>
                      <input type="hidden" id="utm_source" name="utm_source" value="">
                      <input type="hidden" id="utm_medium" name="utm_medium" value="">
                      <input type="hidden" id="utm_campaign" name="utm_campaign" value="">
                      <input type="hidden" id="utm_id" name="utm_id" value="">
                      <input type="hidden" id="utm_term" name="utm_term" value="">
                      <input type="hidden" id="utm_content" name="utm_content" value="">
                      <input type="hidden" id="nguon_lead" name="nguon_lead" value="">

                      <input type="hidden" id="hsa_acc" name="hsa_acc" value="">
                      <input type="hidden" id="hsa_cam" name="hsa_cam" value="">
                      <input type="hidden" id="hsa_grp" name="hsa_grp" value="">
                      <input type="hidden" id="hsa_ad" name="hsa_ad" value="">
                      <input type="hidden" id="hsa_src" name="hsa_src" value="">
                      <input type="hidden" id="hsa_net" name="hsa_net" value="">
                      <input type="hidden" id="hsa_ver" name="hsa_ver" value="">
                      <div class="d-flex flex-wrap align-items-center w-100">
                        <button class="si-btn" type="submit">Gửi đi</button>
                        <div class="ml-4 home-contact-alert"></div>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <style>
          @media (max-width: 820px) {
            #section-3 .slick-arrow {
              display: block !important;
            }

            .si-banners .slick-arrow {
              width: 40px;
              height: 40px;
            }

            #section-3 .slick-arrow {
              top: 21%;
            }

            #section-7 .slick-arrow {
              top: 22%;
            }
          }
        </style>
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
      banners: [
        {
          title: "Úc",
          bgDesktop: require("@/assets/uploads/2023/11/caleb_Jmuy_B_Lib_Ro_unsplash_0e97325b0d.webp"),
          bgMobile: require("@/assets/uploads/2023/11/caleb_Jmuy_B_Lib_Ro_unsplash_0e97325b0d_mb.webp"),
          stats: {
            "Tỷ lệ dân nhập cư": "29.2%",
            "Hạn ngạch 2025": "185,000",
            "Xếp hạng hộ chiếu": "Top 7/199 thế giới",
            "Đi lại tự do": "173 nước",
            "Xếp hạng giáo dục": "Top 8/85",
          },
        },
        {
          title: "Mỹ",
          bgDesktop: require("@/assets/uploads/2023/11/caleb_Jmuy_B_Lib_Ro_unsplash_0e97325b0d.webp"),
          bgMobile: require("@/assets/uploads/2023/11/caleb_Jmuy_B_Lib_Ro_unsplash_0e97325b0d.webp"),
          stats: {
            "Tỷ lệ dân nhập cư": "13.6%",
            "Hạn ngạch 2025": "366,000",
            "Xếp hạng hộ chiếu": "Top 8/199 thế giới",
            "Đi lại tự do": "172 nước",
            "Xếp hạng giáo dục": "Top 1/85",
          },
        },
        {
          title: "Canada",
          bgDesktop: require("@/assets/uploads/2023/10/Canada_9_e9399ff1dc-1.jpeg"),
          bgMobile: require("@/assets/uploads/2023/11/Canada_9_e9399ff1dc_mb.webp"),
          stats: {
            "Tỷ lệ dân nhập cư": "23%",
            "Hạn ngạch 2025": "395,000",
            "Xếp hạng hộ chiếu": "Top 7/199 thế giới",
            "Đi lại tự do": "173 nước",
            "Xếp hạng giáo dục": "Top 4/85",
          },
        },
        {
          title: "EU",
          bgDesktop: require("@/assets/uploads/2023/10/Hungaria_e94c77761e.jpeg"),
          bgMobile: require("@/assets/uploads/2023/11/Hungaria_e94c77761e_mb.webp"),
          description:
            "Các chương trình định cư/lấy thường trú nhân phổ biến tại Hungary, Malta, Tây Ban Nha và các quốc gia EU khác.",
        },
        {
          title: "Các nước khác",
          bgDesktop: require("@/assets/uploads/2023/10/New_Zealand_5_61557c235f.jpeg"),
          bgMobile: require("@/assets/uploads/2023/11/New_Zealand_5_61557c235f_mb.webp"),
          description:
            "Các chương trình định cư/lấy thường trú nhân phổ biến tại St Kitts & Nevis, Đảo Síp, New Zealand, Saint Lucia và các quốc gia khác.",
        },
      ],
      awards: [
        {
          image: require("@/assets/uploads/2024/05/c3c78b33327a9324ca6b.jpg"),
          type: "GIẢI THƯỞNG",
          title: "DOANH NGHIỆP - DOANH NHÂN XUẤT SẮC",
        },
        {
          image: require("@/assets/uploads/2025/03/Thuong-hieu-manh-quoc-gia.png"),
          type: "TOP 10",
          title: "THƯƠNG HIỆU MẠNH QUỐC GIA",
        },
        {
          image: require("@/assets/uploads/2024/05/b67f418df8c4599a00d5.jpg"),
          type: "GIẢI THƯỞNG",
          title: "SẢN PHẨM DỊCH VỤ TIN DÙNG",
        },
        {
          image: require("@/assets/uploads/2025/03/Asia-business-awards.png"),
          type: "TOP 10",
          title: "THƯƠNG HIỆU TÍN NHIỆM HÀNG ĐẦU CHÂU Á",
        },
      ],
      responsiveSettings: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
      banners2: [
        {
          title:
            "Lãnh đạo HOÀNG HÀ Group thảo luận với chính quyền bang Queensland về chiến lược hợp tác đầu tư",
          description:
            "Buổi thảo luận giữa Ban lãnh đạo HOÀNG HÀ Group với chính quyền bang Queensland nhằm tiến tới hợp tác lâu dài để hỗ trợ tạo điều kiện cho các doanh nhân, nhà đầu tư Việt mở rộng cơ hội kinh doanh và sinh sống lâu dài tại bang.",
          bgDesktop:
            require("@/assets/uploads/2025/04/SI-Group-gap-go-chinh-quyen-bang-Queensland_thumb.jpg"),
          bgMobile:
            require("@/assets/uploads/2025/04/SI-Group-gap-go-chinh-quyen-bang-Queensland_thumb.jpg"),
          link: "#",
        },
        {
          title:
            "Hội thảo Quản lý Gia sản – Quốc tế hoá doanh nghiệp & Độc quyền sở hữu quốc tịch",
          description:
            "Vào ngày 29/03/2025 tại Hà Nội và 05/04/2025 tại TP. Hồ Chí Minh, Techcombank phối hợp cùng HOÀNG HÀ Group tổ chức hội thảo “Quản lý Gia sản – Quốc tế hóa Doanh nghiệp & Độc quyền Sở hữu Quốc tịch”, thu hút sự tham dự của 30 doanh nhân hàng đầu Việt Nam.",
          bgDesktop:
            require("@/assets/uploads/2025/04/Thumbnail-3-1.jpg"),
          bgMobile:
            require("@/assets/uploads/2025/04/Thumbnail-3-1.jpg"),
          link: "#",
        },
        {
          title:
            "HOÀNG HÀ Group tổ chức buổi training chuyên sâu các sản phẩm độc quyền với đối tác chiến lược",
          description:
            "Buổi training giúp đối tác hiểu sâu hơn các sản phẩm đầu tư độc quyền của HOÀNG HÀ Group, từ đó nâng cao năng lực tư vấn và tiếp cận đúng đối tượng nhà đầu tư tiềm năng.",
          bgDesktop:
            require("@/assets/uploads/2025/04/Thumbnail-7.jpg"),
          bgMobile:
            require("@/assets/uploads/2025/04/Thumbnail-7.jpg"),
          link: "#",
        },
        {
          title:
            "Phó Tổng Giám đốc HOÀNG HÀ Group – Ông Jean Lesly Benoit gặp gỡ & làm việc với các lãnh đạo cấp cao của Chính phủ Việt Nam",
          description:
            "Những sự kiện này thể hiện vai trò và ảnh hưởng của ông Lesly trong hợp tác quốc tế, đồng thời củng cố cam kết lâu dài của HOÀNG HÀ Group trong việc đồng hành cùng khách hàng và đối tác.",
          bgDesktop:
            require("@/assets/uploads/2025/03/Thumbnail.jpg"),
          bgMobile:
            require("@/assets/uploads/2025/03/Thumbnail.jpg"),
          link: "#",
        },
      ],
    };
  },
}
</script>

<style scoped>
#section-1 .banner-bg {
  height: 100vh !important;
}

.si-banners {
  margin: auto;
}

.country-banners {
  position: relative;
  overflow: hidden;
}

.banner-slide {
  position: relative;
  height: 500px;
  color: white;
}

#section-1 .banner-slide {
  height: 100vh !important;
}

.banner-bg {
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  position: absolute;
}

.bg-overlay {
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
}

.banner-content {
  position: relative;
  z-index: 2;
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.info h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.si-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  text-align: center;
  height: auto;
}

.social-links {
  position: absolute;
  bottom: 30px;
  left: 80px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.line {
  width: 50px;
  height: 2px;
  background: white;
  margin: 0 10px;
}

.icons {
  display: flex;
  gap: 10px;
}

.icons a img {
  width: 20px;

  height: 20px;
}

#section-1 {
  max-width: 1420px
}

#section-1 .table tr {
  color: #fff;
  background: none;
  border: none
}

#section-1 .bg-overlay {
  top: 0;
  left: 0;
  background-image: linear-gradient(161deg, rgba(38, 40, 43, .65) -6.42%, rgba(38, 40, 43, .65) 42.58%, rgba(159, 128, 84, .65) 93.58%)
}

#section-1 .home-banners {
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover
}

#section-1 .home-banner,
#section-1 .home-banner .slick-list,
#section-1 .home-banner .slick-track {
  height: 100%
}

#section-1 .banner-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: calc(100% - 200px)
}

#section-1 .banner-item .h-100 {
  display: flex;
  max-width: 1240px;
  align-items: center;
  justify-content: center
}

#section-1 .banner-item .text-center {
  font-size: 3rem;
  color: var(--denary-color);
  font-weight: 400;
  font-family: var(--font-medium);
  text-transform: uppercase
}

#section-1 .banner-item .info {
  color: var(--background-color);
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 15px 100px
}

#section-1 .banner-item .info>div span {
  color: var(--denary-color)
}

#section-1 .banner-item .info>div:first-child {
  font-size: 2.188rem;
  font-family: var(--font-heavy);
  text-transform: uppercase
}

#section-1 .home-dots {
  position: absolute;
  left: 0;
  bottom: 16px;
  width: 100%;
  z-index: 1
}

#section-1 .home-dots>div {
  border-top: 1px solid rgba(255, 255, 255, .35);
  max-width: 1240px;
  margin: auto;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap
}

#section-1 .home-dots>div>div {
  width: 20%;
  cursor: pointer
}

#section-1 .home-dots>div>div .img img {
  display: none;
  margin: auto
}

#section-1 .home-dots>div>div .img img:first-child {
  display: block
}

#section-1 .home-dots>div>div .text {
  text-align: center;
  color: var(--background-color)
}

#section-1 .home-dots>div>div.active .img img:first-child,
#section-1 .home-dots>div>div:hover .img img:first-child {
  display: none
}

#section-1 .home-dots>div>div.active .img img:nth-child(2),
#section-1 .home-dots>div>div:hover .img img:nth-child(2),
#section-1 .home-dots>div>div.active .img img:nth-child(3),
#section-1 .home-dots>div>div:hover .img img:nth-child(3) {
  display: block
}

.social a {
  width: 25px;
  height: 25px;
  background-position: center center;
  background-repeat: no-repeat
}

.social .Facebook {
  background-image: url(@/assets/themes/sigroup/assets/images/ic-fb.png)
}

.social .Facebook:hover {
  background-image: url(@/assets/themes/sigroup/assets/images/ic-fb-hv.png)
}

.social .Youtube {
  background-image: url(@/assets/themes/sigroup/assets/images/ic-you.png)
}

.social .Youtube:hover {
  background-image: url(@/assets/themes/sigroup/assets/images/ic-you-hv.png)
}

.social .Twitter {
  background-image: url(@/assets/themes/sigroup/assets/images/ic-twi.png)
}

.social .Twitter:hover {
  background-image: url(@/assets/themes/sigroup/assets/images/ic-twi-hv.png)
}

.social .Telegram {
  background-image: url(@/assets/themes/sigroup/assets/images/ic-tele.png)
}

.social .Telegram:hover {
  background-image: url(@/assets/themes/sigroup/assets/images/ic-tele-hv.png)
}

.social .Linkedin {
  background-image: url(@/assets/themes/sigroup/assets/images/ic-linkedin.png);
  background-size: cover;
  max-width: 18px;
  max-height: 18px
}

.social .Zalo {
  background-image: url(@/assets/themes/sigroup/assets/images/ic-zalo-2.png)
}

#section-1 .si-social-bn,
#section-1 .si-btn-bn {
  top: 50%;
  transform: translateY(-50%);
  text-transform: uppercase;
  color: var(--background-color);
  font-size: var(--size-14);
  align-items: center;
  display: flex;
  writing-mode: vertical-rl;
  white-space: nowrap
}

#section-1 .si-social-bn .line,
#section-1 .si-btn-bn .line {
  height: 35px;
  width: 1px;
  margin: 20px 0;
  background-color: var(--background-color)
}

#section-1 .si-social-bn {
  left: 0
}

#section-1 .si-social-bn a {
  display: inline-block;
  margin: 5px 0
}

#section-1 .si-btn-bn {
  right: 0
}

#section-1 .si-btn-bn>div {
  cursor: pointer
}

#section-1 .si-btn-bn>div:hover {
  color: var(--denary-color)
}

#section-2 .s2-right .img {
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center
}

#section-2 .s2-right .img img {
  height: 66px
}

#section-2 .s2-right .s2-right-tt,
#section-2 .s2-right h2 {
  font-size: 3rem;
  color: var(--si-brown-color)
}

#section-1 {
  width: 100%;
  height: 750px;
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden
}

#section-8,
#section-10 {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 1420px
}

#section-8 {
  background-image: url(@/assets/themes/sigroup/assets/images/event-now.png)
}

.home-page .si-event .img {
  line-height: 0
}

.home-page .si-event .img img {
  max-height: 250px
}

.home-page .si-event .info {
  position: relative;
  background-color: var(--background-color);
  padding: 10px 20px
}

.home-page .si-event .info h4,
.home-page .si-event .info p {
  position: relative;
  z-index: 1
}

.home-page .si-event .info i {
  margin-right: 10px;
  font-size: var(--size-15);
  color: var(--octonary-color)
}

.home-page .si-event .info span {
  color: #2d2d2d;
  font-family: var(--font-stack);
  font-weight: 400;
  font-size: var(--size-13);
  line-height: 1.5
}

.home-page .si-event .info .clock {
  background-image: url(@/assets/themes/sigroup/assets/images/clock-si.png)
}

.home-page .si-event:hover .info .clock {
  background-image: url(@/assets/themes/sigroup/assets/images/clock-white.png)
}

.home-page .si-event .info .location {
  background-image: url(@/assets/themes/sigroup/assets/images/loca-si.png)
}

.home-page .si-event:hover .info .location {
  background-image: url(@/assets/themes/sigroup/assets/images/loca-white.png)
}

.home-page .si-event .info::after {
  content: "";
  position: absolute;
  z-index: 0;
  height: 5px;
  width: 80px;
  bottom: 0;
  left: 20px;
  transition-duration: var(--dura-300);
  background-color: var(--octonary-color)
}

.home-page .si-event:hover .info h4,
.home-page .si-event:hover .info h2 {
  color: var(--background-color)
}

.home-page .si-event:hover .info i,
.home-page .si-event:hover .info span {
  color: var(--background-color)
}

.home-page .si-event:hover .info::after {
  left: 0;
  width: 100%;
  height: 100%
}

.wrap-evt-home .slick-dots {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  bottom: 0;
  left: 0;
  width: 100%
}

.wrap-evt-home .slick-dots li {
  width: 12px;
  height: 12px;
  margin-left: 8px;
  margin-right: 8px
}

.wrap-evt-home .slick-dots li button {
  font-size: 0;
  padding: 0;
  width: 12px;
  height: 12px;
  background-color: var(--background-color)
}

.wrap-evt-home .slick-dots li.slick-active button {
  background-color: var(--octonary-color)
}

.wrap-evt-home .slick-dots li button::before {
  display: none
}

#section-11 {
  background-color: #f5f6f9;
  padding: 30px 0;
  margin-bottom: 30px
}

.so_nam {
  font-size: 14px
}

.noi_nhan_giai {
  font-family: var(--font-heavy)
}

@media (min-width: 820px) {
  .si-title {
    font-size: 32px
  }
}

@media (max-width: 820px) {
  #section-1 {
    height: 600px
  }

  #section-2 .s2-right img {
    height: 67px
  }

  #section-3,
  #section-7 {
    height: auto
  }

  #section-1 .banner-item .info {
    padding: 15px
  }

  #section-1 .home-dots>div>div .text {
    font-size: var(--size-12)
  }

  #section-1 .banner-item {
    height: calc(100% - 110px)
  }



  #section-7 .si-banners .slick-dots,
  #section-3 .si-banners .slick-dots {
    position: absolute;
    bottom: auto;
    top: 200px
  }

  #section-2 .s2-right .s2-right-tt,
  #section-2 .s2-right h2 {
    font-size: 2.4rem
  }

  #section-7 .si-banners .bg-banner,
  #section-3 .si-banners .bg-banner {
    background: none !important
  }

  .si-banners .banner-wrap .d-flex {
    flex-wrap: wrap
  }

  #section-3 .si-banners h2 {
    color: var(--primary-color)
  }

  #section-3 .si-banners .banner-wrap span {
    font-family: var(--font-stack)
  }

  #section-1 .home-dots>div>div .img img {
    height: auto;
    object-fit: cover
  }

  #section-8 .slick-prev {
    left: 0;
    z-index: 123
  }

  #section-8 .slick-next {
    right: 0;
    z-index: 123
  }
}
</style>