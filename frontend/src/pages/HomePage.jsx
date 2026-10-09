import React, { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard/ProductCard";
import SkeletonProductCard from "../components/ProductCard/SkeletonProductCard.jsx";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import {
    addToCart,
    buyProduct,
    formatCountdown,
    getBestSellerProducts,
    getHomeData,
    handlePromotionAction,
} from "../services/HomeService.js";

import "./HomePage.css";

const INITIAL_COUNTDOWN = 2 * 3600 + 45 * 60 + 18;

export default function HomePage() {
    const [data, setData] = useState(null);
    const [activeTab, setActiveTab] = useState("Tất cả");
    const [savedVoucher, setSavedVoucher] = useState(null);
    const [countdown, setCountdown] = useState(INITIAL_COUNTDOWN);

    useEffect(() => {
        getHomeData().then((result) => {
            setData(result);
        });
    }, []);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setCountdown((value) => {
                if (value > 0) {
                    return value - 1;
                }
                return INITIAL_COUNTDOWN;
            });
        }, 1000);

        return () => {
            window.clearInterval(timer);
        };
    }, []);

    if (!data) {
        return (
            <>
                <Header />
                <main className="home-page">
                    <section className="home-container home-loading">
                        <div className="skeleton hero-skeleton" />
                        <div className="skeleton-section-title" />
                        <div className="product-grid product-grid--4">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <SkeletonProductCard key={index} />
                            ))}
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        );
    }

    const bestProducts = getBestSellerProducts(data, activeTab);
    const countdownTime = formatCountdown(countdown);

    const handlePromotion = (promotion) => {
        const result = handlePromotionAction(promotion);
        if (result === "voucher") {
            setSavedVoucher(promotion.id);
        }
    };

    return (
        <>
            <Header />

            <main className="home-page">
                <section className="home-container hero">
                    <div className="hero__copy">
                        <span className="hero__badge">
                            THẾ GIỚI TINH DẦU THIÊN NHIÊN
                        </span>

                        <h1>
                            Khơi Nguồn Cảm Hứng
                            <br />
                            Cân Bằng Cảm Xúc
                        </h1>

                        <p>
                            Oilia là sàn thương mại điện tử chuyên cung cấp các sản
                            phẩm tinh dầu, nến thơm nguyên chất từ thiên nhiên mang lại
                            sự thư giãn.
                        </p>

                        <div className="hero__actions">
                            <a href="#flash-sale" className="hero__primary">
                                Khám phá ngay
                            </a>
                            <a href="#new-products" className="hero__secondary">
                                Xem sản phẩm mới
                            </a>
                        </div>
                    </div>

                    <div className="hero__image-wrap">
                        <img
                            src="https://images.unsplash.com/photo-1608528577891-eb0559d3810a?q=80&w=1200&auto=format&fit=crop"
                            alt="Thế giới tinh dầu thiên nhiên"
                            onError={(e) => {
                                e.target.src =
                                    "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop";
                            }}
                        />
                    </div>
                </section>

                <section id="flash-sale" className="home-container section-box">
                    <div className="section-heading section-heading--flash">
                        <div className="flash-heading">
                            <span className="flash-label">FLASH SALE</span>

                            <div className="countdown-group">
                                <span className="countdown-box">{countdownTime.hours}</span>
                                <b>:</b>
                                <span className="countdown-box">{countdownTime.minutes}</span>
                                <b>:</b>
                                <span className="countdown-box countdown-box--highlight">
                                    {countdownTime.seconds}
                                </span>
                            </div>

                            <span className="countdown-note"></span>
                        </div>

                        <a
                            className="section-link"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                        >
                            Xem tất cả ›
                        </a>
                    </div>

                    <div className="product-grid product-grid--3">
                        {data.flashSales?.slice(0, 3).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                variant="flash"
                                onAdd={() => addToCart(product)}
                                onBuy={() => buyProduct(product)}
                            />
                        ))}
                    </div>
                </section>

                <section id="new-products" className="home-container section">
                    <div className="section-heading">
                        <div>
                            <span className="section-eyebrow">BỘ SƯU TẬP MÙA NÀY</span>
                            <h2>Sản Phẩm Mới Về</h2>
                        </div>

                        <a
                            className="section-link"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                        >
                            Xem tất cả →
                        </a>
                    </div>

                    <div className="product-grid product-grid--4">
                        {data.newProducts?.slice(0, 4).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAdd={() => addToCart(product)}
                                onBuy={() => buyProduct(product)}
                            />
                        ))}
                    </div>
                </section>

                <section className="home-container section">
                    <div className="section-heading section-heading--best">
                        <div>
                            <span className="section-eyebrow section-eyebrow--highlight">
                                ĐƯỢC YÊU THÍCH NHẤT
                            </span>
                            <h2>Top Sản Phẩm Bán Chạy</h2>
                        </div>

                        <div className="filter-tabs">
                            {Object.keys(data.bestSellerTabs || {}).map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    className={activeTab === tab ? "active" : ""}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="product-grid product-grid--4">
                        {bestProducts?.slice(0, 8).map((product) => (
                            <ProductCard
                                key={`${activeTab}-${product.id}`}
                                product={product}
                                onAdd={() => addToCart(product)}
                                onBuy={() => buyProduct(product)}
                            />
                        ))}
                    </div>
                </section>

                <section className="home-container promotion-grid">
                    {data.promotions?.map((promotion) => (
                        <article
                            key={promotion.id}
                            className="promotion-card"
                            style={{
                                backgroundImage: `url(${promotion.image})`,
                            }}
                        >
                            <div className="promotion-card__overlay" />

                            <div className="promotion-card__content">
                                <span>{promotion.badge}</span>
                                <h3>{promotion.title}</h3>
                                <p>{promotion.description}</p>

                                <button
                                    type="button"
                                    onClick={() => handlePromotion(promotion)}
                                >
                                    {savedVoucher === promotion.id
                                        ? "Đã lưu voucher"
                                        : promotion.button}

                                </button>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="home-container personalize-banner">
                    <div className="personalize-banner__text">
                        <span className="personalize-banner__badge">TƯ VẤN CÁ NHÂN</span>
                        <h2>
                            Tìm Hương Thơm Phù Hợp Với Bạn
                        </h2>
                        <p>
                            Trả lời vài câu hỏi ngắn để Oilia gợi ý loại tinh dầu &amp; nến
                            thơm phù hợp nhất với không gian của bạn.
                        </p>
                        <a href="#" className="personalize-banner__btn">
                            Khám phá ngay
                        </a>
                    </div>

                    <div className="personalize-banner__icons">
                        <div className="pb-icon">100% Thiên nhiên</div>
                        <div className="pb-icon">Hương thơm thư giãn</div>
                        <div className="pb-icon">Liệu pháp Aroma</div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}