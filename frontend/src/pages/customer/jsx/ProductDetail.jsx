import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import { productDatabase } from "../../../test/data.js";
import "../css/ProductDetail.css";

const money = (value) =>
    new Intl.NumberFormat("vi-VN").format(value) + "đ";

export default function ProductDetail() {
    const { id } = useParams();

    const product = productDatabase.products.find(
        (item) => Number(item.id) === Number(id)
    );


    const [selectedVariantId, setSelectedVariantId] = useState(
        product?.variants?.[0]?.id
    );
    const [activeImage, setActiveImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [favorite, setFavorite] = useState(false);
    const [open, setOpen] = useState("scent");

    if (!product) {
        return (
            <div className="product-detail-empty">
                Không tìm thấy sản phẩm.
            </div>
        );
    }

    const variant =
        product.variants?.find((item) => item.id === selectedVariantId) ||
        product.variants?.[0];

    const images =
        product.images?.length > 0
            ? product.images
            : product.image
                ? [product.image]
                : [];

    /*
     * Các sản phẩm này đều tồn tại trong data.js.
     * Dùng ID để phần "Gợi ý phối hương hoàn hảo" giống bố cục ảnh mẫu.
     * Nếu sản phẩm hiện tại trùng một ID thì tự bỏ nó ra.
     */
    const recommendationIds = [307, 306, 305, 301];

    const recommendations = useMemo(() => {
        return recommendationIds
            .map((id) =>
                productDatabase.products.find((item) => item.id === id)
            )
            .filter(Boolean)
            .filter((item) => item.id !== product.id);
    }, [product.id]);

    const discount =
        variant?.discount ??
        (variant?.originalPrice
            ? Math.round(
                ((variant.originalPrice - variant.price) /
                    variant.originalPrice) *
                100
            )
            : 0);

    const toggle = (name) => {
        setOpen((current) => (current === name ? "" : name));
    };

    return (
        <>
        <Header />
        <main className="product-detail">
            <div className="pd-wrap">
                {/* ================= BREADCRUMB ================= */}
                <div className="pd-breadcrumb">
                    <span>Trang chủ</span>
                    <b>/</b>
                    <span>Tinh dầu đơn hương</span>
                    <b>/</b>
                    <strong>{product.name}</strong>
                </div>

                {/* ================= PRODUCT ================= */}
                <section className="pd-card">
                    {/* LEFT - IMAGE */}
                    <div className="pd-gallery">
                        <div className="pd-main-photo">
                            {images[activeImage] && (
                                <img
                                    src={images[activeImage]}
                                    alt={product.name}
                                />
                            )}
                        </div>

                        <div className="pd-thumbs">
                            {images.map((src, index) => (
                                <button
                                    key={`${src}-${index}`}
                                    type="button"
                                    className={activeImage === index ? "active" : ""}
                                    onClick={() => setActiveImage(index)}
                                >
                                    <img src={src} alt="" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT - INFO */}
                    <div className="pd-info">
                        <div className="pd-top-badges">
              <span className="pd-origin">
                <i>✓</i>
                  {product.origin}
              </span>

                            <span className="pd-code">
                <i />
                Mã lô: #{product.productCode}
              </span>
                        </div>

                        <div className="pd-title-line">
                            <div>
                                <h1>{product.name}</h1>

                                <div className="pd-rating">
                                    <span className="stars">★★★★★</span>
                                    <strong>{product.rating}</strong>
                                    <span>•</span>
                                    <span>({product.reviews} đánh giá</span>
                                    <span>• Đã bán {product.sold})</span>
                                </div>
                            </div>

                            <button
                                type="button"
                                className={`pd-favorite ${favorite ? "selected" : ""}`}
                                onClick={() => setFavorite(!favorite)}
                                aria-label="Yêu thích"
                            >
                                {favorite ? "♥" : "♡"}
                            </button>
                        </div>

                        <p className="pd-description">
                            {product.description}
                        </p>

                        {/* PRICE */}
                        <div className="pd-price-area">
                            <div className="pd-price-content">
                                <strong>{money(variant.price)}</strong>

                                {variant.originalPrice && (
                                    <del>{money(variant.originalPrice)}</del>
                                )}

                                {discount > 0 && (
                                    <span className="pd-sale">-{discount}%</span>
                                )}
                            </div>

                            <span className="pd-stock">
                <i /> {product.stockText || "Còn hàng"}
              </span>
                        </div>

                        {/* VARIANTS */}
                        <div className="pd-variant-title">
                            <strong>Dung tích</strong>
                            <span>
                ĐÃ CHỌN: {variant.volume} (DÙNG THỬ)
              </span>
                        </div>

                        <div className="pd-variants">
                            {product.variants?.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    className={
                                        variant.id === item.id ? "selected" : ""
                                    }
                                    onClick={() => {
                                        setSelectedVariantId(item.id);
                                        setActiveImage(0);
                                    }}
                                >
                                    <strong>{item.volume}</strong>
                                    <span>{money(item.price)}</span>

                                    {item.discount > 0 && (
                                        <small>-{item.discount}%</small>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* BUY */}
                        <div className="pd-buy">
                            <div className="pd-quantity">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setQuantity((value) =>
                                            Math.max(1, value - 1)
                                        )
                                    }
                                >
                                    −
                                </button>

                                <span>{quantity}</span>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setQuantity((value) => value + 1)
                                    }
                                >
                                    +
                                </button>
                            </div>

                            <button type="button" className="pd-cart">
                                <span>♧</span>
                                Thêm vào giỏ
                            </button>

                            <button type="button" className="pd-buy-now">
                                <span>ϟ</span>
                                Mua ngay
                            </button>
                        </div>

                        {/* BENEFITS */}
                        <div className="pd-benefits">
                            <div>
                                <i>✓</i>
                                100% Tự nhiên
                            </div>
                            <div>
                                <i>↻</i>
                                Đổi trả 15 ngày
                            </div>
                            <div>
                                <i>▣</i>
                                Giao hỏa tốc 2H
                            </div>
                        </div>
                    </div>

                    {/* ================= DETAILS ================= */}
                    <div className="pd-details">
                        <Accordion
                            icon="♧"
                            title="Tầng hương & Thành phần"
                            open={open === "scent"}
                            onClick={() => toggle("scent")}
                        >
                            <div className="pd-detail-row">
                                <span>Hợp chất chính:</span>
                                <strong>{product.scent}</strong>
                            </div>

                            <div className="pd-detail-row">
                                <span>Tầng hương:</span>
                                <strong>{product.description}</strong>
                            </div>
                        </Accordion>

                        <Accordion
                            icon="♧"
                            title="Nguồn gốc & Phương pháp chưng cất"
                            open={open === "origin"}
                            onClick={() => toggle("origin")}
                        >
                            <p>{product.originDetail}</p>
                            <p>{product.distillation}</p>
                        </Accordion>

                        <Accordion
                            icon="◉"
                            title="Hướng dẫn sử dụng"
                            open={open === "usage"}
                            onClick={() => toggle("usage")}
                        >
                            <p>{product.usage}</p>
                        </Accordion>
                    </div>
                </section>
            </div>

            {/* ================= RECOMMENDATIONS ================= */}
            <section className="pd-recommend">
                <div className="pd-wrap">
                    <div className="pd-recommend-head">
                        <h2>Gợi ý phối hương hoàn hảo</h2>
                        <button type="button">
                            Xem tất cả sản phẩm →
                        </button>
                    </div>

                    <div className="pd-products">
                        {recommendations.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    );
}

function Accordion({
                       icon,
                       title,
                       open,
                       onClick,
                       children,
                   }) {
    return (
        <div className={`pd-accordion ${open ? "open" : ""}`}>
            <button
                type="button"
                className="pd-accordion-head"
                onClick={onClick}
            >
        <span>
          <i>{icon}</i>
            {title}
        </span>
                <b>{open ? "⌃" : "⌄"}</b>
            </button>

            {open && (
                <div className="pd-accordion-content">
                    {children}
                </div>
            )}
        </div>
    );
}

function ProductCard({ product }) {
    const variant = product.variants?.[0];
    const image = product.images?.[0] || product.image;

    return (
        <article className="pd-product-card">
            <div className="pd-product-image">
                <img src={image} alt={product.name} />

                <button
                    type="button"
                    className="pd-card-heart"
                    aria-label="Yêu thích"
                >
                    ♡
                </button>
            </div>

            <div className="pd-product-body">
                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <div className="pd-card-rating">
                    <span>★</span>
                    <strong>{product.rating}</strong>
                    <small>({product.reviews} đã bán)</small>
                </div>

                <div className="pd-card-origin">
                    <i>✓</i>
                    {product.origin}
                </div>

                <div className="pd-card-price">
                    <div>
                        <strong>{money(variant.price)}</strong>
                        {variant.originalPrice && (
                            <del>{money(variant.originalPrice)}</del>
                        )}
                        {variant.discount > 0 && (
                            <small>-{variant.discount}%</small>
                        )}
                    </div>

                    <span>● Còn hàng</span>
                </div>

                <div className="pd-card-actions">
                    <button type="button">♧ Thêm giỏ</button>
                    <button type="button">ϟ Mua ngay</button>
                </div>
            </div>
        </article>
    );
}
