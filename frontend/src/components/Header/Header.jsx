import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingBag, FiChevronDown, FiPhoneCall, FiCheckCircle } from "react-icons/fi";
import "./Header.css";

export default function Header() {
    const navigate = useNavigate();

    const [accountOpen, setAccountOpen] = useState(false);
    const accountRef = useRef(null);
    const isLoggedIn = true;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                accountRef.current &&
                !accountRef.current.contains(event.target)
            ) {
                setAccountOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        setAccountOpen(false);
        navigate("/auth/login");
    };

    return (
        <header className="site-header">
            <div className="header-top">
                <div className="header-top__left">
                    <span className="top-badge"><FiCheckCircle /> 100% Pure & Organic</span>
                    <span>Hệ thống chiết xuất tinh dầu thiên nhiên bảo chứng</span>
                </div>
                <div className="header-top__right">
                    <span className="top-contact"><FiPhoneCall /> Hotline: 1900 6868</span>
                    <span className="top-divider">|</span>
                    <span className="top-support">Trung tâm hỗ trợ</span>
                </div>
            </div>

            <div className="header-main">
                <div className="header-container">
                    <Link to="/" className="header-logo">
                        <span className="header-logo__icon"></span>
                        <span>Oilia</span>
                    </Link>

                    <nav className="header-nav">
                        <Link to="/">Tất cả</Link>
                        <Link to="/customer/products">Bộ sản phẩm</Link>
                        <Link to="/customer/custom-perfume" className="highlight-link">
                            Thiết kế cá nhân hóa
                        </Link>
                        <Link to="/customer/workshop">Xưởng</Link>
                    </nav>

                    <div className="header-search">
                        <FiSearch className="header-search__icon" />
                        <input type="text" placeholder="Tìm kiếm tinh dầu, thương hiệu..." />
                    </div>

                    <div className="header-actions">
                        {isLoggedIn ? (
                            <div className="account-wrapper" ref={accountRef}>
                                <button
                                    type="button"
                                    className={`account-button ${accountOpen ? "open" : ""}`}
                                    onClick={() => setAccountOpen((prev) => !prev)}
                                >
                                    <span className="account-avatar">MH</span>
                                    <span className="account-info">
                                        <span className="account-name">Minh Hậu</span>
                                        <span className="account-badge">VIP</span>
                                    </span>
                                    <FiChevronDown className="account-arrow" />
                                </button>

                                {accountOpen && (
                                    <div className="account-dropdown">
                                        <button
                                            type="button"
                                            className="account-dropdown-item"
                                            onClick={() => {
                                                setAccountOpen(false);
                                                navigate("/customer/account");
                                            }}
                                        >
                                            <span>Hồ sơ cá nhân</span>
                                        </button>

                                        <button
                                            type="button"
                                            className="account-dropdown-item"
                                            onClick={() => {
                                                setAccountOpen(false);
                                                navigate("/customer/myorders");
                                            }}
                                        >
                                            <span>Đơn hàng của tôi</span>
                                            <span className="dropdown-badge">(3)</span>
                                        </button>

                                        <button
                                            type="button"
                                            className="account-dropdown-item"
                                            onClick={() => {
                                                setAccountOpen(false);
                                                navigate("/customer/favorites");
                                            }}
                                        >
                                            <span>Sản phẩm yêu thích</span>
                                            <span className="dropdown-badge">(12)</span>
                                        </button>

                                        <div className="dropdown-divider" />

                                        <button type="button" className="account-dropdown-item logout" onClick={handleLogout}>
                                            <span>Đăng xuất</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/auth/login" className="login-button">
                                <FiUser className="login-button__icon" />
                                <span>Đăng nhập</span>
                            </Link>
                        )}

                        <Link to="/customer/cart" className="cart-button">
                            <div className="cart-icon-wrap">
                                <FiShoppingBag />
                                <span className="cart-badge">0</span>
                            </div>
                            <div className="cart-content">
                                <small>CART</small>
                                <strong>$0.00</strong>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}