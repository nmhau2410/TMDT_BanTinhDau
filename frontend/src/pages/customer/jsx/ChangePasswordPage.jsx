import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    FiUser,
    FiMapPin,
    FiLock,
    FiShoppingBag,
    FiHeart,
    FiBell,
    FiLogOut,
    FiShield,
    FiEye,
    FiEyeOff,
} from "react-icons/fi";

import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer";
import "../css/ChangePasswordPage.css";

export default function ChangePasswordPage() {

    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="change-password-page">

            <Header />

            <main className="change-password-container">

                {/* =========================
                    BREADCRUMB
                ========================= */}


                {/* =========================
                    TITLE
                ========================= */}

                <div className="change-password-page-title">

                    <h1>
                        Tài khoản của tôi
                    </h1>

                    <p>
                        Quản lý thông tin cá nhân, bảo mật và các cài đặt
                        tài khoản của bạn.
                    </p>

                </div>

                {/* =========================
                    LAYOUT
                ========================= */}

                <div className="change-password-layout">

                    {/* SIDEBAR */}

                    <aside className="change-password-sidebar">

                        <div className="change-password-user">

                            <div className="change-password-user-avatar">
                                A
                            </div>

                            <div>
                                <h3>
                                    Nguyễn Văn A
                                </h3>

                                <p>
                                    Khách hàng NORDIC
                                </p>
                            </div>

                        </div>

                        <nav className="change-password-menu">

                            <Link
                                to="/customer/account"
                                className="change-password-menu-item"
                            >
                                <FiUser />
                                <span>Hồ sơ cá nhân</span>
                            </Link>

                            <Link
                                to="/customer/address"
                                className="change-password-menu-item"
                            >
                                <FiMapPin />
                                <span>Sổ địa chỉ</span>
                            </Link>

                            <Link
                                to="/customer/change-password"
                                className="change-password-menu-item active"
                            >
                                <FiLock />
                                <span>Đổi mật khẩu</span>
                            </Link>

                            {/*<Link*/}
                            {/*    to="/customer/orders"*/}
                            {/*    className="change-password-menu-item"*/}
                            {/*>*/}
                            {/*    <FiShoppingBag />*/}
                            {/*    <span>Đơn hàng của tôi</span>*/}
                            {/*</Link>*/}

                            {/*<Link*/}
                            {/*    to="/customer/favorites"*/}
                            {/*    className="change-password-menu-item"*/}
                            {/*>*/}
                            {/*    <FiHeart />*/}
                            {/*    <span>Sản phẩm yêu thích</span>*/}
                            {/*</Link>*/}

                            <Link
                                to="/customer/notifications"
                                className="change-password-menu-item"
                            >
                                <FiBell />
                                <span>Thông báo</span>
                            </Link>

                        </nav>

                        <div className="change-password-divider" />

                        <button className="change-password-logout">
                            <FiLogOut />
                            <span>Đăng xuất</span>
                        </button>

                    </aside>

                    {/* CONTENT */}

                    <section className="change-password-content">

                        {/* HEADER */}

                        <div className="change-password-header">

                            <h2>
                                Đổi mật khẩu
                            </h2>

                            <p>
                                Cập nhật mật khẩu định kỳ để tăng mức độ an
                                toàn cho tài khoản NORDIC của bạn.
                            </p>

                        </div>

                        {/* SECURITY BOX */}

                        <div className="password-security-box">

                            <div className="password-security-icon">
                                <FiShield />
                            </div>

                            <div>
                                <strong>
                                    Bảo mật tài khoản
                                </strong>

                                <p>
                                    Hãy sử dụng mật khẩu mạnh và không dùng
                                    lại mật khẩu từ các dịch vụ khác.
                                </p>
                            </div>

                        </div>

                        {/* FORM */}

                        <div className="password-form">

                            {/* CURRENT PASSWORD */}

                            <div className="password-field">

                                <label>
                                    Mật khẩu hiện tại
                                </label>

                                <div className="password-input-wrapper">

                                    <input
                                        type={
                                            showCurrent
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Nhập mật khẩu hiện tại"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowCurrent(
                                                !showCurrent
                                            )
                                        }
                                    >
                                        {showCurrent ? (
                                            <FiEyeOff />
                                        ) : (
                                            <FiEye />
                                        )}
                                    </button>

                                </div>

                            </div>

                            {/* NEW PASSWORD */}

                            <div className="password-field">

                                <label>
                                    Mật khẩu mới
                                </label>

                                <div className="password-input-wrapper">

                                    <input
                                        type={
                                            showNew
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Nhập mật khẩu mới"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowNew(
                                                !showNew
                                            )
                                        }
                                    >
                                        {showNew ? (
                                            <FiEyeOff />
                                        ) : (
                                            <FiEye />
                                        )}
                                    </button>

                                </div>

                            </div>

                            {/* CONFIRM */}

                            <div className="password-field">

                                <label>
                                    Xác nhận mật khẩu mới
                                </label>

                                <div className="password-input-wrapper">

                                    <input
                                        type={
                                            showConfirm
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Nhập lại mật khẩu mới"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirm(
                                                !showConfirm
                                            )
                                        }
                                    >
                                        {showConfirm ? (
                                            <FiEyeOff />
                                        ) : (
                                            <FiEye />
                                        )}
                                    </button>

                                </div>

                            </div>

                        </div>

                        {/* PASSWORD REQUIREMENTS */}

                        <div className="password-requirements">

                            <strong>
                                Mật khẩu mới nên đáp ứng
                            </strong>

                            <div className="password-requirement-list">

                                <span>
                                    • Ít nhất 8 ký tự
                                </span>

                                <span>
                                    • Bao gồm chữ và số
                                </span>

                                <span>
                                    • Nên có chữ hoa và ký tự đặc biệt
                                </span>

                                <span>
                                    • Không trùng mật khẩu cũ
                                </span>

                            </div>

                        </div>

                        <p className="password-note">
                            Sau khi đổi mật khẩu thành công, hãy sử dụng
                            mật khẩu mới cho những lần đăng nhập tiếp theo.
                        </p>

                        {/* ACTIONS */}

                        <div className="password-actions">

                            <button className="password-cancel">
                                Hủy
                            </button>

                            <button className="password-update">
                                CẬP NHẬT
                            </button>

                        </div>

                    </section>

                </div>

            </main>
            <Footer />
        </div>
    );
}