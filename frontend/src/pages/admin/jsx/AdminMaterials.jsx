import React, { useState } from 'react';
import AdminSidebar from '../../../components/admin/Sidebar';
import '../css/AdminMaterials.css';

const initialIngredients = [
    {
        sku: 'MAT-001',
        skuType: 'SKU CHUẨN',
        skuBadgeType: 'gray',
        icon: '🍋',
        iconBg: 'yellow',
        nameVi: 'Cam Bergamot Calabria Ý',
        nameEn: 'Italian Bergamot',
        nameLatin: 'Citrus Bergamia',
        tags: ['#citrus', '#fresh', '#sparkling'],
        noteLayer: 'Hướng đầu (Top)',
        noteLayerType: 'top',
        olfactoryFamily: 'Citrus',
        familyIcon: '🍋',
        familyType: 'citrus',
        sillage: '3/5',
        longevity: '2 – 3 giờ',
        mappedFactories: '18 xưởng',
        status: 'Đang hoạt động',
        statusType: 'active',
        maxRatio: '15',
        sillageRating: 3,
        longevityHours: '3.0',
        complementaryNotes: [
            { id: 'MAT-089', name: 'Gỗ Tuyết Tùng' },
            { id: 'MAT-105', name: 'Xạ Hương Trắng' }
        ]
    },
    {
        sku: 'MAT-042',
        skuType: 'HOT TREND',
        badgeNotice: 'Top 1 RFQ',
        skuBadgeType: 'red',
        icon: '🌹',
        iconBg: 'pink',
        nameVi: 'Hoa Hồng Grasse Pháp',
        nameEn: 'Grasse Centifolia Rose',
        nameLatin: 'Rosa centifolia',
        tags: ['#floral', '#sensual', '#velvety'],
        noteLayer: 'Hương giữa (Middle)',
        noteLayerType: 'middle',
        olfactoryFamily: 'Floral',
        familyIcon: '🌸',
        familyType: 'floral',
        sillage: '4/5',
        longevity: '6 – 8 giờ',
        mappedFactories: '24 xưởng',
        status: 'Đang hoạt động',
        statusType: 'active',
        maxRatio: '35',
        sillageRating: 4,
        longevityHours: '7.5',
        complementaryNotes: [
            { id: 'MAT-001', name: 'Cam Bergamot (MAT-001)' },
            { id: 'MAT-089', name: 'Gỗ Tuyết Tùng (MAT-089)' },
            { id: 'MAT-105', name: 'Xạ Hương Trắng (MAT-105)' }
        ]
    },
    {
        sku: 'MAT-089',
        skuType: 'SKU CHUẨN',
        skuBadgeType: 'gray',
        icon: '🌲',
        iconBg: 'blue',
        nameVi: 'Gỗ Tuyết Tùng Virginia',
        nameEn: 'Virginia Cedarwood',
        nameLatin: 'Juniperus virginiana',
        tags: ['#woody', '#dry', '#pencil-shavings'],
        noteLayer: 'Hương cuối (Base)',
        noteLayerType: 'base',
        olfactoryFamily: 'Woody',
        familyIcon: '🪵',
        familyType: 'woody',
        sillage: '4/5',
        longevity: '8 – 12 giờ',
        mappedFactories: '15 xưởng',
        status: 'Đang hoạt động',
        statusType: 'active',
        maxRatio: '25',
        sillageRating: 4,
        longevityHours: '10.0',
        complementaryNotes: [
            { id: 'MAT-001', name: 'Cam Bergamot' },
            { id: 'MAT-042', name: 'Hoa Hồng Grasse' }
        ]
    },
    {
        sku: 'MAT-118',
        skuType: 'SKU CHUẨN',
        skuBadgeType: 'gray',
        icon: '🫘',
        iconBg: 'amber',
        nameVi: 'Đậu Tonka Venezuela',
        nameEn: 'Venezuelan Tonka Bean',
        nameLatin: 'Dipteryx odorata',
        tags: ['#almond', '#vanillic', '#warm'],
        noteLayer: 'Hương cuối (Base)',
        noteLayerType: 'base',
        olfactoryFamily: 'Gourmand',
        familyIcon: '🍞',
        familyType: 'gourmand',
        sillage: '5/5',
        longevity: '10 – 14 giờ',
        mappedFactories: '1 xưởng (Thiếu nguồn)',
        mappedWarning: true,
        status: 'Cảnh báo tồn kho',
        statusType: 'warning',
        maxRatio: '20',
        sillageRating: 5,
        longevityHours: '12.0',
        complementaryNotes: [
            { id: 'MAT-042', name: 'Hoa Hồng Grasse' }
        ]
    }
];

const MasterIngredientsCatalog = () => {
    const [selectedRows, setSelectedRows] = useState(['MAT-001', 'MAT-042']);
    const [selectedTag, setSelectedTag] = useState('');

    const [activeIngredient, setActiveIngredient] = useState(null);
    const [formState, setFormState] = useState({
        sku: '',
        status: 'Đang kích hoạt',
        nameVi: '',
        nameEn: '',
        nameLatin: '',
        noteLayer: 'Hương giữa (Middle Note)',
        olfactoryFamily: 'Floral (Hương Hoa cỏ)',
        sillage: 4,
        longevityHours: '7.5',
        maxRatio: '35',
        notes: []
    });

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(initialIngredients.map(item => item.sku));
        } else {
            setSelectedRows([]);
        }
    };

    const handleSelectRow = (e, sku) => {
        e.stopPropagation();
        if (selectedRows.includes(sku)) {
            setSelectedRows(selectedRows.filter(id => id !== sku));
        } else {
            setSelectedRows([...selectedRows, sku]);
        }
    };

    const handleOpenModal = (item) => {
        setActiveIngredient(item);
        setFormState({
            sku: item.sku,
            status: item.status === 'Đang hoạt động' ? 'Đang kích hoạt' : 'Cảnh báo',
            nameVi: item.nameVi,
            nameEn: item.nameEn,
            nameLatin: item.nameLatin,
            noteLayer: item.noteLayer,
            olfactoryFamily: `${item.olfactoryFamily} (Hương Hoa cỏ)`,
            sillage: item.sillageRating || 4,
            longevityHours: item.longevityHours || '7.5',
            maxRatio: item.maxRatio || '35',
            notes: item.complementaryNotes || []
        });
    };

    const handleRemoveComplementaryNote = (id) => {
        setFormState(prev => ({
            ...prev,
            notes: prev.notes.filter(n => n.id !== id)
        }));
    };

    return (
        <div className="admin-container">
            <AdminSidebar />

            <main className="admin-main">
                <div className="admin-header">
                    <div>
                        <div className="breadcrumb">
                            <span>Quản trị hệ thống</span> / <span>Danh mục Nguyên liệu Chuẩn</span> / <span className="active">Scent Engine Dictionary</span>
                        </div>
                        <h1 className="page-title">
                            Quản lý Danh mục Nguyên liệu Chuẩn (Master Ingredients Catalog)
                            <span className="ai-engine-tag">⚡ Động cơ AI OllaEngine™ v2.4</span>
                        </h1>
                    </div>
                    <div className="header-actions">
                        <button className="btn-light">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                            Xuất từ điển Scent (Excel/JSON)
                        </button>
                        <button className="primary-btn red">
                            + + Thêm nốt hương chuẩn mới
                        </button>
                    </div>
                </div>

                <div className="ingredient-stats-grid">
                    <div className="ing-stat-card">
                        <div className="stat-header">
                            <span className="stat-label">TỔNG NỐT HƯƠNG TỪ ĐIỂN</span>
                            <span className="icon-badge pink">📚</span>
                        </div>
                        <div className="stat-number">
                            248 <small>nốt hương</small>
                        </div>
                        <div className="stat-sub-row">
                            <span className="green-text">+14 nốt mới</span>
                            <span className="gray-text">Chuẩn hóa IFRA 2026</span>
                        </div>
                    </div>

                    <div className="ing-stat-card">
                        <div className="stat-header">
                            <span className="stat-label">PHÂN BỐ THÁP NỐT HƯƠNG</span>
                            <span className="icon-badge blue">📐</span>
                        </div>
                        <div className="pyramid-distribution-bar">
                            <div className="bar-part top" style={{ width: '30%' }}></div>
                            <div className="bar-part middle" style={{ width: '45%' }}></div>
                            <div className="bar-part base" style={{ width: '25%' }}></div>
                        </div>
                        <div className="pyramid-legend">
                            <span><strong className="orange-dot">•</strong> Đầu: 79</span>
                            <span><strong className="pink-dot">•</strong> Giữa: 109</span>
                            <span><strong className="blue-dot">•</strong> Cuối: 60</span>
                        </div>
                    </div>

                    <div className="ing-stat-card">
                        <div className="stat-header">
                            <span className="stat-label">ĐỀ XUẤT NỐT MỚI TỪ XƯỞNG</span>
                            <span className="icon-badge yellow">⚠️</span>
                        </div>
                        <div className="stat-number">
                            8 <small>yêu cầu</small> <span className="urgent-badge">3 cần duyệt gấp</span>
                        </div>
                        <div className="stat-sub-row">
                            <span className="gray-text">Từ 5 cơ sở chế tác CGMP đối tác</span>
                        </div>
                    </div>

                    <div className="ing-stat-card">
                        <div className="stat-header">
                            <span className="stat-label">NỐT HƯƠNG HOT TREND (Q3/2026)</span>
                            <span className="icon-badge teal">🌐</span>
                        </div>
                        <ul className="trend-notes-list">
                            <li><span>• Hoa hồng Grasse</span> <strong className="red-text">38% RFQ</strong></li>
                            <li><span>• Cam Bergamot Ý</span> <strong className="orange-text">29%</strong></li>
                            <li><span>Gỗ tuyết tùng Virginia</span> <small>(24%)</small></li>
                        </ul>
                    </div>
                </div>

                <div className="catalog-tabs-bar">
                    <button className="tab-btn active">
                        🎒 DANH MỤC NGUYÊN LIỆU CHUẨN (MASTER CATALOG) <span className="count-pill red">248</span>
                    </button>
                    <button className="tab-btn">
                        📑 DUYỆT ĐỀ XUẤT NỐT HƯƠNG TỪ XƯỞNG (PENDING REQUESTS) <span className="count-pill yellow">8 Chờ duyệt</span>
                    </button>
                    <div className="sync-status">
                        <span className="green-dot">•</span> Thuật toán phối hương Scent Engine: <strong>Đang đồng bộ tức thì</strong>
                    </div>
                </div>

                <div className="catalog-filter-card">
                    <div className="search-bar-row">
                        <div className="search-input-wrapper">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                            <input type="text" placeholder="Bergamot, Grasse Rose, Virginia..." />
                        </div>
                        <select className="cat-select"><option>Tất cả tầng hương (3)</option></select>
                        <select className="cat-select"><option>Nhóm hương (Tất cả)</option></select>
                        <select className="cat-select"><option>Đã liên kết (Có xưởng trữ kho)</option></select>
                        <select className="cat-select"><option>Đang kích hoạt</option></select>
                        <button className="reset-btn">🔄</button>
                    </div>

                    <div className="tags-filter-row">
                        <span className="filter-label">Lọc nhanh theo Tag cảm quan:</span>
                        {['#sweet (42)', '#woody (58)', '#citrus (35)', '#sensual (28)', '#aquatic (19)'].map(tag => (
                            <button
                                key={tag}
                                className={`tag-chip ${selectedTag === tag ? 'active' : ''}`}
                                onClick={() => setSelectedTag(tag === selectedTag ? '' : tag)}
                            >
                                {tag}
                            </button>
                        ))}
                        <div className="selected-summary">
                            <span>Đã chọn: <strong>{selectedRows.length} nốt hương</strong></span>
                            <button className="bulk-apply-btn">Áp dụng hàng loạt</button>
                        </div>
                    </div>
                </div>

                <div className="ing-table-container">
                    <table className="ing-table">
                        <thead>
                        <tr>
                            <th width="40">
                                <input
                                    type="checkbox"
                                    onChange={handleSelectAll}
                                    checked={selectedRows.length === initialIngredients.length}
                                />
                            </th>
                            <th>MÃ SKU & BIỂU TƯỢNG</th>
                            <th>TÊN NGUYÊN LIỆU (VIỆT / ANH / LATIN)</th>
                            <th>TẦNG HƯƠNG</th>
                            <th>NHÓM HƯƠNG</th>
                            <th>ĐỘ TỎA (SILLAGE) & LƯU HƯƠNG</th>
                            <th>XƯỞNG ĐÃ MAPPING</th>
                            <th>TRẠNG THÁI</th>
                            <th>THAO TÁC</th>
                        </tr>
                        </thead>
                        <tbody>
                        {initialIngredients.map((item) => {
                            const isSelected = selectedRows.includes(item.sku);
                            return (
                                <tr
                                    key={item.sku}
                                    className={`clickable-row ${isSelected ? 'selected-row' : ''}`}
                                    onClick={() => handleOpenModal(item)}
                                >
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={(e) => handleSelectRow(e, item.sku)}
                                        />
                                    </td>
                                    <td>
                                        <div className="sku-cell">
                                            <div className={`icon-box ${item.iconBg}`}>{item.icon}</div>
                                            <div>
                                                <strong className="sku-code">{item.sku}</strong>
                                                <span className={`sku-badge ${item.skuBadgeType}`}>
                                                        {item.skuType} {item.badgeNotice && `• ${item.badgeNotice}`}
                                                    </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="ingredient-names">
                                            <strong className="name-vi">{item.nameVi}</strong>
                                            <small className="name-en">{item.nameEn} • <em>{item.nameLatin}</em></small>
                                            <div className="tags-row">
                                                {item.tags.map(t => <span key={t} className="tag-micro">{t}</span>)}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`layer-pill ${item.noteLayerType}`}>• {item.noteLayer}</span>
                                    </td>
                                    <td>
                                            <span className={`family-pill ${item.familyType}`}>
                                                {item.familyIcon} {item.olfactoryFamily}
                                            </span>
                                    </td>
                                    <td>
                                        <div className="sillage-cell">
                                            <span>Độ tỏa: <strong className="star-rating">★★★★★ ({item.sillage})</strong></span>
                                            <small>Lưu hương: <strong>{item.longevity}</strong></small>
                                        </div>
                                    </td>
                                    <td>
                                            <span className={`mapping-btn ${item.mappedWarning ? 'warning' : 'pink'}`}>
                                                {item.mappedFactories} ↗
                                            </span>
                                    </td>
                                    <td>
                                        <span className={`status-pill ${item.statusType}`}>• {item.status}</span>
                                    </td>
                                    <td>
                                        <div className="action-icons-row" onClick={(e) => e.stopPropagation()}>
                                            <button className="icon-btn" onClick={() => handleOpenModal(item)}>📝</button>
                                            <button className="icon-btn">🔗</button>
                                            <button className="icon-btn">👁️</button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>

                    <div className="table-pagination">
                        <div className="pagination-left">
                            <span>Hiển thị:</span>
                            <select><option>25 nốt hương / trang</option></select>
                            <span className="total-text">Tổng số: 248 nốt hương chuẩn</span>
                        </div>
                        <div className="pagination-right">
                            <button className="page-btn disabled">Trước</button>
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">3</button>
                            <span className="dots">...</span>
                            <button className="page-btn">10</button>
                            <button className="page-btn">Sau</button>
                        </div>
                    </div>
                </div>

                <div className="workflow-card">
                    <div className="workflow-header">
                        <div className="wf-title-group">
                            <span className="wf-icon">📋</span>
                            <div>
                                <h3>Quy trình thẩm định nốt hương đề xuất từ Xưởng (Workflow USP)</h3>
                                <p>Các đối tác Lab đề xuất thêm nguyên liệu độc quyền vào bánh xe hương Scent Engine</p>
                            </div>
                        </div>
                        <span className="pending-pill">8 Yêu cầu chờ xử lý</span>
                    </div>

                    <div className="wf-table-wrapper">
                        <table className="wf-table">
                            <thead>
                            <tr>
                                <th>MÃ YÊU CẦU</th>
                                <th>XƯỞNG ĐỀ XUẤT</th>
                                <th>TÊN NỐT HƯƠNG ĐỀ XUẤT</th>
                                <th>GHI CHÚ HÓA CHẤT & AN TOÀN IFRA</th>
                                <th>NGÀY GỬI</th>
                                <th>THAO TÁC THẨM ĐỊNH</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><strong>REQ-ING-2026-08</strong></td>
                                <td>
                                    <strong>Mộc Perfume Lab</strong>
                                    <small>WS-102 • TP.HCM</small>
                                </td>
                                <td>
                                    <strong>Trầm Hương Kỳ Nam Nha Trang</strong>
                                    <small>Aquilaria crassna • Tầng cuối (Base Note)</small>
                                </td>
                                <td>
                                    <span className="green-text font-bold">✔ Đã có COA & IFRA 51st Certificate</span>
                                    <small>Độ tinh khiết chiết xuất CO2 siêu tới hạn: 99.2%</small>
                                </td>
                                <td>22/09/2026</td>
                                <td>
                                    <div className="wf-actions">
                                        <button className="btn-approve">Chuẩn hóa & Đưa vào Scent Engine</button>
                                        <button className="btn-reject">Từ chối có lý do</button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {activeIngredient && (
                    <div className="modal-drawer-overlay" onClick={() => setActiveIngredient(null)}>
                        <div className="modal-drawer-content" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-drawer-header">
                                <div className="header-title-row">
                                    <div className="edit-icon-box">📝</div>
                                    <div>
                                        <h2>Cấu hình Thông số <span className="sku-badge-red">{formState.sku}</span></h2>
                                        <p>Chỉnh sửa thông số thuật toán phối hương</p>
                                    </div>
                                    <button className="drawer-close-icon" onClick={() => setActiveIngredient(null)}>✕</button>
                                </div>
                            </div>

                            <div className="modal-drawer-body">
                                <div className="form-section">
                                    <h4 className="section-heading red">• 1. THÔNG TIN ĐỊNH DANH CƠ BẢN</h4>

                                    <div className="grid-2col">
                                        <div className="form-group">
                                            <label>Mã SKU Chuẩn</label>
                                            <input type="text" value={formState.sku} disabled className="input-disabled" />
                                        </div>
                                        <div className="form-group">
                                            <label>Trạng thái phát hành</label>
                                            <select
                                                value={formState.status}
                                                onChange={(e) => setFormState({...formState, status: e.target.value})}
                                            >
                                                <option>Đang kích hoạt</option>
                                                <option>Tạm dừng</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Tên nguyên liệu tiếng Việt *</label>
                                        <input
                                            type="text"
                                            value={formState.nameVi}
                                            onChange={(e) => setFormState({...formState, nameVi: e.target.value})}
                                        />
                                    </div>

                                    <div className="grid-2col">
                                        <div className="form-group">
                                            <label>Tên tiếng Anh</label>
                                            <input
                                                type="text"
                                                value={formState.nameEn}
                                                onChange={(e) => setFormState({...formState, nameEn: e.target.value})}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Tên khoa học (Latin)</label>
                                            <input
                                                type="text"
                                                value={formState.nameLatin}
                                                onChange={(e) => setFormState({...formState, nameLatin: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-section">
                                    <h4 className="section-heading red">• 2. PHÂN LOẠI TẦNG HƯƠNG & NHÓM KHỨU GIÁC</h4>

                                    <div className="grid-2col">
                                        <div className="form-group highlight-pink">
                                            <label>Tầng hương (Note Layer) *</label>
                                            <select
                                                value={formState.noteLayer}
                                                onChange={(e) => setFormState({...formState, noteLayer: e.target.value})}
                                            >
                                                <option>Hương đầu (Top Note)</option>
                                                <option>Hương giữa (Middle Note)</option>
                                                <option>Hương cuối (Base Note)</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Nhóm hương (Olfactory Family) *</label>
                                            <select
                                                value={formState.olfactoryFamily}
                                                onChange={(e) => setFormState({...formState, olfactoryFamily: e.target.value})}
                                            >
                                                <option>🌸 Floral (Hương Hoa cỏ)</option>
                                                <option>🍋 Citrus (Hương Cam chanh)</option>
                                                <option>🪵 Woody (Hương Gỗ)</option>
                                                <option>🍞 Gourmand (Hương Thực phẩm)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-section card-bg">
                                    <div className="section-header-flex">
                                        <h4 className="section-heading red">• 3. THÔNG SỐ KỸ THUẬT ĐỘNG CƠ SCENT ENGINE</h4>
                                        <span className="core-badge">AI B2B CORE</span>
                                    </div>

                                    <div className="form-group">
                                        <div className="slider-label-row">
                                            <label>Độ tỏa hương (Sillage Rating):</label>
                                            <strong className="red-text font-bold">
                                                {formState.sillage} / 5 sao (Tỏa xa 1 – 2m)
                                            </strong>
                                        </div>
                                        <input
                                            type="range"
                                            min="1"
                                            max="5"
                                            value={formState.sillage}
                                            onChange={(e) => setFormState({...formState, sillage: parseInt(e.target.value)})}
                                            className="custom-range-slider"
                                        />
                                        <div className="slider-ticks">
                                            <span>1(Thoang thoảng)</span>
                                            <span>3 (Vừa phải)</span>
                                            <span>5 (Rất nồng / Áp đảo)</span>
                                        </div>
                                    </div>

                                    <div className="grid-2col">
                                        <div className="form-group">
                                            <label>Thời gian lưu hương (Giờ) *</label>
                                            <div className="input-suffix-wrapper">
                                                <input
                                                    type="text"
                                                    value={formState.longevityHours}
                                                    onChange={(e) => setFormState({...formState, longevityHours: e.target.value})}
                                                />
                                                <span className="suffix">giờ</span>
                                            </div>
                                        </div>

                                        <div className="form-group highlight-pink">
                                            <label>Tỷ lệ phối tối đa khuyến nghị *</label>
                                            <div className="input-suffix-wrapper">
                                                <input
                                                    type="text"
                                                    value={formState.maxRatio}
                                                    onChange={(e) => setFormState({...formState, maxRatio: e.target.value})}
                                                />
                                                <span className="suffix red">% MAX</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="ifra-sub-notice">
                                        * Tỷ lệ phối tối đa giúp thuật toán AI chặn không cho khách hàng tạo công thức quá gắt gây xung đột nồng độ theo chuẩn IFRA.
                                    </p>

                                    <div className="form-group">
                                        <label>Nốt hương tương thích hòa quyện (Complementary Notes):</label>
                                        <div className="tags-input-container">
                                            {formState.notes.map(n => (
                                                <span key={n.id} className="comp-tag">
                                                    {n.name}
                                                    <button onClick={() => handleRemoveComplementaryNote(n.id)}>✕</button>
                                                </span>
                                            ))}
                                            <input type="text" placeholder="+ Chọn thêm nốt hòa hợp..." className="tag-ghost-input" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-section">
                                    <h4 className="section-heading red">• 4. TÀI SẢN ĐỒ HỌA & BIỂU TƯỢNG VECTOR</h4>
                                    <div className="grid-2col">
                                        <div className="upload-box">
                                            <div className="upload-icon pink">🖼️</div>
                                            <strong>Icon Vector SVG</strong>
                                            <small>rose_grasse_mono.svg</small>
                                        </div>
                                        <div className="upload-box">
                                            <div className="upload-icon blue">☁️</div>
                                            <strong>Ảnh minh họa Lab</strong>
                                            <small>Định dạng JPG/PNG 1:1</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-drawer-footer">
                                <button className="btn-cancel" onClick={() => setActiveIngredient(null)}>
                                    Hủy thay đổi
                                </button>
                                <div className="footer-right-buttons">
                                    <button className="btn-outline-pink">Thử nghiệm hòa tan Scent Lab</button>
                                    <button className="btn-primary-red" onClick={() => {
                                        alert('Lưu thông số Scent Engine thành công!');
                                        setActiveIngredient(null);
                                    }}>
                                        Lưu thông số Scent Engine
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default MasterIngredientsCatalog;