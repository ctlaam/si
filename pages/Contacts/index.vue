<template>
    <div id="site">
        <div id="site-inner">   
            <main class="main-wrapper">
                <div class="home-page si-blog si-form mx-auto">
                    <div class="container">
                        <div class="row py-40">
                            <div class="col-12 col-md-6 info-contact">
                                <div class="si-form-tt">Liên Hệ Tư Vấn</div>
                                <div class="mt-5">
                                    Điều làm nên khác biệt của SI Group chính là từng giải pháp được cá nhân hóa phù hợp
                                    với nhu cầu, điều kiện riêng biệt của từng Quý khách hàng. Chúng tôi cung cấp giải
                                    pháp tối ưu nhất dành riêng cho Quý khách, đồng thời cam kết tỷ lệ thành công và
                                    thời gian hoàn thành cho từng dịch vụ.<br>Để được tư vấn chính xác, nhanh chóng và
                                    bảo mật, Quý khách liên hệ trực tiếp Hotline <a href="tel:+84979355355">(+84) 979
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
                            <div class="col-12">
                                <div class="mt-5">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31355.762447137946!2d106.68483889114974!3d10.775245758253924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9fbe8b6dcb%3A0xad0dafc146a62287!2sSI%20GROUP%20JSC!5e0!3m2!1sen!2s!4v1693896106355!5m2!1sen!2s"
                                        width="100%" height="450" style="border: 0" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer class="si-footer">
                <div class="container">
                    <div class="row">
                        <div class="py-4 col-12 col-md-5">
                            <div class="si-footer-tt">ĐỊA CHỈ VĂN PHÒNG</div>
                            <div class="info">
                                <div>
                                    <p>
                                        <img src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-1.png"
                                            alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-1.png"
                                            data-lazy-src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-1.png"
                                            data-ll-status="loaded" class="entered lazyloaded"><noscript><img
                                                src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-1.png"
                                                alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-1.png"></noscript><span>Tầng
                                            44, Bitexco Financial Tower, 02 Hải Triều, Bến Nghé, Quận 1</span>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <img src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-2.png"
                                            alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-2.png"
                                            data-lazy-src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-2.png"
                                            data-ll-status="loaded" class="entered lazyloaded"><noscript><img
                                                src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-2.png"
                                                alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-2.png"></noscript><a
                                            href="tel:+84979355355">(+84) 979 355 355</a>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <img src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-3.png"
                                            alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-3.png"
                                            data-lazy-src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-3.png"
                                            data-ll-status="loaded" class="entered lazyloaded"><noscript><img
                                                src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-3.png"
                                                alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-3.png"></noscript><a
                                            href="mailto:info@si.im">info@si.im</a>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <img src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"
                                            alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"
                                            data-lazy-src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"
                                            data-ll-status="loaded" class="entered lazyloaded"><noscript><img
                                                src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"
                                                alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"></noscript><span>Suite
                                            417, 480 Collins Street, Melbourne, VIC 3000</span>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <img src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"
                                            alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"
                                            data-lazy-src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"
                                            data-ll-status="loaded" class="entered lazyloaded"><noscript><img
                                                src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"
                                                alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"></noscript><span>Tầng
                                            19, Capital Place, 29 Liễu Giai, Ba Đình, Hà Nội</span>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <img src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"
                                            alt="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"
                                            data-lazy-src="https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-ft-4.png"
                                            data-ll-status="loaded" class="entered lazyloaded"><noscript><img
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
                                    <li class="menu-item"><a href="https://sigroup.vn/su-kien-si-group/">Sự Kiện</a>
                                    </li>
                                    <li class="menu-item"><a href="https://sigroup.vn/tin-tuc-si-group/">Tin Tức</a>
                                    </li>
                                    <li class="menu-item current-menu-item"><a
                                            href="https://sigroup.vn/lien-he-si-group/" aria-current="page">Liên hệ SI
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

export default {
    components: {
        Logo
    }
}
</script>

<style scoped>
@charset "UTF-8";:root,[data-bs-theme="light"] {
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-black: #000;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-gray-100: #f8f9fa;
    --bs-gray-200: #e9ecef;
    --bs-gray-300: #dee2e6;
    --bs-gray-400: #ced4da;
    --bs-gray-500: #adb5bd;
    --bs-gray-600: #6c757d;
    --bs-gray-700: #495057;
    --bs-gray-800: #343a40;
    --bs-gray-900: #212529;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-primary-rgb: 13, 110, 253;
    --bs-secondary-rgb: 108, 117, 125;
    --bs-success-rgb: 25, 135, 84;
    --bs-info-rgb: 13, 202, 240;
    --bs-warning-rgb: 255, 193, 7;
    --bs-danger-rgb: 220, 53, 69;
    --bs-light-rgb: 248, 249, 250;
    --bs-dark-rgb: 33, 37, 41;
    --bs-primary-text-emphasis: #052c65;
    --bs-secondary-text-emphasis: #2b2f32;
    --bs-success-text-emphasis: #0a3622;
    --bs-info-text-emphasis: #055160;
    --bs-warning-text-emphasis: #664d03;
    --bs-danger-text-emphasis: #58151c;
    --bs-light-text-emphasis: #495057;
    --bs-dark-text-emphasis: #495057;
    --bs-primary-bg-subtle: #cfe2ff;
    --bs-secondary-bg-subtle: #e2e3e5;
    --bs-success-bg-subtle: #d1e7dd;
    --bs-info-bg-subtle: #cff4fc;
    --bs-warning-bg-subtle: #fff3cd;
    --bs-danger-bg-subtle: #f8d7da;
    --bs-light-bg-subtle: #fcfcfd;
    --bs-dark-bg-subtle: #ced4da;
    --bs-primary-border-subtle: #9ec5fe;
    --bs-secondary-border-subtle: #c4c8cb;
    --bs-success-border-subtle: #a3cfbb;
    --bs-info-border-subtle: #9eeaf9;
    --bs-warning-border-subtle: #ffe69c;
    --bs-danger-border-subtle: #f1aeb5;
    --bs-light-border-subtle: #e9ecef;
    --bs-dark-border-subtle: #adb5bd;
    --bs-white-rgb: 255, 255, 255;
    --bs-black-rgb: 0, 0, 0;
    --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --bs-gradient: linear-gradient( 180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0) );
    --bs-body-font-family: var(--bs-font-sans-serif);
    --bs-body-font-size: 1rem;
    --bs-body-font-weight: 400;
    --bs-body-line-height: 1.5;
    --bs-body-color: #212529;
    --bs-body-color-rgb: 33, 37, 41;
    --bs-body-bg: #fff;
    --bs-body-bg-rgb: 255, 255, 255;
    --bs-emphasis-color: #000;
    --bs-emphasis-color-rgb: 0, 0, 0;
    --bs-secondary-color: rgba(33, 37, 41, 0.75);
    --bs-secondary-color-rgb: 33, 37, 41;
    --bs-secondary-bg: #e9ecef;
    --bs-secondary-bg-rgb: 233, 236, 239;
    --bs-tertiary-color: rgba(33, 37, 41, 0.5);
    --bs-tertiary-color-rgb: 33, 37, 41;
    --bs-tertiary-bg: #f8f9fa;
    --bs-tertiary-bg-rgb: 248, 249, 250;
    --bs-heading-color: inherit;
    --bs-link-color: #0d6efd;
    --bs-link-color-rgb: 13, 110, 253;
    --bs-link-decoration: underline;
    --bs-link-hover-color: #0a58ca;
    --bs-link-hover-color-rgb: 10, 88, 202;
    --bs-code-color: #d63384;
    --bs-highlight-color: #212529;
    --bs-highlight-bg: #fff3cd;
    --bs-border-width: 1px;
    --bs-border-style: solid;
    --bs-border-color: #dee2e6;
    --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
    --bs-border-radius: 0.375rem;
    --bs-border-radius-sm: 0.25rem;
    --bs-border-radius-lg: 0.5rem;
    --bs-border-radius-xl: 1rem;
    --bs-border-radius-xxl: 2rem;
    --bs-border-radius-2xl: var(--bs-border-radius-xxl);
    --bs-border-radius-pill: 50rem;
    --bs-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    --bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    --bs-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
    --bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);
    --bs-focus-ring-width: 0.25rem;
    --bs-focus-ring-opacity: 0.25;
    --bs-focus-ring-color: rgba(13, 110, 253, 0.25);
    --bs-form-valid-color: #198754;
    --bs-form-valid-border-color: #198754;
    --bs-form-invalid-color: #dc3545;
    --bs-form-invalid-border-color: #dc3545
}

*,*::before,*::after {
    box-sizing: border-box
}

@media (prefers-reduced-motion:no-preference) {
    :root {
        scroll-behavior: smooth
    }
}

body {
    margin: 0;
    font-family: var(--bs-body-font-family);
    font-size: var(--bs-body-font-size);
    font-weight: var(--bs-body-font-weight);
    line-height: var(--bs-body-line-height);
    color: var(--bs-body-color);
    text-align: var(--bs-body-text-align);
    background-color: var(--bs-body-bg);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0)
}

hr {
    margin: 1rem 0;
    color: inherit;
    border: 0;
    border-top: var(--bs-border-width) solid;
    opacity: .25
}

h6,.h6,h5,.h5,h4,.h4,h3,.h3,h2,.h2,h1,.h1 {
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
    color: var(--bs-heading-color)
}

h1,.h1 {
    font-size: calc(1.375rem + 1.5vw)
}

@media (min-width: 1200px) {
    h1,.h1 {
        font-size:2.5rem
    }
}

h2,.h2 {
    font-size: calc(1.325rem + 0.9vw)
}

@media (min-width: 1200px) {
    h2,.h2 {
        font-size:2rem
    }
}

h3,.h3 {
    font-size: calc(1.3rem + 0.6vw)
}

@media (min-width: 1200px) {
    h3,.h3 {
        font-size:1.75rem
    }
}

h4,.h4 {
    font-size: calc(1.275rem + 0.3vw)
}

@media (min-width: 1200px) {
    h4,.h4 {
        font-size:1.5rem
    }
}

h5,.h5 {
    font-size: 1.25rem
}

h6,.h6 {
    font-size: 1rem
}

p {
    margin-top: 0;
    margin-bottom: 1rem
}

ol,ul {
    padding-left: 2rem
}

ol,ul,dl {
    margin-top: 0;
    margin-bottom: 1rem
}

ol ol,ul ul,ol ul,ul ol {
    margin-bottom: 0
}

dt {
    font-weight: 700
}

dd {
    margin-bottom: .5rem;
    margin-left: 0
}

blockquote {
    margin: 0 0 1rem
}

b,strong {
    font-weight: bolder
}

sub,sup {
    position: relative;
    font-size: .75em;
    line-height: 0;
    vertical-align: baseline
}

sub {
    bottom: -.25em
}

sup {
    top: -.5em
}

a {
    color: rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));
    text-decoration: underline
}

a:hover {
    --bs-link-color-rgb: var(--bs-link-hover-color-rgb)
}

a:not([href]):not([class]),a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none
}

figure {
    margin: 0 0 1rem
}

img,svg {
    vertical-align: middle
}

table {
    caption-side: bottom;
    border-collapse: collapse
}

caption {
    padding-top: .5rem;
    padding-bottom: .5rem;
    color: var(--bs-secondary-color);
    text-align: left
}

th {
    text-align: inherit;
    text-align: -webkit-match-parent
}

thead,tbody,tfoot,tr,td,th {
    border-color: inherit;
    border-style: solid;
    border-width: 0
}

label {
    display: inline-block
}

button {
    border-radius: 0
}

button:focus:not(:focus-visible) {
    outline: 0
}

input,button,select,optgroup,textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit
}

button,select {
    text-transform: none
}

[role="button"] {
    cursor: pointer
}

select {
    word-wrap: normal
}

select:disabled {
    opacity: 1
}

[list]:not([type="date"]):not([type="datetime-local"]):not([type="month"]):not([type="week"]):not([type="time"])::-webkit-calendar-picker-indicator {
    display: none!important
}

button,[type="button"],[type="reset"],[type="submit"] {
    -webkit-appearance: button
}

button:not(:disabled),[type="button"]:not(:disabled),[type="reset"]:not(:disabled),[type="submit"]:not(:disabled) {
    cursor: pointer
}

::-moz-focus-inner {
    padding: 0;
    border-style: none
}

textarea {
    resize: vertical
}

fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0
}

legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: .5rem;
    font-size: calc(1.275rem + 0.3vw);
    line-height: inherit
}

@media (min-width: 1200px) {
    legend {
        font-size:1.5rem
    }
}

legend+* {
    clear: left
}

output {
    display: inline-block
}

iframe {
    border: 0
}

summary {
    display: list-item;
    cursor: pointer
}

[hidden] {
    display: none!important
}

.list-unstyled {
    padding-left: 0;
    list-style: none
}

.img-fluid {
    max-width: 100%;
    height: auto
}

.figure {
    display: inline-block
}

.container {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-right: auto;
    margin-left: auto
}

@media (min-width: 576px) {
    .container {
        max-width:540px
    }
}

@media (min-width: 768px) {
    .container {
        max-width:720px
    }
}

@media (min-width: 992px) {
    .container {
        max-width:960px
    }
}

@media (min-width: 1200px) {
    .container {
        max-width:1140px
    }
}

@media (min-width: 1400px) {
    .container {
        max-width:1320px
    }
}

:root {
    --bs-breakpoint-xs: 0;
    --bs-breakpoint-sm: 576px;
    --bs-breakpoint-md: 768px;
    --bs-breakpoint-lg: 992px;
    --bs-breakpoint-xl: 1200px;
    --bs-breakpoint-xxl: 1400px
}

.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x))
}

.row>* {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y)
}

.col {
    flex: 1 0 0%
}

.col-1 {
    flex: 0 0 auto;
    width: 8.33333333%
}

.col-2 {
    flex: 0 0 auto;
    width: 16.66666667%
}

.col-3 {
    flex: 0 0 auto;
    width: 25%
}

.col-4 {
    flex: 0 0 auto;
    width: 33.33333333%
}

.col-5 {
    flex: 0 0 auto;
    width: 41.66666667%
}

.col-6 {
    flex: 0 0 auto;
    width: 50%
}

.col-7 {
    flex: 0 0 auto;
    width: 58.33333333%
}

.col-8 {
    flex: 0 0 auto;
    width: 66.66666667%
}

.col-9 {
    flex: 0 0 auto;
    width: 75%
}

.col-10 {
    flex: 0 0 auto;
    width: 83.33333333%
}

.col-11 {
    flex: 0 0 auto;
    width: 91.66666667%
}

@media (min-width: 768px) {
    .col-md {
        flex:1 0 0%
    }

    .col-md-auto {
        flex: 0 0 auto;
        width: auto
    }

    .col-md-1 {
        flex: 0 0 auto;
        width: 8.33333333%
    }

    .col-md-2 {
        flex: 0 0 auto;
        width: 16.66666667%
    }

    .col-md-3 {
        flex: 0 0 auto;
        width: 25%
    }

    .col-md-4 {
        flex: 0 0 auto;
        width: 33.33333333%
    }

    .col-md-5 {
        flex: 0 0 auto;
        width: 41.66666667%
    }

    .col-md-6 {
        flex: 0 0 auto;
        width: 50%
    }

    .col-md-7 {
        flex: 0 0 auto;
        width: 58.33333333%
    }

    .col-md-8 {
        flex: 0 0 auto;
        width: 66.66666667%
    }

    .col-md-9 {
        flex: 0 0 auto;
        width: 75%
    }

    .col-md-10 {
        flex: 0 0 auto;
        width: 83.33333333%
    }

    .col-md-11 {
        flex: 0 0 auto;
        width: 91.66666667%
    }

    .col-md-12 {
        flex: 0 0 auto;
        width: 100%
    }
}

.table {
    --bs-table-color-type: initial;
    --bs-table-bg-type: initial;
    --bs-table-color-state: initial;
    --bs-table-bg-state: initial;
    --bs-table-color: var(--bs-emphasis-color);
    --bs-table-bg: var(--bs-body-bg);
    --bs-table-border-color: var(--bs-border-color);
    --bs-table-accent-bg: transparent;
    --bs-table-striped-color: var(--bs-emphasis-color);
    --bs-table-striped-bg: rgba(var(--bs-emphasis-color-rgb), 0.05);
    --bs-table-active-color: var(--bs-emphasis-color);
    --bs-table-active-bg: rgba(var(--bs-emphasis-color-rgb), 0.1);
    --bs-table-hover-color: var(--bs-emphasis-color);
    --bs-table-hover-bg: rgba(var(--bs-emphasis-color-rgb), 0.075);
    width: 100%;
    margin-bottom: 1rem;
    vertical-align: top;
    border-color: var(--bs-table-border-color)
}

.table>:not(caption)>*>* {
    padding: .5rem .5rem;
    color: var(--bs-table-color-state,var(--bs-table-color-type,var(--bs-table-color)));
    background-color: var(--bs-table-bg);
    border-bottom-width: var(--bs-border-width);
    box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,var(--bs-table-accent-bg)))
}

.table>tbody {
    vertical-align: inherit
}

.table>thead {
    vertical-align: bottom
}

.form-label {
    margin-bottom: .5rem
}

.form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--bs-body-color);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: var(--bs-body-bg);
    background-clip: padding-box;
    border: var(--bs-border-width) solid var(--bs-border-color);
    border-radius: var(--bs-border-radius);
    transition: border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out
}

@media (prefers-reduced-motion:reduce) {
    .form-control {
        transition: none
    }
}

.form-control[type="file"] {
    overflow: hidden
}

.form-control[type="file"]:not(:disabled):not([readonly]) {
    cursor: pointer
}

.form-control:focus {
    color: var(--bs-body-color);
    background-color: var(--bs-body-bg);
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(13,110,253,.25)
}

.form-control::-moz-placeholder {
    color: var(--bs-secondary-color);
    opacity: 1
}

.form-control::placeholder {
    color: var(--bs-secondary-color);
    opacity: 1
}

.form-control:disabled {
    background-color: var(--bs-secondary-bg);
    opacity: 1
}

textarea.form-control {
    min-height: calc(1.5em + 0.75rem + calc(var(--bs-border-width) * 2))
}

.breadcrumb {
    --bs-breadcrumb-padding-x: 0;
    --bs-breadcrumb-padding-y: 0;
    --bs-breadcrumb-margin-bottom: 1rem;
    --bs-breadcrumb-bg: ;
    --bs-breadcrumb-border-radius: ;
    --bs-breadcrumb-divider-color: var(--bs-secondary-color);
    --bs-breadcrumb-item-padding-x: 0.5rem;
    --bs-breadcrumb-item-active-color: var(--bs-secondary-color);
    display: flex;
    flex-wrap: wrap;
    padding: var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);
    margin-bottom: var(--bs-breadcrumb-margin-bottom);
    font-size: var(--bs-breadcrumb-font-size);
    list-style: none;
    background-color: var(--bs-breadcrumb-bg);
    border-radius: var(--bs-breadcrumb-border-radius)
}

.breadcrumb-item+.breadcrumb-item {
    padding-left: var(--bs-breadcrumb-item-padding-x)
}

.breadcrumb-item+.breadcrumb-item::before {
    float: left;
    padding-right: var(--bs-breadcrumb-item-padding-x);
    color: var(--bs-breadcrumb-divider-color);
    content: var(--bs-breadcrumb-divider,"/")
}

.breadcrumb-item.active {
    color: var(--bs-breadcrumb-item-active-color)
}

.clearfix::after {
    display: block;
    clear: both;
    content: ""
}

.d-inline {
    display: inline!important
}

.d-inline-block {
    display: inline-block!important
}

.d-block {
    display: block!important
}

.d-flex {
    display: flex!important
}

.d-inline-flex {
    display: inline-flex!important
}

.d-none {
    display: none!important
}

.position-relative {
    position: relative!important
}

.position-absolute {
    position: absolute!important
}

.position-fixed {
    position: fixed!important
}

.position-sticky {
    position: -webkit-sticky!important;
    position: sticky!important
}

.w-25 {
    width: 25%!important
}

.w-50 {
    width: 50%!important
}

.w-75 {
    width: 75%!important
}

.w-100 {
    width: 100%!important
}

.w-auto {
    width: auto!important
}

.mw-100 {
    max-width: 100%!important
}

.h-25 {
    height: 25%!important
}

.h-50 {
    height: 50%!important
}

.h-75 {
    height: 75%!important
}

.h-100 {
    height: 100%!important
}

.h-auto {
    height: auto!important
}

.mh-100 {
    max-height: 100%!important
}

.flex-wrap {
    flex-wrap: wrap!important
}

.justify-content-end {
    justify-content: flex-end!important
}

.justify-content-center {
    justify-content: center!important
}

.justify-content-between {
    justify-content: space-between!important
}

.align-items-center {
    align-items: center!important
}

.align-items-stretch {
    align-items: stretch!important
}

.mx-auto {
    margin-right: auto!important;
    margin-left: auto!important
}

.my-0 {
    margin-top: 0!important;
    margin-bottom: 0!important
}

.my-1 {
    margin-top: 0.25rem!important;
    margin-bottom: 0.25rem!important
}

.my-2 {
    margin-top: 0.5rem!important;
    margin-bottom: 0.5rem!important
}

.my-3 {
    margin-top: 1rem!important;
    margin-bottom: 1rem!important
}

.my-4 {
    margin-top: 1.5rem!important;
    margin-bottom: 1.5rem!important
}

.my-5 {
    margin-top: 3rem!important;
    margin-bottom: 3rem!important
}

.my-auto {
    margin-top: auto!important;
    margin-bottom: auto!important
}

.mt-0 {
    margin-top: 0!important
}

.mt-1 {
    margin-top: 0.25rem!important
}

.mt-2 {
    margin-top: 0.5rem!important
}

.mt-3 {
    margin-top: 1rem!important
}

.mt-4 {
    margin-top: 1.5rem!important
}

.mt-5 {
    margin-top: 3rem!important
}

.mt-auto {
    margin-top: auto!important
}

.mb-0 {
    margin-bottom: 0!important
}

.mb-1 {
    margin-bottom: 0.25rem!important
}

.mb-2 {
    margin-bottom: 0.5rem!important
}

.mb-3 {
    margin-bottom: 1rem!important
}

.mb-4 {
    margin-bottom: 1.5rem!important
}

.mb-5 {
    margin-bottom: 3rem!important
}

.mb-auto {
    margin-bottom: auto!important
}

.p-0 {
    padding: 0!important
}

.p-1 {
    padding: 0.25rem!important
}

.p-2 {
    padding: 0.5rem!important
}

.p-3 {
    padding: 1rem!important
}

.p-4 {
    padding: 1.5rem!important
}

.p-5 {
    padding: 3rem!important
}

.px-0 {
    padding-right: 0!important;
    padding-left: 0!important
}

.px-1 {
    padding-right: 0.25rem!important;
    padding-left: 0.25rem!important
}

.px-2 {
    padding-right: 0.5rem!important;
    padding-left: 0.5rem!important
}

.px-3 {
    padding-right: 1rem!important;
    padding-left: 1rem!important
}

.px-4 {
    padding-right: 1.5rem!important;
    padding-left: 1.5rem!important
}

.px-5 {
    padding-right: 3rem!important;
    padding-left: 3rem!important
}

.py-0 {
    padding-top: 0!important;
    padding-bottom: 0!important
}

.py-1 {
    padding-top: 0.25rem!important;
    padding-bottom: 0.25rem!important
}

.py-2 {
    padding-top: 0.5rem!important;
    padding-bottom: 0.5rem!important
}

.py-3 {
    padding-top: 1rem!important;
    padding-bottom: 1rem!important
}

.py-4 {
    padding-top: 1.5rem!important;
    padding-bottom: 1.5rem!important
}

.py-5 {
    padding-top: 3rem!important;
    padding-bottom: 3rem!important
}

.pt-0 {
    padding-top: 0!important
}

.pt-1 {
    padding-top: 0.25rem!important
}

.pt-2 {
    padding-top: 0.5rem!important
}

.pt-3 {
    padding-top: 1rem!important
}

.pt-4 {
    padding-top: 1.5rem!important
}

.pt-5 {
    padding-top: 3rem!important
}

.pb-0 {
    padding-bottom: 0!important
}

.pb-1 {
    padding-bottom: 0.25rem!important
}

.pb-2 {
    padding-bottom: 0.5rem!important
}

.pb-3 {
    padding-bottom: 1rem!important
}

.pb-4 {
    padding-bottom: 1.5rem!important
}

.pb-5 {
    padding-bottom: 3rem!important
}

.text-center {
    text-align: center!important
}

.wp-caption-text {
    text-align: center
}

@media (min-width: 768px) {
    .d-md-block {
        display:block!important
    }

    .d-md-flex {
        display: flex!important
    }

    .d-md-none {
        display: none!important
    }
}

@font-face {
    font-family: "Futura-Bold";
    src: url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Bold.eot);
    src: url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Bold.eot?#iefix") format("embedded-opentype"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Bold.woff2) format("woff2"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Bold.woff) format("woff"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Bold.ttf) format("truetype"),url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Bold.svg#Futura-Bold") format("svg");
    font-weight: 700;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: "FSBaskervilleOldFace";
    src: url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/FSBaskervilleOldFace.eot);
    src: url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/FSBaskervilleOldFace.eot?#iefix") format("embedded-opentype"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/FSBaskervilleOldFace.woff2) format("woff2"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/FSBaskervilleOldFace.woff) format("woff"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/FSBaskervilleOldFace.ttf) format("truetype"),url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/FSBaskervilleOldFace.svg#FSBaskervilleOldFace") format("svg");
    font-weight: 400;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: "Futura-BoldOblique";
    src: url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-BoldOblique.eot);
    src: url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-BoldOblique.eot?#iefix") format("embedded-opentype"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-BoldOblique.woff2) format("woff2"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-BoldOblique.woff) format("woff"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-BoldOblique.ttf) format("truetype"),url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-BoldOblique.svg#Futura-BoldOblique") format("svg");
    font-weight: 700;
    font-style: italic;
    font-display: swap
}

@font-face {
    font-family: "Futura-ExtraBoldOblique";
    src: url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-ExtraBoldOblique.eot);
    src: url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-ExtraBoldOblique.eot?#iefix") format("embedded-opentype"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-ExtraBoldOblique.woff2) format("woff2"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-ExtraBoldOblique.woff) format("woff"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-ExtraBoldOblique.ttf) format("truetype"),url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-ExtraBoldOblique.svg#Futura-ExtraBoldOblique") format("svg");
    font-weight: 700;
    font-style: italic;
    font-display: swap
}

@font-face {
    font-family: "Futura-ExtraBold";
    src: url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-ExtraBold.eot);
    src: url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-ExtraBold.eot?#iefix") format("embedded-opentype"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-ExtraBold.woff2) format("woff2"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-ExtraBold.woff) format("woff"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-ExtraBold.ttf) format("truetype"),url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-ExtraBold.svg#Futura-ExtraBold") format("svg");
    font-weight: 700;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: "Futura-Book";
    src: url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Book.eot);
    src: url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Book.eot?#iefix") format("embedded-opentype"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Book.woff2) format("woff2"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Book.woff) format("woff"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Book.ttf) format("truetype"),url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Book.svg#Futura-Book") format("svg");
    font-weight: 400;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: "Futura-HeavyOblique";
    src: url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-HeavyOblique.eot);
    src: url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-HeavyOblique.eot?#iefix") format("embedded-opentype"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-HeavyOblique.woff2) format("woff2"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-HeavyOblique.woff) format("woff"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-HeavyOblique.ttf) format("truetype"),url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-HeavyOblique.svg#Futura-HeavyOblique") format("svg");
    font-weight: 900;
    font-style: italic;
    font-display: swap
}

@font-face {
    font-family: "Futura-BookOblique";
    src: url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-BookOblique.eot);
    src: url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-BookOblique.eot?#iefix") format("embedded-opentype"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-BookOblique.woff2) format("woff2"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-BookOblique.woff) format("woff"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-BookOblique.ttf) format("truetype"),url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-BookOblique.svg#Futura-BookOblique") format("svg");
    font-weight: 400;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: "Futura-Light";
    src: url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Light.eot);
    src: url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Light.eot?#iefix") format("embedded-opentype"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Light.woff2) format("woff2"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Light.woff) format("woff"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Light.ttf) format("truetype"),url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Light.svg#Futura-Light") format("svg");
    font-weight: 300;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: "Futura-Heavy";
    src: url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Heavy.eot);
    src: url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Heavy.eot?#iefix") format("embedded-opentype"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Heavy.woff2) format("woff2"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Heavy.woff) format("woff"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Heavy.ttf) format("truetype"),url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Heavy.svg#Futura-Heavy") format("svg");
    font-weight: 900;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: "Futura-Oblique";
    src: url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Oblique.eot);
    src: url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Oblique.eot?#iefix") format("embedded-opentype"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Oblique.woff2) format("woff2"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Oblique.woff) format("woff"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Oblique.ttf) format("truetype"),url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-Oblique.svg#Futura-Oblique") format("svg");
    font-weight: 400;
    font-style: italic;
    font-display: swap
}

@font-face {
    font-family: "Futura";
    src: url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura.eot);
    src: url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura.eot?#iefix") format("embedded-opentype"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura.woff2) format("woff2"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura.woff) format("woff"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura.ttf) format("truetype"),url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura.svg#Futura") format("svg");
    font-weight: 400;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: "Futura-LightOblique";
    src: url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-LightOblique.eot);
    src: url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-LightOblique.eot?#iefix") format("embedded-opentype"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-LightOblique.woff2) format("woff2"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-LightOblique.woff) format("woff"),url(https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-LightOblique.ttf) format("truetype"),url("https://sigroup.vn/wp-content/themes/sigroup/assets/fonts/Futura-LightOblique.svg#Futura-LightOblique") format("svg");
    font-weight: 300;
    font-style: italic;
    font-display: swap
}

.hide-speed {
    display: none
}

img {
    max-width: 100%
}

.f1ce9c {
    color: #f1ce9c
}

.home-contact-alert.success {
    color: green
}

.home-contact-alert.error {
    color: red
}

:root {
    --font-stack: "Futura", sans-serif;
    --font-black: "Futura-Heavy", sans-serif;
    --font-light: "Futura-Light", sans-serif;
    --font-medium: "Futura-Heavy", sans-serif;
    --font-semibold: "Futura-Heavy", sans-serif;
    --font-heavy: "Futura-Heavy", sans-serif;
    --font-bold: "Futura-Bold", sans-serif;
    --font-italic: "Futura-Book", sans-serif;
    --font-BookOblique: "Futura-BookOblique", sans-serif;
    --font-heading: "FSBaskervilleOldFace", sans-serif;
    --font-size: 16px;
    --background-color: #ffffff;
    --surface-color: #686868;
    --primary-color: #2d2d2d;
    --secondary-color: #00773e;
    --tertiary-color: #aeaeae;
    --quaternary-color: #f2f3f7;
    --quinary-color: #d9d9d9;
    --senary-color: #a8b9c5;
    --octonary-color: #934d26;
    --nonary-color: #555555;
    --denary-color: #f1d1a9;
    --duodenary-color: #000000;
    --app-bar-background: transparent;
    --si-gold-color: #f1d1a9;
    --si-charcoal-color: #444444;
    --si-brown-color: #934d26;
    --footer-color: #16171d;
    --background-secondary-color: #16171d;
    --background-third-color: #f9fafb;
    --pbo-red: #ea1d2c;
    --pbo-gray: #8b8b8e;
    --size-10: 0.625rem;
    --size-12: 0.75rem;
    --size-13: 0.813rem;
    --size-14: 0.875rem;
    --size-15: 0.938rem;
    --size-16: 1rem;
    --size-18: 1.125rem;
    --size-20: 1.25rem;
    --size-22: 1.375em;
    --size-24: 1.5rem;
    --size-25: 1.563rem;
    --size-30: 1.875rem;
    --size-32: 2rem;
    --size-33: 2.063em;
    --size-35: 2.188rem;
    --size-40: 2.5em;
    --size-42: 2.625em;
    --size-47: 2.938em;
    --size-48: 3rem;
    --size-64: 4rem;
    --size-72: 4.5rem;
    --size-80: 5rem;
    --size-96: 6rem;
    --size-100: 6.25rem;
    --size-112: 7rem;
    --size-128: 8rem;
    --size-140: 8.75rem;
    --size-144: 9rem;
    --size-160: 10rem;
    --size-176: 11rem;
    --size-192: 12rem;
    --size-200: 12.5rem;
    --size-208: 13rem;
    --size-210: 13.125rem;
    --size-220: 13.75rem;
    --size-224: 14rem;
    --ratio-md: 0.8;
    --ratio-sm: 0.6;
    --ratio-xm: 0.4;
    --ratio-xxm: 0.3;
    --ratio-xxxm: 0.24;
    --ratio-xxxmm: 0.22;
    --size-47-33: 1.424em;
    --dura-300: 0.3s;
    --dura-500: 0.5s
}

p {
    margin: 0
}

.row {
    max-width: 1420px
}

.vh-80 {
    height: 80vh
}

.px-3 {
    padding-right: 12px!important;
    padding-left: 12px!important
}

.px-4 {
    padding-right: 16px!important;
    padding-left: 16px!important
}

.ma-4 {
    margin: 16px!important
}

.pa-5 {
    padding: 20px!important
}

.pt-5 {
    padding-top: 20px!important
}

.pb-5 {
    padding-bottom: 20px!important
}

.py-3 {
    padding-top: 12px!important;
    padding-bottom: 12px!important
}

.py-5 {
    padding-top: 20px!important;
    padding-bottom: 20px!important
}

.py-10 {
    padding-top: 40px!important;
    padding-bottom: 40px!important
}

.py-20 {
    padding-top: 80px!important;
    padding-bottom: 80px!important
}

.py-40 {
    padding-top: 160px!important;
    padding-bottom: 160px!important
}

.mt-2 {
    margin-top: 8px!important
}

.mt-4 {
    margin-top: 16px!important
}

.mt-5 {
    margin-top: 20px!important
}

.mt-10 {
    margin-top: 40px!important
}

.my-3 {
    margin-top: 12px!important;
    margin-bottom: 12px!important
}

.my-4 {
    margin-top: 16px!important;
    margin-bottom: 16px!important
}

.my-5 {
    margin-top: 20px!important;
    margin-bottom: 20px!important
}

.my-6 {
    margin-top: 24px!important;
    margin-bottom: 24px!important
}

.my-10 {
    margin-top: 40px!important;
    margin-bottom: 40px!important
}

.mb-10 {
    margin-bottom: 40px!important
}

.mb-13 {
    margin-bottom: 52px!important
}

.ml-4 {
    margin-left: 16px!important
}

.item-short-content {
    color: black!important
}

.text-justify {
    text-align: justify
}

a {
    transition-duration: 0.5s;
    text-decoration: none;
    color: var(--primary-color)
}

.si-line {
    height: 1px;
    background-color: var(--quinary-color)
}

body {
    min-height: 100%;
    line-height: 1.5;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    visibility: visible;
    width: 100%;
    font-weight: 400;
    font-family: var(--font-stack);
    font-size: var(--font-size);
    background: var(--background-color);
    color: var(--primary-color)
}

.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6 {
    line-height: 1.5
}

.clock,.location {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat
}

.location .si-title {
    position: relative;
    font-size: var(--size-35);
    color: var(--si-brown-color);
    font-family: var(--font-heading);
    text-transform: uppercase;
    padding: 0 0 25px
}

.si-btn {
    border: none;
    width: 155px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: var(--dura-500);
    background-color: var(--octonary-color);
    text-transform: uppercase;
    color: var(--background-color);
    font-family: var(--font-heavy);
    font-size: var(--size-14);
    margin: auto;
    cursor: pointer
}

.si-btn:hover {
    color: var(--octonary-color);
    background: var(--denary-color)
}

.si-benefit {
    background: #fff;
    border-radius: 10px;
    height: 100%;
    padding: 20px;
    justify-content: center
}

.si-benefit p {
    font-size: var(--size-20);
    font-family: var(--font-black)
}

.si-breadcrumbs {
    height: 320px;
    align-items: flex-end;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/breadcrumb-bg.png)
}

.si-breadcrumbs .breadcrumb {
    margin: 0;
    display: flex;
    align-items: center;
    line-height: 1.375rem;
    padding: 16px 12px
}

.si-breadcrumbs .bg-breadcrumbs {
    min-width: 50%;
    padding: 3px 20px;
    margin-bottom: -15px;
    background-color: var(--primary-color);
    display: inline-block
}

.si-breadcrumbs-tt,.si-breadcrumbs h1 {
    margin: 0;
    font-size: var(--size-48);
    color: var(--denary-color);
    font-family: var(--font-heading);
    font-weight: 400;
    text-transform: uppercase
}

.si-breadcrumbs .breadcrumb-item,.si-breadcrumbs .breadcrumb-item a {
    font-size: var(--size-14);
    color: var(--background-color)
}

.si-breadcrumbs .breadcrumb-item:hover a {
    color: var(--denary-color);
    text-decoration: underline
}

.si-breadcrumbs .breadcrumb-item.active {
    color: var(--denary-color)
}

.si-footer {
    background-color: var(--primary-color);
    color: #fff
}

.it-program {
    flex-wrap: wrap;
    margin-top: 20px
}

.it-program div {
    min-height: 50px;
    display: flex;
    align-items: center
}

.it-program div:nth-child(1) {
    width: 104px;
    font-size: var(--size-25);
    justify-content: center;
    font-family: var(--font-black);
    color: var(--background-color);
    background-color: var(--denary-color)
}

.it-program div:nth-child(2) {
    width: calc(100% - 104px);
    background-color: var(--quaternary-color);
    padding: 10px 20px
}

.si-footer .si-footer-tt,.si-footer h3 {
    color: var(--denary-color);
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.2;
    font-family: var(--font-medium);
    margin-bottom: 8px
}

.si-footer .copyright {
    text-align: center;
    font-size: .875rem;
    border-top: 1px solid #3e4145;
    padding-top: 24px;
    padding-bottom: 24px
}

.si-footer .info p {
    display: flex;
    align-items: center;
    padding: 6px 0;
    margin: 0
}

.si-footer .info a,.si-footer .info span {
    color: var(--background-color)
}

.si-footer .info img {
    margin-right: 10px;
    max-width: 16px
}

.si-footer .info .phone {
    color: #fff
}

.si-footer .social {
    display: flex;
    align-items: center;
    padding: 6px 0;
    padding-left: 16px
}

.si-footer .social a {
    width: 25px;
    height: 25px;
    margin-left: 10px;
    background-position: center center;
    background-repeat: no-repeat
}

.si-footer .social .Facebook {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-fb.png)
}

.si-footer .social .Facebook:hover {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-fb-hv.png)
}

.si-footer .social .Youtube {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-you.png)
}

.si-footer .social .Youtube:hover {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-you-hv.png)
}

.si-footer .social .Twitter {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-twi.png)
}

.si-footer .social .Twitter:hover {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-twi-hv.png)
}

.si-footer .social .Telegram {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-tele.png)
}

.si-footer .social .Telegram:hover {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-tele-hv.png)
}

.si-footer .social .Linkedin {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-linkedin.png)
}

.si-footer .social .Linkedin:hover {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-linkedin-hv.png)
}

.si-footer .social .Zalo {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-zalo.png)
}

.si-footer .social .Zalo:hover {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-zalo-hv.png)
}

.si-footer .menu-item a {
    display: block;
    margin-bottom: 10px;
    color: var(--background-color)
}

.si-footer .menu-item a:hover {
    color: var(--denary-color)
}

.si-footer .si-ft-link>div {
    width: 50%
}

.si-footer .si-ft-link>div.d-flex {
    min-width: 380px
}

.si-footer .menu-chuong-trinh-container ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center
}

.si-footer .menu-chuong-trinh-container ul li {
    width: 50%
}

.si-banners {
    max-width: 1420px;
    position: relative;
    z-index: 1
}

.si-banners .slick-dots {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    bottom: 0;
    left: 0;
    width: 100%
}

.si-banners .slick-dots li {
    width: 12px;
    height: 12px;
    margin-left: 8px;
    margin-right: 8px
}

.si-banners .slick-dots li button {
    font-size: 0;
    padding: 0;
    width: 12px;
    height: 12px;
    background-color: rgba(0,0,0,.4)
}

.si-banners .slick-dots li.slick-active button {
    background-color: #f1d1a9
}

.si-banners .slick-dots li button::before {
    display: none
}

.si-banners .slick-arrow {
    border-radius: 0;
    width: 48px;
    height: 48px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    opacity: .7;
    font-size: 0;
    z-index: 10
}

.si-banners .slick-arrow::before {
    color: var(--denary-color);
    display: none
}

.si-banners .slick-arrow::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover
}

.si-banners .slick-prev {
    left: 16px
}

.si-banners .slick-prev::after {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-prev-bn.png)
}

.si-banners .slick-next {
    right: 16px
}

.si-banners .slick-next::after {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/ic-next-bn.png)
}

.si-banners .slick-arrow:hover {
    background-color: #fff;
    opacity: 1
}

.si-banners .position-relative {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover
}

.si-banners .bg-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 281px;
    background: linear-gradient(180deg,#000000 0%,rgba(0,0,0,.8) 58.33%,rgba(0,0,0,0) 100%);
    opacity: .7;
    transform: rotate(180deg)
}

.si-banners .banner-wrap {
    color: var(--background-color);
    display: flex;
    align-items: flex-end;
    max-width: 1240px;
    margin: auto;
    padding: 0 30px
}

.si-banners .banner-wrap .d-flex {
    line-height: 1.5
}

.si-banners .banner-wrap span {
    font-family: var(--font-heavy);
    line-height: 1.5
}

.si-banners .banner-wrap .excerpt {
    line-height: 1.5
}

.si-banners-tt,.si-banners h4,.si-banners h2 {
    line-height: 1.5;
    color: var(--denary-color);
    font-size: var(--size-35);
    font-family: var(--font-heading);
    text-transform: uppercase
}

.si-blog .item {
    display: block;
    color: var(--primary-color)
}

.si-blog .item .img {
    overflow: hidden;
    max-height: 250px
}

.si-blog .item .img>img {
    height: 250px;
    width: 100%;
    object-fit: cover;
    transition-duration: var(--dura-500)
}

.si-blog .item .tt-related,.si-blog .item h4,.si-blog .item h2 {
    font-family: var(--font-heavy);
    font-size: var(--size-16)
}

.si-blog .item div {
    color: var(--duodenary-color)
}

.si-blog .item div span {
    color: var(--octonary-color)
}

.si-blog .item p {
    color: var(--senary-color);
    font-weight: 400
}

.si-blog .item p i {
    margin-right: 10px;
    font-size: var(--size-15)
}

.si-blog .item p span {
    font-size: var(--size-13)
}

.si-blog .item .clock {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/clock-senary.png)
}

.si-blog .item:hover .img>img {
    transform: scale(1.05)
}

.si-blog .item:hover .tt-related,.si-blog .item:hover h4,.si-blog .item:hover h2 {
    color: var(--octonary-color)
}

.si-blog .item .flag-detail {
    align-items: center;
    position: absolute;
    bottom: 20px;
    left: 0;
    background-color: var(--background-color)
}

.si-blog .item .flag-detail img {
    height: 40px!important;
    position: relative;
    bottom: 0
}

.si-blog .item .flag-detail span {
    padding: 5px 15px;
    line-height: 1.5
}

.si-blog .event {
    display: block;
    color: var(--primary-color)
}

.si-blog .event .img {
    overflow: hidden;
    max-height: 250px
}

.si-blog .event .img img {
    width: 100%;
    object-fit: cover;
    transition-duration: var(--dura-500)
}

.si-blog .event .info {
    background: var(--background-color);
    padding: 15px 20px;
    transition-duration: var(--dura-500);
    position: relative
}

.si-blog .event .info::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 20px;
    height: 5px;
    width: 80px;
    background: var(--octonary-color)
}

.si-blog .event h4,.si-blog .event h2 {
    font-family: var(--font-bold);
    font-size: var(--size-16)
}

.si-blog .event p {
    color: var(--senary-color);
    text-transform: uppercase
}

.si-blog .event p i {
    margin-right: 10px;
    font-size: var(--size-13);
    color: var(--octonary-color)
}

.si-blog .event p span {
    font-family: var(--font-bold);
    font-size: var(--size-12)
}

.si-blog .event:hover {
    color: var(--background-color)
}

.si-blog .event:hover .info {
    background: var(--octonary-color)
}

.si-blog .event:hover img {
    transform: scale(1.05)
}

.si-blog .event:hover h4,.si-blog .event:hover i,.si-blog .event:hover p,.si-blog .event:hover h2 {
    color: var(--background-color)
}

.si-blog .new {
    margin-top: 30px
}

.si-blog .new:hover h4,.si-blog .new:hover h2 {
    color: var(--octonary-color)
}

.si-blog .new:hover img {
    transform: scale(1.05)
}

.si-blog .new:first-child {
    margin-top: 0
}

.si-blog .new.big .img img {
    max-height: 396px
}

.si-blog .new.big h4,.si-blog .new.big h2 {
    font-size: var(--size-20)
}

.si-blog .new.big h3 {
    font-size: var(--size-16);
    color: var(--surface-color)
}

.si-blog .new.big p {
    font-weight: 400;
    font-family: var(--font-stack);
    color: var(--primary-color)
}

.si-blog .new.big span {
    font-weight: 400;
    font-family: var(--font-stack);
    color: var(--surface-color);
    font-size: var(--size-13)
}

.si-blog .new.d-flex {
    flex-wrap: wrap;
    align-items: stretch
}

.si-blog .new.d-flex .img {
    width: 183px
}

.si-blog .new.d-flex .info {
    width: calc(100% - 183px)
}

.si-blog .new.d-flex h4,.si-blog .new.d-flex h2 {
    font-size: var(--size-16)
}

.si-blog .new.d-flex p {
    color: var(--surface-color);
    font-size: var(--size-13)
}

.si-blog .new h4,.si-blog .new h2,.si-blog .new h3 {
    font-weight: 400;
    font-family: var(--font-heavy);
    color: var(--primary-color)
}

.si-blog .new .img {
    line-height: 0;
    overflow: hidden
}

.si-blog .new .img img {
    width: 100%;
    object-fit: cover;
    transition-duration: var(--dura-500)
}

.si-blog .new .info {
    padding: 15px 20px
}

.si-blog .new.big {
    background-color: #f2f3f7
}

.si-blog .flag {
    position: absolute;
    left: 0;
    bottom: 20px;
    display: flex;
    align-items: center;
    background-color: var(--background-color);
    font-weight: 400;
    line-height: 0
}

.si-blog .flag img {
    height: 37px!important;
    width: 53px!important
}

.si-blog .flag span {
    color: var(--primary-color)!important;
    padding: 0 10px;
    display: block;
    line-height: 1.5
}

.si-event {
    display: block;
    color: var(--duodenary-color)
}

.si-event .img {
    position: relative;
    overflow: hidden;
    max-height: 380px
}

.si-event .img img {
    width: 100%;
    object-fit: cover;
    height: 380px;
    transition-duration: var(--dura-500)
}

.si-event .img.si-event-end {
    position: relative
}

.si-event .img.si-event-end::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .3;
    z-index: 1;
    background-color: #000
}

.si-event .img.si-event-end .end-text {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    color: #fff;
    background-color: red;
    line-height: 1.2;
    text-align: center;
    padding: 5px 10px;
    font-size: 13px
}

.si-event .img .d-flex {
    color: var(--background-color);
    position: absolute;
    padding: 15px;
    bottom: 0;
    left: 0;
    font-size: var(--size-20)
}

.si-event .img .d-flex i {
    font-size: .85em;
    margin-right: 8px
}

.si-event .img .d-flex span {
    color: var(--denary-color)
}

.si-event h4,.si-event h2 {
    height: 60px;
    overflow: hidden;
    font-size: var(--size-20);
    color: var(--primary-color);
    font-weight: 400;
    font-family: var(--font-heavy)
}

.si-event .info .d-flex {
    flex-wrap: wrap
}

.si-event .info .d-flex .clock {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/clock-black.png)
}

.si-event .info .d-flex .location {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/loca-black.png)
}

.si-event .info .d-flex>div {
    width: 50%
}

.si-event .info i {
    margin-right: 10px;
    font-size: var(--size-15)
}

.si-event .info span {
    font-size: var(--size-13)
}

.si-event:hover h4,.si-event:hover h2 {
    color: var(--octonary-color)
}

.si-event:hover img {
    transform: scale(1.05)
}

.si-event.done .img .d-flex span {
    color: var(--background-color)
}

.si-event.now .img .d-flex {
    color: var(--denary-color)
}

.si-form {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/home-contact.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 1420px
}

.si-form .info-contact {
    color: var(--background-color)
}

.si-form .info-contact .si-form-tt,.si-form .info-contact h2 {
    font-weight: 400;
    font-family: var(--font-medium);
    color: var(--denary-color);
    font-size: var(--size-33);
    text-transform: uppercase
}

.si-form .info-contact .si-form-tt span,.si-form .info-contact h2 span {
    display: block;
    font-size: var(--size-47-33);
    font-family: var(--font-bold)
}

.si-form .info-contact p {
    font-size: var(--size-20)
}

.si-form .info-contact a {
    color: #f1d1a9
}

.si-form .info-contact a:hover {
    text-decoration: underline
}

.contact-form,.si-form .home-contact {
    padding: 40px;
    border-radius: 4px;
    background: var(--background-color)
}

.si-form .home-contact .si-btn {
    margin: 0
}

.si-form .si-call {
    font-size: var(--size-20)
}

.si-form .si-call>div {
    position: relative;
    padding-left: 50px;
    background-repeat: no-repeat;
    background-position: left center
}

.si-form .si-call .phone {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/si-phone.png)
}

.si-form .si-call .mail {
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/si-mail.png)
}

.si-form .si-call a {
    color: var(--background-color)
}

.si-form .si-call a:hover {
    color: var(--denary-color)
}

.si-speaker {
    font-size: var(--size-14);
    border: 1px solid var(--quinary-color);
    padding: 50px 20px 25px
}

.si-speaker h2 {
    font-size: var(--size-16)
}

.si-speaker h3 {
    font-size: var(--size-14);
    color: var(--octonary-color)
}

.si-speaker .img img {
    object-fit: cover;
    max-height: 230px;
    width: 100%
}

.si-select .d-flex>span {
    display: inline-block;
    margin-right: 20px;
    font-family: var(--font-bold)
}

.si-select .d-flex input {
    color: var(--primary-color);
    font-family: var(--font-bold)
}

.si-select .d-flex .form-select {
    box-shadow: none!important;
    position: relative;
    border-radius: 0;
    height: 50px;
    max-width: 300px;
    border: 1px solid #aeaeae;
    background: var(--quaternary-color)
}

.si-customer {
    line-height: 1.62;
    font-family: var(--font-medium)
}

.si-customer .img {
    line-height: 0
}

.si-customer .img>img {
    width: 100%;
    object-fit: cover
}

.si-customer .img .thumbnail {
    height: 256px
}

.si-customer .img .d-flex {
    align-items: center;
    position: absolute;
    bottom: 20px;
    left: 0;
    background-color: var(--background-color)
}

.si-customer .img .d-flex span {
    font-family: var(--font-black);
    font-size: var(--size-20);
    padding: 5px 15px
}

.si-customer h2 {
    font-family: var(--font-black);
    font-size: var(--size-20)
}

.si-customer .info span {
    color: var(--octonary-color);
    font-family: var(--font-medium)
}

.si-customer .time {
    color: var(--tertiary-color);
    font-style: italic;
    font-size: var(--size-14)
}

.si-customer.big h2 {
    font-size: var(--size-35);
    font-family: var(--font-black)
}

.si-customer.big {
    background-color: var(--quaternary-color)
}

.si-customer a:hover h2 {
    color: var(--octonary-color)
}

.si-customer .flag {
    max-height: 36px
}

.si-pagi {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center
}

.si-pagi span,.si-pagi a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .3rem;
    width: 48px;
    height: 48px;
    background: #fff;
    border: 1px solid #d9d9d9
}

.si-pagi span:hover,.si-pagi a:hover,.si-pagi .current {
    color: #fff;
    background: #934d26;
    border: 1px solid #934d26
}

.menu-mobile,.si-nav-close {
    cursor: pointer
}

.si-header {
    position: fixed;
    z-index: 1006;
    top: 0;
    left: 0;
    width: 100%
}

.si-header .background {
    background: rgba(0,0,0,.7);
    top: 0;
    left: 0;
    z-index: 0;
    opacity: .6
}

.si-header .logo img {
    max-width: 278px;
    max-height: 125px
}

.si-header .logo img.d-md-block {
    object-fit: contain
}

.si-header .si-top {
    margin: 10px 0
}

.si-header .si-top .call {
    position: relative;
    text-align: right
}

.si-header .si-top .call a {
    display: block;
    margin-right: 20px
}

.si-header .si-top .call a:first-child {
    font-size: .938rem;
    color: #f1d1a9
}

.si-nav .menu-main {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    border-top: 1px solid rgba(255,255,255,.35)
}

.si-nav .menu-main>li {
    position: relative;
    margin-left: 30px
}

.si-nav .menu-main>li:first-child {
    margin-left: 0
}

.si-nav .menu-main>li>a {
    position: relative;
    padding: 20px 0;
    display: inline-block;
    font-size: .875rem;
    color: var(--background-color);
    text-transform: uppercase
}

.si-nav .menu-main>li>a::after {
    content: "";
    position: absolute;
    top: -2px;
    left: 0;
    height: 3px;
    width: 100%
}

.si-nav .menu-main>li:hover>a,.si-nav .menu-main>li.current-menu-item>a {
    color: var(--denary-color)
}

.si-nav .menu-main>li:hover>a::after,.si-nav .menu-main>li.current-menu-item>a::after {
    background-color: var(--denary-color)
}

.si-nav .menu-main .sub-menu {
    position: absolute;
    display: none;
    top: 100%;
    left: 0;
    width: 200px;
    background-color: #2d2d2d;
    padding: 10px 0;
    list-style: none
}

.si-nav .menu-main .sub-menu .sub-menu {
    top: 0;
    left: 100%;
    display: none
}

.si-nav .menu-main>li:hover>.sub-menu {
    display: block
}

.si-nav .menu-main>li>.sub-menu>li:hover .sub-menu {
    display: block
}

.si-nav .menu-main .sub-menu>li {
    position: relative;
    padding-left: 15px;
    padding-right: 15px
}

.si-nav .menu-main .sub-menu>li>a {
    padding: 3px 0;
    display: block;
    font-size: var(--size-14);
    font-weight: 400;
    color: var(--background-color)
}

.si-nav .menu-main .sub-menu>li:hover>a {
    color: var(--denary-color)
}

.si-nav .menu-main>.menu-item>.sub-menu::after {
    content: "";
    position: absolute;
    top: -9px;
    left: 10px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 9px solid var(--primary-color)
}

.si-nav.mobile {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 123;
    background-color: rgba(0,0,0,.3)
}

.si-nav.mobile::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0
}

.si-nav.mobile .menu-main-container {
    position: relative;
    z-index: 1;
    max-width: 255px;
    height: 100%;
    border-right: 1px solid #fff;
    background-color: #494949;
    padding: 48px 12px 24px 24px
}

.si-nav.mobile .menu-main {
    display: block;
    border: none;
    width: auto
}

.si-nav.mobile .menu-main>li {
    margin-left: 0;
    position: relative
}

.si-nav.mobile .menu-main>li.child-item::after {
    content: "+";
    position: absolute;
    top: 0;
    right: 0;
    z-index: 12;
    color: #fff;
    font-size: var(--size-20)
}

.si-nav.mobile .menu-main>li.child-item.active::after {
    content: "-"
}

.si-nav.mobile .menu-main>li>a {
    padding: 5px 0;
    font-size: var(--size-16);
    text-transform: capitalize
}

.si-nav.mobile .menu-main .sub-menu {
    position: relative;
    background: none
}

.si-nav.mobile .menu-main .sub-menu {
    padding: 0 0 0 5px
}

.si-nav.mobile .menu-main .sub-menu>li {
    padding-right: 0
}

.si-nav.mobile .menu-main .sub-menu>li>a {
    font-size: var(--size-16)
}

.si-nav.mobile .si-nav-close {
    position: absolute;
    top: 5px;
    left: 215px;
    z-index: 10;
    background-color: #fff;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center
}

.si-nav.mobile .si-nav-close::after {
    content: "";
    width: 16px;
    height: 16px;
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/close.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover
}

.si-nav.mobile .menu-main>li:hover .sub-menu,.si-nav.mobile .menu-main .sub-menu::after,.si-nav.mobile .menu-main>li>a::after {
    display: none
}

.si-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px
}

.si-tags a:hover {
    color: var(--octonary-color)
}

@media (min-width: 1170px) {
    .si-nav .menu-main {
        width:925px
    }

    .si-banners .position-relative.vh-80 {
        height: 686px
    }
}

@media (max-width: 820px) {
    .si-header .logo img {
        height:70px;
        padding: 10px;
        width: auto
    }

    .si-header .si-top .call a:first-child {
        font-size: var(--size-12)
    }

    .si-form .home-contact {
        margin-top: 30px;
        padding: 30px 20px
    }

    .si-form .home-contact .si-btn {
        width: 120px
    }
}

@media (max-width: 400px) {
    .si-header .si-top .call a {
        margin-right:12px
    }

    .si-nav.mobile .menu-main>li>a,.si-nav.mobile .menu-main .sub-menu>li>a {
        font-size: var(--size-14)
    }

    .si-header .si-top .call a:first-child {
        font-size: var(--size-10)
    }
}

.text-uppercase {
    text-transform: uppercase
}

.pll-switcher-select {
    text-transform: uppercase;
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
    color: #fff;
    margin-right: 20px
}

.pll-switcher-select option {
    color: #000;
    width: 45px
}

.popup-form {
    position: fixed;
    display: none;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background-color: rgba(0,0,0,.6)
}

.popup-form>.position-relative {
    padding: 24px;
    width: 100%;
    max-width: 600px;
    border-radius: 24px;
    background-color: #fff
}

.close-popup {
    position: absolute;
    top: 12px;
    right: 12px;
    content: "";
    width: 16px;
    height: 16px;
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/close.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer
}

.content-popup {
    text-align: center
}

.sent .contact-form,.failed .contact-form,.invalid .contact-form {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding-bottom: 20px
}

.failed .wpcf7-response-output,.invalid .wpcf7-response-output {
    color: #dc3232;
    background: #fff;
    margin: 0!important;
    border: none!important;
    padding: 10px 40px 30px!important
}

.sent .wpcf7-response-output {
    color: #46b450;
    background: #fff;
    margin: 0!important;
    border: none!important;
    padding: 10px 40px 30px!important
}

.contact-form .wpcf7-select,.contact-form .wpcf7-text {
    outline: none;
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--bs-body-color);
    background-color: var(--bs-body-bg);
    background-clip: padding-box;
    border: var(--bs-border-width) solid var(--bs-border-color);
    border-radius: var(--bs-border-radius);
    transition: border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out
}

.contact-form .wpcf7-text {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

.contact-form .wpcf7-submit {
    border: none;
    width: 155px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: var(--dura-500);
    background-color: var(--octonary-color);
    text-transform: uppercase;
    color: var(--background-color);
    font-family: var(--font-heavy);
    font-size: var(--size-14);
    cursor: pointer
}

.contact-form .wpcf7-spinner {
    display: none
}

.search-top {
    cursor: pointer
}

.popup-search {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 123
}

.popup-search .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: rgba(0,0,0,.3)
}

.popup-search .si-nav-close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    background-color: #fff;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center
}

.popup-search .si-nav-close::after {
    content: "";
    width: 16px;
    height: 16px;
    background-image: url(https://sigroup.vn/wp-content/themes/sigroup/assets/images/close.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover
}

.popup-search .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 10
}

.si-search-header {
    gap: 20px;
    padding: 40px 0
}

.si-search-header .si-btn {
    height: 38px
}

.phone-vr-circle-fill {
    display: none!important
}

#button-contact-vr {
    top: 50%;
    transform: translateY(-50%)
}

#button-contact-vr .button-contact .phone-vr {
    width: 40px!important;
    height: 40px!important
}

#button-contact-vr .button-contact {
    margin-top: 0!important
}

#gom-all-in-one {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    gap: 10px;
    width: 40px
}

.phone-vr-img-circle {
    top: 0!important;
    left: 0!important
}

#zalo-vr .phone-vr-img-circle {
    background-color: #934d26!important
}

@media (max-width: 820px) {
    .si-title {
        font-size:var(--size-30)
    }

    .si-banners {
        height: auto!important
    }

    .si-banners h2 {
        font-size: var(--size-20);
        color: var(--primary-color)
    }

    .si-banners .banner-wrap {
        height: auto!important;
        position: relative!important;
        color: var(--primary-color);
        padding: 20px 15px
    }

    .si-banners .banner-wrap .w-100.mb-13 {
        margin-bottom: 0!important
    }

    .si-banners .banner-wrap .d-flex.justify-space-between {
        flex-wrap: wrap;
        justify-content: flex-start
    }

    .si-banners .d-sm-block.d-md-none {
        line-height: 0
    }

    .si-banners .d-sm-block.d-md-none img {
        height: 250px
    }

    .si-banners .bg-banner {
        height: auto!important
    }

    .si-banners .bg-overlay {
        display: none
    }

    .si-banners-tt {
        font-family: var(--font-heavy);
        font-size: var(--size-20);
        color: var(--si-brown-color)
    }
}

@media (min-width: 1320px) {
    .container {
        max-width:1240px!important
    }
}


</style>