import React, { useState, useMemo } from 'react';
import Sidebar from '../../../components/workshop/Sidebar';
import '../css/WorkshopMaterials.css';
import {
    FiPlus,
    FiSearch,
    FiDroplet,
    FiBox,
    FiAlertTriangle,
    FiSlash,
    FiEdit3,
    FiArrowDownCircle,
    FiX
} from 'react-icons/fi';

const CATEGORIES = [
    { id: 1, code: 'ESSENTIAL_OIL', name: 'Tinh dầu' },
    { id: 2, code: 'FRAGRANCE_OIL', name: 'Hương liệu' },
    { id: 3, code: 'NATURAL_EXTRACT', name: 'Chiết xuất tự nhiên' },
    { id: 4, code: 'OTHER', name: 'Nguyên liệu khác' }
];
const INITIAL_INVENTORY = [
    {
        id: 1,
        material_id: 101,
        category_id: 1,
        name: 'Tinh dầu Oải Hương Pháp',
        scientific_name: 'Lavandula angustifolia',
        note_type: 'MIDDLE',
        scent_profile: 'Hương hoa ngọt dịu, thảo mộc ấm áp, thư giãn',
        unit: 'ML',
        image_url: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=120&auto=format&fit=crop&q=80',
        stock_quantity: 4200,
        minimum_stock: 1000,
        unit_price: 3500,
        status: 1
    },
    {
        id: 2,
        material_id: 102,
        category_id: 1,
        name: 'Tinh dầu Tràm Trà Úc',
        scientific_name: 'Melaleuca alternifolia',
        note_type: 'TOP',
        scent_profile: 'Thảo mộc thanh mát, the the tự nhiên, kháng khuẩn',
        unit: 'ML',
        image_url: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?w=120&auto=format&fit=crop&q=80',
        stock_quantity: 1850,
        minimum_stock: 500,
        unit_price: 2800,
        status: 1
    },
    {
        id: 3,
        material_id: 103,
        category_id: 1,
        name: 'Tinh dầu Vỏ Bưởi Năm Roi',
        scientific_name: 'Citrus grandis Osbeck',
        note_type: 'TOP',
        scent_profile: 'Cam chanh tươi sáng, thanh ngọt, kích thích sảng khoái',
        unit: 'ML',
        image_url: 'https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=120&auto=format&fit=crop&q=80',
        stock_quantity: 215,
        minimum_stock: 500,
        unit_price: 3200,
        status: 1
    },
    {
        id: 4,
        material_id: 104,
        category_id: 1,
        name: 'Tinh dầu Bạc Hà Peppermint',
        scientific_name: 'Mentha piperita L.',
        note_type: 'TOP',
        scent_profile: 'The mát mãnh liệt, sảng khoái, thông mũi',
        unit: 'ML',
        image_url: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=120&auto=format&fit=crop&q=80',
        stock_quantity: 2400,
        minimum_stock: 800,
        unit_price: 2500,
        status: 1
    },
    {
        id: 5,
        material_id: 105,
        category_id: 4,
        name: 'Dầu Nền Jojoba Vàng Ép Lạnh',
        scientific_name: 'Simmondsia chinensis',
        note_type: 'BASE',
        scent_profile: 'Mùi hạt nhẹ dịu, không gắt, giữ ẩm lâu bền',
        unit: 'ML',
        image_url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=120&auto=format&fit=crop&q=80',
        stock_quantity: 3800,
        minimum_stock: 1200,
        unit_price: 1800,
        status: 1
    },
    {
        id: 6,
        material_id: 106,
        category_id: 2,
        name: 'Hương Gỗ Đàn Hương Mysore',
        scientific_name: 'Santalum album extract',
        note_type: 'BASE',
        scent_profile: 'Gỗ ấm nồng, sang trọng quý phái, đọng hương bền',
        unit: 'GRAM',
        image_url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=120&auto=format&fit=crop&q=80',
        stock_quantity: 80,
        minimum_stock: 200,
        unit_price: 15000,
        status: 1
    },
    {
        id: 7,
        material_id: 107,
        category_id: 3,
        name: 'Chiết Xuất Hoa Nhài Sambac',
        scientific_name: 'Jasminum sambac',
        note_type: 'MIDDLE',
        scent_profile: 'Hoa trắng nồng nàn, thanh khiết, quyến rũ tự nhiên',
        unit: 'ML',
        image_url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=120&auto=format&fit=crop&q=80',
        stock_quantity: 0,
        minimum_stock: 300,
        unit_price: 8500,
        status: 0
    }
];

const WorkshopMaterials = () => {
    const [inventory, setInventory] = useState(INITIAL_INVENTORY);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [selectedNote, setSelectedNote] = useState('ALL');
    const [stockFilter, setStockFilter] = useState('ALL');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isStockInModalOpen, setIsStockInModalOpen] = useState(false);
    const [currentStockInItem, setCurrentStockInItem] = useState(null);
    const [stockInAmount, setStockInAmount] = useState('');
    const [newMaterial, setNewMaterial] = useState({
        name: '',
        scientific_name: '',
        category_id: 1,
        note_type: 'MIDDLE',
        scent_profile: '',
        unit: 'ML',
        stock_quantity: '',
        minimum_stock: '',
        unit_price: ''
    });
    const totalItems = inventory.length;
    const totalVolume = inventory.reduce((sum, item) => sum + Number(item.stock_quantity), 0);
    const lowStockCount = inventory.filter(item => item.status === 1 && item.stock_quantity <= item.minimum_stock).length;
    const inactiveCount = inventory.filter(item => item.status === 0).length;
    const filteredInventory = useMemo(() => {
        return inventory.filter(item => {
            const matchesSearch =
                item.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
                item.scientific_name.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
                item.scent_profile.toLowerCase().includes(searchTerm.toLowerCase().trim());

            if (!matchesSearch) return false;

            if (selectedCategory !== 'ALL' && item.category_id !== Number(selectedCategory)) {
                return false;
            }

            if (selectedNote !== 'ALL' && item.note_type !== selectedNote) {
                return false;
            }

            if (stockFilter === 'LOW') {
                return item.status === 1 && item.stock_quantity <= item.minimum_stock;
            }
            if (stockFilter === 'OUT') {
                return item.stock_quantity <= 0;
            }
            if (stockFilter === 'ACTIVE') {
                return item.status === 1;
            }

            return true;
        });
    }, [inventory, searchTerm, selectedCategory, selectedNote, stockFilter]);

    const handleToggleStatus = (id) => {
        setInventory(prev => prev.map(item =>
            item.id === id ? { ...item, status: item.status === 1 ? 0 : 1 } : item
        ));
    };
    const handleOpenStockIn = (item) => {
        setCurrentStockInItem(item);
        setStockInAmount('');
        setIsStockInModalOpen(true);
    };
    const handleConfirmStockIn = (e) => {
        e.preventDefault();
        const addAmount = Number(stockInAmount);
        if (!addAmount || addAmount <= 0) return;

        setInventory(prev => prev.map(item => {
            if (item.id === currentStockInItem.id) {
                return {
                    ...item,
                    stock_quantity: item.stock_quantity + addAmount,
                    status: 1
                };
            }
            return item;
        }));

        setIsStockInModalOpen(false);
    };
    const handleSaveNewMaterial = (e) => {
        e.preventDefault();
        if (!newMaterial.name) return;

        const newItem = {
            id: Date.now(),
            material_id: Date.now() + 100,
            category_id: Number(newMaterial.category_id),
            name: newMaterial.name,
            scientific_name: newMaterial.scientific_name || 'Botanical extract',
            note_type: newMaterial.note_type,
            scent_profile: newMaterial.scent_profile || 'Thảo mộc tự nhiên',
            unit: newMaterial.unit,
            image_url: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?w=120&auto=format&fit=crop&q=80',
            stock_quantity: Number(newMaterial.stock_quantity) || 0,
            minimum_stock: Number(newMaterial.minimum_stock) || 100,
            unit_price: Number(newMaterial.unit_price) || 1000,
            status: 1
        };

        setInventory(prev => [newItem, ...prev]);
        setIsAddModalOpen(false);
        setNewMaterial({
            name: '',
            scientific_name: '',
            category_id: 1,
            note_type: 'MIDDLE',
            scent_profile: '',
            unit: 'ML',
            stock_quantity: '',
            minimum_stock: '',
            unit_price: ''
        });
    };

    const getCategoryName = (catId) => {
        const cat = CATEGORIES.find(c => c.id === catId);
        return cat ? cat.name : 'Khác';
    };

    return (
        <div className="wm-container">
            <Sidebar />

            <main className="wm-main">
                <div className="wm-breadcrumb">
                    <span>Quản lý xưởng</span>
                    <span>/</span>
                    <span className="active">Kho nguyên liệu</span>
                </div>
                <div className="wm-header">
                    <div className="wm-header-title">
                        <h1>Kho Nguyên Liệu Pha Chế</h1>
                        <p>Quản lý tồn kho, định mức tối thiểu và đơn giá nguyên liệu của xưởng</p>
                    </div>

                    <div className="wm-header-actions">
                        <button className="wm-btn-primary" onClick={() => setIsAddModalOpen(true)}>
                            <FiPlus size={16} />
                            <span>Thêm nguyên liệu vào kho</span>
                        </button>
                    </div>
                </div>

                <div className="wm-stats-grid">
                    <div className="wm-stat-card">
                        <div className="wm-stat-icon blue">
                            <FiBox />
                        </div>
                        <div className="wm-stat-body">
                            <span className="wm-stat-value">{totalItems}</span>
                            <span className="wm-stat-title">Tổng loại nguyên liệu</span>
                        </div>
                    </div>

                    <div className="wm-stat-card">
                        <div className="wm-stat-icon teal">
                            <FiDroplet />
                        </div>
                        <div className="wm-stat-body">
                            <span className="wm-stat-value">{totalVolume.toLocaleString('vi-VN')}</span>
                            <span className="wm-stat-title">Tổng dung tích tồn (ml/g)</span>
                        </div>
                    </div>

                    <div className="wm-stat-card">
                        <div className="wm-stat-icon orange">
                            <FiAlertTriangle />
                        </div>
                        <div className="wm-stat-body">
                            <span className="wm-stat-value" style={{ color: lowStockCount > 0 ? '#ea580c' : '#0f172a' }}>
                                {lowStockCount}
                            </span>
                            <span className="wm-stat-title">Tồn kho thấp</span>
                        </div>
                    </div>

                    <div className="wm-stat-card">
                        <div className="wm-stat-icon gray">
                            <FiSlash />
                        </div>
                        <div className="wm-stat-body">
                            <span className="wm-stat-value">{inactiveCount}</span>
                            <span className="wm-stat-title">Tạm ngưng / Hết</span>
                        </div>
                    </div>
                </div>

                <div className="wm-toolbar">
                    <div className="wm-search-wrap">
                        <FiSearch />
                        <input
                            type="text"
                            placeholder="Tìm tên nguyên liệu, tên khoa học, mùi hương..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <select
                        className="wm-filter-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="ALL">Tất cả danh mục</option>
                        {CATEGORIES.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>

                    <select
                        className="wm-filter-select"
                        value={selectedNote}
                        onChange={(e) => setSelectedNote(e.target.value)}
                    >
                        <option value="ALL">Tất cả tầng hương</option>
                        <option value="TOP">Hương đầu (TOP)</option>
                        <option value="MIDDLE">Hương giữa (MIDDLE)</option>
                        <option value="BASE">Hương cuối (BASE)</option>
                    </select>

                    <select
                        className="wm-filter-select"
                        value={stockFilter}
                        onChange={(e) => setStockFilter(e.target.value)}
                    >
                        <option value="ALL">Tất cả tình trạng tồn</option>
                        <option value="LOW">Cảnh báo sắp hết</option>
                        <option value="OUT">Đã hết hàng (0 ml/g)</option>
                        <option value="ACTIVE">Đang sẵn sàng</option>
                    </select>

                    <span className="wm-result-pill">
                        {filteredInventory.length} nguyên liệu
                    </span>
                </div>

                <div className="wm-table-card">
                    <table className="wm-table">
                        <thead>
                            <tr>
                                <th>NGUYÊN LIỆU</th>
                                <th>DANH MỤC</th>
                                <th>TẦNG HƯƠNG</th>
                                <th>MÙI HƯƠNG (SCENT)</th>
                                <th>TỒN KHO &amp; ĐỊNH MỨC</th>
                                <th>ĐƠN GIÁ</th>
                                <th>TRẠNG THÁI</th>
                                <th>THAO TÁC</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredInventory.length > 0 ? (
                                filteredInventory.map(item => {
                                    const isLowStock = item.stock_quantity <= item.minimum_stock;
                                    const progressPercent = Math.min(
                                        100,
                                        Math.round((item.stock_quantity / (item.minimum_stock * 2.5 || 100)) * 100)
                                    );

                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="wm-mat-cell">
                                                    <img src={item.image_url} alt={item.name} className="wm-mat-thumb" />
                                                    <div className="wm-mat-info">
                                                        <strong>{item.name}</strong>
                                                        <small>{item.scientific_name}</small>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <span className={`wm-cat-badge cat-${item.category_id}`}>
                                                    {getCategoryName(item.category_id)}
                                                </span>
                                            </td>

                                            <td>
                                                <span className={`wm-note-badge ${item.note_type}`}>
                                                    {item.note_type}
                                                </span>
                                            </td>

                                            <td>
                                                <div className="wm-scent-text" title={item.scent_profile}>
                                                    {item.scent_profile}
                                                </div>
                                            </td>

                                            <td>
                                                <div className="wm-stock-cell">
                                                    <div className="wm-stock-info">
                                                        <span>{item.stock_quantity.toLocaleString('vi-VN')} {item.unit}</span>
                                                        <span style={{ color: '#94a3b8', fontSize: '11px' }}>
                                                            Tối thiểu: {item.minimum_stock}
                                                        </span>
                                                    </div>
                                                    <div className="wm-stock-progress-bar">
                                                        <div
                                                            className={`wm-stock-progress ${item.stock_quantity === 0 ? 'danger' : isLowStock ? 'warning' : 'safe'}`}
                                                            style={{ width: `${item.stock_quantity === 0 ? 0 : Math.max(8, progressPercent)}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <span className="wm-price-text">
                                                    {Number(item.unit_price).toLocaleString('vi-VN')} đ/{item.unit.toLowerCase()}
                                                </span>
                                            </td>

                                            <td>
                                                <span
                                                    className={`wm-status-pill ${item.status === 1 ? 'active' : 'inactive'}`}
                                                    onClick={() => handleToggleStatus(item.id)}
                                                    title="Bấm để đổi trạng thái"
                                                >
                                                    <span className="wm-status-dot"></span>
                                                    {item.status === 1 ? 'Hoạt động' : 'Tạm ẩn'}
                                                </span>
                                            </td>

                                            <td>
                                                <div className="wm-actions">
                                                    <button
                                                        className="wm-btn-action stock-in"
                                                        onClick={() => handleOpenStockIn(item)}
                                                        title="Nhập thêm lượng tồn kho"
                                                    >
                                                        <FiArrowDownCircle size={13} />
                                                        <span>Nhập kho</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="8" style={{ textAlign: 'center', padding: '36px', color: '#94a3b8' }}>
                                        Không tìm thấy nguyên liệu nào phù hợp với bộ lọc
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {isStockInModalOpen && currentStockInItem && (
                    <div className="wm-modal-backdrop" onClick={() => setIsStockInModalOpen(false)}>
                        <div className="wm-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '420px' }}>
                            <div className="wm-modal-header">
                                <h3>Nhập thêm tồn kho: {currentStockInItem.name}</h3>
                                <button className="wm-modal-close" onClick={() => setIsStockInModalOpen(false)}>
                                    <FiX />
                                </button>
                            </div>
                            <form onSubmit={handleConfirmStockIn}>
                                <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', marginBottom: '14px', fontSize: '13px' }}>
                                    <div>Tồn hiện tại: <strong>{currentStockInItem.stock_quantity} {currentStockInItem.unit}</strong></div>
                                    <div style={{ marginTop: '4px' }}>Mức tối thiểu: <strong>{currentStockInItem.minimum_stock} {currentStockInItem.unit}</strong></div>
                                </div>

                                <div className="wm-form-group">
                                    <label>Số lượng nhập thêm ({currentStockInItem.unit})</label>
                                    <input
                                        type="number"
                                        placeholder="VD: 500, 1000..."
                                        value={stockInAmount}
                                        onChange={e => setStockInAmount(e.target.value)}
                                        min="1"
                                        required
                                        autoFocus
                                    />
                                </div>

                                <div className="wm-modal-actions">
                                    <button
                                        type="button"
                                        className="wm-btn-secondary"
                                        onClick={() => setIsStockInModalOpen(false)}
                                    >
                                        Hủy
                                    </button>
                                    <button type="submit" className="wm-btn-primary">
                                        Xác nhận nhập kho
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {isAddModalOpen && (
                    <div className="wm-modal-backdrop" onClick={() => setIsAddModalOpen(false)}>
                        <div className="wm-modal" onClick={e => e.stopPropagation()}>
                            <div className="wm-modal-header">
                                <h3>Thêm nguyên liệu mới vào kho xưởng</h3>
                                <button className="wm-modal-close" onClick={() => setIsAddModalOpen(false)}>
                                    <FiX />
                                </button>
                            </div>
                            <form onSubmit={handleSaveNewMaterial}>
                                <div className="wm-form-row">
                                    <div className="wm-form-group">
                                        <label>Tên nguyên liệu *</label>
                                        <input
                                            type="text"
                                            placeholder="VD: Tinh dầu Cam Ngọt"
                                            value={newMaterial.name}
                                            onChange={e => setNewMaterial({ ...newMaterial, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="wm-form-group">
                                        <label>Tên khoa học</label>
                                        <input
                                            type="text"
                                            placeholder="VD: Citrus sinensis"
                                            value={newMaterial.scientific_name}
                                            onChange={e => setNewMaterial({ ...newMaterial, scientific_name: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="wm-form-row">
                                    <div className="wm-form-group">
                                        <label>Danh mục</label>
                                        <select
                                            value={newMaterial.category_id}
                                            onChange={e => setNewMaterial({ ...newMaterial, category_id: e.target.value })}
                                        >
                                            {CATEGORIES.map(cat => (
                                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="wm-form-group">
                                        <label>Tầng hương (Note type)</label>
                                        <select
                                            value={newMaterial.note_type}
                                            onChange={e => setNewMaterial({ ...newMaterial, note_type: e.target.value })}
                                        >
                                            <option value="TOP">Hương đầu (TOP)</option>
                                            <option value="MIDDLE">Hương giữa (MIDDLE)</option>
                                            <option value="BASE">Hương cuối (BASE)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="wm-form-group">
                                    <label>Mô tả mùi hương (Scent profile)</label>
                                    <input
                                        type="text"
                                        placeholder="VD: Ngọt ngào, ấm áp, thư thái..."
                                        value={newMaterial.scent_profile}
                                        onChange={e => setNewMaterial({ ...newMaterial, scent_profile: e.target.value })}
                                    />
                                </div>

                                <div className="wm-form-row">
                                    <div className="wm-form-group">
                                        <label>Đơn vị tính</label>
                                        <select
                                            value={newMaterial.unit}
                                            onChange={e => setNewMaterial({ ...newMaterial, unit: e.target.value })}
                                        >
                                            <option value="ML">ML (Mililít)</option>
                                            <option value="GRAM">GRAM (Gam)</option>
                                        </select>
                                    </div>
                                    <div className="wm-form-group">
                                        <label>Đơn giá (VNĐ / đơn vị)</label>
                                        <input
                                            type="number"
                                            placeholder="VD: 3000"
                                            value={newMaterial.unit_price}
                                            onChange={e => setNewMaterial({ ...newMaterial, unit_price: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="wm-form-row">
                                    <div className="wm-form-group">
                                        <label>Số lượng tồn ban đầu</label>
                                        <input
                                            type="number"
                                            placeholder="VD: 1000"
                                            value={newMaterial.stock_quantity}
                                            onChange={e => setNewMaterial({ ...newMaterial, stock_quantity: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="wm-form-group">
                                        <label>Định mức tồn tối thiểu</label>
                                        <input
                                            type="number"
                                            placeholder="VD: 300"
                                            value={newMaterial.minimum_stock}
                                            onChange={e => setNewMaterial({ ...newMaterial, minimum_stock: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="wm-modal-actions">
                                    <button
                                        type="button"
                                        className="wm-btn-secondary"
                                        onClick={() => setIsAddModalOpen(false)}
                                    >
                                        Hủy
                                    </button>
                                    <button type="submit" className="wm-btn-primary">
                                        Thêm vào kho
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default WorkshopMaterials;
