import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    FiUser,
    FiMapPin,
    FiLock,
    FiBell,
    FiLogOut,
    FiPlus,
    FiChevronLeft,
    FiChevronRight,
    FiCheckCircle,
} from "react-icons/fi";

import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import "../css/AccountPage.css";
import "../css/AddressPage.css";

export default function AddressPage() {
    // Mock Data ti Address adig-adig manipud ti JSP code
    const [addresses, setAddresses] = useState([
        {
            id: "1",
            name: "Nguyễn Văn A",
            phone: "0901234567",
            fullAddress: "123 Đường Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
            detail: "123 Đường Nguyễn Huệ",
            ward_code: "20301",
            district_id: 1442,
            province_id: 202,
            isDefault: 1,
        },
        {
            id: "2",
            name: "Nguyễn Văn A (Văn phòng)",
            phone: "0987654321",
            fullAddress: "456 Đường Lê Duẩn, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
            detail: "456 Đường Lê Duẩn",
            ward_code: "20302",
            district_id: 1442,
            province_id: 202,
            isDefault: 0,
        },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = 3;

    // Handlers para kadagiti action ti Address
    const handleSetDefault = (id) => {
        setAddresses((prev) =>
            prev.map((a) => ({
                ...a,
                isDefault: a.id === id ? 1 : 0,
            }))
        );
    };

    const handleDelete = (id) => {
        if (window.confirm("Xóa địa chỉ này?")) {
            setAddresses((prev) => prev.filter((a) => a.id !== id));
        }
    };

    // const openEditAddressModal = (address) => {
    // };
    //
    // const openAddAddressModal = () => {
    // };

    return (
        <div className="account-page">
            <Header />

            <main className="account-page-container">
                <div className="account-page-title">
                    <h1>Sổ địa chỉ của tôi</h1>
                    <p>Quản lý các địa chỉ nhận hàng để thanh toán nhanh chóng hơn.</p>
                </div>

                <div className="account-page-layout">
                    <aside className="account-sidebar">
                        <div className="account-user">
                            <div className="account-user-avatar">A</div>
                            <div className="account-user-info">
                                <h3>Nguyễn Văn A</h3>
                                <p>Khách hàng NORDIC</p>
                            </div>
                        </div>

                        <nav className="account-sidebar-menu">
                            <Link to="/customer/account" className="account-sidebar-item">
                                <FiUser />
                                <span>Hồ sơ cá nhân</span>
                            </Link>

                            <Link to="/customer/address" className="account-sidebar-item active">
                                <FiMapPin />
                                <span>Sổ địa chỉ</span>
                            </Link>

                            <Link to="/customer/change-password" className="account-sidebar-item">
                                <FiLock />
                                <span>Đổi mật khẩu</span>
                            </Link>

                            <Link to="/customer/notifications" className="account-sidebar-item">
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

                    <section className="account-main-content">
                        <div className="account-content-header">
                            <div>
                                <h2>Sổ địa chỉ</h2>
                                <p>Danh sách các địa chỉ nhận hàng của bạn.</p>
                            </div>

                            <button className="account-save-btn btn-add-address">
                                <FiPlus /> Thêm địa chỉ mới
                            </button>
                        </div>

                        <div className="address-list-container">
                            {addresses.length === 0 ? (
                                <div className="address-empty">
                                    <p>Bạn chưa có địa chỉ nào</p>
                                </div>
                            ) : (
                                addresses.map((a) => (
                                    <div
                                        key={a.id}
                                        className={`address-item ${a.isDefault === 1 ? "default-address" : ""}`}
                                    >
                                        <div className="address-icon">
                                            <FiMapPin />
                                        </div>

                                        <div className="address-details">
                                            <p className="address-name">
                                                <strong>{a.name}</strong>
                                                <span>{a.phone}</span>
                                            </p>
                                            <p className="address-line">{a.fullAddress}</p>
                                        </div>

                                        <div className="address-actions">
                                            {a.isDefault === 1 && (
                                                <span className="default-tag">
                                                    <FiCheckCircle /> Mặc định
                                                </span>
                                            )}

                                            <button
                                                className="set-default-btn"
                                                disabled={a.isDefault === 1}
                                                onClick={() => handleSetDefault(a.id)}
                                            >
                                                Đặt làm mặc định
                                            </button>

                                            <button
                                                className="change-btn"
                                            >
                                                Thay đổi
                                            </button>

                                            <button
                                                className="delete-btn"
                                                onClick={() => handleDelete(a.id)}
                                            >
                                                Xóa
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="address-pagination">
                            {currentPage > 1 && (
                                <button
                                    className="page-btn"
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                >
                                    <FiChevronLeft />
                                </button>
                            )}

                            {Array.from({ length: totalPage }, (_, index) => index + 1).map((i) => (
                                <button
                                    key={i}
                                    className={`page-btn ${i === currentPage ? "active" : ""}`}
                                    onClick={() => setCurrentPage(i)}
                                >
                                    {i}
                                </button>
                            ))}

                            {currentPage < totalPage && (
                                <button
                                    className="page-btn"
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                >
                                    <FiChevronRight />
                                </button>
                            )}
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}