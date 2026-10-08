import React, { useState } from 'react';
import AdminSidebar from '../../../components/admin/Sidebar';
import '../css/AdminWorkshop.css';

const initialWorkshops = [
    {
        id: 'WS-102',
        name: 'Mộc Perfume Lab',
        badge: 'Top 1 Nước hoa',
        badgeType: 'red',
        owner: 'Trần Đình Mộc',
        phone: '0918.423.889',
        email: 'moclab@perfume.vn',
        location: 'TP. Hồ Chí Minh',
        rating: '4.9',
        ordersCount: '320 đơn xong',
        slaPercent: '99.1%',
        slaStatus: 'Xuất sắc',
        slaType: 'excellent',
        takeRate: '12.0% (VIP)',
        takeRateValue: '12.0',
        kycStatus: 'Đã xác thực',
        kycType: 'verified',
        status: 'Đang hoạt động',
        statusType: 'active',
        companyName: 'CÔNG TY CỔ PHẦN MỘC PERFUME VIỆT NAM',
        taxId: '0316892341',
        legalRepresentative: 'Trần Đình Mộc (Giám đốc kỹ thuật)',
        identityCard: '079091002381',
        bankName: 'Techcombank (Hội sở TP.HCM)',
        bankAccount: '19036789234811'
    },
    {
        id: 'WS-108',
        name: 'Scentora Essential VN',
        badge: 'Tinh dầu & Nến',
        badgeType: 'green',
        owner: 'Lê Thuỳ Trang',
        phone: '0903.112.449',
        email: 'trang@scentora.vn',
        location: 'Đồng Nai',
        rating: '4.8',
        ordersCount: '195 đơn xong',
        slaPercent: '97.8%',
        slaStatus: 'Tốt',
        slaType: 'good',
        takeRate: '14.5% (Chuẩn)',
        takeRateValue: '14.5',
        kycStatus: 'Đã xác thực',
        kycType: 'verified',
        status: 'Đang hoạt động',
        statusType: 'active',
        companyName: 'CÔNG TY TNHH SCENTORA VIỆT NAM',
        taxId: '0317822109',
        legalRepresentative: 'Lê Thuỳ Trang',
        identityCard: '079092001142',
        bankName: 'MBBank (Chi nhánh Đồng Nai)',
        bankAccount: '9903112449'
    },
    {
        id: 'WS-895',
        name: 'Hestia Aroma Lab',
        badge: 'CGMP ASEAN',
        badgeType: 'blue',
        owner: 'Vũ Hoàng Nam',
        phone: '0988.921.002',
        email: 'namvh@hestia.vn',
        location: 'Hà Nội',
        rating: '4.9',
        ordersCount: '280 đơn xong',
        slaPercent: '98.8%',
        slaStatus: 'Xuất sắc',
        slaType: 'excellent',
        takeRate: '13.0% (VIP)',
        takeRateValue: '13.0',
        kycStatus: 'Đã xác thực',
        kycType: 'verified',
        status: 'Đang hoạt động',
        statusType: 'active',
        companyName: 'CÔNG TY TNHH HESTIA AROMA',
        taxId: '0108821902',
        legalRepresentative: 'Vũ Hoàng Nam',
        identityCard: '001092003318',
        bankName: 'Vietcombank (Chi nhánh Hà Nội)',
        bankAccount: '0011004289912'
    },
    {
        id: 'WS-114',
        name: 'Aurasphere Studio',
        badge: 'Hồ sơ mới',
        badgeType: 'orange',
        owner: 'Nguyễn Bảo Châu',
        phone: '0934.778.121',
        email: 'aura@studio.com',
        location: 'Bình Dương',
        rating: '-',
        ordersCount: 'Chưa phát sinh đơn',
        slaPercent: '-',
        slaStatus: 'Chưa ghi nhận SLA',
        slaType: 'none',
        takeRate: '14.5% (Chuẩn)',
        takeRateValue: '14.5',
        kycStatus: 'Chờ thẩm định',
        kycType: 'pending',
        status: 'Chờ duyệt',
        statusType: 'pending',
        companyName: 'HỘ KINH DOANH AURASPHERE STUDIO',
        taxId: '8392100238',
        legalRepresentative: 'Nguyễn Bảo Châu',
        identityCard: '074095001129',
        bankName: 'ACB (Chi nhánh Bình Dương)',
        bankAccount: '883920112'
    },
    {
        id: 'WS-882',
        name: 'Saigon Scent Factory',
        badge: '',
        badgeType: '',
        owner: 'Đặng Minh Quân',
        phone: '0909.554.210',
        email: 'minhquan@sgscent.com',
        location: 'TP. Hồ Chí Minh',
        rating: '4.2',
        ordersCount: '84 đơn',
        slaPercent: '92.0%',
        slaStatus: 'Cần cải thiện',
        slaType: 'warning',
        takeRate: '14.5% (Chuẩn)',
        takeRateValue: '14.5',
        kycStatus: 'Đã xác thực',
        kycType: 'verified',
        status: 'Tạm dừng',
        statusType: 'paused',
        companyName: 'CÔNG TY CỔ PHẦN SAIGON SCENT',
        taxId: '0315582910',
        legalRepresentative: 'Đặng Minh Quân',
        identityCard: '079088001290',
        bankName: 'Sacombank (Chi nhánh Q1)',
        bankAccount: '060288192001'
    }
];

const WorkshopManagement = () => {
    const [selectedRows, setSelectedRows] = useState(['WS-102', 'WS-108', 'WS-895']);

    const [activeWorkshop, setActiveWorkshop] = useState(null);
    const [activeTab, setActiveTab] = useState('kyc');

    const [showRateModal, setShowRateModal] = useState(false);
    const [takeRateValue, setTakeRateValue] = useState('12.0');
    const [rateReason, setRateReason] = useState('Đối tác chiến lược sản lượng > 1000 đơn/quý');

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(initialWorkshops.map(w => w.id));
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

    const handleRowClick = (ws) => {
        setActiveWorkshop(ws);
        setTakeRateValue(ws.takeRateValue || '14.5');
    };

    const handleOpenRateModal = (e) => {
        if (e) e.stopPropagation();
        setShowRateModal(true);
    };

    return (
        <div className="admin-container">
            <AdminSidebar />

            <main className="admin-main">
                <div className="admin-header">
                    <div>
                        <div className="breadcrumb">
                            <span>Quản trị hệ thống</span> / <span>Xưởng & Công thức</span> / <span className="active">Danh sách xưởng</span>
                        </div>
                        <h1 className="page-title">Quản trị xưởng gia công & Đối tác sản xuất</h1>
                    </div>
                    <div className="header-actions">
                        <button className="export-btn">
                            <i className="fa-solid fa-file-export icon-btn"></i>
                            Xuất dữ liệu Excel
                        </button>
                        <button className="primary-btn red">
                            + Tiếp nhận xưởng mới
                        </button>
                    </div>
                </div>

                <div className="workshop-stats-grid">
                    <div className="ws-stat-card">
                        <div className="stat-header">
                            <span className="stat-label">TỔNG XƯỞNG GIA CÔNG</span>
                            <span className="icon-badge">
                                <i className="fa-solid fa-building"></i>
                            </span>
                        </div>
                        <div className="stat-number">
                            48 <small>cơ sở đối tác</small>
                        </div>
                        <div className="stat-badges-row">
                            <span className="pill green">42 Hoạt động</span>
                            <span className="pill gray">2 Tạm dừng</span>
                            <span className="pill orange">4 Chờ duyệt</span>
                        </div>
                    </div>

                    <div className="ws-stat-card">
                        <div className="stat-header">
                            <span className="stat-label">CHỜ DUYỆT KYC & PHÁP LÝ</span>
                            <span className="icon-badge pink">
                                <i className="fa-solid fa-clipboard-check"></i>
                            </span>
                        </div>
                        <div className="stat-number">
                            6 <small>hồ sơ gửi thẩm định</small>
                        </div>
                        <div className="stat-sub-text">
                            <span className="red-text">• 2 ưu tiên trong 24h</span>
                            <span className="gray-text">CGMP ASEAN / ĐKKD</span>
                        </div>
                    </div>

                    <div className="ws-stat-card">
                        <div className="stat-header">
                            <span className="stat-label">GIAO HÀNG ĐÚNG HẸN (SLA)</span>
                            <span className="icon-badge green">
                                <i className="fa-regular fa-clock"></i>
                            </span>
                        </div>
                        <div className="stat-number green-text">
                            98.5% <span className="trend-badge">+1,2%</span>
                        </div>
                        <div className="stat-sub-text justify">
                            <span>Chuẩn bảo chứng ký quỹ Escrow</span>
                            <span className="green-text font-bold">Tối ưu</span>
                        </div>
                    </div>

                    <div className="ws-stat-card">
                        <div className="stat-header">
                            <span className="stat-label">TỶ LỆ THẮNG THẦU & BÁO GIÁ</span>
                            <span className="icon-badge purple">
                                <i className="fa-solid fa-bolt"></i>
                            </span>
                        </div>
                        <div className="stat-number">
                            34.2% <small>trung bình / xưởng</small>
                        </div>
                        <div className="stat-sub-text justify">
                            <span>Tham gia qua Scent Lab RFQ</span>
                            <span className="purple-text font-bold">+4.5% q/q</span>
                        </div>
                    </div>
                </div>

                <div className="ws-filter-card">
                    <div className="search-bar-row">
                        <div className="search-input-wrapper">
                            <i className="fa-solid fa-magnifying-glass search-icon"></i>
                            <input type="text" placeholder="Tìm kiếm theo mã WS, tên xưởng, chủ cơ sở, số điện thoại, email..." />
                        </div>
                        <select className="ws-select"><option>Đang hoạt động</option></select>
                        <select className="ws-select"><option>Đã xác thực KYC</option></select>
                        <select className="ws-select"><option>Khu vực: Toàn quốc</option></select>
                        <select className="ws-select"><option>Chiết khấu Take-rate: Tất cả</option></select>
                        <button className="reset-btn">
                            <i className="fa-solid fa-rotate-right icon-btn"></i> Đặt lại
                        </button>
                    </div>

                    <div className="bulk-actions-row">
                        <div className="bulk-left">
                            <span className="selected-tag">Đã chọn {selectedRows.length} xưởng gia công</span>
                            <button className="bulk-btn green">Duyệt hàng loạt</button>
                            <button className="bulk-btn blue" onClick={handleOpenRateModal}>Điều chỉnh % chiết khấu</button>
                            <button className="bulk-btn pink">Tạm khóa xưởng</button>
                            <a href="#" className="export-link">Xuất danh sách đã chọn</a>
                        </div>
                        <div className="bulk-right">
                            <span>Hiển thị 1 - 5 của tổng số 48 xưởng đăng ký</span>
                        </div>
                    </div>
                </div>

                <div className="ws-table-container">
                    <table className="ws-table">
                        <thead>
                        <tr>
                            <th width="40">
                                <input
                                    type="checkbox"
                                    onChange={handleSelectAll}
                                    checked={selectedRows.length === initialWorkshops.length}
                                />
                            </th>
                            <th>MÃ & TÊN XƯỞNG GIA CÔNG</th>
                            <th>CHỦ XƯỞNG & LIÊN HỆ</th>
                            <th>KHU VỰC / LOẠI HÌNH</th>
                            <th>ĐÁNH GIÁ & SẢN LƯỢNG</th>
                            <th>SLA GIAO HÀNG</th>
                            <th>CHIẾT KHẤU SÀN (TAKE-RATE)</th>
                            <th>KYC PHÁP LÝ</th>
                            <th>TRẠNG THÁI</th>
                        </tr>
                        </thead>
                        <tbody>
                        {initialWorkshops.map((ws) => {
                            const isSelected = selectedRows.includes(ws.id);
                            return (
                                <tr
                                    key={ws.id}
                                    className={`clickable-row ${isSelected ? 'selected-row' : ''}`}
                                    onClick={() => handleRowClick(ws)}
                                >
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={(e) => handleSelectRow(e, ws.id)}
                                        />
                                    </td>
                                    <td>
                                        <div className="ws-name-cell">
                                            <div className={`ws-avatar ${ws.badgeType}`}>{ws.name.substring(0, 1)}</div>
                                            <div>
                                                <div className="ws-title-row">
                                                    <strong>{ws.name}</strong>
                                                    {ws.badge && <span className={`ws-badge ${ws.badgeType}`}>{ws.badge}</span>}
                                                </div>
                                                <small className="ws-id">{ws.id}</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="contact-cell">
                                            <strong>{ws.owner}</strong>
                                            <small>{ws.phone} • {ws.email}</small>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="location-pill">{ws.location}</span>
                                    </td>
                                    <td>
                                        <div className="rating-cell">
                                            <span className="star-text">
                                                <i className="fa-solid fa-star star-icon"></i> {ws.rating}
                                            </span>
                                            <small className="orders-count">({ws.ordersCount})</small>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="sla-cell">
                                            <strong>{ws.slaPercent}</strong>
                                            <span className={`sla-tag ${ws.slaType}`}>{ws.slaStatus}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="take-rate-text">{ws.takeRate}</span>
                                    </td>
                                    <td>
                                            <span className={`kyc-badge ${ws.kycType}`}>
                                                {ws.kycType === 'verified' && <i className="fa-solid fa-check icon-status"></i>}
                                                {ws.kycType === 'pending' && <i className="fa-regular fa-clock icon-status"></i>}
                                                {ws.kycStatus}
                                            </span>
                                    </td>
                                    <td>
                                        <span className={`status-pill ${ws.statusType}`}>{ws.status}</span>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>

                    <div className="table-pagination">
                        <div className="pagination-left">
                            <span>Dòng hiển thị:</span>
                            <select><option>10 dòng</option></select>
                            <span className="total-text">Tổng cộng: 48 đối tác</span>
                        </div>
                        <div className="pagination-right">
                            <span className="page-info">Trang 1 trên 5</span>
                            <button className="page-btn disabled">Trước</button>
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">3</button>
                            <span className="dots">...</span>
                            <button className="page-btn">5</button>
                            <button className="page-btn">Tiếp theo</button>
                        </div>
                    </div>
                </div>

                {activeWorkshop && (
                    <div className="drawer-overlay" onClick={() => setActiveWorkshop(null)}>
                        <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
                            <div className="drawer-header">
                                <div className="drawer-top-info">
                                    <span className="ws-code-badge">MÃ WS: {activeWorkshop.id}</span>
                                    <span className="created-time">Thành lập: 2021</span>
                                    <button className="drawer-close-btn" onClick={() => setActiveWorkshop(null)}>
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>

                                <div className="drawer-profile-row">
                                    <div className="drawer-avatar red">{activeWorkshop.name.substring(0, 1)}</div>
                                    <div className="drawer-title">
                                        <h2>{activeWorkshop.name}</h2>
                                        <p>Cơ sở gia công nước hoa & điều phối nốt hương</p>
                                    </div>
                                    <div className="drawer-status">
                                        <span className="status-label green">• Đang hoạt động</span>
                                        <label className="toggle-switch">
                                            <input type="checkbox" defaultChecked />
                                            <span className="slider round"></span>
                                        </label>
                                        <small className="update-time">Cập nhật 15 phút trước</small>
                                    </div>
                                </div>

                                <div className="drawer-actions-row">
                                    <button className="drawer-btn outline" onClick={handleOpenRateModal}>Sửa chiết khấu</button>
                                    <button className="drawer-btn pink">Tạm khóa xưởng</button>
                                    <a href="#" className="public-page-link">
                                        <i className="fa-solid fa-link icon-btn"></i> Mở trang công khai
                                    </a>
                                </div>

                                <div className="drawer-tabs">
                                    <button
                                        className={`tab-btn ${activeTab === 'kyc' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('kyc')}
                                    >
                                        KYC & Pháp lý <span className="green-dot">•</span>
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'capacity' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('capacity')}
                                    >
                                        Năng lực & Kho
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'sla' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('sla')}
                                    >
                                        Đấu thầu & SLA
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'finance' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('finance')}
                                    >
                                        Tài chính
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('reviews')}
                                    >
                                        Đánh giá
                                    </button>
                                </div>
                            </div>

                            <div className="drawer-body">
                                {activeTab === 'kyc' && (
                                    <>
                                        <div className="detail-section">
                                            <div className="section-header">
                                                <span className="section-title">THÔNG TIN ĐỊNH DANH PHÁP LÝ</span>
                                                <span className="verify-badge">
                                                    <i className="fa-solid fa-circle-check icon-btn"></i> Đã xác minh OCR & CQT
                                                </span>
                                            </div>

                                            <div className="info-grid-2col">
                                                <div className="info-box">
                                                    <span className="info-label">TÊN DOANH NGHIỆP</span>
                                                    <strong className="info-val">{activeWorkshop.companyName}</strong>
                                                </div>
                                                <div className="info-box">
                                                    <span className="info-label">MÃ SỐ THUẾ (MST)</span>
                                                    <strong className="info-val">{activeWorkshop.taxId}</strong>
                                                </div>
                                                <div className="info-box">
                                                    <span className="info-label">NGƯỜI ĐẠI DIỆN PHÁP LUẬT</span>
                                                    <strong className="info-val">{activeWorkshop.legalRepresentative}</strong>
                                                </div>
                                                <div className="info-box">
                                                    <span className="info-label">CCCD / ĐỊNH DANH EKYC</span>
                                                    <strong className="info-val">{activeWorkshop.identityCard} <span className="green-tag">• Hợp lệ</span></strong>
                                                </div>
                                            </div>

                                            <div className="pdf-download-card">
                                                <div className="pdf-icon">
                                                    <i className="fa-solid fa-file-pdf"></i>
                                                </div>
                                                <div className="pdf-info">
                                                    <strong>Chung_nhan_CGMP_MocLab_2024.pdf</strong>
                                                    <p>Tiêu chuẩn ISO 22716 & CGMP ASEAN • Hiệu lực: 12/2026</p>
                                                </div>
                                                <button className="download-btn">Tải xuống</button>
                                            </div>

                                            <div className="escrow-notice">
                                                <span className="check-round">
                                                    <i className="fa-solid fa-check"></i>
                                                </span>
                                                <span>Đã ký hợp đồng số nguyên tắc bảo chứng quỹ thanh toán Escrow với Olla ScentOS.</span>
                                            </div>
                                        </div>

                                        <div className="detail-section">
                                            <span className="section-title">NĂNG LỰC CHIẾT RÓT & KHO NỐT HƯƠNG</span>

                                            <div className="capacity-progress-box">
                                                <div className="progress-label-row">
                                                    <span>Công suất vận hành thực tế</span>
                                                    <strong className="red-text">3.900 / 5.000 chai / ngày (78%)</strong>
                                                </div>
                                                <div className="progress-bar-bg">
                                                    <div className="progress-bar-fill" style={{ width: '78%' }}></div>
                                                </div>
                                                <div className="progress-sub-info">
                                                    <span>Dung tích hỗ trợ: 10ml, 30ml, 50ml, 100ml</span>
                                                    <span>Kho vỏ chai sẵn có: 45.000 vỏ</span>
                                                </div>
                                            </div>

                                            <p className="notes-subtitle">Kho 180 nốt hương nguyên bản sẵn sàng xuất xưởng:</p>
                                            <div className="scent-notes-tags">
                                                <span className="note-pill red">Cam Bergamot Ý</span>
                                                <span className="note-pill red">Tiêu hồng Madagascar</span>
                                                <span className="note-pill purple">Hoa hồng Grasse Pháp</span>
                                                <span className="note-pill purple">Hoa nhài Sambac</span>
                                                <span className="note-pill yellow">Gỗ tuyết tùng Virginia</span>
                                                <span className="note-pill yellow">Xạ hương trắng</span>
                                                <span className="note-pill gray">+174 nốt hương khác</span>
                                            </div>
                                        </div>

                                        <div className="detail-section">
                                            <span className="section-title">TÀI KHOẢN THỤ HƯỞNG & CHIẾT KHẤU</span>

                                            <div className="bank-info-card">
                                                <div className="bank-row">
                                                    <span className="bank-label">Ngân hàng thụ hưởng:</span>
                                                    <strong className="bank-val">{activeWorkshop.bankName}</strong>
                                                </div>
                                                <div className="bank-row">
                                                    <span className="bank-label">Số tài khoản:</span>
                                                    <strong className="bank-val highlight">{activeWorkshop.bankAccount}</strong>
                                                </div>
                                                <div className="bank-row">
                                                    <span className="bank-label">Tên thụ hưởng:</span>
                                                    <strong className="bank-val">{activeWorkshop.companyName}</strong>
                                                </div>
                                            </div>

                                            <div className="take-rate-banner">
                                                <div>
                                                    <span className="banner-sub">TỶ LỆ PHÍ SÀN TAKE-RATE HIỆN TẠI</span>
                                                    <div className="rate-val-row">
                                                        <strong className="big-rate">{takeRateValue}%</strong>
                                                        <span className="purple-badge">(Ưu đãi đối tác VIP)</span>
                                                    </div>
                                                    <p className="default-rate-text">Mức sàn mặc định: 14.5%</p>
                                                </div>
                                                <button className="purple-save-btn" onClick={handleOpenRateModal}>
                                                    Lưu thay đổi %
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="drawer-footer">
                                <button className="footer-btn text">Lịch sử audit log</button>
                                <div className="footer-right">
                                    <button className="footer-btn outline">Nhắn tin xưởng</button>
                                    <button className="footer-btn primary">Lưu thiết lập xưởng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {showRateModal && (
                    <div className="modal-backdrop" onClick={() => setShowRateModal(false)}>
                        <div className="rate-modal-card" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header-row">
                                <div className="title-with-icon">
                                    <span className="purple-square">
                                        <i className="fa-solid fa-percent"></i>
                                    </span>
                                    <h3>Điều chỉnh chiết khấu {activeWorkshop ? activeWorkshop.id : 'WS-102'}</h3>
                                </div>
                                <button className="modal-close-icon" onClick={() => setShowRateModal(false)}>
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>

                            <p className="modal-sub-desc">
                                {activeWorkshop ? activeWorkshop.name : 'Mộc Perfume Lab'} đang áp dụng tỷ lệ chiết khấu đặc quyền đối tác VIP.
                            </p>

                            <div className="modal-form-group">
                                <label>Tỷ lệ phí sàn Take-rate (%)</label>
                                <div className="input-percentage-wrapper">
                                    <input
                                        type="text"
                                        value={takeRateValue}
                                        onChange={(e) => setTakeRateValue(e.target.value)}
                                    />
                                    <span className="percent-unit">%</span>
                                </div>
                            </div>

                            <div className="modal-form-group">
                                <label>Lý do điều chỉnh</label>
                                <div className="select-dropdown-wrapper">
                                    <select value={rateReason} onChange={(e) => setRateReason(e.target.value)}>
                                        <option>Đối tác chiến lược sản lượng &gt; 1000 đơn/quý</option>
                                        <option>Thỏa thuận khung chiết khấu theo năm</option>
                                        <option>Điều chỉnh về mức tiêu chuẩn sàn 14.5%</option>
                                    </select>
                                </div>
                            </div>

                            <div className="modal-actions-footer">
                                <button className="btn-modal-cancel" onClick={() => setShowRateModal(false)}>Hủy bỏ</button>
                                <button className="btn-modal-submit" onClick={() => {
                                    alert(`Cập nhật phí sàn thành ${takeRateValue}% thành công!`);
                                    setShowRateModal(false);
                                }}>Cập nhật</button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default WorkshopManagement;