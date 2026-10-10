import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer";
import { productDatabase } from "../../../test/data.js";

import "../css/MyOrdersPage.css";

const products = productDatabase.products;

export default function MyOrdersPage() {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("all");
    const [expandedOrders, setExpandedOrders] = useState([]);

    const formatPrice = (price) => {
        return `${Number(price || 0).toLocaleString("vi-VN")}đ`;
    };

    const toggleExpandOrder = (orderId) => {
        setExpandedOrders((prev) =>
            prev.includes(orderId)
                ? prev.filter((id) => id !== orderId)
                : [...prev, orderId]
        );
    };

    const orders = useMemo(() => {
        const p1 = products[0];
        const p2 = products[1];
        const p3 = products[2];
        const p4 = products[3];

        return [
            {
                id: "#DH-89241",
                date: "18/10/2024",
                status: "success",
                statusText: "Giao hàng thành công",
                items: [
                    {
                        product: p1,
                        quantity: 1,
                        price: 350000,
                        volume: "10ml",
                        origin: "Pháp"
                    },
                    {
                        product: p2,
                        quantity: 1,
                        price: 450000,
                        volume: "30ml",
                        origin: "Úc"
                    }
                ],
                total: 800000
            },
            {
                id: "#DH-90115",
                date: "24/10/2024",
                status: "shipping",
                statusText: "Đang giao hàng",
                shipping: "Giao Hàng Tiết Kiệm (Dự kiến giao: Hôm nay)",
                items: [
                    {
                        product: p3,
                        quantity: 1,
                        price: 299000,
                        volume: "300ml",
                        origin: "Việt Nam"
                    },
                    {
                        product: p4,
                        quantity: 1,
                        price: 360000,
                        volume: "10ml",
                        origin: "Pháp"
                    }
                ],
                total: 659000
            },
            {
                id: "#DH-87520",
                date: "05/09/2024",
                status: "completed",
                statusText: "Hoàn thành",
                items: [
                    {
                        product: p1,
                        quantity: 2,
                        price: 390000,
                        volume: "15ml",
                        origin: "Pháp"
                    }
                ],
                total: 390000,
                reviewed: true
            },
            {
                id: "#DH-86102",
                date: "12/08/2024",
                status: "cancelled",
                statusText: "Đã hủy",
                cancelReason: "Khách hàng đổi ý",
                items: [
                    {
                        product: p2,
                        quantity: 1,
                        price: 250000,
                        volume: "200g",
                        origin: "Việt Nam"
                    }
                ],
                total: 250000
            }
        ];
    }, []);

    const tabs = [
        { id: "all", label: "Tất cả", count: orders.length },
        { id: "pending", label: "Chờ xác nhận", count: 0 },
        { id: "shipping", label: "Đang vận chuyển", count: orders.filter((o) => o.status === "shipping").length },
        { id: "success", label: "Đã giao hàng", count: orders.filter((o) => o.status === "success" || o.status === "completed").length },
        { id: "cancelled", label: "Đã hủy", count: orders.filter((o) => o.status === "cancelled").length }
    ];

    const filteredOrders = orders.filter((order) => {
        if (activeTab === "all") return true;
        if (activeTab === "pending") return order.status === "pending";
        if (activeTab === "shipping") return order.status === "shipping";
        if (activeTab === "success") return order.status === "success" || order.status === "completed";
        if (activeTab === "cancelled") return order.status === "cancelled";
        return true;
    });

    return (
        <div className="orders-page">
            <Header />

            <main className="orders-main">
                <div className="orders-master-card">
                    <div className="orders-master-header">
                        <div className="orders-heading-top">
                            <div>
                                <div className="orders-title-row">
                                    <h1>Đơn Hàng Của Tôi</h1>
                                    <span className="orders-count">{orders.length} đơn hàng</span>
                                </div>
                                <p>Theo dõi quá trình vận chuyển và quản lý đơn hàng mua sắm tại Oilia</p>
                            </div>

                            <button className="orders-support-btn" onClick={() => {}}>
                                Hỗ trợ đơn hàng
                            </button>
                        </div>

                        <div className="orders-tabs">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={activeTab === tab.id ? "order-tab active" : "order-tab"}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label} <span>({tab.count})</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="orders-master-body">
                        {filteredOrders.length === 0 ? (
                            <div className="orders-empty">
                                <h2>Chưa có đơn hàng</h2>
                                <p>Hiện chưa có đơn hàng nào trong mục này.</p>
                                <button onClick={() => navigate("/customer/products")}>
                                    Tiếp tục mua sắm
                                </button>
                            </div>
                        ) : (
                            <div className="orders-inner-list">
                                {filteredOrders.map((order) => {
                                    const isExpanded = expandedOrders.includes(order.id);
                                    const visibleItems = isExpanded ? order.items : order.items.slice(0, 1);
                                    const hasMoreItems = order.items.length > 1;

                                    return (
                                        <article className="order-inner-box" key={order.id}>
                                            <div className="order-card-header">
                                                <div className="order-meta">
                                                    <div>
                                                        <small>MÃ ĐƠN HÀNG</small>
                                                        <strong>{order.id}</strong>
                                                    </div>

                                                    <div>
                                                        <small>NGÀY ĐẶT HÀNG</small>
                                                        <strong>{order.date}</strong>
                                                    </div>

                                                    {order.shipping && (
                                                        <div className="order-shipping-info">
                                                            <small>ĐƠN VỊ VẬN CHUYỂN</small>
                                                            <strong>{order.shipping}</strong>
                                                        </div>
                                                    )}
                                                </div>

                                                <span className={`order-status order-status--${order.status}`}>
                                                    {order.statusText}
                                                </span>
                                            </div>

                                            <div className="order-products">
                                                {visibleItems.map((item, index) => (
                                                    <div className="order-product-row" key={`${order.id}-${index}`}>
                                                        <div className="order-product-left">
                                                            <div className="order-product-image">
                                                                <img
                                                                    src={item.product?.image}
                                                                    alt={item.product?.name || "Sản phẩm"}
                                                                />
                                                            </div>

                                                            <div className="order-product-info">
                                                                <h3>{item.product?.name || "Sản phẩm tinh dầu"}</h3>
                                                                <p>
                                                                    Dung tích: {item.volume} • Xuất xứ: {item.origin}
                                                                </p>
                                                                <span>Số lượng: x{item.quantity}</span>
                                                            </div>
                                                        </div>

                                                        <strong className="order-product-price">
                                                            {formatPrice(item.price)}
                                                        </strong>
                                                    </div>
                                                ))}

                                                {hasMoreItems && (
                                                    <div className="order-expand-row">
                                                        <button
                                                            type="button"
                                                            className="btn-toggle-expand"
                                                            onClick={() => toggleExpandOrder(order.id)}
                                                        >
                                                            {isExpanded
                                                                ? "Thu gọn danh sách ▲"
                                                                : `Xem thêm ${order.items.length - 1} sản phẩm khác ▾`}
                                                        </button>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="order-card-footer">
                                                <div className="order-total">
                                                    <span>
                                                        Tổng cộng ({order.items.reduce((sum, item) => sum + item.quantity, 0)} sản phẩm):
                                                    </span>
                                                    <strong>{formatPrice(order.total)}</strong>
                                                </div>

                                                <div className="order-actions">
                                                    {order.status === "success" && (
                                                        <button
                                                            className="btn-secondary"
                                                            onClick={() => navigate("/customer/write-review")}
                                                        >
                                                            {order.reviewed ? "Đã đánh giá" : "Đánh giá sản phẩm"}
                                                        </button>
                                                    )}

                                                    {order.status === "shipping" && (
                                                        <button className="btn-secondary">
                                                            Liên hệ hỗ trợ
                                                        </button>
                                                    )}

                                                    <button
                                                        className="btn-secondary"
                                                        onClick={() => toggleExpandOrder(order.id)}
                                                    >
                                                        {isExpanded ? "Thu gọn" : "Xem chi tiết"}
                                                    </button>

                                                    {order.status === "shipping" && (
                                                        <button className="btn-primary">
                                                            Theo dõi đơn hàng
                                                        </button>
                                                    )}

                                                    {(order.status === "success" || order.status === "completed" || order.status === "cancelled") && (
                                                        <button className="btn-primary">
                                                            Mua lại đơn này
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {filteredOrders.length > 0 && (
                        <div className="orders-pagination">
                            <span>
                                Hiển thị 1 - {filteredOrders.length} của {orders.length} đơn hàng
                            </span>

                            <div>
                                <button disabled>‹</button>
                                <button className="active">1</button>
                                <button>2</button>
                                <button>›</button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}