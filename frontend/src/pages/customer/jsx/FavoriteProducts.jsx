import React, { useMemo, useState } from "react";
import { FiHeart, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer";
import ProductCard from "../../../components/ProductCard/ProductCard.jsx";
import { addToCart } from "../../../services/CartService.js";
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

    const toggleFavorite = (product) => {
        setFavorites((prev) =>
            prev.includes(product.id)
                ? prev.filter((id) => id !== product.id)
                : [...prev, product.id]
        );
    };

    const handleAdd = (product) => {
        if (!product) return;
        addToCart(product, 1);
        alert(`Đã thêm "${product.name}" vào giỏ hàng`);
    };

    const handleBuy = (product) => {
        if (!product) return;
        addToCart(product, 1);
        navigate("/customer/cart");
    };

    return (
        <div className="favorite-page">
            <Header />

            <main className="favorite-main">
                <div className="favorite-header-banner">
                    <div className="favorite-title-row">
                        <h1 className="favorite-page-title">Sản Phẩm Yêu Thích</h1>
                        <span className="favorite-count">{favoriteProducts.length} sản phẩm</span>
                    </div>
                    <p className="favorite-page-desc">
                        Lưu trữ danh sách các nốt hương và tinh dầu thiên nhiên tinh tuyển bạn đã yêu thích.
                    </p>
                </div>

                {favoriteProducts.length === 0 ? (
                    <div className="favorite-empty">
                        <div className="favorite-empty-icon">
                            <FiHeart />
                        </div>
                        <h2>Danh sách yêu thích đang trống</h2>
                        <p>
                            Hãy thêm những sản phẩm bạn yêu thích để dễ dàng tìm lại sau này.
                        </p>
                        <button onClick={() => navigate("/customer/products")}>
                            Khám phá sản phẩm <FiArrowRight />
                        </button>
                    </div>
                ) : (
                    <div className="favorite-grid">
                        {favoriteProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                favorite={true}
                                onFavorite={() => toggleFavorite(product)}
                                onAdd={handleAdd}
                                onBuy={handleBuy}
                            />
                        ))}
                    </div>
                )}

                {favoriteProducts.length > 0 && (
                    <section className="favorite-ai-banner">
                        <div className="favorite-ai-icon">✦</div>
                        <div className="favorite-ai-content">
                            <h3>Chưa tìm thấy nốt hương hoàn hảo cho riêng bạn?</h3>
                            <p>
                                Khởi tạo trải nghiệm khứu giác cá nhân hóa AI Fragrance Quiz chỉ trong 60 giây để định hình mùi hương phù hợp.
                            </p>
                        </div>
                        <button onClick={() => navigate("/customer/custom-perfume")}>
                            Khám phá ngay <FiArrowRight />
                        </button>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
}