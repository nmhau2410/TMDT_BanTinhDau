import React from 'react';
import Sidebar from '../../../components/workshop/Sidebar';
import '../css/WorkshopDashboard.css';

const WorkshopDashboard = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />

            <main className="main-content">
                <div className="breadcrumb">
                    <span>Quản lý xưởng</span> / <span className="active">Quản lý thống kê hiệu suất</span>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-title">Doanh thu tháng này</span>
                        <div className="stat-value">1.240.000.000đ</div>
                        <div className="stat-badge positive">+12.4% so với tháng trước</div>
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
                        <h3 className="card-title">Doanh thu xưởng theo tháng (Năm 2023)</h3>
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
                                <span>Tháng 5</span>
                                <span>Tháng 6</span>
                                <span>Tháng 7</span>
                                <span>Tháng 8</span>
                                <span>Tháng 9</span>
                                <span>Tháng 10</span>
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
                    {/* Top Selling Essential Oils */}
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