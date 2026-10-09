import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMapPin, FiShoppingBag, FiCreditCard, FiTag, FiX } from "react-icons/fi";
import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import { formatPrice } from "../../../services/CartService.js";
import "../css/CheckoutPage.css";

function CheckoutPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const passedState = location.state || {};

    const [items] = useState(
        passedState.selectedItems && passedState.selectedItems.length > 0
            ? passedState.selectedItems
            : [
                { cartId: 1, name: "OẢi Hương True Lavender Pháp", volume: "10ml", origin: "Xưởng Provence Farm", price: 182000, quantity: 1 },
                { cartId: 2, name: "Tinh dầu Sả Chanh xông phòng", volume: "30ml", origin: "Xưởng Tinh Dầu TP.HCM", price: 90000, quantity: 1 }
            ]
    );

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        city: "TP. Hồ Chí Minh",
        note: ""
    });

    const [paymentMethod, setPaymentMethod] = useState("bank");
    const [voucherCode, setVoucherCode] = useState("");
    const [appliedVoucher, setAppliedVoucher] = useState(passedState.appliedVoucher || null);
    const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(true);

    const vouchersList = [
        {
            id: "OILIA50",
            code: "OILIA50",
            title: "Giảm 50.000đ",
            desc: "Đơn hàng từ 300.000đ",
            minSubtotal: 300000,
            discount: 50000,
        },
        {
            id: "OILIA100",
            code: "OILIA100",
            title: "Giảm 100.000đ",
            desc: "Đơn hàng từ 700.000đ",
            minSubtotal: 700000,
            discount: 100000,
        },
        {
            id: "FREESHIP",
            code: "FREESHIP",
            title: "Miễn phí vận chuyển",
            desc: "Đơn hàng từ 200.000đ (Tối đa 30.000đ)",
            minSubtotal: 200000,
            discount: 30000,
        },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingFee = items.length > 0 ? 30000 : 0;

    const discountAmount = appliedVoucher
        ? (subtotal >= appliedVoucher.minSubtotal ? appliedVoucher.discount : 0)
        : (passedState.discountAmount || 0);

    const grandTotal = Math.max(0, subtotal + shippingFee - discountAmount);

    const handleApplyManualCode = () => {
        const found = vouchersList.find(
            (v) => v.code.toLowerCase() === voucherCode.trim().toLowerCase()
        );
        if (!found) {
            alert("Mã voucher không tồn tại!");
            return;
        }
        if (subtotal < found.minSubtotal) {
            alert(`Mã này chỉ áp dụng cho đơn hàng từ ${formatPrice(found.minSubtotal)} trở lên!`);
            return;
        }
        setAppliedVoucher(found);
        alert(`Đã áp dụng mã "${found.code}" thành công!`);
    };

    const handleSelectModalVoucher = (v) => {
        setAppliedVoucher(v);
        setVoucherCode(v.code);
        setIsVoucherModalOpen(false);
    };

    const handleOrderSubmit = () => {
        if (!formData.fullName || !formData.phone || !formData.address) {
            alert("Vui lòng điền đầy đủ Họ tên, Số điện thoại và Địa chỉ!");
            return;
        }

        if (!agreeTerms) {
            alert("Vui lòng đồng ý với chính sách bảo mật!");
            return;
        }

        navigate("/customer/myorders");
    };

    return (
        <>
            <Header />
            <div className="checkout-page">
                <div className="checkout-container">

                    <div className="checkout-top-grid">

                        <div className="checkout-card flex-card">
                            <div className="card-header-title">
                                <FiMapPin className="header-icon" />
                                <h2>Thông tin mua hàng</h2>
                            </div>

                            <div className="form-vertical-layout flex-body">
                                <div className="form-row">
                                    <label>Họ và tên :</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Nhập họ và tên người nhận"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-row-group">
                                    <div className="form-row flex-1">
                                        <label>Số điện thoại :</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="Nhập số điện thoại"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="form-row flex-1">
                                        <label>Email :</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Nhập địa chỉ Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <label>Địa chỉ :</label>
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Nhập địa chỉ giao hàng chi tiết"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-row">
                                    <label>Tỉnh / Thành phố :</label>
                                    <select name="city" value={formData.city} onChange={handleInputChange}>
                                        <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                                        <option value="Hà Nội">Hà Nội</option>
                                        <option value="Đà Nẵng">Đà Nẵng</option>
                                        <option value="Cần Thơ">Cần Thơ</option>
                                    </select>
                                </div>

                                <div className="form-row flex-grow-note">
                                    <label>Ghi chú đơn hàng (tuỳ chọn):</label>
                                    <textarea
                                        name="note"
                                        placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                                        value={formData.note}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="checkout-card flex-card">
                            <div className="card-header-title">
                                <FiShoppingBag className="header-icon" />
                                <h2>Đơn hàng ({items.length} sản phẩm)</h2>
                            </div>

                            <div className="flex-body flex-column-between">
                                <div>
                                    <div className="cart-table-wrapper">
                                        <table className="cart-items-table">
                                            <thead>
                                            <tr>
                                                <th className="col-product">Sản phẩm</th>
                                                <th className="col-qty">Số lượng</th>
                                                <th className="col-price">Đơn giá</th>
                                                <th className="col-total">Thành tiền</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {items.map((item) => (
                                                <tr key={item.cartId || item.id}>
                                                    <td className="col-product">
                                                        <div className="product-item-meta">
                                                            <div>
                                                                <strong className="product-title">{item.name}</strong>
                                                                <small>{item.volume || "10ml"} • {item.origin || "Xưởng tinh dầu Oilia"}</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="col-qty">
                                                        <span className="qty-static-text">x{item.quantity}</span>
                                                    </td>
                                                    <td className="col-price">{formatPrice(item.price)}</td>
                                                    <td className="col-total highlight-price">{formatPrice(item.price * item.quantity)}</td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="cart-back-link">
                                        <button type="button" onClick={() => navigate("/customer/products")}>
                                            ‹ Chọn thêm sản phẩm khác
                                        </button>
                                    </div>
                                </div>

                                <div className="summary-calculation">
                                    <div className="checkout-voucher-single-row">
                                        <button
                                            type="button"
                                            className="checkout-open-voucher-btn"
                                            onClick={() => setIsVoucherModalOpen(true)}
                                        >
                                            <FiTag />
                                            <span>
                                                {appliedVoucher
                                                    ? `Đã chọn: ${appliedVoucher.code}`
                                                    : "Chọn hoặc nhập mã ưu đãi"}
                                            </span>
                                        </button>

                                        <div className="checkout-voucher-input-group">
                                            <input
                                                type="text"
                                                placeholder="Nhập mã giảm giá..."
                                                value={voucherCode}
                                                onChange={(e) => setVoucherCode(e.target.value)}
                                            />
                                            <button type="button" onClick={handleApplyManualCode}>
                                                Áp dụng
                                            </button>
                                        </div>
                                    </div>

                                    <div className="calc-divider" />

                                    <div className="calc-full-rows">
                                        <div className="calc-row">
                                            <span>Tạm tính:</span>
                                            <strong>{formatPrice(subtotal)}</strong>
                                        </div>
                                        <div className="calc-row">
                                            <span>Phí vận chuyển:</span>
                                            <strong>{formatPrice(shippingFee)}</strong>
                                        </div>
                                        <div className="calc-row discount">
                                            <span>Giảm giá Voucher:</span>
                                            <strong>-{formatPrice(discountAmount)}</strong>
                                        </div>

                                        <div className="calc-divider" />

                                        <div className="calc-row total-row">
                                            <span>Tổng tiền:</span>
                                            <strong className="final-price">{formatPrice(grandTotal)}</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="checkout-card payment-card-full">
                        <div className="card-header-title">
                            <FiCreditCard className="header-icon" />
                            <h2>Hình thức thanh toán</h2>
                        </div>

                        <div className="payment-options-list">
                            <label className={`payment-option-item ${paymentMethod === "bank" ? "selected" : ""}`}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="bank"
                                    checked={paymentMethod === "bank"}
                                    onChange={() => setPaymentMethod("bank")}
                                />
                                <div className="payment-option-content">
                                    <strong>Chuyển khoản ngân hàng</strong>
                                    <p>Thực hiện chuyển khoản vào tài khoản BIDV 220-078-8859 – Công ty cổ phần Oilia Việt Nam. Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung chuyển khoản</p>
                                </div>
                            </label>

                            <label className={`payment-option-item ${paymentMethod === "cod" ? "selected" : ""}`}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cod"
                                    checked={paymentMethod === "cod"}
                                    onChange={() => setPaymentMethod("cod")}
                                />
                                <div className="payment-option-content">
                                    <strong>Trả tiền mặt khi nhận hàng</strong>
                                </div>
                            </label>
                        </div>

                        <div className="terms-checkbox-row">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={agreeTerms}
                                onChange={(e) => setAgreeTerms(e.target.checked)}
                            />
                            <label htmlFor="terms">
                                Tôi đồng ý với <span className="terms-link">chính sách bảo mật</span>
                            </label>
                        </div>

                        <button type="button" className="btn-order-full" onClick={handleOrderSubmit}>
                            Đặt hàng
                        </button>
                    </div>

                </div>
            </div>

            {isVoucherModalOpen && (
                <div className="voucher-modal-overlay">
                    <div className="voucher-modal">
                        <div className="voucher-modal-header">
                            <h3>Chọn Mã Ưu Đãi</h3>
                            <button
                                type="button"
                                className="close-modal-btn"
                                onClick={() => setIsVoucherModalOpen(false)}
                            >
                                <FiX />
                            </button>
                        </div>

                        <div className="voucher-modal-body">
                            {vouchersList.map((v) => {
                                const isEligible = subtotal >= v.minSubtotal;
                                const isSelected = appliedVoucher?.id === v.id;

                                return (
                                    <div
                                        key={v.id}
                                        className={`voucher-card-item ${!isEligible ? "disabled" : ""} ${isSelected ? "selected" : ""}`}
                                    >
                                        <div className="voucher-card-left">
                                            <span className="voucher-tag-badge">OILIA</span>
                                        </div>

                                        <div className="voucher-card-content">
                                            <h4>{v.title}</h4>
                                            <p>{v.desc}</p>
                                            {!isEligible && (
                                                <span className="voucher-min-text">
                                                    Cần mua thêm {formatPrice(v.minSubtotal - subtotal)}
                                                </span>
                                            )}
                                        </div>

                                        <div className="voucher-card-right">
                                            <button
                                                type="button"
                                                className="voucher-select-btn"
                                                disabled={!isEligible}
                                                onClick={() => handleSelectModalVoucher(v)}
                                            >
                                                {isSelected ? "Đã chọn" : "Áp dụng"}
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}

export default CheckoutPage;