import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/workshop/Sidebar';
import { FiSearch, FiDownload } from 'react-icons/fi';
import { BiCube, BiMoney, BiTimeFive, BiErrorCircle } from 'react-icons/bi';
import '../css/WorkshopOrders.css';

const MOCK_ORDERS = [
    { id: '#ND-84210', customer: 'Nguyễn Văn A', product: 'Tinh dầu Lavender Nguyên...', total: 350000, status: 'Đang xử lý', date: '14/10/2023' },
    { id: '#ND-84211', customer: 'Trần Thị B', product: 'Tinh dầu Tràm Trà Tea Tree', total: 450000, status: 'Chờ xử lý', date: '14/10/2023' },
    { id: '#ND-84212', customer: 'Phạm Minh C', product: 'Tinh dầu Sả Chanh Nguyên...', total: 280000, status: 'Đang giao', date: '13/10/2023' },
    { id: '#ND-84213', customer: 'Lê Hoàng D', product: 'Máy khuếch tán tinh dầu N...', total: 1200000, status: 'Hoàn thành', date: '12/10/2023' },
    { id: '#ND-84214', customer: 'Đỗ Văn E', product: 'Tinh dầu Bạc Hà Pepperm...', total: 150000, status: 'Hoàn thành', date: '12/10/2023' },
];
const WorkshopOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('Tất cả');
    const [timeFilter, setTimeFilter] = useState('Hôm nay');
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            let filtered = [...MOCK_ORDERS];
            if (searchTerm) {
                filtered = filtered.filter(o => o.id.toLowerCase().includes(searchTerm.toLowerCase()) || o.customer.toLowerCase().includes(searchTerm.toLowerCase()));
            }
            if (statusFilter !== 'Tất cả') {
                filtered = filtered.filter(o => o.status === statusFilter);
            }
            setOrders(filtered);
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm, statusFilter, timeFilter]);
    const handleExport = () => {
        alert("Đang xuất file báo cáo (Excel)...");
    };
    const getStatusClass = (status) => {
        switch (status) {
            case 'Đang xử lý': return 'status-processing'; 
            case 'Chờ xử lý': return 'status-waiting'; 
            case 'Đang giao': return 'status-delivering'; 
            case 'Hoàn thành': return 'status-completed'; 
            default: return '';
        }
    };
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
    };
    return (
        <div className="dashboard-container">
            <Sidebar />
            <main className="main-content orders-main">
                <div className="orders-header">
                    <div>
                        <div className="breadcrumb">
                            <span>Quản lý xưởng</span> / <span className="active">Danh sách đơn hàng sản xuất</span>
                        </div>
                        <h2 className="page-title">Quản lý đơn hàng sản xuất</h2>
                        <p className="page-description">Danh sách đơn hàng cần phân phối chế biến, đóng gói tại xưởng</p>
                    </div>
                    <button className="btn-export" onClick={handleExport}>
                        Xuất file báo cáo (Excel)
                    </button>
                </div>
                <div className="orders-content-layout">
                    <div className="orders-table-section">
                        <div className="card orders-card">
                            <div className="filter-bar">
                                <div className="search-box">
                                    <FiSearch className="search-icon" />
                                    <input type="text" placeholder="Tìm mã đơn, tên..." value={searchTerm}onChange={(e) => setSearchTerm(e.target.value)}/>
                                </div>
                                <select className="filter-select"value={statusFilter}onChange={(e) => setStatusFilter(e.target.value)}>
                                    <option value="Tất cả">Trạng thái: Tất cả</option>
                                    <option value="Đang xử lý">Đang xử lý</option>
                                    <option value="Chờ xử lý">Chờ xử lý</option>
                                    <option value="Đang giao">Đang giao</option>
                                    <option value="Hoàn thành">Hoàn thành</option>
                                </select>
                                <select className="filter-select"value={timeFilter}onChange={(e) => setTimeFilter(e.target.value)}>
                                    <option value="Hôm nay">Thời gian: Hôm nay</option>
                                    <option value="Tuần này">Tuần này</option>
                                    <option value="Tháng này">Tháng này</option>
                                </select>
                            </div>
                            <div className="table-responsive">
                                <table className="orders-table">
                                    <thead>
                                        <tr>
                                            <th>Mã đơn hàng</th>
                                            <th>Khách hàng</th>
                                            <th>Sản phẩm yêu cầu</th>
                                            <th>Tổng tiền</th>
                                            <th>Trạng thái</th>
                                            <th>Ngày đặt</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? (
                                            Array(5).fill(0).map((_, i) => (
                                                <tr key={i} className="skeleton-row">
                                                    <td><div className="skeleton skeleton-text"></div></td>
                                                    <td><div className="skeleton skeleton-text"></div></td>
                                                    <td><div className="skeleton skeleton-text long"></div></td>
                                                    <td><div className="skeleton skeleton-text"></div></td>
                                                    <td><div className="skeleton skeleton-badge"></div></td>
                                                    <td><div className="skeleton skeleton-text"></div></td>
                                                </tr>
                                            ))
                                        ) : orders.length > 0 ? (
                                            orders.map(order => (
                                                <tr key={order.id} className="order-row" onClick={() => console.log('Navigate to detail', order.id)}>
                                                    <td className="order-id">{order.id}</td>
                                                    <td className="order-customer">{order.customer}</td>
                                                    <td className="order-product">{order.product}</td>
                                                    <td className="order-total">{formatCurrency(order.total)}</td>
                                                    <td><span className={`status-badge ${getStatusClass(order.status)}`}>{order.status}</span></td>
                                                    <td className="order-date">{order.date}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6" className="text-center">Không tìm thấy đơn hàng nào.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="pagination">
                                <span className="pagination-info">Hiển thị {orders.length} trên 142 đơn hàng</span>
                                <div className="pagination-controls">
                                    <button className="page-btn text-btn">Trước</button>
                                    <button className="page-btn active">1</button>
                                    <button className="page-btn">2</button>
                                    <button className="page-btn text-btn">Sau</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="orders-metrics-section">
                        <div className="card metrics-card">
                            <h3 className="metrics-title">Số liệu xưởng hôm nay</h3>
                            <div className="metric-item">
                                <div className="metric-info">
                                    <span className="metric-label">Tổng đơn nhận hôm nay</span>
                                    {loading ? <div className="skeleton skeleton-text lg"></div> : <span className="metric-value">48 Đơn</span>}
                                </div>
                                <div className="metric-icon bg-blue"><BiCube /></div>
                            </div>
                            <div className="metric-item">
                                <div className="metric-info">
                                    <span className="metric-label">Doanh thu xưởng ngày</span>
                                    {loading ? <div className="skeleton skeleton-text lg"></div> : <span className="metric-value text-green">18.400.000đ</span>}
                                </div>
                                <div className="metric-icon bg-green"><BiMoney /></div>
                            </div>

                            <div className="metric-item">
                                <div className="metric-info">
                                    <span className="metric-label">Đơn chờ chiết/kiện gấp</span>
                                    {loading ? <div className="skeleton skeleton-text lg"></div> : <span className="metric-value text-yellow">12 Đơn</span>}
                                </div>
                                <div className="metric-icon bg-yellow"><BiTimeFive /></div>
                            </div>
                            <div className="metric-item no-border">
                                <div className="metric-info">
                                    <span className="metric-label">Đơn trả hàng/phiếu trả</span>
                                    {loading ? <div className="skeleton skeleton-text lg"></div> : <span className="metric-value text-red">2 Đơn</span>}
                                </div>
                                <div className="metric-icon bg-red"><BiErrorCircle /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WorkshopOrders;
