import React, { useState } from 'react';
import Sidebar from '../../../components/workshop/Sidebar';
import '../css/WorkshopCategories.css';
import { FiPlus, FiSearch, FiEdit2, FiTrash2, FiX } from 'react-icons/fi';

const INITIAL_CATEGORIES = [
    { id: 1, name: 'Tinh dầu', description: 'Các loại tinh dầu nguyên chất chiết xuất tự nhiên', status: 'active' },
    { id: 2, name: 'Nước hoa', description: 'Nước hoa xịt thơm cơ thể, quần áo', status: 'active' },
    { id: 3, name: 'Máy khuếch tán', description: 'Thiết bị xông tinh dầu, tạo ẩm', status: 'active' },
    { id: 4, name: 'Phụ kiện', description: 'Lọ chiết, que khuếch tán, đế đốt', status: 'active' },
];

const WorkshopCategories = () => {
    const [categories, setCategories] = useState(INITIAL_CATEGORIES);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [formData, setFormData] = useState({ name: '', description: '', status: 'active' });

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredCategories = categories.filter(cat => 
        cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const openModal = (category = null) => {
        if (category) {
            setEditingCategory(category);
            setFormData({ ...category });
        } else {
            setEditingCategory(null);
            setFormData({ name: '', description: '', status: 'active' });
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingCategory(null);
        setFormData({ name: '', description: '', status: 'active' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingCategory) {
            setCategories(categories.map(cat => cat.id === editingCategory.id ? { ...formData, id: cat.id } : cat));
        } else {
            const newId = categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 1;
            setCategories([...categories, { ...formData, id: newId }]);
        }
        closeModal();
    };

    const handleDelete = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa danh mục này?')) {
            setCategories(categories.filter(cat => cat.id !== id));
        }
    };

    return (
        <div className="wc-container">
            <Sidebar />
            <main className="wc-main">
                <div className="wc-breadcrumb">
                    <span>Quản lý xưởng</span> / <span className="active">Quản lý danh mục</span>
                </div>

                <div className="wc-header">
                    <div className="wc-header-title">
                        <h1>Quản lý danh mục xưởng</h1>
                        <p>Phân loại sản phẩm (Tinh dầu, Nước hoa, Máy khuếch tán...)</p>
                    </div>
                    <button className="wc-btn-primary" onClick={() => openModal()}>
                        <FiPlus size={16} /> Thêm danh mục
                    </button>
                </div>

                <div className="wc-toolbar">
                    <div className="wc-search-wrap">
                        <FiSearch />
                        <input 
                            type="text" 
                            placeholder="Tìm kiếm danh mục..." 
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                </div>

                <div className="wc-table-card">
                    <table className="wc-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên danh mục</th>
                                <th>Mô tả</th>
                                <th>Trạng thái</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCategories.map(cat => (
                                <tr key={cat.id}>
                                    <td>#{cat.id}</td>
                                    <td><strong>{cat.name}</strong></td>
                                    <td>{cat.description}</td>
                                    <td>
                                        <span className={`wc-status-badge ${cat.status}`}>
                                            {cat.status === 'active' ? 'Hoạt động' : 'Đã ẩn'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="wc-actions">
                                            <button className="wc-btn-icon edit" onClick={() => openModal(cat)}>
                                                <FiEdit2 size={14} />
                                            </button>
                                            <button className="wc-btn-icon delete" onClick={() => handleDelete(cat.id)}>
                                                <FiTrash2 size={14} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredCategories.length === 0 && (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center', padding: '30px' }}>
                                        Không tìm thấy danh mục nào.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </main>

            {isModalOpen && (
                <div className="wc-modal-overlay">
                    <div className="wc-modal">
                        <div className="wc-modal-header">
                            <h2>{editingCategory ? 'Sửa danh mục' : 'Thêm danh mục mới'}</h2>
                            <button className="wc-modal-close" onClick={closeModal}>
                                <FiX />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="wc-modal-body">
                                <div className="wc-form-group">
                                    <label>Tên danh mục</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleInputChange} 
                                        required 
                                        placeholder="VD: Nước hoa"
                                    />
                                </div>
                                <div className="wc-form-group">
                                    <label>Mô tả</label>
                                    <textarea 
                                        name="description" 
                                        value={formData.description} 
                                        onChange={handleInputChange} 
                                        rows="3"
                                        placeholder="Mô tả danh mục..."
                                    ></textarea>
                                </div>
                                <div className="wc-form-group">
                                    <label>Trạng thái</label>
                                    <select 
                                        name="status" 
                                        value={formData.status} 
                                        onChange={handleInputChange}
                                        style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #e2e8f0', outline: 'none' }}
                                    >
                                        <option value="active">Hoạt động</option>
                                        <option value="inactive">Đã ẩn</option>
                                    </select>
                                </div>
                            </div>
                            <div className="wc-modal-footer">
                                <button type="button" className="wc-btn-cancel" onClick={closeModal}>Hủy</button>
                                <button type="submit" className="wc-btn-submit">Lưu lại</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WorkshopCategories;
