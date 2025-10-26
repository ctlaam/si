<template>
    <div id="main">
        <div data-include="header">
            <header class="main-header header-down">
                <div class="header-top border-0" style="position: fixed; width: 100vw; backdrop-filter: blur(10px)">
                    <div class="auto-container">
                        <div class="inner clearfix">
                            <div class="top-left clearfix">
                                <ul class="top-info clearfix">
                                    <li>
                                        <i class="icon fa fa-map-marker-alt"></i>Tầng 44 Bitexco
                                        Financial Tower 02 Hải Triều, Bến Nghé, Quận 1, Hồ Chí
                                        Minh.&nbsp;
                                    </li>
                                    <li>Tầng 19, Capital Place, 29 Liễu Giai, Ba Đình, Hà Nội</li>
                                </ul>
                            </div>
                            <div class="top-right clearfix">
                                <ul class="top-info clearfix">
                                    <li><a href="tel:(+84)76 9998686">(+84)76 9998686</a></li>
                                    <li>
                                        <a href="mailto:Paul.nguyen@tsi.com.vn">Paul.nguyen@tsi.com.vn</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-upper">
                    <div class="auto-container">
                        <div class="main-box d-flex justify-content-between align-items-center flex-wrap">
                            <div class="links-box clearfix">
                                <div class="nav-toggler">
                                    <button class="hidden-bar-opener">
                                        <span class="hamburger" data-bs-toggle="collapse" data-bs-target="#menu"
                                            data-toggle="collapse" data-target="#menu">
                                            <span class="top-bun"></span> <span class="meat"></span>
                                            <span class="bottom-bun"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div class="logo-box">
                                <div class="logo">
                                    <a href="/" title="Delici - Restaurants HTML Template"><img
                                            src="https://tsi.com.vn/assets/images/logo.png" alt=""
                                            title="Delici - Restaurants HTML Template" /></a>
                                </div>
                            </div>
                            <div class="link link-btn">
                                <a href="/page/contact.html" class="theme-btn btn-style-one clearfix">
                                    <span class="btn-wrap">
                                        <span class="text-one">Liên hệ</span><span class="text-two">Liên
                                            hệ</span></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="menu-backdrop"></div>
            <section id="menu" class="hidden-bar collapse">
                <div class="inner-box">
                    <div class="cross-icon hidden-bar-closer">
                        <span class="fa fa-close" data-bs-toggle="collapse" data-bs-target="#menu"
                            data-toggle="collapse" data-target="#menu"></span>
                    </div>
                    <div class="logo-box">
                        <a href="/" title="TSI"><img src="https://tsi.com.vn/assets/images/logo.png" alt=""
                                title="TSI" /></a>
                    </div>
                    <div class="side-menu">
                        <ul class="navigation clearfix">
                            <li><a href="/">Trang chủ</a></li>
                            <li><a href="/page/about.html">Giới thiệu</a></li>
                            <li><a href="/page/distribution.html">Phân phối</a></li>
                            <li><a href="/page/contact.html">Liên hệ</a></li>
                        </ul>
                    </div>
                    <ul class="info">
                        <li>
                            Tầng 44 Bitexco Financial Tower 02 Hải Triều, Bến Nghé, Quận 1, Hồ
                            Chí Minh
                        </li>
                        <li>Tầng 19, Capital Place, 29 Liễu Giai, Ba Đình, Hà Nội</li>
                        <li>
                            <a href="mailto:Paul.nguyen@tsi.com.vn">Paul.nguyen@tsi.com.vn</a>
                        </li>
                    </ul>
                    <div class="separator"><span></span></div>
                    <div class="booking-info">
                        <div class="bk-no">
                            <a href="tel:(+84)76 9998686">(+84)76 9998686</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section class="banner-section">
            <div class="banner-container">
                <div class="swiper-wrapper" :style="{ background: `url(${require('@/assets/ig/7nyKJuX.jpeg')}) center/cover no-repeat` }">
  

                    <div class="auto-container center-container container">
                        <div class="content-box">
                            <div class="content">
                                <div class="inner text-center w-100">
                                    <h2 style="font-size: 50px">
                                        <span>TRADING SOLUTION<br />INTERNATIONAL</span>
                                    </h2>
                                    <br />
                                    <h4 class="text">
                                        Thành lập từ 2003,<span style="color: #f1d1a9"> TSI</span>
                                        chuyên <span style="color: #f1d1a9">nhập khẩu</span> các sản
                                        phẩm nông nghiệp chất lượng cao
                                        <span style="color: #f1d1a9">xuất xứ từ Úc </span>và nhiều
                                        quốc gia khác (Mỹ, Canada, Châu Âu) phân phối đến thị trường
                                        Việt Nam cùng các quốc gia trong khu vực và
                                        <span style="color: #f1d1a9">tư vấn thành lập pháp nhân và giấy phép, kinh doanh
                                            xuất
                                            nhập khẩu quốc tế<br /><br /></span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="fluid-section alternate">
            <div class="outer-container">
                <div class="row clearfix">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12" :style="{ background: `url(${require('@/assets/ig/lvJR7G6.jpeg')}) center/cover no-repeat` }"></div>
                    <div class="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="inner clearfix">
                            <div class="content-box">
                                <div class="title-box centered">
                                    <div class="subtitle"></div>
                                    <div class="text" style="text-align: left">
                                        <h2>
                                            TRUSTWORTHY <br />SUPERIOR <br />INTEGRITY&nbsp;&nbsp;
                                        </h2>
                                        <br /><br /><span class="lead">TSI tập trung vào việc nâng cao chất lượng sản
                                            phẩm thông
                                            qua việc kiểm soát chất lượng sản phẩm, quản lý chuỗi cung
                                            ứng. Bắt đầu từ việc xây dựng mối liên hệ hợp tác trực tiếp
                                            với các nông trại và ngư trường, TSI sẽ trực tiếp đưa sản
                                            phẩm tươi nguyên và chất lượng nhất từ khắp nơi trên Thế
                                            giới đến người tiêu dùng Việt Nam và các thị trường quốc tế
                                            khác.<br /><br />Từ 2023, doanh nghiệp cũng mở rộng dịch vụ
                                            tư vấn thành lập doanh nghiệp và giấy phép xuất nhập khẩu
                                            quốc tế.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row clearfix">
                    <div class="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="inner clearfix">
                            <div class="content-box">
                                <div class="title-box centered">
                                    <div class="subtitle"></div>
                                    <div class="text" style="text-align: right">
                                        <h2>BÀO NGƯ ÚC ĐƯỢC GIỚI THƯỢNG LƯU <br />SĂN LÙNG</h2>
                                        <br /><br /><span class="lead"><span class="lead">Bào ngư viền xanh Australia
                                                (Úc) được mệnh danh là loại
                                                bào ngư ngon nhất và đắt đỏ bậc nhất thế giới. Không chỉ
                                                bởi sản lượng khan hiếm, giá trị bào ngư còn phản ánh qua
                                                quy trình khai thác đảm bảo chất lượng và chất lượng của
                                                dòng sản phẩm. Bào ngư trở thành món quà quý giá từ đại
                                                dương và được giới thượng lưu săn lùng.&nbsp;<br /></span></span><span
                                            class="lead"><br /><br /></span>
                                    </div>
                                    <a href="#https://tsi.com.vn/less/post/bao-ngu-vien-xanh-uc-yumbah"
                                        class="btn btn-outline-light">Xem thêm</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12" style="
            background: url('https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/background/image-6.jpg')
              center/cover;
          "></div>
                </div>
            </div>
        </section>
        <section class="menu-two">
            <div class="auto-container">
                <div class="title-box centered">
                    <h2>&nbsp;THỊT TƯƠI ĐÔNG LẠNH</h2>
                </div>
                <div class="row clearfix">
                    <div class="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div class="dish-block">
                            <div class="inner-box">
                                <div class="dish-image">
                                    <img src="@/assets/ig/pWxmKAL.jpeg" alt="" class="img-fluid" />
                                </div>
                                <div class="title clearfix">
                                    <div class="ttl clearfix">
                                        <h5>BÒ ÚC</h5>
                                    </div>
                                    <div class="price"></div>
                                </div>
                                <div class="text desc">
                                    <span
                                        data-sheets-value='{"1":2,"2":"gồm bò Angus, Hereford, Wagyu, bò Brahman và bò Droughtmaster ....[xem thêm] "}'
                                        data-sheets-userformat='{"2":37633,"3":{"1":0},"11":4,"12":0,"15":"Josefin Sans","18":1}'>Thịt
                                        bò Angus, Hereford, Wagyu, Brahman và
                                        Droughtmaster&nbsp;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div class="dish-block">
                            <div class="inner-box">
                                <div class="dish-image">
                                    <img src="@/assets/ig/8yqfc1v.jpeg" alt="" class="img-fluid" />
                                </div>
                                <div class="title clearfix">
                                    <div class="ttl clearfix">
                                        <h5>BÒ MỸ</h5>
                                    </div>
                                    <div class="price"></div>
                                </div>
                                <div class="text desc">Thịt bò Angus, Hereford, Wagyu</div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div class="dish-block">
                            <div class="inner-box">
                                <div class="dish-image">
                                    <img src="@/assets/ig/sIU2Hhe.jpeg" alt="" class="img-fluid" />
                                </div>
                                <div class="title clearfix">
                                    <div class="ttl clearfix">
                                        <h5>BÒ NEW ZEALAND</h5>
                                    </div>
                                </div>
                                <div class="text desc"></div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div class="dish-block">
                            <div class="inner-box">
                                <div class="dish-image">
                                    <img src="@/assets/ig/6V0ZObS.jpeg" alt="" class="img-fluid" />
                                </div>
                                <div class="title clearfix">
                                    <div class="ttl clearfix">
                                        <h5>HEO ĐỨC</h5>
                                    </div>
                                    <div class="price"></div>
                                </div>
                                <div class="text desc">
                                    <span>Thịt heo đông lạnh Đức cao cấp </span><span>Deutsche Schweinefleisch
                                    </span><span> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="auto-container">
                <div class="title-box centered">
                    <h2>&nbsp;THỊT MÁT (CHILLED MEAT)</h2>
                </div>
                <div class="row clearfix">
                    <div class="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div class="dish-block">
                            <div class="inner-box">
                                <div class="dish-image">
                                    <img src="@/assets/ig/pWxmKAL.jpeg" alt="" class="img-fluid" />
                                </div>
                                <div class="title clearfix">
                                    <div class="ttl clearfix">
                                        <h5>BÒ ÚC</h5>
                                    </div>
                                    <div class="price"></div>
                                </div>
                                <div class="text desc">
                                    <span
                                        data-sheets-value='{"1":2,"2":"gồm bò Angus, Hereford, Wagyu, bò Brahman và bò Droughtmaster ....[xem thêm] "}'
                                        data-sheets-userformat='{"2":37633,"3":{"1":0},"11":4,"12":0,"15":"Josefin Sans","18":1}'>Thịt
                                        bò Angus, Hereford, Wagyu, Brahman và
                                        Droughtmaster</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div class="dish-block">
                            <div class="inner-box">
                                <div class="dish-image">
                                    <img src="@/assets/ig/8yqfc1v.jpeg" alt="" class="img-fluid" />
                                </div>
                                <div class="title clearfix">
                                    <div class="ttl clearfix">
                                        <h5>BÒ MỸ</h5>
                                    </div>
                                    <div class="price"></div>
                                </div>
                                <div class="text desc">Thịt bò Angus, Hereford, Wagyu</div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div class="dish-block">
                            <div class="inner-box">
                                <div class="dish-image">
                                    <img src="@/assets/ig/sIU2Hhe.jpeg" alt="" class="img-fluid" />
                                </div>
                                <div class="title clearfix">
                                    <div class="ttl clearfix">
                                        <h5>BÒ NEW ZEALAND</h5>
                                    </div>
                                </div>
                                <div class="text desc"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="auto-container">
                <div class="title-box centered">
                    <div class="subtitle"></div>
                    <h2>HẢI SẢN</h2>
                </div>
                <div class="row clearfix">
                    <div class="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div class="dish-block">
                            <div class="inner-box">
                                <div class="dish-image">
                                    <img src="@/assets/ig/hv0Lobz.jpeg" alt="" width="178" height="178"
                                        class="img-fluid" />
                                </div>
                                <div class="title clearfix">
                                    <div class="ttl clearfix">
                                        <h5>
                                            BÀO NGƯ VIỀN XANH CÒN NGUYÊN VỎ ĐÔNG LẠNH&nbsp; (gREENLIP
                                            ABALONE)
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div class="dish-block">
                            <div class="inner-box">
                                <div class="dish-image">
                                    <img src="@/assets/ig/0UN0zD5.jpeg" alt="" class="img-fluid" />
                                </div>
                                <div class="title clearfix">
                                    <div class="ttl clearfix">
                                        <h5>THỊT BÀO NGƯ TÁCH VỎ ĐÔNG LẠNH (IQF)</h5>
                                    </div>
                                    <div class="price"></div>
                                </div>
                                <div class="text desc">
                                    Thịt bào ngư tách vỏ được đóng gói theo từng túi.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div class="dish-block">
                            <div class="inner-box">
                                <div class="dish-image">
                                    <img src="@/assets/ig/F5B1RPY.jpeg" alt="" class="img-fluid" />
                                </div>
                                <div class="title clearfix">
                                    <div class="ttl clearfix">
                                        <h5>BÀO NGƯ ĐÓNG HỘP</h5>
                                    </div>
                                </div>
                                <div class="text desc">
                                    <span
                                        data-sheets-value='{"1":2,"2":"\bBÀO NGƯ ĐÓNG HỘP\nBào ngư được vận chuyển tươi sống đến các nhà máy sản xuất và chế biến. Các xưởng chế biến đảm bảo yêu cầu về an toàn thực phẩm, sử dụng công nghệ tiên tiến để đảm bảo giữ hương vị tươi ngon. Đồng thời, ít chất hóa học và chất bảo quản nhằm..... Quy trình khép kín đáp ứng tiêu chuẩn sản xuất để đóng thành lon theo tiêu chuẩn của [bộ ...] của Úc"}'
                                        data-sheets-userformat='{"2":6723,"3":{"1":0},"4":{"1":2,"2":16777215},"9":0,"12":0,"14":{"1":2,"2":0},"15":"Josefin Sans"}'>Bào
                                        ngư được vận chuyển tươi sống đến các nhà máy sản xuất và
                                        chế biến. Sau đó, xưởng sẽ dùng công nghệ tiên tiến và khép
                                        kín để chế biến đảm bảo giữ hương vị tươi ngon và được đóng
                                        thành lon để tiện sử dụng.&nbsp;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div class="dish-block">
                            <div class="inner-box">
                                <div class="dish-image">
                                    <img src="@/assets/ig/1hiZono.png" alt="" class="img-fluid" />
                                </div>
                                <div class="title clearfix">
                                    <div class="ttl clearfix">
                                        <h5>bÀO NGƯ BÍCH HỔ (JADE TIGER ABALONE)</h5>
                                    </div>
                                    <div class="price"><span>NEW</span></div>
                                </div>
                                <div class="text desc"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="auto-container">
                <div class="title-box centered">
                    <div class="pattern-image"></div>
                    <h2>ĐỒ UỐNG &amp; KHÁC</h2>
                </div>
                <div class="row clearfix">
                    <div class="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div class="dish-block">
                            <div class="inner-box">
                                <div class="dish-image">
                                    <img src="@/assets/ig/iJRVFKk.jpeg" alt="" class="img-fluid" />
                                </div>
                                <div class="title clearfix">
                                    <div class="ttl clearfix">
                                        <h5>rƯỢU VANG ÚC</h5>
                                    </div>
                                </div>
                                <div class="text desc">
                                    <span
                                        data-sheets-value='{"1":2,"2":"Rượu vang: Úc là một trong những nhà sản xuất rượu vang hàng đầu thế giới, và nổi tiếng với các loại rượu vang cao cấp như Shiraz, Cabernet Sauvignon và Chardonnay."}'
                                        data-sheets-userformat='{"2":4609,"3":{"1":0},"12":0,"15":"Josefin Sans"}'>Úc là
                                        một trong những nhà sản xuất rượu vang hàng đầu thế
                                        giới, và nổi tiếng với các loại rượu vang cao cấp như Shiraz,
                                        Cabernet Sauvignon và Chardonnay.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div class="dish-block">
                            <div class="inner-box">
                                <div class="dish-image">
                                    <img src="@/assets/ig/ccODGTM.jpeg" alt="" class="img-fluid" />
                                </div>
                                <div class="title clearfix">
                                    <div class="ttl clearfix">
                                        <h5>RƯỢU MẠNH</h5>
                                    </div>
                                </div>
                                <div class="text desc">
                                    Sản phẩm bao gồm các loại whisky, rượu mạnh, rượu brandy và rượu
                                    rum.&nbsp;
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div class="dish-block">
                            <div class="inner-box">
                                <div class="dish-image">
                                    <img src="@/assets/ig/AOFx4D9.png" alt="" class="img-fluid" />
                                </div>
                                <div class="title clearfix">
                                    <div class="ttl clearfix">
                                        <h5>BIA</h5>
                                    </div>
                                </div>
                                <div class="text desc">
                                    TSI nhập khẩu các dòng bia có xuất xứ từ Úc - một nhà máy sản
                                    xuất bia lớn, với nhiều loại bia khác nhau như: Lager, Ale,
                                    Stout và Pilsner,v.v
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div class="dish-block">
                            <div class="inner-box">
                                <div class="dish-image">
                                    <img src="@/assets/ig/6MBh71j.png" alt="" class="img-fluid" />
                                </div>
                                <div class="title clearfix">
                                    <div class="ttl clearfix">
                                        <h5>NƯỚC ÉP TRÁI CÂY</h5>
                                    </div>
                                </div>
                                <div class="text desc">
                                    Nước ép trái cây Emma &amp; Tom's, Capi, Remedy Drinks.&nbsp;
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div class="dish-block">
                            <div class="inner-box">
                                <div class="dish-image">
                                    <img src="@/assets/ig/5rHVZEq.jpeg" alt="" class="img-fluid" />
                                </div>
                                <div class="title clearfix">
                                    <div class="ttl clearfix">
                                        <h5>nHO KHÔ NGUYÊN CÀNH</h5>
                                    </div>
                                </div>
                                <div class="text desc">Nhập khẩu trực tiếp từ nông trại Úc</div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div class="dish-block">
                            <div class="inner-box">
                                <div class="dish-image">
                                    <img src="@/assets/ig/RSC9Rka.jpeg" alt="" class="img-fluid" />
                                </div>
                                <div class="title clearfix">
                                    <div class="ttl clearfix">
                                        <h5>CÁC LOẠI HẠT</h5>
                                    </div>
                                </div>
                                <div class="text desc">
                                    <span
                                        data-sheets-value='{"1":2,"2":"Rượu vang: Úc là một trong những nhà sản xuất rượu vang hàng đầu thế giới, và nổi tiếng với các loại rượu vang cao cấp như Shiraz, Cabernet Sauvignon và Chardonnay."}'
                                        data-sheets-userformat='{"2":4609,"3":{"1":0},"12":0,"15":"Josefin Sans"}'>Hạt
                                        chia (The Chia Co, Morlife, Changing Habits), Hạt lanh
                                        (Linwoods, Brookfarm, Power Super Foods), Hạt bí (Blue
                                        Dinosaur, East Bali Cashews, The Protein Bread Co),v.v.<br /><br /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="news-section">
            <div class="auto-container">
                <div class="title-box centered">
                    <div class="pattern-image">
                        <h2>TƯ VẤN GIẤY PHÉP XUẤT NHẬP KHẨU QUỐC TẾ</h2>
                    </div>
                </div>
                <ul>
                    <li class="text desc" style="text-align: center">
                        &nbsp; &nbsp;TSI tư vấn thành lập pháp nhân, các loại hình khai hải
                        quan, quy trình hồ sơ phù hợp cho các doanh nghiệp kinh doanh xuất
                        nhập khẩu. Đồng thời, chúng tôi cũng hỗ trợ các dịch vụ khác liên quan
                        kinh doanh và vận hành doanh nghiệp xuất nhập khẩu (tìm nhà cung cấp,
                        nhà phân phối, tính thuế xuất nhập khẩu, áp mã hàng hóa, các chính
                        sách liên quan đến thuế như hoàn thuế nhập khẩu… và đặc biệt là các
                        hình thức thanh toán quốc tế khác nhau).
                    </li>
                </ul>
                <br /><img src="@/assets/ig/Whcpewi.jpeg" class="img-fluid" alt=""
                    style="display: block; margin-left: auto; margin-right: auto" />
            </div>
        </section>
        <section class="news-section">
            <div class="auto-container">
                <div class="title-box centered">
                    <div class="pattern-image">
                        <h2>ĐỐI TÁC CỦA CHÚNG TÔI&nbsp;</h2>
                        <div>
                            <div class="row clearfix">
                                <div class="s-col col-lg-4 col-md-6 col-sm-12">
                                    <div class="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms"
                                        style="
                    visibility: visible;
                    animation-duration: 1500ms;
                    animation-delay: 0ms;
                    animation-name: fadeInLeft;
                  ">
                                        <div class="s-block">
                                            <div class="inner">
                                                <div class="icon-box">
                                                    <img src="@/assets/ig/rg0yohO.png" alt="" title=""
                                                        class="img-fluid" />
                                                </div>
                                                <div class="text">
                                                    Fribin là một nhà cung cấp thịt tươi sống uy tín đến từ
                                                    Tây Ban Nha. Fribin sở hữu và quản lý mạng lưới các nông
                                                    trại và đối tác chăn nuôi trong nước hoặc khu vực lân
                                                    cận. Fribin có thể cam kết đảm bảo chất lượng của sản
                                                    phẩm thông qua việc tuân thủ các tiêu chuẩn an toàn thực
                                                    phẩm, quy trình kiểm soát chất lượng và quản lý chuỗi
                                                    cung ứng.<br /><br /><br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="s-col last col-lg-4 col-md-6 col-sm-12">
                                    <div class="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms"
                                        style="
                    visibility: visible;
                    animation-duration: 1500ms;
                    animation-delay: 0ms;
                    animation-name: fadeInRight;
                  ">
                                        <div class="s-block alternate">
                                            <div class="inner">
                                                <div class="icon-box"></div>
                                                <div class="text"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="s-col col-lg-4 col-md-6 col-sm-12">
                                    <div class="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms"
                                        style="
                    visibility: visible;
                    animation-duration: 1500ms;
                    animation-delay: 0ms;
                    animation-name: fadeInLeft;
                  ">
                                        <div class="s-block alternate">
                                            <div class="inner">
                                                <div class="icon-box">
                                                    <img src="@/assets/ig/kJL6eJZ.png" alt="" title=""
                                                        class="img-fluid" />
                                                </div>
                                                <div class="text">
                                                    <span>Tönnies được thành lập vào năm 1971 bởi Clemens
                                                        Tönnies và hiện nay là một trong những tập đoàn thực
                                                        phẩm lớn nhất tại Đức. Công ty có trụ sở chính tại
                                                        Rheda-Wiedenbrück, miền Tây Bắc Đức.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="row clearfix">
                                <div class="s-col last col-lg-4 col-md-6 col-sm-12">
                                    <div class="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms"
                                        style="
                    visibility: visible;
                    animation-duration: 1500ms;
                    animation-delay: 0ms;
                    animation-name: fadeInRight;
                  ">
                                        <div class="s-block">
                                            <div class="inner">
                                                <div class="icon-box">
                                                    <img src="@/assets/ig/351cmVc.png" alt="" title="" class="img-fluid"
                                                        width="200" height="200" />
                                                </div>
                                                <div class="text">
                                                    Được thành lập vào năm 1935, Tyson Foods là một trong
                                                    những tập đoàn thực phẩm lớn nhất thế giới. Suốt hơn 85
                                                    năm, Công ty đã mở rộng và có mặt trong hơn 100 quốc gia
                                                    và vùng lãnh thổ, đồng thời xuất khẩu sản phẩm thịt đến
                                                    nhiều thị trường quốc tế. Tyson Foods cam kết đảm bảo
                                                    chất lượng và an toàn thực phẩm và cũng đặt mục tiêu
                                                    thực hiện hoạt động kinh doanh một cách bền vững và có
                                                    trách nhiệm xã hội. Công ty hướng tới giảm thiểu tác
                                                    động môi trường, nâng cao khâu chăm sóc động vật và hỗ
                                                    trợ cộng đồng trong các hoạt động xã hội.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="s-col col-lg-4 col-md-6 col-sm-12">
                                    <div class="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms"
                                        style="
                    visibility: visible;
                    animation-duration: 1500ms;
                    animation-delay: 0ms;
                    animation-name: fadeInLeft;
                  ">
                                        <div class="s-block">
                                            <div class="inner">
                                                <div class="icon-box">
                                                    <img src="@/assets/ig/1Ds2xMn.png" alt="" title="" class="img-fluid"
                                                        width="200" height="200" />
                                                </div>
                                                <div class="text">
                                                    Là một doanh nghiệp hàng đầu trong lĩnh vực chế biến
                                                    thịt tươi sống tại Đức. Với hơn 50 năm kinh nghiệm,
                                                    Wesfleisch đã xây dựng một tên tuổi vững chắc và đạt
                                                    được sự tin cậy từ khách hàng và đối tác trong ngành với
                                                    các chứng nhận như ISO 22000 và HACCP, v.v<br /><br /><br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="s-col last col-lg-4 col-md-6 col-sm-12">
                                    <div class="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms"
                                        style="
                    visibility: visible;
                    animation-duration: 1500ms;
                    animation-delay: 0ms;
                    animation-name: fadeInRight;
                  ">
                                        <div class="s-block alternate">
                                            <div class="inner">
                                                <div class="icon-box">
                                                    <img src="@/assets/ig/uRVHWiE.png" alt="" title=""
                                                        class="img-fluid" />
                                                </div>
                                                <div class="text">
                                                    Bên cạnh sở hữu và quản lý các trang trại hàu hiện đại,
                                                    Yumbah còn nổi tiếng với sản phẩm bào ngư viền xanh -
                                                    &nbsp;sản phẩm bào ngư ngon nhất Thế giới. Sự uy tín của
                                                    Yumbah thể hiện qua sự cẩn thận và kỹ lưỡng trong phương
                                                    pháp nuôi trồng. Yumbah là đối tác đáng tin cậy với hàng
                                                    loạt chứng nhận: Export Registered (Chứng nhận xuất xứ),
                                                    HACCP, SQF, ATT (Doanh nghiệp uy tín tại Úc), Known
                                                    Consignor (Nhà bán hàng được xác nhận), ASC Certified
                                                    Farms (Nông trại đạt chuẩn ASC), v.v
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2>TIN TỨC</h2>
                </div>
                <div class="row justify-content-center clearfix">
                    <div class="news-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box wow fadeInUp">
                            <div class="image-box">
                                <div class="image">
                                    <img src="@/assets/ig/WIwHb8Y.jpeg" alt="" />
                                </div>
                                <div class="over-content">
                                    <div class="cat">Halloween</div>
                                    <h4>Bí ẩn đêm Halloween, đẳng cấp từ biển cả!</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="news-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box wow fadeInUp">
                            <div class="image-box">
                                <div class="image">
                                    <img src="@/assets/ig/nLHpnuo.jpeg" alt="" />
                                </div>
                                <div class="over-content">
                                    <div class="cat"></div>
                                    <h4>
                                        Vì sao bào ngư viền xanh Úc đắt đỏ và được giới thượng lưu săn
                                        lùng
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="news-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box wow fadeInUp">
                            <div class="image-box">
                                <div class="image">
                                    <img src="@/assets/ig/DRI4MrZ.jpeg" alt="" />
                                </div>
                                <div class="over-content">
                                    <div class="cat"></div>
                                    <h4>Bào ngư Úc: Phân loại, cách chọn và hướng dẫn chế biến</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="news-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box wow fadeInUp">
                            <div class="image-box">
                                <div class="image">
                                    <img src="@/assets/ig/GG2CyxX.jpeg" alt="" />
                                </div>
                                <div class="over-content">
                                    <div class="cat"></div>
                                    <h4>
                                        Vì sao Bào Ngư Viền xanh được mệnh danh là "thần dược" của
                                        biển sâu
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="news-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box wow fadeInUp">
                            <div class="image-box">
                                <div class="image">
                                    <img src="@/assets/ig/7XBoa4H.jpeg" alt="" />
                                </div>
                                <div class="over-content">
                                    <div class="cat"></div>
                                    <h4>Bào ngư viền xanh thương hiệu Yumbah</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="news-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box wow fadeInUp">
                            <div class="image-box">
                                <div class="image">
                                    <img src="@/assets/ig/V4zpin8.png" alt="" />
                                </div>
                                <div class="over-content">
                                    <div class="cat"></div>
                                    <h4>Hướng dẫn cách chế biến Bào ngư viền xanh Úc</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div data-include="footer">
            <footer class="main-footer">
                <div class="image-layer" :style="{ background: `url(${require('@/assets/ig/WqRof9g.jpeg')}) center/cover no-repeat` }"></div>
                <div class="upper-section">
                    <div class="auto-container">
                        <div class="row clearfix">
                            <div class="footer-col info-col col-lg-6 col-md-12 col-sm-12">
                                <div class="inner wow fadeInUp">
                                    <div class="content">
                                        <div class="logo">
                                            <span style="color: #ffffff"><a href="/" title="TSI"
                                                    style="color: #ffffff"><img
                                                        src="https://tsi.com.vn/assets/images/logo.png" alt=""
                                                        title="TSI" /></a></span>
                                        </div>
                                        <div class="info">
                                            <ul>
                                                <li>
                                                    <span style="color: #ffffff">Tầng 44 Bitexco Financial Tower, 02 Hải
                                                        Triều, Bến
                                                        Nghé, Quận 1, Hồ Chí Minh</span>
                                                </li>
                                                <li>
                                                    <span style="color: #ffffff">Tầng 19, Capital Place, 29 Liễu Giai,
                                                        Ba Đình, Hà
                                                        Nội</span>
                                                </li>
                                                <li>
                                                    <span style="color: #ffffff"><a href="mailto:Paul.nguyen@tsi.com.vn"
                                                            style="color: #ffffff">Paul.nguyen@tsi.com.vn</a></span>
                                                </li>
                                                <li>
                                                    <span style="color: #ffffff"><a href="tel:(+84) 76 9998686"
                                                            style="color: #ffffff">Thông tin liên hệ: (+84) 76
                                                            9998686</a></span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="separator">
                                            <span style="color: #ffffff"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="footer-col links-col col-lg-3 col-md-6 col-sm-12">
                                <div class="inner wow fadeInLeft">
                                    <ul class="links">
                                        <li>
                                            <span style="color: #ffffff"><a href="/page/distribution.html"
                                                    style="color: #ffffff">Chính sách</a></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="footer-col links-col last col-lg-3 col-md-6 col-sm-12">
                                <div class="inner wow fadeInRight">
                                    <ul class="links">
                                        <li>
                                            <span style="color: #ffffff"><a href="/page/about.html"
                                                    style="color: #ffffff">Giới thiệu</a></span>
                                        </li>
                                        <li>
                                            <span style="color: #ffffff"><a href="/page/contact.html"
                                                    style="color: #ffffff">Liên hệ</a></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'none'
}
</script>
<style>
h1,
h2,
h3,
h4,
h5,
h6,
.text,
.signature,
.count-box {
    color: #fff !important;
}

.content-box .content .inner {
    width: 600px;
}

.swiper-wrapper {
    height: 100vh;
}

.main-header {
    position: absolute;
}

.center-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.collapse.show {
    opacity: 1;
    visibility: visible;
    -ms-transform: translateX(0px);
    transform: translateX(0px);
}

/* Delici - Restaurants HTML Template */

/*** 

====================================================================
      Fonts
====================================================================

***/


/*@import url('global.css');
@import url('swiper.css');
@import url('owl.css');
@import url('preloader.css');
@import url('font-awesome.css');
@import url('simple-line-icons.css');
@import url('animate.css');
@import url('jquery-ui.css');
@import url('jquery.fancybox.min.css');
@import url('custom-animate.css');*/


/*** 

====================================================================

  Main Header style

====================================================================

***/
body {
    font-family: Roboto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: Playfair Display;
}

.btn-style-one {
    background: #f1d1a9;
    border: 2px solid #f1d1a9;
}

.main-header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding: var(--padding-zero);
    background: none;
    min-height: 0;
    z-index: 999;
    transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
}

.fixed-header.header-down {
    top: -51px;
}

.fixed-header.header-up {
    top: -175px;
}

.main-header .auto-container {
    max-width: 1780px;
    padding: 0 20px;
}

.header-top {
    position: relative;
    padding-top: var(--padding-top-10);
    padding-bottom: var(--padding-bottom-10);
    background: none;
    color: #ffffff;
    border-bottom: 1px solid var(--white-color-opacity-four);
}

.header-top .top-left {
    position: relative;
    float: left;
    line-height: 30px;
}

.header-top .top-info {
    position: relative;
}

.header-top .top-info li {
    position: relative;
    float: left;
    margin-right: 70px;
    line-height: 30px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
}

.header-top .top-info li:last-child {
    margin-right: 0;
}

.header-top .top-info li .icon {
    position: relative;
    padding-right: var(--padding-right-5);
}

.header-top .top-info li:after {
    content: '';
    position: absolute;
    left: 100%;
    margin-left: var(--margin-left-30);
    top: 50%;
    margin-top: -4px;
    height: 8px;
    width: 8px;
    border: 1px solid var(--main-color);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.header-top .top-info li:last-child:after {
    display: none;
}

.header-top .top-info li a {
    position: relative;
    display: block;
    line-height: 30px;
    color: #ffffff;
    transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
}

.header-top .top-info li a:hover {
    color: var(--main-color);
}

.header-top .top-right {
    position: relative;
    float: right;
    line-height: 30px;
}

.main-header .header-upper {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    background: none;
    padding: 0 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0);
    transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
}

.fixed-header .header-upper {
    position: relative;
    /*top: 0;*/
    background: #202020;
    border-bottom-color: rgba(0, 0, 0, 0.15);
}

.header-two.fixed-header .header-upper {
    background: #ffffff;
}

.main-header ul,
.main-header ul li {
    list-style: none;
    margin: 0;
    padding: 0;
}

.main-header .main-box {
    position: relative;
    padding: 0px;
}

.main-header .main-box .logo-box {
    position: relative;
    display: block;
    padding: 40px 0px;
    margin-left: 140px;
    transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    z-index: 5;
}

.fixed-header .main-box .logo-box {
    padding: 20px 0px;
}

.fixed-header .main-menu .navigation>li {
    padding: 10px 0px;
}

.main-header.fixed-header .main-menu .navigation>li>ul {
    top: 134%;
}

.main-header.fixed-header .header-upper .links-box {
    padding: 15px 0px;
}

.main-header .main-box .logo-box .logo {
    position: relative;
    display: block;
}

.main-header .main-box .logo-box .logo img {
    position: relative;
    display: block;
    height: 90px;
    z-index: 1;
}

.main-header .nav-box {
    position: static;
    float: right;
}

.main-header .header-upper .nav-box {
    display: none;
}

.main-header .header-upper .links-box {
    position: relative;
    float: left;
}

.main-header .header-upper .links-box .link {
    position: relative;
    float: left;
    margin-left: var(--margin-left-50);
}

.main-header .header-upper .links-box .link:first-child {
    margin-left: 0;
}

.main-header .info-btn {
    position: relative;
    cursor: pointer;
    background: none;
    font-size: var(--font-16);
    color: var(--white-color);
    padding-top: var(--padding-top-15);
    line-height: 34px;
}

.main-header .info-btn img {
    height: 20px;
}

.main-header .nav-toggler {
    position: relative;
    float: left;
    left: 0;
    top: 0;
    padding: 0;
    display: none;
}

.main-header .nav-toggler button {
    position: relative;
    width: 30px;
    height: 40px;
    line-height: 40px;
    background: none;
    color: #e1e1e1;
    font-size: var(--font-16);
    margin: 0px;
    border-radius: 0px;
    outline: none !important;
}

.main-header .nav-toggler button img {
    position: relative;
    display: inline-block;
    vertical-align: middle;
}

.main-header .nav-outer {
    position: static;
    float: left;
    display: none;
}

.main-header .link.info-toggler {
    display: none;
}

.main-header .nav-toggler {
    display: block;
}

.main-menu {
    position: static;
    display: block;
    padding: 0px 0px;
}

.main-menu .navbar-collapse {
    padding: 0px;
    margin: 0px;
    border: none;
    box-shadow: none;
}

.main-menu .navigation {
    position: static;
    z-index: 1;
}

.main-menu .navigation>li {
    position: static;
    display: block;
    float: left;
    padding: 30px 0px;
    margin-left: var(--margin-left-50);
    -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
}

.main-menu .navigation>li>a {
    position: relative;
    display: block;
    font-size: var(--font-12);
    color: var(--white-color);
    padding-top: var(--padding-top-20);
    padding-bottom: var(--padding-bottom-20);
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    opacity: 1;
    -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
}

.main-menu .navigation>li.dropdown {
    position: relative;
}

.main-menu .navigation>li.dropdown.has-mega-menu {
    position: static;
}

.main-menu .navigation>li.dropdown>a {
    padding-right: var(--padding-right-20);
}

.main-menu .navigation>li.dropdown>a:after {
    font-family: 'Font Awesome 6 Pro';
    content: "\f107";
    position: absolute;
    right: 0px;
    top: 18px;
    display: block;
    line-height: 30px;
    font-size: var(--font-12);
    font-weight: 400;
    z-index: 5;
}

.main-menu .navigation>li>a:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 15px;
    display: block;
    height: 5px;
    border-top: 1px solid var(--main-color);
    border-bottom: 1px solid var(--main-color);
    -ms-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
}

.main-menu .navigation>li.dropdown>a:before {
    right: 20px;
}

.main-menu .navigation>li:hover>a:before,
.main-menu .navigation>li.current>a:before,
.main-menu .navigation>li.current-menu-item>a:before {
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    visibility: visible;
}

.main-menu .navigation>li:hover>a,
.main-menu .navigation>li.current>a,
.main-menu .navigation>li.current-menu-item>a {
    color: var(--main-color);
    text-decoration: none;
    opacity: 1;
}

.main-menu .navigation>li>ul {
    position: absolute;
    left: -35px;
    top: 100%;
    width: 280px;
    padding-top: var(--padding-top-30);
    padding-bottom: var(--padding-bottom-30);
    z-index: 100;
    opacity: 1;
    text-align: left;
    background: var(--color-two);
    border: none;
    border-radius: 0;
    -webkit-box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.03), -2px 0px 10px 1px rgba(0, 0, 0, 0.03);
    -ms-box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.03), -2px 0px 10px 1px rgba(0, 0, 0, 0.03);
    -o-box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.03), -2px 0px 10px 1px rgba(0, 0, 0, 0.03);
    -moz-box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.03), -2px 0px 10px 1px rgba(0, 0, 0, 0.03);
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.03), -2px 0px 10px 1px rgba(0, 0, 0, 0.03);
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
    -moz-transition: all 100ms ease;
    -webkit-transition: all 100ms ease;
    -ms-transition: all 100ms ease;
    -o-transition: all 100ms ease;
    transition: all 100ms ease;
}

.main-menu .navigation>li.dropdown.has-mega-menu>ul {
    left: 0;
    width: 100%;
    padding-top: var(--padding-top-55);
    padding-bottom: var(--padding-bottom-20);
}

.main-menu .navigation>li.dropdown.has-mega-menu>ul .auto-container {
    max-width: 1200px;
}

.main-menu .navigation>li .mega-menu {
    position: relative;
}

.main-menu .navigation>li.dropdown.has-mega-menu>ul:before {
    content: '';
    position: absolute;
    top: 0;
    right: 100%;
    width: 2000px;
    height: 100%;
    background: var(--color-two);
}

.main-menu .navigation>li.dropdown.has-mega-menu>ul:after {
    content: '';
    position: absolute;
    top: 0;
    left: 100%;
    width: 2000px;
    height: 100%;
    background: var(--color-two);
}

.main-menu .navigation>li .mega-menu .menu-inner {
    position: relative;
}

.main-menu .navigation>li .mega-menu .row {
    margin: 0 -25px;
}

.main-menu .navigation>li .mega-menu .menu-block {
    position: relative;
    padding: 0 25px;
    margin-bottom: var(--margin-bottom-30);
    text-align: center;
}

.main-menu .navigation>li .mega-menu .menu-block .image {
    position: relative;
    display: block;
    width: 100%;
    border: 1px solid transparent;
    margin-bottom: var(--margin-bottom-15);
    overflow: hidden;
    -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
}

.main-menu .navigation>li .mega-menu .menu-block:hover .image {
    border-color: var(--main-color);
}

.main-menu .navigation>li .mega-menu .menu-block .image img {
    display: block;
    width: 100%;
    -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
}

.main-menu .navigation>li .mega-menu .menu-block:hover .image img {
    transform: scale(1.05);
}

.main-menu .navigation>li .mega-menu .menu-block .title {
    position: relative;
    display: block;
    font-size: var(--font-13);
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
}

.main-menu .navigation>li .mega-menu .menu-block .title a {
    position: relative;
    color: var(--white-color);
    -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
}

.main-menu .navigation>li .mega-menu .menu-block:hover .title a {
    color: var(--main-color);
}

.main-menu .navigation>li>ul>li {
    position: relative;
    margin-bottom: var(--margin-bottom-10);
}

.main-menu .navigation>li>ul>li:last-child {
    margin-bottom: 0;
}

.main-menu .navigation>li>ul>li>a {
    position: relative;
    display: block;
    padding-left: var(--padding-left-35);
    padding-right: var(--padding-right-35);
    font-size: var(--font-15);
    line-height: 30px;
    font-weight: 400;
    color: var(--white-color);
    text-transform: capitalize;
    -moz-transition: all 300ms ease;
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
}

.main-menu .navigation>li>ul>li.dropdown>a:after {
    font-family: 'Font Awesome 6 Pro';
    content: "\f105";
    position: absolute;
    right: 30px;
    top: 0px;
    display: block;
    line-height: 30px;
    font-size: var(--font-12);
    font-weight: 400;
    z-index: 5;
}

.main-menu .navigation>li>ul>li>a:before {
    content: '';
    position: absolute;
    left: 35px;
    top: 50%;
    margin-top: -4px;
    height: 8px;
    width: 8px;
    border: 1px solid var(--main-color);
    opacity: 0;
    visibility: hidden;
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -moz-transition: all 300ms ease;
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
}

.main-menu .navigation>li>ul>li:hover>a:before,
.main-menu .navigation>li>ul>li.current>a:before {
    opacity: 1;
    visibility: visible;
}

.main-menu .navigation>li>ul>li:hover>a,
.main-menu .navigation>li>ul>li.current>a {
    color: var(--main-color);
    padding-left: 55px;
}


.main-menu .navigation>li.dropdown:hover>ul {
    visibility: visible;
    opacity: 1;
    -webkit-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    transform: translateY(-30px);
    -moz-transition: all 500ms ease;
    -webkit-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
}

.main-menu .navigation>li>ul>li>ul {
    position: absolute;
    left: 100%;
    top: 0;
    margin-left: 2px;
    width: 280px;
    padding-top: var(--padding-top-30);
    padding-bottom: var(--padding-bottom-30);
    z-index: 100;
    opacity: 1;
    text-align: left;
    background: var(--color-two);
    border: none;
    border-radius: 0;
    -webkit-box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.03), -2px 0px 10px 1px rgba(0, 0, 0, 0.03);
    -ms-box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.03), -2px 0px 10px 1px rgba(0, 0, 0, 0.03);
    -o-box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.03), -2px 0px 10px 1px rgba(0, 0, 0, 0.03);
    -moz-box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.03), -2px 0px 10px 1px rgba(0, 0, 0, 0.03);
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.03), -2px 0px 10px 1px rgba(0, 0, 0, 0.03);
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
    -moz-transition: all 100ms ease;
    -webkit-transition: all 100ms ease;
    -ms-transition: all 100ms ease;
    -o-transition: all 100ms ease;
    transition: all 100ms ease;
}

.main-menu .navigation>li>ul>li>ul:before {
    content: '';
    position: absolute;
    left: -2px;
    top: 0;
    width: 2px;
    height: 100%;
}

.main-menu .navigation>li>ul>li>ul>li {
    position: relative;
    margin-bottom: var(--margin-bottom-10);
}

.main-menu .navigation>li>ul>li>ul>li:last-child {
    margin-bottom: 0;
}

.main-menu .navigation>li>ul>li>ul>li>a {
    position: relative;
    display: block;
    padding-left: var(--padding-left-35);
    padding-right: var(--padding-right-35);
    font-size: var(--font-15);
    line-height: 30px;
    font-weight: 400;
    color: var(--white-color);
    text-transform: capitalize;
    -moz-transition: all 300ms ease;
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
}

.main-menu .navigation>li>ul>li>ul>li>a:before {
    content: '';
    position: absolute;
    left: 35px;
    top: 50%;
    margin-top: -4px;
    height: 8px;
    width: 8px;
    border: 1px solid var(--main-color);
    opacity: 0;
    visibility: hidden;
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -moz-transition: all 300ms ease;
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
}

.main-menu .navigation>li>ul>li>ul>li:hover>a:before,
.main-menu .navigation>li>ul>li>ul>li.current>a:before {
    opacity: 1;
    visibility: visible;
}

.main-menu .navigation>li>ul>li>ul>li.dropdown>a:after {
    font-family: 'Font Awesome 6 Pro';
    content: "\f105";
    position: absolute;
    right: 30px;
    top: 0px;
    display: block;
    line-height: 30px;
    font-size: var(--font-12);
    font-weight: 400;
    z-index: 5;
}

.main-menu .navigation>li>ul>li>ul>li:hover>a,
.main-menu .navigation>li>ul>li>ul>li.current>a {
    color: var(--main-color);
    padding-left: 55px;
}

.main-menu .navigation>li>ul>li.dropdown:hover>ul {
    visibility: visible;
    opacity: 1;
    top: 0;
    -webkit-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    transform: translateY(-30px);
    -moz-transition: all 500ms ease;
    -webkit-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
}

/*** 

====================================================================
  Hidden Sidebar style
====================================================================

***/

body.visible-sidebar {
    overflow-y: hidden;
}

.menu-backdrop {
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9990;
    background: var(--black-color-opacity);
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
}

.visible-sidebar .menu-backdrop {
    opacity: 1;
    visibility: visible;
}

.hidden-bar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    max-width: 360px;
    background: var(--color-two);
    height: 100%;
    overflow-y: auto;
    z-index: 9999;
    visibility: hidden;
    -ms-transform: translateX(-400px);
    transform: translateX(-400px);
    transition: all 500ms ease-in;
    -webkit-transition: all 500ms ease-in-out;
    -ms-transition: all 500ms ease-in-out;
    -o-transition: all 500ms ease-in-out;
    -moz-transition: all 500ms ease-in-out;
}

.hidden-bar.visible-sidebar {
    opacity: 1;
    visibility: visible;
    -ms-transform: translateX(0px);
    transform: translateX(0px);
}

.hidden-bar ol,
.hidden-bar ol li,
.hidden-bar ul,
.hidden-bar ul li {
    list-style-type: none;
    margin: 0px;
}

.hidden-bar .inner-box {
    position: relative;
    background-color: var(--color-two);
    padding-top: var(--padding-top-75);
    padding-bottom: var(--padding-bottom-50);
}

.hidden-bar .inner-box .cross-icon {
    position: absolute;
    right: 30px;
    top: 30px;
    cursor: pointer;
    color: var(--white-color);
    font-size: var(--font-14);
    width: 26px;
    height: 26px;
    line-height: 24px;
    text-align: center;
    border: 1px solid var(--white-color);
    border-radius: 50%;
}

.hidden-bar .inner-box .cross-icon:hover {
    color: var(--main-color);
    border-color: var(--main-color);
}

.hidden-bar .inner-box .logo-box {
    position: relative;
    line-height: 50px;
    margin-bottom: var(--margin-bottom-60);
    padding-left: var(--padding-left-30);
    padding-right: var(--padding-right-30);
    text-align: center;
}

.hidden-bar .inner-box .logo-box img {
    position: relative;
    max-height: 50px;
}

.hidden-bar h2 {
    position: relative;
    font-size: var(--font-50);
    text-transform: capitalize;
    margin-bottom: var(--margin-bottom-15);
    text-align: center;
}

.hidden-bar .info {
    position: relative;
    text-align: center;
    padding-left: var(--padding-left-20);
    padding-right: var(--padding-right-20);
}

.hidden-bar .info li {
    position: relative;
    line-height: 1.6em;
    color: var(--color-one);
    margin-bottom: var(--margin-bottom-10);
}

.hidden-bar .info li:last-child {
    margin-bottom: 0;
}

.hidden-bar .info li a {
    color: var(--color-one);
}

.hidden-bar .info li a:hover {
    color: var(--main-color);
}

.hidden-bar .separator {
    position: relative;
    margin-top: var(--margin-top-30);
    margin-bottom: var(--margin-bottom-30);
}

.hidden-bar .separator span {
    position: relative;
    display: block;
    height: 8px;
    width: 8px;
    border: 1px solid var(--main-color);
    margin: 0 auto;
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.hidden-bar .booking-info {
    position: relative;
    text-align: center;
    padding-left: var(--padding-left-20);
    padding-right: var(--padding-right-20);
}

.hidden-bar .booking-info .bk-title {
    position: relative;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 5px;
}

.hidden-bar .booking-info .bk-no {
    position: relative;
    font-size: var(--font-30);
    color: var(--main-color);
    line-height: 1em;
}

.hidden-bar .booking-info .bk-no a {
    position: relative;
    display: inline-block;
    color: var(--main-color);
}

.hidden-bar .booking-info .bk-no a:before {
    position: absolute;
    content: '';
    left: 5px;
    right: 5px;
    bottom: -7px;
    height: 5px;
    opacity: 0;
    transform: scale(0.2, 1);
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    border-top: 1px solid var(--main-color);
    border-bottom: 1px solid var(--main-color);
}

.hidden-bar .booking-info .bk-no a:hover::before {
    opacity: 1;
    transform: scale(1, 1);
}

.hidden-bar .side-menu {
    position: relative;
    display: block;
    padding-left: var(--padding-left-60);
    padding-right: var(--padding-right-60);
    margin-bottom: var(--margin-bottom-100);
}

.hidden-bar .side-menu ul {
    position: relative;
    border-top: 1px solid var(--white-color-opacity-four);
}

.hidden-bar .side-menu ul li {
    position: relative;
    display: block;
    border-bottom: 1px solid var(--white-color-opacity-four);
}

.hidden-bar .side-menu ul li a {
    position: relative;
    color: var(--white-color);
    display: block;
    font-weight: 400;
    font-size: var(--font-12);
    line-height: 30px;
    text-transform: uppercase;
    padding-top: var(--padding-top-10);
    padding-bottom: var(--padding-bottom-10);
    letter-spacing: 0.15em;
    transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
}

.hidden-bar .side-menu ul li:hover>a,
.hidden-bar .side-menu ul>li.current>a,
.hidden-bar .side-menu ul>li>ul>li.current>a {
    color: var(--main-color);
}

.hidden-bar .side-menu ul li>a:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 50%;
    margin-top: -4px;
    height: 8px;
    width: 8px;
    border: 1px solid var(--main-color);
    opacity: 0;
    visibility: hidden;
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -moz-transition: all 300ms ease;
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
}

.hidden-bar .side-menu ul li:hover>a:before,
.hidden-bar .side-menu ul li.current>a:before {
    opacity: 1;
    visibility: visible;
}

.hidden-bar .side-menu ul li:hover>a,
.hidden-bar .side-menu ul li.current>a {
    color: var(--main-color);
    padding-left: 20px;
}

.hidden-bar .side-menu ul li ul li:last-child {
    border-bottom: none;
}

.hidden-bar .side-menu ul li .btn-expander {
    position: absolute;
    top: 10px;
    right: 0px;
    background: none;
    color: var(--white-color);
    font-size: var(--font-12);
    height: 30px;
    width: 30px;
    text-align: right;
    line-height: 30px;
    border-radius: 0px;
    outline: none;
    cursor: pointer;
    z-index: 1;
}

.hidden-bar .side-menu ul li .btn-expander i {
    font-weight: 700;
}


/*** 

====================================================================
  Hidden Sidebar style
====================================================================

***/

.info-bar {
    position: fixed;
    right: -440px;
    top: 0px;
    width: 100%;
    max-width: 440px;
    height: 100%;
    overflow-y: auto;
    z-index: 99999;
    opacity: 0;
    background: var(--color-two) url(https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/background/pattern-7.png) center top repeat;
    visibility: hidden;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

.info-back-drop {
    position: fixed;
    right: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: var(--black-color-opacity-two);
    visibility: hidden;
    z-index: 9990;
    transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
}

.side-content-visible .info-back-drop {
    opacity: 1;
    visibility: visible;
}

.side-content-visible .info-bar {
    right: 0px;
    opacity: 1;
    visibility: visible;
}

.info-bar .inner-box {
    position: relative;
    background: var(--color-two) url(https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/background/pattern-7.png) center top repeat;
    padding-top: var(--padding-top-100);
    padding-bottom: var(--padding-bottom-50);
    padding-left: var(--padding-left-30);
    padding-right: var(--padding-right-30);
    text-align: center;
}

.info-bar .inner-box .cross-icon {
    position: absolute;
    right: 30px;
    top: 30px;
    cursor: pointer;
    color: var(--white-color);
    font-size: var(--font-14);
    width: 26px;
    height: 26px;
    line-height: 24px;
    text-align: center;
    border: 1px solid var(--white-color);
    border-radius: 50%;
}

.info-bar .inner-box .cross-icon:hover {
    color: var(--main-color);
    border-color: var(--main-color);
}

.info-bar .inner-box .logo-box {
    position: relative;
    line-height: 50px;
    margin-bottom: var(--margin-bottom-45);
}

.info-bar .inner-box .logo-box img {
    position: relative;
    max-height: 50px;
}

.info-bar .inner-box .image-box {
    position: relative;
    max-width: 200px;
    margin: 0 auto;
    margin-bottom: var(--margin-bottom-45);
    border-radius: 50%;
}

.info-bar .inner-box .image-box img {
    position: relative;
    display: block;
    width: 100%;
    border-radius: 50%;
}

.info-bar h2 {
    position: relative;
    font-size: var(--font-50);
    text-transform: capitalize;
    margin-bottom: var(--margin-bottom-15);
}

.info-bar .info {
    position: relative;
}

.info-bar .info li {
    position: relative;
    line-height: 1.6em;
    color: var(--color-one);
    margin-bottom: var(--margin-bottom-10);
}

.info-bar .info li:last-child {
    margin-bottom: 0;
}

.info-bar .info li a {
    color: var(--color-one);
}

.info-bar .info li a:hover {
    color: var(--main-color);
}

.info-bar .separator {
    position: relative;
    margin-top: var(--margin-top-30);
    margin-bottom: var(--margin-bottom-30);
}

.info-bar .separator span {
    position: relative;
    display: block;
    height: 8px;
    width: 8px;
    border: 1px solid var(--main-color);
    margin: 0 auto;
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.info-bar .booking-info {
    position: relative;
}

.info-bar .booking-info .bk-title {
    position: relative;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 5px;
}

.info-bar .booking-info .bk-no {
    position: relative;
    font-size: var(--font-30);
    color: var(--main-color);
    line-height: 1em;
}

.info-bar .booking-info .bk-no a {
    position: relative;
    display: inline-block;
    color: var(--main-color);
}

.info-bar .booking-info .bk-no a:before {
    position: absolute;
    content: '';
    left: 5px;
    right: 5px;
    bottom: -8px;
    height: 5px;
    opacity: 0;
    transform: scale(0.2, 1);
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    border-top: 1px solid var(--main-color);
    border-bottom: 1px solid var(--main-color);
}

.info-bar .booking-info .bk-no a:hover::before {
    opacity: 1;
    transform: scale(1, 1);
}


/*** 

====================================================================
  Banner Slider Section
====================================================================

***/

.banner-section {
    position: relative;
    padding: 0 0;
    background: var(--black-color);
}

.banner-section .banner-container {
    position: relative;
}

.banner-section .banner-slider {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.banner-section .slide-item {
    position: relative;
    width: 100%;
    padding: 0px;
    overflow: hidden;
}

.banner-section .slide-item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.0);
    z-index: 1;
}

.banner-section .slide-item .image-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    -ms-transform: scale(1.0);
    transform: scale(1.0);
    -webkit-transition: all 0ms linear 0ms;
    -ms-transition: all 0ms linear 0ms;
    -o-transition: all 0ms linear 0ms;
    -moz-transition: all 0ms linear 0ms;
    transition: all 0ms linear 0ms;
}

.banner-section .slide-item.swiper-slide-active .image-layer {
    -ms-transform: scale(1.15);
    transform: scale(1.15);
    -webkit-transition: all 7000ms linear 0ms;
    -ms-transition: all 7000ms linear 0ms;
    -o-transition: all 7000ms linear 0ms;
    -moz-transition: all 7000ms linear 0ms;
    transition: all 7000ms linear 0ms;
}

.banner-section .slide-item .image-layer:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.banner-section .slide-item .content-box {
    position: relative;
    display: table;
    vertical-align: middle;
    width: 100%;
    padding-top: var(--padding-top-150);
    padding-bottom: var(--padding-bottom-50);
    height: 880px;
    min-height: 100vh;
    z-index: 10;
}

.banner-section .slide-item .content {
    position: relative;
    display: table-cell;
    width: 100%;
    vertical-align: middle;
    z-index: 5;
}

.banner-section .slide-item .inner {
    position: relative;
    display: block;
    max-width: 950px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    z-index: 5;
}

.banner-section .slide-item .subtitle {
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    letter-spacing: 0.40em;
    margin-bottom: var(--margin-bottom-10);
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(30px);
    -ms-transform: translateY(30px);
    transform: translateY(30px);
}

.banner-section .slide-item .pattern-image {
    position: relative;
    width: 100px;
    margin: 0 auto;
    margin-bottom: var(--margin-bottom-30);
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(30px);
    -ms-transform: translateY(30px);
    transform: translateY(30px);
}


.banner-section .swiper-slide-active .subtitle,
.banner-section .swiper-slide-active .pattern-image {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translate(0);
    -ms-transform: translate(0);
    transform: translate(0);
    -webkit-transition: all 1000ms ease 500ms;
    -ms-transition: all 1000ms ease 500ms;
    -o-transition: all 1000ms ease 500ms;
    -moz-transition: all 1000ms ease 500ms;
    transition: all 1000ms ease 500ms;
}


.banner-section .slide-item h1 {
    position: relative;
    font-weight: 400;
    text-transform: none;
    line-height: 1.0em;
    margin: 0px 0px;
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(30px);
    -ms-transform: translateY(30px);
    transform: translateY(30px);
}

.banner-section .slide-item h1 span {
    position: relative;
    display: inline-block;
    vertical-align: top;
}

.banner-section .swiper-slide-active h1 {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translate(0);
    -ms-transform: translate(0);
    transform: translate(0);
    -webkit-transition: all 1000ms ease 1000ms;
    -ms-transition: all 1000ms ease 1000ms;
    -o-transition: all 1000ms ease 1000ms;
    -moz-transition: all 1000ms ease 1000ms;
    transition: all 1000ms ease 1000ms;
}

.banner-section .slide-item .text {
    position: relative;
    display: block;
    font-size: var(--font-20);
    margin-top: var(--margin-top-10);
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(30px);
    -ms-transform: translateY(30px);
    transform: translateY(30px);
}

.banner-section .swiper-slide-active .text {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translate(0);
    -ms-transform: translate(0);
    transform: translate(0);
    -webkit-transition: all 1000ms ease 1500ms;
    -ms-transition: all 1000ms ease 1500ms;
    -o-transition: all 1000ms ease 1500ms;
    -moz-transition: all 1000ms ease 1500ms;
    transition: all 1000ms ease 1500ms;
}

.banner-section .slide-item .links-box {
    position: relative;
    display: block;
    padding-top: var(--padding-top-40);
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(30px);
    -ms-transform: translateY(30px);
    transform: translateY(30px);
}

.banner-section .swiper-slide-active .links-box {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translate(0);
    -ms-transform: translate(0);
    transform: translate(0);
    -webkit-transition: all 1000ms ease 2000ms;
    -ms-transition: all 1000ms ease 2000ms;
    -o-transition: all 1000ms ease 2000ms;
    -moz-transition: all 1000ms ease 2000ms;
    transition: all 1000ms ease 2000ms;
}

.banner-section .slide-item .links-box .link {
    position: relative;
    display: inline-block;
    vertical-align: top;
}

.banner-section .slide-item .links-box .link .theme-btn {}

.banner-section .swiper-button-next,
.banner-section .swiper-button-prev {
    position: absolute;
    top: 50%;
    margin-top: -16px;
    display: inline-block;
    vertical-align: top;
    width: 44px;
    height: 44px;
    line-height: 44px;
    font-size: var(--font-24);
    text-align: center;
    background: transparent;
    color: var(--main-color);
    border-radius: 0%;
    -webkit-transition: all 400ms ease;
    -moz-transition: all 400ms ease;
    -ms-transition: all 400ms ease;
    -o-transition: all 400ms ease;
    transition: all 400ms ease;
}

.banner-section .swiper-button-next span,
.banner-section .swiper-button-prev span {
    position: relative;
    z-index: 1;
}

.banner-section .swiper-button-next:after,
.banner-section .swiper-button-prev:after {
    display: none;
}

.banner-section .swiper-button-next:before,
.banner-section .swiper-button-prev:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid var(--main-color);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all 400ms ease;
    -moz-transition: all 400ms ease;
    -ms-transition: all 400ms ease;
    -o-transition: all 400ms ease;
    transition: all 400ms ease;
}

.banner-section .swiper-button-next {
    right: 30px;
}

.banner-section .swiper-button-prev {
    left: 30px;
}

.banner-section .swiper-button-next:hover,
.banner-section .swiper-button-prev:hover {
    color: var(--black-color);
}

.banner-section .swiper-button-next:hover:before,
.banner-section .swiper-button-prev:hover:before {
    background: var(--main-color);
}

.banner-section .book-btn {
    position: absolute;
    right: 50px;
    bottom: 50px;
    width: 110px;
    height: 110px;
    z-index: 10;
}

.banner-section .book-btn:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid var(--main-color);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.banner-section .book-btn a {
    position: relative;
    display: block;
    width: 110px;
    height: 110px;
    color: var(--black-color);
    background: var(--main-color);
    padding-top: var(--padding-top-12);
    padding-left: var(--padding-left-10);
    padding-right: var(--padding-right-10);
    text-align: center;
    z-index: 1;
}

.banner-section .book-btn a .icon {
    position: relative;
    display: block;
    margin-bottom: var(--margin-bottom-7);
}

.banner-section .book-btn a .txt {
    position: relative;
    display: block;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1.5em;
    color: var(--black-color);
    font-size: var(--font-12);
    letter-spacing: 0.15em;
}

/*** 

====================================================================
  Title Box Section
====================================================================

***/

.title-box {
    position: relative;
    margin-bottom: var(--margin-bottom-70);
}

.title-box.centered {
    margin: 0 auto;
    text-align: center;
}

.title-box .subtitle {
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    letter-spacing: 0.40em;
    line-height: 1em;
    margin-bottom: var(--margin-bottom-10);
}

.title-box .pattern-image {
    position: relative;
    margin-bottom: var(--margin-bottom-15) !important;
}

.title-box .pattern-image img {
    max-width: 200px;
}

.title-box.centered .pattern-image {
    margin: 0 auto;
}

.title-box h2 {
    position: relative;
    margin-bottom: 0;
}

.title-box h3 {
    position: relative;
    margin-bottom: 0;
}

.title-box .text {
    position: relative;
    padding-top: var(--padding-top-15);
    line-height: 1.85em;
}

.title-box.centered .text {
    max-width: 420px;
    margin: 0 auto;
}

/*** 

====================================================================
  We Offer Section
====================================================================

***/

.we-offer-section {
    position: relative;
    padding-top: var(--padding-top-100);
    padding-bottom: var(--padding-bottom-50);
    background: var(--color-five);
}

.we-offer-section .right-top-bg {
    position: absolute;
    right: 0;
    top: 0;
}

.we-offer-section .left-bot-bg {
    position: absolute;
    left: 0;
    bottom: 0;
}

.we-offer-section .title-box {
    margin-bottom: -90px;
}

.we-offer-section .row {
    margin: 0 -75px;
}

.offer-block {
    position: relative;
    margin-bottom: var(--margin-bottom-30);
}

.we-offer-section .row .offer-block {
    padding-left: var(--padding-left-75);
    padding-right: var(--padding-right-75);
    margin-bottom: var(--margin-bottom-50);
}

.we-offer-section .row .offer-block:nth-child(2) {
    margin-top: var(--margin-top-160);
}

.offer-block .inner-box {
    position: relative;
    display: block;
    text-align: center;
}

.offer-block .inner-box .image {
    position: relative;
    display: block;
    overflow: hidden;
    padding-top: var(--padding-top-30);
    padding-bottom: var(--padding-bottom-30);
    margin-bottom: var(--margin-bottom-25);
}

.offer-block .inner-box .image:after {
    position: absolute;
    top: 0;
    left: -85%;
    z-index: 2;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
    background: -o-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .4) 100%);
    background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, .4)));
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .4) 100%);
    -webkit-transform: skewX(-25deg);
    -ms-transform: skewX(-25deg);
    transform: skewX(-25deg);
    z-index: 1;
}

.offer-block .inner-box:hover .image:after {
    -webkit-animation: shine 1s;
    animation: shine 1s;
}

.offer-block .inner-box .image:before {
    content: '';
    position: absolute;
    left: 50%;
    margin-left: -70px;
    width: 140px;
    top: 0;
    bottom: 0;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    background: url(https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/background/pattern-8.svg) center repeat;
}

.offer-block .inner-box:hover .image:before {
    transform: rotateY(180deg);
    -webkit-transition-delay: 300ms;
    -moz-transition-delay: 300ms;
    -ms-transition-delay: 300ms;
    -o-transition-delay: 300ms;
    transition-delay: 300ms;
}

.offer-block .inner-box .image img {
    position: relative;
    display: block;
    width: 100%;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
}

.offer-block .inner-box:hover .image img {
    transform: scale(1.04, 1.04);
}

.offer-block h3 {
    position: relative;
    text-transform: capitalize;
    margin-bottom: var(--margin-bottom-20);
}

.offer-block h3 a {
    color: var(--white-color);
}

.offer-block .more-link {
    position: relative;
}

.offer-block .more-link a {
    display: inline-block;
    vertical-align: top;
    font-size: var(--font-12);
    color: var(--main-color);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.2em;
    line-height: 1.5em;
    padding-bottom: 4px;
}

.offer-block .more-link a:before {
    position: absolute;
    content: '';
    left: 5px;
    right: 5px;
    bottom: -4px;
    height: 4px;
    opacity: 0;
    transform: scale(0.2, 1);
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    border-bottom: 1px solid var(--main-color);
    border-top: 1px solid var(--main-color);
}

.offer-block .more-link a:hover::before {
    opacity: 1;
    transform: scale(1, 1);
}

.offer-block .more-link a:hover {
    color: var(--white-color);
    border-color: var(--white-color);
}

/*** 

====================================================================
  Story Section
====================================================================

***/

.story-section {
    position: relative;
    padding-top: var(--padding-top-170);
    padding-bottom: var(--padding-bottom-210);
    background-color: var(--color-four);
}

.story-section .left-bg {
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -95px;
}

.story-section .text-col {
    position: relative;
    margin-bottom: var(--margin-bottom-40);
}

.story-section .text-col .inner {
    position: relative;
    display: block;
    padding-right: var(--padding-right-90);
    text-align: center;
}

.story-section .text-col .title-box {
    margin-bottom: var(--margin-bottom-30);
}

.story-section .booking-info {
    position: relative;
    text-align: center;
}

.story-section .booking-info .bk-title {
    position: relative;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 5px;
}

.story-section .booking-info .bk-no {
    position: relative;
    font-size: var(--font-24);
    color: var(--main-color);
    line-height: 1em;
    margin-bottom: var(--margin-bottom-30);
}

.story-section .booking-info .bk-no a {
    color: var(--main-color);
    padding-bottom: var(--padding-bottom-5);
}

.story-section .booking-info .bk-no a:before {
    position: absolute;
    content: '';
    left: 5px;
    right: 5px;
    bottom: 0px;
    height: 5px;
    opacity: 0;
    transform: scale(0.2, 1);
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    border-top: 1px solid var(--main-color);
    border-bottom: 1px solid var(--main-color);
}

.story-section .booking-info .bk-no a:hover::before {
    opacity: 1;
    transform: scale(1, 1);
}

.hidden-bar .booking-info .bk-no a:hover::before {
    opacity: 1;
}

.story-section .image-col {
    position: relative;
    margin-bottom: var(--margin-bottom-40);
}

.story-section .image-col .inner {
    position: relative;
    display: block;
}

.story-section .image-col .round-stamp {
    position: absolute;
    right: -60px;
    top: -65px;
    z-index: 3;
}

.story-section .image-col .round-stamp:before {
    position: absolute;
    content: '';
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    background: url(https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/resource/badge-1-bg.png) no-repeat;
}

.story-section .image-col .images {
    position: relative;
    padding-left: var(--padding-left-90);
}

.story-section .image-col .images img {
    position: relative;
    display: block;
    width: 100%;
    z-index: 1;
}

.story-section .image-col .images .image:nth-child(2) {
    position: absolute !important;
    left: 0 !important;
    top: auto !important;
    bottom: -160px !important;
    width: 285px;
    padding-top: var(--padding-top-50);
    padding-bottom: var(--padding-bottom-50);
    z-index: 2;
}

.story-section .image-col .images .image:nth-child(2):before {
    content: '';
    position: absolute;
    left: 50%;
    margin-left: -70px;
    width: 140px;
    top: 0;
    bottom: 0;
    background: url(https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/background/pattern-8.svg) center repeat;
}

/*** 

====================================================================
  Special Dish Section
====================================================================

***/

.special-dish {
    position: relative;
    background: var(--color-five);
}

.special-dish .right-bg {
    position: absolute;
    right: 0;
    bottom: 140px;
}

.special-dish .bottom-image {
    position: absolute;
    right: 0;
    bottom: -170px;
    z-index: 1;
}

.special-dish .outer-container {
    position: relative;
}

.special-dish .row {
    margin: 0 0;
}

.special-dish .image-col {
    position: relative;
    padding: 0 0;
}

.special-dish .image-col .inner {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
}

.special-dish .image-col .image-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.special-dish .image-col .image-layer:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.special-dish .image-col .image {
    position: relative;
    display: none;
}

.special-dish .image-col .image img {
    position: relative;
    display: block;
    width: 100%;
}

.special-dish .content-col {
    position: relative;
    padding: 0 0;
}

.special-dish .content-col .inner {
    position: relative;
    display: block;
    max-width: 600px;
    padding-top: var(--padding-top-225);
    padding-bottom: var(--padding-bottom-225);
    padding-left: var(--padding-left-130);
    padding-right: var(--padding-right-20);
}

.special-dish .content-col .badge-icon {
    position: absolute;
    left: -60px;
    top: 0;
}

.special-dish .title-box {
    margin-bottom: var(--margin-bottom-40);
}

.special-dish .price {
    position: relative;
    line-height: 30px;
}

.special-dish .price .old {
    position: relative;
    font-size: var(--font-18);
    color: var(--color-three);
    padding-right: var(--padding-right-20);
}

.special-dish .price .new {
    position: relative;
    font-size: var(--font-24);
    color: var(--main-color);
}

.special-dish .content-col .link-box {
    padding-top: var(--padding-top-40);
}

/*** 

====================================================================
  Menu Section
====================================================================

***/

.menu-section {
    position: relative;
    padding-top: var(--padding-top-100);
    padding-bottom: var(--padding-bottom-100);
    overflow: hidden;
    background-color: var(--color-four);
}

.menu-section .left-bg {
    position: absolute;
    left: 0;
    top: 0;
}

.menu-section .right-bg {
    position: absolute;
    right: 0;
    bottom: 0;
}

.menu-section .title-box {
    margin-bottom: var(--margin-bottom-40);
}

.tabs-box {
    position: relative;
}

.tabs-box .tab-buttons {
    position: relative;
}

.tabs-box .tab-buttons .tab-btn {
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.tabs-box .tabs-content {
    position: relative;
}

.tabs-box .tabs-content .tab {
    position: relative;
    display: none;
}

.tabs-box .tabs-content .active-tab {
    display: block;
}

.menu-tabs {
    position: relative;
}

.menu-tabs .buttons {
    position: relative;
    padding-top: var(--padding-top-25);
    padding-bottom: var(--padding-bottom-25);
    border-top: 1px solid var(--white-color-opacity-four);
    border-bottom: 1px solid var(--white-color-opacity-four);
    margin-bottom: var(--margin-bottom-50);
}

.menu-tabs .buttons .tab-buttons {
    position: relative;
    text-align: center;
    font-family: var(--font-family-Forum);
}

.menu-tabs .buttons .tab-buttons .tab-btn {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: 0 auto;
    margin-left: var(--margin-left-40);
    margin-right: var(--margin-right-40);
    font-size: var(--font-20);
    line-height: 25px;
    text-transform: uppercase;
    padding-bottom: var(--padding-bottom-5);
}

.menu-tabs .buttons .tab-buttons .tab-btn:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 5px;
    border-top: 1px solid var(--main-color);
    border-bottom: 1px solid var(--main-color);
    -ms-transform: scaleX(0);
    transform: scaleX(0);
    transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
}

.menu-tabs .buttons .tab-buttons .tab-btn.active-btn:before {
    -ms-transform: scaleX(1);
    transform: scaleX(1);
}

.menu-tabs .buttons .tab-buttons .tab-btn:after {
    content: '';
    position: absolute;
    left: 100%;
    margin-left: 36px;
    top: 50%;
    margin-top: -5px;
    height: 8px;
    width: 8px;
    border: 1px solid var(--main-color);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.menu-tabs .buttons .tab-buttons .tab-btn:last-child:after {
    display: none;
}

.menu-tabs .menu-col .inner {
    position: relative;
    display: block;
    padding-right: var(--padding-right-80);
    min-height: 100%;
}

.menu-tabs .menu-col .inner:after {
    content: '';
    position: absolute;
    right: -15px;
    top: 0;
    bottom: 50px;
    border-right: 1px solid var(--white-color-opacity-four);
}

.menu-tabs .menu-col:nth-child(2) .inner {
    padding-right: 0;
    padding-left: var(--padding-left-80);
    border-right: none;
}

.menu-tabs .menu-col:nth-child(2) .inner:after {
    display: none;
}

.menu-tabs .dish-block {
    position: relative;
    margin-bottom: var(--margin-bottom-55);
}

.menu-tabs .dish-block .inner-box {
    position: relative;
    padding-left: var(--padding-left-120);
    min-height: 100px;
    padding-top: var(--padding-top-10);
}

.menu-tabs .dish-block .dish-image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
    border-radius: 22px;
    overflow: hidden;
    background-color: var(--main-color);
}

.menu-tabs .dish-block .dish-image img {
    position: relative;
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
}

.menu-tabs .dish-block .inner-box:hover .dish-image img {
    opacity: 0.70;
    transform: scale(1.05, 1.05);
}

.menu-tabs .dish-block .title {
    position: relative;
    line-height: 24px;
    margin-bottom: var(--margin-bottom-10);
    font-family: var(--font-family-Forum);
}

.menu-tabs .dish-block .title:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -3px;
    width: 100%;
    height: 6px;
    border-top: 1px solid var(--white-color-opacity-four);
    border-bottom: 1px solid var(--white-color-opacity-four);
}

.menu-tabs .dish-block .title .ttl {
    position: relative;
    float: left;
    padding-right: var(--padding-right-15);
    background-color: var(--color-four);
    text-transform: capitalize;
}

.menu-tabs .dish-block .title .ttl a {
    color: var(--white-color);
}

.menu-tabs .dish-block .title .ttl a:hover {
    color: var(--main-color);
}

.menu-tabs .dish-block .title .ttl .s-info {
    position: relative;
    display: inline-block;
    line-height: 20px;
    padding: 0 5px;
    font-size: var(--font-14);
    color: var(--color-four);
    background: var(--main-color);
    margin-left: 10px;
}

.menu-tabs .dish-block .title .price {
    position: relative;
    float: right;
    font-size: var(--font-22);
    color: var(--main-color);
    padding-left: var(--padding-left-15);
    background: var(--body-bg-color);
}

.menu-tabs .dish-block .desc {
    position: relative;
    font-size: var(--font-14);
    color: var(--color-one);
}

.menu-tabs .dish-block .desc a {
    color: var(--color-one);
}

.menu-section .open-timing {
    position: relative;
    text-align: center;
}

.menu-section .open-timing .hours {
    position: relative;
    margin-bottom: 25px;
}

/*** 

====================================================================
  Special Offer Section
====================================================================

***/

.special-offer {
    position: relative;
    background: var(--color-four);
    padding-bottom: var(--padding-bottom-100);
}

.special-offer .outer-container {
    position: relative;
    max-width: 1440px;
    padding-left: var(--padding-left-15);
    padding-right: var(--padding-right-15);
    margin: 0 auto;
    padding-top: var(--padding-top-80);
    padding-bottom: var(--padding-bottom-100);
    background: var(--color-five);
}

.special-offer .outer-container:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 15px;
    height: 100%;
    /*background: url(https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/background/pattern-9.svg) center repeat;*/
}

.special-offer .outer-container:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 15px;
    height: 100%;
    /*background: url(https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/background/pattern-9.svg) center repeat;*/
}

.special-offer .title-box {
    margin-bottom: 40px;
}

.special-offer .offer-block-two.margin-top {
    margin-top: var(--margin-top-40);
}

.offer-block-two {
    position: relative;
    margin-bottom: var(--margin-bottom-30);
}

.special-offer .owl-theme .offer-block-two {
    margin-bottom: 0;
}

.offer-block-two .inner-box {
    position: relative;
    display: block;
    text-align: center;
}

.offer-block-two .inner-box .image {
    position: relative;
    display: block;
    overflow: hidden;
    margin-bottom: var(--margin-bottom-15);
    background-color: var(--main-color);
}

.offer-block-two .inner-box .image img {
    position: relative;
    display: block;
    width: 100%;
    -webkit-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
}

.offer-block-two .inner-box:hover .image img {
    opacity: 0.60;
    transform: scale(1.05, 1.05) rotate(2deg);
}

.offer-block-two .image::before {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    display: block;
    content: '';
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, .2);
    border-radius: 0%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
}

.offer-block-two .inner-box:hover .image::before {
    -webkit-animation: circle .95s;
    animation: circle .95s;
}

.offer-block-two h4 {
    position: relative;
    text-transform: capitalize;
    margin-bottom: var(--margin-bottom-10);
}

.offer-block-two h4 a {
    color: var(--white-color);
}

.offer-block-two h4 a:hover {
    color: var(--main-color);
}

.offer-block-two .desc {
    position: relative;
    font-size: var(--font-14);
    color: var(--color-one);
    margin-bottom: var(--margin-bottom-15);
}

.offer-block-two .price {
    position: relative;
    font-family: var(--font-family-Forum);
    font-size: var(--font-20);
    color: var(--main-color);
}

.special-offer .lower-link-box {
    margin-top: var(--margin-top-40);
}

.special-offer .owl-theme .owl-dots {
    display: none;
}

.special-offer .owl-theme .owl-nav {
    position: absolute;
    left: -100px;
    right: -100px;
    height: 0;
    top: 50%;
    margin-top: -22px;
}

.special-offer .owl-theme .owl-nav .owl-next,
.special-offer .owl-theme .owl-nav .owl-prev {
    position: absolute;
    top: 50%;
    display: inline-block;
    vertical-align: top;
    width: 44px;
    height: 44px;
    line-height: 44px;
    font-size: var(--font-24);
    text-align: center;
    background: transparent;
    color: var(--main-color);
    border-radius: 0%;
    -webkit-transition: all 400ms ease;
    -moz-transition: all 400ms ease;
    -ms-transition: all 400ms ease;
    -o-transition: all 400ms ease;
    transition: all 400ms ease;
}

.special-offer .owl-theme .owl-nav .owl-next span,
.special-offer .owl-theme .owl-nav .owl-prev span {
    position: relative;
    z-index: 1;
}

.special-offer .owl-theme .owl-nav .owl-next:before,
.special-offer .owl-theme .owl-nav .owl-prev:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid var(--main-color);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all 400ms ease;
    -moz-transition: all 400ms ease;
    -ms-transition: all 400ms ease;
    -o-transition: all 400ms ease;
    transition: all 400ms ease;
}

.special-offer .owl-theme .owl-nav .owl-next {
    right: 15px;
}

.special-offer .owl-theme .owl-nav .owl-prev {
    left: 15px;
}

.special-offer .owl-theme .owl-nav .owl-next:hover,
.special-offer .owl-theme .owl-nav .owl-prev:hover {
    color: var(--black-color);
}

.special-offer .owl-theme .owl-nav .owl-next:hover:before,
.special-offer .owl-theme .owl-nav .owl-prev:hover:before {
    background: var(--main-color);
}

/*** 

====================================================================
  Testimonials Section
====================================================================

***/

.testimonials-section {
    position: relative;
    padding-top: var(--padding-top-120);
    padding-bottom: var(--padding-bottom-340);
    background: var(--black-color);
}

.testimonials-section .image-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.30;
}

.testimonials-section .carousel-box {
    position: relative;
    max-width: 880px;
    margin: 0 auto;
    text-align: center;
}

.testimonials-section .separator {
    position: relative;
    text-align: center;
    margin-top: var(--margin-top-30);
    margin-bottom: var(--margin-bottom-40);
}

.testimonials-section .separator span {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: 0 1px;
    height: 8px;
    width: 8px;
    border: 1px solid var(--main-color);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.testimonials-section .testi-top {
    position: relative;
    text-align: center;
}

.testimonials-section .testi-top .quotes {
    position: relative;
    line-height: 0.7em;
    font-size: var(--font-70);
    font-family: var(--font-family-Forum);
}

.testimonials-section .testi-top .quote-text {
    position: relative;
    line-height: 1.4em;
    font-size: var(--font-50);
    font-family: var(--font-family-Forum);
}

.testimonials-section .thumbs-carousel-box {
    position: relative;
    max-width: 390px;
    margin: 0 auto;
    overflow: hidden;
}

.testimonials-section .testi-thumbs {
    position: relative;
    max-width: 130px;
    margin: 0 auto;
    text-align: center;
}

.testimonials-section .testi-thumbs .owl-stage-outer {
    overflow: visible;
}

.testimonials-section .testi-thumbs .image {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-bottom: var(--margin-bottom-15);
    -ms-transform: scale(0.80);
    transform: scale(0.80);
    cursor: pointer;
    border-radius: 50%;
    transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
}

.testimonials-section .testi-thumbs .image img {
    position: relative;
    display: block;
    width: 100%;
    border-radius: 50%;
}

.testimonials-section .testi-thumbs .active .image {
    -ms-transform: scale(1);
    transform: scale(1);
}

.testimonials-section .testi-thumbs .auth-title {
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    letter-spacing: 0.20em;
    opacity: 0;
    visibility: hidden;
    transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
}

.testimonials-section .testi-thumbs .active .auth-title {
    opacity: 1;
    visibility: visible;
}

.testimonials-section .owl-theme .owl-nav,
.testimonials-section .owl-theme .owl-dots {
    display: none;
}

/*** 

====================================================================
  Reservation Section
====================================================================

***/

.reserve-section {
    position: relative;
}

.reserve-section:before {
    position: absolute;
    content: '';
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 660px;
    background: var(--color-four);
}

.reserve-section .image-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

.reserve-section .outer-box {
    position: relative;
    top: -270px;
    margin-bottom: -270px;
    background: var(--color-five);
    z-index: 1;
}

.reserve-section.style-two {
    padding-top: var(--padding-top-100);
    padding-bottom: var(--padding-bottom-100);
}

.reserve-section.style-two .outer-box {
    margin: 0 0;
    top: 0;
}

.reserve-section .outer-box>.row {
    margin: 0 0;
}

.reserve-section .reserv-col {
    position: relative;
    padding: 0 0;
}

.reserve-section .reserv-col .inner {
    position: relative;
    padding-top: var(--padding-top-75);
    padding-bottom: var(--padding-bottom-60);
    padding-left: var(--padding-left-60);
    padding-right: var(--padding-right-60);
    min-height: 100%;
    background-color: var(--color-five);
}

.reserve-section .reserv-col .title {
    position: relative;
    text-align: center;
    margin-bottom: var(--margin-bottom-40);
}

.reserve-section .reserv-col .title h2 {
    line-height: 1.2em;
}

.reserve-section .reserv-col .title a {
    color: var(--main-color);
}

.reserve-section .reserv-col form .row {
    margin: 0 -10px;
}

.reserve-section .reserv-col form .row .form-group {
    padding: 0 10px;
    margin-bottom: 20px;
}

.reserve-section .reserv-col form .btn-style-one {
    display: block;
    width: 100%;
}

.reserve-section .reserv-col form .btn-style-one .btn-wrap .text-two,
.reserve-section .reserv-col form .btn-style-one .btn-wrap {
    width: 100%;
}

.reserve-section .info-col {
    position: relative;
    padding: 0 0;
    text-align: center;
    background: url(https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/background/pattern-2.png) left top repeat;
}

.reserve-section .info-col .img-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
}

.reserve-section .info-col .inner {
    position: relative;
    padding-top: var(--padding-top-75);
    padding-bottom: var(--padding-bottom-55);
    padding-left: var(--padding-left-20);
    padding-right: var(--padding-right-20);
    min-height: 100%;
}

.reserve-section.style-two .info-col .inner {
    padding-top: var(--padding-top-60);
}

.reserve-section .info-col .title {
    margin-bottom: var(--margin-bottom-40);
}

.reserve-section.style-two .info-col .title {
    margin-bottom: var(--margin-bottom-30);
}

.reserve-section.style-two .info-col .title .subtitle {
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    letter-spacing: 0.20em;
    line-height: 1.5em;
    margin-bottom: var(--margin-bottom-5);
}

.reserve-section .info-col .title h2 {
    line-height: 1.0em;
}

.reserve-section .info-col .data {
    max-width: 240px;
    margin: 0 auto;
}

.reserve-section .info-col .discount-info {
    position: relative;
    display: block;
    width: 224px;
    height: 224px;
    margin: 0 auto;
    margin-bottom: var(--margin-bottom-25);
    padding-top: var(--padding-top-60);
}

.reserve-section .info-col .discount-info:before {
    content: '';
    position: absolute;
    left: 26px;
    top: 26px;
    width: 170px;
    height: 170px;
    background: var(--black-color);
    transform: rotate(45deg);
    border-radius: 20px;
}

.reserve-section .info-col .discount-info:after {
    content: '';
    position: absolute;
    left: 26px;
    top: 26px;
    width: 170px;
    height: 170px;
    background: var(--color-four);
    border: 3px solid var(--black-color);
    border-radius: 20px;
}

.reserve-section .info-col .discount-info .s-ttl {
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    letter-spacing: 0.20em;
    line-height: 1.5em;
    z-index: 1;
}

.reserve-section .info-col .discount-info .num {
    position: relative;
    line-height: 0.9em;
    font-size: var(--font-80);
    font-family: var(--font-family-Forum);
    z-index: 1;
}

.reserve-section .info-col .instruction {
    position: relative;
    line-height: 1.6em;
    color: var(--color-one);
    z-index: 1;
}

.reserve-section.style-two .info-col .link-box {
    position: relative;
    padding-top: var(--padding-top-55);
}

.reserve-section .info-col .booking-info {
    position: relative;
    text-align: center;
    margin-bottom: var(--margin-bottom-20);
}

.reserve-section .info-col .booking-info .bk-title {
    position: relative;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 5px;
}

.reserve-section .info-col .booking-info .bk-no {
    position: relative;
    font-size: var(--font-30);
    color: var(--main-color);
    line-height: 1em;
}

.reserve-section .info-col .booking-info .bk-no a {
    color: var(--main-color);
}

.reserve-section .info-col .booking-info .bk-no a:before {
    position: absolute;
    content: '';
    left: 5px;
    right: 5px;
    bottom: 0px;
    height: 5px;
    opacity: 0;
    transform: scale(0.2, 1);
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    border-top: 1px solid var(--main-color);
    border-bottom: 1px solid var(--main-color);
}

.reserve-section .info-col .booking-info .bk-no a:hover::before {
    opacity: 1;
    transform: scale(1, 1);
}

.reserve-section .info-col .separator {
    position: relative;
    margin-bottom: var(--margin-bottom-20);
}

.reserve-section .info-col .separator span {
    position: relative;
    display: block;
    height: 8px;
    width: 8px;
    border: 1px solid var(--main-color);
    margin: 0 auto;
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.reserve-section .info-col .info {
    position: relative;
}

.reserve-section .info-col .info li {
    position: relative;
    line-height: 1.5em;
    color: var(--color-one);
    margin-bottom: var(--margin-bottom-25);
}

.reserve-section .info-col .info li strong {
    display: inline-block;
    color: var(--text-color);
    margin-bottom: var(--margin-bottom-5);
}

.reserve-section .info-col .info li:last-child {
    margin-bottom: 0;
}

/*** 

====================================================================
  Why Us Section
====================================================================

***/

.why-us {
    position: relative;
    background: var(--color-four);
    padding-top: var(--padding-top-100);
    padding-bottom: var(--padding-bottom-60);
}

.why-us .left-bg {
    position: absolute;
    left: 0;
    bottom: 80px;
}

.why-us .right-bg {
    position: absolute;
    right: 0;
    top: -100px;
}

.why-us .title-box {
    margin-bottom: var(--margin-bottom-40);
}

.why-block {
    position: relative;
    margin-bottom: var(--margin-bottom-30);
}

.why-us .row {
    margin: 0 -20px;
}

.why-us .row .why-block {
    padding: 0 20px;
    margin-bottom: 40px;
}

.why-block .inner-box {
    position: relative;
    display: block;
    padding-top: var(--padding-top-30);
    padding-left: var(--padding-left-20);
    padding-right: var(--padding-right-20);
    padding-bottom: var(--padding-top-40);
    text-align: center;
    min-height: 100%;
    background: var(--color-seven);
}

.why-us .why-block:nth-child(even) .inner-box {
    background: var(--color-eight);
}

.why-block .inner-box .icon-box {
    position: relative;
    display: block;
    line-height: 90px;
    -webkit-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    margin-bottom: var(--margin-bottom-20);
}

.why-block .inner-box:hover .icon-box {
    -webkit-transform: scale(-1) rotate(180deg);
    -moz-transform: scale(-1) rotate(180deg);
    -ms-transform: scale(-1) rotate(180deg);
    -o-transform: scale(-1) rotate(180deg);
    transform: scale(-1) rotate(180deg);
}

.why-block .inner-box .icon-box img {
    position: relative;
    max-height: 80px;
}

.why-block h4 {
    position: relative;
    text-transform: capitalize;
    margin-bottom: var(--margin-bottom-20);
}

.why-block h4 a {
    color: var(--white-color);
}

.why-block h4 a:hover {
    color: var(--main-color);
}

.why-block .text {
    position: relative;
    font-size: var(--font-14);
    color: var(--color-one);
}

/*** 

====================================================================
  Featured Links Section
====================================================================

***/

.featured-links {
    position: relative;
}

.featured-links .outer-container {
    position: relative;
}

.featured-links .row {
    margin: 0 0;
}

.featured-links .row .link-block {
    padding: 0 0;
}

.featured-links .link-block {
    position: relative;
    text-align: center;
    background-color: var(--color-two);
}

.featured-links .link-block .inner {
    position: relative;
    min-height: 100%;
    background-color: var(--color-five);
}

.featured-links .link-block .text-block {
    position: relative;
    display: table;
    width: 100%;
    height: 370px;
    vertical-align: middle;
}

.featured-links .link-block.alternate .text-block {
    position: absolute;
    bottom: 0;
    height: 250px;
}

.featured-links .link-block .text-block .bl-inner {
    position: relative;
    display: table-cell;
    width: 100%;
    vertical-align: middle;
}

.featured-links .link-block .text-block .content {
    position: relative;
    max-width: 300px;
    margin: 0 auto;
    padding-bottom: var(--padding-bottom-30);
    padding-top: var(--padding-top-30);
    padding-left: var(--padding-left-20);
    padding-right: var(--padding-right-20);
}

.featured-links .link-block .text-block .subtitle {
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    letter-spacing: 0.40em;
    margin-bottom: var(--margin-bottom-5);
}

.featured-links .link-block .text-block h3 {
    position: relative;
    text-transform: capitalize;
    margin-bottom: var(--margin-bottom-15);
}

.featured-links .link-block .text-block .text {
    position: relative;
    line-height: 1.5em;
    font-size: var(--font-14);
    color: var(--color-one);
    margin-bottom: var(--margin-bottom-25);
}

.featured-links .link-block .text-block .link {
    position: relative;
}

.featured-links .link-block .text-block .link a {
    position: relative;
    display: inline-block;
    letter-spacing: 0.20em;
    font-weight: 700;
    font-size: var(--font-12);
    text-transform: uppercase;
    padding-bottom: 3px;
    -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
}

.featured-links .link-block .text-block .link a:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
    display: block;
    height: 5px;

    opacity: 0;
    transform: scale(0.2, 1);

    border-top: 1px solid var(--main-color);
    border-bottom: 1px solid var(--main-color);
    -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
}

.featured-links .link-block .text-block .link a:hover {
    color: var(--white-color);
}

.featured-links .link-block .text-block .link a:hover:before {
    opacity: 1;
    transform: scale(1, 1);
}

.featured-links .link-block .image-box {
    position: relative;
    display: block;
    width: 100%;
    height: 380px;
}

.featured-links .link-block.alternate .image-box {
    position: absolute;
    height: 100%;
}

.featured-links .link-block .image-box .image-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.featured-links .link-block .image-box .image {
    position: relative;
    display: none;
}

.featured-links .link-block .image-box .image img {
    position: relative;
    width: 100%;
}

/*** 

====================================================================
  Team Section
====================================================================

***/

.team-section {
    position: relative;
    padding-top: var(--padding-top-100);
    padding-bottom: var(--padding-bottom-60);
    background-color: var(--color-four);
}

.team-section .title-box {
    margin-bottom: 40px;
}

.team-section .row {
    margin: 0 -25px;
}

.team-section .left-bg {
    position: absolute;
    left: 0;
    bottom: 0;
}

.team-section .right-bg {
    position: absolute;
    right: 0;
    top: 0;
}

.team-block {
    position: relative;
    margin-bottom: var(--margin-bottom-30);
}

.team-section .row .team-block {
    padding-left: var(--padding-left-25);
    padding-right: var(--padding-right-25);
    margin-bottom: var(--margin-bottom-40);
}

.team-block .inner-box {
    position: relative;
    display: block;
}

.team-block .inner-box .image {
    position: relative;
    display: block;
    margin-bottom: var(--margin-bottom-15);
}

.team-block .inner-box .image img {
    position: relative;
    display: block;
    width: 100%;
}

.team-block .overlay-box {
    position: absolute;
    content: '';
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    transition: all 900ms ease;
    -moz-transition: all 900ms ease;
    -webkit-transition: all 900ms ease;
    -ms-transition: all 900ms ease;
    -o-transition: all 900ms ease;
    transition: -webkit-transform 0.4s ease;
    transition: transform 0.4s ease;
    transition: transform 0.4s ease, -webkit-transform 0.4s ease;
    -webkit-transform: scale(0, 1);
    -ms-transform: scale(0, 1);
    transform: scale(0, 1);
    -webkit-transform-origin: right center;
    -ms-transform-origin: right center;
    transform-origin: right center;
    background-position: center center;
}

.team-block .overlay-box:before {
    position: absolute;
    content: '';
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0.40;
    background-color: var(--main-color);
}

.team-block .overlay-box .overlay-inner {
    position: relative;
    text-align: center;
}

.team-block .inner-box:hover .overlay-box {
    -webkit-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    transform: scale(1, 1);
    -webkit-transform-origin: left center;
    -ms-transform-origin: left center;
    transform-origin: left center;
}

.team-block .social-box {
    position: relative;
}

.team-block .social-box li {
    position: relative;
    margin: 0px 1px;
    display: inline-block;
    font-family: 'Font Awesome 6 Pro';
}

.team-block .social-box li a {
    position: relative;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: inline-block;
    color: var(--white-color);
    background-color: var(--black-color)
}

.team-block .social-box li a:hover {
    background: var(--main-color);
    color: var(--color-five);
}

.team-block h3 {
    position: relative;
    text-transform: capitalize;
    margin-bottom: 0;
}

.team-block h3 a {
    color: var(--white-color);
}

.team-block h3 a:hover {
    color: var(--main-color);
}

.team-block .designation {
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    letter-spacing: 0.40em;
    margin-bottom: var(--margin-bottom-5);
}

.team-block .desc {
    position: relative;
    font-size: var(--font-14);
    color: var(--color-one);
}

/*** 

====================================================================
  Intro Section
====================================================================

***/

.intro-section {
    position: relative;
    padding-top: var(--padding-top-100);
    padding-bottom: var(--padding-bottom-25);
    background: var(--black-color);
}

.intro-section .image-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.40;
}

.intro-section .title-box {
    margin-bottom: 40px;
}

.intro-section .content-box {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.intro-section .separator {
    position: relative;
    text-align: center;
    margin-top: var(--margin-top-50);
    margin-bottom: var(--margin-bottom-40);
}

.intro-section .separator span {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: 0 1px;
    height: 8px;
    width: 8px;
    border: 1px solid var(--main-color);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.intro-section .content-box h3 {
    position: relative;
    font-size: var(--font-50);
    margin-bottom: var(--margin-bottom-30);
}

.intro-section .content-box .auth-title {
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    letter-spacing: 0.40em;
}

.intro-section .content-box .play-btn {
    position: relative;
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto;
}

.intro-section .content-box .play-btn .theme-btn {
    position: relative;
    display: block;
    width: 90px;
    height: 90px;
    text-align: center;
    line-height: 86px;
    font-size: var(--font-18);
    color: var(--white-color);
    border: 2px solid var(--white-color);
    border-radius: 50%;
}

.intro-section .content-box .play-btn .theme-btn:hover {
    color: var(--main-color);
    border-color: var(--main-color);
}



.intro-section .content-box .play-btn .ripple,
.intro-section .content-box .play-btn .ripple:before,
.intro-section .content-box .play-btn .ripple:after {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-top: -1px;
    margin-left: -1px;
    /* -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); */
    -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, .6);
    -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, .6);
    -ms-box-shadow: 0 0 0 0 rgba(255, 255, 255, .6);
    -o-box-shadow: 0 0 0 0 rgba(255, 255, 255, .6);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, .6);
    -webkit-animation: ripple 3s infinite;
    -moz-animation: ripple 3s infinite;
    -ms-animation: ripple 3s infinite;
    -o-animation: ripple 3s infinite;
    animation: ripple 3s infinite;
}

.intro-section .content-box .play-btn .ripple:before {
    -webkit-animation-delay: .9s;
    -moz-animation-delay: .9s;
    -ms-animation-delay: .9s;
    -o-animation-delay: .9s;
    animation-delay: .9s;
    content: "";
    position: absolute;
}

.intro-section .content-box .play-btn .ripple:after {
    -webkit-animation-delay: .6s;
    -moz-animation-delay: .6s;
    -ms-animation-delay: .6s;
    -o-animation-delay: .6s;
    animation-delay: .6s;
    content: "";
    position: absolute;
}

.intro-section .fact-counter {
    position: relative;
    padding-top: var(--padding-top-75);
    margin-top: var(--margin-top-70);
}

.intro-section .fact-counter:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 18px;
    background: url(https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/background/pattern-10.svg) left top repeat;
}

.intro-section .fact-counter .fact-block {
    position: relative;
    margin-bottom: var(--margin-bottom-50);
}

.intro-section .fact-counter .fact-count {
    position: relative;
    float: left;
}

.intro-section .fact-counter .count-box {
    position: relative;
    line-height: 60px;
    font-size: var(--font-60);
    font-family: var(--font-family-Forum);
}

.intro-section .fact-counter .count-box i {
    font-style: normal;
}

.intro-section .fact-counter .fact-title {
    position: relative;
    float: left;
    padding-top: 10px;
    line-height: 20px;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    letter-spacing: 0.40em;
    margin-left: var(--margin-left-15);
}

/*** 

====================================================================
  News Section
====================================================================

***/

.news-section {
    position: relative;
    padding-top: var(--padding-top-100);
    padding-bottom: var(--padding-bottom-80);
    background: var(--color-five);
}

.news-section .title-box {
    margin-bottom: var(--margin-bottom-40);
}

.news-section .row {
    margin: 0 -25px;
}

.news-block {
    position: relative;
    margin-bottom: var(--margin-bottom-30);
}

.news-section .row .news-block {
    padding: 0 25px;
    margin-bottom: 40px;
}

.news-block .inner-box {
    position: relative;
    display: block;
}

.news-block .image-box {
    position: relative;
    display: block;
}

.news-block .image-box:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 170px;
    background: rgba(0, 0, 0, 0.70);
    background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.0));
    background: -ms-linear-gradient(bottom, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.0));
    z-index: 1;
}

.news-block .image {
    position: relative;
    display: block;
    z-index: 0;
    overflow: hidden;
}

.news-block .image img {
    position: relative;
    display: block;
    width: 100%;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
}

.news-block .image:before {
    position: absolute;
    top: 0;
    left: -85%;
    z-index: 2;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
    background: -o-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .8) 100%);
    background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, .8)));
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .8) 100%);
    -webkit-transform: skewX(-25deg);
    -ms-transform: skewX(-25deg);
    transform: skewX(-25deg);
    z-index: 1;
}

.news-block .inner-box:hover .image:before {
    -webkit-animation: shine 1s;
    animation: shine 1s;
}

.news-block .inner-box:hover img {
    transform: scale(1.05, 1.05);
}

.news-block .date {
    position: absolute;
    left: 25px;
    top: 30px;
    z-index: 1;
}

.news-block .date span {
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    line-height: 14px;
    letter-spacing: 0.10em;
    padding: 3px 3px;
    background-color: var(--black-color);
}

.news-block .over-content {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding-left: var(--padding-left-30);
    padding-right: var(--padding-right-25);
    padding-bottom: var(--padding-bottom-25);
    z-index: 3;
}

.news-block .cat {
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    letter-spacing: 0.40em;
    margin-bottom: var(--margin-bottom-5);
}

.news-block h4 {
    position: relative;
    margin-bottom: 0;
}

.news-block h4 a {
    color: var(--text-color);
}

/*** 

====================================================================
  Main Footer
====================================================================

***/

.main-footer {
    position: relative;
    padding-top: var(--padding-top-100);
    padding-bottom: var(--padding-bottom-70);
    background: var(--black-color);
}

.main-footer .image-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: right top;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.40;
}

.main-footer .upper-section {
    position: relative;
    text-align: center;
    margin-bottom: var(--margin-bottom-70);
}

.main-footer .footer-col {
    position: relative;
    text-align: center;
}

.main-footer .links-col {
    position: relative;
}

.main-footer .links-col.last {
    order: 12;
}

.main-footer .links-col ul li {
    position: relative;
    margin-bottom: var(--margin-bottom-20);
}

.main-footer .links-col ul li:last-child {
    margin-bottom: 0;
}

.main-footer .links-col ul li a {
    position: relative;
    display: inline-block;
    color: var(--color-one);
    line-height: 1.5em;
    text-transform: uppercase;
    font-weight: 700;
    font-size: var(--font-12);
    letter-spacing: 0.30em;
    -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
}

.main-footer .links-col ul li a:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -7px;
    display: block;
    height: 5px;
    border-top: 1px solid var(--white-color);
    border-bottom: 1px solid var(--white-color);
    transform: scaleX(0);
    -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
}

.main-footer .links-col ul li a:hover {
    color: var(--main-color);
}

.main-footer .links-col ul li a:hover:before {
    border-color: var(--main-color);
    transform: scaleX(1);
}

.main-footer .info-col {
    position: relative;
    color: var(--color-one);
    order: 4;
}

.main-footer .links-col .inner {
    position: relative;
    text-align: center;
    padding-top: var(--padding-top-150);
    padding-bottom: var(--padding-bottom-150);
    min-height: 100%;
}

.main-footer .info-col .inner {
    position: relative;
    max-width: 1440px;
    padding-left: var(--padding-left-30);
    padding-right: var(--padding-right-30);
    margin: 0 auto;
    padding-top: var(--padding-top-100);
    padding-bottom: var(--padding-bottom-90);
    /*background:var(--color-five) url(https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/background/pattern-4.png) center top repeat;*/
}

.main-footer .info-col .content {
    position: relative;
    max-width: 460px;
    margin: 0 auto;
}

.main-footer .info-col .inner:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 15px;
    height: 100%;
    /*background: url(https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/background/pattern-9.svg) center repeat;*/
}

.main-footer .info-col .inner:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 15px;
    height: 100%;
    /*background: url(https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/background/pattern-9.svg) center repeat;*/
}

.main-footer .info-col .logo {
    position: relative;
    margin-bottom: var(--margin-bottom-40);
}

.main-footer .info-col .info li {
    position: relative;
    line-height: 1.5em;
    margin-bottom: var(--margin-bottom-5);
}

.main-footer .info-col .info li:last-child {
    margin-bottom: 0;
}

.main-footer .info-col .info li a {
    color: var(--color-one);
}

.main-footer .info-col .info li a:hover {
    color: var(--main-color);
}

.main-footer .info-col .separator {
    position: relative;
    text-align: center;
    margin-top: var(--margin-top-30);
    margin-bottom: var(--margin-bottom-20);
}

.main-footer .info-col .separator span {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: 0 1px;
    height: 8px;
    width: 8px;
    border: 1px solid var(--main-color);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.main-footer .info-col .newsletter {
    position: relative;
}

.main-footer .info-col .newsletter h3 {
    margin-bottom: 0;
}

.main-footer .info-col .newsletter .text {
    line-height: 1.5em;
    font-size: var(--font-14);
}

.main-footer .info-col .newsletter .text span {
    color: var(--text-color);
}

.main-footer .info-col .newsletter-form {
    position: relative;
    margin-top: var(--margin-top-30);
}

.main-footer .info-col .newsletter-form .form-group {
    position: relative;
    margin-bottom: 0;
}

.main-footer .info-col .newsletter-form .alt-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    margin-top: -15px;
    line-height: 30px;
    font-size: var(--font-14);
    color: var(--white-color);
    font-weight: 400;
    z-index: 1;
    pointer-events: none;
}

.main-footer .info-col .newsletter-form .form-group input[type="text"],
.main-footer .info-col .newsletter-form input[type="email"],
.main-footer .info-col .newsletter-form input[type="password"] {
    position: relative;
    display: block;
    height: 56px;
    width: 100%;
    font-size: var(--font-16);
    color: var(--color-one);
    line-height: 34px;
    font-weight: 400;
    padding: 10px 20px 10px 40px;
    background-color: var(--color-six);
    border: 1px solid var(--white-color-opacity-five);
    border-radius: 0px;
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    transition: all 300ms ease;
}

.main-footer .info-col .newsletter-form .form-group input[type="text"]:focus,
.main-footer .info-col .newsletter-form input[type="email"]:focus,
.main-footer .info-col .newsletter-form input[type="password"]:focus {
    border-color: var(--main-color);
}

.main-footer .info-col .newsletter-form button {
    position: absolute;
    right: 0;
    top: 0;
    width: 180px;
    height: 56px;
    line-height: 30px;
}

.btn-style-one .btn-title {
    line-height: 22px;
}

.main-footer .footer-bottom {
    position: relative;
    text-align: center;
}

.main-footer .copyright {
    position: relative;
    color: var(--color-one);
    line-height: 1.5em;
}

.main-footer .copyright a {
    text-decoration: underline;
    color: var(--main-color);
}

/*** 

====================================================================
  Inner Banner Section
====================================================================

***/

.inner-banner {
    position: relative;
    padding-top: var(--padding-top-300);
    padding-bottom: var(--padding-bottom-150);
    background: var(--black-color);
}

.inner-banner .image-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.40;
}

.inner-banner .pattern-image {
    width: 100px;
    margin: 0 auto;
}

.inner-banner .inner {
    position: relative;
    display: block;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    z-index: 5;
}

.inner-banner .inner .subtitle {
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    letter-spacing: 0.40em;
    margin-bottom: var(--margin-bottom-0);
}

.inner-banner .inner h1 {
    position: relative;
    font-weight: 400;
    font-size: var(--font-80);
    text-transform: none;
    line-height: 1.0em;
    margin: 0px 0px;
}

.inner-banner .inner h1 span {
    position: relative;
    display: inline-block;
    vertical-align: top;
}

/*** 

====================================================================
  About Section
====================================================================

***/

.about-section {
    position: relative;
    background-color: var(--color-four);
    padding-top: var(--padding-top-100);
    padding-bottom: var(--padding-bottom-50);
}

.about-section .left-bg {
    position: absolute;
    left: 0;
    top: 40%;
}

.about-section .right-bg {
    position: absolute;
    right: 0;
    top: 100px;
}

.about-section .title-box {
    max-width: 920px;
    margin-bottom: var(--margin-bottom-90);
}

.about-section .row {
    margin: 0 -30px;
}

.about-block {
    position: relative;
    margin-bottom: var(--margin-bottom-30);
}

.about-section .row .about-block {
    padding-left: var(--padding-left-30);
    padding-right: var(--padding-right-30);
    margin-bottom: var(--margin-bottom-40);
}

.about-section .inner-box {
    position: relative;
    display: block;
    min-height: 100%;
}

.about-section .info-block {
    text-align: center;
}

.about-section .inner-box .image {
    position: relative;
    display: block;
}

.about-section .inner-box .image img {
    display: block;
    width: 100%;
}

.about-block .text {
    position: relative;
    font-size: var(--font-14);
    line-height: 1.85em;
    margin-bottom: var(--margin-bottom-30);
}

.about-block .signature {
    position: relative;
}

.about-block .author {
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    letter-spacing: 0.20em;
    margin-top: var(--margin-top-5);
}

.about-block .video-box {
    position: relative;
    margin-top: var(--margin-top-100);
}

.about-block .video-box img {
    opacity: 0.70;
}

.about-block .video-box .play-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -41px 0 0 -41px;
    display: block;
    width: 82px;
    height: 82px;
    text-align: center;
    line-height: 80px;
    font-size: var(--font-18);
    color: var(--white-color);
    border: 1px solid var(--white-color);
    border-radius: 50%;
}



.about-block .video-box .play-btn .ripple,
.about-block .video-box .play-btn .ripple:before,
.about-block .video-box .play-btn .ripple:after {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 82px;
    height: 82px;
    border-radius: 50%;
    margin-top: -1px;
    margin-left: -1px;
    /* -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); */
    -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, .6);
    -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, .6);
    -ms-box-shadow: 0 0 0 0 rgba(255, 255, 255, .6);
    -o-box-shadow: 0 0 0 0 rgba(255, 255, 255, .6);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, .6);
    -webkit-animation: ripple 3s infinite;
    -moz-animation: ripple 3s infinite;
    -ms-animation: ripple 3s infinite;
    -o-animation: ripple 3s infinite;
    animation: ripple 3s infinite;
}

.about-block .video-box .play-btn .ripple:before {
    -webkit-animation-delay: .9s;
    -moz-animation-delay: .9s;
    -ms-animation-delay: .9s;
    -o-animation-delay: .9s;
    animation-delay: .9s;
    content: "";
    position: absolute;
}

.about-block .video-box .play-btn .ripple:after {
    -webkit-animation-delay: .6s;
    -moz-animation-delay: .6s;
    -ms-animation-delay: .6s;
    -o-animation-delay: .6s;
    animation-delay: .6s;
    content: "";
    position: absolute;
}



.about-block .video-box .play-btn:hover {
    color: var(--main-color);
    border-color: var(--main-color);
}

.about-section .info-block .inner-box {
    position: relative;
    border: 1px solid var(--main-color);
    padding-top: var(--padding-top-90);
    padding-bottom: var(--padding-bottom-50);
    margin-left: var(--margin-left-15);
    margin-right: var(--margin-right-15);
}

.about-section .info-block .inner-box:before {
    content: '';
    position: absolute;
    left: -14px;
    top: 12px;
    right: -14px;
    bottom: 12px;
    border: 1px solid var(--main-color);
}

.about-section .info-block .info {
    max-width: 240px;
    margin: 0 auto;
}

.about-section .info-block .info li {
    position: relative;
    color: var(--color-one);
    line-height: 1.5em;
    margin-bottom: var(--margin-bottom-25);
}

.about-section .info-block .info li:last-child {
    margin-bottom: 0;
}

.about-section .info-block .info li strong {
    position: relative;
    display: block;
    color: var(--text-color);
    margin-bottom: var(--margin-bottom-5);
}

.about-section .info-block .info li .address {
    position: relative;
    display: block;
    margin-bottom: var(--margin-bottom-10);
}

.about-section .info-block .info li a {
    color: var(--color-one);
}

.about-section .info-block .info li a:hover {
    color: var(--main-color);
}

.about-section .info-block .info li.separator {
    position: relative;
    margin-bottom: var(--margin-bottom-30);
}

.about-section .info-block .info li.separator span {
    position: relative;
    display: block;
    height: 8px;
    width: 8px;
    border: 1px solid var(--main-color);
    margin: 0 auto;
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.about-section .fact-counter {
    position: relative;
    padding-top: var(--padding-top-60);
}

.about-section .fact-counter .fact-block {
    position: relative;
    text-align: center;
    margin-bottom: var(--margin-bottom-50);
}

.about-section .fact-counter .fact-count {
    position: relative;
    line-height: 60px;
    font-size: var(--font-60);
    font-family: var(--font-family-Forum);
}

.about-section .fact-counter .count-box {
    position: relative;
}

.about-section .fact-counter .count-box i {
    font-style: normal;
}

.about-section .fact-counter .fact-title {
    position: relative;
    display: block;
    padding-top: var(--padding-top-5);
    line-height: 20px;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    letter-spacing: 0.40em;
}

/*** 

====================================================================
  Fluid Section
====================================================================

***/

.fluid-section {
    position: relative;
    background: var(--color-five);
}

.fluid-section .right-bg {
    position: absolute;
    right: 0;
    top: 0;
}

.fluid-section .left-bg {
    position: absolute;
    left: 0;
    bottom: 0;
}

.fluid-section .outer-container {
    position: relative;
}

.fluid-section .row {
    margin: 0 0;
}

.fluid-section .image-col {
    position: relative;
    padding: 0 0;
}

.fluid-section.alternate .image-col {
    order: 12;
}

.fluid-section .image-col .inner {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
}

.fluid-section .image-col .image-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.fluid-section .image-col .image-layer:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.fluid-section .image-col .image {
    position: relative;
    display: none;
}

.fluid-section .image-col .image img {
    position: relative;
    display: block;
    width: 100%;
}

.fluid-section .content-col {
    position: relative;
    padding: 0 0;
    text-align: center;
}

.fluid-section.alternate .content-col {
    order: 0;
}

.fluid-section .content-col .inner {
    position: relative;
    display: block;
    padding-top: var(--padding-top-230);
    padding-bottom: var(--padding-bottom-230);
    padding-left: var(--padding-left-20);
    padding-right: var(--padding-right-20);
}

.fluid-section .content-col .content-box {
    position: relative;
    display: block;
    width: 100%;
    max-width: 960px;
}

.fluid-section.alternate .content-col .content-box {
    float: right;
}

.fluid-section .content-col .title-box {
    margin-bottom: var(--margin-bottom-40);
}

.fluid-section .content-col .signature {
    position: relative;
}

.fluid-section .content-col .author {
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    letter-spacing: 0.20em;
    margin-top: var(--margin-top-5);
}

.fluid-section .content-col .link-box {
    padding-top: var(--padding-top-30);
}

.fluid-section.alternate .content-col .link-box {
    padding-top: var(--padding-top-0);
}

/*** 

====================================================================
  Services Section
====================================================================

***/

.services-section {
    position: relative;
    background-color: var(--color-four);
    padding-top: var(--padding-top-100);
    padding-bottom: var(--padding-bottom-10);
    z-index: 1;
}

.services-section .left-bg {
    position: absolute;
    left: 0;
    top: -130px;
}

.services-section .right-bg {
    position: absolute;
    right: 0;
    bottom: 0px;
}

.services-section .title-box {
    margin-bottom: var(--margin-bottom-80);
}

.services-section .s-col {
    position: relative;
    padding-top: var(--padding-top-60);
}

.services-section .s-col .inner {
    position: relative;
    display: block;
}

.services-section .s-col.last {
    order: 12;
}

.services-section .image-col {
    position: relative;
    margin-bottom: var(--margin-bottom-90);
    order: 5;
}

.services-section .image-col .image-box {
    position: relative;
    display: block;
    padding-top: var(--padding-top-20);
    text-align: center;
}

.services-section .image-col .image-box img {
    position: relative;
    z-index: 1;
}

.services-section .image-col .image-box:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: -10px;
    bottom: 90px;
    background: url(https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/background/pattern-8.svg) center top no-repeat;
}

.services-section .s-block {
    position: relative;
    margin-bottom: var(--margin-bottom-100);
}

.services-section .s-col .s-block:last-child {
    margin-bottom: 0;
}

.services-section .s-block .inner {
    position: relative;
    display: block;
    min-height: 100px;
    padding-left: var(--padding-left-120);
}

.services-section .s-block.alternate .inner {
    padding-left: 0;
    text-align: right;
    padding-right: var(--padding-right-120);
}

.services-section .s-block .icon-box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    background: var(--color-five);
    border-radius: 50%;
    transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
}

.s-block .inner:hover .icon-box {
    /*transform:rotateY(180deg);*/
}

.services-section .s-block.alternate .icon-box {
    left: auto;
    right: 0;
}

.services-section .s-block .icon-box img {
    max-height: 80px;
}

.services-section .s-block h4 {
    margin-bottom: var(--margin-bottom-5);
}

.services-section .s-block .text {
    position: relative;
    color: var(--color-one);
    font-size: var(--font-14);
}

/*** 

====================================================================
  Testimonials Section
====================================================================

***/

.testimonials-two {
    position: relative;
    background: var(--color-two);
    padding-top: var(--padding-top-100);
    padding-bottom: var(--padding-bottom-100);
}

.testimonials-two .image-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

.special-offer .carousel-box {
    position: relative;
}

.testimonials-two .title-box {
    margin-bottom: 40px;
}

.testimonials-two .testi-block {
    position: relative;
}

.testimonials-two .testi-block .inner-box {
    position: relative;
    padding-left: var(--padding-left-40);
    padding-right: var(--padding-right-40);
    padding-top: var(--padding-top-40);
    padding-bottom: var(--padding-bottom-40);
    background: var(--color-five);
}

.testimonials-two .testi-block .quote-icon {
    position: absolute;
    left: 12px;
    top: 12px;
    width: 74px;
}

.testimonials-two .testi-block .rating {
    position: relative;
    font-size: var(--font-12);
    color: var(--main-color);
    letter-spacing: 1px;
    line-height: 20px;
    margin-bottom: var(--margin-bottom-20);
}

.testimonials-two .testi-block .text {
    position: relative;
    font-size: var(--font-20);
    line-height: 1.5em;
    font-family: var(--font-family-Forum);
    margin-bottom: var(--margin-bottom-35);
}

.testimonials-two .testi-block .auth-info {
    position: relative;
    min-height: 84px;
    line-height: 20px;
    padding-top: var(--padding-top-20);
    padding-left: var(--padding-left-105);
}

.testimonials-two .testi-block .auth-info .auth-title {
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    letter-spacing: 0.20em;
}

.testimonials-two .testi-block .auth-info .location {
    position: relative;
    color: var(--color-one);
    font-size: var(--font-14);
}

.testimonials-two .testi-block .auth-info .image {
    position: absolute;
    left: 0;
    top: 0;
    width: 84px;
    height: 84px;
    border-radius: 50%;
    overflow: hidden;
}

.testimonials-two .testi-block .auth-info .image img {
    display: block;
    width: 84px;
    height: 84px;
    border-radius: 50%;
}

.testimonials-two .owl-theme .owl-dots {
    display: none;
}

.testimonials-two .owl-theme .owl-nav {
    position: absolute;
    left: -100px;
    right: -100px;
    height: 0;
    top: 50%;
    margin-top: -22px;
}

.testimonials-two .owl-theme .owl-nav .owl-next,
.testimonials-two .owl-theme .owl-nav .owl-prev {
    position: absolute;
    top: 50%;
    display: inline-block;
    vertical-align: top;
    width: 44px;
    height: 44px;
    line-height: 44px;
    font-size: var(--font-24);
    text-align: center;
    background: transparent;
    color: var(--main-color);
    border-radius: 0%;
    -webkit-transition: all 400ms ease;
    -moz-transition: all 400ms ease;
    -ms-transition: all 400ms ease;
    -o-transition: all 400ms ease;
    transition: all 400ms ease;
}

.testimonials-two .owl-theme .owl-nav .owl-next span,
.testimonials-two .owl-theme .owl-nav .owl-prev span {
    position: relative;
    z-index: 1;
}

.testimonials-two .owl-theme .owl-nav .owl-next:before,
.testimonials-two .owl-theme .owl-nav .owl-prev:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid var(--main-color);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all 400ms ease;
    -moz-transition: all 400ms ease;
    -ms-transition: all 400ms ease;
    -o-transition: all 400ms ease;
    transition: all 400ms ease;
}

.testimonials-two .owl-theme .owl-nav .owl-next {
    right: 15px;
}

.testimonials-two .owl-theme .owl-nav .owl-prev {
    left: 15px;
}

.testimonials-two .owl-theme .owl-nav .owl-next:hover,
.testimonials-two .owl-theme .owl-nav .owl-prev:hover {
    color: var(--black-color);
}

.testimonials-two .owl-theme .owl-nav .owl-next:hover:before,
.testimonials-two .owl-theme .owl-nav .owl-prev:hover:before {
    background: var(--main-color);
}

/*** 

====================================================================
  Why Us Two Section
====================================================================

***/

.why-us-two {
    position: relative;
    background-color: var(--color-four);
    padding-top: var(--padding-top-100);
    padding-bottom: var(--padding-bottom-70);
}

.why-us-two .left-bg {
    position: absolute;
    left: 0;
    bottom: 80px;
}

.why-us-two .right-bg {
    position: absolute;
    right: 0;
    top: -100px;
}

.why-us-two .title-box {
    margin-bottom: var(--margin-bottom-40);
}

.why-block-two {
    position: relative;
    margin-bottom: var(--margin-bottom-30);
}

.why-block-two.m-top {
    padding-top: var(--padding-top-40);
}

.why-block-two .inner-box {
    position: relative;
    display: block;
    text-align: center;
    background: var(--color-two);
}

.why-block-two .image-box {
    position: relative;
    overflow: hidden;
    background-color: var(--main-color);
}

.why-block-two .inner-box:hover .image-box img {
    opacity: 0.70;
    transform: scale(1.05, 1.05);
}

.why-block-two .image-box img {
    position: relative;
    display: block;
    width: 100%;
    -moz-transition: all 500ms ease;
    -webkit-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
}

.why-block-two .image-box::after {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    display: block;
    content: '';
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, .2);
    border-radius: 0%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
}

.why-block-two .inner-box:hover .image-box::after {
    -webkit-animation: circle .95s;
    animation: circle .95s;
}

.why-block-two .over-box {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding-left: var(--padding-left-30);
    padding-right: var(--padding-right-30);
    padding-bottom: var(--padding-bottom-40);
    z-index: 3;
}

.why-block-two .image-box:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 180px;
    background: rgba(0, 0, 0, 0.70);
    background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.05));
    background: -ms-linear-gradient(bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.05));
    z-index: 1;
}

.why-block-two .inner-box .icon-box {
    position: relative;
    display: block;
    line-height: 80px;
    margin-bottom: var(--margin-bottom-15);
}

.why-block-two .inner-box .icon-box img {
    position: relative;
    max-height: 80px;
}

.why-block-two h4 {
    position: relative;
    text-transform: capitalize;
}

.why-block-two h4 a {
    color: var(--white-color);
}

.why-block-two h4 a:hover {
    color: var(--main-color);
}

.why-block-two .text {
    position: relative;
    font-size: var(--font-14);
}

/*** 

====================================================================
  Image Gallery Section
====================================================================

***/

.image-gallery {
    position: relative;
    background-color: var(--color-four);
    padding-bottom: var(--padding-bottom-100);
    overflow: hidden;
}

.image-gallery .carousel-box {
    position: relative;
}

.image-gallery .auto-container {
    max-width: 860px;
}

.image-gallery .image-gallery-slider {
    position: static;
}

.image-gallery .image-gallery-slider .owl-stage-outer {
    overflow: visible;
}

.image-gallery .gallery-block {
    position: relative;
}

.image-gallery .gallery-block .image {
    position: relative;
}

.image-gallery .gallery-block .image img {
    position: relative;
    display: block;
    width: 100%;
}

.image-gallery .owl-theme .owl-dots {
    display: none;
}

.image-gallery .owl-theme .owl-nav {
    position: absolute;
    left: 20px;
    right: 20px;
    height: 0;
    top: 50%;
    margin-top: -22px;
}

.image-gallery .owl-theme .owl-nav .owl-next,
.image-gallery .owl-theme .owl-nav .owl-prev {
    position: absolute;
    top: 50%;
    display: inline-block;
    vertical-align: top;
    width: 44px;
    height: 44px;
    line-height: 44px;
    font-size: var(--font-24);
    text-align: center;
    background: transparent;
    color: var(--main-color);
    border-radius: 0%;
    -webkit-transition: all 400ms ease;
    -moz-transition: all 400ms ease;
    -ms-transition: all 400ms ease;
    -o-transition: all 400ms ease;
    transition: all 400ms ease;
}

.image-gallery .owl-theme .owl-nav .owl-next span,
.image-gallery .owl-theme .owl-nav .owl-prev span {
    position: relative;
    z-index: 1;
}

.image-gallery .owl-theme .owl-nav .owl-next:before,
.image-gallery .owl-theme .owl-nav .owl-prev:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid var(--main-color);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all 400ms ease;
    -moz-transition: all 400ms ease;
    -ms-transition: all 400ms ease;
    -o-transition: all 400ms ease;
    transition: all 400ms ease;
}

.image-gallery .owl-theme .owl-nav .owl-next {
    right: 15px;
}

.image-gallery .owl-theme .owl-nav .owl-prev {
    left: 15px;
}

.image-gallery .owl-theme .owl-nav .owl-next:hover,
.image-gallery .owl-theme .owl-nav .owl-prev:hover {
    color: var(--black-color);
}

.image-gallery .owl-theme .owl-nav .owl-next:hover:before,
.image-gallery .owl-theme .owl-nav .owl-prev:hover:before {
    background: var(--main-color);
}

/*** 

====================================================================
  Menu Section
====================================================================

***/

.menu-one {
    position: relative;
    padding-top: var(--padding-top-90);
    padding-bottom: var(--padding-bottom-60);
    overflow: hidden;
    background-color: var(--color-four);
}

.menu-one.alternate {
    padding-top: 0;
}

.menu-one .left-bg {
    position: absolute;
    left: 0;
    top: 0;
}

.menu-one .right-bg {
    position: absolute;
    right: 0;
    top: 0;
}

.menu-one .right-bg-2 {
    position: absolute;
    right: 0;
    bottom: 80px;
}

.menu-one .title-box {
    margin-bottom: var(--margin-bottom-45);
}

.menu-one .image-col {
    position: relative;
    margin-bottom: 40px;
}

.menu-one.alternate .image-col {
    order: 12;
}

.menu-one .image-col .inner {
    position: relative;
    display: block;
}

.menu-one .image-col .image {
    position: relative;
    display: block;
    padding-left: var(--padding-left-30);
}

.menu-one.alternate .image-col .image {
    padding-left: var(--padding-left-0);
    padding-right: var(--padding-right-30);
}

.menu-one .image-col .image:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 15px;
    height: 100%;
    /*background: url(https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/background/pattern-9.svg) center top repeat;*/
}

.menu-one.alternate .image-col .image:before {
    left: auto;
    right: 0;
}

.menu-one .image-col .image img {
    position: relative;
    display: block;
    width: 100%;
}

.menu-one .menu-col {
    position: relative;
}

.menu-one.alternate .menu-col {
    order: 0;
}

.menu-one .menu-col .inner {
    position: relative;
    display: block;
    padding-left: var(--padding-left-20);
    min-height: 100%;
}

.menu-one.alternate .menu-col .inner {
    padding-left: var(--padding-left-0);
    padding-right: var(--padding-right-20);
}

.menu-one .menu-col .dish-block {
    position: relative;
    margin-bottom: var(--margin-bottom-35);
}

.menu-one .menu-col .dish-block .inner-box {
    position: relative;
}

.menu-one .menu-col .dish-block .title {
    position: relative;
    line-height: 24px;
    margin-bottom: var(--margin-bottom-10);
    font-family: var(--font-family-Forum);
}

.menu-one .menu-col .dish-block .title:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -3px;
    width: 100%;
    height: 6px;
    border-top: 1px solid var(--white-color-opacity-four);
    border-bottom: 1px solid var(--white-color-opacity-four);
}

.menu-one .menu-col .dish-block .title .ttl {
    position: relative;
    float: left;
    padding-right: var(--padding-right-15);
    background-color: var(--color-four);
    text-transform: capitalize;
}

.menu-one .menu-col .dish-block .title .ttl a {
    color: var(--white-color);
}

.menu-one .menu-col .dish-block .title .ttl a:hover {
    color: var(--main-color);
}

.menu-one .menu-col .dish-block .title .ttl .s-info {
    position: relative;
    display: inline-block;
    line-height: 20px;
    padding: 0 5px;
    font-size: var(--font-14);
    color: var(--color-four);
    background: var(--main-color);
    margin-left: 10px;
}

.menu-one .menu-col .dish-block .title .price {
    position: relative;
    float: right;
    font-size: var(--font-22);
    color: var(--main-color);
    padding-left: var(--padding-left-15);
    background-color: var(--color-four);
}

.menu-one .menu-col .dish-block .desc {
    position: relative;
    font-size: var(--font-14);
    color: var(--color-one);
    max-width: 350px;
}

.menu-one .menu-col .dish-block .desc a {
    color: var(--color-one);
}

/*** 

====================================================================
  Special Offer Section
====================================================================

***/

.special-offer-two {
    position: relative;
    background-color: var(--color-four);
    padding-bottom: var(--padding-bottom-65);
}

.special-offer-two .left-bg {
    position: absolute;
    left: 0;
    bottom: 25%;
}

.special-offer-two .right-bg {
    position: absolute;
    right: 0;
    top: 0;
}

.special-offer-two .title-box {
    margin-bottom: var(--margin-bottom-40);
}

.offer-block-three {
    position: relative;
    margin-bottom: var(--margin-bottom-35);
}

.offer-block-three .inner-box {
    position: relative;
    display: block;
    text-align: center;
}

.offer-block-three .inner-box .image {
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 20px;
    background-color: var(--main-color);
    margin-bottom: var(--margin-bottom-15);
}

.offer-block-three .inner-box .image img {
    position: relative;
    display: block;
    width: 100%;
    border-radius: 20px;
    -moz-transition: all 500ms ease;
    -webkit-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
}

.offer-block-three .inner-box:hover .image img {
    opacity: 0.70;
    transform: scale(1.05, 1.05);
}

.offer-block-three h4 {
    position: relative;
    text-transform: capitalize;
    margin-bottom: var(--margin-bottom-10);
}

.offer-block-three h4 a {
    color: var(--white-color);
}

.offer-block-three h4 a:hover {
    color: var(--main-color);
}

.offer-block-three .desc {
    position: relative;
    font-size: var(--font-14);
    color: var(--color-one);
    margin-bottom: var(--margin-bottom-15);
}

.offer-block-three .price {
    position: relative;
    font-family: var(--font-family-Forum);
    font-size: var(--font-20);
    color: var(--main-color);
}

/*** 

====================================================================
  Special Dish Section
====================================================================

***/

.chef-selection {
    position: relative;
    background-color: var(--color-four);
}

.chef-selection .outer-container {
    position: relative;
    background: var(--color-five);
    border-radius: 20px;
    overflow: hidden;
}

.chef-selection .row {
    margin: 0 0;
}

.chef-selection .image-col {
    position: relative;
    padding: 0 0;
}

.chef-selection .image-col .inner {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
}

.chef-selection .image-col .image-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.chef-selection .image-col .image-layer:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.chef-selection .image-col .image {
    position: relative;
    display: none;
}

.chef-selection .image-col .image img {
    position: relative;
    display: block;
    width: 100%;
}

.chef-selection .content-col {
    position: relative;
    padding: 0 0;
}

.chef-selection .content-col .inner {
    position: relative;
    display: block;
    max-width: 600px;
    padding-top: var(--padding-top-140);
    padding-bottom: var(--padding-bottom-140);
    padding-left: var(--padding-left-130);
    padding-right: var(--padding-right-20);
}

.chef-selection .content-col .badge-icon {
    position: absolute;
    left: -60px;
    top: 0;
}

.chef-selection .title-box {
    margin-bottom: var(--margin-bottom-40);
}

.chef-selection .title-box h3 {
    font-size: var(--font-40);
}

.chef-selection .price {
    position: relative;
    line-height: 30px;
}

.chef-selection .price .old {
    position: relative;
    font-size: var(--font-18);
    color: var(--color-three);
    padding-right: var(--padding-right-20);
}

.chef-selection .price .new {
    position: relative;
    font-size: var(--font-24);
    color: var(--main-color);
}

.chef-selection .content-col .link-box {
    padding-top: var(--padding-top-40);
}

/*** 

====================================================================
  Menu Section
====================================================================

***/

.menu-two {
    position: relative;
    background-color: var(--color-four);
    padding-top: var(--padding-top-100);
    padding-bottom: var(--padding-bottom-45);
}

.menu-two .left-bg {
    position: absolute;
    left: 0;
    top: 120px;
}

.menu-two .right-bg {
    position: absolute;
    right: 0;
    top: 0px;
}

.menu-two .title-box {
    margin-bottom: var(--margin-bottom-40);
}

.menu-two .menu-col .inner {
    position: relative;
    display: block;
    padding-right: var(--padding-right-80);
    min-height: 100%;
}

.menu-two .menu-col .inner:after {
    content: '';
    position: absolute;
    right: -15px;
    top: 0;
    bottom: 50px;
    border-right: 1px solid var(--white-color-opacity-four);
}

.menu-two .menu-col:nth-child(2) .inner {
    padding-right: 0;
    padding-left: var(--padding-left-80);
    border-right: none;
}

.menu-two .menu-col:nth-child(2) .inner:after {
    display: none;
}

.menu-two .dish-block {
    position: relative;
    margin-bottom: var(--margin-bottom-55);
}

.menu-two .dish-block .inner-box {
    position: relative;
    padding-left: var(--padding-left-120);
    min-height: 100px;
    padding-top: var(--padding-top-10);
}

.menu-two .dish-block .dish-image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
    border-radius: 22px;
    overflow: hidden;
    background-color: var(--main-color);
}

.dish-block .inner-box:hover img {
    opacity: 0.70;
    transform: scale(1.05, 1.05);
}

.menu-two .dish-block .dish-image img {
    position: relative;
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    -moz-transition: all 500ms ease;
    -webkit-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
}

.menu-two .dish-block .title {
    position: relative;
    line-height: 24px;
    margin-bottom: var(--margin-bottom-10);
    /*font-family:var(--font-family-Forum);*/
}

.menu-two .dish-block .title:before {
    /*content: '';*/
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -3px;
    width: 100%;
    height: 6px;
    border-top: 1px solid var(--white-color-opacity-four);
    border-bottom: 1px solid var(--white-color-opacity-four);
}

.menu-two .dish-block .title .ttl {
    position: relative;
    float: left;
    padding-right: var(--padding-right-15);
    background-color: var(--color-four);
    text-transform: capitalize;
}

.menu-two .dish-block .title .ttl a {
    color: var(--white-color);
}

.menu-two .dish-block .title .ttl .s-info {
    position: relative;
    display: inline-block;
    line-height: 20px;
    padding: 0 5px;
    font-size: var(--font-14);
    color: var(--color-four);
    background: var(--main-color);
    margin-left: 10px;
}

.menu-two .dish-block .title .price {
    position: relative;
    float: right;
    font-size: var(--font-22);
    color: var(--main-color);
    padding-left: var(--padding-left-15);
    background-color: var(--color-four);
}

.menu-two .dish-block .desc {
    position: relative;
    font-size: var(--font-14);
    color: var(--color-one);
}

.menu-two .dish-block .desc a {
    color: var(--color-one);
}

/*** 

====================================================================
  Featured Section
====================================================================

***/

.featured-section {
    position: relative;
    background-color: var(--color-four);
    padding-bottom: var(--padding-bottom-60);
}

.featured-section .row {
    margin: 0 -10px;
}

.featured-section .text-col {
    position: relative;
    padding: 0 10px;
    text-align: center;
    margin-bottom: 40px;
}

.featured-section.alternate .text-col {
    order: 12;
}

.featured-section .text-col .inner {
    position: relative;
    min-height: 100%;
    width: calc(100% - 15px);
    display: table;
    vertical-align: middle;
    left: 15px;
    padding-left: var(--padding-left-25);
    padding-right: var(--padding-right-25);
    background: url(https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/background/pattern-5.png) left top repeat;
    background-color: var(--color-five);
    padding-top: var(--padding-top-30);
    padding-bottom: var(--padding-bottom-50);
}

.featured-section.alternate .text-col .inner {
    left: 0;
    right: 15px;
}

.featured-section .text-col .inner:before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 15px;
    height: 100%;
    /*background: url(https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/background/pattern-9.svg) center top repeat;*/
}

.featured-section.alternate .text-col .inner:before {
    left: auto;
    right: -15px;
}

.featured-section .text-col .content {
    position: relative;
    display: table-cell;
    width: 100%;
    vertical-align: middle;
}

.featured-section .text-col h2 {
    font-size: var(--font-50);
    padding-bottom: var(--padding-bottom-5);
}

.featured-section .text-col .text {
    position: relative;
    color: var(--color-one);
    font-size: var(--font-14);
}

.featured-section .text-col .content-inner {
    max-width: 350px;
    margin: 0 auto;
}

.featured-section .text-col .separator {
    position: relative;
    margin-top: var(--margin-top-20);
    margin-bottom: var(--margin-bottom-20);
}

.featured-section .text-col .separator span {
    position: relative;
    display: block;
    height: 8px;
    width: 8px;
    border: 1px solid var(--main-color);
    margin: 0 auto;
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.featured-section .text-col .booking-info {
    position: relative;
    text-align: center;
    margin-bottom: var(--margin-bottom-25);
}

.featured-section .text-col .booking-info .bk-title {
    position: relative;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 5px;
}

.featured-section .text-col .booking-info .bk-no {
    position: relative;
    font-size: var(--font-30);
    color: var(--main-color);
    line-height: 1em;
}

.featured-section .text-col .booking-info .bk-no a {
    color: var(--main-color);
}

.featured-section .text-col .booking-info .bk-no a:hover {
    text-decoration: underline;
}

.featured-section .image-col {
    position: relative;
    padding: 0 10px;
    margin-bottom: 20px;
}

.featured-section.alternate .image-col {
    order: 0;
}

.featured-section .image-col .inner {
    position: relative;
    display: block;
}

.featured-section .image-col .img-col {
    position: relative;
    padding: 0 10px;
    margin-bottom: 20px;
}

.featured-section .image-col img {
    display: block;
    width: 100%;
}

/*** 

====================================================================
  online reservation Section
====================================================================

***/

.online-reservation {
    position: relative;
    background: var(--black-color);
    padding-top: var(--padding-top-100);
    padding-bottom: var(--padding-bottom-100);
}

/* for inner page  */
.online-reservation.inner-page {
    position: relative;
    background-color: var(--color-four);
}

.online-reservation.inner-page .left-bg {
    position: absolute;
    left: 0;
    top: 0;
}

.online-reservation.inner-page .right-bg {
    position: absolute;
    right: 0;
    bottom: 100px;
}

/* */


.online-reservation .image-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.70;
}

.online-reservation .title-box {
    margin-bottom: var(--margin-bottom-40);
}

.online-reservation .title-box .text {
    max-width: none;
    padding-top: 0;
}

.online-reservation .title-box .text.desc {
    color: var(--color-one);
    margin-bottom: var(--margin-bottom-15);
    padding: 0 200px;
}

.online-reservation .title-box .text a {
    color: var(--main-color);
}

.online-reservation .reservation-form {
    position: relative;
}

.online-reservation .reservation-form form {
    position: relative;
    padding-right: var(--padding-right-250);
}

.online-reservation .reservation-form form .row {
    margin: 0 -10px;
}

.online-reservation .reservation-form form .row .form-group {
    padding: 0 10px;
    margin-bottom: 20px;
}

.online-reservation .reservation-form form button {
    position: absolute;
    right: 0;
    top: 0;
    width: 230px;
}

.online-reservation .powered-by {
    position: relative;
    text-align: center;
    padding-top: var(--padding-top-5);
}


/*** 

====================================================================
  online reservation open table
====================================================================

***/

.map-location-section {
    position: relative;

}

.map-location-section .outer-box {
    position: relative;
    top: 100px;
    margin-bottom: 100px;
    /*background: var(--color-five);*/
    z-index: 1;
}

.map-location-section .outer-box>.row {
    margin: 0 0;
}

.map-location-section .reserv-col {
    position: relative;
    padding: 0 15px 0 0;
}

.map-location-section .reserv-col .inner {
    position: relative;
    padding-right: var(--padding-right-60);
    min-height: 100%;
    /*background-color:var(--color-five);*/
}

.map-location-section .info-col {
    position: relative;
    padding: 0 0;
    text-align: center;
    background: url(https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/background/pattern-2.png) left top repeat;
    background-color: var(--color-five);
}

.map-location-section .info-col .img-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
}

.map-location-section .info-col .inner {
    position: relative;
    padding-top: var(--padding-top-75);
    padding-bottom: var(--padding-bottom-55);
    padding-left: var(--padding-left-20);
    padding-right: var(--padding-right-20);
    margin-left: var(--margin-left-15);
    margin-right: var(--margin-right-15);
    min-height: 100%;
    border: 1px solid var(--main-color);
}

.map-location-section .info-col .inner:before {
    content: '';
    position: absolute;
    left: -14px;
    top: 12px;
    right: -14px;
    bottom: 12px;
    border: 1px solid var(--main-color);
}

.map-location-section .info-col .title {
    margin-bottom: var(--margin-bottom-40);
}

.map-location-section .info-col .title h2 {
    line-height: 1.0em;
}

.map-location-section .info-col .data {
    max-width: 280px;
    margin: 0 auto;
}


.map-location-section .info-col .instruction {
    position: relative;
    line-height: 1.6em;
    color: var(--color-one);
    z-index: 1;
}

.map-location-section .info-col .booking-info {
    position: relative;
    text-align: center;
    margin-bottom: var(--margin-bottom-20);
}

.map-location-section .info-col .booking-info .bk-title {
    position: relative;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 5px;
}

.map-location-section .info-col .booking-info .bk-no {
    position: relative;
    font-size: var(--font-30);
    color: var(--main-color);
    line-height: 1em;
}

.map-location-section .info-col .booking-info .bk-no a {
    color: var(--main-color);
}

.map-location-section .info-col .booking-info .bk-no a:before {
    position: absolute;
    content: '';
    left: 5px;
    right: 5px;
    bottom: 0px;
    height: 5px;
    opacity: 0;
    transform: scale(0.2, 1);
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    border-top: 1px solid var(--main-color);
    border-bottom: 1px solid var(--main-color);
}

.map-location-section .info-col .booking-info .bk-no a:hover::before {
    opacity: 1;
    transform: scale(1, 1);
}

.map-location-section .info-col .separator {
    position: relative;
    margin-bottom: var(--margin-bottom-20);
}

.map-location-section .info-col .separator span {
    position: relative;
    display: block;
    height: 8px;
    width: 8px;
    border: 1px solid var(--main-color);
    margin: 0 auto;
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.map-location-section .info-col .info {
    position: relative;
}

.map-location-section .info-col .info li {
    position: relative;
    line-height: 1.5em;
    color: var(--color-one);
    margin-bottom: var(--margin-bottom-25);
}

.map-location-section .info-col .info li strong {
    display: inline-block;
    color: var(--text-color);
    margin-bottom: var(--margin-bottom-5);
}

.map-location-section .info-col .info li:last-child {
    margin-bottom: 0;
}



/*** 

====================================================================
  online reservation contact form
====================================================================

***/

.reservation-contactform {
    position: relative;
    background: var(--black-color);
    padding-top: var(--padding-top-100);
    padding-bottom: var(--padding-bottom-100);
}

.reservation-contactform.inner-page {
    position: relative;
    background-color: var(--color-four);
}

.reservation-contactform.inner-page .left-bg {
    position: absolute;
    left: 0;
    top: 0;
}

.reservation-contactform.inner-page .right-bg {
    position: absolute;
    right: 0;
    bottom: 100px;
}


.reservation-contactform .image-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.70;
}

.reservation-contactform .title-box {
    margin-bottom: var(--margin-bottom-40);
}

.reservation-contactform .title-box .text {
    max-width: none;
    padding-top: 0;
}

.reservation-contactform .title-box .text.desc {
    color: var(--color-one);
    margin-bottom: var(--margin-bottom-15);
    padding: 0 200px;
}

.reservation-contactform .title-box .text a {
    color: var(--main-color);
}

.reservation-contactform .reservation-form {
    position: relative;
}

.reservation-contactform .reservation-form form {
    position: relative;
}

.reservation-contactform .reservation-form form .row {
    margin: 0 -10px;
}

.reservation-contactform .reservation-form form .row .form-group {
    padding: 0 10px;
    margin-bottom: 20px;
}

.reservation-contactform .reservation-form form button {
    /*position: absolute;
  right: 0;
  top: 0;*/
    width: 230px;
    margin: 0 auto;
    display: block;
}

.reservation-contactform .powered-by {
    position: relative;
    text-align: center;
    padding-top: var(--padding-top-5);
}


/*** 

====================================================================
  location section
====================================================================

***/

.location-center {
    position: relative;
    padding-top: var(--padding-top-100);
}

.location-center .left-bg {
    position: absolute;
    left: 0;
    bottom: 80px;
}

.location-center .right-bg {
    position: absolute;
    right: 0;
    top: -100px;
}

.location-center .title-box {
    margin-bottom: var(--margin-bottom-40);
}

.why-block {
    position: relative;
    margin-bottom: var(--margin-bottom-30);
}

.location-center .row {
    margin: 0 -20px;
}

.location-center .row .why-block {
    padding: 0 20px;
    margin-bottom: 40px;
}

.location-block .inner-box {
    position: relative;
    display: block;
    padding-top: var(--padding-top-30);
    padding-left: var(--padding-left-20);
    padding-right: var(--padding-right-20);
    padding-bottom: var(--padding-top-40);
    text-align: center;
    min-height: 100%;
    /*background: var(--color-seven);*/
}

.location-center .why-block:nth-child(even) .inner-box {
    background: var(--color-eight);
}

.location-block .inner-box .icon-box {
    position: relative;
    display: block;
    line-height: 90px;
    -webkit-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    margin-bottom: var(--margin-bottom-20);
}

.location-block .inner-box:hover .icon-box {
    -webkit-transform: scale(-1) rotate(180deg);
    -moz-transform: scale(-1) rotate(180deg);
    -ms-transform: scale(-1) rotate(180deg);
    -o-transform: scale(-1) rotate(180deg);
    transform: scale(-1) rotate(180deg);
}

.location-block .inner-box .icon-box img {
    position: relative;
    max-height: 127px;
}

.location-block h4 {
    position: relative;
    text-transform: capitalize;
    margin-bottom: var(--margin-bottom-20);
}

.location-block h4 a {
    color: var(--white-color);
}

.location-block h4 a:hover {
    color: var(--main-color);
}

.location-block .text {
    position: relative;
    font-size: var(--font-14);
    color: var(--color-one);
}


.location-block .more-link {
    position: relative;
    margin-top: 30px;
}

.location-block .more-link a {
    display: inline-block;
    vertical-align: top;
    font-size: var(--font-12);
    color: var(--main-color);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.2em;
    line-height: 1.5em;
    padding-bottom: 4px;
}

.location-block .more-link a:before {
    position: absolute;
    content: '';
    left: 5px;
    right: 5px;
    bottom: -4px;
    height: 4px;
    opacity: 0;
    transform: scale(0.2, 1);
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    border-bottom: 1px solid var(--main-color);
    border-top: 1px solid var(--main-color);
}

.location-block .more-link a:hover::before {
    opacity: 1;
    transform: scale(1, 1);
}

.location-block .more-link a:hover {
    color: var(--white-color);
    border-color: var(--white-color);
}




/*** 

====================================================================
  Location with image Section
====================================================================

***/

.location-with-image {
    position: relative;
    padding-top: var(--padding-top-100);
}

.location-with-image .title-box {
    margin-bottom: var(--margin-bottom-40);
}

.location-with-image .row {
    margin: 0 -25px;
}

.loc-block {
    position: relative;
    margin-bottom: var(--margin-bottom-30);
}

.location-with-image .row .location-block {
    padding: 0 25px;
    margin-bottom: 40px;
}

.loc-block .inner-box {
    position: relative;
    display: block;
}

.loc-block .image-box {
    position: relative;
    display: block;
}

.loc-block .image-box:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 250px;
    background: rgba(0, 0, 0, 0.70);
    background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.0));
    background: -ms-linear-gradient(bottom, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.0));
    z-index: 1;
}

.loc-block .image {
    position: relative;
    display: block;
    z-index: 0;
    overflow: hidden;
}

.loc-block .image img {
    position: relative;
    display: block;
    width: 100%;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
}

.loc-block .image:before {
    position: absolute;
    top: 0;
    left: -85%;
    z-index: 2;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
    background: -o-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .8) 100%);
    background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, .8)));
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .8) 100%);
    -webkit-transform: skewX(-25deg);
    -ms-transform: skewX(-25deg);
    transform: skewX(-25deg);
    z-index: 1;
}

.loc-block .inner-box:hover .image:before {
    -webkit-animation: shine 1s;
    animation: shine 1s;
}

.loc-block .inner-box:hover img {
    transform: scale(1.05, 1.05);
}

.loc-block .date {
    position: absolute;
    left: 25px;
    top: 30px;
    z-index: 1;
}

.loc-block .date span {
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    line-height: 14px;
    letter-spacing: 0.10em;
    padding: 3px 3px;
    background-color: var(--black-color);
}

.loc-block .over-content {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding-left: var(--padding-left-30);
    padding-right: var(--padding-right-25);
    padding-bottom: var(--padding-bottom-25);
    z-index: 3;
}

.loc-block .cat {
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    letter-spacing: 0.40em;
    margin-bottom: var(--margin-bottom-5);
}

.loc-block h4 {
    position: relative;
    margin-bottom: 0;
}

.loc-block h4 a {
    color: var(--text-color);
}

.loc-block .text {
    color: var(--color-one);
    margin-bottom: var(--margin-bottom-15);
    padding: 5px 0 0 0;
}

.loc-block .more-link {
    position: relative;
    margin-top: 20px;
}

.loc-block .more-link a {
    display: inline-block;
    vertical-align: top;
    font-size: var(--font-12);
    color: var(--main-color);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.2em;
    line-height: 1.5em;
    padding-bottom: 4px;
}

.loc-block .more-link a:before {
    position: absolute;
    content: '';
    left: 5px;
    right: 5px;
    bottom: -4px;
    height: 4px;
    opacity: 0;
    transform: scale(0.2, 1);
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    border-bottom: 1px solid var(--main-color);
    border-top: 1px solid var(--main-color);
}

.loc-block .more-link a:hover::before {
    opacity: 1;
    transform: scale(1, 1);
}

.loc-block .more-link a:hover {
    color: var(--white-color);
    border-color: var(--white-color);
}


/*** 

====================================================================
  Contact Page
====================================================================

***/

.contact-map {
    position: relative;
}

.contact-page {
    position: relative;
    background: var(--color-four);
}

.contact-page .loc-block {
    margin-bottom: 0;
}

.contact-page .location-center {
    position: relative;
    padding: 0;
}

.contact-page .cinfo-box {
    position: relative;
    background-color: var(--color-four);
}

.contact-page .cinfo-box:before {
    position: relative;
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    top: -40px;
    bottom: 0;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    background-color: var(--color-four);
}

.contact-page .left-bg {
    position: absolute;
    left: 0;
    top: 0;
}

.contact-page .right-bg {
    position: absolute;
    right: 0;
    bottom: 100px;
}

.contactinfo-block .inner-box {
    position: relative;
    display: block;
    padding-top: var(--padding-top-30);
    padding-left: var(--padding-left-20);
    padding-right: var(--padding-right-20);
    padding-bottom: var(--padding-top-40);
    text-align: center;
    min-height: 100%;
    /*background: var(--color-seven);*/
}


.inner-box.cp-seprator:before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    margin-top: -4px;
    height: 8px;
    width: 8px;
    border: 1px solid var(--main-color);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.inner-box.cp-seprator:after {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    margin-top: -4px;
    height: 8px;
    width: 8px;
    border: 1px solid var(--main-color);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.contactinfo-block h4 {
    position: relative;
    text-transform: capitalize;
    margin-bottom: var(--margin-bottom-20);
}

.contactinfo-block .text {
    position: relative;
    font-size: var(--font-16);
    color: var(--color-one);
}

.contactinfo-block .more-link {
    position: relative;
    margin-top: 10px;
}

.contactinfo-block .more-link a {
    display: inline-block;
    vertical-align: top;
    font-size: var(--font-16);
    color: var(--main-color);
    font-weight: 500;
    line-height: 1.5em;
    padding-bottom: 4px;
}

.contactinfo-block .more-link a:before {
    position: absolute;
    content: '';
    left: 5px;
    right: 5px;
    bottom: -4px;
    height: 4px;
    opacity: 0;
    transform: scale(0.2, 1);
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    border-bottom: 1px solid var(--main-color);
    border-top: 1px solid var(--main-color);
}

.contactinfo-block .more-link a:hover::before {
    opacity: 1;
    transform: scale(1, 1);
}

.contactinfo-block .more-link a:hover {
    color: var(--white-color);
    border-color: var(--white-color);
}


.c-page-form-box {
    position: relative;
    background-color: var(--color-five);
    padding: 60px;
    margin-top: var(--margin-top-40);
    margin-bottom: var(--margin-bottom-100);
}

.c-page-form-box .form-group {
    width: 100%;
    margin-bottom: 20px;
}

.form-group {
    width: 100%;
    text-align: center;
}

.c-page-form-box .title-box.centered {
    margin-bottom: 30px;
}




/*** 

====================================================================
  Chef Page
====================================================================

***/

.chef-section {
    position: relative;
    padding-top: var(--padding-top-100);
    padding-bottom: var(--padding-bottom-100);
    background: var(--color-five);
}


.chef-section .right-bg {
    position: absolute;
    right: 0;
    bottom: 0;
}


.chef-section .outer-container {
    position: relative;
}

.chef-section .row {
    margin: 0 0;
}

.chef-section .image-col {
    position: relative;
    padding: 0 0;
}

.chef-section.alternate .image-col {
    order: 12;
}

.chef-section .image-col .inner {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
}


.chef-section .image-col .image {
    position: relative;
    padding-bottom: var(--padding-bottom-20);
}

.chef-section .image-col .image img {
    position: relative;
    display: block;
}

.chef-section .image-col .image:before {
    content: '';
    position: absolute;
    left: -20px;
    /*margin-left: -70px;*/
    width: 140px;
    top: 250px;
    bottom: 0;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    background: url(https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Different-Design-With-Center-Header/images/background/pattern-8.svg) center repeat;
}


.chef-section .content-col {
    position: relative;
    padding: 0 0;
    text-align: left;
}

.chef-section.alternate .content-col {
    order: 0;
}

.chef-section .content-col .inner {
    position: relative;
    display: block;
    padding-top: var(--padding-top-150);
    padding-left: var(--padding-left-20);
    padding-right: var(--padding-right-20);
}

.chef-section .content-col .content-box {
    position: relative;
    display: block;
    width: 100%;
}

.chef-section.alternate .content-col .content-box {
    float: right;
}

.chef-section .content-col .title-box {
    margin-bottom: var(--margin-bottom-40);
}

.chef-section .content-col .title-box .text {
    padding-right: var(--padding-right-100);
}

.chef-section .content-col .signature {
    position: relative;
}

.chef-section .content-col .author {
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    font-size: var(--font-12);
    letter-spacing: 0.20em;
    margin-top: var(--margin-top-5);
}

.chef-section .content-col .link-box {
    padding-top: var(--padding-top-30);
}

.chef-section.alternate .content-col .link-box {
    padding-top: var(--padding-top-0);
}



.intro-section.quote {
    position: relative;
    padding-top: var(--padding-top-200);
    padding-bottom: var(--padding-bottom-200);
    background: var(--black-color);
}

.intro-section.quote .image-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.80;
}


/*** 

====================================================================
  section
====================================================================

***/


.hamburger {
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 24px;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
}

.hamburger span {
    /* align-self: flex-end; */
    height: 2px;
    width: 83.33333333%;
    background: #ffffff;
    transition: all 400ms ease-in-out;
}

.hamburger .meat {
    width: 100%;
    transition: all 200ms ease-in-out;
}

.hamburger .bottom-bun {
    width: 58.33333333%;
    transition: all 100ms ease-in-out;
}

.hamburger:hover span {
    width: 100%;
}

html:not(.body-menu-opened) .hamburger .top-bun {
    -webkit-animation: burger-hover 1s infinite ease-in-out alternate forwards 200ms;
    animation: burger-hover 1s infinite ease-in-out alternate forwards 200ms;
}

html:not(.body-menu-opened) .hamburger .meat {
    -webkit-animation: burger-hover 1s infinite ease-in-out alternate forwards 400ms;
    animation: burger-hover 1s infinite ease-in-out alternate forwards 400ms;
}

html:not(.body-menu-opened) .hamburger .bottom-bun {
    -webkit-animation: burger-hover 1s infinite ease-in-out alternate forwards 600ms;
    animation: burger-hover 1s infinite ease-in-out alternate forwards 600ms;
}

@-webkit-keyframes burger-hover {
    0% {
        width: 100%;
    }

    50% {
        width: 50%;
    }

    100% {
        width: 100%;
    }
}

@keyframes burger-hover {
    0% {
        width: 100%;
    }

    50% {
        width: 50%;
    }

    100% {
        width: 100%;
    }
}

/* Delici - Restaurants HTML Template */


@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Forum&display=swap');

/*
    font-family: 'DM Sans', sans-serif;
    font-family: 'Forum', cursive;
*/


/*** 

====================================================================
    Root Code Variables
====================================================================

 ***/

:root {

    /* #f25630 in decimal RGB */
    --main-color: rgb(228, 197, 144);

    /* #ffffff in decimal RGB */
    --white-color: rgb(255, 255, 255);

    /* #a7a7a7 in decimal RGB */
    --color-one: rgb(167, 167, 167);

    /* #0e0d0b in decimal RGB */
    --color-two: rgb(14, 13, 11);

    /* #595653 in decimal RGB */
    --color-three: rgb(89, 86, 83);

    /* #171819 in decimal RGB */
    --color-four: rgb(23, 24, 25);

    /* #0e0d0c in decimal RGB */
    --color-five: rgb(14, 13, 12);

    /* #1a1b1c in decimal RGB */
    --color-six: rgb(26, 27, 28);

    /* #151616 in decimal RGB */
    --color-seven: rgb(21, 22, 22);

    /* #121111 in decimal RGB */
    --color-eight: rgb(18, 17, 17);

    /* #ffffff in decimal RGBA */
    --white-color-opacity: rgba(255, 255, 255, 0.80);

    /* #ffffff in decimal RGBA Two */
    --white-color-opacity-two: rgba(255, 255, 255, 0.60);

    /* #ffffff in decimal RGBA Three */
    --white-color-opacity-three: rgba(255, 255, 255, 0.40);

    /* #ffffff in decimal RGBA Four */
    --white-color-opacity-four: rgba(255, 255, 255, 0.20);

    /* #ffffff in decimal RGBA Five */
    --white-color-opacity-five: rgba(255, 255, 255, 0.10);

    /* #000000 in decimal RGB */
    --black-color: rgb(0, 0, 0);

    /* #000000 in decimal RGBA one */
    --black-color-opacity: rgba(0, 0, 0, 0.80);

    /* #000000 in decimal RGBA two */
    --black-color-opacity-two: rgba(0, 0, 0, 0.60);

    /* #000000 in decimal RGBA Three */
    --black-color-opacity-three: rgba(0, 0, 0, 0.40);

    /* #000000 in decimal RGBA Four */
    --black-color-opacity-four: rgba(0, 0, 0, 0.20);

    /* #000000 in decimal RGBA Five */
    --black-color-opacity-five: rgba(0, 0, 0, 0.10);

    /* #ffffff in decimal RGB */
    --text-color: rgb(255, 255, 255);

    /* #010101 Heading Color in decimal RGB */
    --heading-color: rgb(255, 255, 255);

    /* #171819 Body Bg Color in decimal RGB */
    --body-bg-color: rgb(13, 24, 25);

    /* Fonts Variable */
    --font-family-DMsans: 'DM Sans', sans-serif;

    --font-family-Forum: 'Forum', cursive;

    /* Heading Fonts */

    --font-8: 8px;
    --font-10: 10px;
    --font-12: 12px;
    --font-13: 13px;
    --font-14: 14px;
    --font-15: 15px;
    --font-16: 16px;
    --font-18: 18px;
    --font-20: 20px;
    --font-21: 21px;
    --font-22: 22px;
    --font-24: 24px;
    --font-25: 25px;
    --font-26: 26px;
    --font-28: 28px;
    --font-30: 30px;
    --font-32: 32px;
    --font-34: 34px;
    --font-35: 35px;
    --font-36: 36px;
    --font-38: 38px;
    --font-40: 40px;
    --font-42: 42px;
    --font-44: 44px;
    --font-48: 48px;
    --font-50: 50px;
    --font-52: 52px;
    --font-54: 54px;
    --font-56: 56px;
    --font-58: 58px;
    --font-60: 60px;
    --font-62: 62px;
    --font-64: 64px;
    --font-66: 66px;
    --font-68: 68px;
    --font-70: 70px;
    --font-72: 72px;
    --font-74: 74px;
    --font-76: 76px;
    --font-78: 78px;
    --font-80: 80px;
    --font-90: 90px;
    --font-100: 100px;
    --font-110: 110px;
    --font-120: 120px;
    --font-140: 140px;
    --font-150: 150px;
    --font-200: 200px;

    --margin-zero: 0px;

    /* Margin Left Variables */
    --margin-left-5: 5px;
    --margin-left-10: 10px;
    --margin-left-15: 15px;
    --margin-left-20: 20px;
    --margin-left-25: 25px;
    --margin-left-30: 30px;
    --margin-left-35: 35px;
    --margin-left-40: 40px;
    --margin-left-45: 45px;
    --margin-left-50: 50px;
    --margin-left-55: 55px;
    --margin-left-60: 60px;
    --margin-left-65: 65px;
    --margin-left-70: 70px;
    --margin-left-75: 75px;
    --margin-left-80: 80px;
    --margin-left-85: 85px;
    --margin-left-90: 90px;
    --margin-left-95: 95px;
    --margin-left-100: 100px;
    --margin-left-120: 120px;
    --margin-left-130: 130px;
    --margin-left-140: 140px;
    --margin-left-150: 150px;
    --margin-left-180: 180px;
    --margin-left-200: 200px;
    --margin-left-250: 250px;
    --margin-left-300: 300px;

    /* Margin Top Variables */
    --margin-top-5: 5px;
    --margin-top-10: 10px;
    --margin-top-15: 15px;
    --margin-top-18: 18px;
    --margin-top-20: 20px;
    --margin-top-25: 25px;
    --margin-top-30: 30px;
    --margin-top-35: 35px;
    --margin-top-40: 40px;
    --margin-top-45: 45px;
    --margin-top-50: 50px;
    --margin-top-55: 55px;
    --margin-top-60: 60px;
    --margin-top-65: 65px;
    --margin-top-70: 70px;
    --margin-top-75: 75px;
    --margin-top-80: 80px;
    --margin-top-85: 85px;
    --margin-top-90: 90px;
    --margin-top-95: 95px;
    --margin-top-100: 100px;
    --margin-top-110: 110px;
    --margin-top-120: 120px;
    --margin-top-130: 130px;
    --margin-top-140: 140px;
    --margin-top-150: 150px;
    --margin-top-160: 160px;
    --margin-top-200: 200px;

    /* Margin Right Variables */
    --margin-right-5: 5px;
    --margin-right-10: 10px;
    --margin-right-15: 15px;
    --margin-right-20: 20px;
    --margin-right-25: 25px;
    --margin-right-30: 30px;
    --margin-right-35: 35px;
    --margin-right-40: 40px;
    --margin-right-45: 45px;
    --margin-right-50: 50px;
    --margin-right-55: 55px;
    --margin-right-60: 60px;
    --margin-right-65: 65px;
    --margin-right-70: 70px;
    --margin-right-75: 75px;
    --margin-right-80: 80px;
    --margin-right-85: 85px;
    --margin-right-90: 90px;
    --margin-right-95: 95px;
    --margin-right-100: 100px;
    --margin-right-130: 130px;
    --margin-right-140: 140px;

    /* Margin Bottom Variables */
    --margin-bottom-5: 5px;
    --margin-bottom-7: 7px;
    --margin-bottom-10: 10px;
    --margin-bottom-12: 12px;
    --margin-bottom-15: 15px;
    --margin-bottom-20: 20px;
    --margin-bottom-25: 25px;
    --margin-bottom-30: 30px;
    --margin-bottom-35: 35px;
    --margin-bottom-40: 40px;
    --margin-bottom-45: 45px;
    --margin-bottom-50: 50px;
    --margin-bottom-55: 55px;
    --margin-bottom-60: 60px;
    --margin-bottom-65: 65px;
    --margin-bottom-70: 70px;
    --margin-bottom-75: 75px;
    --margin-bottom-80: 80px;
    --margin-bottom-85: 85px;
    --margin-bottom-90: 90px;
    --margin-bottom-95: 95px;
    --margin-bottom-100: 100px;
    --margin-bottom-150: 150px;
    --margin-bottom-160: 160px;
    --margin-bottom-200: 200px;


    --padding-zero: 0px;

    /* Padding Left Variables */
    --padding-left-0: 0px;
    --padding-left-5: 5px;
    --padding-left-10: 10px;
    --padding-left-15: 15px;
    --padding-left-20: 20px;
    --padding-left-25: 25px;
    --padding-left-30: 30px;
    --padding-left-35: 35px;
    --padding-left-40: 40px;
    --padding-left-45: 45px;
    --padding-left-50: 50px;
    --padding-left-55: 55px;
    --padding-left-60: 60px;
    --padding-left-65: 65px;
    --padding-left-70: 70px;
    --padding-left-75: 75px;
    --padding-left-80: 80px;
    --padding-left-85: 85px;
    --padding-left-90: 90px;
    --padding-left-95: 95px;
    --padding-left-100: 100px;
    --padding-left-105: 105px;
    --padding-left-110: 110px;
    --padding-left-120: 120px;
    --padding-left-130: 130px;
    --padding-left-140: 140px;
    --padding-left-150: 150px;
    --padding-left-160: 160px;
    --padding-left-170: 170px;
    --padding-left-180: 180px;
    --padding-left-190: 190px;
    --padding-left-200: 200px;
    --padding-left-210: 210px;
    --padding-left-220: 220px;

    /* Padding Top Variables */
    --padding-top-0: 0px;
    --padding-top-5: 5px;
    --padding-top-10: 10px;
    --padding-top-12: 12px;
    --padding-top-15: 15px;
    --padding-top-20: 20px;
    --padding-top-25: 25px;
    --padding-top-30: 30px;
    --padding-top-35: 35px;
    --padding-top-38: 38px;
    --padding-top-40: 40px;
    --padding-top-45: 45px;
    --padding-top-50: 50px;
    --padding-top-55: 55px;
    --padding-top-60: 60px;
    --padding-top-65: 65px;
    --padding-top-70: 70px;
    --padding-top-75: 75px;
    --padding-top-80: 80px;
    --padding-top-85: 85px;
    --padding-top-90: 90px;
    --padding-top-95: 95px;
    --padding-top-100: 100px;
    --padding-top-110: 110px;
    --padding-top-120: 120px;
    --padding-top-130: 130px;
    --padding-top-140: 140px;
    --padding-top-150: 150px;
    --padding-top-160: 160px;
    --padding-top-170: 170px;
    --padding-top-180: 180px;
    --padding-top-200: 200px;
    --padding-top-210: 210px;
    --padding-top-220: 220px;
    --padding-top-225: 225px;
    --padding-top-230: 230px;
    --padding-top-240: 240px;
    --padding-top-250: 250px;
    --padding-top-300: 300px;

    /* Padding Right Variables */
    --padding-right-0: 0px;
    --padding-right-5: 5px;
    --padding-right-10: 10px;
    --padding-right-15: 15px;
    --padding-right-20: 20px;
    --padding-right-25: 25px;
    --padding-right-30: 30px;
    --padding-right-35: 35px;
    --padding-right-40: 40px;
    --padding-right-45: 45px;
    --padding-right-50: 50px;
    --padding-right-55: 55px;
    --padding-right-60: 60px;
    --padding-right-65: 65px;
    --padding-right-70: 70px;
    --padding-right-75: 75px;
    --padding-right-80: 80px;
    --padding-right-85: 85px;
    --padding-right-90: 90px;
    --padding-right-95: 95px;
    --padding-right-100: 100px;
    --padding-right-110: 110px;
    --padding-right-120: 120px;
    --padding-right-150: 150px;
    --padding-right-160: 160px;
    --padding-right-170: 170px;
    --padding-right-200: 200px;
    --padding-right-250: 250px;

    /* Padding Bottom Variables */
    --padding-bottom-0: 0px;
    --padding-bottom-5: 5px;
    --padding-bottom-10: 10px;
    --padding-bottom-15: 15px;
    --padding-bottom-20: 20px;
    --padding-bottom-25: 25px;
    --padding-bottom-30: 30px;
    --padding-bottom-35: 35px;
    --padding-bottom-38: 38px;
    --padding-bottom-40: 40px;
    --padding-bottom-45: 45px;
    --padding-bottom-50: 50px;
    --padding-bottom-55: 55px;
    --padding-bottom-60: 60px;
    --padding-bottom-65: 65px;
    --padding-bottom-70: 70px;
    --padding-bottom-75: 75px;
    --padding-bottom-80: 80px;
    --padding-bottom-85: 85px;
    --padding-bottom-90: 90px;
    --padding-bottom-95: 95px;
    --padding-bottom-100: 100px;
    --padding-bottom-110: 110px;
    --padding-bottom-120: 120px;
    --padding-bottom-130: 130px;
    --padding-bottom-140: 140px;
    --padding-bottom-150: 150px;
    --padding-bottom-160: 160px;
    --padding-bottom-170: 170px;
    --padding-bottom-180: 180px;
    --padding-bottom-200: 200px;
    --padding-bottom-210: 210px;
    --padding-bottom-220: 220px;
    --padding-bottom-225: 225px;
    --padding-bottom-230: 230px;
    --padding-bottom-240: 240px;
    --padding-bottom-250: 250px;
    --padding-bottom-300: 300px;
    --padding-bottom-340: 340px;

}

/*** 

====================================================================
    Reset
====================================================================

 ***/

* {
    margin: 0px;
    padding: 0px;
    border: none;
    outline: none;
    font-size: 100%;
    line-height: inherit;
}

/*** 

====================================================================
    Global Settings
====================================================================

 ***/

body {
    font-family: var(--font-family-DMsans);
    font-size: var(--font-16);
    color: var(--text-color);
    background: var(--body-bg-color);
    line-height: 1.85em;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
}

a {
    position: relative;
    text-decoration: none;
    cursor: pointer;
    color: var(--main-color);
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    transition: all 300ms ease;
}

section {
    background-color: var(--body-bg-color);
}

button,
a:hover,
a:focus,
a:visited {
    text-decoration: none;
    outline: none !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    position: relative;
    margin: 0px 0px;
    background: none;
    line-height: 1.20em;
    color: var(--heading-color);
    font-family: var(--font-family-Forum);
}

.theme_color {
    color: var(--main-color);
}

a:hover,
a:focus,
a:visited,
a:active,
button:active {
    text-decoration: none;
    outline: none;
}

h1 {
    font-size: var(--font-120);
}

h2 {
    font-size: var(--font-60);
}

h3 {
    font-size: var(--font-35);
}

h4 {
    font-size: var(--font-25);
}

h5 {
    font-size: var(--font-21);
}

h6 {
    font-size: var(--font-16);
}

input,
select,
button {
    font-family: var(--font-family-DMsans);
}

textarea {
    overflow: hidden;
    resize: none;
}

button {
    outline: none !important;
    cursor: pointer;
}

p {
    line-height: 1.6em;
}

.text {
    line-height: 1.6em;
}

::-webkit-input-placeholder {
    color: inherit;
}

::-moz-input-placeholder {
    color: inherit;
}

::-ms-input-placeholder {
    color: inherit;
}

.page-wrapper {
    position: relative;
    margin: 0 auto;
    width: 100%;
    min-width: 300px;
    overflow: hidden;
}

.auto-container {
    position: static;
    max-width: 1200px;
    padding: 0px 15px;
    margin: 0 auto;
}

ul,
li {
    list-style: none;
    padding: var(--padding-zero);
    margin: var(--margin-zero);
}

figure {
    margin-bottom: var(--margin-zero);
}

.theme-btn {
    display: inline-block;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.theme-btn i {
    position: relative;
    display: inline-block;
    font-size: 14px;
    margin-left: 3px;
}

.centered {
    text-align: center !important;
}

/* Btn Style One */

.btn-style-one {
    position: relative;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    text-transform: uppercase;
    color: var(--black-color);
    letter-spacing: 3px;
    font-weight: 700;
    padding: 11px 45px;
    font-size: var(--font-12);
    background: var(--main-color);
    border: 2px solid var(--main-color);
    border-radius: 0px;
    overflow: hidden;
    transition: all 0.3s ease 0s;
}

.btn-style-one:before {
    -webkit-transition-duration: 800ms;
    transition-duration: 800ms;
    position: absolute;
    width: 200%;
    height: 200%;
    content: "";
    top: -200%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    border-radius: 50%;
    z-index: 1;
    background: var(--color-two);
}

.btn-style-one:hover:before {
    top: 0%;
}

.btn-style-one .btn-wrap {
    position: relative;
    z-index: 1;
    float: left;
    overflow: hidden;
    display: inline-block;
}

.btn-style-one .btn-wrap .text-one {
    position: relative;
    display: block;
    color: var(--black-color);
    transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
}

.btn-style-one:hover .btn-wrap .text-one:first-child {
    -webkit-transform: translateY(-150%);
    -ms-transform: translateY(-150%);
    transform: translateY(-150%);
}

.btn-style-one .btn-wrap .text-two {
    position: absolute;
    top: 100%;
    display: block;
    color: var(--white-color);
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.btn-style-one:hover .btn-wrap .text-two {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

.btn-style-one:hover .btn-wrap .text-two {
    color: var(--white-color);
}

.btn-style-one:hover {}

.btn-style-one:hover:before {
    top: -40%;
}

/* Btn Style Two */

.btn-style-two {
    position: relative;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    text-transform: uppercase;
    color: var(--main-color);
    letter-spacing: 3px;
    font-weight: 700;
    padding: 11px 45px;
    font-size: var(--font-12);
    border: 2px solid var(--main-color);
    border-radius: 0px;
    overflow: hidden;
    transition: all 0.3s ease 0s;
}

.btn-style-two:before {
    -webkit-transition-duration: 800ms;
    transition-duration: 800ms;
    position: absolute;
    width: 200%;
    height: 200%;
    content: "";
    top: -200%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    border-radius: 50%;
    z-index: 1;
    background: var(--main-color);
}

.btn-style-two:hover:before {
    top: 0%;
}

.btn-style-two .btn-wrap {
    position: relative;
    z-index: 1;
    float: left;
    overflow: hidden;
    display: inline-block;
}

.btn-style-two .btn-wrap .text-one {
    position: relative;
    display: block;
    color: var(--main-color);
    transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
}

.btn-style-two:hover .btn-wrap .text-one:first-child {
    -webkit-transform: translateY(-150%);
    -ms-transform: translateY(-150%);
    transform: translateY(-150%);
}

.btn-style-two .btn-wrap .text-two {
    position: absolute;
    top: 100%;
    display: block;
    color: var(--color-two);
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.btn-style-two:hover .btn-wrap .text-two {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

.btn-style-two:hover .btn-wrap .text-two {
    color: var(--color-two);
}

.btn-style-two:hover {}

.btn-style-two:hover:before {
    top: -40%;
}

.pull-right {
    float: right;
}

.pull-left {
    float: left;
}

img {
    display: inline-block;
    max-width: 100%;
    height: auto;
}

.dropdown-toggle::after {
    display: none;
}

.fa {
    line-height: inherit;
}

/*** 

====================================================================
    Scroll To Top style
====================================================================

***/

.scroll-to-top {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    color: var(--color-two);
    font-size: var(--font-20);
    line-height: 50px;
    text-align: center;
    border: 1px solid var(--main-color);
    z-index: 100;
    cursor: pointer;
    background: var(--main-color);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    display: none;
    -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
}

.scroll-to-top:hover {
    background: var(--white-color);
    color: var(--main-color);
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.25);
}


/* Default Form Style */

.default-form {
    position: relative;
}

.default-form .row {
    margin: 0 -15px;
}

.default-form .form-group {
    position: relative;
    margin-bottom: 30px;
}

.default-form .field-inner {
    position: relative;
    display: block;
}

.default-form .field-inner .alt-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    margin-top: -15px;
    line-height: 30px;
    font-size: var(--font-12);
    color: var(--white-color);
    font-weight: 400;
    z-index: 1;
    pointer-events: none;
}

.default-form .field-inner .arrow-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -15px;
    line-height: 30px;
    font-size: var(--font-12);
    color: var(--white-color);
    font-weight: 400;
    z-index: 1;
    pointer-events: none;
}

.default-form .form-group .field-label {
    position: relative;
    display: block;
    color: var(--text-color);
    font-size: var(--font-14);
    line-height: 24px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: var(--margin-bottom-10);
}

.default-form .form-group .e-label {
    position: relative;
}

.default-form .form-group input[type="text"],
.default-form .form-group input[type="email"],
.default-form .form-group input[type="password"],
.default-form .form-group input[type="tel"],
.default-form .form-group input[type="url"],
.default-form .form-group input[type="file"],
.default-form .form-group input[type="number"],
.default-form .form-group textarea,
.default-form .form-group select {
    position: relative;
    display: block;
    height: 56px;
    width: 100%;
    font-size: var(--font-16);
    color: var(--text-color);
    line-height: 34px;
    font-weight: 400;
    padding: 10px 20px;
    background-color: var(--color-six);
    border: 1px solid var(--white-color-opacity-five);
    border-radius: 0px;
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    transition: all 300ms ease;
}

.default-form .form-group input[type="text"].l-icon,
.default-form .form-group input[type="email"].l-icon,
.default-form .form-group input[type="password"].l-icon,
.default-form .form-group input[type="tel"].l-icon,
.default-form .form-group input[type="url"].l-icon,
.default-form .form-group input[type="file"].l-icon,
.default-form .form-group input[type="number"].l-icon,
.default-form .form-group textarea.l-icon,
.default-form .form-group select.l-icon {
    padding-left: 40px;
}

.default-form .form-group textarea {
    height: 130px;
    resize: none;
}

.contact-form .form-group input[type="submit"],
.contact-form .form-group button {
    display: inline-block;
}

.default-form .form-group input[type="text"]:focus,
.default-form .form-group input[type="email"]:focus,
.default-form .form-group input[type="password"]:focus,
.default-form .form-group input[type="tel"]:focus,
.default-form .form-group input[type="url"]:focus,
.default-form .form-group input[type="file"]:focus,
.default-form .form-group input[type="number"]:focus,
.default-form .form-group textarea:focus,
.default-form .form-group select:focus {
    border-color: var(--main-color);
}

.default-form .form-group select {
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-image: ;
    background-position: right center;
    background-repeat: no-repeat;
    cursor: pointer;
}

.default-form .form-group select option {
    padding-left: 20px;
    text-indent: 20px;
    cursor: pointer;
}

.default-form .form-group .datepicker {
    cursor: pointer;
}

.default-form ::-webkit-input-placeholder {
    color: var(--text-color);
}

.default-form ::-moz-input-placeholder {
    color: var(--text-color);
}

.default-form ::-ms-input-placeholder {
    color: var(--text-color);
}

.default-form label.error {
    color: var(--main-color);
    ;
    font-size: var(--font-14);
    text-transform: capitalize;
    text-align: left;
    display: block;
    font-weight: 400;
    padding-top: var(--padding-top-10);
    line-height: 24px;
    margin-bottom: var(--margin-zero);
}

@media only screen and (max-width: 7000px) {
    .page-wrapper {
        overflow: hidden;
    }
}

@media only screen and (max-width: 1599px) {
    .main-header .header-upper .links-box {
        /*margin-left: 80px;*/
    }

    .banner-section .slide-item h1,
    h1,
    .inner-banner .inner h1 {
        font-size: 80px;
    }
}

@media only screen and (max-width: 1499px) {

    .main-header .header-upper .links-box,
    .main-menu .navigation>li,
    .main-header .header-upper .links-box .link {
        /*margin-left: 30px;*/
    }

    h2,
    .featured-section .text-col h2 {
        font-size: 50px;
    }

    .testimonials-section .testi-top .quote-text {
        font-size: 44px;
    }

    .inner-banner {
        padding-top: 250px;
        padding-bottom: 100px;
    }

    body .left-bg,
    body .right-bg,
    body .bottom-image,
    body .right-bg-2 {
        display: none;
    }

    .menu-section .left-bg,
    .menu-section .right-bg {
        display: block;
    }
}

@media only screen and (max-width: 1339px) {
    .main-header .header-upper .links-box .link .theme-btn .btn-title {
        padding-left: 30px;
        padding-right: 30px;
    }

    .chef-section .image-col {
        padding: 0 30px;
    }
}

@media only screen and (max-width: 1199px) {
    .header-top .top-info li {
        margin-right: 30px;
    }

    .header-top .top-info li:after {
        display: none;
    }

    .main-header .nav-outer,
    .main-header .info-toggler {
        display: none;
    }

    .main-header .nav-toggler {
        display: block;
    }

    .banner-section .slide-item h1,
    h1,
    .inner-banner .inner h1 {
        font-size: 60px;
    }

    .main-header .main-box .logo-box {
        margin-left: 0px;
    }

    h2,
    .intro-section .content-box h3,
    .featured-section .text-col h2 {
        font-size: 44px;
    }

    h3 {
        font-size: 30px;
    }

    h4 {
        font-size: 22px;
    }

    .testimonials-section .testi-top .quote-text {
        font-size: 36px;
    }

    .banner-section .slide-item .content-box {
        height: 780px;
    }

    .banner-section .book-btn {
        right: 15px;
        bottom: 15px;
        transform: scale(0.70);
    }

    .we-offer-section .row {
        margin: 0 -20px;
    }

    .we-offer-section .row .offer-block {
        padding-left: 20px;
        padding-right: 20px;
    }

    .we-offer-section .row .offer-block:nth-child(2) {
        margin-top: 0;
    }

    .we-offer-section .title-box {
        margin-bottom: 40px;
    }

    .story-section .text-col .inner {
        padding-right: 0;
    }

    .special-dish .content-col .inner {
        padding-top: 100px;
        padding-bottom: 100px;
        padding-left: 70px;
    }

    .story-section {
        padding-top: 100px;
    }

    .story-section .image-col .round-stamp {
        right: 0;
    }

    .menu-tabs .menu-col .inner {
        padding-right: 30px;
    }

    .menu-tabs .menu-col:nth-child(2) .inner {
        padding-left: 30px;
    }

    .reserve-section .reserv-col .inner {
        padding: 40px 20px 30px;
    }

    .reserve-section .info-col .inner {
        padding-top: 40px;
        padding-bottom: 30px;
    }

    .team-section .row .team-block,
    .news-section .row .news-block {
        padding-left: 15px;
        padding-right: 15px;
    }

    .team-section .row,
    .news-section .row {
        margin: 0 -15px;
    }

    .inner-banner {
        padding-top: 200px;
        padding-bottom: 70px;
    }

    .about-section .row .about-block {
        padding-left: 10px;
        padding-right: 10px;
    }

    .about-section .row {
        margin: 0 -10px;
    }

    .fluid-section .content-col .inner {
        padding-top: 150px;
        padding-bottom: 150px;
    }

    .why-block-two.m-top {
        padding-top: 0;
    }

    .about-section .title-box {
        margin-bottom: 50px;
    }

    .menu-one .menu-col .inner {
        padding-left: 0;
    }

    .menu-one.alternate .menu-col .inner {
        padding-right: 0;
    }

    .featured-section .text-col .inner {
        padding-top: 30px;
        padding-bottom: 40px;
    }

    .featured-section .text-col .booking-info .bk-no {
        font-size: 26px;
    }

    .menu-two .menu-col .inner {
        padding-right: 30px;
    }

    .menu-two .menu-col:nth-child(2) .inner {
        padding-left: 30px;
    }

    .story-section {
        padding-bottom: 120px;
    }


    .reservation-contactform .title-box .text.desc {
        padding: 0 100px;
    }

    .online-reservation .title-box .text.desc {
        padding: 0 100px;
    }


}

@media only screen and (min-width: 768px) {

    .main-menu .navigation>li>ul,
    .main-menu .navigation>li>ul>li>ul {
        display: block !important;
        visibility: hidden;
        opacity: 0;
    }

    .reservation-contactform .title-box .text.desc {
        padding: 0 50px;
    }

}

@media only screen and (max-width: 991px) {
    .header-top .top-left {
        display: none;
    }

    .header-top .top-right {
        display: block;
        width: 100%;
        text-align: center;
    }

    .header-top .top-right ul li,
    .header-top .top-right ul li:last-child {
        display: inline-block;
        float: none;
        display: inline-block;
        margin: 0 15px;
    }

    .main-header .header-upper .links-box {}

    .main-header .header-upper .links-box .link {
        margin-left: 20px;
    }

    .main-header .main-box .logo-box .logo img {
        height: 50px;
    }

    .banner-section .slide-item h1,
    h1,
    .inner-banner .inner h1 {
        font-size: 54px;
    }

    h2,
    .intro-section .content-box h3,
    .featured-section .text-col h2,
    .chef-selection .title-box h3 {
        font-size: 40px;
    }

    h3 {
        font-size: 26px;
    }

    .testimonials-section .testi-top .quote-text {
        font-size: 30px;
    }

    .banner-section .slide-item .content-box {
        height: 700px;
    }

    body .left-bot-bg,
    body .right-top-bg {
        display: none;
    }

    .we-offer-section {
        padding-top: 70px;
        padding-bottom: 20px;
    }

    .story-section {
        padding-top: 70px;
    }

    .story-section .image-col .images .image:nth-child(2) {
        bottom: -130px;
    }

    .story-section .text-col {
        margin-bottom: 80px;
    }

    .special-dish .content-col .inner {
        padding-top: 70px;
        padding-bottom: 70px;
        max-width: none;
    }

    .special-dish .image-col .image-layer {
        display: none;
    }

    .special-dish .image-col .image {
        display: block;
    }

    .menu-section,
    .special-offer .outer-container {
        padding-top: 70px;
        padding-bottom: 70px;
    }

    .menu-tabs .menu-col .inner {
        padding-right: 0;
    }

    .menu-tabs .menu-col:nth-child(2) .inner {
        padding-left: 0;
    }

    .testimonials-section {
        padding-top: 70px;
    }

    .why-us {
        padding-top: 70px;
        padding-bottom: 30px;
    }

    .team-section {
        padding-top: 70px;
        padding-bottom: 30px;
    }

    .intro-section {
        padding-top: 70px;
        padding-bottom: 20px;
    }

    .main-footer {
        padding-top: 70px;
        padding-bottom: 70px;
    }

    .main-footer .info-col {
        order: 0;
        margin-bottom: 50px;
    }

    .main-footer .info-col .inner {
        padding-top: 50px;
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 50px;
    }

    .main-footer .links-col {
        margin-bottom: 50px;
    }

    .main-footer .links-col .inner {
        padding-top: 0;
        padding-bottom: 0;
    }

    .main-footer .links-col.last {
        order: 7;
    }

    .main-footer .upper-section {
        margin-bottom: 20px;
    }

    .special-offer {
        margin-bottom: 70px;
    }

    .about-section {
        padding-top: 70px;
        padding-bottom: 20px;
    }

    .fluid-section .content-col .inner {
        padding-top: 70px;
        padding-bottom: 70px;
        max-width: none;
    }

    .fluid-section .image-col .image-layer {
        display: none;
    }

    .fluid-section .image-col .image {
        display: block;
    }

    .fluid-section.alternate .content-col {
        order: 12;
    }

    .fluid-section.alternate .image-col {
        order: 0;
    }

    .services-section .s-col {
        padding-top: 0;
    }

    .services-section .s-col.last {
        order: 7;
    }

    .services-section .image-col {
        order: 12;
    }

    .services-section .s-col .s-block,
    .services-section .s-col .s-block:last-child,
    .services-section .image-col {
        margin-bottom: 70px;
    }

    .services-section {
        padding-top: 70px;
        padding-bottom: 0;
    }

    .services-section .title-box {
        margin-bottom: 50px;
    }

    .testimonials-two {
        padding-top: 70px;
        padding-bottom: 70px;
    }

    .why-us-two {
        padding-top: 70px;
        padding-bottom: 40px;
    }

    .image-gallery {
        padding-bottom: 70px;
    }

    .menu-one {
        padding-top: 70px;
        padding-bottom: 30px;
    }

    .menu-one.alternate .text-col {
        order: 12;
    }

    .menu-one.alternate .image-col {
        order: 0;
    }

    .special-offer-two {
        padding-bottom: 25px;
    }

    .chef-selection .content-col .inner {
        max-width: none;
        padding-top: 70px;
        padding-bottom: 70px;
        padding-left: 70px;
    }

    .chef-selection .image-col .image-layer {
        display: none;
    }

    .chef-selection .image-col .image {
        display: block;
    }

    .menu-two {
        padding-top: 70px;
        padding-bottom: 15px;
    }

    .menu-two .menu-col .inner,
    .menu-two .menu-col:nth-child(2) .inner {
        padding-left: 0;
        padding-right: 0;
    }

    .featured-section {
        padding-bottom: 30px;
    }

    .featured-section.alternate .text-col {
        order: 0;
    }

    .featured-section.alternate .image-col {
        order: 12;
    }

    .featured-section .text-col .inner {
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .featured-section .text-col .content {
        display: block;
        max-width: none;
    }

    .featured-section .text-col .content-inner {
        display: block;
        max-width: 400px;
    }

    .online-reservation,
    .reserve-section.style-two {
        padding-top: 70px;
        padding-bottom: 70px;
    }

    .reserve-section.style-two .info-col .inner {
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .online-reservation .reservation-form form {
        padding-right: 0;
    }

    .online-reservation .reservation-form form button {
        position: relative;
        top: 0;
        width: 100%;
        margin-top: 0px;
        text-align: center;
    }

    .online-reservation .reservation-form form button .btn-wrap {
        width: 100%;
    }

    .online-reservation .powered-by {
        padding-top: 20px;
    }

    .story-section {
        padding-bottom: 210px;
    }

    .featured-section .text-col .inner,
    .featured-section.alternate .text-col .inner {
        left: 0;
        right: 0;
        width: 100%;
        display: block;
    }

    .map-location-section .reserv-col .inner {
        padding-right: 0px;
        margin-bottom: 50px;
    }

    .contact-page .loc-block {
        text-align: center;
        margin-top: 30px;
    }

    .contact-page .loc-block img {
        text-align: center;
        width: 100%;
    }

    .chef-section .image-col {
        padding: 0 30px;
    }

    .chef-section .image-col .image img {
        width: 100%;
    }

    .chef-section .content-col .inner {
        padding-top: var(--padding-top-80);
    }

    .intro-section.quote {
        padding-top: var(--padding-top-100);
        padding-bottom: var(--padding-bottom-100);
    }

}

@media only screen and (max-width: 767px) {

    .main-header .link.link-btn {
        display: none;
    }

    .main-header .main-box {
        flex-direction: row-reverse;
    }

    .banner-section .swiper-button-prev,
    .banner-section .swiper-button-next {
        display: none;
    }

    .banner-section .slide-item h1,
    h1,
    .inner-banner .inner h1 {
        font-size: 48px;
    }

    h2,
    .intro-section .content-box h3,
    .featured-section .text-col h2,
    .chef-selection .title-box h3 {
        font-size: 36px;
    }

    h3 {
        font-size: 24px;
    }

    .testimonials-section .testi-top .quote-text {
        font-size: 26px;
    }

    .special-dish .content-col .badge-icon,
    .chef-selection .content-col .badge-icon {
        position: relative;
        left: 0;
        top: 0;
        display: block;
        margin-bottom: 20px;
        -webkit-animation: none;
        animation: none;
    }

    .special-dish .content-col .inner,
    .chef-selection .content-col .inner {
        padding-left: 20px;
    }

    .chef-selection .content-col .inner {
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
    }

    .menu-tabs .buttons .tab-buttons .tab-btn {
        margin: 0 22px;
        font-size: 16px;
    }

    .menu-tabs .buttons .tab-buttons .tab-btn:after {
        margin-left: 22px;
    }

    .special-offer .offer-block-two.margin-top {
        margin-top: 0;
    }

    .featured-links .link-block.alternate .text-block {
        position: relative;
        height: 370px;
    }

    .featured-links .link-block .text-block {
        height: 250px;
    }

    .featured-links .link-block .image-box .image-layer {
        display: none;
    }

    .featured-links .link-block .image-box .image {
        display: block;
    }

    .featured-links .link-block .image-box {
        height: auto;
    }

    .featured-links .link-block.alternate .text-block .bl-inner {
        background: rgba(0, 0, 0, 0.70);
    }

    .team-block .inner-box {
        text-align: center;
    }

    .intro-section .fact-counter {
        text-align: center;
    }

    .intro-section .fact-counter .fact-count,
    .intro-section .fact-counter .fact-title {
        float: none;
        display: block;
        margin-left: 0;
    }

    .image-gallery .owl-theme .owl-nav .owl-prev,
    .image-gallery .owl-theme .owl-nav .owl-next {
        transform: scale(0.70);
    }

    .about-block .video-box {
        margin-top: 50px;
    }

    .about-section .info-block .inner-box {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    .about-section .row .about-block {
        text-align: center;
    }

    .hidden-bar .side-menu {
        padding-left: 30px;
        padding-right: 30px;
    }

    .online-reservation .powered-by {
        padding-top: 20px;
    }

    .reserve-section .info-col .discount-info .num {
        font-size: 60px;
    }

    .reserve-section .info-col .discount-info {
        padding-top: 70px;
    }

    .main-header .header-upper .links-box {
        margin-left: 0px;
    }

    .featured-links .row .link-block.alternate {
        order: 12;
    }


    .c-page-form-box {
        padding: 20px;
    }

    .inner-box.cp-seprator:before {
        content: '';
        position: absolute;
        right: 50%;
        top: 0%;
        margin-top: -4px;
        height: 8px;
        width: 8px;
        border: 1px solid var(--main-color);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .inner-box.cp-seprator:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 100%;
        margin-top: -4px;
        height: 8px;
        width: 8px;
        border: 1px solid var(--main-color);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .contact-page .loc-block {
        text-align: center;
    }

    .contact-page .loc-block img {
        text-align: center;
        max-width: 100%;
    }

    .chef-section .image-col {
        padding: 0 30px;
    }

    .chef-section .content-col .title-box .text {
        padding-right: var(--padding-right-0);
    }

    .intro-section .separator {
        margin-top: var(--margin-top-20);
        margin-bottom: var(--margin-bottom-20);
    }

}

@media only screen and (max-width: 599px) {
    .main-header .header-upper .links-box .link:first-child {
        display: none;
    }

    .banner-section .slide-item .text {
        font-size: 18px;
    }

    .special-dish .content-col .inner {
        text-align: center;
    }

    .menu-tabs .buttons .tab-buttons .tab-btn {
        margin: 0 15px;
    }

    .menu-tabs .buttons .tab-buttons .tab-btn:after {
        display: none;
    }

    .news-block .over-content {
        text-align: center;
    }

    .reserve-section .info-col .booking-info .bk-no,
    .hidden-bar .booking-info .bk-no,
    .info-bar .booking-info .bk-no,
    .featured-section .text-col .booking-info .bk-no {
        font-size: 24px;
        line-height: 1.4em;
    }

    .banner-section .slide-item h1,
    h1,
    .intro-section .fact-counter .count-box,
    .inner-banner .inner h1,
    .about-section .fact-counter .fact-count {
        font-size: 40px;
    }

    h2,
    .intro-section .content-box h3,
    .hidden-bar h2,
    .info-bar h2,
    .featured-section .text-col h2,
    .chef-selection .title-box h3 {
        font-size: 30px;
    }

    h3 {
        font-size: 22px;
    }

    .testimonials-section .testi-top .quote-text {
        font-size: 22px;
    }

    .main-footer .info-col .newsletter-form .form-group input[type="text"],
    .main-footer .info-col .newsletter-form input[type="email"],
    .main-footer .info-col .newsletter-form input[type="password"] {
        padding-right: 30px;
        padding-left: 30px;
    }

    .main-footer .info-col .newsletter-form button {
        position: relative;
        width: 100%;
        margin-top: 20px;
    }

    .main-footer .info-col .newsletter-form .alt-icon {
        display: none;
    }

    .services-section .s-col .s-block,
    .services-section .s-col .s-block:last-child,
    .services-section .image-col {
        margin-bottom: 50px;
    }

    .services-section .s-block .inner,
    .services-section .s-block.alternate .inner {
        padding-left: 0;
        padding-right: 0;
        text-align: center;
    }

    .services-section .s-block .icon-box,
    .services-section .s-block.alternate .icon-box {
        position: relative;
        left: 0;
        top: 0;
        margin: 0 auto 20px;
    }

    .services-section {
        padding-bottom: 20px;
    }

    .testimonials-two .testi-block .text {
        font-size: 18px;
    }

    .testimonials-two .testi-block .inner-box {
        padding-left: 25px;
        padding-right: 25px;
    }

    .header-top {
        display: none;
    }

    .main-header .header-upper {
        top: 0;
    }

    .fixed-header.header-down {
        top: 0;
    }

    .fixed-header.header-up {
        top: -132px;
    }

    .banner-section .slide-item .content-box {
        padding-top: 130px;
        height: 600px;
    }

    .reservation-contactform .title-box .text.desc {
        padding: 0 15px;
    }

    .online-reservation .title-box .text.desc {
        padding: 0 20px;
    }

}

@media only screen and (max-width: 479px) {

    .banner-section .slide-item h1,
    h1,
    .intro-section .fact-counter .count-box,
    .inner-banner .inner h1,
    .about-section .fact-counter .fact-count {
        font-size: 34px;
    }

    .banner-section .slide-item .content-box {
        height: 600px;
    }

    .menu-tabs .buttons .tab-buttons .tab-btn {
        display: block;
        margin: 0 0 20px;
    }

    .menu-tabs .buttons .tab-buttons .tab-btn:last-child {
        margin-bottom: 0;
    }

    .menu-tabs .buttons .tab-buttons .tab-btn:before {
        left: 50%;
        margin-left: -50px;
        width: 100px;
    }

    .inner-banner {
        padding-top: 150px;
    }

    h2,
    .intro-section .content-box h3,
    .hidden-bar h2,
    .info-bar h2,
    .featured-section .text-col h2,
    .chef-selection .title-box h3 {
        font-size: 28px;
    }

    h3 {
        font-size: 20px;
    }

    .banner-section .slide-item .text {
        font-size: 16px;
    }

    .testimonials-section .testi-top .quote-text {
        font-size: 20px;
    }

    .banner-section .book-btn {
        transform: scale(0.60);
    }

    .menu-one .menu-col .dish-block .title::before,
    .menu-two .dish-block .title::before {
        display: none;
    }

    .menu-two .dish-block .inner-box {
        padding-top: var(--padding-zero);
    }

    .story-section .image-col .images .image:nth-child(2) {
        width: 150px;
        bottom: -120px !important;
    }

    .story-section .image-col .images {
        padding-left: 50px;
    }

    .story-section .text-col {
        margin-bottom: 120px;
    }

    .story-section {
        padding-bottom: 180px;
    }

    .menu-tabs .dish-block .title::before {
        display: none;
    }

    .menu-tabs .dish-block .title .ttl {
        width: 100%;
        padding-right: 0px;
    }

    .menu-tabs .dish-block .title .ttl .s-info {
        width: 80px;
        display: block;
        margin-left: 0px;
        margin-top: 10px;
        text-align: center;
    }

    .menu-tabs .dish-block .inner-box {
        padding-top: 0px;
    }

    .menu-tabs .dish-block .title .price,
    .menu-two .dish-block .title .price {
        position: relative;
        right: 0px;
        float: left;
        margin-top: 10px;
        padding-left: var(--padding-zero);
    }

    .menu-two .dish-block .title .ttl {
        width: 100%;
        padding-right: 0px;
    }

    .menu-two .dish-block .title .ttl .s-info {
        left: -10px;
        width: 75px;
        display: block;
        margin-top: 10px;
        text-align: center;
    }

}

@media only screen and (max-width: 399px) {

    .menu-two .dish-block .title .ttl a {
        width: 150px;
    }

}
</style>
