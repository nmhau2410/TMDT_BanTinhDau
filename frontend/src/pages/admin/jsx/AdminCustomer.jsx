import React, { useState } from 'react';
import AdminSidebar from '../../../components/admin/Sidebar';
import '../css/AdminCustomer.css';

const initialCustomers = [
    {
        id: 'CUST-882',
        name: 'Nguyễn Lan Anh',
        isVip: true,
        email: 'lananh.scent@gmail.com',
        phone: '+84 912 345 882',
        tier: 'VIP Diamond',
        tierType: 'diamond',
        formulas: '15 công thức',
        formulaSub: '4 lô đang re-order Lab',
        ltv: '42.500.000đ',
        ordersCount: '24 đơn thành công',
        lastActive: '2 giờ trước',
        lastAction: 'Xem nốt xạ hương',
        status: 'Hoạt động',
        statusType: 'active',
        joinDate: '03/2023',
        conversionRate: '98%',
        loyaltyPts: '2.450 pts',
        scentVaultCount: '15 mùi',
        walletBalance: '1.250.000đ'
    },
    {
        id: 'CUST-1044',
        name: 'Trần Hoàng Long',
        isVip: false,
        email: 'long.tran@scentcraft.vn',
        phone: '+84 908 119 220',
        tier: 'Gold (Vàng)',
        tierType: 'gold',
        formulas: '6 công thức',
        formulaSub: '1 re-order nước hoa ô tô',
        ltv: '18.200.000đ',
        ordersCount: '9 đơn hàng',
        lastActive: 'Hôm qua, 18:30',
        lastAction: 'Yêu cầu RFQ mẫu mới',
        status: 'Hoạt động',
        statusType: 'active',
        joinDate: '08/2023',
        conversionRate: '85%',
        loyaltyPts: '980 pts',
        scentVaultCount: '6 mùi',
        walletBalance: '450.000đ'
    },
    {
        id: 'CUST-1492',
        name: 'Phạm Minh Đức',
        isVip: false,
        email: 'duc.pm@atelier.com',
        phone: '+84 977 443 192',
        tier: 'Silver (Bạc)',
        tierType: 'silver',
        formulas: '2 công thức',
        formulaSub: 'Chưa re-order lô',
        ltv: '4.150.000đ',
        ordersCount: '2 đơn hàng',
        lastActive: '3 ngày trước',
        lastAction: 'Thanh toán Escrow',
        status: 'Hoạt động',
        statusType: 'active',
        joinDate: '01/2024',
        conversionRate: '60%',
        loyaltyPts: '210 pts',
        scentVaultCount: '2 mùi',
        walletBalance: '0đ'
    },
    {
        id: 'CUST-2183',
        name: 'Vũ Thúy Tiên',
        isVip: false,
        email: 'thuytien.vu@boutique.com',
        phone: '+84 934 888 129',
        tier: 'Thành viên mới',
        tierType: 'new',
        formulas: '0 công thức',
        formulaSub: 'Đang thử nghiệm Lab AI',
        ltv: '0đ',
        ordersCount: 'Chưa có đơn',
        lastActive: '10 phút trước',
        lastAction: 'Đăng ký tài khoản',
        status: 'Mới kích hoạt',
        statusType: 'newly-active',
        joinDate: '10/2026',
        conversionRate: '0%',
        loyaltyPts: '0 pts',
        scentVaultCount: '0 mùi',
        walletBalance: '0đ'
    },
    {
        id: 'CUST-0911',
        name: 'Hoàng Quốc Huy',
        isVip: false,
        email: 'huy.hq@scamdomain.fake',
        phone: '+84 901 000 999',
        tier: 'Vãng lai',
        tierType: 'guest',
        formulas: '1 công thức',
        formulaSub: 'Bị khiếu nại bản quyền hương',
        formulaSubAlert: true,
        ltv: '8.200.000đ',
        ordersAlert: 'Đang giữ Escrow tranh chấp',
        lastActive: '12 ngày trước',
        lastAction: 'Admin tạm khóa',
        status: 'Tạm khóa',
        statusType: 'blocked',
        joinDate: '05/2023',
        conversionRate: '40%',
        loyaltyPts: '150 pts',
        scentVaultCount: '1 mùi',
        walletBalance: '0đ'
    }
];

const CustomerManagement = () => {
    const [selectedRows, setSelectedRows] = useState(['CUST-882', 'CUST-1044', 'CUST-1492']);

    const [activeCustomer, setActiveCustomer] = useState(null);
    const [activeTab, setActiveTab] = useState('scent-vault');

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(initialCustomers.map(c => c.id));
        } else {
            setSelectedRows([]);
        }
    };

    const handleSelectRow = (e, id) => {
        e.stopPropagation();
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter(item => item !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    const handleRowClick = (customer) => {
        setActiveCustomer(customer);
    };

    return (
        <div className="admin-container">
            <AdminSidebar />

            <main className="admin-main">
                <div className="admin-header">
                    <div>
                        <div className="breadcrumb">
                            <span>Quản trị hệ thống</span> / <span>Người dùng</span> / <span className="active">Danh sách khách hàng & Scent Profile</span>
                        </div>
                        <h1 className="page-title">Quản trị Khách hàng & Scent Vault</h1>
                    </div>
                    <div className="header-actions">
                        <button className="btn-light">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                            Xuất dữ liệu (GDPR/Excel)
                        </button>
                        <button className="btn-light-purple">
                            🎁 Tặng Voucher hàng loạt
                        </button>
                        <button className="primary-btn red">
                            + Thêm khách hàng thủ công
                        </button>
                    </div>
                </div>

                <div className="customer-stats-grid">
                    <div className="cust-stat-card">
                        <div className="stat-header">
                            <span className="stat-label">TỔNG KHÁCH HÀNG</span>
                            <span className="icon-square blue">👤</span>
                        </div>
                        <div className="stat-number">12.450</div>
                        <div className="stat-badges-row">
                            <span className="pill green">11.890 Hoạt động</span>
                            <span className="pill blue">+420 Mới</span>
                            <span className="pill pink">140 Khóa</span>
                        </div>
                    </div>

                    <div className="cust-stat-card">
                        <div className="stat-header">
                            <span className="stat-label">GIÁ TRỊ VÒNG ĐỜI TB (LTV)</span>
                            <span className="icon-square green">💵</span>
                        </div>
                        <div className="stat-number">
                            4.850.000đ <small>/ khách</small>
                        </div>
                        <div className="stat-trend-line">
                            <span className="green-text">📈 +18.4% so với kỳ trước</span>
                            <svg className="mini-chart" viewBox="0 0 60 20">
                                <path d="M0 15 Q15 18 30 10 T60 2" fill="none" stroke="#10b981" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>

                    <div className="cust-stat-card">
                        <div className="stat-header">
                            <span className="stat-label">TỶ LỆ RE-ORDER CÔNG THỨC HƯƠNG</span>
                            <span className="icon-square purple">🔄</span>
                        </div>
                        <div className="stat-number">
                            42.8% <span className="trend-badge green">+5.2%</span>
                        </div>
                        <div className="stat-sub-note">
                            Đặt lại công thức riêng từ xưởng Lab Olla
                        </div>
                    </div>

                    <div className="cust-stat-card">
                        <div className="stat-header">
                            <span className="stat-label">TÀI KHOẢN VIP & TIER CAO</span>
                            <span className="icon-square yellow">⭐</span>
                        </div>
                        <div className="stat-number">
                            1.820 <small>VIP</small>
                        </div>
                        <div className="stat-sub-note justify">
                            <span>Hạng Vàng & Kim Cương</span>
                            <span className="gray-bold">&gt; 15tr/năm</span>
                        </div>
                    </div>
                </div>

                <div className="cust-filter-card">
                    <div className="search-bar-row">
                        <div className="search-input-wrapper">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                            <input type="text" placeholder="Tìm theo Họ tên, Email, SĐT, hoặc Mã CUST-xxx..." />
                        </div>
                        <select className="cust-select"><option>Phân hạng: Tất cả</option></select>
                        <select className="cust-select"><option>Hành vi: Tất cả</option></select>
                        <select className="cust-select"><option>Chi tiêu: Tất cả</option></select>
                        <select className="cust-select"><option>Trạng thái: Hoạt động</option></select>
                    </div>

                    <div className="bulk-actions-banner">
                        <div className="bulk-left">
                            <span className="red-circle-badge">{selectedRows.length}</span>
                            <strong className="selected-text">Đã chọn {selectedRows.length} khách hàng từ danh sách</strong>
                            <button className="clear-btn" onClick={() => setSelectedRows([])}>Bỏ chọn</button>
                        </div>
                        <div className="bulk-right-buttons">
                            <button className="bulk-btn outline">Gửi Voucher ưu đãi</button>
                            <button className="bulk-btn outline">Xuất GDPR Zip</button>
                            <button className="bulk-btn yellow">Gán nhãn rủi ro</button>
                            <button className="bulk-btn red">Khóa tài khoản</button>
                        </div>
                    </div>
                </div>

                <div className="cust-table-container">
                    <table className="cust-table">
                        <thead>
                        <tr>
                            <th width="40">
                                <input
                                    type="checkbox"
                                    onChange={handleSelectAll}
                                    checked={selectedRows.length === initialCustomers.length}
                                />
                            </th>
                            <th>Khách hàng (ID & Họ tên)</th>
                            <th>Liên hệ</th>
                            <th>Phân hạng</th>
                            <th>Công thức hương tạo (USP)</th>
                            <th>Đơn hàng & LTV</th>
                            <th>Hoạt động gần nhất</th>
                            <th>Trạng thái</th>
                            <th>Thao tác</th>
                        </tr>
                        </thead>
                        <tbody>
                        {initialCustomers.map((c) => {
                            const isSelected = selectedRows.includes(c.id);
                            return (
                                <tr
                                    key={c.id}
                                    className={`clickable-row ${isSelected ? 'selected-row' : ''}`}
                                    onClick={() => handleRowClick(c)}
                                >
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={(e) => handleSelectRow(e, c.id)}
                                        />
                                    </td>
                                    <td>
                                        <div className="cust-name-cell">
                                            <div className="cust-avatar-circle">{c.name.split(' ').map(n => n[0]).slice(-2).join('')}</div>
                                            <div>
                                                <div className="cust-name-row">
                                                    <strong>{c.name}</strong>
                                                    {c.isVip && <span className="vip-star-badge">★ VIP</span>}
                                                </div>
                                                <small className="cust-id">Mã: {c.id}</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="contact-cell">
                                            <div className="email">{c.email}</div>
                                            <div className="phone">{c.phone}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`tier-badge ${c.tierType}`}>{c.tier}</span>
                                    </td>
                                    <td>
                                        <div className="formula-cell">
                                            <span className="formula-title">🧪 {c.formulas}</span>
                                            <small className={`formula-sub ${c.formulaSubAlert ? 'alert' : ''}`}>{c.formulaSub}</small>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="ltv-cell">
                                            <strong className="ltv-val">{c.ltv}</strong>
                                            {c.ordersAlert ? (
                                                <small className="orders-alert">{c.ordersAlert}</small>
                                            ) : (
                                                <small className="orders-count">{c.ordersCount}</small>
                                            )}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="activity-cell">
                                            <div className="time">{c.lastActive}</div>
                                            <small className="action">{c.lastAction}</small>
                                        </div>
                                    </td>
                                    <td>
                                            <span className={`status-pill ${c.statusType}`}>
                                                • {c.status}
                                            </span>
                                    </td>
                                    <td>
                                        <button
                                            className={c.isVip ? "action-btn-red" : "action-btn-outline"}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleRowClick(c);
                                            }}
                                        >
                                            {c.isVip ? 'Xem hồ sơ' : 'Chi tiết'}
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>

                    <div className="table-pagination">
                        <div className="pagination-left">
                            <span>Hiển thị <strong>1 - 5</strong> trên tổng số <strong>12.450</strong> khách hàng</span>
                        </div>
                        <div className="pagination-right">
                            <button className="page-btn disabled">Trang trước</button>
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">3</button>
                            <span className="dots">...</span>
                            <button className="page-btn">249</button>
                            <button className="page-btn">Trang sau</button>
                        </div>
                    </div>
                </div>

                {activeCustomer && (
                    <div className="cust-drawer-overlay" onClick={() => setActiveCustomer(null)}>
                        <div className="cust-drawer-card" onClick={(e) => e.stopPropagation()}>
                            <div className="cust-drawer-header">
                                <div className="drawer-user-row">
                                    <div className="user-avatar-pink">
                                        {activeCustomer.name.split(' ').map(n => n[0]).slice(-2).join('')}
                                    </div>
                                    <div className="user-title-col">
                                        <div className="user-name-line">
                                            <h2>{activeCustomer.name}</h2>
                                            <span className="vip-badge-gold">★ VIP Diamond</span>
                                        </div>
                                        <div className="user-sub-line">
                                            <span>Mã: <strong>{activeCustomer.id}</strong></span> •
                                            <span>Tham gia: {activeCustomer.joinDate || '03/2023'}</span> •
                                            <span className="green-text">Chốt đơn: {activeCustomer.conversionRate || '98%'}</span>
                                        </div>
                                    </div>
                                    <div className="drawer-header-actions">
                                        <button className="icon-action-btn" title="Chỉnh sửa">🔑</button>
                                        <button className="icon-action-btn" title="Tạm khóa">🚫</button>
                                        <button className="close-drawer-btn" onClick={() => setActiveCustomer(null)}>✕</button>
                                    </div>
                                </div>

                                <div className="drawer-metrics-bar">
                                    <div className="metric-box">
                                        <span className="m-label">TỔNG LTV</span>
                                        <strong className="m-val">{activeCustomer.ltv}</strong>
                                    </div>
                                    <div className="metric-box">
                                        <span className="m-label">ĐÃ CHỐT</span>
                                        <strong className="m-val">{activeCustomer.ordersCount || '24 đơn'}</strong>
                                    </div>
                                    <div className="metric-box">
                                        <span className="m-label">SCENT VAULT</span>
                                        <strong className="m-val purple">{activeCustomer.scentVaultCount || '15 mùi'}</strong>
                                    </div>
                                    <div className="metric-box">
                                        <span className="m-label">LOYALTY PTS</span>
                                        <strong className="m-val yellow">{activeCustomer.loyaltyPts || '2.450 pts'}</strong>
                                    </div>
                                </div>

                                <div className="drawer-tabs-nav">
                                    <button
                                        className={`tab-nav-btn ${activeTab === 'info' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('info')}
                                    >
                                        1. Thông tin & Bảo mật
                                    </button>
                                    <button
                                        className={`tab-nav-btn ${activeTab === 'scent-vault' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('scent-vault')}
                                    >
                                        2. Scent Vault & Công thức <span className="pink-pill-count">15</span>
                                    </button>
                                    <button
                                        className={`tab-nav-btn ${activeTab === 'orders' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('orders')}
                                    >
                                        3. Đơn hàng & RFQ
                                    </button>
                                    <button
                                        className={`tab-nav-btn ${activeTab === 'complaints' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('complaints')}
                                    >
                                        4. Khiếu nại (0)
                                    </button>
                                    <button
                                        className={`tab-nav-btn ${activeTab === 'wallet' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('wallet')}
                                    >
                                        5. Ví & Điểm
                                    </button>
                                </div>
                            </div>

                            <div className="cust-drawer-body">
                                {activeTab === 'scent-vault' && (
                                    <>
                                        <div className="vault-section-title">
                                            <div>
                                                <h3>Kho công thức hương cá nhân (Scent Vault)</h3>
                                                <p>Lưu trữ bản quyền công thức, tỉ lệ phối tầng hương và xưởng gia công chỉ định.</p>
                                            </div>
                                            <span className="saved-formulas-badge">15 Công thức đã lưu</span>
                                        </div>

                                        <div className="formula-detail-card highlight-border">
                                            <div className="formula-header-row">
                                                <div>
                                                    <div className="formula-title-line">
                                                        <h4>Aura de Grasse No. 04</h4>
                                                        <span className="scent-id-tag">#SCT-882-04</span>
                                                    </div>
                                                    <p className="formula-sub-spec">Eau de Parfum (EDP 50ml) • Nồng độ tinh dầu: 20%</p>
                                                </div>
                                                <span className="reorder-status-badge green">✔ Đã gia công 3 lô (Re-ordered)</span>
                                            </div>

                                            <div className="exclusive-factory-banner">
                                                <span>Xưởng gia công độc quyền: <strong>Mộc Perfume Lab</strong> (WS-102)</span>
                                                <span className="gmp-tag">Chuẩn GMP Lab</span>
                                            </div>

                                            <div className="scent-pyramid-container">
                                                <div className="pyramid-header">
                                                    <span>CẤU TRÚC THÁP NỐT HƯƠNG (SCENT PYRAMID)</span>
                                                    <span>TỈ LỆ HÒA TAN CHUẨN</span>
                                                </div>

                                                <div className="pyramid-row top-notes">
                                                    <div>
                                                        <strong>HƯƠNG ĐẦU (TOP NOTES) - 30%</strong>
                                                        <p>Cam Bergamot Ý, Quả lý chua đen, Tiêu hồng hữu cơ</p>
                                                    </div>
                                                    <span className="time-badge">0 - 15 phút</span>
                                                </div>

                                                <div className="pyramid-row middle-notes">
                                                    <div>
                                                        <strong>HƯƠNG GIỮA (HEART / MIDDLE NOTES) - 50%</strong>
                                                        <p>Hoa hồng Grasse Pháp, Hoa nhài Sambac, Tinh dầu hoa diên vĩ</p>
                                                    </div>
                                                    <span className="time-badge">15m - 4 giờ</span>
                                                </div>

                                                <div className="pyramid-row base-notes">
                                                    <div>
                                                        <strong>HƯƠNG CUỐI (BASE NOTES) - 20%</strong>
                                                        <p>Gỗ tuyết tùng Virginia, Xạ hương trắng Cashmere, Hổ phách xám</p>
                                                    </div>
                                                    <span className="time-badge">4 - 12 giờ</span>
                                                </div>
                                            </div>

                                            <div className="formula-actions-bar">
                                                <button className="btn-pink-soft">Xem chi tiết nốt hương Lab</button>
                                                <button className="btn-white-outline">Tái đặt hàng với xưởng</button>
                                                <button className="btn-text-link">📑 Tải IFRA Compliance</button>
                                            </div>
                                        </div>

                                        <div className="formula-detail-card simple">
                                            <div className="formula-header-row">
                                                <div>
                                                    <div className="formula-title-line">
                                                        <h4>Midnight Velvet Scented Candle</h4>
                                                        <span className="scent-id-tag">#SCT-882-08</span>
                                                    </div>
                                                    <p className="formula-sub-spec">Nến thơm sáp đậu nành cao cấp 220g</p>
                                                </div>
                                                <span className="reorder-status-badge blue">Đang lưu mẫu Lab</span>
                                            </div>
                                            <p className="scent-notes-line">
                                                <strong>Tầng hương chính:</strong> Gỗ đàn hương Mysore, Vani Madagascar nguyên chất, Hoắc hương Sumatra.
                                            </p>
                                        </div>

                                        <div className="store-credit-card">
                                            <div className="credit-top-row">
                                                <div>
                                                    <strong>Ví Store Credit của Khách hàng</strong>
                                                    <p>Cộng/Trừ số dư Store Credit (Bồi hoàn hoặc tri ân):</p>
                                                </div>
                                                <div className="credit-balance-val">
                                                    <span>Số dư:</span> <strong>{activeCustomer.walletBalance || '1.250.000đ'}</strong>
                                                </div>
                                            </div>
                                            <div className="credit-action-row">
                                                <button className="btn-dark-add">Cộng tiền vào ví khách</button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="cust-drawer-footer">
                                <button className="btn-link-danger">Khóa quyền tạo hương Lab</button>
                                <div className="footer-right-group">
                                    <button className="btn-footer-gray">Lưu ghi chú CSKH</button>
                                    <button className="btn-footer-red">Cập nhật hồ sơ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default CustomerManagement;