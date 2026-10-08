import React, { useState } from 'react';
import AdminSidebar from '../../../components/admin/Sidebar';
import '../css/AdminDashboard.css';

const statsData = {
    'Hôm nay': {
        gmv: '65.000.000đ', commission: '9.425.000đ', escrow: '15.000.000đ', aov: '32.500.000đ', gmvTrend: '+5.1%'
    },
    '7 ngày qua': {
        gmv: '420.000.000đ', commission: '60.900.000đ', escrow: '95.000.000đ', aov: '35.000.000đ', gmvTrend: '+8.4%'
    },
    'Tháng này': {
        gmv: '1.850.000.000đ',
        commission: '268.500.000đ',
        escrow: '412.000.000đ',
        aov: '38.500.000đ',
        gmvTrend: '+14.2%'
    },
    'Quý này': {
        gmv: '5.200.000.000đ',
        commission: '754.000.000đ',
        escrow: '1.120.000.000đ',
        aov: '40.100.000đ',
        gmvTrend: '+18.6%'
    }
};

const initialAuditLogs = [
    {
        id: 1,
        type: 'WITHDRAW',
        title: 'Yêu cầu rút quỹ Escrow hoàn tất',
        time: '3 phút trước',
        detail: 'Xưởng BioCosmetics VN đã rút thành công 84.000.000đ sau khi đối soát thành công đơn xưởng #ORD-88219 (Lô 2.500 chai Extract).',
        dot: 'green'
    },
    {
        id: 2,
        type: 'COMPLAINT',
        title: 'Phát sinh khiếu nại chất lượng độ tỏa hương (Sillage)',
        time: '18 phút trước',
        detail: 'Scent Aroma Sa France khiếu nại đơn gia công #WP-109 có tỉ lệ sillage thực tế không đạt cam kết 80/100. Chuyển hội đồng thẩm định Lab.',
        dot: 'red'
    },
    {
        id: 3,
        type: 'ISO',
        title: 'Xưởng mới đăng ký hồ sơ thẩm định ISO',
        time: '42 phút trước',
        detail: 'Aromatico Lab Long An gửi 4 chứng nhận phòng sạch cGMP và báo giá cơ sở cho dòng nến sáp đậu nành.',
        dot: 'blue'
    },
    {
        id: 4,
        type: 'CONTRACT',
        title: 'Chốt hợp đồng gia công số lượng lớn (VIP)',
        time: '1 giờ trước',
        detail: 'Khách hàng chuỗi khách sạn nghỉ dưỡng ký quỹ 150.000.000đ gia công trọn gói bộ xịt thơm phòng cao cấp.',
        dot: 'green'
    }
];

const filterLogsByType = (logs, filterType) => {
    if (filterType === 'ALL') return logs;
    return logs.filter(log => log.type === filterType);
};

const AdminDashboard = () => {
    const [timeRange, setTimeRange] = useState('Tháng này');
    const [compareWithPrev, setCompareWithPrev] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [activeModal, setActiveModal] = useState(null);
    const [logFilter, setLogFilter] = useState('ALL');

    const currentStats = statsData[timeRange];
    const filteredLogs = filterLogsByType(initialAuditLogs, logFilter);

    const handleExportReport = () => {
        alert(`Xuất báo cáo thành công cho mốc: ${timeRange}`);
    };

    const handleQuickAction = (actionKey, label) => {
        if (actionKey === 'approve') {
            setActiveModal('approve');
        } else {
            alert(`Đã kích hoạt: ${label}`);
        }
    };

    return (
        <div className="admin-container">
            <AdminSidebar />

            <main className="admin-main">
                <div className="admin-header">
                    <div>
                        <div className="breadcrumb">
                            <span>Quản trị hệ thống</span> / <span className="active">Báo cáo tổng quan & Vận hành sản xuất</span>
                        </div>
                        <h1 className="page-title">Quản trị sản xuất nước hoa & hương thơm</h1>
                    </div>
                    <button className="export-btn" onClick={handleExportReport}>
                        <i className="fa-solid fa-file-export icon-btn"></i>
                        Xuất báo cáo Excel/PDF
                    </button>
                </div>

                <div className="filter-toolbar">
                    <div className="time-filter">
                        {['Hôm nay', '7 ngày qua', 'Tháng này', 'Quý này'].map((range) => (
                            <button
                                key={range}
                                className={`filter-tab ${timeRange === range ? 'active' : ''}`}
                                onClick={() => setTimeRange(range)}
                            >
                                {range}
                            </button>
                        ))}
                    </div>

                    <select
                        className="filter-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="all">Tất cả sản phẩm (Toàn sàn)</option>
                        <option value="perfume">Nước hoa EDP/Parfum</option>
                        <option value="candle">Nến thơm nghệ thuật</option>
                        <option value="diffuser">Tinh dầu & Diffuser</option>
                    </select>

                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            checked={compareWithPrev}
                            onChange={(e) => setCompareWithPrev(e.target.checked)}
                        />
                        So sánh cùng kỳ tháng trước
                    </label>

                    <div className="filter-badges">
                        <span className="badge green-badge">
                            <i className="fa-solid fa-circle dot-icon"></i> 12 xưởng đang vận hành
                        </span>
                        <span className="badge yellow-badge">
                            <i className="fa-solid fa-circle dot-icon"></i> 4 điểm xuất chờ duyệt
                        </span>
                    </div>
                </div>

                <div className="section-title">
                    <span>
                        <i className="fa-solid fa-circle-small dot-title"></i> CHỈ SỐ TÀI CHÍNH & GIAN HÀNG GIA CÔNG ({timeRange.toUpperCase()})
                    </span>
                    <span className="sub">Đơn vị thanh toán: VND (Escrow bảo vệ)</span>
                </div>

                <div className="metrics-grid">
                    <div className="metric-card">
                        <span className="metric-title">
                            TỔNG GMV TIỀN TẢI
                            <span className="icon-badge pink">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </span>
                        </span>
                        <div className="metric-val">{currentStats.gmv}</div>
                        {compareWithPrev && (
                            <div className="metric-trend green">
                                {currentStats.gmvTrend} so với kỳ trước
                                <i className="fa-solid fa-arrow-trend-up icon-trend"></i>
                            </div>
                        )}
                    </div>

                    <div className="metric-card">
                        <span className="metric-title">
                            HOA HỒNG & PHÍ SÀN THUẦN
                            <span className="icon-badge green">
                                <i className="fa-solid fa-money-bill-wave"></i>
                            </span>
                        </span>
                        <div className="metric-val">{currentStats.commission}</div>
                        <div className="metric-sub-row">
                            <span>Take-rate Tiền: 14.5%</span>
                            {compareWithPrev && <span className="green">+11.8%</span>}
                        </div>
                    </div>

                    <div className="metric-card">
                        <span className="metric-title">
                            KÝ QUỸ ESCROW BẢO ĐẢM
                            <span className="icon-badge blue">
                                <i className="fa-solid fa-shield-halved"></i>
                            </span>
                        </span>
                        <div className="metric-val">{currentStats.escrow}</div>
                        <div className="metric-sub-row">
                            <span>Đang giữ cho: <strong>8 xưởng</strong></span>
                            <span>Đã chi trả T+3</span>
                        </div>
                    </div>

                    <div className="metric-card">
                        <span className="metric-title">
                            GIÁ TRỊ ĐƠN TRB (AOV)
                            <span className="icon-badge purple">
                                <i className="fa-solid fa-tag"></i>
                            </span>
                        </span>
                        <div className="metric-val">{currentStats.aov} <small>/đơn</small></div>
                        <div className="metric-sub-row">
                            {compareWithPrev && <span className="green">+0.6% với cùng kỳ</span>}
                            <span>MOQ: 500 lọ</span>
                        </div>
                    </div>
                </div>

                <div className="section-title">
                    <span>
                        <i className="fa-solid fa-circle-small dot-title"></i> CHỈ SỐ HỆ THỐNG THÁI HƯƠNG & TỶ LỆ CHUYỂN ĐỔI
                    </span>
                    <span className="sub">Động cơ phối hương AI Olfactory™ v2.4</span>
                </div>

                <div className="metrics-grid">
                    <div className="metric-card">
                        <span className="metric-title">
                            HỆ THỐNG XƯỞNG & KHÁCH
                            <span className="icon-badge blue">
                                <i className="fa-solid fa-store"></i>
                            </span>
                        </span>
                        <div className="metric-val">1.240 <small>tài khoản</small></div>
                        <div className="metric-sub-row">
                            <span className="blue-link">40 Xưởng Active</span>
                            <span className="orange-text">6 Chờ duyệt</span>
                        </div>
                    </div>

                    <div className="metric-card">
                        <span className="metric-title">
                            CÔNG THỨC HƯƠNG TẠO MỚI
                            <span className="icon-badge purple">
                                <i className="fa-solid fa-flask-vial"></i>
                            </span>
                        </span>
                        <div className="metric-val">4.820 <small>công thức</small></div>
                        <div className="metric-sub-row">
                            <span>Scent AI gợi ý: 72%</span>
                            <span className="green">+22.5%</span>
                        </div>
                    </div>

                    <div className="metric-card">
                        <span className="metric-title">
                            TỶ LỆ CHỐT & BÁO GIÁ
                            <span className="icon-badge teal">
                                <i className="fa-solid fa-bullseye"></i>
                            </span>
                        </span>
                        <div className="metric-val">36.8%</div>
                        <div className="metric-sub-row">
                            <span>Đạt KPI Quý IV: 105%</span>
                            <span className="green">+4.2%</span>
                        </div>
                    </div>

                    <div className="metric-card alert-card">
                        <span className="metric-title">
                            TÁC VỤ CHỜ DUYỆT GẤP
                            <span className="icon-badge red">
                                <i className="fa-solid fa-clock"></i>
                            </span>
                        </span>
                        <div className="metric-val red-text">15 <small>yêu cầu</small></div>
                        <div className="metric-sub-row">
                            <span>6 Duyệt xưởng</span>
                            <span className="orange-text">4 Khiếu nại</span>
                            <span>5 Báo giá</span>
                        </div>
                    </div>
                </div>

                <div className="charts-grid">
                    <div className="card-box chart-main">
                        <div className="card-header">
                            <div>
                                <span className="sub-tag">PHÂN TÍCH HIỆU ỨNG & SẢN LƯỢNG</span>
                                <h3 className="card-heading">Tương quan Chi phí trị giá, Doanh thu và Tốc độ chốt đơn xưởng</h3>
                            </div>
                        </div>
                        <div className="chart-legend-row">
                            <span className="legend-item"><span className="line-indicator red"></span> Doanh thu GMV (Triệu VNĐ)</span>
                            <span className="legend-item"><span className="bar-indicator blue"></span> Sản lượng gia công xuất xưởng (K chai)</span>
                        </div>
                        <div className="area-chart-container">
                            <svg viewBox="0 0 500 160" className="admin-chart-svg">
                                <path d="M 50,120 L 150,100 L 250,70 L 350,50 L 450,30 L 450,150 L 50,150 Z" fill="rgba(230, 57, 70, 0.1)" />
                                <rect x="80" y="100" width="20" height="50" fill="#a0aec0" opacity="0.4" />
                                <rect x="180" y="80" width="20" height="70" fill="#3182ce" opacity="0.6" />
                                <rect x="280" y="60" width="20" height="90" fill="#3182ce" opacity="0.6" />
                                <rect x="380" y="40" width="20" height="110" fill="#3182ce" opacity="0.6" />
                                <path d="M 50,120 Q 150,90 250,70 T 450,30" fill="none" stroke="#e63946" strokeWidth="3" />
                                <circle cx="350" cy="50" r="4" fill="#e63946" />
                            </svg>
                            <div className="chart-x-axis">
                                <span>Tuần 01</span>
                                <span>Tuần 02</span>
                                <span>Tuần 03</span>
                                <span className="active-week">Tuần 04 (Hiện tại)</span>
                            </div>
                        </div>
                        <div className="chart-notice">
                            <span className="notice-tag red">Dự báo thông minh</span>
                            <p>Dòng hương Eau de Parfum & Gỗ Đàn Hương đang ghi nhận tỷ lệ chốt đơn xưởng tăng 42% trong tuần cuối.
                                <button className="inline-link-btn" onClick={() => setActiveModal('analysis')}> Xem bảng phân tích thành phần →</button>
                            </p>
                        </div>
                    </div>

                    <div className="card-box chart-side">
                        <div className="funnel-section">
                            <div className="funnel-header">
                                <span className="sub-tag">QUY TRÌNH PHỄU LÀM</span>
                                <span className="green-badge-sm">CR: 0.74%</span>
                            </div>
                            <h4 className="funnel-title">Chuyển đổi Lab → Xưởng sản xuất</h4>
                            <ul className="funnel-list">
                                <li>1. Khởi tạo nét hương trên Lab <strong>12.450 lượt</strong></li>
                                <li>2. Lưu & Kiểm tra độ tương thích <strong>6.120 công thức <small>(49.1%)</small></strong></li>
                                <li>3. Nhận báo giá từ 3 xưởng đạt chuẩn <strong>2.280 báo giá <small>(37.2%)</small></strong></li>
                                <li className="active-step">4. Đặt cọc Escrow & Gia công <strong>840 đơn lô <small>(36.8%)</small></strong></li>
                            </ul>
                        </div>

                        <div className="structure-section">
                            <h4 className="structure-title">Cơ cấu danh mục gia công</h4>
                            <div className="donut-row">
                                <div className="mini-donut">
                                    <div className="donut-center">
                                        <strong>100%</strong>
                                        <small>281 xưởng</small>
                                    </div>
                                </div>
                                <ul className="structure-legend">
                                    <li><span className="dot red"></span> Nước hoa (EDP/Parfum) <strong>56%</strong></li>
                                    <li><span className="dot yellow"></span> Nến thơm nghệ thuật <strong>27%</strong></li>
                                    <li><span className="dot teal"></span> Tinh dầu & Diffuser <strong>15%</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-grid">
                    <div className="card-box table-card">
                        <div className="card-header">
                            <div>
                                <h3 className="card-heading">Top 5 Xưởng gia công có hiệu suất tốt nhất</h3>
                                <p className="card-desc">Đánh giá theo doanh số thanh toán Escrow và cam kết tỷ lệ Đúng hằng</p>
                            </div>
                            <button className="inline-link-btn" onClick={() => setActiveModal('factories')}>Xem tất cả 40 xưởng →</button>
                        </div>
                        <table className="admin-table">
                            <thead>
                            <tr>
                                <th>TÊN CƠ SỞ GIA CÔNG</th>
                                <th>DOANH THU SÀN</th>
                                <th>ĐƠN LÔ</th>
                                <th>ĐÚNG HẠN</th>
                                <th>ĐÁNH GIÁ</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="factory-cell">
                                    <div className="factory-avatar red">HM</div>
                                    <div>
                                        <strong>
                                            Hương Mộc Lab & Factory
                                            <i className="fa-solid fa-circle-check check-icon"></i>
                                        </strong>
                                        <p>Đồng Nai - ISO 22716 GMP</p>
                                    </div>
                                </td>
                                <td><strong>482.000.000đ</strong></td>
                                <td>142</td>
                                <td className="green-text">99.4%</td>
                                <td className="star-cell">
                                    <i className="fa-solid fa-star star-icon"></i> 4.95
                                </td>
                            </tr>
                            <tr>
                                <td className="factory-cell">
                                    <div className="factory-avatar green">BC</div>
                                    <div>
                                        <strong>BioCosmetics Việt Nam</strong>
                                        <p>Bình Dương - Đạt chuẩn Organic USDA</p>
                                    </div>
                                </td>
                                <td><strong>385.400.000đ</strong></td>
                                <td>98</td>
                                <td className="green-text">98.8%</td>
                                <td className="star-cell">
                                    <i className="fa-solid fa-star star-icon"></i> 4.92
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="card-box trends-card">
                        <div className="trends-header">
                            <h3 className="card-heading">Nét hương thịnh hành (Trending Notes)</h3>
                        </div>
                        <ul className="trends-list">
                            <li><span>Cam Bergamot Calabria</span> <strong>78.4% <small>(1.620 lọ)</small></strong></li>
                            <li><span>Gỗ Đàn Hương Sandalwood</span> <strong>64.2% <small>(980 lọ)</small></strong></li>
                            <li><span>Hoa hồng Damask</span> <strong>52.8% <small>(845 lọ)</small></strong></li>
                        </ul>
                    </div>
                </div>

                <div className="bottom-grid">
                    <div className="card-box actions-card">
                        <h3 className="card-heading">Thao tác quản trị nhanh</h3>
                        <p className="card-desc">Lưu tất cả thao tác có thẩm quyền cao nhất trên hệ thống ScentOS</p>
                        <div className="action-buttons-grid">
                            <button className="action-btn red" onClick={() => handleQuickAction('approve', 'Phê duyệt xưởng')}>
                                <span className="btn-icon">
                                    <i className="fa-solid fa-plus"></i>
                                </span>
                                <strong>Phê duyệt xưởng</strong>
                                <small>6 hồ sơ đang chờ</small>
                            </button>
                            <button className="action-btn dark" onClick={() => handleQuickAction('rate', 'Cấu hình Take-rate')}>
                                <span className="btn-icon">
                                    <i className="fa-solid fa-gear"></i>
                                </span>
                                <strong>Cấu hình Take-rate</strong>
                                <small>Hiện tại 14.5%</small>
                            </button>
                            <button className="action-btn dark" onClick={() => handleQuickAction('escrow', 'Đối soát ký quỹ')}>
                                <span className="btn-icon">
                                    <i className="fa-solid fa-box-archive"></i>
                                </span>
                                <strong>Đối soát ký quỹ</strong>
                                <small>Kỳ hạn ngày 15</small>
                            </button>
                            <button className="action-btn dark" onClick={() => handleQuickAction('notify', 'Thông báo toàn sàn')}>
                                <span className="btn-icon">
                                    <i className="fa-solid fa-bullhorn"></i>
                                </span>
                                <strong>Thông báo toàn sàn</strong>
                                <small>Push notification</small>
                            </button>
                        </div>
                    </div>

                    <div className="card-box log-card">
                        <div className="card-header">
                            <h3 className="card-heading">Nhật ký hoạt động & Kiểm toán sàn</h3>
                            <select className="mini-select" value={logFilter} onChange={(e) => setLogFilter(e.target.value)}>
                                <option value="ALL">Tất cả sự kiện</option>
                                <option value="WITHDRAW">Rút tiền</option>
                                <option value="COMPLAINT">Khiếu nại</option>
                                <option value="ISO">Thẩm định ISO</option>
                            </select>
                        </div>
                        <ul className="timeline-list">
                            {filteredLogs.map(log => (
                                <li key={log.id} className="timeline-item">
                                    <span className={`dot ${log.dot}`}></span>
                                    <div>
                                        <p><strong>{log.title}</strong> - <span className="time">{log.time}</span></p>
                                        <small>{log.detail}</small>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>

            {activeModal && (
                <div className="admin-modal-overlay" onClick={() => setActiveModal(null)}>
                    <div className="admin-modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>
                            {activeModal === 'analysis' && 'Phân tích chi tiết thành phần hương'}
                            {activeModal === 'factories' && 'Danh sách 40 Xưởng Gia Công Active'}
                            {activeModal === 'approve' && 'Phê duyệt hồ sơ xưởng mới'}
                        </h3>
                        <p>Đang liên kết với cơ sở dữ liệu ScentOS...</p>
                        <button className="close-modal-btn" onClick={() => setActiveModal(null)}>Đóng lại</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;