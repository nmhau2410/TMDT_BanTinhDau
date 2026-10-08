import React, { useState } from 'react';
import AdminSidebar from '../../../components/admin/Sidebar';
import '../css/AdminSupport.css';

const AdminSupport = () => {
    return (
        <div className="admin-layout">
            <AdminSidebar />
            <main className="admin-main admin-support">
                
                <div className="support-header">
                    <div className="support-breadcrumb">
                        <span>Quản trị hệ thống</span>
                        <span className="separator">›</span>
                        <span className="current">Phản hồi liên hệ & Hỗ trợ câu hỏi</span>
                    </div>
                    
                    <div className="support-title-row">
                        <h1>Hỗ trợ khách hàng & Đối tác xưởng</h1>
                        <div className="support-contact-info">
                            <div className="contact-item">
                                <span className="icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                </span>
                                <div>
                                    <div className="label">Tổng đài CSKH</div>
                                    <div className="value">1900 8192</div>
                                </div>
                            </div>
                            <div className="contact-divider"></div>
                            <div className="contact-item">
                                <span className="icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="4"/>
                                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
                                    </svg>
                                </span>
                                <div>
                                    <div className="label">Email CSKH</div>
                                    <div className="value">support@nordic.vn</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="support-metrics">
                    <div className="metric-card">
                        <div className="metric-title">
                            <span>Chờ tiếp nhận xử lý</span>
                            <span className="dot dot-black"></span>
                        </div>
                        <div className="metric-value">
                            <span className="number">05</span>
                            <span className="unit">YÊU CẦU</span>
                        </div>
                        <div className="metric-footer">
                            <span className="label">Thời gian chờ cao nhất</span>
                            <span className="value-red">18 phút</span>
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-title">
                            <span>Trong hạn xử lý &lt; 2h</span>
                            <span className="icon-green">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                                </svg>
                            </span>
                        </div>
                        <div className="metric-value">
                            <span className="number">18</span>
                            <span className="sub-value green">94.7% đúng hạn</span>
                        </div>
                        <div className="metric-footer">
                            <span className="label">Tiêu chuẩn vận hành</span>
                            <span className="value-green">08:00 - 18:00</span>
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-title">
                            <span>Thời gian phản hồi TB</span>
                            <span className="icon-gray">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>
                                </svg>
                            </span>
                        </div>
                        <div className="metric-value">
                            <span className="number">38</span>
                            <span className="unit lowercase">phút</span>
                        </div>
                        <div className="metric-footer">
                            <span className="label">So với ca trước</span>
                            <span className="value-green-bold">Giảm 12 phút (Nhanh hơn)</span>
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-title">
                            <span>Chỉ số hài lòng CSAT</span>
                            <span className="icon-green">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
                                </svg>
                            </span>
                        </div>
                        <div className="metric-value">
                            <span className="number green">96.5%</span>
                            <span className="sub-value">/ 342 đánh giá</span>
                        </div>
                        <div className="metric-footer">
                            <span className="label">Mục tiêu cam kết</span>
                            <span className="value-dark">&gt; 95.0%</span>
                        </div>
                    </div>
                </div>

                <div className="support-banner">
                    <span className="banner-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                    </span>
                    <div className="banner-text">
                        <strong>Thời gian cam kết phản hồi & giải quyết khiếu nại chất lượng:</strong>
                        <p>Tất cả các câu hỏi thuộc diện hoàn tiền, trả hàng xưởng tinh dầu & giao dịch bưu cục GHN phải được phản hồi chính thức qua Email/SĐT tối đa 2 giờ làm việc (8:00 - 18:00 hàng ngày).</p>
                    </div>
                </div>

                <div className="support-layout">
                    {/* Ticket List */}
                    <div className="ticket-sidebar">
                        <div className="ticket-header">
                            <h2>Hàng chờ câu hỏi (23)</h2>
                            <div className="search-box">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                                </svg>
                                <input type="text" placeholder="Tìm theo mã đơn (#ND-84210), SĐT" />
                            </div>
                            <div className="filter-chips">
                                <button className="chip active">Tất cả (23)</button>
                                <button className="chip">Hoàn tiền (8)</button>
                                <button className="chip">Kỹ thuật & ...</button>
                            </div>
                        </div>

                        <div className="ticket-list">
                            <div className="ticket-item active">
                                <div className="ticket-badges">
                                    <span className="badge badge-green">Đã phản hồi</span>
                                    <span className="badge badge-gray-text"><span className="icon-check">✓✓</span> Vừa xong</span>
                                </div>
                                <h3>Yêu cầu xử lý giao dịch hoàn</h3>
                                <p className="ticket-summary"><strong>Bạn:</strong> Bộ phận Kiểm định & Vận hành Oilia xác nhận kiện hàng #ND-84210...</p>
                                <div className="ticket-meta">
                                    <div className="user-info">
                                        <div className="avatar small dark">NA</div>
                                        <span>Nguyễn Văn An</span>
                                    </div>
                                    <span className="status-online">Đang online</span>
                                </div>
                            </div>
                            
                            <div className="ticket-item">
                                <div className="ticket-badges">
                                    <span className="badge badge-yellow">Chưa phản hồi</span>
                                    <span className="badge badge-gray-text">⏱ Còn 1h 15m</span>
                                </div>
                                <h3>Tư vấn công thức nồng độ cồn &...</h3>
                                <p className="ticket-summary">Xưởng gia công nến thơm Maison Candel hỏi tỷ lệ phối hương gỗ thông</p>
                                <div className="ticket-meta">
                                    <div className="user-info">
                                        <div className="avatar small gray">MC</div>
                                        <span>Xưởng Maison Candle</span>
                                    </div>
                                    <span className="time">14/10 • 09:45</span>
                                </div>
                            </div>
                            
                            <div className="ticket-item">
                                <div className="ticket-badges">
                                    <span className="badge badge-yellow">Chưa phản hồi</span>
                                    <span className="badge badge-gray-text">⏱ Còn 1h 15m</span>
                                </div>
                                <h3>Tư vấn công thức nồng độ cồn &...</h3>
                                <p className="ticket-summary">Xưởng gia công nến thơm Maison Candel hỏi tỷ lệ phối hương gỗ thông</p>
                                <div className="ticket-meta">
                                    <div className="user-info">
                                        <div className="avatar small gray">MC</div>
                                        <span>Xưởng Maison Candle</span>
                                    </div>
                                    <span className="time">14/10 • 09:45</span>
                                </div>
                            </div>
                            
                            <div className="ticket-item">
                                <div className="ticket-badges">
                                    <span className="badge badge-yellow">Chưa phản hồi</span>
                                    <span className="badge badge-gray-text">⏱ Còn 1h 15m</span>
                                </div>
                                <h3>Tư vấn công thức nồng độ cồn &...</h3>
                                <p className="ticket-summary">Xưởng gia công nến thơm Maison Candel hỏi tỷ lệ phối hương gỗ thông</p>
                                <div className="ticket-meta">
                                    <div className="user-info">
                                        <div className="avatar small gray">MC</div>
                                        <span>Xưởng Maison Candle</span>
                                    </div>
                                    <span className="time">14/10 • 09:45</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="chat-window">
                        <div className="chat-header">
                            <div className="chat-user">
                                <div className="avatar-wrapper">
                                    <div className="avatar dark">NA</div>
                                    <span className="online-dot"></span>
                                </div>
                                <div className="user-details">
                                    <div className="name-row">
                                        <h2>Nguyễn Văn An</h2>
                                        <span className="badge badge-green">ĐÃ PHẢN HỒI</span>
                                    </div>
                                    <div className="contact-row">
                                        <span>090 123 4567</span>
                                        <span className="dot">•</span>
                                        <span>nguyen.van.an@email.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-actions">
                                <button className="btn-outline">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>
                                    </svg>
                                    In hội thoại
                                </button>
                                <button className="btn-primary">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/>
                                    </svg>
                                    Đóng phiên
                                </button>
                            </div>
                        </div>

                        <div className="chat-messages">
                            <div className="date-divider">
                                <span>Hôm nay, 14 Tháng 10, 2023</span>
                            </div>

                            <div className="message-row left">
                                <div className="avatar small dark">NA</div>
                                <div className="message-content">
                                    <div className="message-meta">
                                        <span className="name">Nguyễn Văn An</span>
                                        <span className="time">10:24 AM</span>
                                    </div>
                                    <div className="bubble">
                                        <p>Tôi đã gửi trả tinh dầu Lavender Nguyên Chất vào ngày 10/10 và hệ thống bưu tá GHN báo đã kiểm tra chất lượng xong tại kho Hà Nội. Vui lòng kiểm tra lại tiến trình giải ngân hoàn tiền về tài khoản Visa Credit Card của tôi. Tôi vẫn chưa nhận được thông báo biến động số dư từ ngân hàng.</p>
                                        <div className="attachment">
                                            <div className="attach-icon">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                                                </svg>
                                            </div>
                                            <div className="attach-info">
                                                <span className="filename">Bien_lai_gui_hang_GHN_ND849201.jpg</span>
                                                <span className="filesize">245 KB • Đã kiểm tra niêm phong</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="message-row right">
                                <div className="message-content">
                                    <div className="message-meta">
                                        <span className="status-sent"><span className="icon-check">✓✓</span> Đã gửi</span>
                                        <span className="time">10:45 AM</span>
                                        <span className="name">Hieu Nguyen (Quản trị vận hành Oilia)</span>
                                    </div>
                                    <div className="bubble blue">
                                        <p>Chào anh Nguyễn Văn An,</p>
                                        <p>Bộ phận Kiểm định & Vận hành Oilia xác nhận kiện hàng hoàn #ND-84210 (Tinh dầu Lavender 100ml) đã hoàn tất kiểm nghiệm đạt chuẩn ISO 22716 vào sáng nay 14/10 với độ tinh khiết 99.8%.</p>
                                        <p>Lệnh hoàn tiền số tiền 890.000 ₫ đã được kích hoạt thành công sang cổng thanh toán Visa của anh. Theo quy định ngân hàng liên kết, số dư sẽ được ghi có vào thẻ trong vòng 1-2 ngày làm việc.</p>
                                        <div className="attachments-grid">
                                            <div className="attachment">
                                                <div className="attach-icon green">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/>
                                                    </svg>
                                                </div>
                                                <div className="attach-info">
                                                    <span className="filename">QC_Lavender_Pass.pdf</span>
                                                    <span className="filesize">1.2 MB • Đạt chuẩn 99.8%</span>
                                                </div>
                                            </div>
                                            <div className="attachment">
                                                <div className="attach-icon dark">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                                                    </svg>
                                                </div>
                                                <div className="attach-info">
                                                    <span className="filename">Hoa_don_hoan_tien_890K.pdf</span>
                                                    <span className="filesize">420 KB • Ký số điện tử</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="avatar small dark">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="chat-input-area">
                            <div className="quick-replies">
                                <span className="label">⚡ Mẫu trả lời nhanh:</span>
                                <button className="quick-btn">✓ Hướng dẫn tra cứu ngân hàng</button>
                                <button className="quick-btn">✓ Gửi tặng voucher xin lỗi 10%</button>
                                <button className="quick-btn">✓ Liên hệ</button>
                            </div>
                            <div className="input-box">
                                <textarea placeholder="Nhập tin nhắn phản hồi trực tiếp cho anh Nguyễn Văn An... (Nhấn Enter để gửi)"></textarea>
                                <div className="input-toolbar">
                                    <div className="toolbar-left">
                                        <button className="icon-btn">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                                            </svg>
                                        </button>
                                        <button className="icon-btn">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                                            </svg>
                                        </button>
                                        <button className="icon-btn">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="toolbar-right">
                                        <span className="sender-select">Trả lời từ: Quản trị viên Hiếu Nguyen</span>
                                        <button className="btn-text">Lưu mẫu</button>
                                        <button className="btn-send">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                                            </svg>
                                            Gửi phản hồi
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminSupport;
