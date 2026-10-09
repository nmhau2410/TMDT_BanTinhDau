import React, { useEffect, useMemo, useState } from "react";
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag, FiTag, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import {
    getCart,
    updateCartQuantity,
    removeFromCart,
    formatPrice,
} from "../../../services/CartService.js";
import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import "../css/CartPage.css";

function CartPage() {
    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [voucherCode, setVoucherCode] = useState("");
    const [appliedVoucher, setAppliedVoucher] = useState(null);
    const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false);

    useEffect(() => {
        const loadCart = () => {
            const cart = getCart();
            setCartItems(cart);
            setSelectedIds(cart.map((item) => item.cartId));
        };

        loadCart();
        window.addEventListener("cartUpdated", loadCart);

        return () => {
            window.removeEventListener("cartUpdated", loadCart);
        };
    }, []);

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

    const isAllSelected =
        cartItems.length > 0 && selectedIds.length === cartItems.length;

    const handleSelectAll = (checked) => {
        if (checked) {
            setSelectedIds(cartItems.map((item) => item.cartId));
        } else {
            setSelectedIds([]);
        }
    };

    const handleSelectItem = (cartId) => {
        setSelectedIds((prev) => {
            if (prev.includes(cartId)) {
                return prev.filter((id) => id !== cartId);
            }
            return [...prev, cartId];
        });
    };

    const handleDecrease = (item) => {
        if (item.quantity <= 1) return;
        const updatedCart = updateCartQuantity(item.cartId, item.quantity - 1);
        setCartItems(updatedCart);
    };

    const handleIncrease = (item) => {
        const updatedCart = updateCartQuantity(item.cartId, item.quantity + 1);
        setCartItems(updatedCart);
    };

    const handleInputQuantity = (item, value) => {
        const quantity = Number(value);
        if (!Number.isFinite(quantity) || quantity < 1) return;
        const updatedCart = updateCartQuantity(item.cartId, quantity);
        setCartItems(updatedCart);
    };

    const handleRemove = (cartId) => {
        const updatedCart = removeFromCart(cartId);
        setCartItems(updatedCart);
        setSelectedIds((prev) => prev.filter((id) => id !== cartId));
    };

    const selectedItems = useMemo(() => {
        return cartItems.filter((item) => selectedIds.includes(item.cartId));
    }, [cartItems, selectedIds]);

    const subtotal = useMemo(() => {
        return selectedItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }, [selectedItems]);

    const shippingFee = selectedItems.length > 0 ? 30000 : 0;

    const discountAmount = useMemo(() => {
        if (!appliedVoucher) return 0;
        if (subtotal < appliedVoucher.minSubtotal) return 0;
        return appliedVoucher.discount;
    }, [appliedVoucher, subtotal]);

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

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <Header />
                <div className="cart-container">
                    <div className="cart-empty">
                        <div className="cart-empty-icon">
                            <FiShoppingBag />
                        </div>
                        <h1>Giỏ hàng trống</h1>
                        <p>
                            Bạn chưa có sản phẩm nào trong giỏ hàng.
                            <br />
                            Hãy khám phá các sản phẩm tinh dầu của chúng tôi.
                        </p>
                        <button
                            className="cart-shopping-button"
                            onClick={() => navigate("/customer/products")}
                        >
                            Tiếp tục mua sắm
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="cart-page">
                <div className="cart-container">
                    <div className="cart-layout">
                        <section className="cart-products-card">
                            <div className="cart-heading">
                                <div>
                                    <h1>Giỏ hàng</h1>
                                    <p>
                                        Hệ thống đã tự động cập nhật giá mới nhất cho các sản phẩm trong giỏ của bạn.
                                    </p>
                                </div>
                                <span className="cart-count">
                                    {cartItems.length} sản phẩm
                                </span>
                            </div>

                            <div className="cart-divider" />

                            <div className="cart-table">
                                <div className="cart-table-header">
                                    <div className="cart-checkbox-cell">
                                        <input
                                            type="checkbox"
                                            checked={isAllSelected}
                                            onChange={(e) =>
                                                handleSelectAll(e.target.checked)
                                            }
                                        />
                                    </div>
                                    <div>Sản phẩm</div>
                                    <div>Giá</div>
                                    <div>Số lượng</div>
                                    <div></div>
                                </div>

                                {cartItems.map((item) => {
                                    const isSelected = selectedIds.includes(item.cartId);

                                    return (
                                        <div className="cart-item" key={item.cartId}>
                                            <div className="cart-checkbox-cell">
                                                <input
                                                    type="checkbox"
                                                    checked={isSelected}
                                                    onChange={() =>
                                                        handleSelectItem(item.cartId)
                                                    }
                                                />
                                            </div>

                                            <div className="cart-product-info">
                                                <div className="cart-product-image">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                                <div className="cart-product-text">
                                                    <h3>{item.name}</h3>
                                                    <p>
                                                        Dung tích: {item.volume} / Xuất xứ: {item.origin}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="cart-item-price">
                                                {formatPrice(item.price)}
                                            </div>

                                            <div className="cart-quantity">
                                                <button
                                                    type="button"
                                                    onClick={() => handleDecrease(item)}
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <FiMinus />
                                                </button>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={(e) =>
                                                        handleInputQuantity(item, e.target.value)
                                                    }
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => handleIncrease(item)}
                                                >
                                                    <FiPlus />
                                                </button>
                                            </div>

                                            <button
                                                type="button"
                                                className="cart-remove"
                                                onClick={() => handleRemove(item.cartId)}
                                                aria-label="Xóa sản phẩm"
                                            >
                                                <FiTrash2 />
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        <aside className="cart-summary-card">
                            <div className="cart-summary-header">
                                <h2>Tóm tắt đơn hàng</h2>
                                <span>{selectedItems.length} sản phẩm chọn</span>
                            </div>

                            <div className="cart-summary-divider" />

                            <div className="cart-voucher-section">
                                <div className="cart-voucher-input-group">
                                    <input
                                        type="text"
                                        placeholder="Nhập mã ưu đãi..."
                                        value={voucherCode}
                                        onChange={(e) => setVoucherCode(e.target.value)}
                                    />
                                    <button type="button" onClick={handleApplyManualCode}>
                                        Áp dụng
                                    </button>
                                </div>

                                <button
                                    type="button"
                                    className="cart-open-voucher-btn"
                                    onClick={() => setIsVoucherModalOpen(true)}
                                >
                                    <FiTag />
                                    <span>
                                        {appliedVoucher
                                            ? `Đã chọn: ${appliedVoucher.code}`
                                            : "Chọn hoặc nhập mã ưu đãi"}
                                    </span>
                                </button>
                            </div>

                            <div className="cart-summary-divider" />

                            <div className="cart-summary-row">
                                <span>Tạm tính</span>
                                <strong>{formatPrice(subtotal)}</strong>
                            </div>

                            <div className="cart-summary-row">
                                <span>Phí vận chuyển</span>
                                <strong>{formatPrice(shippingFee)}</strong>
                            </div>

                            <div className="cart-summary-row discount-row">
                                <span>Giảm giá Voucher</span>
                                <strong>-{formatPrice(discountAmount)}</strong>
                            </div>

                            <div className="cart-summary-total">
                                <span>Tổng tiền</span>
                                <strong>{formatPrice(grandTotal)}</strong>
                            </div>

                            <button
                                className="cart-continue-button"
                                disabled={selectedItems.length === 0}
                                onClick={() => {
                                    if (selectedItems.length === 0) return;
                                    navigate("/customer/checkout", {
                                        state: {
                                            selectedItems,
                                            subtotal,
                                            shippingFee,
                                            appliedVoucher,
                                            discountAmount,
                                            totalPrice: grandTotal,
                                        },
                                    });
                                }}
                            >
                                Đặt hàng
                            </button>
                        </aside>
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

export default CartPage;