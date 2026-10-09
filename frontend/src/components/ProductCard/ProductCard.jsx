import React from "react";

import "./ProductCard.css";

const formatPrice = (value) => {
    if (!value) return "0đ";

    return (
        new Intl.NumberFormat("vi-VN").format(value) +
        "đ"
    );
};

function ProductCard({
                         product,
                         favorite = false,
                         variant,
                         onFavorite,
                         onAdd,
                         onBuy,
                     }) {
    const image =
        product.images?.[0] ||
        product.image;

    const price =
        Number(product.price || 0);

    const oldPrice =
        Number(
            product.oldPrice ||
            product.originalPrice ||
            0
        );

    let discount = 0;

    if (oldPrice > price) {
        discount = Math.round(
            ((oldPrice - price) / oldPrice) * 100
        );
    }

    const stockText =
        product.stockText ||
        "Còn hàng";

    const isOutOfStock =
        stockText
            .toLowerCase()
            .includes("hết");

    const isLowStock =
        stockText
            .toLowerCase()
            .includes("sắp");

    return (
        <article className="product-card">

            {/* IMAGE */}
            <div className="product-card-image">

                {product.badge && (
                    <span className="product-badge">
                        {product.badge}
                    </span>
                )}

                <button
                    type="button"
                    className={
                        favorite
                            ? "product-favorite active"
                            : "product-favorite"
                    }
                    onClick={() =>
                        onFavorite?.(product)
                    }
                    aria-label="Yêu thích"
                >
                    ♥
                </button>

                {image ? (
                    <img
                        src={image}
                        alt={product.name}
                        onError={(e) => {
                            e.currentTarget.style.display =
                                "none";

                            const fallback =
                                e.currentTarget.parentElement.querySelector(
                                    ".product-image-fallback"
                                );

                            if (fallback) {
                                fallback.style.display =
                                    "flex";
                            }
                        }}
                    />
                ) : null}

                <div
                    className="product-image-fallback"
                    style={{
                        display: image
                            ? "none"
                            : "flex",
                    }}
                >
                    <span>🌿</span>
                    <small>
                        Oiila
                    </small>
                </div>

            </div>

            {/* CONTENT */}
            <div className="product-card-content">

                {/* Rating */}
                <div className="product-rating">

                    <span className="rating-star" style={{ color: "#f4a000" }}>
                        ★
                    </span>

                    <strong>
                        {product.rating || "5.0"}
                    </strong>

                    <span>
                        ({product.reviews || "0"} đánh giá)
                    </span>

                    <span className="product-sold" style={{ marginLeft: "auto", fontSize: "12px", color: "#666" }}>
                        Đã bán {product.sold || product.reviews || 0}
                    </span>

                </div>

                {/* Name */}
                <h3 className="product-name">
                    {product.name}
                </h3>

                {/* Description */}
                {product.description && (
                    <p className="product-description">
                        {product.description}
                    </p>
                )}

                {/* Origin */}
                {product.origin && (
                    <div className="product-origin">
                        <span>
                            {product.origin}
                        </span>
                    </div>
                )}

                <div className="product-divider" />

                {/* Price */}
                <div className="product-price-row">

                    <div className="product-price">

                        <strong>
                            {formatPrice(price)}
                        </strong>

                        {oldPrice > price && (
                            <>
                                <del style={{ fontSize: "13px", color: "#a2a7ad", marginLeft: "6px" }}>
                                    {formatPrice(oldPrice)}
                                </del>

                                <span className="discount" style={{ marginLeft: "6px" }}>
                                    -{discount}%
                                </span>
                            </>
                        )}

                        {product.variants?.[0]?.volume && (
                            <span>
                                /{product.variants[0].volume}
                            </span>
                        )}

                    </div>

                    <div
                        className={
                            isOutOfStock
                                ? "stock-status out"
                                : isLowStock
                                    ? "stock-status low"
                                    : "stock-status"
                        }
                    >
                        <span />
                        {stockText}
                    </div>

                </div>

                {/* Flash Sale Progress */}
                {variant === "flash" && (
                    <div style={{ marginTop: "8px" }}>
                        <div style={{ background: "#ffebee", borderRadius: "8px", height: "16px", position: "relative", overflow: "hidden" }}>
                            <div style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                height: "100%",
                                width: `${product.progress || 0}%`,
                                background: "linear-gradient(90deg, #ff4b2b 0%, #ff416c 100%)",
                                borderRadius: "8px"
                            }} />
                            <span style={{
                                position: "absolute",
                                width: "100%",
                                textAlign: "center",
                                fontSize: "10px",
                                color: product.progress > 50 ? "#fff" : "#d20b3b",
                                fontWeight: "bold",
                                lineHeight: "16px",
                                zIndex: 1
                            }}>
                                Đã bán {product.progress || 0}%
                            </span>
                        </div>
                    </div>
                )}

                {/* Buttons */}
                <div className="product-actions">

                    <button
                        type="button"
                        className={
                            isOutOfStock
                                ? "product-button add disabled"
                                : "product-button add"
                        }
                        disabled={isOutOfStock}
                        onClick={() =>
                            onAdd?.(product)
                        }
                    >
                        <span>Thêm giỏ</span>
                    </button>

                    <button
                        type="button"
                        className={
                            isOutOfStock
                                ? "product-button buy disabled"
                                : "product-button buy"
                        }
                        disabled={isOutOfStock}
                        onClick={() =>
                            onBuy?.(product)
                        }
                    >
                        <span>Mua ngay</span>
                    </button>

                </div>

            </div>

        </article>
    );
}

export default ProductCard;