import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
                <div className="header-top__shipping">
                    <strong>FREE SHIPPING ON ORDERS OVER $150</strong>
                    <span>|</span>
                    <span>Sử dụng mã: TINHDAU10 giảm 10%</span>
                </div>
                <span className="header-top__support">Help &amp; Support</span>
            </div>
            <div className="header-main">
                <div className="header-container">
                    <Link to="/customer" className="header-logo">
                        <span className="header-logo__icon"></span>
                        <span>Oilia</span>
                    </Link>
                    <nav className="header-nav">
                        <Link to="/customer">Tất cả</Link>
                        <Link to="/customer/products">Bộ sản phẩm</Link>
                        <Link to="/customer/custom-perfume" className="highlight-link">
                            Thiết kế cá nhân hóa
                        </Link>
                        <Link to="/customer/workshop">Xưởng</Link>
                        <Link to="/customer/favorites">Yêu thích</Link>
                    </nav>
                    <div className="header-search">
                        <span className="header-search__icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="7" />
                                <path d="m20 20-3.5-3.5" />
                            </svg>
                        </span>
                        <input type="text" placeholder="Tìm kiếm tinh dầu, thương hiệu..." />
                        <span className="header-search__shortcut">⌘K</span>
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
                                        <span className="account-name">
                                            Minh Hậu <small>VIP</small>
                                        </span>
                                        <span className="account-email">minhhau@gmail.com</span>
                                    </span>
                                    <span className="account-arrow">˅</span>
                                </button>
                                {accountOpen && (
                                    <div className="account-dropdown">
                                        <button
                                            type="button"
                                            className="account-dropdown-item active"
                                            onClick={() => {
                                                setAccountOpen(false);
                                                navigate("/customer/account");
                                            }}
                                        >
                                            <span className="dropdown-icon">♙</span>
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
                                            <span className="dropdown-icon">◈</span>
                                            <span>Đơn hàng của tôi</span>
                                            <span className="dropdown-badge">3 đang giao</span>
                                        </button>

                                        <button
                                            type="button"
                                            className="account-dropdown-item"
                                            onClick={() => {
                                                setAccountOpen(false);
                                                navigate("/customer/favorites");
                                            }}
                                        >
                                            <span className="dropdown-icon">♡</span>
                                            <span>Sản phẩm yêu thích</span>
                                        </button>

                                        <button type="button" className="account-dropdown-item">
                                            <span className="dropdown-icon">⚙</span>
                                            <span>Cài đặt tài khoản</span>
                                        </button>

                                        <div className="dropdown-divider" />

                                        <button type="button" className="account-dropdown-item logout" onClick={handleLogout}>
                                            <span className="dropdown-icon">⇥</span>
                                            <span>Đăng xuất</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/auth/login" className="login-button">
                                <span className="login-button__icon">
                                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <circle cx="12" cy="8" r="3.5" />
                                        <path d="M5.5 20c.7-3.5 3-5.5 6.5-5.5s5.8 2 6.5 5.5" />
                                    </svg>
                                </span>
                                <span>Đăng nhập</span>
                            </Link>
                        )}
                        <Link to="/customer/cart" className="cart-button">
                            <span className="cart-button__icon">
                                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <path d="M4 7h16l-1 13H5L4 7Z" />
                                    <path d="M8 7a4 4 0 0 1 8 0" />
                                </svg>
                                <span className="cart-badge">0</span>
                            </span>
                            <span className="cart-content">
                                <small>CART</small>
                                <strong>$0.00</strong>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}