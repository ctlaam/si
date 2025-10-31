<template>
    <div id="site">
        <div id="site-inner">   
            <main class="main-wrapper">
                <div class="mx-auto home-page si-blog si-form">
                    <div class="container">
                        <div class="py-40 row">
                            <div class="col-12 col-md-6 info-contact">
                                <div class="si-form-tt">Liên Hệ Tư Vấn</div>
                                <div class="mt-5">
                                    Điều làm nên khác biệt của HOÀNG HÀ Group chính là từng giải pháp được cá nhân hóa phù hợp
                                    với nhu cầu, điều kiện riêng biệt của từng Quý khách hàng. Chúng tôi cung cấp giải
                                    pháp tối ưu nhất dành riêng cho Quý khách, đồng thời cam kết tỷ lệ thành công và
                                    thời gian hoàn thành cho từng dịch vụ.<br>Để được tư vấn chính xác, nhanh chóng và
                                    bảo mật, Quý khách liên hệ trực tiếp Hotline <a href="#">(+84) 979
                                        355 355</a> hoặc để lại thông tin. Đội ngũ với hơn 20 năm kinh nghiệm của SI
                                    Group luôn sẵn sàng để kết nối và tư vấn miễn phí. </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <form ref="contactForm" class="home-contact" data-hs-cf-bound="true">
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="firstname" name="firstname"
                                            placeholder="Họ và Tên*">
                                    </div>
                                    <div class="row">
                                        <div class="mb-3 col-12 col-md-6 d-none">
                                            <input type="number" class="form-control" id="your_age" name="your_age"
                                                value="2025" placeholder="Năm sinh*">
                                        </div>
                                        <div class="mb-3 col-12">
                                            <input type="text" class="form-control" id="phone" name="phone"
                                                placeholder="Số điện thoại*">
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <input type="email" class="form-control" id="email" name="email"
                                            placeholder="Email*">
                                    </div>
                                    <div class="mb-3">
                                        <select class="form-control" name="danh_muc_quan_tam" id="danh_muc_quan_tam">
                                            <option value="">Danh mục quan tâm*</option>
                                            <option value="Định cư Úc tay nghề">Định cư Úc tay nghề</option>
                                            <option value="Định cư Úc đầu tư">Định cư Úc đầu tư</option>
                                            <option value="Định cư Mỹ tay nghề">Định cư Mỹ tay nghề</option>
                                            <option value="Định cư Mỹ Doanh nhân/Đầu tư">Định cư Mỹ Doanh nhân/Đầu tư
                                            </option>
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
                                            id="chuong_trinh_quan_tam" >
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
                            <div class="col-12">
                                <div class="mt-5">
                                   
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
        
    }
}
</script>

