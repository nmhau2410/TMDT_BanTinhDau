import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import {
  FiSearch,
  FiX,
  FiCheck,
  FiCheckCircle,
  FiMessageSquare,
  FiLoader,
  FiImage,
  FiPackage,
  FiInbox
} from 'react-icons/fi';
import Sidebar from '../../../components/workshop/Sidebar';
import '../css/WorkshopReviews.css';

const MOCK_REVIEWS = [
  {
    id: 1,
    userName: 'Hoàng Thùy Dương',
    initials: 'HD',
    avatarColor: '#667eea',
    productName: 'Tinh dầu Lavender Pháp (10ml)',
    rating: 5,
    time: 'Hôm nay, 08:34',
    body: 'Tinh dầu thơm nhẹ nhàng, đúng mùi Lavender tự nhiên chứ không bị hắc hóa chất. Shop xưởng chuẩn bị hàng siêu nhanh, đóng gói xốp bong bóng rất kỹ. Chắc chắn sẽ tiếp tục ủng hộ xưởng!',
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=400&q=80'
    ],
    category: 'Tinh dầu',
    existingReply: 'Chào bạn Dương, rất vui vì bạn hài lòng với chất lượng mùi hương Lavender xưởng Nordic tuyển chọn ạ!',
    replied: true,
  },
  {
    id: 2,
    userName: 'Trần Trung Kiên',
    initials: 'TK',
    avatarColor: '#e53e3e',
    productName: 'Tinh dầu Trầm Trà Tea Tree (30ml)',
    rating: 3,
    time: 'Hôm qua, 15:45',
    body: 'Chất lượng tinh dầu trầm trà thì ổn, kháng viêm mụn tốt. Tuy nhiên nắp chai hơi lỏng một chút làm rỉ vài giọt ra vỏ hộp trong quá trình vận chuyển. Xưởng cần chú ý khâu xoáy nắp niêm phong trước khi đóng gói nhé.',
    images: [],
    category: 'Tinh dầu',
    existingReply: 'Cảm ơn đóng góp của anh Kiên. Xưởng đã tiếp nhận và sẽ yêu cầu bộ phận kiểm tra kỹ ren nắp trước khi bàn giao GHN...',
    replied: true,
  },
  {
    id: 3,
    userName: 'Phan Thanh Bình',
    initials: 'PB',
    avatarColor: '#d69e2e',
    productName: 'Máy khuếch tán tinh dầu Nordic-V1',
    rating: 1,
    time: '12/10/2023',
    body: 'Nhận máy về cắm điện không lên nguồn, nhấn nút điều khiển không có tín hiệu gì hết. Yêu cầu xưởng liên hệ kiểm tra bảo hành hoặc đổi mới ngay lập tức giúp tôi. Rất thất vọng và đặt kiểm định lỗ máy này.',
    images: [],
    category: 'Máy khuếch tán',
    existingReply: 'Thành thật xin lỗi anh Bình vì sự cố đáng tiếc này. Xưởng sẽ cho nhân viên kỹ thuật gọi trực tiếp hỗ trợ thu hồi máy lỗi và đổi máy mới nguyên seal ngay trong hôm nay ạ!',
    replied: true,
  },
  {
    id: 4,
    userName: 'Nguyễn Minh Anh',
    initials: 'MA',
    avatarColor: '#38a169',
    productName: 'Tinh dầu Sả Chanh Đà Lạt (10ml)',
    rating: 4,
    time: 'Hôm nay, 10:12',
    body: 'Tinh dầu sả chanh thơm rất tự nhiên, xông phòng 15m² vẫn cảm nhận rõ hương. Mình dùng kết hợp với máy phun sương, giúp đuổi muỗi hiệu quả buổi tối. Bao bì đẹp, giao hàng đúng hẹn.',
    images: [
      'https://images.unsplash.com/photo-1547793548-7a0f7c469c3c?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80'
    ],
    category: 'Tinh dầu',
    existingReply: '',
    replied: false,
  },
  {
    id: 5,
    userName: 'Lê Thị Hồng Nhung',
    initials: 'HN',
    avatarColor: '#9f7aea',
    productName: 'Set quà tặng Tinh dầu Premium (3 chai)',
    rating: 5,
    time: '10/10/2023',
    body: 'Đặt set quà tặng cho bạn bè, bao bì sang trọng hơn mình tưởng nhiều. 3 chai tinh dầu đều có giấy chứng nhận xuất xứ rõ ràng. Bạn bè ai cũng thích, chắc chắn sẽ đặt thêm dịp Tết.',
    images: [],
    category: 'Set quà tặng',
    existingReply: '',
    replied: false,
  },
  {
    id: 6,
    userName: 'Võ Đức Hải',
    initials: 'VH',
    avatarColor: '#3182ce',
    productName: 'Tinh dầu Bạc Hà (10ml)',
    rating: 2,
    time: '08/10/2023',
    body: 'Tinh dầu bạc hà mùi hơi yếu so với kỳ vọng, xông phòng phải nhỏ nhiều giọt mới ngửi thấy. Hạn sử dụng ghi trên bao bì hơi khó đọc. Mong xưởng cải thiện.',
    images: [],
    category: 'Tinh dầu',
    existingReply: '',
    replied: false,
  }
];

const STATS = {
  avg: 4.2,
  total: 1247,
  responseRate: 92.4,
  breakdown: [
    { star: 5, count: 782, percent: 62 },
    { star: 4, count: 240, percent: 19 },
    { star: 3, count: 112, percent: 9  },
    { star: 2, count: 65,  percent: 5  },
    { star: 1, count: 48,  percent: 5  },
  ]
};

const CATEGORIES = ['Tinh dầu', 'Máy khuếch tán', 'Phụ kiện', 'Set quà tặng'];

function getAvgLabel(avg) {
  if (avg >= 4.5) return 'Xuất sắc';
  if (avg >= 4.0) return 'Khá Tốt';
  if (avg >= 3.0) return 'Trung bình';
  if (avg >= 2.0) return 'Cần cải thiện';
  return 'Yếu';
}

function SkeletonCard() {
  return (
    <div className="wr-skel-card wr-skeleton">
      <div className="wr-skel-head">
        <div className="wr-skel-circle" />
        <div className="wr-skel-head-lines">
          <div className="wr-skel-line w40 h20" />
          <div className="wr-skel-line w60" />
        </div>
      </div>
      <div className="wr-skel-line w100" />
      <div className="wr-skel-line w100" />
      <div className="wr-skel-line w80" />
      <div className="wr-skel-img-row">
        <div className="wr-skel-rect" />
        <div className="wr-skel-rect" />
      </div>
      <div className="wr-skel-line w60 h8" />
    </div>
  );
}

function SkeletonStats() {
  return (
    <div className="wr-stats-card wr-skeleton">
      <div className="wr-skel-line w40 h20" style={{ marginBottom: 18 }} />
      <div className="wr-skel-line w60" />
      <div className="wr-skel-stats-big" />
      <div className="wr-skel-line w40" />
      <div style={{ height: 1, background: '#edf2f7', margin: '16px 0' }} />
      <div className="wr-skel-line w60" />
      <div className="wr-skel-stats-big" />
      <div style={{ height: 1, background: '#edf2f7', margin: '16px 0' }} />
      <div className="wr-skel-line w60" />
      <div className="wr-skel-stats-big" />
      <div style={{ height: 1, background: '#edf2f7', margin: '16px 0' }} />
      <div className="wr-skel-line w40 h20" style={{ marginBottom: 14 }} />
      {[1,2,3,4,5].map(i => (
        <div className="wr-skel-bar-row" key={i}>
          <div className="wr-skel-bar-label" />
          <div className="wr-skel-bar-track" />
          <div className="wr-skel-bar-count" />
        </div>
      ))}
    </div>
  );
}

function Stars({ count, size = 14 }) {
  return (
    <div className="wr-stars">
      {[1,2,3,4,5].map(i => (
        <FaStar key={i} size={size} className={`wr-star ${i <= count ? 'filled' : ''}`} />
      ))}
    </div>
  );
}

const WorkshopReviews = () => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [starFilter, setStarFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [replyTexts, setReplyTexts] = useState({});
  const [sendingId, setSendingId] = useState(null);
  const [lightboxUrl, setLightboxUrl] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReviews(MOCK_REVIEWS);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4000);
  };

  const handleReplyChange = (id, value) => {
    setReplyTexts(prev => ({ ...prev, [id]: value }));
  };

  const handleSendReply = (id) => {
    const text = (replyTexts[id] || '').trim();
    if (!text) return;

    setSendingId(id);
    setTimeout(() => {
      setReviews(prev => prev.map(r =>
        r.id === id ? { ...r, replied: true, existingReply: text } : r
      ));
      setReplyTexts(prev => ({ ...prev, [id]: '' }));
      setSendingId(null);
      showToast('Phản hồi đã được gửi thành công!');
    }, 900);
  };

  const filtered = reviews.filter(r => {
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      if (!r.userName.toLowerCase().includes(q) && !r.productName.toLowerCase().includes(q)) return false;
    }
    if (starFilter !== 'all' && r.rating !== Number(starFilter)) return false;
    if (statusFilter === 'replied' && !r.replied) return false;
    if (statusFilter === 'pending' && r.replied) return false;
    if (categoryFilter !== 'all' && r.category !== categoryFilter) return false;
    return true;
  });

  return (
    <div className="wr-page">
      <Sidebar />

      <main className="wr-main">
        <div className="wr-breadcrumb">
          <span>Quản lý xưởng</span> / <span className="bc-active">Phản hồi đánh giá người dùng</span>
        </div>

        <h1 className="wr-page-title">Phản hồi đánh giá người dùng</h1>
        <p className="wr-page-desc">Theo dõi và trả lời các thắc mắc, đóng góp ý kiến từ khách hàng đã mua sản phẩm</p>

        <div className="wr-filter-bar">
          <div className="wr-search-box">
            <FiSearch size={15} className="search-icon" />
            <input
              type="text"
              placeholder="Tìm tên, sản phẩm..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          <select className="wr-select" value={starFilter} onChange={e => setStarFilter(e.target.value)}>
            <option value="all">Số sao: Tất cả</option>
            <option value="5">5 sao</option>
            <option value="4">4 sao</option>
            <option value="3">3 sao</option>
            <option value="2">2 sao</option>
            <option value="1">1 sao</option>
          </select>

          <select className="wr-select" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
            <option value="all">Trạng thái: Tất cả</option>
            <option value="pending">Chưa phản hồi</option>
            <option value="replied">Đã phản hồi</option>
          </select>
        </div>

        <div className="wr-filter-tags">
          <button
            className={`wr-tag ${categoryFilter === 'all' ? 'active' : ''}`}
            onClick={() => setCategoryFilter('all')}
          >
            Phân loại: Tất cả
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`wr-tag ${categoryFilter === cat ? 'active' : ''}`}
              onClick={() => setCategoryFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="wr-body">
          <div className="wr-list-col">
            {loading ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : filtered.length === 0 ? (
              <div className="wr-no-results">
                <FiInbox size={40} className="wr-no-results-icon" />
                <h3>Không tìm thấy đánh giá</h3>
                <p>Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
              </div>
            ) : (
              filtered.map(review => (
                <div className="wr-review-card" key={review.id}>
                  <div className="wr-card-head">
                    <div className="wr-user-info">
                      <div className="wr-avatar-placeholder" style={{ background: review.avatarColor }}>
                        {review.initials}
                      </div>
                      <div>
                        <div className="wr-user-name">{review.userName}</div>
                        <div className="wr-product-bought">
                          <FiPackage size={12} className="prod-icon" />
                          Đã mua: {review.productName}
                        </div>
                      </div>
                    </div>
                    <div className="wr-card-meta">
                      <Stars count={review.rating} />
                      <span className="wr-time">{review.time}</span>
                    </div>
                  </div>

                  <div className="wr-review-body">{review.body}</div>

                  {review.images.length > 0 && (
                    <div className="wr-review-images">
                      {review.images.map((src, idx) => (
                        <div
                          className="wr-review-img-wrap"
                          key={idx}
                          onClick={() => setLightboxUrl(src)}
                        >
                          <img src={src} alt={`Ảnh đánh giá ${idx + 1}`} />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="wr-reply-section">
                    <div className="wr-reply-label">
                      <FiMessageSquare size={13} className="label-icon" />
                      Nhập phản hồi từ Giám sát xưởng:
                      {review.replied && (
                        <span className="wr-replied-badge">
                          <FiCheck size={11} /> Đã phản hồi
                        </span>
                      )}
                    </div>

                    {review.existingReply && (
                      <div className="wr-reply-existing">{review.existingReply}</div>
                    )}

                    <div className="wr-reply-input-wrap">
                      <textarea
                        className="wr-reply-textarea"
                        placeholder="Viết câu trả lời của xưởng..."
                        value={replyTexts[review.id] || ''}
                        onChange={e => handleReplyChange(review.id, e.target.value)}
                      />
                      <div className="wr-reply-actions">
                        <button
                          className="wr-btn-reply"
                          disabled={!(replyTexts[review.id] || '').trim() || sendingId === review.id}
                          onClick={() => handleSendReply(review.id)}
                        >
                          {sendingId === review.id ? (
                            <>
                              <FiLoader size={14} className="spinner" />
                              Đang gửi...
                            </>
                          ) : (
                            'Gửi phản hồi'
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="wr-sidebar-col">
            {loading ? (
              <SkeletonStats />
            ) : (
              <div className="wr-stats-card">
                <div className="wr-stats-title">Thống kê đánh giá</div>

                <div className="wr-avg-row">
                  <span className="wr-avg-label">Đánh giá trung bình</span>
                  <span className="wr-avg-badge">{getAvgLabel(STATS.avg)}</span>
                </div>
                <div className="wr-avg-score">
                  <span className="wr-avg-big">{STATS.avg}</span>
                  <span className="wr-avg-max">/ 5.0</span>
                </div>
                <div className="wr-avg-stars-row">
                  <Stars count={Math.round(STATS.avg)} size={18} />
                </div>

                <div className="wr-stat-divider" />

                <div className="wr-total-row">
                  <div className="wr-total-label">Tổng số lượt đánh giá</div>
                  <div className="wr-total-value">
                    {STATS.total.toLocaleString('vi-VN')}
                    <span className="wr-total-unit">Lượt</span>
                  </div>
                </div>

                <div className="wr-total-row">
                  <div className="wr-rate-row">
                    <div className="wr-total-label">Tỷ lệ phản hồi xưởng</div>
                    <span className="wr-rate-badge">ĐẠT CHỈ TIÊU</span>
                  </div>
                  <div className="wr-rate-percent">{STATS.responseRate}%</div>
                </div>

                <div className="wr-stat-divider" />

                <div className="wr-breakdown-title">Phân bổ sao đánh giá</div>
                {STATS.breakdown.map(row => (
                  <div className="wr-bar-row" key={row.star}>
                    <span className="wr-bar-label">{row.star} sao</span>
                    <div className="wr-bar-track">
                      <div
                        className={`wr-bar-fill star${row.star}`}
                        style={{ width: `${row.percent}%` }}
                      />
                    </div>
                    <span className="wr-bar-count">{row.count} lượt ({row.percent}%)</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {lightboxUrl && (
        <div className="wr-lightbox-overlay" onClick={() => setLightboxUrl(null)}>
          <img src={lightboxUrl} alt="Phóng to hình ảnh" className="wr-lightbox-img" onClick={e => e.stopPropagation()} />
          <button className="wr-lightbox-close" onClick={() => setLightboxUrl(null)}>
            <FiX size={20} />
          </button>
        </div>
      )}

      {toast && (
        <div className="wr-toast-wrap">
          <div className="wr-toast">
            <FiCheckCircle size={18} className="wr-toast-icon" />
            <div className="wr-toast-body">
              <div className="wr-toast-title">Thành công!</div>
              <div className="wr-toast-msg">{toast}</div>
            </div>
            <button className="wr-toast-close" onClick={() => setToast(null)}>
              <FiX size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopReviews;
