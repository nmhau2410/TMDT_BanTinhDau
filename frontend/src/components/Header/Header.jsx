import React, { useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
export default function Header() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const isActive = (path) => location.pathname.startsWith(path);

    return (
        <header className="site-header">
            <div className="header-top">
                <div className="header-top__shipping">
                    <strong>FREE SHIPPING ON ORDERS OVER $150</strong>
                    <span>|</span>
                    <span>Sử dụng mã: TINHDAU10 giảm 10%</span>
                </div>

                <span className="header-top__support">
          Help &amp; Support
        </span>
            </div>

            <div className="header-main">
                <div className="header-container">

                    <Link to="/" className="header-logo">
                        <span className="header-logo__icon"></span>
                        <span>Oilia</span>
                    </Link>

                    <nav className="header-nav">
                        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                            Trang chủ</Link>
                        <Link to="/customer/products" className={isActive("/customer/products") ? "active" : ""}>
                            Sản phẩm</Link>
                        <Link to="/customer/customize" className={`nav-personalize${isActive("/customer/customize") ? " active" : ""}`}>
                            ✦ Thiết kế cá nhân</Link>
                        <Link to="/workshop/dashboard" className={isActive("/workshop") ? "active" : ""}>
                            Xưởng</Link>
                        <Link to="/uu-dai" className={isActive("/uu-dai") ? "active" : ""}>
                            Ưu đãi</Link>
                    </nav>

                    <div className="header-search">
            <span className="header-search__icon">
              <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </span>

                        <input
                            type="text"
                            placeholder="Tìm kiếm tinh dầu, thương hiệu..."
                        />

                        <span className="header-search__shortcut">
              ⌘K
            </span>
                    </div>

                    <div className="header-actions">

                        {/* Đăng nhập */}
                        <Link
                            to="/auth/login"
                            className="login-button"
                        >
              <span className="login-button__icon">
                <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                >
                  <circle cx="12" cy="8" r="3.5" />
                  <path d="M5.5 20c.7-3.5 3-5.5 6.5-5.5s5.8 2 6.5 5.5" />
                </svg>
              </span>

                            <span>Đăng nhập</span>
                        </Link>

                        {/* Giỏ hàng */}
                        <Link
                            to="/cart"
                            className="cart-button"
                        >
              <span className="cart-button__icon">

                <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                >
                  <path d="M4 7h16l-1 13H5L4 7Z" />
                  <path d="M8 7a4 4 0 0 1 8 0" />
                </svg>

                <span className="cart-badge">
                  0
                </span>
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