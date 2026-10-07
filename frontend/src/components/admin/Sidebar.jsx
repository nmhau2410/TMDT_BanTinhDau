import React from 'react';
import {NavLink} from 'react-router-dom';
import './Sidebar.css';

const AdminSidebar = () => {
    return (
        <aside className="admin-sidebar">
            <div className="sidebar-brand">
                <div className="brand-logo">
                    <div className="logo-icon"></div>
                </div>
                <div className="brand-info">
                    <h2>Oilia</h2>
                    <span>QUẢN LÝ XƯỞNG</span>
                </div>
            </div>

            <nav className="sidebar-menu">
                <NavLink
                    to="/admin/dashboard"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    Tổng quan vận hành
                </NavLink>

                <NavLink
                    to="/admin/workshops"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path
                            d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    </svg>
                    Quản lý chủ xưởng
                </NavLink>

                <NavLink
                    to="/admin/customers"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    Quản lý khách hàng
                </NavLink>

                <NavLink
                    to="/admin/revenue"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="1" x2="12" y2="23"/>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                    Quản lý doanh thu và phí sàn
                </NavLink>

                <NavLink
                    to="/admin/orders"
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
                    to="/admin/materials"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <ellipse cx="12" cy="5" rx="9" ry="3"/>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                    </svg>
                    Quản lý nguyên liệu
                </NavLink>

                <NavLink
                    to="/admin/promotions"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                        <line x1="7" y1="7" x2="7.01" y2="7"/>
                    </svg>
                    Quản lý voucher và khuyến mãi
                </NavLink>

                <NavLink
                    to="/admin/reviews"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    Phản hồi & đánh giá
                </NavLink>

                <NavLink
                    to="/admin/support"
                    className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                    Phản hồi và hỗ trợ
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
        </aside>
    );
};

export default AdminSidebar;