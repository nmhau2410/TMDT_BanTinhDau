import React, { useState } from 'react';
import AdminSidebar from '../../../components/admin/Sidebar';
import '../css/AdminReview.css';

const initialReviews = [
    {
        id: 'REV-001',
        orderId: '#ND-84210',
        customerName: 'Hoàng Thu Trang',
        customerAvatar: 'HT',
        productName: 'Tinh dầu Lavender Pháp Nguyên Chất + Gỗ Tuyết Tùng Atlas (50ml)',
        workshop: 'Đà Lạt Lab #01',
        rating: 5.0,
        criteria: { scent: '5/5', sillage: '4/5', purity: '5/5' },
        reviewText: 'Tinh dầu Lavender thơm rất tự nhiên, mùi hương dịu nhẹ giúp thư giãn tuyệt vời sau giờ làm. Chai đóng gói cẩn thận, có seal niêm phong nhiệt và nhãn mác batch ID rõ ràng. Chất lượng tinh dầu nguyên chất đúng chuẩn phòng lab, nhỏ vào máy khuếch tán không bị cặn dầu. Sẽ tiếp tục ủng hộ NORDIC những sản phẩm sau.',
        images: [
            { id: 1, name: 'Ảnh 1', url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&auto=format&fit=crop' },
            { id: 2, name: 'Ảnh 2', url: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&auto=format&fit=crop' }
        ],
        status: 'Đã phản hồi',
        reviewDate: '10:15 (24/10/2023)',
        replyDate: 'Hôm nay, 10:48',
        replyText: 'Chào bạn Hoàng Thu Trang, xưởng Đà Lạt Lab xin chân thành cảm ơn đánh giá quý báu của bạn! Lô chưng cất lần này sử dụng hoa oải hương thu hoạch đúng vụ tại cao nguyên Lâm Đồng. Chúc bạn luôn có những phút giây thư thái tuyệt vời!',
        isCustHidden: false,
        isWorkshopHidden: false
    },
    {
        id: 'REV-002',
        orderId: '#ND-84211',
        customerName: 'Trần Văn Minh',
        customerAvatar: 'TM',
        productName: 'Nến thơm Sáp Đậu Nành Hương Cam Bergamot & Gỗ Đàn Hương (220g)',
        workshop: 'Sài Gòn Scent #02',
        rating: 4.0,
        criteria: { scent: '4/5', sillage: '4/5', purity: '4/5' },
        reviewText: 'Nến thơm tỏa hương tốt trong phòng 25m2, hũ thuỷ tinh đày dặn, tim nến bằng gỗ đốt kêu tách tách nghe rất thư thái.',
        images: [
            { id: 1, name: 'Ảnh 1', url: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&auto=format&fit=crop' }
        ],
        status: 'Chưa phản hồi',
        reviewDate: '14:20 (23/10/2023)',
        replyDate: '',
        replyText: '',
        isCustHidden: false,
        isWorkshopHidden: false
    },
    {
        id: 'REV-003',
        orderId: '#ND-84212',
        customerName: 'Lê Thị Mỹ Duyên',
        customerAvatar: 'LD',
        productName: 'Nước Hoa Ô Tô Cao Cấp Nốt Hương Xạ Hương & Hổ Phách (10ml)',
        workshop: 'Mộc Perfume Lab #01',
        rating: 5.0,
        criteria: { scent: '5/5', sillage: '5/5', purity: '5/5' },
        reviewText: 'Mùi thơm sang trọng, không bị hắc hay say xe. Giao hàng cực kỳ nhanh chóng.',
        images: [],
        status: 'Đã phản hồi',
        reviewDate: '09:00 (22/10/2023)',
        replyDate: '11:30 (22/10/2023)',
        replyText: 'Mộc Perfume Lab cảm ơn bạn Mỹ Duyên rất nhiều! Chúc bạn luôn có những chuyến đi thượng lộ bình an cùng hương thơm Olla.',
        isCustHidden: false,
        isWorkshopHidden: false
    },
    {
        id: 'REV-004',
        orderId: '#ND-84215',
        customerName: 'Phạm Quốc Bảo',
        customerAvatar: 'PB',
        productName: 'Tinh Dầu Bưởi Hồng Ép Lạnh Nguyên Chất (30ml)',
        workshop: 'Đà Lạt Lab #01',
        rating: 3.0,
        criteria: { scent: '3/5', sillage: '3/5', purity: '3/5' },
        reviewText: 'Mùi hương hơi hắc nhẹ so với đợt trước mình mua, đóng gói cẩn thận.',
        images: [
            { id: 1, name: 'Ảnh 1', url: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=500&auto=format&fit=crop' }
        ],
        status: 'Chưa phản hồi',
        reviewDate: '16:45 (21/10/2023)',
        replyDate: '',
        replyText: '',
        isCustHidden: false,
        isWorkshopHidden: false
    },
    {
        id: 'REV-005',
        orderId: '#ND-84218',
        customerName: 'Nguyễn Bích Ngọc',
        customerAvatar: 'BN',
        productName: 'Bộ Thử Mùi 5 Nốt Hương Niche Scent Test Kit',
        workshop: 'Hà Nội Scent Studio',
        rating: 5.0,
        criteria: { scent: '5/5', sillage: '5/5', purity: '5/5' },
        reviewText: 'Set thử mùi rất đáng tiền, giúp mình dễ dàng chọn được mùi hương ưa thích cho lô gia công sắp tới.',
        images: [
            { id: 1, name: 'Ảnh 1', url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop' },
            { id: 2, name: 'Ảnh 2', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop' },
            { id: 3, name: 'Ảnh 3', url: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop' }
        ],
        status: 'Đã phản hồi',
        reviewDate: '08:10 (20/10/2023)',
        replyDate: '09:15 (20/10/2023)',
        replyText: 'Cảm ơn Bích Ngọc đã tin tưởng trải nghiệm bộ thử mùi của xưởng Hà Nội Scent Studio!',
        isCustHidden: false,
        isWorkshopHidden: false
    }
];

const ReviewManagement = () => {
    const [reviews, setReviews] = useState(initialReviews);

    const [selectedReview, setSelectedReview] = useState(null);
    const [replyContent, setReplyContent] = useState('');

    const [previewImages, setPreviewImages] = useState(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleOpenEditModal = (review, e) => {
        if (e) e.stopPropagation();
        setSelectedReview(review);
        setReplyContent(review.replyText || '');
    };

    const handleOpenImageModal = (images, e) => {
        if (e) e.stopPropagation();
        if (images && images.length > 0) {
            setPreviewImages(images);
            setActiveImageIndex(0);
        }
    };

    const handleApplyTemplate = (templateText) => {
        setReplyContent(templateText);
    };

    const handleSaveReply = () => {
        if (!selectedReview) return;
        setReviews(reviews.map(item => {
            if (item.id === selectedReview.id) {
                return {
                    ...item,
                    status: 'Đã phản hồi',
                    replyText: replyContent,
                    replyDate: 'Vừa xong'
                };
            }
            return item;
        }));
        setSelectedReview(null);
    };

    const handleToggleHideCustomer = () => {
        if (!selectedReview) return;
        const newStatus = !selectedReview.isCustHidden;
        setSelectedReview({ ...selectedReview, isCustHidden: newStatus });
        alert(newStatus ? 'Đã ẩn bình luận của khách hàng khỏi giao diện công khai!' : 'Đã bỏ ẩn bình luận khách hàng!');
    };

    const handleToggleHideWorkshop = () => {
        if (!selectedReview) return;
        const newStatus = !selectedReview.isWorkshopHidden;
        setSelectedReview({ ...selectedReview, isWorkshopHidden: newStatus });
        alert(newStatus ? 'Đã ẩn phản hồi của xưởng!' : 'Đã bỏ ẩn phản hồi của xưởng!');
    };

    const handleDeleteCustomerReview = () => {
        if (window.confirm('Bạn có chắc chắn muốn XÓA bình luận của khách hàng này? Thao tác này không thể hoàn tác.')) {
            setReviews(reviews.filter(r => r.id !== selectedReview.id));
            setSelectedReview(null);
            alert('Đã xóa bình luận thành công!');
        }
    };

    const handleDeleteWorkshopReply = () => {
        if (window.confirm('Bạn có chắc chắn muốn XÓA phản hồi của xưởng?')) {
            setSelectedReview({ ...selectedReview, replyText: '', replyDate: '', status: 'Chưa phản hồi' });
            alert('Đã xóa phản hồi của xưởng!');
        }
    };

    return (
        <div className="admin-container">
            <AdminSidebar />

            <main className="admin-main">
                <div className="admin-header">
                    <div>
                        <div className="breadcrumb">
                            <span>Quản trị hệ thống</span> / <span className="active">Quản lý đánh giá xưởng</span>
                        </div>
                        <h1 className="page-title">Quản lý đánh giá</h1>
                    </div>
                </div>

                <div className="review-stats-grid">
                    <div className="review-stat-card">
                        <div className="stat-header">
                            <span className="stat-label">ĐÁNH GIÁ CHUNG XƯỞNG</span>
                            <span className="stat-icon red">⭐</span>
                        </div>
                        <div className="stat-number">
                            4.82 <small>/ 5.0 (Tổng 1,842 lượt)</small>
                        </div>
                        <div className="stat-sub green-text">📈 +0.15 so với chu kỳ trước</div>
                    </div>

                    <div className="review-stat-card">
                        <div className="stat-header">
                            <span className="stat-label">TỶ LỆ Ảnh/Video THỰC TẾ</span>
                            <span className="stat-icon blue">🖼️</span>
                        </div>
                        <div className="stat-number">
                            78.5% <small>Được đính kèm</small>
                        </div>
                    </div>

                    <div className="review-stat-card">
                        <div className="stat-header">
                            <span className="stat-label">TỐC ĐỘ XƯỞNG PHẢN HỒI</span>
                            <span className="stat-icon purple">⚡</span>
                        </div>
                        <div className="stat-number">
                            1h 42m <small>Trung bình</small>
                        </div>
                        <div className="stat-sub green-text">✔ 98% phản hồi &lt; 4 giờ</div>
                    </div>
                </div>

                <div className="review-filter-card">
                    <div className="filter-row">
                        <div className="filter-group">
                            <label>Xưởng sản xuất / Pha chế</label>
                            <select><option>Tất cả xưởng gia công</option></select>
                        </div>
                        <div className="filter-group">
                            <label>Đánh giá chung (Sao)</label>
                            <select><option>Mọi mức sao (1 - 5 sao)⭐</option></select>
                        </div>
                        <div className="filter-group">
                            <label>Trạng thái kiểm duyệt</label>
                            <select><option>Tất cả trạng thái</option></select>
                        </div>
                        <div className="filter-group">
                            <label>Đa phương tiện</label>
                            <select><option>Có hình ảnh & Video thực tế 📷</option></select>
                        </div>
                        <div className="filter-actions">
                            <button className="btn-reset">Đặt lại</button>
                            <button className="btn-apply">🌪️ Áp dụng</button>
                        </div>
                    </div>
                </div>

                <div className="review-table-container">
                    <table className="review-compact-table">
                        <thead>
                        <tr>
                            <th width="160">KHÁCH HÀNG & ĐƠN</th>
                            <th width="160">XƯỞNG & SẢN PHẨM</th>
                            <th width="110">ĐÁNH GIÁ</th>
                            <th>NỘI DUNG NHẬN XÉT</th>
                            <th width="100">ẢNH/VIDEO</th>
                            <th width="110">TRẠNG THÁI</th>
                            <th width="100">THAO TÁC</th>
                        </tr>
                        </thead>
                        <tbody>
                        {reviews.map((rev) => (
                            <tr key={rev.id} onClick={() => handleOpenEditModal(rev)} className="review-row-clickable">
                                <td>
                                    <div className="cust-cell">
                                        <div className="avatar-circle">{rev.customerAvatar}</div>
                                        <div>
                                            <strong>{rev.customerName}</strong>
                                            <small>{rev.orderId}</small>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="workshop-cell">
                                        <span className="ws-tag">{rev.workshop}</span>
                                        <small className="prod-name-clamp">{rev.productName}</small>
                                    </div>
                                </td>
                                <td>
                                    <div className="stars-cell">
                                        <span className="star-rating">★★★★★</span>
                                        <strong>{rev.rating.toFixed(1)}</strong>
                                    </div>
                                </td>
                                <td>
                                    <p className="review-text-clamp">"{rev.reviewText}"</p>
                                    {rev.replyText && (
                                        <small className="reply-snippet">
                                            ↪ <strong>Xưởng:</strong> {rev.replyText}
                                        </small>
                                    )}
                                </td>
                                <td>
                                    {rev.images.length > 0 ? (
                                        <button
                                            className="img-badge-btn"
                                            onClick={(e) => handleOpenImageModal(rev.images, e)}
                                        >
                                            📷 {rev.images.length} ảnh
                                        </button>
                                    ) : (
                                        <span className="no-img">-</span>
                                    )}
                                </td>
                                <td>
                                        <span className={`status-pill ${rev.status === 'Đã phản hồi' ? 'green' : 'orange'}`}>
                                            {rev.status}
                                        </span>
                                </td>
                                <td>
                                    <button
                                        className="btn-edit-reply"
                                        onClick={(e) => handleOpenEditModal(rev, e)}
                                    >
                                        Chỉnh sửa
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <div className="table-pagination">
                        <span>Hiển thị 1 - {reviews.length} trên tổng số 1,842 đánh giá • Trang 1 / 615</span>
                        <div className="pagination-right">
                            <button className="page-btn disabled">&lt;</button>
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">3</button>
                            <span className="dots">...</span>
                            <button className="page-btn">615</button>
                            <button className="page-btn">&gt;</button>
                        </div>
                    </div>
                </div>

                {selectedReview && (
                    <div className="modal-backdrop" onClick={() => setSelectedReview(null)}>
                        <div className="edit-modal-card" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header-line">
                                <div className="modal-title-left">
                                    <span className="icon-edit-bg">📝</span>
                                    <div>
                                        <h3>Chỉnh sửa phản hồi</h3>
                                        <p>Đơn hàng <strong>{selectedReview.orderId}</strong> • 🏪 Xưởng: <strong>{selectedReview.workshop}</strong></p>
                                    </div>
                                </div>
                                <button className="close-btn" onClick={() => setSelectedReview(null)}>✕</button>
                            </div>

                            <div className="customer-review-detail-card">
                                <div className="detail-header-row">
                                    <div className="cust-avatar-large">{selectedReview.customerAvatar}</div>
                                    <div>
                                        <h4>{selectedReview.customerName} <span className="status-badge-green">Đã phản hồi</span></h4>
                                        <small className="order-spec">
                                            Đơn hàng: <strong>{selectedReview.orderId}</strong> • Công thức: {selectedReview.productName} • Đánh giá lúc: {selectedReview.reviewDate}
                                        </small>
                                    </div>
                                    <span className="ws-pill-gray">{selectedReview.workshop}</span>
                                </div>

                                <div className="detail-body-grid">
                                    <div className="criteria-col">
                                        <div className="overall-stars">
                                            Đánh giá chung: <span className="stars">★★★★★</span> <strong>{selectedReview.rating.toFixed(1)}</strong> <small>(Cực kỳ hài lòng)</small>
                                        </div>
                                        <p className="criteria-title">CHI TIẾT THEO TIÊU CHÍ KIỂM ĐỊNH</p>
                                        <div className="criteria-row"><span>Chất lượng mùi hương:</span> <span className="stars">★★★★★</span> <strong>5/5</strong></div>
                                        <div className="criteria-row"><span>Độ tỏa hương thơm:</span> <span className="stars">★★★★☆</span> <strong>4/5</strong></div>
                                        <div className="criteria-row"><span>Độ tinh khiết tinh dầu:</span> <span className="stars">★★★★★</span> <strong>5/5</strong></div>
                                    </div>

                                    <div className="content-col">
                                        <p className="comment-heading">NỘI DUNG NHẬN XẾT:</p>
                                        <blockquote className="comment-quote">
                                            "{selectedReview.reviewText}"
                                        </blockquote>

                                        {selectedReview.images && selectedReview.images.length > 0 && (
                                            <div className="media-attachment-box">
                                                <p className="media-label">Hình ảnh & Video thực tế mở hộp từ khách hàng ({selectedReview.images.length} ảnh):</p>
                                                <div className="thumbs-row">
                                                    {selectedReview.images.map((img, idx) => (
                                                        <div
                                                            key={img.id}
                                                            className="thumb-card"
                                                            onClick={() => handleOpenImageModal(selectedReview.images)}
                                                        >
                                                            <img src={img.url} alt={img.name} />
                                                            <span className="thumb-tag">{img.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="official-reply-box">
                                <div className="reply-header">
                                    <span>🏪 Phản hồi từ {selectedReview.workshop}</span>
                                    <small>{selectedReview.replyDate || 'Hôm nay, 10:48'}</small>
                                </div>

                                <textarea
                                    className="reply-textarea-styled"
                                    rows="3"
                                    value={replyContent}
                                    onChange={(e) => setReplyContent(e.target.value)}
                                    placeholder="Nhập phản hồi chính thức từ xưởng..."
                                ></textarea>

                                <div className="reply-templates-bar">
                                    <span className="tpl-label">Chèn mẫu nhanh:</span>
                                    <button onClick={() => handleApplyTemplate('Lời cảm ơn chuẩn mực: Chào bạn, xưởng xin cảm ơn đánh giá quý báu!')}>+ Lời cảm ơn chuẩn mực</button>
                                    <button onClick={() => handleApplyTemplate('Cam kết chất lượng mẻ mới')}>+ Cam kết chất lượng mẻ mới</button>
                                    <button onClick={() => handleApplyTemplate('Tặng voucher tri ân 10%')}>+ Tặng voucher tri ân 10%</button>
                                </div>
                            </div>

                            <div className="platform-intervention-card">
                                <div className="intervene-header">
                                    <span className="shield-icon">🛡️</span>
                                    <h4>Can thiệp & Giám sát vận hành Sàn</h4>
                                </div>
                                <div className="intervene-buttons-grid">
                                    <button className="btn-intervene outline" onClick={handleToggleHideCustomer}>
                                        👁️‍🗨️ {selectedReview.isCustHidden ? 'Hiện bình luận khách hàng' : 'Ẩn bình luận khách hàng'}
                                    </button>
                                    <button className="btn-intervene outline" onClick={handleToggleHideWorkshop}>
                                        👁️‍🗨️ {selectedReview.isWorkshopHidden ? 'Hiện bình luận của xưởng' : 'Ẩn bình luận của xưởng'}
                                    </button>
                                    <button className="btn-intervene danger" onClick={handleDeleteCustomerReview}>
                                        ⚠️ Xóa bình luận khách hàng
                                    </button>
                                    <button className="btn-intervene danger" onClick={handleDeleteWorkshopReply}>
                                        ⚠️ Xóa bình luận của xưởng
                                    </button>
                                </div>
                            </div>

                            <div className="modal-actions-footer">
                                <button className="btn-cancel" onClick={() => setSelectedReview(null)}>Hủy bỏ</button>
                                <button className="btn-preview">👁️ Xem trước hiển thị</button>
                                <button className="btn-save-red" onClick={handleSaveReply}>
                                    ✔ Lưu & Cập nhật phản hồi
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {previewImages && (
                    <div className="image-lightbox-overlay" onClick={() => setPreviewImages(null)}>
                        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                            <button className="lightbox-close" onClick={() => setPreviewImages(null)}>✕</button>
                            <div className="lightbox-main-img-wrapper">
                                <img src={previewImages[activeImageIndex].url} alt="Enlarged review" />
                            </div>
                            {previewImages.length > 1 && (
                                <div className="lightbox-thumbnails-bar">
                                    {previewImages.map((img, idx) => (
                                        <img
                                            key={img.id}
                                            src={img.url}
                                            alt={img.name}
                                            className={activeImageIndex === idx ? 'active-thumb' : ''}
                                            onClick={() => setActiveImageIndex(idx)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ReviewManagement;