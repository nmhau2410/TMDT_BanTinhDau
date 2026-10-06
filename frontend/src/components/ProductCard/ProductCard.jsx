import React from "react";
import {
    FiHeart,
    FiShoppingBag,
    FiZap,
} from "react-icons/fi";

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
            ((oldPrice - price) / oldPrice) *
            100
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

            {/* =========================
          IMAGE
      ========================= */}

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
                    <FiHeart />
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

            {/* =========================
          CONTENT
      ========================= */}

            <div className="product-card-content">

                {/* Rating */}

                <div className="product-rating">

          <span className="rating-star">
            ★
          </span>

                    <strong>
                        {product.rating || "5.0"}
                    </strong>

                    <span>
            (
                        {product.reviews || "0"}
                        + đã bán)
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
              ❧
            </span>

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

                {/* Old price */}

                <div className="product-old-price">

                    {oldPrice > price && (
                        <>
                            <del>
                                {formatPrice(oldPrice)}
                            </del>

                            <span className="discount">
                -{discount}%
              </span>
                        </>
                    )}

                </div>

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
                        <FiShoppingBag />

                        <span>
              Thêm giỏ
            </span>
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
                        <FiZap />

                        <span>
              Mua ngay
            </span>
                    </button>

                </div>

            </div>

        </article>
    );
}

export default ProductCard;