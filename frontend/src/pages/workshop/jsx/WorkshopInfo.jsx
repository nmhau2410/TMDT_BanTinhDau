import React, { useState, useRef } from 'react';
import Sidebar from '../../../components/workshop/Sidebar';
import '../css/WorkshopInfo.css';
import { 
    FiEye, FiSave, FiCheckCircle, FiZap, FiActivity, FiThermometer,
    FiLock, FiMapPin, FiPlus, FiUpload, FiImage, FiMap, FiPhone, FiMail
} from 'react-icons/fi';

const WorkshopInfo = () => {
    const [activeTab, setActiveTab] = useState('general');
    const [isSaving, setIsSaving] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const fileInputRef = useRef(null);
    const certInputRef = useRef(null);
    const [formData, setFormData] = useState({
        name: 'Xưởng Chiết Xuất & Đóng Gói Tinh Dầu Tự Nhiên Oila - Chi nhánh Đà Lạt Lab #01',
        facilityId: 'WS-DL-84210',
        industrialZone: 'Khu Dược Sinh Học & Tinh Dầu Cao Cấp',
        address: 'Thung lũng Dược liệu, Phường 11, TP. Đà Lạt, Tỉnh Lâm Đồng',
        licenseNo: 'Số 482/SYT-QLD (Đủ ĐK SX Mỹ Phẩm & Tinh Dầu)',
        licenseDate: '18/03/2024 (Kiểm định định kỳ: 18/03/2027)',
        hotline: '(+84) 0263 389 4210',
        email: 'dalat-plant01@oilia.vn'
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleSave = () => {
        if (!formData.name || !formData.address || !formData.licenseNo) {
            alert('Vui lòng nhập đầy đủ các trường bắt buộc (*)');
            return;
        }
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setToastMessage('Cập nhật hồ sơ xưởng thành công!');
            setTimeout(() => setToastMessage(''), 3000);
        }, 1500);
    };
    const triggerFileSelect = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const triggerCertSelect = () => {
        if (certInputRef.current) {
            certInputRef.current.click();
        }
    };
    return (
        <div className="dashboard-container">
            <Sidebar />
            <main className="main-content">
                <div className="breadcrumb">
                    <span>Quản trị xưởng</span> / <span>Cấu hình hệ thống</span> / <span className="active">Thông tin xưởng</span>
                </div>
                <div className="info-header-section">
                    <div className="info-title-area">
                        <h2>Hồ Sơ & Cấu Hình Thông Tin Xưởng Sản Xuất</h2>
                        <span className="badge-cgmp"><FiCheckCircle /> Đã xác thực CGMP xưởng</span>
                    </div>
                    <div className="info-actions">
                        <button className="btn-outline"><FiEye /> Xem hồ sơ công bố</button>
                        <button className={`btn-primary ${isSaving ? 'loading' : ''}`} onClick={handleSave} disabled={isSaving}>
                            <FiSave /> {isSaving ? 'Đang lưu...' : 'Lưu thay đổi hồ sơ'}
                        </button>
                    </div>
                </div>
                <div className="kpi-cards-grid">
                    <div className="kpi-card">
                        <div className="kpi-label">MÃ ĐỊNH DANH XƯỞNG</div>
                        <div className="kpi-value-row">
                            <h3>WS-DL-10</h3>
                            <div className="kpi-icon-box"><FiActivity /></div>
                        </div>
                        <div className="kpi-status online"><span className="dot"></span> Trạng thái: Trực tuyến</div>
                    </div>
                    <div className="kpi-card">
                        <div className="kpi-label">CÔNG SUẤT ĐÓNG GÓI</div>
                        <div className="kpi-value-row">
                            <h3>15,000</h3>
                            <div className="kpi-icon-box blue"><FiZap /></div>
                        </div>
                        <div className="kpi-desc">Lọ tiêu chuẩn / 24h</div>
                    </div>
                    <div className="kpi-card">
                        <div className="kpi-label">LINE CHIẾT TỰ ĐỘNG</div>
                        <div className="kpi-value-row">
                            <h3>03 Line</h3>
                            <div className="kpi-icon-box gray"><FiActivity /></div>
                        </div>
                        <div className="kpi-desc">Chuẩn Class 100,000</div>
                    </div>
                    <div className="kpi-card">
                        <div className="kpi-label">NỒI CHƯNG CẤT HƠI NƯỚC</div>
                        <div className="kpi-value-row">
                            <h3>4 × 2000L</h3>
                            <div className="kpi-icon-box red"><FiThermometer /></div>
                        </div>
                        <div className="kpi-status warning">Tải áp suất: 92%</div>
                    </div>
                </div>
                <div className="tabs-navigation">
                    <button className={`tab-btn ${activeTab === 'general' ? 'active' : ''}`} onClick={() => setActiveTab('general')}>
                        1. Thông tin chung & Pháp lý cơ sở
                    </button>
                    <button className={`tab-btn ${activeTab === 'machine' ? 'active' : ''}`} onClick={() => setActiveTab('machine')}>
                        2. Năng lực máy móc & Line chiết rót
                    </button>
                    <button className={`tab-btn ${activeTab === 'hr' ? 'active' : ''}`} onClick={() => setActiveTab('hr')}>
                        3. Nhân sự xưởng
                    </button>
                    <button className={`tab-btn ${activeTab === 'automation' ? 'active' : ''}`} onClick={() => setActiveTab('automation')}>
                        4. Quy tắc cảnh báo & Tự động hóa
                    </button>
                </div>
                <div className="info-content-layout">
                    {activeTab === 'general' && (
                        <>
                            <div className="main-form-column">
                                <div className="form-section">
                                    <div className="section-header">
                                        <h4>Định danh xưởng chưng cất & Chiết xuất</h4>
                                        <span className="last-update">Cập nhật lần cuối: 12 phút trước</span>
                                    </div>
                                    <div className="form-group full-width">
                                        <label>Tên pháp lý xưởng sản xuất <span className="required">*</span></label>
                                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Mã định danh cơ sở (Facility ID)</label>
                                            <div className="input-icon-wrap readonly">
                                                <input type="text" name="facilityId" value={formData.facilityId} readOnly />
                                                <FiLock className="input-icon" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Phân loại khu công nghiệp</label>
                                            <input type="text" name="industrialZone" value={formData.industrialZone} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="form-group full-width">
                                        <label>Địa chỉ tọa lạc nhà máy <span className="required">*</span></label>
                                        <div className="input-icon-wrap">
                                            <FiMapPin className="input-icon left" />
                                            <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="padded-left" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-section">
                                    <div className="section-header">
                                        <h4>Hồ sơ pháp lý & Chứng nhận ngành</h4>
                                        <span className="badge-term">Niên hạn: 2024 - 2027</span>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Số Giấy phép Sở Y Tế cấp <span className="required">*</span></label>
                                            <input type="text" name="licenseNo" value={formData.licenseNo} onChange={handleInputChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Ngày cấp phép & Gia hạn gần nhất</label>
                                            <input type="text" name="licenseDate" value={formData.licenseDate} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="cert-badges">
                                        <span className="cert-badge cgmp"><FiCheckCircle /> CGMP ASEAN - Mỹ Phẩm</span>
                                        <span className="cert-badge iso"><FiCheckCircle /> ISO 22716:2007 (Cosmetics GMP)</span>
                                        <span className="cert-badge halal"><FiCheckCircle /> Halal Certification (JAKIM Standard)</span>
                                        <button className="btn-add-cert" onClick={triggerCertSelect}><FiPlus /> Thêm chứng chỉ</button>
                                        <input type="file" ref={certInputRef} style={{ display: 'none' }} accept=".pdf,image/*" />
                                    </div>
                                    <div className="file-preview-box">
                                        <div className="file-info">
                                            <div className="file-icon pdf">PDF</div>
                                            <div className="file-details">
                                                <div className="file-name">Giay_Phep_San_Xuat_482_SYT_LamDong_Signed.pdf</div>
                                                <div className="file-meta">Dung lượng: 4.8 MB • Bản quét màu có dấu mộc đỏ điện tử Sở Y Tế</div>
                                            </div>
                                        </div>
                                        <div className="file-actions">
                                            <button className="btn-view-doc">Xem tài liệu</button>
                                            <button className="btn-replace-doc" onClick={triggerFileSelect}>Thay bản mới</button>
                                            <input type="file" ref={fileInputRef} style={{ display: 'none' }} accept=".pdf" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-section">
                                    <div className="section-header">
                                        <h4>Trách nhiệm chuyên môn & Giám sát ca</h4>
                                    </div>
                                    <div className="personnel-cards">
                                        <div className="personnel-card pharmacist">
                                            <h5>PHỤ TRÁCH CHUYÊN MÔN KỸ THUẬT</h5>
                                            <div className="person-name">Dược Sĩ Nguyễn Văn An</div>
                                            <div className="person-detail">Chứng chỉ hành nghề: <strong>01429/LD-CCHN</strong></div>
                                            <div className="person-detail">Phạm vi: Thẩm định công thức, kiểm tra hàm lượng GC-MS</div>
                                        </div>
                                        <div className="personnel-card supervisor">
                                            <h5>GIÁM SÁT VẬN HÀNH NHÀ MÁY</h5>
                                            <div className="person-name">Kenji Tanaka (Hiếu Nguyễn)</div>
                                            <div className="person-detail">Vị trí: <strong>Tổng Ca Trưởng Điều Phối</strong></div>
                                            <div className="person-detail">Trực tiếp: Vận hành dây chuyền lò cất hơi & an toàn áp suất</div>
                                        </div>
                                    </div>
                                    <div className="form-row mt-3">
                                        <div className="form-group">
                                            <label>Hotline tiếp nhận thanh tra liên ngành</label>
                                            <div className="input-icon-wrap">
                                                <FiPhone className="input-icon left" />
                                                <input type="text" name="hotline" value={formData.hotline} onChange={handleInputChange} className="padded-left" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Email điều phối xưởng khẩn cấp</label>
                                            <div className="input-icon-wrap">
                                                <FiMail className="input-icon left" />
                                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="padded-left" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="audit-trail-notice">
                                        Mọi thay đổi trong hồ sơ xưởng WS-DL-84210 sẽ được ghi nhận vào nhật ký kiểm toán hệ thống (Audit Trail) để phục vụ đoàn thanh tra CGMP định kỳ.
                                    </div>
                                </div>
                            </div>
                            <div className="sidecard-column">
                                <div className="sidecard media-sidecard">
                                    <div className="sidecard-header">
                                        <h4>Hình ảnh thực tế xưởng</h4>
                                        <span className="cleanroom-tag">Phòng sạch Cleanroom</span>
                                    </div>
                                    <div className="media-gallery">
                                        <div className="main-banner">
                                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" alt="Phòng đóng chai Class 100k" />
                                            <div className="banner-overlay">
                                                <div>Phòng đóng chai Class 100k</div>
                                                <small>Kiểm soát hạt bụi & vi sinh</small>
                                            </div>
                                        </div>
                                        <div className="media-grid">
                                            <div className="grid-img">
                                                <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80" alt="4 Nồi 2000L" />
                                                <div className="grid-overlay">4 Nồi 2000L</div>
                                            </div>
                                            <div className="grid-img">
                                                <img src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&q=80" alt="Phòng Lab GC-MS" />
                                                <div className="grid-overlay">Phòng Lab GC-MS</div>
                                            </div>
                                        </div>
                                        <button className="btn-load-more-img"><FiUpload /> Tải thêm ảnh hiện trường xưởng</button>
                                    </div>
                                </div>
                                <div className="sidecard location-sidecard">
                                    <div className="sidecard-header">
                                        <h4>Vị trí địa lý xưởng</h4>
                                        <span className="altitude-tag">Độ cao: 1,500m</span>
                                    </div>
                                    <div className="map-placeholder">
                                        <FiMapPin className="map-marker-icon" />
                                        <div className="map-loc-name">Thung lũng Dược liệu Đà Lạt</div>
                                        <div className="map-loc-desc">Phường 11, TP. Đà Lạt, Tỉnh Lâm Đồng</div>
                                    </div>
                                    <div className="env-stats">
                                        <div className="env-stat-row">
                                            <span className="env-label">Độ ẩm kho nguyên liệu:</span>
                                            <span className="env-value">58% (Tối ưu)</span>
                                        </div>
                                        <div className="env-stat-row">
                                            <span className="env-label">Nhiệt độ phòng chiết rót:</span>
                                            <span className="env-value">21.5°C (Ổn định)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {activeTab !== 'general' && (
                        <div className="tab-placeholder">
                            <h3>Đang cập nhật phân hệ...</h3>
                        </div>
                    )}
                </div>
                {toastMessage && (
                    <div className="toast-notification">
                        <FiCheckCircle /> {toastMessage}
                    </div>
                )}
            </main>
        </div>
    );
};

export default WorkshopInfo;
