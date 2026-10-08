import React, { useState } from 'react';
import '../css/CampaignTab.css';

const initialCampaigns = [{
    id: 'CAMP-001',
    name: 'Flash Sale Thu Đông 2025',
    channel: 'TikTok Ads',
    budgetUsed: '18.5M',
    budgetTotal: '25M',
    revenue: '124.5Mđ',
    roas: '6.7x',
    status: 'Đang chạy',
    statusType: 'active'
}, {
    id: 'CAMP-002',
    name: 'Giờ Vàng Nến Thơm & Trầm Hương',
    channel: 'Google PMax',
    budgetUsed: '9.8M',
    budgetTotal: '12M',
    revenue: '68.2Mđ',
    roas: '7.0x',
    status: 'Đang chạy',
    statusType: 'active'
}, {
    id: 'CAMP-003',
    name: 'Ưu Đãi Tinh Dầu Tràm Trà Huế',
    channel: 'Facebook Ads',
    budgetUsed: '4.2M',
    budgetTotal: '15M',
    revenue: '22.8Mđ',
    roas: '5.4x',
    status: 'Tạm dừng',
    statusType: 'paused'
}, {
    id: 'CAMP-004',
    name: 'Xả Kho Đêm 21h-24h',
    channel: 'KOL Affiliate',
    budgetUsed: '0',
    budgetTotal: '10M',
    revenue: '--',
    roas: '--',
    status: 'Sắp tới',
    statusType: 'upcoming'
}, {
    id: 'CAMP-005',
    name: 'Flash Sale Sáng 09:00 - 12:00',
    channel: 'Đa kênh',
    budgetUsed: '8.0M',
    budgetTotal: '8M',
    revenue: '48.5Mđ',
    roas: '6.1x',
    status: 'Hoàn tất',
    statusType: 'completed'
}];

const selectedProductsMock = [{
    id: 'SKU-LAV-FR-01',
    name: 'Oải Hương True Lavender Pháp',
    workshop: 'Xưởng Mộc Châu',
    tag: 'Hương hoa cỏ',
    tagType: 'pink',
    originalPrice: '280.000đ',
    promoPrice: '182.000đ',
    stock: '250 chai'
}, {
    id: 'SKU-TEA-HU-08',
    name: 'Tinh Dầu Tràm Trà Tea Tree',
    workshop: 'Xưởng Cố Đô Huế',
    tag: 'Thảo mộc thanh khiết',
    tagType: 'green',
    originalPrice: '195.000đ',
    promoPrice: '146.000đ',
    stock: '400 chai'
}, {
    id: 'SKU-CAN-DL-03',
    name: 'Nến Thơm Rừng Thông Đà Lạt',
    workshop: 'Xưởng Đà Lạt Forest',
    tag: 'Hương gỗ thông ấm',
    tagType: 'yellow',
    originalPrice: '455.000đ',
    promoPrice: '320.000đ',
    stock: '150 hũ'
}];

const CampaignTab = () => {
    const [campaigns] = useState(initialCampaigns);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showDetailReport, setShowDetailReport] = useState(false);
    const [selectedCampaign, setSelectedCampaign] = useState(null);

    const [createForm, setCreateForm] = useState({
        name: 'Chiến Dịch Hương Thơm Thu Đông 2025 – Olia Fragrance Prime',
        startDate: '2025-11-20',
        startTime: '09:00',
        discountType: 'percent',
        discountVal: '35',
        products: selectedProductsMock
    });

    const handleRemoveProduct = (id) => {
        setCreateForm(prev => ({
            ...prev, products: prev.products.filter(p => p.id !== id)
        }));
    };

    const handleOpenDetailReport = (c) => {
        setSelectedCampaign(c);
        setShowDetailReport(true);
    };

    return (
        <div className="campaign-tab-container">
            <div className="tab-header-row">
                <div>
                    <h1 className="page-title">Quản lý chương trình khuyến mãi</h1>
                    <p className="page-sub">Quản lý các khung giờ vàng và tồn kho sản phẩm trợ giá sàn</p>
                </div>
                <div className="tab-header-actions">
                    <button className="btn-light">
                        <i className="fa-solid fa-file-export icon-btn"></i>
                        Xuất báo cáo
                    </button>
                    <button className="primary-btn red" onClick={() => setShowCreateModal(true)}>
                        <i className="fa-solid fa-plus icon-btn"></i> Tạo chương trình
                    </button>
                </div>
            </div>

            <div className="promo-stats-grid">
                <div className="promo-stat-card">
                    <div className="stat-top">
                        <span className="stat-label">DOANH THU</span>
                        <span className="icon-pink">
                            <i className="fa-solid fa-credit-card"></i>
                        </span>
                    </div>
                    <div className="stat-val-row">
                        <span className="stat-number">645.2Mđ</span>
                        <span className="badge-green">+24%</span>
                    </div>
                </div>

                <div className="promo-stat-card">
                    <div className="stat-top">
                        <span className="stat-label">ĐƠN HÀNG</span>
                        <span className="icon-gray">
                            <i className="fa-solid fa-bag-shopping"></i>
                        </span>
                    </div>
                    <div className="stat-val-row">
                        <span className="stat-number">1.420</span>
                        <span className="badge-green">+18%</span>
                    </div>
                </div>

                <div className="promo-stat-card">
                    <div className="stat-top">
                        <span className="stat-label">TỶ LỆ BÁN</span>
                        <span className="icon-yellow">
                            <i className="fa-solid fa-bolt"></i>
                        </span>
                    </div>
                    <div className="stat-val-row">
                        <span className="stat-number">85%</span>
                        <span className="sub-text-gray">312 sp đang giữ</span>
                    </div>
                </div>

                <div className="promo-stat-card">
                    <div className="stat-top">
                        <span className="stat-label">NGÂN SÁCH TRỢ GIÁ</span>
                        <span className="icon-purple">
                            <i className="fa-solid fa-store"></i>
                        </span>
                    </div>
                    <div className="stat-val-row">
                        <span className="stat-number">86.5Mđ</span>
                        <span className="badge-pink">ROI 4.8x</span>
                    </div>
                </div>
            </div>

            <div className="time-slots-container">
                <div className="slot-item done">
                    <span className="time">09:00 - 12:00</span>
                    <strong className="status">Đã xong</strong>
                </div>
                <div className="slot-item active">
                    <span className="time">• 12:00 - 15:00</span>
                    <strong className="status">Đang chạy (78% đã bán)</strong>
                </div>
                <div className="slot-item upcoming">
                    <span className="time">15:00 - 18:00</span>
                    <strong className="status">Sắp diễn ra</strong>
                </div>
                <div className="slot-item vip">
                    <span className="time">19:00 - 21:00</span>
                    <strong className="status">VIP Deal</strong>
                </div>
                <div className="slot-item night">
                    <span className="time">21:00 - 24:00</span>
                    <strong className="status">Xả kho đêm</strong>
                </div>
            </div>

            <div className="analytics-double-card">
                <div className="chart-card">
                    <div className="card-header">
                        <div>
                            <h3>Tốc độ bán theo giờ</h3>
                            <p>Tương quan số lượng đơn hàng qua các mốc thời gian</p>
                        </div>
                        <div className="legend">
                            <span><strong className="gray-dot">•</strong> Lưu lượng CCU</span>
                            <span><strong className="red-dot">•</strong> Đơn thành công</span>
                        </div>
                    </div>
                    <div className="chart-svg-container">
                        <svg viewBox="0 0 500 120" className="chart-line-svg">
                            <path d="M 10 90 Q 100 80 200 60 T 350 20 T 450 90 T 490 70" fill="none" stroke="#e63946" strokeWidth="3"/>
                            <circle cx="260" cy="40" r="5" fill="#e63946"/>
                        </svg>
                        <div className="chart-x-axis">
                            <span>09:00</span>
                            <span>10:30</span>
                            <span className="peak">12:30 (Đỉnh)</span>
                            <span>13:30</span>
                            <span>15:00</span>
                            <span>18:00</span>
                        </div>
                    </div>
                </div>

                <div className="progress-card">
                    <div className="card-header">
                        <h3>Tiến độ khung 12h-15h</h3>
                        <span className="countdown-pill">Còn 01:24:35</span>
                    </div>

                    <div className="progress-val-row">
                        <span className="percent-huge">78%</span>
                        <span className="target-pill green">Đạt mục tiêu</span>
                    </div>
                    <p className="progress-sub">1.420 / 1.800 sản phẩm</p>

                    <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{width: '78%'}}></div>
                    </div>

                    <div className="progress-footer">
                        <span>Sản phẩm sắp hết hàng: <strong>1 mã</strong></span>
                        <button className="link-red-btn">Xem chi tiết</button>
                    </div>
                </div>
            </div>

            <div className="campaigns-table-card">
                <div className="table-header-row">
                    <h3>Chiến dịch <span className="count-tag">5 mục</span></h3>
                    <div className="filter-buttons">
                        <button className="f-btn active">Tất cả</button>
                        <button className="f-btn">Đang chạy</button>
                        <button className="f-btn">Sắp tới</button>
                        <button className="f-btn">Kết thúc</button>
                    </div>
                </div>

                <table className="campaigns-table">
                    <thead>
                    <tr>
                        <th>CHIẾN DỊCH</th>
                        <th>NGÂN SÁCH</th>
                        <th>DOANH THU</th>
                        <th>HIỆU QUẢ (ROAS)</th>
                        <th>TRẠNG THÁI</th>
                        <th>THAO TÁC</th>
                    </tr>
                    </thead>
                    <tbody>
                    {campaigns.map((c) => (
                        <tr key={c.id} className="clickable-tr" onClick={() => handleOpenDetailReport(c)}>
                            <td>
                                <div className="camp-title-cell">
                                    <span className="camp-icon">
                                        <i className="fa-solid fa-bolt"></i>
                                    </span>
                                    <div>
                                        <strong>{c.name}</strong>
                                        <small>{c.channel}</small>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="budget-cell">
                                    <span><strong>{c.budgetUsed}</strong> / {c.budgetTotal}</span>
                                    <div className="mini-progress">
                                        <div className="fill" style={{width: '70%'}}></div>
                                    </div>
                                </div>
                            </td>
                            <td><strong>{c.revenue}</strong></td>
                            <td><span className="roas-green">{c.roas}</span></td>
                            <td>
                                <span className={`status-pill ${c.statusType}`}>
                                    • {c.status}
                                </span>
                            </td>
                            <td>
                                <button className="arrow-btn" onClick={(e) => {
                                    e.stopPropagation();
                                    handleOpenDetailReport(c);
                                }}>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>

            {showCreateModal && (
                <div className="modal-backdrop" onClick={() => setShowCreateModal(false)}>
                    <div className="create-campaign-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-top-row">
                            <h2 className="modal-title">• Chiến dịch quảng cáo</h2>
                            <span className="b2b-pill">Khung chiến dịch B2B</span>
                        </div>

                        <div className="form-group">
                            <label>Tên chiến dịch quảng cáo *</label>
                            <div className="input-with-icon">
                                <span className="icon">
                                    <i className="fa-solid fa-bullhorn"></i>
                                </span>
                                <input
                                    type="text"
                                    value={createForm.name}
                                    onChange={(e) => setCreateForm({...createForm, name: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="grid-2col">
                            <div className="form-group">
                                <label>Ngày bắt đầu *</label>
                                <div className="input-with-icon">
                                    <span className="icon">
                                        <i className="fa-regular fa-calendar-days"></i>
                                    </span>
                                    <input
                                        type="text"
                                        value={createForm.startDate}
                                        onChange={(e) => setCreateForm({...createForm, startDate: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Thời gian bắt đầu *</label>
                                <div className="input-with-icon">
                                    <span className="icon">
                                        <i className="fa-regular fa-clock"></i>
                                    </span>
                                    <input
                                        type="text"
                                        value={createForm.startTime}
                                        onChange={(e) => setCreateForm({...createForm, startTime: e.target.value})}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="discount-config-box">
                            <div className="discount-label-row">
                                <label>Mức giảm giá chiến dịch *</label>
                                <small>Áp dụng đồng loạt cho các sản phẩm bên dưới</small>
                            </div>
                            <div className="discount-input-group">
                                <div className="radio-type-toggle">
                                    <button
                                        className={createForm.discountType === 'percent' ? 'active' : ''}
                                        onClick={() => setCreateForm({...createForm, discountType: 'percent'})}
                                    >
                                        <i className="fa-solid fa-fire icon-btn"></i> Theo phần trăm (%)
                                    </button>
                                    <button
                                        className={createForm.discountType === 'amount' ? 'active' : ''}
                                        onClick={() => setCreateForm({...createForm, discountType: 'amount'})}
                                    >
                                        <i className="fa-solid fa-tag icon-btn"></i> Theo số tiền cụ thể (đ)
                                    </button>
                                </div>
                                <div className="val-input-wrapper">
                                    <input
                                        type="text"
                                        value={createForm.discountVal}
                                        onChange={(e) => setCreateForm({...createForm, discountVal: e.target.value})}
                                    />
                                    <span className="unit">%</span>
                                </div>
                            </div>
                        </div>

                        <div className="products-selector-section">
                            <div className="sec-header">
                                <strong>Danh Sách Sản Phẩm:</strong>
                                <small>Chọn các SKU áp dụng chương trình đẩy sóng</small>
                            </div>

                            <div className="product-search-input">
                                <span><i className="fa-solid fa-magnifying-glass"></i></span>
                                <input type="text" placeholder="Tìm theo tên sản phẩm, mã SKU..."/>
                            </div>

                            <table className="selected-prods-table">
                                <thead>
                                <tr>
                                    <th width="30"><input type="checkbox" defaultChecked/></th>
                                    <th>SẢN PHẨM & XUẤT XỨ</th>
                                    <th>NỐT HƯƠNG</th>
                                    <th>GIÁ GỐC</th>
                                    <th>GIÁ CHIẾN DỊCH</th>
                                    <th>TỒN KHẢ DỤNG</th>
                                    <th width="40">THAO TÁC</th>
                                </tr>
                                </thead>
                                <tbody>
                                {createForm.products.map((prod) => (
                                    <tr key={prod.id}>
                                        <td><input type="checkbox" defaultChecked/></td>
                                        <td>
                                            <div className="p-name-cell">
                                                <span className="p-icon">
                                                    <i className="fa-solid fa-droplet"></i>
                                                </span>
                                                <div>
                                                    <strong>{prod.name}</strong>
                                                    <small>{prod.workshop} • SKU: {prod.id}</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`tag-pill ${prod.tagType}`}>{prod.tag}</span>
                                        </td>
                                        <td>
                                            <del className="old-price">{prod.originalPrice}</del>
                                        </td>
                                        <td><strong className="new-price-red">{prod.promoPrice}</strong></td>
                                        <td><span className="stock-val">{prod.stock}</span></td>
                                        <td>
                                            <button className="delete-btn" onClick={() => handleRemoveProduct(prod.id)}>
                                                <i className="fa-solid fa-trash-can"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>

                            <div className="products-summary-footer">
                                <span className="green-text">
                                    <i className="fa-solid fa-circle-check icon-btn"></i> Đã chọn {createForm.products.length} sản phẩm tham gia
                                </span>
                                <span className="est-budget">Tổng ngân sách khuyến mãi ước tính: <strong>5.200.000đ</strong></span>
                            </div>
                        </div>

                        <div className="modal-actions">
                            <button className="btn-cancel" onClick={() => setShowCreateModal(false)}>Hủy</button>
                            <button className="btn-save-red" onClick={() => {
                                alert('Tạo chương trình khuyến mãi thành công!');
                                setShowCreateModal(false);
                            }}>
                                <i className="fa-solid fa-floppy-disk icon-btn"></i> Lưu
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showDetailReport && (
                <div className="modal-backdrop" onClick={() => setShowDetailReport(false)}>
                    <div className="detail-report-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="report-header">
                            <div className="left">
                                <div className="code-row">
                                    <span className="campaign-code-tag">
                                        <i className="fa-solid fa-ticket icon-btn"></i> {selectedCampaign ? selectedCampaign.id : 'SCENTFIRST20'}
                                    </span>
                                    <span className="status-badge green">• Đang diễn ra</span>
                                </div>
                                <h2>Báo cáo hiệu quả thống kê: {selectedCampaign ? selectedCampaign.name : 'Khai phóng giác quan đơn đầu'}</h2>
                            </div>
                            <div className="right">
                                <select className="date-filter-select">
                                    <option>Toàn bộ chiến dịch (01/10/2023 - 31/10/2023)</option>
                                </select>
                                <button className="btn-light-export">
                                    <i className="fa-solid fa-file-arrow-down icon-btn"></i> Xuất báo cáo
                                </button>
                                <button className="btn-pause-red">
                                    <i className="fa-solid fa-pause icon-btn"></i> Tạm dừng chiến dịch
                                </button>
                                <button className="close-x-btn" onClick={() => setShowDetailReport(false)}>
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        </div>

                        <div className="report-stats-grid">
                            <div className="r-stat-card">
                                <div className="r-top">
                                    <span className="r-label">Tổng thu nhập / Đã dùng</span>
                                    <span className="r-icon pink">
                                        <i className="fa-solid fa-ticket"></i>
                                    </span>
                                </div>
                                <div className="r-num">1.820 <small>/ 2.000 (91.0%)</small></div>
                                <div className="r-progress-bar">
                                    <div className="fill" style={{width: '91%'}}></div>
                                </div>
                                <small className="r-sub">Còn 180 lượt • Giới hạn: 1 lượt / user</small>
                            </div>

                            <div className="r-stat-card">
                                <div className="r-top">
                                    <span className="r-label">Doanh thu GMV kích cầu</span>
                                    <span className="r-icon green">
                                        <i className="fa-solid fa-money-bill-wave"></i>
                                    </span>
                                </div>
                                <div className="r-num">546.000.000đ</div>
                                <small className="r-sub green">
                                    <i className="fa-solid fa-arrow-trend-up icon-btn"></i> +34.5% so với chiến dịch trước
                                </small>
                            </div>

                            <div className="r-stat-card">
                                <div className="r-top">
                                    <span className="r-label">Ngân sách đã trợ giá</span>
                                    <span className="r-icon blue">
                                        <i className="fa-solid fa-credit-card"></i>
                                    </span>
                                </div>
                                <div className="r-num red-text">145.600.000đ</div>
                                <small className="r-sub">Hạn mức tối đa: 160.000.000đ</small>
                            </div>

                            <div className="r-stat-card">
                                <div className="r-top">
                                    <span className="r-label">Hiệu suất đầu tư (ROI)</span>
                                    <span className="r-icon teal">
                                        <i className="fa-solid fa-bolt"></i>
                                    </span>
                                </div>
                                <div className="r-num">x3.75 <small>Lần</small></div>
                                <small className="r-sub">Chi phí / Đơn mới (CAC): 80.000đ / đơn</small>
                            </div>
                        </div>

                        <div className="report-chart-box">
                            <div className="chart-legend-top">
                                <span><strong className="red-dot">•</strong> Doanh thu tạo ra (GMV)</span>
                                <span><strong className="purple-dot">•</strong> Ngân sách chiết khấu</span>
                            </div>
                            <div className="report-svg-wrapper">
                                <svg viewBox="0 0 600 120" className="report-line-chart">
                                    <path d="M 10 100 Q 150 70 300 40 T 590 10" fill="none" stroke="#e63946" strokeWidth="3"/>
                                    <path d="M 10 110 Q 150 90 300 70 T 590 50" fill="none" stroke="#9333ea" strokeWidth="2" strokeDasharray="4"/>
                                </svg>
                                <div className="chart-weeks-row">
                                    <div><strong>Tuần 1 (01-07/10)</strong><small>360 đơn / 28.8tr</small></div>
                                    <div><strong>Tuần 2 (08-14/10)</strong><small>620 đơn / 49.6tr</small></div>
                                    <div className="active">
                                        <strong>Tuần 3 (15-21/10) <i className="fa-solid fa-star"></i></strong>
                                        <small className="red-text">840 đơn / 67.2tr</small>
                                    </div>
                                    <div><strong>Tuần 4 (Dự báo)</strong><small>Hết 180 mã còn lại</small></div>
                                </div>
                            </div>
                        </div>

                        <div className="report-breakdown-table-box">
                            <h4>DANH SÁCH SẢN PHẨM KHUYẾN MÃI TRONG CHƯƠNG TRÌNH</h4>
                            <table className="report-products-table">
                                <thead>
                                <tr>
                                    <th>SẢN PHẨM KHUYẾN MÃI</th>
                                    <th>ĐƠN SỬ DỤNG MÃ</th>
                                    <th>DOANH THU GMV</th>
                                    <th>SỐ LƯỢNG KHUYẾN MÃI</th>
                                    <th>SỐ LƯỢNG ĐÃ BÁN</th>
                                    <th>TỶ LỆ KHÁCH MUA</th>
                                    <th>ĐÁNH GIÁ</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <strong>Oải Hương True Lavender Pháp (50ml)</strong>
                                        <small>SKU: LAV-FR-01 • Xưởng Mộc Châu</small>
                                    </td>
                                    <td>640 <small>(35.2%)</small></td>
                                    <td><strong>192.000.000đ</strong></td>
                                    <td><span className="badge-blue">1.000 chai</span></td>
                                    <td><strong className="green-text">640 chai (64%)</strong></td>
                                    <td>
                                        <div className="progress-bar-small">
                                            <div className="fill" style={{width: '96.8%'}}></div>
                                        </div>
                                        <small>96.8%</small>
                                    </td>
                                    <td><span className="star-rating"><i className="fa-solid fa-star"></i> 4.9</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Tinh Dầu Tràm Trà Tea Tree (30ml)</strong>
                                        <small>SKU: TEA-HU-08 • Xưởng Cố Đô Huế</small>
                                    </td>
                                    <td>520 <small>(28.6%)</small></td>
                                    <td><strong>156.000.000đ</strong></td>
                                    <td><span className="badge-blue">800 chai</span></td>
                                    <td><strong className="green-text">520 chai (65%)</strong></td>
                                    <td>
                                        <div className="progress-bar-small">
                                            <div className="fill" style={{width: '94.2%'}}></div>
                                        </div>
                                        <small>94.2%</small>
                                    </td>
                                    <td><span className="star-rating"><i className="fa-solid fa-star"></i> 5.0</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Nến Thơm Rừng Thông Đà Lạt (220g)</strong>
                                        <small>SKU: CAN-DL-03 • Xưởng Đà Lạt Forest</small>
                                    </td>
                                    <td>380 <small>(20.9%)</small></td>
                                    <td><strong>114.000.000đ</strong></td>
                                    <td><span className="badge-blue">500 hũ</span></td>
                                    <td><strong className="green-text">380 hũ (76%)</strong></td>
                                    <td>
                                        <div className="progress-bar-small">
                                            <div className="fill" style={{width: '91.5%'}}></div>
                                        </div>
                                        <small>91.5%</small>
                                    </td>
                                    <td><span className="star-rating"><i className="fa-solid fa-star"></i> 4.8</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CampaignTab;