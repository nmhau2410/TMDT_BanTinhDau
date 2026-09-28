import React from "react";
import "./Header.css";

export default function Header() {
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

                    <a href="/" className="header-logo">
                        <span className="header-logo__icon"></span>
                        <span>Oilia</span>
                    </a>

                    <nav className="header-nav">
                        <a href="/">Tất cả</a>
                        <a href="/xuong">Xưởng</a>
                        <a href="/bo-san-pham">Bộ sản phẩm</a>
                        <a href="/uu-dai" className="active">
                            Ưu đãi
                        </a>
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
                        <a
                            href="/login"
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
                        </a>

                        {/* Giỏ hàng */}
                        <a
                            href="/cart"
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
                        </a>

                    </div>
                </div>
            </div>
        </header>
    );
}