import React, { useState } from 'react';
import Sidebar from '../../../components/workshop/Sidebar';
import '../css/WorkshopDashboard.css';

const WorkshopDashboard = () => {
    const [filterType, setFilterType] = useState('month');
    const [startDate, setStartDate] = useState('2023-10-01');
    const [endDate, setEndDate] = useState('2023-10-31');
    const [selectedMonth, setSelectedMonth] = useState('10');
    const [selectedYear, setSelectedYear] = useState('2023');
    const [selectedQuarter, setSelectedQuarter] = useState('Q3');

    const [enableCompare, setEnableCompare] = useState(false);
    const [compareMonth, setCompareMonth] = useState('9');
    const [compareYear, setCompareYear] = useState('2023');
    const [compareQuarter, setCompareQuarter] = useState('Q2');
    const [compareTargetYear, setCompareTargetYear] = useState('2023');

    return (
        <div className="dashboard-container">
            <Sidebar />

            <main className="main-content">
                <div className="breadcrumb">
                    <span>Quản lý xưởng</span> / <span className="active">Quản lý thống kê hiệu suất</span>
                </div>

                <div className="card filter-card">
                    <div className="filter-header">
                        <h3 className="card-title" style={{ margin: 0 }}>Bộ lọc & So sánh dữ liệu</h3>
                    </div>
                    <div className="filter-body">
                        <div className="filter-group">
                            <label className="filter-label">Xem theo:</label>
                            <select
                                className="filter-select"
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                            >
                                <option value="day">Ngày tùy chọn</option>
                                <option value="7days">7 ngày qua</option>
                                <option value="month">Tháng</option>
                                <option value="quarter">Quý</option>
                                <option value="year">Năm</option>
                            </select>
                        </div>

                        {filterType === 'day' && (
                            <div className="filter-group">
                                <label className="filter-label">Khoảng ngày:</label>
                                <input type="date" className="filter-input" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                <span>đến</span>
                                <input type="date" className="filter-input" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                            </div>
                        )}

                        {filterType === 'month' && (
                            <div className="filter-group">
                                <label className="filter-label">Chọn tháng/năm:</label>
                                <select className="filter-select" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                                    {[...Array(12)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>Tháng {i + 1}</option>
                                    ))}
                                </select>
                                <select className="filter-select" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                </select>
                            </div>
                        )}

                        {filterType === 'quarter' && (
                            <div className="filter-group">
                                <label className="filter-label">Chọn quý/năm:</label>
                                <select className="filter-select" value={selectedQuarter} onChange={(e) => setSelectedQuarter(e.target.value)}>
                                    <option value="Q1">Quý 1</option>
                                    <option value="Q2">Quý 2</option>
                                    <option value="Q3">Quý 3</option>
                                    <option value="Q4">Quý 4</option>
                                </select>
                                <select className="filter-select" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                </select>
                            </div>
                        )}

                        {filterType === 'year' && (
                            <div className="filter-group">
                                <label className="filter-label">Chọn năm:</label>
                                <select className="filter-select" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                </select>
                            </div>
                        )}

                        <div className="filter-group checkbox-group">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={enableCompare}
                                    onChange={(e) => setEnableCompare(e.target.checked)}
                                />
                                So sánh dữ liệu
                            </label>
                        </div>

                        {enableCompare && filterType === 'month' && (
                            <div className="filter-group compare-box">
                                <label className="filter-label">So với tháng:</label>
                                <select className="filter-select" value={compareMonth} onChange={(e) => setCompareMonth(e.target.value)}>
                                    {[...Array(12)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>Tháng {i + 1}</option>
                                    ))}
                                </select>
                                <select className="filter-select" value={compareYear} onChange={(e) => setCompareYear(e.target.value)}>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                </select>
                            </div>
                        )}

                        {enableCompare && filterType === 'quarter' && (
                            <div className="filter-group compare-box">
                                <label className="filter-label">So với quý:</label>
                                <select className="filter-select" value={compareQuarter} onChange={(e) => setCompareQuarter(e.target.value)}>
                                    <option value="Q1">Quý 1</option>
                                    <option value="Q2">Quý 2</option>
                                    <option value="Q3">Quý 3</option>
                                    <option value="Q4">Quý 4</option>
                                </select>
                                <select className="filter-select" value={compareYear} onChange={(e) => setCompareYear(e.target.value)}>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                </select>
                            </div>
                        )}

                        {enableCompare && filterType === 'year' && (
                            <div className="filter-group compare-box">
                                <label className="filter-label">So với năm:</label>
                                <select className="filter-select" value={compareTargetYear} onChange={(e) => setCompareTargetYear(e.target.value)}>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                </select>
                            </div>
                        )}

                        <button className="filter-submit-btn">Áp dụng</button>
                    </div>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-title">Doanh thu tháng này</span>
                        <div className="stat-value">1.240.000.000đ</div>
                        {enableCompare ? (
                            <div className="stat-badge positive">
                                +12.4% so với {filterType === 'month' ? `Tháng ${compareMonth}/${compareYear}` : filterType === 'quarter' ? `${compareQuarter} (${compareYear})` : `Năm ${compareTargetYear}`}
                            </div>
                        ) : (
                            <div className="stat-badge neutral">Không so sánh</div>
                        )}
                    </div>

                    <div className="stat-card">
                        <span className="stat-title">Số đơn hàng sản xuất</span>
                        <div className="stat-value">1,420 Đơn</div>
                        <div className="stat-badge positive">+8.2% so với tháng trước</div>
                    </div>

                    <div className="stat-card">
                        <span className="stat-title">Tỷ lệ hoàn trả/Lỗi đóng gói</span>
                        <div className="stat-value">2.1%</div>
                        <div className="stat-badge positive">-0.5% (Tốt hơn mục tiêu)</div>
                    </div>

                    <div className="stat-card">
                        <span className="stat-title">Đánh giá trung bình xưởng</span>
                        <div className="stat-value">4.8 / 5.0</div>
                        <div className="stat-rating">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            <span>95% Đánh giá 5 sao</span>
                        </div>
                    </div>
                </div>

                <div className="content-grid">
                    <div className="card chart-card">
                        <h3 className="card-title">Doanh thu xưởng theo thời gian đã chọn</h3>
                        <div className="chart-container">
                            <svg viewBox="0 0 500 150" className="chart-svg">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#ff4d6d" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="#ff4d6d" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path d="M0,80 Q120,120 250,50 T500,70 L500,150 L0,150 Z" fill="url(#chartGradient)" />
                                <path d="M0,80 Q120,120 250,50 T500,70" fill="none" stroke="#e63946" strokeWidth="2" />
                                <circle cx="250" cy="50" r="4" fill="#ffffff" stroke="#e63946" strokeWidth="2" />
                            </svg>
                            <div className="chart-labels">
                                <span>Giai đoạn 1</span>
                                <span>Giai đoạn 2</span>
                                <span>Giai đoạn 3</span>
                                <span>Giai đoạn 4</span>
                            </div>
                        </div>
                    </div>

                    <div className="card pie-card">
                        <h3 className="card-title">Phân bố trạng thái đơn hàng</h3>
                        <div className="donut-chart-wrapper">
                            <div className="donut-chart">
                                <div className="donut-inner">
                                    <span className="donut-number">1,420</span>
                                    <span className="donut-label">Tổng đơn</span>
                                </div>
                            </div>
                        </div>
                        <div className="chart-legend">
                            <div className="legend-item"><span className="dot success"></span> Hoàn thành (50%)</div>
                            <div className="legend-item"><span className="dot info"></span> Đang xử lý (33%)</div>
                            <div className="legend-item"><span className="dot warning"></span> Chờ xử lý (17%)</div>
                        </div>
                    </div>
                </div>

                <div className="content-grid">
                    <div className="card">
                        <h3 className="card-title">Top 4 tinh dầu bán chạy tại xưởng</h3>
                        <div className="top-list">
                            <div className="top-item">
                                <div className="item-info">
                                    <span className="item-name">1. Tinh dầu Lavender Pháp (10ml)</span>
                                    <span className="item-count">850 đơn</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '85%' }}></div>
                                </div>
                            </div>

                            <div className="top-item">
                                <div className="item-info">
                                    <span className="item-name">2. Tinh dầu Tràm Trà Úc (30ml)</span>
                                    <span className="item-count">620 đơn</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '65%' }}></div>
                                </div>
                            </div>

                            <div className="top-item">
                                <div className="item-info">
                                    <span className="item-name">3. Tinh dầu Sả Chanh Ấn Độ (50ml)</span>
                                    <span className="item-count">410 đơn</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '45%' }}></div>
                                </div>
                            </div>

                            <div className="top-item">
                                <div className="item-info">
                                    <span className="item-name">4. Máy khuếch tán tinh dầu Nordic-V1</span>
                                    <span className="item-count">300 đơn</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '30%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3 className="card-title">Hoạt động đóng gói mới nhất</h3>
                        <div className="activity-list">
                            <div className="activity-item">
                                <span className="activity-dot success"></span>
                                <p>Đơn hàng <strong>#ND-84209</strong> hoàn thành đóng gói bởi Kỹ thuật viên Nguyễn Văn C - <span className="time">2 phút trước</span></p>
                            </div>
                            <div className="activity-item">
                                <span className="activity-dot info"></span>
                                <p>Đơn hàng <strong>#ND-84210</strong> đã xác nhận chuẩn bị nguyên liệu xưởng chính - <span className="time">15 phút trước</span></p>
                            </div>
                            <div className="activity-item">
                                <span className="activity-dot warning"></span>
                                <p>Đơn hàng mới <strong>#ND-84211</strong> vừa gửi yêu cầu từ hệ thống cửa hàng - <span className="time">1 giờ trước</span></p>
                            </div>
                            <div className="activity-item">
                                <span className="activity-dot danger"></span>
                                <p>Hủy đóng gói đơn <strong>#ND-84205</strong> theo yêu cầu đổi loại của khách hàng - <span className="time">3 giờ trước</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WorkshopDashboard;