import React, { useMemo, useState } from "react";
import { FiHeart, FiShoppingBag, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer";
import { productDatabase } from "../../../test/data";

import "../css/FavoriteProducts.css";

const products = productDatabase.products;
export default function FavoriteProducts() {
    const navigate = useNavigate();

    const [favorites, setFavorites] = useState(
        products.slice(0, 8).map((product) => product.id)
    );

    const favoriteProducts = useMemo(() => {
        return products
            .filter((product) => favorites.includes(product.id))
            .slice(0, 8);
    }, [favorites]);

    const removeFavorite = (id) => {
        setFavorites((prev) => prev.filter((item) => item !== id));
    };

    const formatPrice = (price) => {
        return `${Number(price || 0).toLocaleString("vi-VN")}đ`;
    };

    const getOldPrice = (product) => {
        if (product.oldPrice) return product.oldPrice;

        if (product.price) {
            return Math.round(Number(product.price) * 1.15);
        }

        return 0;
    };

    const getDiscount = (product) => {
        const oldPrice = getOldPrice(product);
        const price = Number(product.price || 0);

        if (!oldPrice || oldPrice <= price) return null;

        return Math.round(((oldPrice - price) / oldPrice) * 100);
    };

    return (
        <div className="favorite-page">
            <Header />

            <main className="favorite-main">

                {/* Breadcrumb */}
                <div className="favorite-breadcrumb">
                    <span>⌂ Trang chủ</span>
                    <span>/</span>
                    <span>Tài khoản</span>
                    <span>/</span>
                    <strong>Sản phẩm yêu thích</strong>
                </div>

                {/* Heading */}
                <div className="favorite-heading">
                    <div>
                        <div className="favorite-title-row">
                            <h1>Danh Sách Sản Phẩm Yêu Thích</h1>

                            <span className="favorite-count">
                                {favoriteProducts.length} sản phẩm
                            </span>
                        </div>

                        <p>
                            Lưu trữ các nốt hương và tinh dầu chủ đạo bạn quan tâm
                        </p>
                    </div>
                </div>

                {/* Empty */}
                {favoriteProducts.length === 0 ? (
                    <div className="favorite-empty">
                        <div className="favorite-empty-icon">
                            <FiHeart />
                        </div>

                        <h2>Danh sách yêu thích đang trống</h2>

                        <p>
                            Hãy thêm những sản phẩm bạn yêu thích để dễ dàng
                            tìm lại sau này.
                        </p>

                        <button
                            onClick={() => navigate("/customer/products")}
                        >
                            Khám phá sản phẩm
                            <FiArrowRight />
                        </button>
                    </div>
                ) : (
                    <div className="favorite-grid">
                        {favoriteProducts.map((product) => {
                            const discount = getDiscount(product);
                            const oldPrice = getOldPrice(product);

                            return (
                                <article
                                    className="favorite-card"
                                    key={product.id}
                                >
                                    {/* Image */}
                                    <div className="favorite-card-image">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            onError={(e) => {
                                                e.currentTarget.style.display =
                                                    "none";
                                            }}
                                        />

                                        <button
                                            className="favorite-heart"
                                            onClick={() =>
                                                removeFavorite(product.id)
                                            }
                                            title="Xóa khỏi yêu thích"
                                        >
                                            <FiHeart fill="currentColor" />
                                        </button>
                                    </div>

                                    {/* Rating */}
                                    <div className="favorite-rating">
                                        <span className="star">★</span>

                                        <strong>
                                            {product.rating || "5.0"}
                                        </strong>

                                        <span>
                                            ({product.reviews || "0"}+ đã bán)
                                        </span>
                                    </div>

                                    {/* Product name */}
                                    <h2
                                        className="favorite-product-name"
                                        title={product.name}
                                    >
                                        {product.name}
                                    </h2>

                                    {/* Description */}
                                    <p className="favorite-description">
                                        {product.description ||
                                            "Hương thơm tự nhiên, dễ chịu và phù hợp sử dụng hằng ngày."}
                                    </p>

                                    {/* Origin */}
                                    <div className="favorite-origin">
                                        <span>🌿</span>

                                        <span>
                                            {product.origin ||
                                                "Xưởng tinh dầu Oilia"}
                                        </span>
                                    </div>

                                    <div className="favorite-divider" />

                                    {/* Price */}
                                    <div className="favorite-price-row">
                                        <div>
                                            <div className="favorite-price">
                                                {formatPrice(product.price)}
                                            </div>

                                            {oldPrice > Number(product.price) && (
                                                <div className="favorite-old-price">
                                                    <span>
                                                        {formatPrice(oldPrice)}
                                                    </span>

                                                    {discount && (
                                                        <b>
                                                            -{discount}%
                                                        </b>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        <span className="favorite-stock">
                                            <i />
                                            {product.stock === 0
                                                ? "Hết hàng"
                                                : "Còn hàng"}
                                        </span>
                                    </div>

                                    {/* Actions */}
                                    <div className="favorite-actions">
                                        <button
                                            className="favorite-add-btn"
                                            onClick={() =>
                                                navigate(
                                                    `/customer/products/${product.id}`
                                                )
                                            }
                                        >
                                            <FiShoppingBag />
                                            Thêm giỏ
                                        </button>

                                        <button
                                            className="favorite-buy-btn"
                                            onClick={() =>
                                                navigate(
                                                    `/customer/products/${product.id}`
                                                )
                                            }
                                        >
                                            Mua ngay
                                        </button>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}

                {/* AI Banner */}
                {favoriteProducts.length > 0 && (
                    <section className="favorite-ai-banner">
                        <div className="favorite-ai-icon">✦</div>

                        <div className="favorite-ai-content">
                            <h3>
                                Chưa tìm thấy nốt hương hoàn hảo cho riêng bạn?
                            </h3>

                            <p>
                                Khởi tạo trải nghiệm khứu giác cá nhân hóa AI
                                Fragrance Quiz chỉ trong 60 giây để định hình
                                mùi hương phù hợp.
                            </p>
                        </div>

                        <button>
                            Khám phá ngay
                            <FiArrowRight />
                        </button>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
}