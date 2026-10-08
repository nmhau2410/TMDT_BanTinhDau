import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import '../css/CheckoutPage.css';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        city: '',
        district: '',
        ward: '',
        address: '',
        note: ''
    });

    const [shippingMethod, setShippingMethod] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [voucherCode, setVoucherCode] = useState('');
    const [voucherApplied, setVoucherApplied] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    // Sample cart data
    const cartItems = [
        { id: 1, name: 'Tinh dầu Lavender Nguyên Chất', capacity: '100ml', price: 350000, quantity: 1, image: 'https://via.placeholder.com/60' },
        { id: 2, name: 'Tinh dầu Tràm Trà Tea Tree', capacity: '50ml', price: 450000, quantity: 1, image: 'https://via.placeholder.com/60' }
    ];

    const shippingFees = {
        'shopee': 25000,
        'viettel': 20000,
        'jnt': 30000
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingFee = shippingFees[shippingMethod] || 0;
    const discount = voucherApplied ? 50000 : 0;
    const total = subtotal + shippingFee - discount;

    const [termsAccepted, setTermsAccepted] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Vui lòng nhập họ tên';
        if (!formData.phone.trim()) {
            newErrors.phone = 'Vui lòng nhập số điện thoại';
        } else if (!/^(0[3|5|7|8|9])+([0-9]{8})\b/.test(formData.phone)) {
            newErrors.phone = 'Số điện thoại không hợp lệ';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Vui lòng nhập email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
        }
        if (!formData.city) newErrors.city = 'Vui lòng chọn tỉnh/thành';
        if (!formData.district) newErrors.district = 'Vui lòng chọn quận/huyện';
        if (!formData.ward) newErrors.ward = 'Vui lòng chọn phường/xã';
        if (!formData.address.trim()) newErrors.address = 'Vui lòng nhập địa chỉ';
        if (!shippingMethod) newErrors.shippingMethod = 'Vui lòng chọn phương thức vận chuyển';
        if (!paymentMethod) newErrors.paymentMethod = 'Vui lòng chọn phương thức thanh toán';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleApplyVoucher = () => {
        if (voucherCode === 'TINHDAU10' || voucherCode === 'GIAM50K') {
            setVoucherApplied(true);
        } else {
            alert('Mã giảm giá không hợp lệ!');
            setVoucherApplied(false);
        }
    };

    const handleCheckout = () => {
        if (!validateForm()) return;
        if (!termsAccepted) return;

        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Đặt hàng thành công!');
            // navigate('/customer/success');
        }, 1500);
    };

    const isFormValid = () => {
        return (
            formData.fullName.trim() !== '' &&
            /^(0[3|5|7|8|9])+([0-9]{8})\b/.test(formData.phone) &&
            /\S+@\S+\.\S+/.test(formData.email) &&
            formData.city !== '' &&
            formData.district !== '' &&
            formData.ward !== '' &&
            formData.address.trim() !== '' &&
            shippingMethod !== '' &&
            paymentMethod !== '' &&
            termsAccepted
        );
    };

    return (
        <div className="checkout-page">
            <Header />
            <div className="checkout-container">
                <div className="breadcrumb">
                    <span>Giỏ hàng</span>
                    <span className="separator">/</span>
                    <span className="current">Thông tin đặt hàng</span>
                </div>

                <div className="checkout-content">
                    {/* Left Column */}
                    <div className="checkout-left">
                        {/* Section A: Customer Info */}
                        <div className="checkout-section">
                            <h2>Thông tin nhận hàng</h2>
                            <div className="form-group">
                                <label>Họ và tên <span className="required">*</span></label>
                                <input 
                                    type="text" 
                                    name="fullName" 
                                    value={formData.fullName} 
                                    onChange={handleInputChange} 
                                    placeholder="Nhập họ và tên"
                                    className={errors.fullName ? 'error-input' : ''}
                                />
                                {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Số điện thoại <span className="required">*</span></label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        value={formData.phone} 
                                        onChange={handleInputChange} 
                                        placeholder="Nhập số điện thoại"
                                        className={errors.phone ? 'error-input' : ''}
                                    />
                                    {errors.phone && <span className="error-msg">{errors.phone}</span>}
                                </div>
                                <div className="form-group">
                                    <label>Email <span className="required">*</span></label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleInputChange} 
                                        placeholder="Nhập email"
                                        className={errors.email ? 'error-input' : ''}
                                    />
                                    {errors.email && <span className="error-msg">{errors.email}</span>}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Tỉnh / Thành phố <span className="required">*</span></label>
                                    <select name="city" value={formData.city} onChange={handleInputChange} className={errors.city ? 'error-input' : ''}>
                                        <option value="">Chọn Tỉnh / Thành phố</option>
                                        <option value="HN">Hà Nội</option>
                                        <option value="HCM">TP. Hồ Chí Minh</option>
                                    </select>
                                    {errors.city && <span className="error-msg">{errors.city}</span>}
                                </div>
                                <div className="form-group">
                                    <label>Quận / Huyện <span className="required">*</span></label>
                                    <select name="district" value={formData.district} onChange={handleInputChange} className={errors.district ? 'error-input' : ''}>
                                        <option value="">Chọn Quận / Huyện</option>
                                        <option value="D1">Quận 1</option>
                                        <option value="D2">Quận 2</option>
                                    </select>
                                    {errors.district && <span className="error-msg">{errors.district}</span>}
                                </div>
                                <div className="form-group">
                                    <label>Phường / Xã <span className="required">*</span></label>
                                    <select name="ward" value={formData.ward} onChange={handleInputChange} className={errors.ward ? 'error-input' : ''}>
                                        <option value="">Chọn Phường / Xã</option>
                                        <option value="W1">Phường Bến Nghé</option>
                                        <option value="W2">Phường Bến Thành</option>
                                    </select>
                                    {errors.ward && <span className="error-msg">{errors.ward}</span>}
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Địa chỉ chi tiết <span className="required">*</span></label>
                                <input 
                                    type="text" 
                                    name="address" 
                                    value={formData.address} 
                                    onChange={handleInputChange} 
                                    placeholder="Số nhà, tên đường..."
                                    className={errors.address ? 'error-input' : ''}
                                />
                                {errors.address && <span className="error-msg">{errors.address}</span>}
                            </div>

                            <div className="form-group">
                                <label>Ghi chú đơn hàng</label>
                                <textarea 
                                    name="note" 
                                    value={formData.note} 
                                    onChange={handleInputChange} 
                                    placeholder="Ví dụ: Giao giờ hành chính, gọi trước khi giao..."
                                    rows="3"
                                ></textarea>
                            </div>
                        </div>

                        {/* Section B: Shipping & Payment */}
                        <div className="checkout-section">
                            <h2>Chọn đơn vị vận chuyển</h2>
                            <div className="radio-list">
                                <label className={`radio-card ${shippingMethod === 'shopee' ? 'active' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="shipping" 
                                        value="shopee" 
                                        checked={shippingMethod === 'shopee'} 
                                        onChange={(e) => setShippingMethod(e.target.value)} 
                                    />
                                    <div className="radio-content">
                                        <div className="radio-title">Shopee Express</div>
                                        <div className="radio-desc">2 - 3 ngày</div>
                                    </div>
                                    <div className="radio-price">25.000₫</div>
                                </label>
                                <label className={`radio-card ${shippingMethod === 'viettel' ? 'active' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="shipping" 
                                        value="viettel" 
                                        checked={shippingMethod === 'viettel'} 
                                        onChange={(e) => setShippingMethod(e.target.value)} 
                                    />
                                    <div className="radio-content">
                                        <div className="radio-title">Viettel Post</div>
                                        <div className="radio-desc">3 - 4 ngày</div>
                                    </div>
                                    <div className="radio-price">20.000₫</div>
                                </label>
                                <label className={`radio-card ${shippingMethod === 'jnt' ? 'active' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="shipping" 
                                        value="jnt" 
                                        checked={shippingMethod === 'jnt'} 
                                        onChange={(e) => setShippingMethod(e.target.value)} 
                                    />
                                    <div className="radio-content">
                                        <div className="radio-title">J&T Express</div>
                                        <div className="radio-desc">1 - 2 ngày</div>
                                    </div>
                                    <div className="radio-price">30.000₫</div>
                                </label>
                            </div>
                            {errors.shippingMethod && <span className="error-msg d-block mt-2">{errors.shippingMethod}</span>}
                        </div>

                        <div className="checkout-section">
                            <h2>Chọn phương thức thanh toán</h2>
                            <p className="section-desc">Chọn phương thức thanh toán phù hợp</p>
                            <div className="radio-list">
                                <label className={`radio-card ${paymentMethod === 'momo' ? 'active' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        value="momo" 
                                        checked={paymentMethod === 'momo'} 
                                        onChange={(e) => setPaymentMethod(e.target.value)} 
                                    />
                                    <div className="radio-content">
                                        <div className="radio-title">Momo</div>
                                        <div className="radio-desc">Thanh toán qua ví điện tử Momo</div>
                                    </div>
                                </label>
                                <label className={`radio-card ${paymentMethod === 'card' ? 'active' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        value="card" 
                                        checked={paymentMethod === 'card'} 
                                        onChange={(e) => setPaymentMethod(e.target.value)} 
                                    />
                                    <div className="radio-content">
                                        <div className="radio-title">Thẻ ngân hàng</div>
                                        <div className="radio-desc">Thẻ ngân hàng ATM/Visa/Master Card</div>
                                    </div>
                                </label>
                                <label className={`radio-card ${paymentMethod === 'qr' ? 'active' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        value="qr" 
                                        checked={paymentMethod === 'qr'} 
                                        onChange={(e) => setPaymentMethod(e.target.value)} 
                                    />
                                    <div className="radio-content">
                                        <div className="radio-title">QR code</div>
                                        <div className="radio-desc">Quét mã QR để thanh toán</div>
                                    </div>
                                </label>
                                <label className={`radio-card ${paymentMethod === 'cod' ? 'active' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        value="cod" 
                                        checked={paymentMethod === 'cod'} 
                                        onChange={(e) => setPaymentMethod(e.target.value)} 
                                    />
                                    <div className="radio-content">
                                        <div className="radio-title">Thanh toán khi nhận hàng (COD)</div>
                                        <div className="radio-desc">Thanh toán bằng tiền mặt khi nhận hàng</div>
                                    </div>
                                </label>
                            </div>
                            {errors.paymentMethod && <span className="error-msg d-block mt-2">{errors.paymentMethod}</span>}
                            
                            <div className="secure-badge">
                                <span className="secure-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                    </svg>
                                </span>
                                <div>
                                    <strong>Thanh toán online nhanh chóng, an toàn</strong>
                                    <p>Bảo mật thông tin, hỗ trợ nhiều hình thức thanh toán</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="checkout-right">
                        <div className="summary-card sticky">
                            <h3>Xác nhận</h3>
                            
                            <div className="summary-section">
                                <div className="summary-title">Sản phẩm</div>
                                <div className="product-list-mini">
                                    {cartItems.map(item => (
                                        <div className="product-item-mini" key={item.id}>
                                            <div className="product-info-mini">
                                                <div className="name">{item.name}</div>
                                            </div>
                                            <div className="product-price-mini">
                                                {item.price.toLocaleString('vi-VN')}₫
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="voucher-section">
                                <div className="voucher-input-group">
                                    <div className="voucher-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21.5 12H16c-.7 2-3 3-4.5 1.5S10 8 12 8s3.5 1.5 4 3.5h5.5"/>
                                            <path d="M12 2v20"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10"/>
                                        </svg>
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder="Chọn mã khuyến mãi" 
                                        value={voucherCode}
                                        onChange={(e) => setVoucherCode(e.target.value)}
                                    />
                                    <button className="btn-apply" onClick={handleApplyVoucher}>Áp dụng</button>
                                </div>
                            </div>

                            <div className="price-details">
                                <div className="price-row">
                                    <span>Tạm tính</span>
                                    <span>{subtotal.toLocaleString('vi-VN')}₫</span>
                                </div>
                                {voucherApplied && (
                                    <div className="price-row highlight">
                                        <span>Giảm giá</span>
                                        <span>-{discount.toLocaleString('vi-VN')}₫</span>
                                    </div>
                                )}
                                <div className="price-row">
                                    <span>Phí vận chuyển</span>
                                    <span>{shippingFee.toLocaleString('vi-VN')}₫</span>
                                </div>
                                <div className="price-row total">
                                    <span>Tổng tiền</span>
                                    <span>{total.toLocaleString('vi-VN')}₫</span>
                                </div>
                            </div>

                            <div className="terms-checkbox">
                                <label>
                                    <input 
                                        type="checkbox" 
                                        checked={termsAccepted} 
                                        onChange={(e) => setTermsAccepted(e.target.checked)} 
                                    />
                                    Tôi đồng ý với Điều khoản mua hàng & Chính sách đổi trả
                                </label>
                            </div>

                            <button 
                                className={`btn-checkout ${!isFormValid() ? 'disabled' : ''}`}
                                onClick={handleCheckout}
                                disabled={!isFormValid() || isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className="spinner"></span>
                                ) : (
                                    'Tiếp tục'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
