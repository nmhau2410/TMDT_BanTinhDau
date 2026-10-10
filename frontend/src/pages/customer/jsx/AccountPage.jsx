import React from "react";
import { Link } from "react-router-dom";
import {
    FiUser,
    FiMapPin,
    FiLock,
    FiShoppingBag,
    FiHeart,
    FiBell,
    FiLogOut,
    FiCamera,
} from "react-icons/fi";

import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import "../css/AccountPage.css";

export default function AccountPage() {
    return (
        <div className="account-page">
            <Header />

            <main className="account-page-container">

                {/* =========================
                    BREADCRUMB
                ========================= */}



                {/* =========================
                    PAGE TITLE
                ========================= */}

                <div className="account-page-title">
                    <h1>Tài khoản của tôi</h1>

                    <p>
                        Quản lý thông tin cá nhân, bảo mật và các cài đặt
                        tài khoản của bạn.
                    </p>
                </div>

                {/* =========================
                    MAIN LAYOUT
                ========================= */}

                <div className="account-page-layout">

                    {/* =========================
                        SIDEBAR
                    ========================= */}

                    <aside className="account-sidebar">

                        <div className="account-user">
                            <div className="account-user-avatar">
                                A
                            </div>

                            <div className="account-user-info">
                                <h3>Nguyễn Văn A</h3>
                                <p>Khách hàng NORDIC</p>
                            </div>
                        </div>

                        <nav className="account-sidebar-menu">

                            <Link
                                to="/customer/account"
                                className="account-sidebar-item active"
                            >
                                <FiUser />
                                <span>Hồ sơ cá nhân</span>
                            </Link>

                            <Link
                                to="/customer/address"
                                className="account-sidebar-item"
                            >
                                <FiMapPin />
                                <span>Sổ địa chỉ</span>
                            </Link>

                            <Link
                                to="/customer/change-password"
                                className="account-sidebar-item"
                            >
                                <FiLock />
                                <span>Đổi mật khẩu</span>
                            </Link>

                            <Link
                                to="/customer/notifications"
                                className="account-sidebar-item"
                            >
                                <FiBell />
                                <span>Thông báo</span>
                            </Link>

                        </nav>

                        <div className="account-sidebar-divider"></div>

                        <button className="account-logout-button">
                            <FiLogOut />
                            <span>Đăng xuất</span>
                        </button>

                    </aside>

                    {/* =========================
                        CONTENT
                    ========================= */}

                    <section className="account-main-content">

                        {/* HEADER */}

                        <div className="account-content-header">

                            <div>
                                <h2>Thông tin cá nhân</h2>

                                <p>
                                    Cập nhật hồ sơ để mua sắm, giao nhận và
                                    chăm sóc khách hàng thuận tiện hơn.
                                </p>
                            </div>

                            <div className="account-header-actions">
                                <button className="account-cancel-btn">
                                    Hủy
                                </button>

                                <button className="account-save-btn">
                                    Lưu
                                </button>
                            </div>

                        </div>

                        {/* PROFILE SUMMARY */}

                        <div className="account-profile-summary">

                            <div className="account-large-avatar">
                                A
                            </div>

                            <div className="account-summary-info">

                                <h3>Nguyễn Văn A</h3>

                                <p>
                                    Email đã xác thực • Tài khoản khách hàng
                                    đang hoạt động
                                </p>

                            </div>

                            <button className="account-avatar-button">
                                <FiCamera />
                                Thay ảnh đại diện
                            </button>

                        </div>

                        {/* FORM */}

                        <div className="account-form">

                            {/* ROW 1 */}

                            <div className="account-form-row">

                                <div className="account-form-group">

                                    <label>
                                        Họ và tên
                                    </label>

                                    <input
                                        type="text"
                                        defaultValue="Nguyễn Văn A"
                                    />

                                </div>

                                <div className="account-form-group">

                                    <label>
                                        Số điện thoại
                                    </label>

                                    <input
                                        type="text"
                                        defaultValue="09xxxxxxxx"
                                    />

                                </div>

                            </div>

                            {/* ROW 2 */}

                            <div className="account-form-row">

                                <div className="account-form-group">

                                    <label>
                                        Email
                                    </label>

                                    <div className="account-email-input">

                                        <input
                                            type="email"
                                            defaultValue="name@email.com"
                                        />

                                        <span>
                                            <i></i>
                                            Đã xác thực
                                        </span>

                                    </div>

                                </div>

                                <div className="account-form-group">

                                    <label>
                                        Ngày sinh
                                    </label>

                                    <input
                                        type="text"
                                        defaultValue="01/01/2003"
                                    />

                                </div>

                            </div>

                            {/* ROW 3 */}

                            <div className="account-form-row">

                                <div className="account-form-group">

                                    <label>
                                        Giới tính
                                    </label>

                                    <input
                                        type="text"
                                        defaultValue="Nam"
                                    />

                                </div>

                                <div className="account-form-group">

                                    <label>
                                        Khu vực nhận hàng ưu tiên
                                    </label>

                                    <input
                                        type="text"
                                        defaultValue="Thành phố Hồ Chí Minh"
                                    />

                                </div>

                            </div>

                        </div>

                        {/* NOTE */}

                        <div className="account-note">

                            <strong>Lưu ý</strong>

                            <p>
                                Thông tin hồ sơ được dùng để hỗ trợ đặt hàng,
                                giao nhận và chăm sóc khách hàng trên NORDIC.
                            </p>

                            <p>
                                Bạn có thể cập nhật sổ địa chỉ và đổi mật khẩu
                                ở menu bên trái khi cần.
                            </p>

                        </div>

                    </section>

                </div>

            </main>
            <Footer />
        </div>
    );
}