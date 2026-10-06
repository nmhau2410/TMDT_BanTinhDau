import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/workshop/Sidebar';
import { FiPlus, FiEdit2, FiTrash2, FiShield, FiActivity, FiBookOpen, FiCheckCircle } from 'react-icons/fi';
import '../css/WorkshopRules.css';

const MOCK_RULES = [
    {
        id: 1,
        ing1: 'Cam Bergamot nguyên chất',
        ing2: 'Giảm rụng lá (Red Rose)',
        reason: 'Nguy cơ kích ứng: Kích ứng chéo mẫn cảm nhóm d-limonene có trong Bergamot.',
        active: true
    },
    {
        id: 2,
        ing1: 'Tràm trà (Tea Tree)',
        ing2: 'Bạc hà (Peppermint)',
        reason: 'Hạn chế hỗn hợp: Gây sốc cảm quan cực mạnh cho khứu giác, mất đi hương sắc tự nhiên riêng biệt.',
        active: true
    },
    {
        id: 3,
        ing1: 'Citrus (Chanh, Bưởi, Cam)',
        ing2: 'Quế (Cinnamon)',
        reason: 'Nguy cơ gây xỉn màu: Thành phần cinnamic aldehyde dễ gây xỉn màu tinh chất lỏng nếu bảo quản lâu ngày.',
        active: false
    }
];
const WorkshopRules = () => {
    const [rules, setRules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [toasts, setToasts] = useState([]);
    const [modalConfig, setModalConfig] = useState({ isOpen: false, type: '', data: null });
    const [formData, setFormData] = useState({ ing1: '', ing2: '', reason: '' });
    const [cartWarning, setCartWarning] = useState(true);
    const [disclaimerWarning, setDisclaimerWarning] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setRules(MOCK_RULES);
            setLoading(false);
        }, 600);
        return () => clearTimeout(timer);
    }, []);
    const showToast = (message) => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 3000);
    };
    const handleToggleRule = (id) => {
        setRules(rules.map(r => r.id === id ? { ...r, active: !r.active } : r));
        showToast('Cập nhật trạng thái quy tắc thành công');
    };
    const openModal = (type, data = null) => {
        if (type === 'edit' && data) {
            setFormData({ ing1: data.ing1, ing2: data.ing2, reason: data.reason });
        } else if (type === 'add') {
            setFormData({ ing1: '', ing2: '', reason: '' });
        }
        setModalConfig({ isOpen: true, type, data });
    };
    const closeModal = () => {
        setModalConfig({ isOpen: false, type: '', data: null });
    };
    const handleSave = () => {
        if (modalConfig.type === 'add') {
            const newRule = {
                id: Date.now(),...formData,active: true
            };
            setRules([newRule, ...rules]);
            showToast('Đã thêm quy tắc mới');
        } else if (modalConfig.type === 'edit') {
            setRules(rules.map(r => r.id === modalConfig.data.id ? { ...r, ...formData } : r));
            showToast('Đã cập nhật quy tắc');
        } else if (modalConfig.type === 'delete') {
            setRules(rules.filter(r => r.id !== modalConfig.data.id));
            showToast('Đã xóa quy tắc');
        }
        closeModal();
    };
    return (
        <div className="dashboard-container">
            <Sidebar />
            <main className="main-content rules-main">
                <div className="rules-header-top">
                    <div>
                        <div className="breadcrumb">
                            <span>Quản lý xưởng</span> / <span className="active">Cấu hình quy tắc an toàn & chất lượng</span>
                        </div>
                        <h2 className="page-title">Thiết lập quy tắc an toàn và công thức tự mix tinh dầu</h2>
                        <p className="page-description">Kiểm soát các thành phần tương kỵ, quy định nồng độ phối trộn và thiết lập hiển thị cảnh báo cho khách hàng mua sắm</p>
                    </div>
                    <button className="btn-primary" onClick={() => openModal('add')}>
                        <FiPlus /> Thêm quy tắc mới
                    </button>
                </div>
                <div className="kpi-cards">
                    <div className="kpi-card">
                        <div className="kpi-header">
                            <span className="kpi-title">Số quy tắc hoạt động</span>
                            <div className="kpi-icon icon-green"><FiShield /></div>
                        </div>
                        <div className="kpi-value">8 Quy tắc</div>
                        <div className="kpi-subtitle text-green">Đang áp dụng QC</div>
                    </div>
                    <div className="kpi-card">
                        <div className="kpi-header">
                            <span className="kpi-title">Cảnh báo tháng</span>
                            <div className="kpi-icon icon-yellow"><FiActivity /></div>
                        </div>
                        <div className="kpi-value">15 Cảnh báo</div>
                        <div className="kpi-subtitle text-yellow">Phát hiện trong mix thử</div>
                    </div>
                    <div className="kpi-card">
                        <div className="kpi-header">
                            <span className="kpi-title">Tổng công thức</span>
                            <div className="kpi-icon icon-green"><FiBookOpen /></div>
                        </div>
                        <div className="kpi-value">142 Công thức</div>
                        <div className="kpi-subtitle text-green">++12 công thức mới</div>
                    </div>
                    <div className="kpi-card">
                        <div className="kpi-header">
                            <span className="kpi-title">Tỷ lệ tuân thủ</span>
                            <div className="kpi-icon icon-green"><FiCheckCircle /></div>
                        </div>
                        <div className="kpi-value">100% An Toàn</div>
                        <div className="kpi-subtitle text-green">Đạt tiêu chuẩn xưởng</div>
                    </div>
                </div>
                <div className="rules-content-layout">
                    <div className="rules-main-section">
                        <h3 className="section-title"><span className="section-icon">⚠</span> 1. Quy tắc thành phần tương kỵ (Cấm phối trộn)</h3>
                        <div className="rule-list">
                            {loading ? (
                                Array(3).fill(0).map((_, i) => (
                                    <div key={i} className="skeleton-card skeleton"></div>
                                ))
                            ) : (
                                rules.map(rule => (
                                    <div className="rule-card" key={rule.id}>
                                        <div className="rule-info">
                                            <div className="rule-ingredients">
                                                <span className="red">{rule.ing1}</span>
                                                <span className="plus">+</span>
                                                <span>{rule.ing2}</span>
                                            </div>
                                            <div className="rule-desc">{rule.reason}</div>
                                        </div>
                                        <div className="rule-actions">
                                            <label className="toggle-switch">
                                                <input type="checkbox" checked={rule.active}onChange={() => handleToggleRule(rule.id)}/>
                                                <span className="slider"></span>
                                            </label>
                                            <FiEdit2 className="action-icon edit" onClick={() => openModal('edit', rule)} />
                                            <FiTrash2 className="action-icon delete" onClick={() => openModal('delete', rule)} />
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        <h3 className="section-title"><span className="section-icon">▤</span> 2. Hạn mức tỷ lệ & nồng độ cho phép (Concentration Limits)</h3>
                        <div className="concentration-cards">
                            <div className="concentration-card">
                                <div className="conc-title">Nhóm Cay / Nóng (Warm Spicy)</div>
                                <div className="conc-desc">Sả, Gừng, Đinh hương... Nồng độ cao dễ gây rát da khứu giác.</div>
                                <div className="conc-limit">
                                    <span>Giới hạn tối đa (Max)</span>
                                    <span className="conc-limit-val">15%</span>
                                </div>
                            </div>
                            <div className="concentration-card">
                                <div className="conc-title">Dầu nền / Pha loãng (Carrier Oils)</div>
                                <div className="conc-desc">Dầu dừa, Jojoba... Bắt buộc làm nền dung hòa tinh dầu đậm đặc.</div>
                                <div className="conc-limit">
                                    <span>Tỷ lệ tối thiểu bắt buộc (Min)</span>
                                    <span className="conc-limit-val green">70%</span>
                                </div>
                            </div>
                        </div>
                        <h3 className="section-title"><span className="section-icon">👁</span> 3. Cấu hình hiển thị cảnh báo tương tác cho khách hàng</h3>
                        <div className="display-config-list">
                            <div className="display-config-item">
                                <div className="display-info">
                                    <div className="display-title">Hiển thị cảnh báo trực tiếp trên giỏ hàng tự chế (DIY Mixer)</div>
                                    <div className="display-desc">Khi khách hàng tự chọn các tinh dầu tương kỵ cùng lúc, hệ thống sẽ lập tức hiện pop-up khuyên đổi thành phần.</div>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" checked={cartWarning}onChange={(e) => { setCartWarning(e.target.checked); showToast('Cập nhật trạng thái thành công'); }}/>
                                    <span className="slider"></span>
                                </label>
                            </div>
                            <div className="display-config-item">
                                <div className="display-info">
                                    <div className="display-title">Yêu cầu xác nhận trách nhiệm (Disclaimer)</div>
                                    <div className="display-desc">Bắt buộc khách tích chọn đồng ý với hướng dẫn an toàn trước khi thanh toán đơn hàng tự phối chế.</div>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" checked={disclaimerWarning}onChange={(e) => { setDisclaimerWarning(e.target.checked); showToast('Cập nhật trạng thái thành công'); }}/>
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="rules-sidecard-section">
                        <div className="sidecard-block">
                            <h4 className="sidecard-title">Ý nghĩa Cấu hình Quy tắc</h4>
                            <p className="sidecard-text">Các quy tắc an toàn tự mix giúp giảm thiểu rủi ro khiếu nại sức khỏe từ khách hàng khi họ tự tạo mùi hương tại nhà.</p>
                            <p className="sidecard-text">Hệ thống kiểm soát chất lượng từ xưởng Hà Nội sẽ tự động đồng bộ các quy tắc này lên ứng dụng di động và website thương mại điện tử của Nordic.</p>
                        </div>
                        <div className="sidecard-block">
                            <h4 className="sidecard-title">Lịch sử cập nhật quy tắc</h4>
                            <div className="history-list">
                                <div className="history-item">
                                    <span className="history-title">Cập nhật quy tắc tương kỵ Citrus + Quế</span>
                                    <span className="history-meta">Giám sát: Hiếu Nguyễn • Hôm nay, 09:12</span>
                                </div>
                                <div className="history-item">
                                    <span className="history-title">Đổi giới hạn tối đa nhóm Cay / Nóng</span>
                                    <span className="history-meta">Hệ thống tự động • Hôm qua, 14:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {modalConfig.isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3 className="modal-title">
                            {modalConfig.type === 'add' ? 'Thêm quy tắc mới' : modalConfig.type === 'edit' ? 'Chỉnh sửa quy tắc' : 'Xác nhận xóa'}
                        </h3>
                        <div className="modal-body">
                            {modalConfig.type === 'delete' ? (
                                <p>Bạn có chắc chắn muốn xóa quy tắc này không? Hành động này không thể hoàn tác.</p>
                            ) : (
                                <>
                                    <input type="text" className="modal-input" placeholder="Thành phần 1"value={formData.ing1}onChange={(e) => setFormData({...formData, ing1: e.target.value})}/>
                                    <input type="text" className="modal-input" placeholder="Thành phần 2"value={formData.ing2}onChange={(e) => setFormData({...formData, ing2: e.target.value})}/>
                                    <textarea className="modal-input" placeholder="Lý do cảnh báo / Mức độ rủi ro"rows="3"value={formData.reason}onChange={(e) => setFormData({...formData, reason: e.target.value})}></textarea>
                                </>
                            )}
                        </div>
                        <div className="modal-actions">
                            <button className="btn-secondary" onClick={closeModal}>Hủy</button>
                            <button className={modalConfig.type === 'delete' ? 'btn-danger' : 'btn-primary'}onClick={handleSave}>
                                {modalConfig.type === 'delete' ? 'Xóa' : 'Lưu lại'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="toast-container">
                {toasts.map(toast => (
                    <div key={toast.id} className="toast">{toast.message}</div>
                ))}
            </div>
        </div>
    );
};

export default WorkshopRules;
