<template>
  <div class="si-header">
    <div class="d-flex align-items-center justify-content-between container">
      <div class="position-absolute w-100 h-100 background"></div>
      <nuxt-link class="position-relative logo" to="/">
        <img class="d-md-block py-3 d-none" src="@/assets/themes/sigroup/assets/images/si_logofullgold.png"
          alt="HOÀNG HÀ Group" style="border-radius: 50%" />
        <img class="d-md-none entered lazyloaded" src="@/assets/themes/sigroup/assets/images/si_logofullgold_mb.png"
          alt="HOÀNG HÀ Group" data-lazy-src="@/assets/themes/sigroup/assets/images/si_logofullgold_mb.png"
          style="border-radius: 50%" data-ll-status="loaded" />
        <noscript>
          <img class="d-md-none" width="58" height="40"
            src="@/assets/themes/sigroup/assets/images/si_logofullgold_mb.png" alt="HOÀNG HÀ Group" />
        </noscript>
      </nuxt-link>
      <div class="position-relative">
        <div class="si-top d-flex align-items-center justify-content-end">
          <div class="d-flex align-items-center call">
            <nuxt-link to="#">+84 856 936 666</nuxt-link>
          </div>
          <div class="px-3 menu-mobile">
            <img width="30" height="21" src="@/assets/themes/sigroup/assets/images/menu-icon.png" alt="Menu Icon" />
          </div>
        </div>
        <div class="d-md-flex justify-content-end si-nav d-none">
          <div class="menu-main-container">
            <ul id="menu-main" class="list-unstyled menu-main">
              <li class="menu-item" :class="{ active: $route.path === '/AboutSiGroup' }">
                <nuxt-link to="/AboutSiGroup"><span>Về HOÀNG HÀ Group</span></nuxt-link>
                <ul class="sub-menu">
                  <li class="menu-item">
                    <nuxt-link to="#gia-tri-cot-loi"><span>Giá trị cốt lõi</span></nuxt-link>
                  </li>
                  <li class="menu-item">
                    <nuxt-link to="#lich-su-phat-trien">
                      <span>Lịch sử phát triển</span></nuxt-link>
                  </li>
                  <li class="menu-item">
                    <nuxt-link to="#chung-nhan-giai-thuong"><span>Chứng nhận & Giải thưởng</span></nuxt-link>
                  </li>
                  <li class="menu-item">
                    <nuxt-link to="#ban-lanh-dao"><span>Ban lãnh đạo</span></nuxt-link>
                  </li>
                  <li class="menu-item">
                    <nuxt-link to="/news"><span>Báo chí</span></nuxt-link>
                  </li>
                  <li class="menu-item">
                    <nuxt-link to="#certification"><span>Khách hàng thành công</span></nuxt-link>
                  </li>
                </ul>
              </li>
              <li class="menu-item" :class="{ active: $route.path === '/SettlementProgram' }">
                <nuxt-link to="/SettlementProgram"><span>Chương trình định cư</span></nuxt-link>
                <ul class="sub-menu">
                  <li class="menu-item">
                    <nuxt-link to="/SettlementProgram/SettlementAmerica"><span>Định cư Mỹ</span></nuxt-link>
                    <ul class="sub-menu">
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementAmerica/EB-5"><span>Visa EB-5 định cư Mỹ diện đầu
                            tư</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementAmerica/EB-3"><span>Visa EB-3 định cư Mỹ diện tay
                            nghề</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementAmerica/EB-2"><span>Visa EB-2 định cư Mỹ diện tài
                            năng đặc biệt</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementAmerica/EB-C1"><span>Visa EB-1C định cư
                            Mỹ</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementAmerica/L-A1"><span>Visa L-1A định cư Mỹ diện doanh
                            nhân</span></nuxt-link>
                      </li>

                    </ul>
                  </li>
                  <li class="menu-item">
                    <nuxt-link to="/SettlementProgram/SettlementAustraylia"><span>Định cư Úc</span></nuxt-link>
                    <ul class="sub-menu">
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementAustraylia/DemandVisa"><span>Skills in Demand
                            Visa</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementAustraylia/NationalInnovationVisa"><span>National
                            Innovation Visa</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementAustraylia/Visa494Uc"><span>Visa 494
                            Úc</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementAustraylia/Visa494DAMA"><span>Visa 494
                            DAMA</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementAustraylia/Visa186Uc"><span>Visa 186
                            Úc</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementAustraylia/Visa491Uc"><span>Visa 491
                            Úc</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementAustraylia/Visa190Uc"><span>Visa 190
                            Úc</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementAustraylia/Visa482OBS"><span>Visa 482
                            OBS</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementAustraylia/Visa482"><span>Visa
                            482</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementAustraylia/Visa482DAMA"><span>Visa 482
                            DAMA</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementAustraylia/NgheUuTien"><span>Danh sách ngành nghề ưu
                            tiên định cư Úc</span></nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item">
                    <nuxt-link to="/SettlementProgram/SettlementCanada"><span>Định cư Canada</span></nuxt-link>
                    <ul class="sub-menu">
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementCanada/Startup"><span>Chương trình Start up visa
                            Canada diện khởi
                            nghiệp</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementCanada/ExpressEntry"><span>Chương trình Express
                            Entry Canada định cư diện tay
                            nghề cao</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementCanada/NganhUuTien"><span>Danh sách ngành nghề ưu
                            tiên định cư Canada</span></nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item">
                    <nuxt-link to="/SettlementProgram/SettlementEurope"><span>Định cư Châu Âu</span></nuxt-link>
                    <ul class="sub-menu">
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementEurope/BoDaoNha"><span>Định cư Bồ Đào
                            Nha</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementEurope/Hungary"><span>Định cư
                            Hungary</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementEurope/Malta"><span>Định cư Malta</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementEurope/Slovakia"><span>Định cư
                            Slovakia</span></nuxt-link>
                      </li>

                    </ul>
                  </li>
                  <li class="menu-item">
                    <nuxt-link to="/SettlementProgram/SettlementOrthers"><span>Định cư các nước khác</span></nuxt-link>
                    <ul class="sub-menu">
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementOrthers/Dominica"><span>Định cư
                            Dominica</span></nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/SettlementProgram/SettlementOrthers/Grenada"><span>Định cư
                            Grenada</span></nuxt-link>
                      </li>

                    </ul>
                  </li>
                  <li class="menu-item">
                    <nuxt-link to="/SettlementProgram/SettlementGlobal"><span>Định cư toàn cầu</span></nuxt-link>
                  </li>
                </ul>
              </li>

              <li class="menu-item" :class="{ active: $route.path === '/TSI' }">
                <a href="/TSI"><span>Xuất nhập khẩu</span></a>
              </li>
              <li class="menu-item" :class="{ active: $route.path === '/Events' }">
                <nuxt-link to="/Events"><span>Sự Kiện</span></nuxt-link>
              </li>
              <li class="menu-item" :class="{ active: $route.path === '/News' }">
                <nuxt-link to="/News"><span>Tin Tức</span></nuxt-link>
              </li>
              <li class="menu-item" :class="{ active: $route.path === '/Contacts' }">
                <nuxt-link to="/Contacts"><span>Liên Hệ</span></nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="justify-content-end si-nav mobile" :class="{ active: isMobileMenuActive }">
          <span class="si-nav-close"></span>
          <div class="menu-main-container">
            <ul id="menu-main-1" class="list-unstyled menu-main">
              <li class="menu-item" :class="{ active: $route.path === '/AboutSiGroup' }">
                <nuxt-link to="/AboutSiGroup"><span>Về HOÀNG HÀ Group</span></nuxt-link>
                <ul class="sub-menu">
                  <li class="menu-item"><nuxt-link to="#gia-tri-cot-loi"><span>Giá trị cốt lõi</span></nuxt-link></li>
                  <li class="menu-item"><nuxt-link to="#lich-su-phat-trien"><span>Lịch sử phát triển</span></nuxt-link>
                  </li>
                  <li class="menu-item"><nuxt-link to="#chung-nhan-giai-thuong"><span>Chứng nhận & Giải
                        thưởng</span></nuxt-link></li>
                  <li class="menu-item"><nuxt-link to="#ban-lanh-dao"><span>Ban lãnh đạo</span></nuxt-link></li>
                  <li class="menu-item"><nuxt-link to="/news"><span>Báo chí</span></nuxt-link></li>
                  <li class="menu-item"><nuxt-link to="#certification"><span>Khách hàng thành công</span></nuxt-link>
                  </li>
                </ul>
              </li>

              <li class="menu-item" :class="{ active: $route.path === '/SettlementProgram' }">
                <nuxt-link to="/SettlementProgram"><span>Chương trình định cư</span></nuxt-link>
                <ul class="sub-menu">
                  <li class="menu-item sub-menu1" style="position: relative;">
                    <nuxt-link to="/SettlementProgram/SettlementAmerica"><span>Định cư Mỹ</span></nuxt-link>
                    <ul class="sub-menu sub-menu2" style="position: relative;left: 0;">
                      <li class="menu-item"><nuxt-link to="/SettlementProgram/SettlementAmerica/EB-5"><span>Visa EB-5
                            định cư Mỹ diện đầu tư</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link to="/SettlementProgram/SettlementAmerica/EB-3"><span>Visa EB-3
                            định cư Mỹ diện tay nghề</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link to="/SettlementProgram/SettlementAmerica/EB-2"><span>Visa EB-2
                            định cư Mỹ diện tài năng đặc biệt</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link to="/SettlementProgram/SettlementAmerica/EB-C1"><span>Visa EB-1C
                            định cư Mỹ</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link to="/SettlementProgram/SettlementAmerica/L-A1"><span>Visa L-1A
                            định cư Mỹ diện doanh nhân</span></nuxt-link></li>
                    </ul>
                  </li>

                  <li class="menu-item" style="position: relative;">
                    <nuxt-link to="/SettlementProgram/SettlementAustraylia"><span>Định cư Úc</span></nuxt-link>
                    <ul class="sub-menu" style="position: relative;left: 0;">
                      <li class="menu-item"><nuxt-link
                          to="/SettlementProgram/SettlementAustraylia/DemandVisa"><span>Skills in Demand
                            Visa</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link
                          to="/SettlementProgram/SettlementAustraylia/NationalInnovationVisa"><span>National Innovation
                            Visa</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link to="/SettlementProgram/SettlementAustraylia/Visa494Uc"><span>Visa
                            494 Úc</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link
                          to="/SettlementProgram/SettlementAustraylia/Visa494DAMA"><span>Visa 494
                            DAMA</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link to="/SettlementProgram/SettlementAustraylia/Visa186Uc"><span>Visa
                            186 Úc</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link to="/SettlementProgram/SettlementAustraylia/Visa491Uc"><span>Visa
                            491 Úc</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link to="/SettlementProgram/SettlementAustraylia/Visa190Uc"><span>Visa
                            190 Úc</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link
                          to="/SettlementProgram/SettlementAustraylia/Visa482OBS"><span>Visa 482 OBS</span></nuxt-link>
                      </li>
                      <li class="menu-item"><nuxt-link to="/SettlementProgram/SettlementAustraylia/Visa482"><span>Visa
                            482</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link
                          to="/SettlementProgram/SettlementAustraylia/Visa482DAMA"><span>Visa 482
                            DAMA</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link
                          to="/SettlementProgram/SettlementAustraylia/NgheUuTien"><span>Danh sách ngành nghề ưu tiên
                            định cư Úc</span></nuxt-link></li>
                    </ul>
                  </li>

                  <li class="menu-item" style="position: relative;">
                    <nuxt-link to="/SettlementProgram/SettlementCanada"><span>Định cư Canada</span></nuxt-link>
                    <ul class="sub-menu" style="position: relative;left: 0;">
                      <li class="menu-item"><nuxt-link to="/SettlementProgram/SettlementCanada/Startup"><span>Chương
                            trình Start up visa Canada diện khởi nghiệp</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link
                          to="/SettlementProgram/SettlementCanada/ExpressEntry"><span>Chương trình Express Entry Canada
                            định cư diện tay nghề cao</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link to="/SettlementProgram/SettlementCanada/NganhUuTien"><span>Danh
                            sách ngành nghề ưu tiên định cư Canada</span></nuxt-link></li>
                    </ul>
                  </li>

                  <li class="menu-item" style="position: relative;">
                    <nuxt-link to="/SettlementProgram/SettlementEurope"><span>Định cư Châu Âu</span></nuxt-link>
                    <ul class="sub-menu" style="position: relative;left: 0;">
                      <li class="menu-item"><nuxt-link to="/SettlementProgram/SettlementEurope/BoDaoNha"><span>Định cư
                            Bồ Đào Nha</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link to="/SettlementProgram/SettlementEurope/Hungary"><span>Định cư
                            Hungary</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link to="/SettlementProgram/SettlementEurope/Malta"><span>Định cư
                            Malta</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link to="/SettlementProgram/SettlementEurope/Slovakia"><span>Định cư
                            Slovakia</span></nuxt-link></li>
                    </ul>
                  </li>

                  <li class="menu-item" style="position: relative;">
                    <nuxt-link to="/SettlementProgram/SettlementOrthers"><span>Định cư các nước khác</span></nuxt-link>
                    <ul class="sub-menu" style="position: relative;left: 0;">
                      <li class="menu-item"><nuxt-link to="/SettlementProgram/SettlementOrthers/Dominica"><span>Định cư
                            Dominica</span></nuxt-link></li>
                      <li class="menu-item"><nuxt-link to="/SettlementProgram/SettlementOrthers/Grenada"><span>Định cư
                            Grenada</span></nuxt-link></li>
                    </ul>
                  </li>

                  <li class="menu-item" style="position: relative;">
                    <nuxt-link to="/SettlementProgram/SettlementGlobal"><span>Định cư toàn cầu</span></nuxt-link>
                  </li>
                </ul>
              </li>



              <li class="menu-item" :class="{ active: $route.path === '/TSI' }">
                <a href="/TSI"><span>Xuất nhập khẩu</span></a>
              </li>

              <li class="menu-item" :class="{ active: $route.path === '/Events' }">
                <nuxt-link to="/Events"><span>Sự Kiện</span></nuxt-link>
              </li>

              <li class="menu-item" :class="{ active: $route.path === '/News' }">
                <nuxt-link to="/News"><span>Tin Tức</span></nuxt-link>
              </li>

              <li class="menu-item" :class="{ active: $route.path === '/Contacts' }">
                <nuxt-link to="/Contacts"><span>Liên Hệ</span></nuxt-link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.si-nav.mobile {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background: #fff;
  z-index: 1000;
  transition: all 0.3s;
}

.si-nav.mobile.active {
  display: block;
}

.si-nav.mobile .menu-main .sub-menu,
.si-nav.mobile .menu-main .sub-menu:hover,
.si-nav.mobile .menu-main:hover .sub-menu {
  display: block;
}

.default-layout .si-nav.mobile .menu-main .sub-menu>li>a .sub-menu>li>a {

  transform: translateX(-50%);
}

.menu-mobile {
  cursor: pointer;
}

.menu-item.active {
  border-top: 2px solid white;
  font-weight: bold;
  /* Example style for active item */
}

.menu-item.active a {
  color: #007bff;
  /* Example text color for active link */
}

.default-layout .si-nav.mobile .menu-main-container{
  overflow-y: auto;
}
</style>

<script>
export default {
  data() {
    return {
      isMobileMenuActive: false,
    };
  },
  mounted() {
    const menuMobile = document.querySelector(".menu-mobile");
    const mobileNav = document.querySelector(".si-nav.mobile");
    const navClose = document.querySelector(".si-nav-close");

    menuMobile.addEventListener("click", () => {
      this.isMobileMenuActive = !this.isMobileMenuActive;
    });

    navClose.addEventListener("click", () => {
      this.isMobileMenuActive = false;
    });
  },
};
</script>
