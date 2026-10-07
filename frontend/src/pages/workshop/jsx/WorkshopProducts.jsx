import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/workshop/Sidebar';
import '../css/WorkshopProducts.css';
import { 
    FiSearch, FiRefreshCw, FiPlus, FiDownload, FiUpload, 
    FiPackage, FiCheckCircle, FiPauseCircle, FiAlertTriangle,
    FiSettings, FiX, FiCheck, FiMoreVertical, FiCheckSquare
} from 'react-icons/fi';

const mockProducts = [
    {
        id: 'SKU-TT-030',
        barcode: '893850123001',
        name: 'Tinh Dầu Tràm Trà (Tea Tree Oil)',
        category: 'Đơn hương hữu cơ • Melaleuca alternifolia',
        image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=100&q=80',
        capacity: '30ml',
        packaging: 'Thủy tinh hổ phách, nắp nhỏ giọt đen',
        priceRetail: 245000,
        priceWholesale: 145000,
        stock: 1450,
        stockMin: 300,
        coa: 'COA-2024-TT04',
        coaDate: 'Cấp: 15/02/2024 (GC-MS 99.2%)',
        status: 'active'
    },
    {
        id: 'SKU-LG-010',
        barcode: '893850123002',
        name: 'Tinh Dầu Sả Chanh (Lemongrass Pure)',
        category: 'Đơn hương • Cymbopogon citratus',
        image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=100&q=80',
        capacity: '10ml',
        packaging: 'Thủy tinh nâu, nắp vặn kim loại',
        priceRetail: 110000,
        priceWholesale: 65000,
        stock: 85,
        stockMin: 250,
        coa: 'COA-2024-LG11',
        coaDate: 'Cấp: 10/01/2024 (GC-MS 97.8%)',
        status: 'warning'
    },
    {
        id: 'SKU-SYN-050',
        barcode: '893850123008',
        name: 'Deep Sleep Blend (Oải Hương & Hoàng Đàn)',
        category: 'Phối hương trị liệu • Lavender & Cedarwood',
        image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=100&q=80',
        capacity: '50ml',
        packaging: 'Thủy tinh phủ sương mờ, nắp dropper gỗ',
        priceRetail: 380000,
        priceWholesale: 220000,
        stock: 620,
        stockMin: 150,
        coa: 'COA-2024-SY02',
        coaDate: 'Cấp: 02/02/2024 (ISO 22716)',
        status: 'active'
    },
    {
        id: 'SKU-SP-100',
        barcode: '893850123019',
        name: 'Xịt Thảo Mộc Ấm Nồng Quế & Hồi',
        category: 'Xịt phòng • Quế Yên Bái & Đại Hồi Lạng Sơn',
        image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=100&q=80',
        capacity: '100ml',
        packaging: 'Bình nhôm phủ epoxy, vòi phun sương',
        priceRetail: 165000,
        priceWholesale: 98000,
        stock: 0,
        stockMin: 50,
        coa: 'COA-2023-CN01',
        coaDate: 'Đã ngừng lô mùa đông',
        status: 'inactive'
    },
    {
        id: 'SKU-PM-5000',
        barcode: '893850123045',
        name: 'Tinh Dầu Bạc Hà Xưởng Sỉ (Peppermint Bulk)',
        category: 'Đơn hương sỉ công nghiệp • Mentha piperita',
        image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=100&q=80',
        capacity: 'Can 5L',
        packaging: 'HDPE chuẩn dược phẩm, nắp niêm phong chỉ',
        priceRetail: 6800000,
        priceWholesale: 5200000,
        stock: 42,
        stockMin: 10,
        coa: 'COA-2024-PM99',
        coaDate: 'Cấp: 28/02/2024 (Menthol 78.4%)',
        status: 'active'
    },
    {
        id: 'SKU-DF-LUM',
        barcode: '893850123089',
        name: 'Máy Khuếch Tán Gốm Oilia Artisan Lumia',
        category: 'Thiết bị siêu âm • Vỏ gốm thủ công',
        image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=100&q=80',
        capacity: 'Bộ 350ml',
        packaging: 'Thân gốm ceramic, lõi nhựa không dấu pp',
        priceRetail: 850000,
        priceWholesale: 540000,
        stock: 210,
        stockMin: 50,
        coa: 'CE/RoHS-2024',
        coaDate: 'Chứng nhận an toàn điện tử',
        status: 'active'
    }
];
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount).replace('₫', 'đ');
};
const WorkshopProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        const timer = setTimeout(() => {
            setProducts(mockProducts);
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedItems(products.map(p => p.id));
        } else {
            setSelectedItems([]);
        }
    };
    const handleSelectItem = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };
    const clearFilters = () => {
        setSearchTerm('');
    };
    return (
        <div className="dashboard-container products-dashboard">
            <Sidebar />
            <main className="main-content">
                <div className="breadcrumb">
                    <span>Quản trị xưởng</span> / <span className="active">Quản lý sản phẩm</span>
                </div>
                <div className="page-header">
                    <div className="header-title">
                        <h2>Danh Mục & Quản Lý Sản Phẩm Xưởng</h2>
                        <span className="sync-badge"><span className="dot"></span> Đồng bộ ERP Đà Lạt: 10 phút trước</span>
                    </div>
                    <div className="header-actions">
                        <button className="btn-outline"><FiUpload /> Nhập từ file</button>
                        <button className="btn-outline"><FiDownload /> Xuất Excel</button>
                        <button className="btn-primary"><FiPlus /> Thêm sản phẩm mới</button>
                    </div>
                </div>
                <div className="kpi-cards-grid">
                    <div className="kpi-card">
                        <div className="kpi-label">TỔNG SẢN PHẨM KINH DOANH</div>
                        <div className="kpi-value-row">
                            <h3>128 <span className="unit">SKU</span></h3>
                            <div className="kpi-icon-box pink"><FiPackage /></div>
                        </div>
                        <div className="kpi-status online"><span className="trend up">↗ +12</span> mới bổ sung tháng này</div>
                    </div>
                    <div className="kpi-card">
                        <div className="kpi-label">ĐANG HOẠT ĐỘNG / CHIẾT RÓT</div>
                        <div className="kpi-value-row">
                            <h3>114 <span className="unit">SKU</span></h3>
                            <div className="kpi-icon-box green"><FiCheckCircle /></div>
                        </div>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: '89.1%' }}></div>
                            </div>
                            <span className="progress-text">89.1%</span>
                        </div>
                    </div>
                    <div className="kpi-card">
                        <div className="kpi-label">TẠM ẨN / NGỪNG CHIẾT RÓT</div>
                        <div className="kpi-value-row">
                            <h3>14 <span className="unit">SKU</span></h3>
                            <div className="kpi-icon-box gray"><FiPauseCircle /></div>
                        </div>
                        <div className="kpi-desc"><span className="dot gray"></span> Theo chu kỳ bảo dưỡng & kế hoạch mùa</div>
                    </div>
                    <div className="kpi-card alert">
                        <div className="kpi-label">CẢNH BÁO TỒN KHO / BAO BÌ</div>
                        <div className="kpi-value-row">
                            <h3 className="text-red">06 <span className="unit">SKU</span></h3>
                            <div className="kpi-icon-box red"><FiAlertTriangle /></div>
                        </div>
                        <div className="kpi-desc"><span className="text-red font-semibold">Chạm ngưỡng an toàn</span> (Cần lệnh chiết bổ sung)</div>
                    </div>
                </div>
                <div className="filter-bar">
                    <div className="filter-inputs">
                        <div className="search-box">
                            <FiSearch className="search-icon" />
                            <input type="text" placeholder="Tìm theo Tên sản phẩm, Mã SKU, Barcode..." value={searchTerm}onChange={(e) => setSearchTerm(e.target.value)}/>
                        </div>
                        <select className="filter-select">
                            <option>Dòng: Tất cả dòng sản phẩm</option>
                            <option>Đơn hương</option>
                            <option>Phối hương</option>
                        </select>
                        <select className="filter-select">
                            <option>Dung tích: Tất cả</option>
                            <option>10ml</option>
                            <option>30ml</option>
                            <option>50ml</option>
                        </select>
                        <select className="filter-select">
                            <option>Trạng thái: Tất cả</option>
                            <option>Đang hoạt động</option>
                            <option>Cảnh báo tồn</option>
                        </select>
                        <button className="btn-icon-outline"><FiRefreshCw /></button>
                    </div>
                    <div className="active-filters">
                        <span className="filter-label">Bộ lọc đang áp dụng:</span>
                        <span className="filter-tag">Cơ sở: Xưởng Đà Lạt - 01 <FiX className="remove-tag" /></span>
                        <span className="filter-tag">Tiêu chuẩn: CGMP ASEAN / ISO 22716 <FiX className="remove-tag" /></span>
                        <button className="btn-clear-filters" onClick={clearFilters}>Xóa tất cả</button>
                    </div>
                </div>
                <div className="table-container">
                    <div className="table-header-actions">
                        <h4>Danh mục thành phẩm chiết rót <span className="record-count">Hiển thị {products.length} / 128 SKU</span></h4>
                        <button className="btn-outline small"><FiSettings /> Tùy chỉnh cột</button>
                    </div>
                    <div className="table-responsive">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th width="40"><input type="checkbox" onChange={handleSelectAll} checked={selectedItems.length === products.length && products.length > 0} /></th>
                                    <th>MÃ SKU / BARCODE</th>
                                    <th>TÊN SẢN PHẨM & DÒNG</th>
                                    <th>QUY CÁCH & BAO BÌ</th>
                                    <th>ĐƠN GIÁ NIÊM YẾT / SỈ</th>
                                    <th>TỒN XƯỞNG / TỐI THIỂU</th>
                                    <th>KIỂM ĐỊNH COA / GC-MS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="7" className="text-center py-8">
                                            <div className="skeleton-loader">Đang tải dữ liệu...</div>
                                        </td>
                                    </tr>
                                ) : (
                                    products.map((product) => {
                                        const isLowStock = product.stock <= product.stockMin;
                                        return (
                                            <tr key={product.id} className={selectedItems.includes(product.id) ? 'selected' : ''}>
                                                <td>
                                                    <input type="checkbox" checked={selectedItems.includes(product.id)}onChange={() => handleSelectItem(product.id)}/>
                                                </td>
                                                <td>
                                                    <div className="sku-cell">
                                                        <img src={product.image} alt="thumb" className="prod-thumb" />
                                                        <div className="sku-info">
                                                            <div className="sku-code">{product.id}</div>
                                                            <div className="barcode">{product.barcode}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="name-cell">
                                                        <div className="prod-name">{product.name}</div>
                                                        <div className="prod-cat">{product.category}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="pack-cell">
                                                        <div className="capacity">{product.capacity}</div>
                                                        <div className="pack-desc">{product.packaging}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="price-cell">
                                                        <div className="retail-price">{formatCurrency(product.priceRetail)}</div>
                                                        <div className="wholesale-price">Sỉ: {formatCurrency(product.priceWholesale)}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="stock-cell">
                                                        <div className={`current-stock ${isLowStock ? 'alert-text' : 'safe-text'}`}>
                                                            {product.stock} {product.capacity.includes('ml') ? 'chai' : product.capacity.includes('Can') ? 'can' : 'máy'}
                                                        </div>
                                                        <div className={`min-stock ${isLowStock ? 'alert-text font-semibold' : ''}`}>
                                                            Định mức: {product.stockMin} {isLowStock && '(Báo động)'}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="coa-cell">
                                                        <div className={`coa-badge ${product.status}`}>
                                                            {product.status === 'active' ? <FiCheckCircle /> : product.status === 'warning' ? <FiCheckCircle /> : <FiAlertTriangle />} 
                                                            {product.coa}
                                                        </div>
                                                        <div className="coa-date">{product.coaDate}</div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination-bar">
                        <div className="pagination-stats">
                            Đã chọn {selectedItems.length} sản phẩm | Hiển thị 1 - {products.length} trong tổng số 128 bản ghi
                        </div>
                        <div className="pagination-controls">
                            <button className="page-btn nav-btn">&lt;</button>
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">3</button>
                            <span className="page-dots">...</span>
                            <button className="page-btn">22</button>
                            <button className="page-btn nav-btn">&gt;</button>
                        </div>
                    </div>
                </div>
                <div className="bottom-info-cards">
                    <div className="b-card">
                        <div className="b-card-header">
                            <h5>Chuẩn Hóa Công Thức Xưởng</h5>
                            <FiCheckSquare className="b-icon green" />
                        </div>
                        <p>100% SKU có hồ sơ Master Formulation Sheet được kiểm duyệt điện tử bởi Quản đốc phòng lab Đà Lạt.</p>
                        <div className="b-card-footer">
                            <span>Đạt tiêu chuẩn Dược điển / CGMP</span>
                            <span className="b-val green">98.4%</span>
                        </div>
                    </div>
                    <div className="b-card">
                        <div className="b-card-header">
                            <h5>Đồng Bộ Kho Bao Bì Chiết Rót</h5>
                            <FiPackage className="b-icon red" />
                        </div>
                        <p>Tồn kho chai hổ phách 30ml hiện còn 18.200 vỏ. Dự báo đủ đáp ứng sản lượng kế hoạch 2 ca tới.</p>
                        <div className="b-card-footer">
                            <span>Trạng thái dây chuyền đóng gói:</span>
                            <span className="b-val-badge green">Khả dụng</span>
                        </div>
                    </div>
                    <div className="b-card">
                        <div className="b-card-header">
                            <h5>Hồ Sơ COA Cần Tái Kiểm</h5>
                            <FiCheckCircle className="b-icon gray" />
                        </div>
                        <p>Có 2 sản phẩm sẽ hết hạn phiếu thử nghiệm GC-MS trong vòng 15 ngày tới cần lấy mẫu đối chứng.</p>
                        <button className="btn-full-width">Gửi yêu cầu kiểm tra QC Lab</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WorkshopProducts;
