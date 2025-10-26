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
import "@/assets/css/slick.css"
import "@/assets/css/sig-core.css"
export default {
    components: {
        Logo
    }
}
</script>

