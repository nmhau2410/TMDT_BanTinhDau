import React, { useState } from "react";
import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MOCK_USER = {
    name: "Minh Hau",
    email: "minhhau@nordic.vn",
    avatar: "MH",
    role: "VIP",
};

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const isActive = (path) => location.pathname.startsWith(path);

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem("isLoggedIn") === "true";
    });
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        setDropdownOpen(false);
        navigate("/");
    };

    return (
        <header className="site-header">
            <div className="header-top">
                <div className="header-top__shipping">
                    <strong>FREE SHIPPING ON ORDERS OVER $150</strong>
                    <span>|</span>
                    <span>Su dung ma: TINHDAU10 giam 10%</span>
                </div>
                <span className="header-top__support">Help &amp; Support</span>
            </div>

            <div className="header-main">
                <div className="header-container">

                    <Link to="/" className="header-logo">
                        <span className="header-logo__icon"></span>
                        <span>Oilia</span>
                    </Link>

                    <nav className="header-nav">
                        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Trang chu</Link>
                        <Link to="/products" className={isActive("/products") ? "active" : ""}>San pham</Link>
                        <Link to="/customize" className={`nav-personalize${isActive("/customize") ? " active" : ""}`}>✦ Thiet ke ca nhan</Link>
                        <Link to="/workshops" className={isActive("/workshops") ? "active" : ""}>Xuong</Link>
                        <Link to="/uu-dai" className={isActive("/uu-dai") ? "active" : ""}>Uu dai</Link>
                    </nav>

                    <div className="header-search">
                        <span className="header-search__icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="7" />
                                <path d="m20 20-3.5-3.5" />
                            </svg>
                        </span>
                        <input type="text" placeholder="Tim kiem tinh dau, thuong hieu..." />
                        <span className="header-search__shortcut">⌘K</span>
                    </div>

                    <div className="header-actions">

                        {isLoggedIn ? (
                            <div className="user-dropdown-wrap">
                                <button
                                    type="button"
                                    className="user-avatar-btn"
                                    onClick={() => setDropdownOpen((v) => !v)}
                                >
                                    <span className="user-avatar">{MOCK_USER.avatar}</span>
                                    <span className="user-name">{MOCK_USER.name}</span>
                                    <span className={`user-chevron${dropdownOpen ? " open" : ""}`}>▾</span>
                                </button>

                                {dropdownOpen && (
                                    <div className="user-dropdown" onClick={() => setDropdownOpen(false)}>
                                        <div className="user-dropdown__header">
                                            <div className="user-dropdown__avatar">{MOCK_USER.avatar}</div>
                                            <div>
                                                <div className="user-dropdown__name">
                                                    {MOCK_USER.name}
                                                    <span className="user-vip">{MOCK_USER.role}</span>
                                                </div>
                                                <div className="user-dropdown__email">{MOCK_USER.email}</div>
                                            </div>
                                        </div>
                                        <div className="user-dropdown__divider" />
                                        <Link to="/profile" className="user-dropdown__item">👤 Ho so ca nhan</Link>
                                        <Link to="/my-orders" className="user-dropdown__item">📦 Don hang cua toi</Link>
                                        <Link to="/wishlist" className="user-dropdown__item">❤️ San pham yeu thich</Link>
                                        <Link to="/account" className="user-dropdown__item">⚙️ Cai dat tai khoan</Link>
                                        <div className="user-dropdown__divider" />
                                        <button type="button" className="user-dropdown__item logout" onClick={handleLogout}>
                                            🚪 Dang xuat
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
                                <span>Dang nhap</span>
                            </Link>
                        )}

                        <Link to="/cart" className="cart-button">
                            <span className="cart-button__icon">
                                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <path d="M4 7h16l-1 13H5L4 7Z" />
                                    <path d="M8 7a4 4 0 0 1 8 0" />
                                </svg>
                                <span className="cart-badge">3</span>
                            </span>
                            <span className="cart-content">
                                <small>CART</small>
                                <strong>555.000d</strong>
                            </span>
                        </Link>

                    </div>
                </div>
            </div>
        </header>
    );
}