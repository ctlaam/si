<template>
    <div id="site">
        <div id="site-inner">
            <main class="main-wrapper">
                <div class="event-page">
                    <div class="si-breadcrumbs d-flex">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <h1>Sự Kiện</h1>
                                    <div class="bg-breadcrumbs mt-4">
                                        <nav style="--bs-breadcrumb-divider: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&quot;);"
                                            aria-label="breadcrumb">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><a href="/" title="Trang chủ">Trang chủ</a>
                                                </li>
                                                <li class="breadcrumb-item active" aria-current="page">Sự Kiện</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container my-10 py-5">
                        <div class="row">
                            <div class="col-12">
                                <h1 class="text-center si-title">Sự kiện nổi bật</h1>
                                <div class="si-banners">
                                    <div class="banner-events">
                                        <SlickCarousel :arrows="true" :dots="true" :infinite="true" :autoplay="false"
                                            :autoplaySpeed="2000" :slidesToShow="1" :slidesToScroll="1">
                                            <!-- Slide 1 -->
                                            <a target="_blank"
                                                href="https://sigroup.vn/su-kien/si-group-ky-thoa-thuan-hop-tac-dau-tu-voi-chinh-phu-solomon/"
                                                title="SI Group ký kết hợp tác chiến lược tại sự kiện đầu tư Solomon, thúc đẩy phát triển Đặc khu Kinh tế SEZ">
                                                <div class="justify-center align-items-center position-relative bg-banner vh-80"
                                                    :style="{
                                                        background: `url(${require('@/assets/uploads/2025/06/su-kien-dau-tu-solomon.jpg')}) center/cover no-repeat`
                                                    }">
                                                    <div class="bg-overlay"></div>
                                                    <div class="banner-wrap w-100 h-100 position-relative">
                                                        <div class="w-100 mb-13">
                                                            <h2>
                                                                SI Group ký kết hợp tác chiến lược tại sự kiện đầu tư
                                                                Solomon, thúc
                                                                đẩy phát triển Đặc khu Kinh tế SEZ
                                                            </h2>
                                                            <div class="mt-3 mb-2">
                                                                <span>
                                                                    Lễ ký kết hợp tác chiến lược giữa SI Group và Chính
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
                                            <a target="_blank"
                                                href="https://sigroup.vn/su-kien/bo-ngoai-giao-my-trao-tang-giai-thuong-dong-gop-xuat-sac-cho-pho-chu-tich-hdqt-si-group-ba-nguyen-thi-bich-ha/"
                                                title="Bộ Ngoại giao Mỹ trao tặng Giải thưởng đóng góp xuất sắc cho Phó Chủ tịch HĐQT SI Group – Bà Nguyễn Thị Bích Hà">
                                                <div class="justify-center align-items-center position-relative bg-banner vh-80"
                                                    :style="{
                                                        background: `url(${require('@/assets/uploads/2025/04/Thumbnail-1-1.jpg')}) center/cover no-repeat`
                                                    }">
                                                    <div class="bg-overlay"></div>
                                                    <div class="banner-wrap w-100 h-100 position-relative">
                                                        <div class="w-100 mb-13">
                                                            <h2>Bộ Ngoại giao Mỹ trao tặng Giải thưởng đóng góp xuất sắc
                                                                cho
                                                                Phó Chủ tịch HĐQT SI Group – Bà Nguyễn Thị Bích Hà</h2>
                                                            <div class="mt-3 mb-2">
                                                                <span>
                                                                    Nhằm ghi nhận những đóng góp quan trọng trong việc
                                                                    thúc
                                                                    đẩy quá trình ký kết Hiệp định Thương mại
                                                                    Song phương Việt Nam – Hoa Kỳ vào năm 2000, bà
                                                                    Nguyễn
                                                                    Thị Bích Hà, hiện giữ vị trí Phó Chủ tịch Hội
                                                                    đồng Quản trị Tập đoàn SI Group, đã vinh dự được
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
                                            <a target="_blank"
                                                href="https://sigroup.vn/su-kien/hoi-thao-quan-ly-gia-san-quoc-te-hoa-doanh-nghiep-doc-quyen-so-huu-quoc-tich/"
                                                title="Hội thảo Quản lý Gia sản – Quốc tế hoá doanh nghiệp & Độc quyền sở hữu quốc tịch">
                                                <div class="justify-center align-items-center position-relative bg-banner vh-80"
                                                    :style="{
                                                        background: `url(${require('@/assets/uploads/2025/04/Thumbnail-3-1.jpg')}) center/cover no-repeat`
                                                    }">
                                                    <div class="bg-overlay"></div>
                                                    <div class="banner-wrap w-100 h-100 position-relative">
                                                        <div class="w-100 mb-13">
                                                            <h2>Hội thảo Quản lý Gia sản – Quốc tế hoá doanh nghiệp &
                                                                Độc
                                                                quyền sở hữu quốc tịch</h2>
                                                            <div class="mt-3 mb-2">
                                                                <span>
                                                                    Vào ngày 29/03/2025 tại Hà Nội và 05/04/2025 tại TP.
                                                                    Hồ
                                                                    Chí Minh, Techcombank phối hợp cùng SI Group
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
                            <div class="col-12">
                                <h2 class="text-center si-title">Tất cả sự kiện</h2>
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <a target="_blank"
                                            href="https://sigroup.vn/su-kien/si-group-ky-thoa-thuan-hop-tac-dau-tu-voi-chinh-phu-solomon/"
                                            title="SI Group ký kết hợp tác chiến lược tại sự kiện đầu tư Solomon, thúc đẩy phát triển Đặc khu Kinh tế SEZ"
                                            class="si-event mt-10">
                                            <div class="img">
                                                <img src="https://sigroup.vn/wp-content/uploads/2025/06/su-kien-dau-tu-solomon.jpg"
                                                    alt="SI Group ký kết hợp tác chiến lược tại sự kiện đầu tư Solomon, thúc đẩy phát triển Đặc khu Kinh tế SEZ"
                                                    class="blog-thumbnail img-fluid entered lazyloaded"
                                                    data-lazy-src="https://sigroup.vn/wp-content/uploads/2025/06/su-kien-dau-tu-solomon.jpg"
                                                    data-ll-status="loaded"><noscript><img
                                                        src="https://sigroup.vn/wp-content/uploads/2025/06/su-kien-dau-tu-solomon.jpg"
                                                        alt="SI Group ký kết hợp tác chiến lược tại sự kiện đầu tư Solomon, thúc đẩy phát triển Đặc khu Kinh tế SEZ"
                                                        class="blog-thumbnail img-fluid" /></noscript>
                                            </div>
                                            <div class="info">
                                                <h2 class="my-3">SI Group ký kết hợp tác chiến lược tại sự kiện đầu tư
                                                    Solomon, thúc đẩy phát triển Đặc khu Kinh tế SEZ</h2>
                                                <div class="d-flex align-items-center">
                                                    <div class="d-flex align-items-center">
                                                        <span class="clock"></span><span>30/05/2025</span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <span class="location"></span><span>Hà Nội</span>
                                                    </div>
                                                </div>
                                                <div class="py-3 si-4-line">
                                                    <p>Lễ ký kết hợp tác chiến lược giữa SI Group và Chính phủ Solomon
                                                        Islands đánh dấu cột mốc lần đầu tiên một doanh nghiệp Việt giữ
                                                        vai trò cố vấn chiến lược và nhà đầu tư ưu tiên trong quá trình
                                                        phát triển Đặc khu Kinh tế SEZ quốc tế. Sự kiện mở ra chương mới
                                                        trong hợp tác thể chế, thu hút đầu tư và kiến tạo mô hình phát
                                                        triển bền vững cho quốc đảo Nam Thái Bình Dương.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <a target="_blank"
                                            href="https://sigroup.vn/su-kien/bo-ngoai-giao-my-trao-tang-giai-thuong-dong-gop-xuat-sac-cho-pho-chu-tich-hdqt-si-group-ba-nguyen-thi-bich-ha/"
                                            title="Bộ Ngoại giao Mỹ trao tặng Giải thưởng đóng góp xuất sắc cho Phó Chủ tịch HĐQT SI Group – Bà Nguyễn Thị Bích Hà"
                                            class="si-event mt-10">
                                            <div class="img">
                                                <img src="https://sigroup.vn/wp-content/uploads/2025/04/Thumbnail-1-1.jpg"
                                                    alt="Bộ Ngoại giao Mỹ trao tặng Giải thưởng đóng góp xuất sắc cho Phó Chủ tịch HĐQT SI Group – Bà Nguyễn Thị Bích Hà"
                                                    class="blog-thumbnail img-fluid entered lazyloaded"
                                                    data-lazy-src="https://sigroup.vn/wp-content/uploads/2025/04/Thumbnail-1-1.jpg"
                                                    data-ll-status="loaded"><noscript><img
                                                        src="https://sigroup.vn/wp-content/uploads/2025/04/Thumbnail-1-1.jpg"
                                                        alt="Bộ Ngoại giao Mỹ trao tặng Giải thưởng đóng góp xuất sắc cho Phó Chủ tịch HĐQT SI Group &#8211; Bà Nguyễn Thị Bích Hà"
                                                        class="blog-thumbnail img-fluid" /></noscript>
                                            </div>
                                            <div class="info">
                                                <h2 class="my-3">Bộ Ngoại giao Mỹ trao tặng Giải thưởng đóng góp xuất
                                                    sắc cho Phó Chủ tịch HĐQT SI Group – Bà Nguyễn Thị Bích Hà</h2>
                                                <div class="d-flex align-items-center">
                                                    <div class="d-flex align-items-center">
                                                        <span class="clock"></span><span></span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <span class="location"></span><span></span>
                                                    </div>
                                                </div>
                                                <div class="py-3 si-4-line">
                                                    <p>Nhằm ghi nhận những đóng góp quan trọng trong việc thúc đẩy quá
                                                        trình ký kết Hiệp định Thương mại Song phương Việt Nam – Hoa Kỳ
                                                        vào năm 2000, bà Nguyễn Thị Bích Hà, hiện giữ vị trí Phó Chủ
                                                        tịch Hội đồng Quản trị Tập đoàn SI Group, đã vinh dự được trao
                                                        tặng giải thưởng “2002 Foreign Service National of the Year
                                                        Award” vì thành tích xuất sắc.





                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <a target="_blank"
                                            href="https://sigroup.vn/su-kien/lanh-dao-si-group-thao-luan-voi-chinh-quyen-queensland-ve-chien-luoc-hop-tac-dau-tu/"
                                            title="Lãnh đạo SI Group thảo luận với chính quyền bang Queensland về chiến lược hợp tác đầu tư&nbsp;"
                                            class="si-event mt-10">
                                            <div class="img">
                                                <img src="https://sigroup.vn/wp-content/uploads/2025/04/SI-Group-gap-go-chinh-quyen-bang-Queensland_thumb.jpg"
                                                    alt="Lãnh đạo SI Group thảo luận với chính quyền bang Queensland về chiến lược hợp tác đầu tư&nbsp;"
                                                    class="blog-thumbnail img-fluid entered lazyloaded"
                                                    data-lazy-src="https://sigroup.vn/wp-content/uploads/2025/04/SI-Group-gap-go-chinh-quyen-bang-Queensland_thumb.jpg"
                                                    data-ll-status="loaded"><noscript><img
                                                        src="https://sigroup.vn/wp-content/uploads/2025/04/SI-Group-gap-go-chinh-quyen-bang-Queensland_thumb.jpg"
                                                        alt="Lãnh đạo SI Group thảo luận với chính quyền bang Queensland về chiến lược hợp tác đầu tư "
                                                        class="blog-thumbnail img-fluid" /></noscript>
                                            </div>
                                            <div class="info">
                                                <h2 class="my-3">Lãnh đạo SI Group thảo luận với chính quyền bang
                                                    Queensland về chiến lược hợp tác đầu tư&nbsp;</h2>
                                                <div class="d-flex align-items-center">
                                                    <div class="d-flex align-items-center">
                                                        <span class="clock"></span><span></span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <span class="location"></span><span></span>
                                                    </div>
                                                </div>
                                                <div class="py-3 si-4-line">
                                                    <p>Buổi thảo luận giữa Ban lãnh đạo SI Group với chính quyền bang
                                                        Queensland nhằm tiến tới hợp tác lâu dài để hỗ trợ tạo điều kiện
                                                        cho các doanh nhân, nhà đầu tư Việt mở rộng cơ hội kinh doanh và
                                                        sinh sống lâu dài tại bang.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <a target="_blank"
                                            href="https://sigroup.vn/su-kien/hoi-thao-quan-ly-gia-san-quoc-te-hoa-doanh-nghiep-doc-quyen-so-huu-quoc-tich/"
                                            title="Hội thảo Quản lý Gia sản – Quốc tế hoá doanh nghiệp &amp; Độc quyền sở hữu quốc tịch"
                                            class="si-event mt-10">
                                            <div class="img">
                                                <img src="https://sigroup.vn/wp-content/uploads/2025/04/Thumbnail-3-1.jpg"
                                                    alt="Hội thảo Quản lý Gia sản – Quốc tế hoá doanh nghiệp &amp; Độc quyền sở hữu quốc tịch"
                                                    class="blog-thumbnail img-fluid entered lazyloaded"
                                                    data-lazy-src="https://sigroup.vn/wp-content/uploads/2025/04/Thumbnail-3-1.jpg"
                                                    data-ll-status="loaded"><noscript><img
                                                        src="https://sigroup.vn/wp-content/uploads/2025/04/Thumbnail-3-1.jpg"
                                                        alt="Hội thảo Quản lý Gia sản – Quốc tế hoá doanh nghiệp &#038; Độc quyền sở hữu quốc tịch"
                                                        class="blog-thumbnail img-fluid" /></noscript>
                                            </div>
                                            <div class="info">
                                                <h2 class="my-3">Hội thảo Quản lý Gia sản – Quốc tế hoá doanh nghiệp
                                                    &amp; Độc quyền sở hữu quốc tịch</h2>
                                                <div class="d-flex align-items-center">
                                                    <div class="d-flex align-items-center">
                                                        <span class="clock"></span><span></span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <span class="location"></span><span>Hà Nội - Hồ Chí Minh</span>
                                                    </div>
                                                </div>
                                                <div class="py-3 si-4-line">
                                                    <p>Vào ngày 29/03/2025 tại Hà Nội và 05/04/2025 tại TP. Hồ Chí Minh,
                                                        Techcombank phối hợp cùng SI Group tổ chức thành công hội thảo
                                                        “Quản lý Gia sản – Quốc tế hóa Doanh nghiệp &amp; Độc quyền Sở
                                                        hữu Quốc tịch”, thu hút sự tham dự của 30 doanh nhân, nhà đầu tư
                                                        sở hữu doanh nghiệp có doanh thu top đầu Việt Nam.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <a target="_blank"
                                            href="https://sigroup.vn/su-kien/si-group-to-chuc-buoi-training-chuyen-sau-cac-san-pham-doc-quyen-voi-doi-tac-chien-luoc/"
                                            title="SI Group tổ chức buổi training chuyên sâu các sản phẩm độc quyền với đối tác chiến lược"
                                            class="si-event mt-10">
                                            <div class="img">
                                                <img src="https://sigroup.vn/wp-content/uploads/2025/04/Thumbnail-7.jpg"
                                                    alt="SI Group tổ chức buổi training chuyên sâu các sản phẩm độc quyền với đối tác chiến lược"
                                                    class="blog-thumbnail img-fluid entered lazyloaded"
                                                    data-lazy-src="https://sigroup.vn/wp-content/uploads/2025/04/Thumbnail-7.jpg"
                                                    data-ll-status="loaded"><noscript><img
                                                        src="https://sigroup.vn/wp-content/uploads/2025/04/Thumbnail-7.jpg"
                                                        alt="SI Group tổ chức buổi training chuyên sâu các sản phẩm độc quyền với đối tác chiến lược"
                                                        class="blog-thumbnail img-fluid" /></noscript>
                                            </div>
                                            <div class="info">
                                                <h2 class="my-3">SI Group tổ chức buổi training chuyên sâu các sản phẩm
                                                    độc quyền với đối tác chiến lược</h2>
                                                <div class="d-flex align-items-center">
                                                    <div class="d-flex align-items-center">
                                                        <span class="clock"></span><span></span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <span class="location"></span><span></span>
                                                    </div>
                                                </div>
                                                <div class="py-3 si-4-line">
                                                    <p>Buổi training giúp đối tác hiểu sâu các sản phẩm đầu tư độc quyền
                                                        của SI Group, từ đó nâng cao năng lực tư vấn và tiếp cận đúng
                                                        đối tượng nhà đầu tư tiềm năng.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <a target="_blank"
                                            href="https://sigroup.vn/su-kien/ban-lanh-dao-si-group-va-thu-tuong-bahamas-trao-doi-ke-hoach-hop-tac-dau-tu-vao-dac-khu-kinh-te-sez/"
                                            title="Ban lãnh đạo SI Group và Thủ tướng Bahamas trao đổi kế hoạch hợp tác đầu tư vào Đặc Khu Kinh tế SEZ&nbsp;&nbsp;&nbsp;"
                                            class="si-event mt-10">
                                            <div class="img">
                                                <img src="https://sigroup.vn/wp-content/uploads/2025/04/z5238090850865_5886f8bdd58bb47ac912f21095fc016f.jpg"
                                                    alt="Ban lãnh đạo SI Group và Thủ tướng Bahamas trao đổi kế hoạch hợp tác đầu tư vào Đặc Khu Kinh tế SEZ&nbsp;&nbsp;&nbsp;"
                                                    class="blog-thumbnail img-fluid entered lazyloaded"
                                                    data-lazy-src="https://sigroup.vn/wp-content/uploads/2025/04/z5238090850865_5886f8bdd58bb47ac912f21095fc016f.jpg"
                                                    data-ll-status="loaded"><noscript><img
                                                        src="https://sigroup.vn/wp-content/uploads/2025/04/z5238090850865_5886f8bdd58bb47ac912f21095fc016f.jpg"
                                                        alt="Ban lãnh đạo SI Group và Thủ tướng Bahamas trao đổi kế hoạch hợp tác đầu tư vào Đặc Khu Kinh tế SEZ   "
                                                        class="blog-thumbnail img-fluid" /></noscript>
                                            </div>
                                            <div class="info">
                                                <h2 class="my-3">Ban lãnh đạo SI Group và Thủ tướng Bahamas trao đổi kế
                                                    hoạch hợp tác đầu tư vào Đặc Khu Kinh tế SEZ&nbsp;&nbsp;&nbsp;</h2>
                                                <div class="d-flex align-items-center">
                                                    <div class="d-flex align-items-center">
                                                        <span class="clock"></span><span></span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <span class="location"></span><span>Bahamas</span>
                                                    </div>
                                                </div>
                                                <div class="py-3 si-4-line">
                                                    <p>Vừa qua, Ban lãnh đạo SI Group đã đến Bahamas gặp gỡ trực tiếp và
                                                        trao đổi với Thủ tướng và Bộ trưởng Ngoại giao của quốc gia này
                                                        về kế hoạch hợp tác đầu tư phát triển vào Đặc Khu Kinh tế SEZ,
                                                        khẳng định vai trò cầu nối giữa Bahams với giới đầu tư toàn cầu.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="si-pagi">
                                                <span aria-current="page" class="page-numbers current">1</span>
                                                <a class="page-numbers"
                                                    href="https://sigroup.vn/su-kien-si-group/page/2/">2</a>
                                                <a class="page-numbers"
                                                    href="https://sigroup.vn/su-kien-si-group/page/3/">3</a>
                                                <span class="page-numbers dots">…</span>
                                                <a class="page-numbers"
                                                    href="https://sigroup.vn/su-kien-si-group/page/9/">9</a>
                                                <a class="next page-numbers"
                                                    href="https://sigroup.vn/su-kien-si-group/page/2/">
                                                    <div class="si-next"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="py-10 si-form mx-auto">
                        <div class="container my-3">
                            <div class="row">
                                <div class="col-12 col-md-6 info-contact">
                                    <div class="si-form-tt">Liên Hệ Tư Vấn</div>
                                    <div class="mt-4">
                                        Điều làm nên khác biệt của SI Group chính là từng giải pháp được cá nhân hóa phù
                                        hợp với nhu cầu, điều kiện riêng biệt của từng Quý khách hàng. Chúng tôi cung
                                        cấp giải pháp tối ưu nhất dành riêng cho Quý khách, đồng thời cam kết tỷ lệ
                                        thành công và thời gian hoàn thành cho từng dịch vụ.<br>Để được tư vấn chính
                                        xác, nhanh chóng và bảo mật, Quý khách liên hệ trực tiếp Hotline <a
                                            href="tel:+84979355355">(+84) 979 355 355</a> hoặc để lại thông tin. Đội ngũ
                                        với hơn 20 năm kinh nghiệm của SI Group luôn sẵn sàng để kết nối và tư vấn miễn
                                        phí. </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <form ref="contactForm" class="home-contact" data-hs-cf-bound="true">
                                        <div class="mb-3">
                                            <input type="text" class="form-control" id="firstname" name="firstname"
                                                placeholder="Họ và Tên*">
                                        </div>
                                        <div class="row">
                                            <div class="col-12 col-md-6 mb-3 d-none">
                                                <input type="number" class="form-control" id="your_age" name="your_age"
                                                    value="2025" placeholder="Năm sinh*">
                                            </div>
                                            <div class="col-12 mb-3">
                                                <input type="text" class="form-control" id="phone" name="phone"
                                                    placeholder="Số điện thoại*">
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <input type="email" class="form-control" id="email" name="email"
                                                placeholder="Email*">
                                        </div>
                                        <div class="mb-3">
                                            <select class="form-control" name="danh_muc_quan_tam"
                                                id="danh_muc_quan_tam">
                                                <option value="">Danh mục quan tâm*</option>
                                                <option value="Định cư Úc tay nghề">Định cư Úc tay nghề</option>
                                                <option value="Định cư Úc đầu tư">Định cư Úc đầu tư</option>
                                                <option value="Định cư Mỹ tay nghề">Định cư Mỹ tay nghề</option>
                                                <option value="Định cư Mỹ Doanh nhân/Đầu tư">Định cư Mỹ Doanh nhân/Đầu
                                                    tư</option>
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
                                            <select class="form-control" name="chuong_trinh_quan_tam"
                                                id="chuong_trinh_quan_tam" disabled="">
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
                                            <textarea class="form-control" id="message" name="message"
                                                placeholder="Ghi chú" rows="3"></textarea>
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
                                        <div class="d-flex flex-wrap w-100 align-items-center">
                                            <button class="si-btn" type="submit">Gửi đi</button>
                                            <div class="home-contact-alert ml-4"></div>
                                        </div>
                                    </form>
                                    <script
                                        src="data:text/javascript;base64,CiAgICBjb25zdCBkYXRhID0gewogICAgICAgICLEkOG7i25oIGPGsCDDmmMgdGF5IG5naOG7gSI6IFsKICAgICAgICAgICAgeyBsYWJlbDogIkFVUyAtIFZpc2Egw5pjIiwgdmFsdWU6ICJBVVMgLSBWaXNhIMOaYyIgfQogICAgICAgIF0sCiAgICAgICAgIsSQ4buLbmggY8awIMOaYyDEkeG6p3UgdMawIjogWwogICAgICAgICAgICB7IGxhYmVsOiAiQVVTIC0gTklWIiwgdmFsdWU6ICJBVVMgLSBOSVYiIH0KICAgICAgICBdLAogICAgICAgICLEkOG7i25oIGPGsCBN4bu5IHRheSBuZ2jhu4EiOiBbCiAgICAgICAgICAgIHsgbGFiZWw6ICJFQi0zIiwgdmFsdWU6ICJFQi0zIiB9CiAgICAgICAgXSwKICAgICAgICAixJDhu4tuaCBjxrAgTeG7uSBEb2FuaCBuaMOibi/EkOG6p3UgdMawIjogWwogICAgICAgICAgICB7IGxhYmVsOiAiVVNBIC0gRUIyIC0gTklXIiwgdmFsdWU6ICJVU0EgLSBFQjIgLSBOSVciIH0sCiAgICAgICAgICAgIHsgbGFiZWw6ICJVU0EgLSBMMUEgLSBFQjFDIiwgdmFsdWU6ICJVU0EgLSBMMUEgLSBFQjFDIiB9LAogICAgICAgICAgICB7IGxhYmVsOiAiVmlzYSBFQi01IiwgdmFsdWU6ICJWaXNhIEVCLTUiIH0KICAgICAgICBdLAogICAgICAgICLEkOG7i25oIGPGsCBDYW5hZGEgbGFvIMSR4buZbmciOiBbCiAgICAgICAgICAgIHsgbGFiZWw6ICJQRUkgLSBUYXkgbmdo4buBIENhbmFkYSIsIHZhbHVlOiAiUEVJIC0gVGF5IG5naOG7gSBDYW5hZGEiIH0sCiAgICAgICAgICAgIHsgbGFiZWw6ICJFeHByZXNzIEVudHJ5IENhbmFkYSIsIHZhbHVlOiAiRXhwcmVzcyBFbnRyeSBDYW5hZGEiIH0KICAgICAgICBdLAogICAgICAgICLEkOG7i25oIGPGsCBDYW5hZGEgxJHhuqd1IHTGsCI6IFsKICAgICAgICAgICAgeyBsYWJlbDogIkNBTiAtIFBFSSDEkOG6p3UgdMawIiwgdmFsdWU6ICJDQU4gLSBQRUkgxJDhuqd1IHTGsCIgfSwKICAgICAgICAgICAgeyBsYWJlbDogIkNBTiAtIFNVViIsIHZhbHVlOiAiQ0FOIC0gU1VWIiB9CiAgICAgICAgXSwKICAgICAgICAixJDhu4tuaCBjxrAgQ2jDonUgw4J1IjogWwogICAgICAgICAgICB7IGxhYmVsOiAiUXXhu5FjIHThur8gaMOzYSBkb2FuaCBuZ2hp4buHcCIsIHZhbHVlOiAiUXXhu5FjIHThur8gaMOzYSBkb2FuaCBuZ2hp4buHcCIgfSwKICAgICAgICAgICAgeyBsYWJlbDogIlRo4buleSBT4bu5IiwgdmFsdWU6ICJUaOG7pXkgU+G7uSIgfSwKICAgICAgICAgICAgeyBsYWJlbDogIlF14buRYyB04buLY2ggSHVuZ2FyeSIsIHZhbHVlOiAiUXXhu5FjIHThu4tjaCBIdW5nYXJ5IiB9LAogICAgICAgICAgICB7IGxhYmVsOiAiUXV54buBbiBjxrAgdHLDuiBIdW5nYXJ5IiwgdmFsdWU6ICJRdXnhu4FuIGPGsCB0csO6IEh1bmdhcnkiIH0sCiAgICAgICAgICAgIHsgbGFiZWw6ICJTbG92YWtpYSIsIHZhbHVlOiAiU2xvdmFraWEiIH0sCiAgICAgICAgICAgIHsgbGFiZWw6ICJTbG92ZW5pYSIsIHZhbHVlOiAiU2xvdmVuaWEiIH0sCiAgICAgICAgICAgIHsgbGFiZWw6ICJQaMOhcCIsIHZhbHVlOiAiUGjDoXAiIH0sCiAgICAgICAgICAgIHsgbGFiZWw6ICJNYWx0YSIsIHZhbHVlOiAiTWFsdGEiIH0KICAgICAgICBdLAogICAgICAgICLEkOG7i25oIGPGsCBCdWxnYXJpYSI6IFsKICAgICAgICAgICAgeyBsYWJlbDogIkJ1bGdhcmlhIC0gUFAiLCB2YWx1ZTogIkJ1bGdhcmlhIC0gUFAiIH0sCiAgICAgICAgICAgIHsgbGFiZWw6ICJCdWxnYXJpYSAtIFBSIiwgdmFsdWU6ICJCdWxnYXJpYSAtIFBSIiB9CiAgICAgICAgXSwKICAgICAgICAixJDhu4tuaCBjxrAgTmV3WmVhbGFuZCI6IFsKICAgICAgICAgICAgeyBsYWJlbDogIk5aTCAtIEFJUCIsIHZhbHVlOiAiTlpMIC0gQUlQIiB9CiAgICAgICAgXSwKICAgICAgICAixJDhu4tuaCBjxrAgSHkgTOG6oXAiOiBbCiAgICAgICAgICAgIHsgbGFiZWw6ICJHb2xkZW4gVmlzYSBHcmVlY2UiLCB2YWx1ZTogIkdvbGRlbiBWaXNhIEdyZWVjZSIgfQogICAgICAgIF0sCiAgICAgICAgIkLhuqV0IMSR4buZbmcgc+G6o24iOiBbCiAgICAgICAgICAgIHsgbGFiZWw6ICJVSyAtIELEkFMiLCB2YWx1ZTogIlVLIC0gQsSQUyIgfSwKICAgICAgICAgICAgeyBsYWJlbDogIkFVUyAtIELEkFMiLCB2YWx1ZTogIkFVUyAtIELEkFMiIH0sCiAgICAgICAgICAgIHsgbGFiZWw6ICJEVUJBSSAtIELEkFMiLCB2YWx1ZTogIkRVQkFJIC0gQsSQUyIgfQogICAgICAgIF0KICAgIH07CiAgICAKICAgIGNvbnN0IHBhcmVudFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJkYW5oX211Y19xdWFuX3RhbSIpOwogICAgY29uc3QgY2hpbGRTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiY2h1b25nX3RyaW5oX3F1YW5fdGFtIik7CgogICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrZXkgPT4gewogICAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIm9wdGlvbiIpOwogICAgICAgIG9wdC52YWx1ZSA9IGtleTsKICAgICAgICBvcHQudGV4dENvbnRlbnQgPSBrZXk7CiAgICAgICAgcGFyZW50U2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7CiAgICB9KTsKCiAgICBwYXJlbnRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcigiY2hhbmdlIiwgZnVuY3Rpb24oKSB7CiAgICAgICAgY2hpbGRTZWxlY3QuaW5uZXJIVE1MID0gJzxvcHRpb24gdmFsdWU9IiI+Q2jGsMahbmcgdHLDrG5oIHF1YW4gdMOibSo8L29wdGlvbj4nOwogICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy52YWx1ZTsKCiAgICAgICAgaWYgKHNlbGVjdGVkICYmIGRhdGFbc2VsZWN0ZWRdKSB7CiAgICAgICAgICAgIGNoaWxkU2VsZWN0LmRpc2FibGVkID0gZmFsc2U7IC8vIGVuYWJsZQogICAgICAgICAgICBkYXRhW3NlbGVjdGVkXS5mb3JFYWNoKGl0ZW0gPT4gewogICAgICAgICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJvcHRpb24iKTsKICAgICAgICAgICAgb3B0LnZhbHVlID0gaXRlbS52YWx1ZTsKICAgICAgICAgICAgb3B0LnRleHRDb250ZW50ID0gaXRlbS5sYWJlbDsKICAgICAgICAgICAgY2hpbGRTZWxlY3QuYXBwZW5kQ2hpbGQob3B0KTsKICAgICAgICAgICAgfSk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgY2hpbGRTZWxlY3QuZGlzYWJsZWQgPSB0cnVlOyAvLyBkaXNhYmxlIGzhuqFpCiAgICAgICAgfQogICAgfSk7Cg=="
                                        data-rocket-status="executed">
    const data = {
        "Định cư Úc tay nghề": [
            { label: "AUS - Visa Úc", value: "AUS - Visa Úc" }
        ],
        "Định cư Úc đầu tư": [
            { label: "AUS - NIV", value: "AUS - NIV" }
        ],
        "Định cư Mỹ tay nghề": [
            { label: "EB-3", value: "EB-3" }
        ],
        "Định cư Mỹ Doanh nhân/Đầu tư": [
            { label: "USA - EB2 - NIW", value: "USA - EB2 - NIW" },
            { label: "USA - L1A - EB1C", value: "USA - L1A - EB1C" },
            { label: "Visa EB-5", value: "Visa EB-5" }
        ],
        "Định cư Canada lao động": [
            { label: "PEI - Tay nghề Canada", value: "PEI - Tay nghề Canada" },
            { label: "Express Entry Canada", value: "Express Entry Canada" }
        ],
        "Định cư Canada đầu tư": [
            { label: "CAN - PEI Đầu tư", value: "CAN - PEI Đầu tư" },
            { label: "CAN - SUV", value: "CAN - SUV" }
        ],
        "Định cư Châu Âu": [
            { label: "Quốc tế hóa doanh nghiệp", value: "Quốc tế hóa doanh nghiệp" },
            { label: "Thụy Sỹ", value: "Thụy Sỹ" },
            { label: "Quốc tịch Hungary", value: "Quốc tịch Hungary" },
            { label: "Quyền cư trú Hungary", value: "Quyền cư trú Hungary" },
            { label: "Slovakia", value: "Slovakia" },
            { label: "Slovenia", value: "Slovenia" },
            { label: "Pháp", value: "Pháp" },
            { label: "Malta", value: "Malta" }
        ],
        "Định cư Bulgaria": [
            { label: "Bulgaria - PP", value: "Bulgaria - PP" },
            { label: "Bulgaria - PR", value: "Bulgaria - PR" }
        ],
        "Định cư NewZealand": [
            { label: "NZL - AIP", value: "NZL - AIP" }
        ],
        "Định cư Hy Lạp": [
            { label: "Golden Visa Greece", value: "Golden Visa Greece" }
        ],
        "Bất động sản": [
            { label: "UK - BĐS", value: "UK - BĐS" },
            { label: "AUS - BĐS", value: "AUS - BĐS" },
            { label: "DUBAI - BĐS", value: "DUBAI - BĐS" }
        ]
    };
    
    const parentSelect = document.getElementById("danh_muc_quan_tam");
    const childSelect = document.getElementById("chuong_trinh_quan_tam");

    Object.keys(data).forEach(key => {
        const opt = document.createElement("option");
        opt.value = key;
        opt.textContent = key;
        parentSelect.appendChild(opt);
    });

    parentSelect.addEventListener("change", function() {
        childSelect.innerHTML = '<option value="">Chương trình quan tâm*</option>';
        const selected = this.value;

        if (selected && data[selected]) {
            childSelect.disabled = false; // enable
            data[selected].forEach(item => {
            const opt = document.createElement("option");
            opt.value = item.value;
            opt.textContent = item.label;
            childSelect.appendChild(opt);
            });
        } else {
            childSelect.disabled = true; // disable lại
        }
    });
</script>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <script
                src="data:text/javascript;base64,d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHsKICAgICAgICBqUXVlcnkod2luZG93KS5vbigibG9hZCIsIGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgY291bnRyeV9mdW5jdGlvbigpOwogICAgICAgIH0pOwogICAgICAgIGZ1bmN0aW9uIGNvdW50cnlfZnVuY3Rpb24oKXsKICAgICAgICAgICAgalF1ZXJ5KCcuYmFubmVyLWV2ZW50cyAuc2ktYmFubmVycycpLnNsaWNrKHsKICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsCiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbCiAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LAogICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSwKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA4MjAsCiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgIF0KICAgICAgICAgICAgfSk7CiAgICAgICAgfQogICAgfSk7"
                data-rocket-status="executed">window.addEventListener('DOMContentLoaded', function() {
        jQuery(window).on("load", function () {
            country_function();
        });
        function country_function(){
            jQuery('.banner-events .si-banners').slick({
                dots: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 820,
                        settings: {
                            arrows: false,
                        }
                    },
                    
                ]
            });
        }
    });</script>
            <footer data-wpr-lazyrender="1" class="si-footer">
                <div class="container">
                    <div class="row">
                        <div class="py-4 col-12 col-md-5">
                            <div class="si-footer-tt">ĐỊA CHỈ VĂN PHÒNG</div>
                            <div class="info">
                                <div>
                                    <p>
                                        <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                                            alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-1.png"
                                            data-lazy-src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-1.png"><noscript><img
                                                src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-1.png"
                                                alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-1.png"></noscript><span>Tầng
                                            44, Bitexco Financial Tower, 02 Hải Triều, Bến Nghé, Quận 1</span>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                                            alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-2.png"
                                            data-lazy-src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-2.png"><noscript><img
                                                src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-2.png"
                                                alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-2.png"></noscript><a
                                            href="tel:+84979355355">(+84) 979 355 355</a>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                                            alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-3.png"
                                            data-lazy-src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-3.png"><noscript><img
                                                src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-3.png"
                                                alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-3.png"></noscript><a
                                            href="mailto:info@si.im">info@si.im</a>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                                            alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"
                                            data-lazy-src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"><noscript><img
                                                src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"
                                                alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"></noscript><span>Suite
                                            417, 480 Collins Street, Melbourne, VIC 3000</span>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                                            alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"
                                            data-lazy-src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"><noscript><img
                                                src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"
                                                alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"></noscript><span>Tầng
                                            19, Capital Place, 29 Liễu Giai, Ba Đình, Hà Nội</span>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                                            alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"
                                            data-lazy-src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"><noscript><img
                                                src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"
                                                alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"></noscript><span>700
                                            12th Street, N.W., Suite 700, Washington, DC, US 20005</span>
                                    </p>
                                </div>
                            </div>
                            <p class="social">
                                <a target="_blank" title="Facebook" href="https://www.facebook.com/SIGroupVietNam"
                                    class="Facebook"></a>
                                <a target="_blank" title="Zalo" href="https://zalo.me/sigroupvn" class="Zalo"></a>
                                <a target="_blank" title="Linkedin" href="https://www.linkedin.com/company/90769349/"
                                    class="Linkedin"></a>
                                <a target="_blank" title="Youtube" href="https://www.youtube.com/@SI-Group"
                                    class="Youtube"></a>
                            </p>
                        </div>
                        <div class="py-4 col-12 col-md-3">
                            <div class="si-footer-tt">GIỚI THIỆU</div>
                            <div class="menu-gioi-thieu-container">
                                <ul id="menu-gioi-thieu" class="">
                                    <li class="menu-item"><a
                                            href="https://sigroup.vn/solution-international-group/">Giới thiệu SI
                                            Group</a></li>
                                    <li class="menu-item current-menu-item"><a
                                            href="https://sigroup.vn/su-kien-si-group/" aria-current="page">Sự Kiện</a>
                                    </li>
                                    <li class="menu-item"><a href="https://sigroup.vn/tin-tuc-si-group/">Tin Tức</a>
                                    </li>
                                    <li class="menu-item"><a href="https://sigroup.vn/lien-he-si-group/">Liên hệ SI
                                            Group</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="py-4 col-12 col-md-4">
                            <div class="si-footer-tt">CHƯƠNG TRÌNH</div>
                            <div class="menu-chuong-trinh-container">
                                <ul id="menu-chuong-trinh" class="">
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-uc/">Định cư
                                            Úc</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-canada/">Định cư
                                            Canada</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-my/">Định cư
                                            Mỹ</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-eu/">Định cư
                                            EU</a></li>
                                    <li class="menu-item"><a
                                            href="https://sigroup.vn/quoc-gia/dinh-cu-cac-nuoc-khac/">Định cư các nước
                                            khác</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-y/">Định cư Ý</a>
                                    </li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-slovakia/">Định
                                            cư Slovakia</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-hungary/">Định cư
                                            Hungary</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-malta/">Định cư
                                            Malta</a></li>
                                    <li class="menu-item"><a
                                            href="https://sigroup.vn/quoc-gia/dinh-cu-vuong-quoc-anh/">Định cư Anh</a>
                                    </li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-bo-dao-nha/">Định
                                            cư Bồ Đào Nha</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-hy-lap/">Định cư
                                            Hy Lạp</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-dao-sip/">Định cư
                                            Đảo Síp</a></li>
                                    <li class="menu-item"><a
                                            href="https://sigroup.vn/quoc-gia/dinh-cu-tay-ban-nha/">Định cư Tây Ban
                                            Nha</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-bulgaria/">Định
                                            cư Bulgaria</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-uae/">Định cư
                                            UAE</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-grenada/">Định cư
                                            Grenada</a></li>
                                    <li class="menu-item"><a
                                            href="https://sigroup.vn/quoc-gia/dinh-cu-antigua-barbuda/">Định cư Antigua
                                            &amp; Barbuda</a></li>
                                    <li class="menu-item"><a
                                            href="https://sigroup.vn/quoc-gia/dinh-cu-st-kitts-nevis/">Định cư St. Kitts
                                            &amp; Nevis</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-dominica/">Định
                                            cư Dominica</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-singapore/">Định
                                            cư Singapore</a></li>
                                    <li class="menu-item"><a
                                            href="https://sigroup.vn/quoc-gia/dinh-cu-saint-lucia/">Định cư Saint
                                            Lucia</a></li>
                                    <li class="menu-item"><a
                                            href="https://sigroup.vn/quoc-gia/dinh-cu-new-zealand/">Định cư New
                                            Zealand</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-vanuatu/">Định cư
                                            Vanuatu</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-tho-nhi-ky/">Định
                                            cư Thổ Nhĩ Kỳ</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-malaysia/">Định
                                            cư Malaysia</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-ireland/">Định cư
                                            Ireland</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-latvia/">Định cư
                                            Latvia</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-phap/">Định cư
                                            Pháp</a></li>
                                    <li class="menu-item"><a href="https://sigroup.vn/quoc-gia/dinh-cu-toan-cau">Định cư
                                            toàn cầu</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="copyright">© 2022 SI GROUP. All Rights Reserved By SI GROUP</div>
                </div>
            </footer>
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
import Logo from '~/components/Logo.vue'
import "@/assets/css/slick.css"
import "@/assets/css/sig-core.css"
export default {
    components: {
        Logo
    }
}
</script>

<style scoped>
.event-detail h1 {
    font-size: var(--size-20);
    font-family: var(--font-black);
    color: var(--si-brown-color)
}

.event-detail .si-btn {
    margin: 0
}

.event-detail .content .wp-caption {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: auto !important;
    height: auto
}

.event-detail .content img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: auto;
    height: auto
}

.event-detail .content p {
    margin: 12px 0
}

.event-detail .content a {
    color: var(--si-brown-color)
}

.event-detail .content table {
    border-collapse: collapse
}

.event-detail .content table tr td {
    padding: 3px 6px;
    border: 1px solid #000
}

.event-page .si-event .img .d-flex {
    font-size: var(--size-16)
}

.event-page .si-banners h2 {
    font-family: var(--font-heavy)
}

.event-page .si-banners .banner-wrap span {
    font-family: var(--font-stack)
}

.si-prev {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/si-prev.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover
}

.si-next {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/si-next.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover
}

.si-pagi a:hover .si-prev {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/si-prev-white.png)
}

.si-pagi a:hover .si-next {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/si-next-white.png)
}

@media (max-width: 820px) {
    .event-page .banner-events {
        height: auto
    }

    /* .event-page .si-banners .bg-banner {
        background: none !important
    } */

    .event-page .si-banners .slick-dots {
        bottom: auto;
        top: 200px
    }

    .event-page .si-event h2 {
        height: auto
    }
}
</style>