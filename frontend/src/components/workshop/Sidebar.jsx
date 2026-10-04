import React from 'react';
import {NavLink} from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (<aside className="sidebar">
            <div className="sidebar-brand">
                <div className="brand-logo">
                    <div className="logo-icon"></div>
                </div>
                <div className="brand-info">
                    <h2>Oilia</h2>
                    <span>QUẢN LÝ XƯỞNG</span>
                </div>
            </div>

            <div className="location-select">
                <span className="dot"></span>
                <span>XƯỞNG ĐÀ LẠT - 01</span>
                <span className="arrow">▼</span>
            </div>

            <nav className="sidebar-menu">
                <NavLink
                    to="/workshop/dashboard"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="20" x2="18" y2="10"/>
                        <line x1="12" y1="20" x2="12" y2="4"/>
                        <line x1="6" y1="20" x2="6" y2="14"/>
                    </svg>
                    Báo cáo & thống kê
                </NavLink>

                <NavLink
                    to="/workshop/categories"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="8" y1="6" x2="21" y2="6"/>
                        <line x1="8" y1="12" x2="21" y2="12"/>
                        <line x1="8" y1="18" x2="21" y2="18"/>
                        <line x1="3" y1="6" x2="3.01" y2="6"/>
                        <line x1="3" y1="12" x2="3.01" y2="12"/>
                        <line x1="3" y1="18" x2="3.01" y2="18"/>
                    </svg>
                    Quản lý danh mục
                </NavLink>

                <NavLink
                    to="/workshop/products"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path
                            d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    </svg>
                    Quản lý sản phẩm
                </NavLink>

                <NavLink
                    to="/workshop/packaging"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path
                            d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                    Quản lý bao bì
                </NavLink>

                <NavLink
                    to="/workshop/materials"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <ellipse cx="12" cy="5" rx="9" ry="3"/>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                    </svg>
                    Kho nguyên liệu
                </NavLink>

                <NavLink
                    to="/workshop/info"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="16" x2="12" y2="12"/>
                        <line x1="12" y1="8" x2="12.01" y2="8"/>
                    </svg>
                    Thông tin xưởng
                </NavLink>

                <NavLink
                    to="/workshop/custom-orders"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                    Đơn hàng gia công
                </NavLink>

                <NavLink
                    to="/workshop/reviews"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    Phản hồi & đánh giá
                </NavLink>

                <NavLink
                    to="/workshop/orders"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                    Quản lý đơn hàng
                </NavLink>

                <NavLink
                    to="/workshop/progress"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                        <polyline points="17 6 23 6 23 12"/>
                    </svg>
                    Cập nhật tiến độ
                </NavLink>

                <NavLink
                    to="/workshop/rules"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="4" y1="21" x2="4" y2="14"/>
                        <line x1="4" y1="10" x2="4" y2="3"/>
                        <line x1="12" y1="21" x2="12" y2="12"/>
                        <line x1="12" y1="8" x2="12" y2="3"/>
                        <line x1="20" y1="21" x2="20" y2="16"/>
                        <line x1="20" y1="12" x2="20" y2="3"/>
                        <line x1="1" y1="14" x2="7" y2="14"/>
                        <line x1="9" y1="8" x2="15" y2="8"/>
                        <line x1="17" y1="16" x2="23" y2="16"/>
                    </svg>
                    Cấu hình quy tắc
                </NavLink>
            </nav>

            <div className="sidebar-footer">
                <div className="user-profile">
                    <div className="avatar">HN</div>
                    <div className="user-info">
                        <span className="name">Hiếu Nguyễn</span>
                        <span className="role">GIÁM SÁT VẬN HÀNH XƯỞNG</span>
                    </div>
                </div>
                <button className="logout-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                        <polyline points="16 17 21 12 16 7"/>
                        <line x1="21" y1="12" x2="9" y2="12"/>
                    </svg>
                    ĐĂNG XUẤT
                </button>
            </div>
        </aside>);
};

export default Sidebar;