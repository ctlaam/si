<template>
    <div class="si-header">
        <div class="container d-flex align-items-center justify-content-between">
            <div class="background w-100 h-100 position-absolute"></div>
            <nuxt-link class="logo position-relative" to="/">
                <img class="d-none d-md-block py-3" width="131" height="101"
                    src="@/assets/themes/sigroup/assets/images/si_logofullgold.png" alt="SI Group" />
                <img class="d-md-none entered lazyloaded" width="58" height="40"
                    src="@/assets/themes/sigroup/assets/images/si_logofullgold_mb.png" alt="SI Group"
                    data-lazy-src="@/assets/themes/sigroup/assets/images/si_logofullgold_mb.png"
                    data-ll-status="loaded" />
                <noscript>
                    <img class="d-md-none" width="58" height="40"
                        src="@/assets/themes/sigroup/assets/images/si_logofullgold_mb.png" alt="SI Group" />
                </noscript>
            </nuxt-link>
            <div class="position-relative">
                <div class="si-top d-flex align-items-center justify-content-end">
                    <div class="call d-flex align-items-center">
                        <nuxt-link to="#">(+84) 979 355 355</nuxt-link>
                    </div>
                    <div class="px-3 menu-mobile">
                        <img width="30" height="21" src="@/assets/themes/sigroup/assets/images/menu-icon.png"
                            alt="Menu Icon" />
                    </div>
                </div>
                <div class="si-nav d-none d-md-flex justify-content-end">
                    <div class="menu-main-container">
                        <ul id="menu-main" class="menu-main list-unstyled">
                            <li class="menu-item" :class="{ 'active': $route.path === '/AboutSiGroup' }">
                                <nuxt-link to="/AboutSiGroup"><span>Về SI Group</span></nuxt-link>
                                <ul class="sub-menu">
                                    <li class="menu-item"><nuxt-link to="#"><span>Giá trị cốt lõi</span></nuxt-link></li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Lịch sử phát triển</span></nuxt-link></li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Chứng nhận & Giải thưởng</span></nuxt-link></li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Ban lãnh đạo</span></nuxt-link></li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Báo chí</span></nuxt-link></li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Khách hàng thành công</span></nuxt-link></li>
                                </ul>
                            </li>
                            <li class="menu-item" :class="{ 'active': $route.path === '/SettlementProgram' }">
                                <nuxt-link to="/SettlementProgram"><span>Chương trình định cư</span></nuxt-link>
                                <ul class="sub-menu">
                                    <li class="menu-item"><nuxt-link to="#"><span>Định cư Mỹ</span></nuxt-link>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa EB-5 định cư Mỹ diện đầu
                                                        tư</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa EB-3 định cư Mỹ diện tay
                                                        nghề</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa EB-2 định cư Mỹ diện tài năng
                                                        đặc biệt</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa EB-1C định cư Mỹ</span></nuxt-link>
                                            </li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa L-1A định cư Mỹ diện doanh
                                                        nhân</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Danh sách ngành nghề ưu tiên định cư
                                                        Mỹ</span></nuxt-link></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Định cư Úc</span></nuxt-link>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><nuxt-link to="#"><span>Skills in Demand Visa</span></nuxt-link>
                                            </li>
                                            <li class="menu-item"><nuxt-link to="#"><span>National Innovation Visa</span></nuxt-link>
                                            </li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa 494 Úc</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa 494 DAMA</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa 186 Úc</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa 491 Úc</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa 190 Úc</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa 482 OBS</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa 482</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa 482 DAMA</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Danh sách ngành nghề ưu tiên định cư
                                                        Úc</span></nuxt-link></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Định cư Canada</span></nuxt-link>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><nuxt-link to="#"><span>Chương trình Start up visa Canada
                                                        diện khởi nghiệp</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Chương trình Express Entry Canada
                                                        định cư diện tay nghề cao</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Danh sách ngành nghề ưu tiên định cư
                                                        Canada</span></nuxt-link></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Định cư Châu Âu</span></nuxt-link>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Bồ Đào Nha</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Hungary</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Malta</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Slovakia</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Bulgaria</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Hy Lạp</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Tây Ban Nha</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Ý</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Đảo Síp</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Latvia</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Ireland</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Vương Quốc Anh</span></nuxt-link>
                                            </li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Thổ Nhĩ Kỳ</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Slovenia</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Thụy Sĩ</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Pháp</span></nuxt-link></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Định cư các nước khác</span></nuxt-link>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Dominica</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Grenada</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Vanuatu</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư St. Kitts & Nevis</span></nuxt-link>
                                            </li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Antigua & Barbuda</span></nuxt-link>
                                            </li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Malaysia</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Saint Lucia</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Singapore</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư New Zealand</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư UAE</span></nuxt-link></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Định cư toàn cầu</span></nuxt-link></li>
                                </ul>
                            </li>
                            <li class="menu-item" :class="{ 'active': $route.path === '/RealEstate' }">
                                <nuxt-link to="/RealEstate"><span>Bất động sản</span></nuxt-link>
                            </li>
                            <li class="menu-item" :class="{ 'active': $route.path === '/TSI' }">
                                <a href="/TSI"><span>Xuất nhập khẩu</span></a>
                            </li>
                            <li class="menu-item" :class="{ 'active': $route.path === '/Events' }">
                                <nuxt-link to="/Events"><span>Sự Kiện</span></nuxt-link>
                            </li>
                            <li class="menu-item" :class="{ 'active': $route.path === '/News' }">
                                <nuxt-link to="/News"><span>Tin Tức</span></nuxt-link>
                            </li>
                            <li class="menu-item" :class="{ 'active': $route.path === '/Contacts' }">
                                <nuxt-link to="/Contacts"><span>Liên Hệ</span></nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="si-nav mobile justify-content-end" :class="{ 'active': isMobileMenuActive }">
                    <span class="si-nav-close"></span>
                    <div class="menu-main-container">
                        <ul id="menu-main-1" class="menu-main list-unstyled">
                            <li class="menu-item" :class="{ 'active': $route.path === '/AboutSiGroup' }">
                                <nuxt-link to="/AboutSiGroup"><span>Về SI Group</span></nuxt-link>
                                <ul class="sub-menu">
                                    <li class="menu-item"><nuxt-link to="#"><span>Giá trị cốt lõi</span></nuxt-link></li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Lịch sử phát triển</span></nuxt-link></li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Chứng nhận & Giải thưởng</span></nuxt-link></li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Ban lãnh đạo</span></nuxt-link></li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Báo chí</span></nuxt-link></li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Khách hàng thành công</span></nuxt-link></li>
                                </ul>
                            </li>
                            <li class="menu-item" :class="{ 'active': $route.path === '/SettlementProgram' }">
                                <nuxt-link to="/SettlementProgram"><span>Chương trình định cư</span></nuxt-link>
                                <ul class="sub-menu">
                                    <li class="menu-item"><nuxt-link to="#"><span>Định cư Mỹ</span></nuxt-link>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa EB-5 định cư Mỹ diện đầu
                                                        tư</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa EB-3 định cư Mỹ diện tay
                                                        nghề</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa EB-2 định cư Mỹ diện tài năng
                                                        đặc biệt</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa EB-1C định cư Mỹ</span></nuxt-link>
                                            </li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa L-1A định cư Mỹ diện doanh
                                                        nhân</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Danh sách ngành nghề ưu tiên định cư
                                                        Mỹ</span></nuxt-link></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Định cư Úc</span></nuxt-link>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><nuxt-link to="#"><span>Skills in Demand Visa</span></nuxt-link>
                                            </li>
                                            <li class="menu-item"><nuxt-link to="#"><span>National Innovation Visa</span></nuxt-link>
                                            </li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa 494 Úc</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa 494 DAMA</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa 186 Úc</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa 491 Úc</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa 190 Úc</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa 482 OBS</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa 482</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Visa 482 DAMA</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Danh sách ngành nghề ưu tiên định cư
                                                        Úc</span></nuxt-link></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Định cư Canada</span></nuxt-link>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><nuxt-link to="#"><span>Chương trình Start up visa Canada
                                                        diện khởi nghiệp</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Chương trình Express Entry Canada
                                                        định cư diện tay nghề cao</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Danh sách ngành nghề ưu tiên định cư
                                                        Canada</span></nuxt-link></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Định cư Châu Âu</span></nuxt-link>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Bồ Đào Nha</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Hungary</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Malta</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Slovakia</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Bulgaria</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Hy Lạp</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Tây Ban Nha</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Ý</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Đảo Síp</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Latvia</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Ireland</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Vương Quốc Anh</span></nuxt-link>
                                            </li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Thổ Nhĩ Kỳ</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Slovenia</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Thụy Sĩ</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Pháp</span></nuxt-link></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Định cư các nước khác</span></nuxt-link>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Dominica</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Grenada</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Vanuatu</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư St. Kitts & Nevis</span></nuxt-link>
                                            </li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Antigua & Barbuda</span></nuxt-link>
                                            </li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Malaysia</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Saint Lucia</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư Singapore</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư New Zealand</span></nuxt-link></li>
                                            <li class="menu-item"><nuxt-link to="#"><span>Định cư UAE</span></nuxt-link></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item"><nuxt-link to="#"><span>Định cư toàn cầu</span></nuxt-link></li>
                                </ul>
                            </li>
                            <li class="menu-item" :class="{ 'active': $route.path === '/RealEstate' }">
                                <nuxt-link to="/RealEstate"><span>Bất động sản</span></nuxt-link>
                            </li>
                            <li class="menu-item" :class="{ 'active': $route.path === '/TSI' }">
                                <a href="/TSI"><span>Xuất nhập khẩu</span></a>
                            </li>
                            <li class="menu-item" :class="{ 'active': $route.path === '/Events' }">
                                <nuxt-link to="/Events"><span>Sự Kiện</span></nuxt-link>
                            </li>
                            <li class="menu-item" :class="{ 'active': $route.path === '/News' }">
                                <nuxt-link to="/News"><span>Tin Tức</span></nuxt-link>
                            </li>
                            <li class="menu-item" :class="{ 'active': $route.path === '/Contacts' }">
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
</style>

<script>
export default {
    data() {
        return {
            isMobileMenuActive: false,
        };
    },
    mounted() {
        const menuMobile = document.querySelector('.menu-mobile');
        const mobileNav = document.querySelector('.si-nav.mobile');
        const navClose = document.querySelector('.si-nav-close');

        menuMobile.addEventListener('click', () => {
            this.isMobileMenuActive = !this.isMobileMenuActive;
        });

        navClose.addEventListener('click', () => {
            this.isMobileMenuActive = false;
        });
    },
};
</script>