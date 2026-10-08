import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import "../css/CartPage.css";

const formatPrice = (v) => new Intl.NumberFormat("vi-VN").format(v) + "d";

const INITIAL_ITEMS = [
    { id: 1, name: "Tinh Dau Oai Huong True Lavender", variant: "10ml", price: 182000, image: null, qty: 1, workshop: "Xuong Provence Farm" },
    { id: 2, name: "Tinh Dau Buoi Hong Ep Lanh", variant: "30ml", price: 215000, image: null, qty: 2, workshop: "Xuong Da Lat Organic" },
    { id: 3, name: "Tinh Dau Deep Sleep", variant: "10ml", price: 158000, image: null, qty: 1, workshop: "Xuong Nordic Blend" },
];

export default function CartPage() {
    const navigate = useNavigate();
    const [items, setItems] = useState(INITIAL_ITEMS);
    const [voucher, setVoucher] = useState("");
    const [voucherApplied, setVoucherApplied] = useState(false);

    const updateQty = (id, delta) => {
        setItems((prev) =>
            prev.map((item) => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item)
        );
    };
    const removeItem = (id) => setItems((prev) => prev.filter((item) => item.id !== id));

    const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
    const shipping = subtotal >= 500000 ? 0 : 30000;
    const discount = voucherApplied ? Math.round(subtotal * 0.1) : 0;
    const total = subtotal + shipping - discount;

    return (
        <div className="cart-page">
            <Header />
            <main className="cart-main">
                <div className="cart-breadcrumb">
                    <Link to="/">Trang chu</Link>
                    <span>/</span>
                    <strong>Gio hang</strong>
                </div>

                <h1 className="cart-title">Gio hang <span className="cart-count">({items.length} san pham)</span></h1>

                {items.length === 0 ? (
                    <div className="cart-empty">
                        <div className="cart-empty__icon">🛒</div>
                        <h2>Gio hang trong</h2>
                        <p>Ban chua them san pham nao vao gio hang.</p>
                        <Link to="/products" className="cart-empty__btn">Kham pha san pham</Link>
                    </div>
                ) : (
                    <div className="cart-layout">
                        <div className="cart-items">
                            {items.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item__img">
                                        <div className="cart-item__fallback">🌿</div>
                                    </div>
                                    <div className="cart-item__info">
                                        <Link to={`/products/${item.id}`} className="cart-item__name">{item.name}</Link>
                                        <div className="cart-item__meta">
                                            <span className="cart-item__variant">{item.variant}</span>
                                            <span className="cart-item__workshop">❧ {item.workshop}</span>
                                        </div>
                                        <div className="cart-item__price">{formatPrice(item.price)}</div>
                                    </div>
                                    <div className="cart-item__actions">
                                        <div className="cart-item__qty">
                                            <button type="button" onClick={() => updateQty(item.id, -1)}>−</button>
                                            <span>{item.qty}</span>
                                            <button type="button" onClick={() => updateQty(item.id, 1)}>+</button>
                                        </div>
                                        <div className="cart-item__subtotal">{formatPrice(item.price * item.qty)}</div>
                                        <button type="button" className="cart-item__remove" onClick={() => removeItem(item.id)}>✕</button>
                                    </div>
                                </div>
                            ))}
                            <div className="cart-continue">
                                <Link to="/products">← Tiep tuc mua sam</Link>
                            </div>
                        </div>

                        <div className="cart-summary">
                            <h2>Tom tat don hang</h2>
                            <div className="cart-voucher">
                                <input type="text" placeholder="Nhap ma giam gia..." value={voucher} onChange={(e) => setVoucher(e.target.value)} />
                                <button type="button" className={voucherApplied ? "applied" : ""} onClick={() => { if (voucher.trim()) setVoucherApplied(true); }}>
                                    {voucherApplied ? "Da ap dung" : "Ap dung"}
                                </button>
                            </div>
                            <div className="cart-summary__rows">
                                <div className="cart-summary__row"><span>Tam tinh</span><span>{formatPrice(subtotal)}</span></div>
                                <div className="cart-summary__row"><span>Van chuyen</span><span>{shipping === 0 ? <em className="free">Mien phi</em> : formatPrice(shipping)}</span></div>
                                {discount > 0 && <div className="cart-summary__row discount"><span>Giam gia (10%)</span><span>-{formatPrice(discount)}</span></div>}
                                <div className="cart-summary__divider" />
                                <div className="cart-summary__row total"><strong>Tong cong</strong><strong>{formatPrice(total)}</strong></div>
                            </div>
                            {shipping === 0
                                ? <div className="cart-free-ship">🎉 Ban duoc mien phi van chuyen!</div>
                                : <div className="cart-free-ship-hint">Mua them <strong>{formatPrice(500000 - subtotal)}</strong> de duoc mien phi van chuyen</div>
                            }
                            <button type="button" className="cart-checkout-btn" onClick={() => navigate("/checkout")}>Tien hanh dat hang →</button>
                            <div className="cart-security">🔒 Thanh toan bao mat | Hoan tien 100%</div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
