import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
    FiStar,
    FiPlus,
    FiX,
    FiCheck,
    FiAlertCircle,
    FiUploadCloud,
    FiGift,
    FiArrowLeft,
    FiCheckCircle,
    FiInfo,
    FiLoader
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "../css/ProductReviewPage.css";

const EMOTION_MAP = {
    1: "Rất thất vọng",
    2: "Chưa hài lòng",
    3: "Bình thường",
    4: "Hài lòng",
    5: "Cực kỳ hài lòng"
};

const CRITERIA_SCORE_MAP = {
    1: "1/5 Kém",
    2: "2/5 Tạm ổn",
    3: "3/5 Đạt chuẩn",
    4: "4/5 Rất tốt",
    5: "5/5 Tuyệt vời"
};

const DEFAULT_PRODUCT = {
    id: "lavender-10ml",
    name: "Tinh dầu Lavender Pháp Nguyên Chất 100%",
    category: "Dung tích: 10ml | Xuất xứ: Provence (Pháp)",
    price: 185000,
    originalPrice: 245000,
    orderCode: "ORD-89421",
    orderDate: "02/10/2026",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=400&q=80"
};

export default function ProductReviewPage({ productData = DEFAULT_PRODUCT }) {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const [generalRating, setGeneralRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const [criteriaRatings, setCriteriaRatings] = useState({
        scentQuality: 5,
        scentLongevity: 5,
        purity: 5
    });

    const [hoverCriteria, setHoverCriteria] = useState({
        scentQuality: 0,
        scentLongevity: 0,
        purity: 0
    });

    const [comment, setComment] = useState("");
    const [touchedComment, setTouchedComment] = useState(false);
    const [touchedRating, setTouchedRating] = useState(false);

    const [mediaFiles, setMediaFiles] = useState([]);
    const [uploadError, setUploadError] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const charCount = comment.trim().length;
    const isRatingValid = generalRating > 0;
    const isCommentValid = charCount >= 20;
    const isFormValid = isRatingValid && isCommentValid;

    useEffect(() => {
        return () => {
            mediaFiles.forEach((item) => {
                if (item.previewUrl) {
                    URL.revokeObjectURL(item.previewUrl);
                }
            });
        };
    }, [mediaFiles]);

    const handleRatingHover = (val) => {
        setHoverRating(val);
    };

    const handleRatingLeave = () => {
        setHoverRating(0);
    };

    const handleRatingClick = (val) => {
        setGeneralRating(val);
        setTouchedRating(true);
    };

    const handleCriteriaHover = (key, val) => {
        setHoverCriteria((prev) => ({ ...prev, [key]: val }));
    };

    const handleCriteriaLeave = (key) => {
        setHoverCriteria((prev) => ({ ...prev, [key]: 0 }));
    };

    const handleCriteriaClick = (key, val) => {
        setCriteriaRatings((prev) => ({ ...prev, [key]: val }));
    };

    const handleFileChange = (e) => {
        setUploadError("");
        const selectedFiles = Array.from(e.target.files || []);
        if (!selectedFiles.length) return;

        if (mediaFiles.length + selectedFiles.length > 5) {
            setUploadError("Bạn chỉ có thể tải lên tối đa 5 hình ảnh hoặc video.");
            if (fileInputRef.current) fileInputRef.current.value = "";
            return;
        }

        const newMedia = [];
        for (const file of selectedFiles) {
            if (file.size > 10 * 1024 * 1024) {
                setUploadError(`Tệp "${file.name}" vượt quá dung lượng 10MB tối đa.`);
                if (fileInputRef.current) fileInputRef.current.value = "";
                return;
            }

            const isVideo = file.type.startsWith("video/");
            const previewUrl = URL.createObjectURL(file);
            newMedia.push({
                id: `${file.name}-${Date.now()}-${Math.random()}`,
                file,
                previewUrl,
                isVideo,
                name: file.name
            });
        }

        setMediaFiles((prev) => [...prev, ...newMedia]);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleRemoveMedia = (idToRemove) => {
        setMediaFiles((prev) => {
            const target = prev.find((item) => item.id === idToRemove);
            if (target && target.previewUrl) {
                URL.revokeObjectURL(target.previewUrl);
            }
            return prev.filter((item) => item.id !== idToRemove);
        });
        setUploadError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouchedRating(true);
        setTouchedComment(true);

        if (!isFormValid) return;

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setToastMessage("Gửi đánh giá thành công! Bạn nhận được +100 điểm thưởng OILIA Club.");
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 5000);
        }, 1200);
    };

    const handleCancelClick = () => {
        if (comment.trim() || generalRating > 0 || mediaFiles.length > 0) {
            setShowCancelModal(true);
        } else {
            handleConfirmLeave();
        }
    };

    const handleConfirmLeave = () => {
        setShowCancelModal(false);
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate("/");
        }
    };

    const activeEmotionScore = hoverRating || generalRating;
    const currentEmotionText = activeEmotionScore
        ? EMOTION_MAP[activeEmotionScore]
        : "(Vui lòng chọn số sao)";

    const criteriaList = [
        { key: "scentQuality", label: "Chất lượng mùi hương" },
        { key: "scentLongevity", label: "Độ bền hương thơm" },
        { key: "purity", label: "Độ tinh khiết của tinh dầu" }
    ];

    return (
        <div className="review-page-root">
            <Header />

            <div className="review-breadcrumb-bar">
                <div className="review-breadcrumb-container">
                    <Link to="/">Trang chủ</Link>
                    <span>/</span>
                    <Link to="/customer/myorders">Đơn hàng của tôi</Link>
                    <span>/</span>
                    <span className="active">Viết đánh giá sản phẩm</span>
                </div>
            </div>

            <div className="review-main-container">
                {showToast && (
                    <div className="review-toast-container">
                        <div className="review-toast-card">
                            <FiCheckCircle className="toast-icon-green" />
                            <div className="toast-body">
                                <div className="toast-title">Thành công!</div>
                                <div className="toast-message">{toastMessage}</div>
                            </div>
                            <button
                                className="toast-close-btn"
                                onClick={() => setShowToast(false)}
                            >
                                <FiX size={16} />
                            </button>
                        </div>
                    </div>
                )}

                {showCancelModal && (
                    <div className="review-modal-overlay">
                        <div className="review-modal-box">
                            <div className="modal-icon-alert">
                                <FiAlertCircle size={28} />
                            </div>
                            <div className="modal-title">Hủy bỏ viết đánh giá?</div>
                            <div className="modal-desc">
                                Những nội dung và hình ảnh bạn đã thêm vào sẽ không được lưu. Bạn có chắc chắn muốn rời đi và quay lại sau không?
                            </div>
                            <div className="modal-action-row">
                                <button
                                    type="button"
                                    className="modal-btn-stay"
                                    onClick={() => setShowCancelModal(false)}
                                >
                                    Tiếp tục viết
                                </button>
                                <button
                                    type="button"
                                    className="modal-btn-leave"
                                    onClick={handleConfirmLeave}
                                >
                                    Xác nhận rời đi
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {isSubmitted ? (
                    <div className="review-success-state">
                        <div className="success-check-bubble">
                            <FiCheck size={36} />
                        </div>
                        <div className="success-title">Cảm ơn bạn đã gửi đánh giá!</div>
                        <div className="success-desc">
                            Đánh giá của bạn về "{productData.name}" đã được ghi nhận. Đóng góp của bạn giúp cộng đồng yêu tinh dầu có thêm trải nghiệm thực tế và giúp Oilia ngày càng hoàn thiện hơn.
                        </div>
                        <div className="success-reward-card">
                            <FiGift size={20} color="#e11d48" />
                            <span>Đã cộng +100 điểm thưởng OILIA Club (~ 10.000đ) vào ví của bạn</span>
                        </div>
                        <div className="success-actions-row">
                            <button
                                type="button"
                                className="btn-secondary-link"
                                onClick={() => {
                                    setIsSubmitted(false);
                                    setGeneralRating(0);
                                    setComment("");
                                    setMediaFiles([]);
                                    setTouchedRating(false);
                                    setTouchedComment(false);
                                }}
                            >
                                Viết đánh giá sản phẩm khác
                            </button>
                            <Link to="/" className="btn-primary-link">
                                Quay về trang chủ mua sắm
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="review-grid-layout">
                        <div className="review-form-panel">
                            <div className="review-form-header">
                                <h1 className="review-section-title">Viết đánh giá của bạn</h1>
                                <p className="review-section-subtitle">
                                    Chia sẻ cảm nhận chân thực của bạn về chất lượng mùi hương, độ tỏa hương và trải nghiệm sử dụng để nhận điểm thưởng OILIA Club.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="review-field-section">
                                    <div className="review-field-header">
                                        <label className="review-label">
                                            Đánh giá chung <span className="required-asterisk">*</span>
                                        </label>
                                        <span className="rating-emotion-text">
                      {currentEmotionText}
                    </span>
                                    </div>

                                    <div
                                        className={`general-stars-wrap ${
                                            touchedRating && !isRatingValid ? "has-error" : ""
                                        }`}
                                    >
                                        <div className="star-interactive-row">
                                            {[1, 2, 3, 4, 5].map((starVal) => {
                                                const isFilled =
                                                    hoverRating > 0
                                                        ? starVal <= hoverRating
                                                        : starVal <= generalRating;
                                                return (
                                                    <button
                                                        key={starVal}
                                                        type="button"
                                                        className="star-btn"
                                                        onMouseEnter={() => handleRatingHover(starVal)}
                                                        onMouseLeave={handleRatingLeave}
                                                        onClick={() => handleRatingClick(starVal)}
                                                        aria-label={`${starVal} sao`}
                                                    >
                                                        <FaStar
                                                            className={`star-icon ${
                                                                isFilled ? "filled" : ""
                                                            } ${hoverRating >= starVal ? "hovered" : ""}`}
                                                        />
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {touchedRating && !isRatingValid && (
                                        <div className="field-error-msg">
                                            <FiAlertCircle size={14} />
                                            Vui lòng chọn số sao Đánh giá chung cho sản phẩm
                                        </div>
                                    )}
                                </div>

                                <div className="review-field-section">
                                    <div className="criteria-ratings-box">
                                        <div className="criteria-title">
                                            Đánh giá chi tiết tiêu chí
                                        </div>
                                        <div className="criteria-list">
                                            {criteriaList.map(({ key, label }) => {
                                                const currentVal = criteriaRatings[key];
                                                const hoverVal = hoverCriteria[key];
                                                const activeVal = hoverVal || currentVal;

                                                return (
                                                    <div className="criteria-row" key={key}>
                                                        <span className="criteria-name">{label}</span>
                                                        <div className="criteria-action-cell">
                                                            <div className="star-interactive-row">
                                                                {[1, 2, 3, 4, 5].map((starVal) => {
                                                                    const isFilled = starVal <= activeVal;
                                                                    return (
                                                                        <button
                                                                            key={starVal}
                                                                            type="button"
                                                                            className="criteria-star-btn"
                                                                            onMouseEnter={() =>
                                                                                handleCriteriaHover(key, starVal)
                                                                            }
                                                                            onMouseLeave={() =>
                                                                                handleCriteriaLeave(key)
                                                                            }
                                                                            onClick={() =>
                                                                                handleCriteriaClick(key, starVal)
                                                                            }
                                                                            aria-label={`${label} ${starVal} sao`}
                                                                        >
                                                                            <FaStar
                                                                                className={`criteria-star-icon ${
                                                                                    isFilled ? "filled" : ""
                                                                                }`}
                                                                            />
                                                                        </button>
                                                                    );
                                                                })}
                                                            </div>
                                                            <span className="criteria-score-tag">
                                {CRITERIA_SCORE_MAP[activeVal]}
                              </span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className="review-field-section">
                                    <div className="review-field-header">
                                        <label className="review-label">
                                            Nội dung nhận xét <span className="required-asterisk">*</span>
                                        </label>
                                        <span
                                            className={`char-counter-pill ${
                                                isCommentValid ? "valid" : ""
                                            }`}
                                        >
                      {isCommentValid ? (
                          <>
                              <FiCheck size={12} />
                              {charCount} ký tự (Đạt điều kiện)
                          </>
                      ) : (
                          `${charCount}/20 ký tự (Cần thêm ${Math.max(
                              0,
                              20 - charCount
                          )})`
                      )}
                    </span>
                                    </div>

                                    <div className="review-textarea-container">
                    <textarea
                        className={`review-textarea ${
                            touchedComment && !isCommentValid ? "has-error" : ""
                        }`}
                        rows={4}
                        value={comment}
                        onChange={(e) => {
                            setComment(e.target.value);
                            if (!touchedComment) setTouchedComment(true);
                        }}
                        onBlur={() => setTouchedComment(true)}
                        placeholder="Hãy chia sẻ cảm nhận chi tiết của bạn về mùi hương thực tế, độ lưu hương trong phòng, thiết kế bao bì hay hiệu quả thư giãn... (Tối thiểu 20 ký tự để nhận điểm thưởng)"
                    />
                                    </div>

                                    <div className="textarea-footer-info">
                    <span className="textarea-hint">
                      Tối thiểu 20 ký tự để đánh giá có giá trị và nhận điểm thưởng OILIA Club.
                    </span>
                                    </div>

                                    {touchedComment && !isCommentValid && (
                                        <div className="field-error-msg">
                                            <FiAlertCircle size={14} />
                                            Nội dung nhận xét cần có tối thiểu 20 ký tự (bạn đã nhập {charCount} ký tự).
                                        </div>
                                    )}
                                </div>

                                <div className="review-field-section">
                                    <div className="review-field-header">
                                        <label className="review-label">
                                            Hình ảnh &amp; Video thực tế
                                        </label>
                                        <span className="textarea-hint">
                      Đã chọn: {mediaFiles.length}/5 tệp
                    </span>
                                    </div>

                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        accept="image/*,video/*"
                                        multiple
                                        style={{ display: "none" }}
                                    />

                                    <div className="media-upload-area">
                                        {mediaFiles.map((item) => (
                                            <div className="media-preview-card" key={item.id}>
                                                {item.isVideo ? (
                                                    <video
                                                        src={item.previewUrl}
                                                        className="media-thumb-video"
                                                        muted
                                                    />
                                                ) : (
                                                    <img
                                                        src={item.previewUrl}
                                                        alt="Xem trước hình ảnh"
                                                        className="media-thumb-img"
                                                    />
                                                )}
                                                <span className="media-type-badge">
                          {item.isVideo ? "Video" : "Ảnh"}
                        </span>
                                                <button
                                                    type="button"
                                                    className="media-remove-btn"
                                                    onClick={() => handleRemoveMedia(item.id)}
                                                    title="Xóa tệp này"
                                                >
                                                    <FiX size={12} />
                                                </button>
                                            </div>
                                        ))}

                                        {mediaFiles.length < 5 && (
                                            <button
                                                type="button"
                                                className="upload-picker-card"
                                                onClick={() => fileInputRef.current?.click()}
                                            >
                                                <FiPlus size={20} />
                                                <span>Tải ảnh/video</span>
                                            </button>
                                        )}
                                    </div>

                                    {uploadError ? (
                                        <div className="field-error-msg">
                                            <FiAlertCircle size={14} />
                                            {uploadError}
                                        </div>
                                    ) : (
                                        <div
                                            className={`media-upload-specs ${
                                                mediaFiles.length >= 5 ? "limit-warning" : ""
                                            }`}
                                        >
                                            {mediaFiles.length >= 5
                                                ? "Đã đạt giới hạn tối đa 5 tệp hình ảnh/video."
                                                : "Hỗ trợ định dạng JPG, PNG, MP4. Tối đa 5 tệp và không quá 10MB/tệp."}
                                        </div>
                                    )}
                                </div>

                                <div className="review-form-actions">
                                    <button
                                        type="button"
                                        className="btn-review-cancel"
                                        onClick={handleCancelClick}
                                    >
                                        Hủy bỏ
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn-review-submit"
                                        disabled={!isFormValid || isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <FiLoader className="spinner-icon" size={16} />
                                                Đang gửi đánh giá...
                                            </>
                                        ) : (
                                            "Gửi đánh giá sản phẩm"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="review-sidebar-col">
                            <div className="product-summary-card">
                                <div className="product-card-header">
                                    <span>Sản phẩm cần đánh giá</span>
                                    <span className="product-status-tag">Đã giao</span>
                                </div>

                                <div className="product-info-body">
                                    <div className="product-image-box">
                                        <img
                                            src={productData.image}
                                            alt={productData.name}
                                            className="product-thumb"
                                        />
                                    </div>
                                    <div className="product-details">
                                        <h3 className="product-title">{productData.name}</h3>
                                        <div className="product-meta-item">
                                            <span>{productData.category}</span>
                                            <span className="order-code-badge">
                        Mã đơn: #{productData.orderCode}
                      </span>
                                        </div>
                                        <div className="product-price-row">
                      <span className="product-curr-price">
                        {productData.price.toLocaleString("vi-VN")}₫
                      </span>
                                            {productData.originalPrice && (
                                                <span className="product-old-price">
                          {productData.originalPrice.toLocaleString("vi-VN")}₫
                        </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="nordic-club-banner">
                                <div className="club-banner-head">
                                    <div className="club-title-wrap">
                                        <FiGift className="club-icon-gold" />
                                        <span className="club-brand-text">OILIA Club</span>
                                    </div>
                                    <span className="club-reward-pill">+100 Điểm</span>
                                </div>

                                <p className="club-banner-desc">
                                    Nhận ngay điểm thưởng tích lũy (tương đương 10.000đ) khi bạn hoàn thành đánh giá chân thực về sản phẩm.
                                </p>

                                <div className="club-points-list">
                                    <div
                                        className={`club-point-item ${
                                            isCommentValid ? "completed" : ""
                                        }`}
                                    >
                                        <FiCheckCircle className="item-check-icon" />
                                        <span>
                      +50 điểm: Đánh giá chi tiết (từ 20 ký tự)
                    </span>
                                    </div>

                                    <div
                                        className={`club-point-item ${
                                            mediaFiles.length > 0 ? "completed" : ""
                                        }`}
                                    >
                                        <FiCheckCircle className="item-check-icon" />
                                        <span>
                      +50 điểm: Đính kèm hình ảnh/video thực tế
                    </span>
                                    </div>
                                </div>
                            </div>

                            <div className="review-tips-card">
                                <div className="tips-card-title">
                                    <FiInfo size={16} color="#e11d48" />
                                    Mẹo viết đánh giá hữu ích
                                </div>
                                <ul className="tips-list">
                                    <li>
                                        Mô tả không gian và diện tích phòng khi khuếch tán tinh dầu.
                                    </li>
                                    <li>
                                        Cảm nhận về độ thuần khiết của hương thơm và thời gian lưu hương.
                                    </li>
                                    <li>
                                        Chụp ảnh góc độ sáng rõ ràng hoặc video khi máy xông đang tỏa khói.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}