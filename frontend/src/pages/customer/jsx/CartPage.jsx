import React, { useEffect, useMemo, useState } from "react";
import { FiMinus, FiPlus, FiX, FiShoppingBag } from "react-icons/fi";
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

    /* =========================
       CHECKBOX
    ========================= */

    const isAllSelected =
        cartItems.length > 0 &&
        selectedIds.length === cartItems.length;

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

    /* =========================
       QUANTITY
    ========================= */

    const handleDecrease = (item) => {
        if (item.quantity <= 1) return;

        const updatedCart = updateCartQuantity(
            item.cartId,
            item.quantity - 1
        );

        setCartItems(updatedCart);
    };

    const handleIncrease = (item) => {
        const updatedCart = updateCartQuantity(
            item.cartId,
            item.quantity + 1
        );

        setCartItems(updatedCart);
    };

    const handleInputQuantity = (item, value) => {
        const quantity = Number(value);

        if (!Number.isFinite(quantity) || quantity < 1) {
            return;
        }

        const updatedCart = updateCartQuantity(
            item.cartId,
            quantity
        );

        setCartItems(updatedCart);
    };

    /* =========================
       REMOVE
    ========================= */

    const handleRemove = (cartId) => {
        const updatedCart = removeFromCart(cartId);

        setCartItems(updatedCart);

        setSelectedIds((prev) =>
            prev.filter((id) => id !== cartId)
        );
    };

    /* =========================
       SELECTED PRODUCTS
    ========================= */

    const selectedItems = useMemo(() => {
        return cartItems.filter((item) =>
            selectedIds.includes(item.cartId)
        );
    }, [cartItems, selectedIds]);

    const totalPrice = useMemo(() => {
        return selectedItems.reduce(
            (total, item) =>
                total + item.price * item.quantity,
            0
        );
    }, [selectedItems]);

    /* =========================
       EMPTY CART
    ========================= */

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <div className="cart-container">
                    <div className="cart-breadcrumb">
                        <span>Tài khoản</span>
                        <b>/</b>
                        <span>Sản phẩm</span>
                        <b>/</b>
                        <strong>Đặt hàng</strong>
                    </div>

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
                            onClick={() => navigate("/products")}
                        >
                            Tiếp tục mua sắm
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
        <Header />
        <div className="cart-page">
            <div className="cart-container">

                {/* BREADCRUMB */}
                <div className="cart-breadcrumb">
                    <span>Tài khoản</span>
                    <b>/</b>
                    <span>Sản phẩm</span>
                    <b>/</b>
                    <strong>Đặt hàng</strong>
                </div>

                <div className="cart-layout">

                    {/* =========================
              LEFT
          ========================= */}

                    <section className="cart-products-card">

                        <div className="cart-heading">
                            <div>
                                <h1>Giỏ hàng</h1>

                                <p>
                                    Hệ thống đã tự động cập nhật giá mới nhất
                                    cho các sản phẩm đã mua của bạn.
                                </p>
                            </div>

                            <span className="cart-count">
                {cartItems.length} sản phẩm
              </span>
                        </div>

                        <div className="cart-divider" />

                        {/* TABLE HEADER */}

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

                            {/* CART ITEMS */}

                            {cartItems.map((item) => {
                                const isSelected = selectedIds.includes(
                                    item.cartId
                                );

                                return (
                                    <div
                                        className="cart-item"
                                        key={item.cartId}
                                    >

                                        {/* CHECKBOX */}

                                        <div className="cart-checkbox-cell">
                                            <input
                                                type="checkbox"
                                                checked={isSelected}
                                                onChange={() =>
                                                    handleSelectItem(item.cartId)
                                                }
                                            />
                                        </div>

                                        {/* PRODUCT */}

                                        <div className="cart-product-info">

                                            <div className="cart-product-image">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                />
                                            </div>

                                            <div className="cart-product-text">

                                                <h3>{item.name}</h3>

                                                <p>
                                                    Dung tích: {item.volume} / Xuất xứ:{" "}
                                                    {item.origin}
                                                </p>

                                            </div>

                                        </div>

                                        {/* PRICE */}

                                        <div className="cart-item-price">
                                            {formatPrice(item.price)}
                                        </div>

                                        {/* QUANTITY */}

                                        <div className="cart-quantity">

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleDecrease(item)
                                                }
                                                disabled={item.quantity <= 1}
                                            >
                                                <FiMinus />
                                            </button>

                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    handleInputQuantity(
                                                        item,
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleIncrease(item)
                                                }
                                            >
                                                <FiPlus />
                                            </button>

                                        </div>

                                        {/* DELETE */}

                                        <button
                                            type="button"
                                            className="cart-remove"
                                            onClick={() =>
                                                handleRemove(item.cartId)
                                            }
                                            aria-label="Xóa sản phẩm"
                                        >
                                            <FiX />
                                        </button>

                                    </div>
                                );
                            })}

                        </div>
                    </section>

                    {/* =========================
              RIGHT
          ========================= */}

                    <aside className="cart-summary-card">

                        <div className="cart-summary-header">
                            <h2>Xác nhận</h2>

                            <span>
                {selectedItems.length} sản phẩm
              </span>
                        </div>

                        <div className="cart-summary-divider" />

                        <div className="cart-summary-label">
                            Sản phẩm
                        </div>

                        <div className="cart-summary-products">

                            {selectedItems.length === 0 ? (
                                <p className="cart-no-selected">
                                    Chưa chọn sản phẩm
                                </p>
                            ) : (
                                selectedItems.map((item) => (
                                    <div
                                        className="cart-summary-product"
                                        key={item.cartId}
                                    >
                    <span>
                      {item.name}
                    </span>

                                        <strong>
                                            {formatPrice(
                                                item.price * item.quantity
                                            )}
                                        </strong>
                                    </div>
                                ))
                            )}

                        </div>

                        <div className="cart-summary-divider" />

                        <div className="cart-summary-row">
                            <span>Tạm tính</span>

                            <strong>
                                {formatPrice(totalPrice)}
                            </strong>
                        </div>

                        <div className="cart-summary-row discount-row">
                            <span>Ưu đãi</span>

                            <strong>
                                -0đ
                            </strong>
                        </div>

                        <div className="cart-summary-total">

                            <span>Tổng tiền</span>

                            <strong>
                                {formatPrice(totalPrice)}
                            </strong>

                        </div>

                        <button
                            className="cart-continue-button"
                            disabled={selectedItems.length === 0}
                            onClick={() => {
                                if (selectedItems.length === 0) return;

                                navigate("/checkout", {
                                    state: {
                                        selectedItems,
                                        totalPrice,
                                    },
                                });
                            }}
                        >
                            Tiếp tục
                        </button>

                    </aside>

                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default CartPage;