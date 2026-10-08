import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import { formatPrice } from "../../../services/CartService.js";
import "../css/CheckoutPage.css";

function CheckoutPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const passedState = location.state || {};
    const [selectedItems, setSelectedItems] = useState(
        passedState.selectedItems && passedState.selectedItems.length > 0
            ? passedState.selectedItems
            : [
                { cartId: 1, name: "Tinh dầu Lavender Nguyên Chất", volume: "10ml", origin: "Pháp", price: 350000, quantity: 1 },
                { cartId: 2, name: "Tinh dầu Tràm Trà Tea Tree", volume: "40ml", origin: "Pháp", price: 450000, quantity: 1 }
            ]
    );

    const [step, setStep] = useState(1);

    const shippingOptions = [
        { id: "shopee", name: "Shopee Express", time: "2 - 3 ngày", price: 25000 },
        { id: "viettel", name: "Viettel Post", time: "3 - 4 ngày", price: 20000 },
        { id: "jnt", name: "J&T Express", time: "1 - 2 ngày", price: 30000 }
    ];
    const [selectedShipping, setSelectedShipping] = useState("shopee");

    const paymentOptions = [
        { id: "momo", name: "Momo", desc: "Thanh toán qua ví điện tử Momo" },
        { id: "bank", name: "Thẻ ngân hàng", desc: "Thẻ ngân hàng ATM/Visa/MasterCard" },
        { id: "qr", name: "QR code", desc: "Quét mã QR để thanh toán" },
        { id: "cod", name: "Thanh toán khi nhận hàng (COD)", desc: "Thanh toán bằng tiền mặt khi nhận hàng" },
        { id: "online_safe", name: "Thanh toán online nhanh chóng, an toàn", desc: "Bảo mật thông tin, hỗ trợ nhiều hình thức thanh toán", isShield: true }
    ];
    const [selectedPayment, setSelectedPayment] = useState("momo");

    const [isVoucherOpen, setIsVoucherOpen] = useState(false);
    const vouchersList = [
        { id: "giam10", code: "Giảm 10%", desc: "Giảm 10% tối đa 50.000đ", discount: 50000 },
        { id: "giam20", code: "Giảm 20%", desc: "Giảm 20% tối đa 100.000đ", discount: 100000 },
        { id: "freeship", code: "FREESHIP", desc: "Miễn phí vận chuyển", discount: 25000 }
    ];
    const [appliedVoucher, setAppliedVoucher] = useState(vouchersList[0]);

    const subtotal = selectedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingFee = shippingOptions.find((s) => s.id === selectedShipping)?.price || 0;
    const discountAmount = appliedVoucher ? appliedVoucher.discount : 0;
    const grandTotal = Math.max(0, subtotal + shippingFee - discountAmount);

    const handleNext = () => {
        if (step === 1) {
            setStep(2);
        } else if (step === 2) {
            setStep(3);
        }
    };

    return (
        <>
            <Header />
            <div className="checkout-page">
                <div className="checkout-container">
                    <div className="checkout-breadcrumb">
                        <span>Tài khoản</span>
                        <b>/</b>
                        <span>Sản phẩm</span>
                        <b>/</b>
                        <span>Đặt hàng</span>
                        <b>/</b>
                        <strong>
                            {step === 1 && "Chọn đơn vị vận chuyển"}
                            {step === 2 && "Chọn phương thức thanh toán"}
                            {step === 3 && "Xử lý thanh toán"}
                        </strong>
                    </div>

                    {step === 3 && (
                        <div className="checkout-processing-layout">
                            <div className="checkout-card processing-card">
                                <div className="card-icon-center">
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.5">
                                        <rect x="2" y="5" width="20" height="14" rx="2" />
                                        <line x1="2" y1="10" x2="22" y2="10" />
                                        <path d="M7 15h.01M11 15h2" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h2>Xử lý thanh toán</h2>
                                <p className="sub-text">
                                    Vui lòng không đóng trang. Hệ thống đang xử lý thanh toán đơn hàng của bạn
                                </p>

                                <div className="stepper-dots">
                                    <div className="step-dot done">
                                        <span className="icon">✓</span> Đặt hàng
                                    </div>
                                    <div className="line done"></div>
                                    <div className="step-dot active">
                                        <span className="icon">+</span> Thanh toán
                                    </div>
                                    <div className="line"></div>
                                    <div className="step-dot">
                                        <span className="icon"></span> Xác nhận
                                    </div>
                                    <div className="line"></div>
                                    <div className="step-dot">
                                        <span className="icon"></span> Hoàn tất
                                    </div>
                                </div>

                                <div className="processing-actions">
                                    <button className="btn-dark" onClick={() => navigate("/products")}>
                                        Tiếp tục đặt hàng
                                    </button>
                                    <button className="btn-dark-outline" onClick={() => navigate("/myorders")}>
                                        Đơn hàng của tôi
                                    </button>
                                </div>
                            </div>

                            <div className="checkout-card help-card">
                                <h3>Cần trợ giúp?</h3>
                                <p>
                                    Nếu quy trình kiểm tra chất lượng kéo dài hơn 24 giờ, vui lòng liên hệ bộ phận hỗ trợ khách hàng để được xử lý nhanh nhất.
                                </p>
                                <div className="contact-info">
                                    <p>✉ support@nordic.vn</p>
                                    <p>📞 1900 8192 (Phím 3)</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {(step === 1 || step === 2) && (
                        <div className="checkout-layout">
                            <div className="checkout-left">
                                {step === 1 && (
                                    <div className="checkout-card">
                                        <div className="checkout-heading">
                                            <h1>Chọn đơn vị vận chuyển</h1>
                                            <p>Chọn đơn vị vận chuyển mong muốn</p>
                                        </div>

                                        <div className="options-list">
                                            {shippingOptions.map((item) => (
                                                <label
                                                    key={item.id}
                                                    className={`option-item ${selectedShipping === item.id ? "selected" : ""}`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="shipping"
                                                        checked={selectedShipping === item.id}
                                                        onChange={() => setSelectedShipping(item.id)}
                                                    />
                                                    <div className="option-content">
                                                        <div className="option-title">{item.name}</div>
                                                        <div className="option-sub">{item.time}</div>
                                                        <div className="option-price">{formatPrice(item.price)}</div>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="checkout-card">
                                        <div className="checkout-heading">
                                            <h1>Chọn phương thức thanh toán</h1>
                                            <p>Chọn phương thức thanh toán phù hợp</p>
                                        </div>

                                        <div className="options-list">
                                            {paymentOptions.map((item) => (
                                                <label
                                                    key={item.id}
                                                    className={`option-item ${selectedPayment === item.id ? "selected" : ""}`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        checked={selectedPayment === item.id}
                                                        onChange={() => setSelectedPayment(item.id)}
                                                    />
                                                    <div className="option-content">
                                                        <div className="option-title">
                                                            {item.isShield && <span className="shield-icon">🛡️ </span>}
                                                            {item.name}
                                                        </div>
                                                        <div className="option-sub">{item.desc}</div>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="checkout-right">
                                <div className="checkout-card summary-card">
                                    <h2>Xác nhận</h2>

                                    <div className="summary-label">Sản phẩm</div>

                                    <div className="summary-products">
                                        {selectedItems.map((item) => (
                                            <div key={item.cartId || item.id} className="summary-product-item">
                                                <span>{item.name}</span>
                                                <strong>{formatPrice(item.price * item.quantity)}</strong>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="voucher-selector-wrapper">
                                        <button
                                            type="button"
                                            className="voucher-select-btn"
                                            onClick={() => setIsVoucherOpen(!isVoucherOpen)}
                                        >
                                            <span>🎟️ {appliedVoucher ? appliedVoucher.code : "Chọn mã khuyến mãi"}</span>
                                            <span className="arrow">{isVoucherOpen ? "▲" : "▼"}</span>
                                        </button>

                                        {isVoucherOpen && (
                                            <div className="voucher-dropdown-menu">
                                                <div className="dropdown-header">
                                                    <span>Mở</span>
                                                    <button onClick={() => setIsVoucherOpen(false)}>Đóng</button>
                                                </div>
                                                {vouchersList.map((v) => (
                                                    <div
                                                        key={v.id}
                                                        className={`voucher-option ${appliedVoucher?.id === v.id ? "active" : ""}`}
                                                        onClick={() => {
                                                            setAppliedVoucher(v);
                                                            setIsVoucherOpen(false);
                                                        }}
                                                    >
                                                        <div>
                                                            <strong>{v.code}</strong>
                                                            <p>{v.desc}</p>
                                                        </div>
                                                        {appliedVoucher?.id === v.id && <span>✓</span>}
                                                    </div>
                                                ))}
                                                <div
                                                    className="voucher-option clear-btn"
                                                    onClick={() => {
                                                        setAppliedVoucher(null);
                                                        setIsVoucherOpen(false);
                                                    }}
                                                >
                                                    ✕ Không sử dụng mã
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="summary-row">
                                        <span>Giảm giá</span>
                                        <strong className="discount-text">-{formatPrice(discountAmount)}</strong>
                                    </div>

                                    <div className="summary-row">
                                        <span>Phí vận chuyển</span>
                                        <strong>{formatPrice(shippingFee)}</strong>
                                    </div>

                                    <div className="summary-divider" />

                                    <div className="summary-total">
                                        <span>Tổng tiền</span>
                                        <strong className="total-price">{formatPrice(grandTotal)}</strong>
                                    </div>

                                    <button className="btn-continue" onClick={handleNext}>
                                        Tiếp tục
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CheckoutPage;