import React, { useState } from 'react';
import '../css/VoucherTab.css';

const initialVouchers = [{
    id: 'VOUCHER-01',
    code: 'SCENTFIRST20',
    title: 'Khai phóng giác quan đơn đầu',
    discountLabel: 'Giảm 20%',
    discountSub: 'Tối đa 80.000đ',
    discountType: 'percent',
    condition: 'Đơn tối thiểu 300.000đ',
    validity: '01/10/2023 - 31/10/2023',
    validitySub: 'Còn 12 ngày hiệu lực',
    issuedCount: 1820,
    totalCount: 2000,
    progressPercent: 91,
    status: 'Đang diễn ra',
    statusType: 'active'
}, {
    id: 'VOUCHER-02',
    code: 'SCENTFIRST20',
    title: 'Khai phóng giác quan đơn đầu',
    discountLabel: 'Giảm 60.000đ',
    discountSub: 'Trừ trực tiếp',
    discountType: 'amount',
    condition: 'Đơn tối thiểu 300.000đ',
    validity: '01/10/2023 - 31/10/2023',
    validitySub: 'Còn 12 ngày hiệu lực',
    issuedCount: 1020,
    totalCount: 2000,
    progressPercent: 51,
    status: 'Đang diễn ra',
    statusType: 'active'
}, {
    id: 'VOUCHER-03',
    code: 'SCENTFIRST20',
    title: 'Khai phóng giác quan đơn đầu',
    discountLabel: 'Giảm 20%',
    discountSub: 'Tối đa 80.000đ',
    discountType: 'percent',
    condition: 'Đơn tối thiểu 300.000đ',
    validity: '01/10/2023 - 31/10/2023',
    validitySub: 'Còn 12 ngày hiệu lực',
    issuedCount: 1820,
    totalCount: 2000,
    progressPercent: 91,
    status: 'Đang diễn ra',
    statusType: 'active'
}];

const VoucherTab = () => {
    const [vouchers] = useState(initialVouchers);

    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showDetailReport, setShowDetailReport] = useState(false);
    const [selectedVoucher, setSelectedVoucher] = useState(null);

    const [createForm, setCreateForm] = useState({
        title: 'CHƯƠNG TRÌNH GIẢM GIÁ SÂU ĐẦM',
        code: 'GHSIACJDB',
        type: 'percent',
        discountPercent: '20',
        maxDiscountAmount: '80.000đ',
        minOrderValue: '300.000đ',
        targetCustomer: 'Tất cả khách hàng mua sắm',
        targetCategory: 'Toàn bộ sản phẩm & dịch vụ',
        startDate: '2023-10-01',
        endDate: '2023-10-31',
        totalLimit: '2000',
        perUserLimit: '1 lượt sử dụng / 1 khách hàng'
    });

    const handleGenerateRandomCode = () => {
        const randomCode = 'OLLIA' + Math.random().toString(36).substring(2, 7).toUpperCase();
        setCreateForm(prev => ({ ...prev, code: randomCode }));
    };

    const handleOpenReport = (v) => {
        setSelectedVoucher(v);
        setShowDetailReport(true);
    };

    return (
        <div className="voucher-tab-wrapper">
            <div className="v-header-row">
                <div>
                    <h1 className="v-page-title">Quản lý voucher</h1>
                    <p className="v-page-sub">
                        Điều phối ngân sách trợ giá toàn sàn, tối ưu tỷ lệ chuyển đổi cho xưởng chưng cất và khách hàng Nordic Club.
                    </p>
                </div>
                <button className="v-btn-primary-red" onClick={() => setShowCreateModal(true)}>
                    + Tạo voucher mới
                </button>
            </div>

            <div className="v-stats-grid">
                <div className="v-stat-card">
                    <div className="v-stat-top">
                        <span className="v-stat-label">TỔNG VOUCHER ĐANG CHẠY</span>
                        <span className="v-stat-icon pink">
                            <i className="fa-solid fa-ticket"></i>
                        </span>
                    </div>
                    <div className="v-stat-num">12 <small>chiến dịch hoạt động</small></div>
                    <div className="v-stat-sub green">
                        <i className="fa-solid fa-arrow-trend-up icon-btn"></i> +3 chiến dịch mới trong tuần
                    </div>
                </div>

                <div className="v-stat-card">
                    <div className="v-stat-top">
                        <span className="v-stat-label">NGÂN SÁCH TRỢ GIÁ SÀN ĐÃ CHI</span>
                        <span className="v-stat-icon teal">
                            <i className="fa-solid fa-money-bill-wave"></i>
                        </span>
                    </div>
                    <div className="v-stat-num">145.000.000đ</div>
                    <div className="v-stat-sub-flex">
                        <span>Hạn mức tháng: 250M</span>
                        <span className="badge-pink-sm">58% đỉnh mức</span>
                    </div>
                </div>

                <div className="v-stat-card">
                    <div className="v-stat-top">
                        <span className="v-stat-label">DOANH THU KÍCH CẦU</span>
                        <span className="v-stat-icon purple">
                            <i className="fa-solid fa-chart-column"></i>
                        </span>
                    </div>
                    <div className="v-stat-num">890.000.000đ</div>
                    <div className="v-stat-sub green">↑ ROI trợ giá x6.14 lần</div>
                </div>

                <div className="v-stat-card">
                    <div className="v-stat-top">
                        <span className="v-stat-label">TỶ LỆ CHUYỂN ĐỔI VOUCHER</span>
                        <span className="v-stat-icon green">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </span>
                    </div>
                    <div className="v-stat-num">28.4% <small className="green">Tăng +4.2%</small></div>
                    <div className="v-stat-sub gray">Độ phản hồi giỏ hàng đạt đỉnh cơ sáng</div>
                </div>
            </div>

            <div className="v-analytics-card">
                <div className="v-card-header">
                    <div>
                        <span className="v-sec-title">PHÂN TÍCH HIỆU ỨNG KHUYẾN MÃI</span>
                        <h3>Tương quan Chi phí trợ giá và Tốc độ chốt đơn xưởng</h3>
                    </div>
                    <div className="v-chart-legend">
                        <span><strong className="red-dot">•</strong> Doanh thu kích cầu (triệu đ)</span>
                        <span><strong className="blue-dot">•</strong> Ngân sách trợ giá sàn</span>
                    </div>
                </div>
                <div className="v-chart-body">
                    <svg viewBox="0 0 600 100" className="v-chart-svg">
                        <path d="M 10 80 Q 150 70 300 40 T 500 20 L 500 100 L 10 100 Z" fill="rgba(230, 57, 70, 0.08)"/>
                        <path d="M 10 80 Q 150 70 300 40 T 500 20" fill="none" stroke="#e63946" strokeWidth="3"/>
                        <rect x="220" y="55" width="8" height="45" fill="#dbeafe" rx="2"/>
                        <rect x="340" y="45" width="8" height="55" fill="#dbeafe" rx="2"/>
                        <rect x="420" y="30" width="8" height="70" fill="#dbeafe" rx="2"/>
                        <circle cx="500" cy="20" r="5" fill="#e63946"/>
                    </svg>
                    <div className="v-chart-x-labels">
                        <span>Tuần 01</span>
                        <span>Tuần 02</span>
                        <span>Tuần 03</span>
                        <span>Tuần 04 (Hiện tại)</span>
                        <span className="red-text">Dự phòng tuần tới</span>
                    </div>
                </div>
            </div>

            <div className="v-table-card">
                <div className="v-toolbar-row">
                    <div className="v-search-box">
                        <span><i className="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" placeholder="Tìm theo mã voucher, tên ưu đãi..."/>
                    </div>
                    <div className="v-filters-right">
                        <select><option>Thời gian giảm</option></select>
                        <select><option>Tất cả trạng thái</option></select>
                        <select><option>Tất cả loại ưu đãi</option></select>
                        <button className="v-btn-export">
                            <i className="fa-solid fa-file-arrow-down icon-btn"></i> Xuất dữ liệu
                        </button>
                    </div>
                </div>

                <table className="v-main-table">
                    <thead>
                    <tr>
                        <th>MÃ VOUCHER</th>
                        <th>TÊN VOUCHER</th>
                        <th>MỨC GIẢM GIÁ</th>
                        <th>ĐIỀU KIỆN ÁP DỤNG</th>
                        <th>THỜI GIAN HIỆU LỰC</th>
                        <th>TIẾN ĐỘ PHÁT HÀNH</th>
                        <th>TRẠNG THÁI</th>
                        <th>THAO TÁC</th>
                    </tr>
                    </thead>
                    <tbody>
                    {vouchers.map((v) => (
                        <tr key={v.id}>
                            <td>
                                <div className="v-code-badge">
                                    <strong>{v.code}</strong>
                                    <span className="copy-icon"><i className="fa-regular fa-copy"></i></span>
                                </div>
                            </td>
                            <td>
                                <strong>{v.title}</strong>
                            </td>
                            <td>
                                <div className="v-discount-box">
                                    <span className="badge-red">{v.discountLabel}</span>
                                    <small>{v.discountSub}</small>
                                </div>
                            </td>
                            <td>
                                <span className="v-cond-text">{v.condition}</span>
                            </td>
                            <td>
                                <div className="v-validity-cell">
                                    <strong>{v.validity}</strong>
                                    <small>{v.validitySub}</small>
                                </div>
                            </td>
                            <td>
                                <div className="v-progress-cell">
                                    <div className="progress-num-row">
                                        <span><strong>{v.issuedCount.toLocaleString()}</strong> / {v.totalCount.toLocaleString()}</span>
                                        <span className="percent-text">{v.progressPercent}%</span>
                                    </div>
                                    <div className="v-bar-bg">
                                        <div className="v-bar-fill" style={{width: `${v.progressPercent}%`}}></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="v-status-pill green">• {v.status}</span>
                            </td>
                            <td>
                                <div className="v-actions-cell">
                                    <button className="action-icon-btn" title="Chỉnh sửa">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button className="action-icon-btn" title="Khóa/Mở">
                                        <i className="fa-solid fa-lock"></i>
                                    </button>
                                    <button className="action-icon-btn" title="Xem báo cáo" onClick={() => handleOpenReport(v)}>
                                        <i className="fa-solid fa-chart-line"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div className="v-pagination-footer">
                    <span>Hiển thị 6 trên 12 mã ưu đãi đang quản lý</span>
                    <div className="v-pagination-btns">
                        <button className="p-btn disabled"><i className="fa-solid fa-chevron-left"></i></button>
                        <button className="p-btn active">1</button>
                        <button className="p-btn">2</button>
                        <button className="p-btn"><i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>

            {showDetailReport && (
                <div className="v-modal-backdrop" onClick={() => setShowDetailReport(false)}>
                    <div className="v-report-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="v-report-header">
                            <div className="left">
                                <div className="code-row">
                                    <span className="v-report-code">
                                        <i className="fa-solid fa-ticket icon-btn"></i> {selectedVoucher ? selectedVoucher.code : 'SCENTFIRST20'}
                                    </span>
                                    <span className="v-status-pill green">• Đang diễn ra</span>
                                </div>
                                <h2>Báo cáo hiệu quả thống kê Voucher: {selectedVoucher ? selectedVoucher.title : 'Khai phóng giác quan đơn đầu'}</h2>
                            </div>
                            <div className="right">
                                <select className="date-select">
                                    <option>Toàn bộ chiến dịch (01/10/2023 - 31/10/2023)</option>
                                </select>
                                <button className="btn-light-export">
                                    <i className="fa-solid fa-file-arrow-down icon-btn"></i> Xuất báo cáo
                                </button>
                                <button className="btn-pause-red">
                                    <i className="fa-solid fa-pause icon-btn"></i> Tạm dừng mã
                                </button>
                                <button className="close-x-btn" onClick={() => setShowDetailReport(false)}>
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        </div>

                        <div className="v-report-stats-grid">
                            <div className="r-card">
                                <div className="r-top">
                                    <span>Tổng thu nhập / Đã dùng</span>
                                    <span className="icon pink"><i className="fa-solid fa-ticket"></i></span>
                                </div>
                                <div className="r-num">1.820 <small>/ 2.000 (91.0%)</small></div>
                                <div className="r-bar">
                                    <div className="fill" style={{width: '91%'}}></div>
                                </div>
                                <small className="r-sub">Còn 180 mã khả dụng • Giới hạn: 1 mã / user</small>
                            </div>

                            <div className="r-card">
                                <div className="r-top">
                                    <span>Doanh thu GMV kích cầu</span>
                                    <span className="icon green"><i className="fa-solid fa-money-bill-wave"></i></span>
                                </div>
                                <div className="r-num">546.000.000đ</div>
                                <small className="r-sub green">
                                    <i className="fa-solid fa-arrow-trend-up icon-btn"></i> +34.5% so với chiến dịch trước
                                </small>
                            </div>

                            <div className="r-card">
                                <div className="r-top">
                                    <span>Ngân sách đã trợ giá</span>
                                    <span className="icon blue"><i className="fa-solid fa-credit-card"></i></span>
                                </div>
                                <div className="r-num red">145.600.000đ</div>
                                <small className="r-sub">Hạn mức tối đa: 160.000.000đ</small>
                            </div>

                            <div className="r-card">
                                <div className="r-top">
                                    <span>Hiệu suất đầu tư (ROI)</span>
                                    <span className="icon teal"><i className="fa-solid fa-bolt"></i></span>
                                </div>
                                <div className="r-num">x3.75 <small>Lần</small></div>
                                <small className="r-sub">Chi phí / Đơn mới (CAC): 80.000đ / đơn</small>
                            </div>
                        </div>

                        <div className="v-report-chart-box">
                            <div className="legend-row">
                                <span><strong className="red-dot">•</strong> Doanh thu tạo ra (GMV)</span>
                                <span><strong className="purple-dot">•</strong> Ngân sách chiết khấu</span>
                            </div>
                            <div className="v-report-svg-wrapper">
                                <svg viewBox="0 0 600 120" className="report-svg">
                                    <path d="M 10 100 Q 150 70 300 40 T 590 10" fill="none" stroke="#e63946" strokeWidth="3"/>
                                    <path d="M 10 110 Q 150 90 300 70 T 590 50" fill="none" stroke="#9333ea" strokeWidth="2" strokeDasharray="4"/>
                                </svg>
                                <div className="weeks-grid">
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

                        <div className="v-report-breakdown-box">
                            <table className="breakdown-table">
                                <thead>
                                <tr>
                                    <th>XƯỞNG CHẾ TÁC</th>
                                    <th>ĐƠN SỬ DỤNG MÃ</th>
                                    <th>DOANH THU</th>
                                    <th>SÀN TRỢ GIÁ</th>
                                    <th>TỶ LỆ KHÁCH MUA</th>
                                    <th>TỶ LỆ HỦY/HOÀN</th>
                                    <th>ĐÁNH GIÁ</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><strong>Xưởng Mộc Hương Đà Lạt #01</strong></td>
                                    <td>640 <small>(35.2%)</small></td>
                                    <td><strong>192.000.000đ</strong></td>
                                    <td><span className="red-text">51.200.000đ</span></td>
                                    <td>
                                        <div className="mini-pbar">
                                            <div className="fill" style={{width: '96.8%'}}></div>
                                        </div>
                                        96.8%
                                    </td>
                                    <td>0.4% <small>(3 đơn)</small></td>
                                    <td><span className="stars"><i className="fa-solid fa-star"></i> 4.9</span></td>
                                </tr>
                                <tr>
                                    <td><strong>Nordic Lab TP.HCM</strong></td>
                                    <td>520 <small>(28.6%)</small></td>
                                    <td><strong>156.000.000đ</strong></td>
                                    <td><span className="red-text">41.600.000đ</span></td>
                                    <td>
                                        <div className="mini-pbar">
                                            <div className="fill" style={{width: '94.2%'}}></div>
                                        </div>
                                        94.2%
                                    </td>
                                    <td>0.2% <small>(1 đơn)</small></td>
                                    <td><span className="stars"><i className="fa-solid fa-star"></i> 5.0</span></td>
                                </tr>
                                <tr>
                                    <td><strong>Hương Mộc An Tây Bắc</strong></td>
                                    <td>380 <small>(20.9%)</small></td>
                                    <td><strong>114.000.000đ</strong></td>
                                    <td><span className="red-text">30.400.000đ</span></td>
                                    <td>
                                        <div className="mini-pbar">
                                            <div className="fill" style={{width: '91.5%'}}></div>
                                        </div>
                                        91.5%
                                    </td>
                                    <td>0.8% <small>(3 đơn)</small></td>
                                    <td><span className="stars"><i className="fa-solid fa-star"></i> 4.8</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {showCreateModal && (
                <div className="v-modal-backdrop" onClick={() => setShowCreateModal(false)}>
                    <div className="v-create-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="create-top-bar">
                            <div>
                                <div className="breadcrumb">
                                    Quản trị hệ thống &gt; Quản lý chương trình khuyến mãi &gt; <span className="red-text">Tạo chương trình khuyến mãi</span>
                                </div>
                                <h2>Tạo mã voucher</h2>
                                <p className="sub">
                                    Thiết lập mã giảm giá kích cầu, cấu hình tỷ lệ chiết khấu, điều kiện áp dụng và phân bổ ngân sách trợ giá giữa sàn & xưởng chế tác hưởng.
                                </p>
                            </div>
                            <button className="btn-draft">
                                <i className="fa-solid fa-file-arrow-down icon-btn"></i> Lưu bản nháp
                            </button>
                        </div>

                        <div className="form-section-card">
                            <div className="sec-title-row">
                                <span className="sec-num"><i className="fa-solid fa-ticket"></i></span>
                                <div>
                                    <h3>1. Thông tin cơ bản voucher</h3>
                                    <p>Định danh mã ưu đãi, cơ chế giảm và nguồn ngân sách trợ giá</p>
                                </div>
                                <span className="badge-required">BẮT BUỘC</span>
                            </div>

                            <div className="form-group">
                                <label>Tên voucher *</label>
                                <input
                                    type="text"
                                    value={createForm.title}
                                    onChange={(e) => setCreateForm({...createForm, title: e.target.value})}
                                />
                                <small className="hint">Tên này sẽ hiển thị trực tiếp cho khách hàng trên ví ưu đãi và trang thanh toán.</small>
                            </div>

                            <div className="form-group">
                                <label>Mã Voucher (Code nhập) *</label>
                                <div className="code-input-row">
                                    <div className="input-with-copy">
                                        <input
                                            type="text"
                                            value={createForm.code}
                                            onChange={(e) => setCreateForm({
                                                ...createForm, code: e.target.value.toUpperCase()
                                            })}
                                        />
                                        <span className="copy-ic"><i className="fa-regular fa-copy"></i></span>
                                    </div>
                                    <button type="button" className="btn-random-code" onClick={handleGenerateRandomCode}>
                                        <i className="fa-solid fa-rotate-right icon-btn"></i> Tạo ngẫu nhiên
                                    </button>
                                </div>
                                <small className="hint right-align">Ký tự viết hoa, không dấu, không khoảng trắng</small>
                            </div>

                            <div className="form-group">
                                <label>Loại hình khuyến mãi</label>
                                <div className="promo-type-cards-grid">
                                    <div
                                        className={`type-card ${createForm.type === 'percent' ? 'selected' : ''}`}
                                        onClick={() => setCreateForm({...createForm, type: 'percent'})}
                                    >
                                        <span className="card-ic"><i className="fa-solid fa-percent red-text"></i></span>
                                        <div>
                                            <strong>Giảm theo %</strong>
                                            <p>Khấu trừ tỷ lệ đơn hàng</p>
                                        </div>
                                    </div>

                                    <div
                                        className={`type-card ${createForm.type === 'fixed' ? 'selected' : ''}`}
                                        onClick={() => setCreateForm({...createForm, type: 'fixed'})}
                                    >
                                        <span className="card-ic"><i className="fa-solid fa-money-bill-wave green-text"></i></span>
                                        <div>
                                            <strong>Số tiền cố định</strong>
                                            <p>Trừ trực tiếp số tiền (VNĐ)</p>
                                        </div>
                                    </div>

                                    <div
                                        className={`type-card ${createForm.type === 'shipping' ? 'selected' : ''}`}
                                        onClick={() => setCreateForm({...createForm, type: 'shipping'})}
                                    >
                                        <span className="card-ic"><i className="fa-solid fa-truck-fast blue-text"></i></span>
                                        <div>
                                            <strong>Hỗ trợ vận chuyển</strong>
                                            <p>Miễn phí ship toàn quốc</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid-2col">
                                <div className="form-group">
                                    <label>Mức chiết khấu (%) <span className="red-text">20%</span></label>
                                    <div className="input-unit-box">
                                        <input
                                            type="text"
                                            value={createForm.discountPercent}
                                            onChange={(e) => setCreateForm({
                                                ...createForm, discountPercent: e.target.value
                                            })}
                                        />
                                        <span className="unit">%</span>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Mức giảm tối đa</label>
                                    <div className="input-unit-box">
                                        <input
                                            type="text"
                                            value={createForm.maxDiscountAmount}
                                            onChange={(e) => setCreateForm({
                                                ...createForm, maxDiscountAmount: e.target.value
                                            })}
                                        />
                                        <span className="unit">VND</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-section-card">
                            <div className="sec-title-row">
                                <span className="sec-num"><i className="fa-solid fa-clipboard-list"></i></span>
                                <div>
                                    <h3>2. Điều kiện áp dụng ưu đãi</h3>
                                    <p>Ngưỡng giá trị đơn hàng, phân khúc khách hàng & danh mục hưởng</p>
                                </div>
                                <span className="badge-standard">Tiêu chuẩn sàn</span>
                            </div>

                            <div className="form-group">
                                <label>Giá trị đơn hàng tối thiểu (Đơn tối thiểu)</label>
                                <div className="input-unit-box">
                                    <input
                                        type="text"
                                        value={createForm.minOrderValue}
                                        onChange={(e) => setCreateForm({...createForm, minOrderValue: e.target.value})}
                                    />
                                    <span className="unit">VND</span>
                                </div>
                                <small className="hint right-align">Áp dụng trên tổng giá trị hàng hoá</small>
                            </div>

                            <div className="grid-2col">
                                <div className="form-group">
                                    <label>Đối tượng khách hàng áp dụng</label>
                                    <select
                                        value={createForm.targetCustomer}
                                        onChange={(e) => setCreateForm({...createForm, targetCustomer: e.target.value})}
                                    >
                                        <option>Tất cả khách hàng mua sắm</option>
                                        <option>Khách hàng VIP Diamond</option>
                                        <option>Khách hàng mới (Đơn đầu)</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Danh mục sản phẩm áp dụng</label>
                                    <select
                                        value={createForm.targetCategory}
                                        onChange={(e) => setCreateForm({...createForm, targetCategory: e.target.value})}
                                    >
                                        <option>Toàn bộ sản phẩm & dịch vụ</option>
                                        <option>Tinh dầu nguyên chất</option>
                                        <option>Nến thơm phòng Lab</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-section-card">
                            <div className="sec-title-row">
                                <span className="sec-num"><i className="fa-regular fa-calendar-days"></i></span>
                                <div>
                                    <h3>3. Thời gian hiệu lực và Số lượng phát hành</h3>
                                    <p>Cài đặt hạn mức kho mã và khoảng thời gian diễn ra chiến dịch</p>
                                </div>
                                <span className="badge-green-status">• Hiệu lực 30 ngày</span>
                            </div>

                            <div className="grid-2col">
                                <div className="form-group">
                                    <label>Ngày bắt đầu áp dụng</label>
                                    <div className="date-input-icon">
                                        <span><i className="fa-regular fa-calendar-days"></i></span>
                                        <input
                                            type="text"
                                            value={createForm.startDate}
                                            onChange={(e) => setCreateForm({...createForm, startDate: e.target.value})}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Ngày kết thúc hiệu lực</label>
                                    <div className="date-input-icon">
                                        <span><i className="fa-regular fa-calendar-days"></i></span>
                                        <input
                                            type="text"
                                            value={createForm.endDate}
                                            onChange={(e) => setCreateForm({...createForm, endDate: e.target.value})}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid-2col">
                                <div className="form-group">
                                    <label>Tổng số lượng mã phát hành</label>
                                    <div className="input-unit-box">
                                        <input
                                            type="text"
                                            value={createForm.totalLimit}
                                            onChange={(e) => setCreateForm({...createForm, totalLimit: e.target.value})}
                                        />
                                        <span className="unit">Mã</span>
                                    </div>
                                    <small className="hint right-align">Hạn mức toàn hệ thống</small>
                                </div>

                                <div className="form-group">
                                    <label>Giới hạn sử dụng / Mỗi khách hàng</label>
                                    <select
                                        value={createForm.perUserLimit}
                                        onChange={(e) => setCreateForm({...createForm, perUserLimit: e.target.value})}
                                    >
                                        <option>1 lượt sử dụng / 1 khách hàng</option>
                                        <option>2 lượt sử dụng / 1 khách hàng</option>
                                        <option>Không giới hạn</option>
                                    </select>
                                    <small className="hint right-align">Ngăn chặn spam mã</small>
                                </div>
                            </div>
                        </div>

                        <div className="create-footer-actions">
                            <button type="button" className="btn-reset-form">
                                <i className="fa-solid fa-rotate-right icon-btn"></i> Đặt lại dữ liệu form
                            </button>
                            <div className="right-btns">
                                <button type="button" className="btn-cancel" onClick={() => setShowCreateModal(false)}>
                                    Hủy bỏ
                                </button>
                                <button type="button" className="btn-submit-red" onClick={() => {
                                    alert('Xác nhận phát hành voucher thành công!');
                                    setShowCreateModal(false);
                                }}>
                                    <i className="fa-solid fa-bolt icon-btn"></i> Xác nhận phát hành voucher
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VoucherTab;