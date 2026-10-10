import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const formatPrice = (value) => {
    if (!value) return "0đ";
    return new Intl.NumberFormat("vi-VN").format(value) + "đ";
};

const extractProvince = (addressStr) => {
    if (!addressStr) return "";
    const parts = addressStr.split(",");
    return parts[parts.length - 1].trim();
};

function ProductCard({
                         product,
                         favorite = false,
                         onFavorite,
                         onAdd,
                         onBuy,
                     }) {
    const navigate = useNavigate();

    const image = product.images?.[0] || product.image;
    const price = Number(product.price || 0);
    const oldPrice = Number(product.oldPrice || product.originalPrice || 0);

    let discount = 0;
    if (oldPrice > price) {
        discount = Math.round(((oldPrice - price) / oldPrice) * 100);
    }

    const isOutOfStock =
        product.stock === 0 ||
        (product.stockText && product.stockText.toLowerCase().includes("hết"));

    const workshopName =
        product.workshopName ||
        (typeof product.workshop === "string"
            ? product.workshop
            : product.workshop?.name) ||
        "Xưởng Thảo Mộc";

    const provinceName =
        product.province ||
        extractProvince(product.location || product.address) ||
        product.origin ||
        "Hưng Yên";

    const handleCardClick = (e) => {
        if (
            e.target.closest("button") ||
            e.target.tagName === "BUTTON"
        ) {
            return;
        }
        navigate(`/customer/product/${product.id}`);
    };

    return (
        <article
            className={`product-card ${isOutOfStock ? "out-of-stock" : ""}`}
            onClick={handleCardClick}
            style={{ cursor: "pointer" }}
        >
            <div className="product-card-image">
                {product.badge && (
                    <span className="product-badge">{product.badge}</span>
                )}

                <button
                    type="button"
                    className={favorite ? "product-favorite active" : "product-favorite"}
                    onClick={(e) => {
                        e.stopPropagation();
                        onFavorite?.(product);
                    }}
                    aria-label="Yêu thích"
                >
                    ♥
                </button>

                {image ? (
                    <img
                        src={image}
                        alt={product.name}
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                            const fallback = e.currentTarget.parentElement.querySelector(
                                ".product-image-fallback"
                            );
                            if (fallback) fallback.style.display = "flex";
                        }}
                    />
                ) : null}

                <div
                    className="product-image-fallback"
                    style={{ display: image ? "none" : "flex" }}
                >
                    <small>Oilia</small>
                </div>
            </div>

            <div className="product-card-content">
                <div className="product-rating">
                    <strong>{product.rating || "5.0"}</strong>
                    <span>({product.reviews || "0"} đánh giá)</span>
                    <span className="product-sold">
                        Đã bán {product.sold || product.reviews || 0}
                    </span>
                </div>

                <h3 className="product-name">{product.name}</h3>

                {product.description && (
                    <p className="product-description">{product.description}</p>
                )}

                <div className="product-workshop-row">
                    <span className="workshop-name-text">{workshopName}</span>
                    <span className="workshop-province-text">{provinceName}</span>
                </div>

                <div className="product-divider" />

                <div className="product-price-row">
                    <div className="product-price">
                        <strong>{formatPrice(price)}</strong>
                        {oldPrice > price && (
                            <>
                                <del>{formatPrice(oldPrice)}</del>
                                <span className="discount">-{discount}%</span>
                            </>
                        )}
                        {product.variants?.[0]?.volume && (
                            <span>/{product.variants[0].volume}</span>
                        )}
                    </div>

                    <div className={isOutOfStock ? "stock-status out" : "stock-status"}>
                        <span />
                        {isOutOfStock ? "Hết hàng" : "Còn hàng"}
                    </div>
                </div>

                <div className="product-actions">
                    <button
                        type="button"
                        className="product-button add"
                        disabled={isOutOfStock}
                        onClick={(e) => {
                            e.stopPropagation();
                            onAdd?.(product);
                        }}
                    >
                        <span>Thêm giỏ</span>
                    </button>

                    <button
                        type="button"
                        className="product-button buy"
                        disabled={isOutOfStock}
                        onClick={(e) => {
                            e.stopPropagation();
                            onBuy?.(product);
                        }}
                    >
                        <span>Mua ngay</span>
                    </button>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;