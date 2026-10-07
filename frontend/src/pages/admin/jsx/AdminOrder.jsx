import React, { useState } from 'react';
import AdminSidebar from '../../../components/admin/Sidebar';
import '../css/AdminOrder.css';

const initialOrders = [
    {
        id: '#ND-84210',
        customer: {
            name: 'Nguyễn Văn A',
            phone: '090 123 4567',
            address: 'Đống Đa, Hà Nội'
        },
        product: {
            name: 'Tinh dầu Lavender Pháp (10ml) + Tràm Trà',
            type: 'pha trộn',
            typeClass: 'blend',
            img: 'https://via.placeholder.com/40'
        },
        workshop: 'Nordic Lab',
        location: 'TP.HCM',
        date: '14/10/2023',
        price: '800.000đ',
        status: 'Đang giao',
        statusClass: 'delivering'
    },
    {
        id: '#ND-84210',
        customer: {
            name: 'Nguyễn Văn A',
            phone: '090 123 4567',
            address: 'Đống Đa, Hà Nội'
        },
        product: {
            name: 'Tinh dầu Lavender Pháp (10ml) + Tràm Trà',
            type: 'có sẵn',
            typeClass: 'ready',
            img: 'https://via.placeholder.com/40'
        },
        workshop: 'Nordic Lab',
        location: 'TP.HCM',
        date: '14/10/2023',
        price: '800.000đ',
        status: 'Đã giao',
        statusClass: 'delivered'
    },
    {
        id: '#ND-84210',
        customer: {
            name: 'Nguyễn Văn A',
            phone: '090 123 4567',
            address: 'Đống Đa, Hà Nội'
        },
        product: {
            name: 'Tinh dầu Lavender Pháp (10ml) + Tràm Trà',
            type: 'pha trộn',
            typeClass: 'blend',
            img: 'https://via.placeholder.com/40'
        },
        workshop: 'Nordic Lab',
        location: 'TP.HCM',
        date: '14/10/2023',
        price: '800.000đ',
        status: 'Đang giao',
        statusClass: 'delivering'
    },
    {
        id: '#ND-84210',
        customer: {
            name: 'Nguyễn Văn A',
            phone: '090 123 4567',
            address: 'Đống Đa, Hà Nội'
        },
        product: {
            name: 'Tinh dầu Lavender Pháp (10ml) + Tràm Trà',
            type: 'pha trộn',
            typeClass: 'blend',
            img: 'https://via.placeholder.com/40'
        },
        workshop: 'Nordic Lab',
        location: 'TP.HCM',
        date: '14/10/2023',
        price: '800.000đ',
        status: 'Đang giao',
        statusClass: 'delivering'
    },
    {
        id: '#ND-84210',
        customer: {
            name: 'Nguyễn Văn A',
            phone: '090 123 4567',
            address: 'Đống Đa, Hà Nội'
        },
        product: {
            name: 'Tinh dầu Lavender Pháp (10ml) + Tràm Trà',
            type: 'pha trộn',
            typeClass: 'blend',
            img: 'https://via.placeholder.com/40'
        },
        workshop: 'Nordic Lab',
        location: 'TP.HCM',
        date: '14/10/2023',
        price: '800.000đ',
        status: 'Đang giao',
        statusClass: 'delivering'
    },
    {
        id: '#ND-84210',
        customer: {
            name: 'Nguyễn Văn A',
            phone: '090 123 4567',
            address: 'Đống Đa, Hà Nội'
        },
        product: {
            name: 'Tinh dầu Lavender Pháp (10ml) + Tràm Trà',
            type: 'pha trộn',
            typeClass: 'blend',
            img: 'https://via.placeholder.com/40'
        },
        workshop: 'Nordic Lab',
        location: 'TP.HCM',
        date: '14/10/2023',
        price: '800.000đ',
        status: 'Đang hủy',
        statusClass: 'cancelling'
    }
];

const OrderManagement = () => {
    const [selectedOrders, setSelectedOrders] = useState([]);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedOrders(initialOrders.map((_, index) => index));
        } else {
            setSelectedOrders([]);
        }
    };

    const handleSelectRow = (index) => {
        if (selectedOrders.includes(index)) {
            setSelectedOrders(selectedOrders.filter((i) => i !== index));
        } else {
            setSelectedOrders([...selectedOrders, index]);
        }
    };

    return (
        <div className="admin-container">
            <AdminSidebar />

            <main className="admin-main">
                <div className="admin-header">
                    <div>
                        <div className="breadcrumb">
                            <span>Quản trị hệ thống</span> / <span className="active">Quản lý đơn đặt hàng</span>
                        </div>
                        <h1 className="page-title">Quản lý đơn đặt hàng</h1>
                        <p className="page-sub-title">
                            Giám sát dây chuyền pha chế hương thủ công, bao gói niêm phong và luồng điều vận liên xưởng B2B2C.
                        </p>
                    </div>
                    <div className="header-actions">
                        <button className="btn-light">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                            Xuất file vận đơn
                        </button>
                        <button className="primary-btn red">
                            <span className="plus-icon">+</span> Tạo đơn điều phối
                        </button>
                    </div>
                </div>

                <div className="order-stats-grid">
                    <div className="order-stat-card">
                        <div className="stat-top">
                            <span className="stat-label">Tất cả đơn</span>
                            <span className="stat-icon-box">📦</span>
                        </div>
                        <div className="stat-val-row">
                            <span className="stat-number">1,420</span>
                            <span className="trend-badge green">+12%</span>
                        </div>
                    </div>

                    <div className="order-stat-card">
                        <div className="stat-top">
                            <span className="stat-label">Chờ xác nhận</span>
                            <span className="dot-badge dark"></span>
                        </div>
                        <div className="stat-val-row">
                            <span className="stat-number">28</span>
                            <span className="sub-tag">Cần duyệt</span>
                        </div>
                    </div>

                    <div className="order-stat-card">
                        <div className="stat-top">
                            <span className="stat-label">Đang gia công</span>
                            <span className="dot-badge blue-light"></span>
                        </div>
                        <div className="stat-val-row">
                            <span className="stat-number">46</span>
                            <span className="sub-tag red-text">Tại 4 xưởng</span>
                        </div>
                    </div>

                    <div className="order-stat-card">
                        <div className="stat-top">
                            <span className="stat-label">Đang giao hàng</span>
                            <span className="dot-badge blue"></span>
                        </div>
                        <div className="stat-val-row">
                            <span className="stat-number">814</span>
                            <span className="sub-tag blue-text">Đơn hàng</span>
                        </div>
                    </div>

                    <div className="order-stat-card">
                        <div className="stat-top">
                            <span className="stat-label">Đã giao hàng</span>
                            <span className="dot-badge green"></span>
                        </div>
                        <div className="stat-val-row">
                            <span className="stat-number">814</span>
                            <span className="sub-tag green-text">Đơn hàng</span>
                        </div>
                    </div>

                    <div className="order-stat-card">
                        <div className="stat-top">
                            <span className="stat-label">Hoàn thành / Trả</span>
                            <span className="stat-icon-box check">✔</span>
                        </div>
                        <div className="stat-val-row">
                            <span className="stat-number">493</span>
                            <span className="sub-tag red-text">Hủy: 0.8%</span>
                        </div>
                    </div>
                </div>

                <div className="order-filter-card">
                    <div className="search-input-wrapper">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                        <input type="text" placeholder="Tìm kiếm mã vận đơn, tên khách, SĐT, mẻ hương.." />
                    </div>
                    <select className="order-select"><option>Thời gian đặt hàng</option></select>
                    <select className="order-select"><option>Tất cả xưởng gia công (4)</option></select>
                    <select className="order-select"><option>Tất cả trạng thái</option></select>
                </div>

                <div className="table-top-bar">
                    <span className="total-orders-text">Hiển thị 1 - 6 trên tổng số 142 đơn đặt hàng trực tiếp</span>
                    <button className="print-btn">🖨 In phiếu giao loạt</button>
                </div>

                <div className="order-table-container">
                    <table className="order-table">
                        <thead>
                        <tr>
                            <th width="40">
                                <input
                                    type="checkbox"
                                    onChange={handleSelectAll}
                                    checked={selectedOrders.length === initialOrders.length}
                                />
                            </th>
                            <th>MÃ ĐƠN</th>
                            <th>KHÁCH HÀNG</th>
                            <th>SẢN PHẨM</th>
                            <th>XƯỞNG CHẾ TÁC</th>
                            <th>NGÀY ĐẶT</th>
                            <th>TỔNG TIỀN</th>
                            <th>TRẠNG THÁI</th>
                            <th>THAO TÁC</th>
                        </tr>
                        </thead>
                        <tbody>
                        {initialOrders.map((order, idx) => {
                            const isSelected = selectedOrders.includes(idx);
                            return (
                                <tr key={idx} className={isSelected ? 'selected-row' : ''}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() => handleSelectRow(idx)}
                                        />
                                    </td>
                                    <td>
                                        <strong className="order-id-red">{order.id}</strong>
                                    </td>
                                    <td>
                                        <div className="cust-info">
                                            <strong>{order.customer.name}</strong>
                                            <small>{order.customer.phone}</small>
                                            <small>{order.customer.address}</small>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="prod-info-cell">
                                            <div className="prod-thumb">🍾</div>
                                            <div>
                                                <div className="prod-title">{order.product.name}</div>
                                                <div className={`prod-type ${order.product.typeClass}`}>
                                                    Loại: {order.product.type}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="workshop-info">
                                            <strong>{order.workshop}</strong>
                                            <small>{order.location}</small>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="order-date">{order.date}</span>
                                    </td>
                                    <td>
                                        <strong className="order-price">{order.price}</strong>
                                    </td>
                                    <td>
                                            <span className={`status-pill ${order.statusClass}`}>
                                                {order.status}
                                            </span>
                                    </td>
                                    <td>
                                        <button className="eye-btn" title="Xem chi tiết">👁️</button>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>

                    <div className="table-pagination">
                        <div className="pagination-left">
                            <span>Hiển thị</span>
                            <select className="per-page-select"><option>10 đơn/trang</option></select>
                            <span>dòng mỗi trang</span>
                        </div>
                        <div className="pagination-right">
                            <button className="page-btn disabled">&lt;</button>
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">3</button>
                            <span className="dots">...</span>
                            <button className="page-btn">15</button>
                            <button className="page-btn">&gt;</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default OrderManagement;