import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <a href="/" className="footer-logo">
                        <span className="footer-logo__icon"></span>
                        <span>Oilia</span>
                    </a>

                    <p>
                        Chào mừng bạn đến với Oilia – thương hiệu tinh dầu thiên nhiên, nước hoa cá nhân hóa và sản phẩm mùi hương cao cấp. Chúng tôi cam kết mang đến giải pháp thư giãn tự nhiên và nâng tầm không gian sống của bạn.
                    </p>

                </div>

                <div className="footer-column">

                    <h3>Danh Mục</h3>

                    <a href="/customer/products">Tinh dầu thiên nhiên</a>
                    <a href="/customer/products">Nước hoa Bespoke</a>
                    <a href="/customer/products">Nến thơm cao cấp</a>
                    <a href="/customer/products">Tinh dầu xông phòng</a>
                    <a href="/customer/products">Quà tặng hương thơm</a>

                </div>
                <div className="footer-column">

                    <h3>Mua Hàng</h3>

                    <a href="/payments">Phương thức thanh toán</a>
                    <a href="/delivery">Chính sách vận chuyển</a>
                    <a href="/buyer-protection">Bảo vệ người tiêu dùng</a>

                </div>

                <div className="footer-column">

                    <h3>Chăm Sóc Khách Hàng</h3>

                    <a href="/help-center">Trung tâm hỗ trợ</a>
                    <a href="/terms">Điều khoản & Điều kiện</a>
                    <a href="/privacy">Chính sách bảo mật</a>
                    <a href="/returns">Chính sách đổi trả</a>
                    <a href="/feedback">Góp ý & Khảo sát</a>

                </div>

                <div className="footer-column">

                    <h3>Về Oilia</h3>

                    <a href="/about">Giới thiệu</a>
                    <a href="/customer/workshop">Xưởng sản xuất</a>
                    <a href="/contact">Liên hệ</a>
                    <a href="/services">Dịch vụ điều chế</a>
                    <a href="/blog">Tin tức & Bài viết</a>

                </div>

                <div className="footer-subscribe">

                    <h3>Đăng Ký Nhận Tin</h3>

                    <div className="subscribe-form">

                        <input
                            type="email"
                            placeholder="Email của bạn..."
                        />

                        <button type="button">
                            Gửi
                        </button>

                    </div>

                    <div className="footer-social">

                        <a href="#" aria-label="Facebook">
                            f
                        </a>

                        <a href="#" aria-label="Twitter">
                            𝕏
                        </a>

                        <a href="#" aria-label="Instagram">
                            ◎
                        </a>

                        <a href="#" aria-label="LinkedIn">
                            in
                        </a>

                    </div>

                </div>

            </div>

            <div className="footer-bottom">
                <span>
                    © 2026 Oilia Atelier. Tất cả quyền được bảo lưu.
                </span>
            </div>

        </footer>
    );
}