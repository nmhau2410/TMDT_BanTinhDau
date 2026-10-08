import React from "react";
import {
    FiShoppingCart,
    FiPlus,
    FiHeart,
    FiStar,
} from "react-icons/fi";

import { Link } from "react-router-dom";
import "./HomeProductCard.css";

const formatPrice = (value) => {
    return new Intl.NumberFormat("vi-VN").format(
        Number(value || 0)
    ) + "đ";
};

export default function HomeProductCard({
                                            product,
                                            variant = "new",
                                            onAdd,
                                            onBuy,
                                        }) {
    if (!product) return null;

    /* =====================================================
       FLASH SALE
    ===================================================== */

    if (variant === "flash") {
        return (
            <article className="home-card home-card--flash">

                <Link to={`/products/${product.id || 1}`} className="home-card__image">
                    <img
                        src={product.image}
                        alt={product.name}
                    />

                    {product.badge && (
                        <span className="home-card__badge">
                            {product.badge}
                        </span>
                    )}
                </Link>

                <div className="home-card__category">
                    {product.categoryLabel ||
                        "THẢO MỘC THIÊN NHIÊN"}
                </div>

                <Link to={`/products/${product.id || 1}`}>
                    <h3 className="home-card__name">
                        {product.name}
                    </h3>
                </Link>

                <p className="home-card__origin">
                    ◇ {product.origin}
                </p>

                <div className="home-card__price">
                    <strong>
                        {formatPrice(product.price)}
                    </strong>

                    {product.oldPrice && (
                        <del>
                            {formatPrice(product.oldPrice)}
                        </del>
                    )}
                </div>

                <div className="home-card__progress">
                    <span
                        style={{
                            width: `${product.progress || 0}%`,
                        }}
                    />
                </div>

                <div className="home-card__stock">
                    <span>
                        Đã bán {product.progress || 0}%
                    </span>

                    <span>
                        {product.stockText || ""}
                    </span>
                </div>

                <button
                    className="home-card__buy"
                    type="button"
                    onClick={() => onBuy?.(product)}
                >
                    <FiShoppingCart />
                    Mua ngay
                </button>

            </article>
        );
    }


    /* =====================================================
       SẢN PHẨM MỚI
    ===================================================== */

    if (variant === "new") {
        return (
            <article className="home-card home-card--new">

                <Link to={`/products/${product.id || 1}`} className="home-card__image">

                    <img
                        src={product.image}
                        alt={product.name}
                    />

                    <span className="home-card__badge">
                        Mới
                    </span>

                </Link>

                <div className="home-card__category">
                    {product.categoryLabel ||
                        "BỘ SƯU TẬP MỚI"}
                </div>

                <Link to={`/products/${product.id || 1}`}>
                    <h3 className="home-card__name">
                        {product.name}
                    </h3>
                </Link>

                <p className="home-card__description">
                    {product.description ||
                        "Sản phẩm mới từ thiên nhiên"}
                </p>

                <p className="home-card__origin">
                    ◇ {product.origin}
                </p>

                <div className="home-card__new-footer">

                    <strong>
                        {formatPrice(product.price)}
                    </strong>

                    <button
                        className="home-card__plus"
                        type="button"
                        onClick={() => onAdd?.(product)}
                        aria-label={`Thêm ${product.name}`}
                    >
                        <FiPlus />
                    </button>

                </div>

            </article>
        );
    }


    /* =====================================================
       TOP BÁN CHẠY
    ===================================================== */

    return (
        <article className="home-card home-card--best">

            <Link to={`/products/${product.id || 1}`} className="home-card__image">

                <img
                    src={product.image}
                    alt={product.name}
                />

            </Link>

            <div className="home-card__rating">

                <FiStar />

                <strong>
                    {product.rating || "4.9"}
                </strong>

                <span>
                    ({product.reviews || "0"} đã bán)
                </span>

            </div>

            <Link to={`/products/${product.id || 1}`}>
                <h3 className="home-card__name">
                    {product.name}
                </h3>
            </Link>

            <p className="home-card__description">
                {product.description ||
                    "Tinh dầu thiên nhiên nguyên chất"}
            </p>

            <p className="home-card__origin">
                ◇ {product.origin}
            </p>

            <div className="home-card__best-footer">

                <strong>
                    {formatPrice(product.price)}
                </strong>

                <button
                    className="home-card__heart"
                    type="button"
                    aria-label="Yêu thích"
                >
                    <FiHeart />
                </button>

                <button
                    className="home-card__choose"
                    type="button"
                    onClick={() => onAdd?.(product)}
                >
                    Chọn mua
                </button>

            </div>

        </article>
    );
}