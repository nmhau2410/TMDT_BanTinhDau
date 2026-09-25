import React from "react";
import "./ProductCard.css";

const formatPrice = (value) =>
  new Intl.NumberFormat("vi-VN").format(value) + "đ";

export default function ProductCard({
  product,
  variant = "default",
  onAdd,
  onBuy,
}) {
  const isFlash = variant === "flash";
  const isBest = variant === "best";

  return (
    <article className={`product-card product-card--${variant}`}>
      {product.badge && <span className="product-card__badge">{product.badge}</span>}

      <div className="product-card__image">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.classList.add("product-card__image--fallback");
          }}
        />
      </div>

      <div className="product-card__content">
        {isFlash && product.category && (
          <span className="product-card__category">{product.category}</span>
        )}

        {isBest && (
          <div className="product-card__rating">
            <span className="product-card__star">★</span>
            <strong>{product.rating}</strong>
            <span>({product.reviews})</span>
          </div>
        )}

        <h3 className="product-card__name">{product.name}</h3>

        {product.description && (
          <p className="product-card__description">{product.description}</p>
        )}

        <p className="product-card__origin">
          <span>⌁</span> {product.origin}
        </p>

        {isFlash && (
          <div className="product-card__progress">
            <div className="product-card__progress-track">
              <span style={{ width: `${product.progress || 0}%` }} />
            </div>
            <div className="product-card__progress-info">
              <span>Đã bán {product.progress || 0}%</span>
              <span>{product.stockText}</span>
            </div>
          </div>
        )}

        <div className="product-card__bottom">
          <div className="product-card__prices">
            <strong>{formatPrice(product.price)}</strong>
            {product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}
          </div>

          {isFlash ? (
            <button
              className="product-card__buy"
              onClick={() => onBuy?.(product)}
            >
              🛒 Mua ngay
            </button>
          ) : isBest ? (
            <button
              className="product-card__buy"
              onClick={() => onAdd?.(product)}
            >
              Chọn mua
            </button>
          ) : (
            <button
              className="product-card__add"
              aria-label={`Thêm ${product.name}`}
              onClick={() => onAdd?.(product)}
            >
              +
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
