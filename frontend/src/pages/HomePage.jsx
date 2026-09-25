import React, {useEffect, useState} from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import SkeletonProductCard from "../components/ProductCard/SkeletonProductCard.jsx";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import {
    addToCart,
    buyProduct,
    formatCountdown,
    getBestSellerProducts,
    getHero,
    getHomeData,
    handlePromotionAction,
} from "../services/HomeService.js";

import "./HomePage.css";

const INITIAL_COUNTDOWN = 2 * 3600 + 45 * 60 + 18;

export default function HomePage() {
    const [data, setData] = useState(null);

    const [activeTab, setActiveTab] = useState("Tất cả");

    const [heroIndex, setHeroIndex] = useState(0);

    const [savedVoucher, setSavedVoucher] = useState(null);

    const [countdown, setCountdown] = useState(INITIAL_COUNTDOWN);

    // ==============================
    // Lấy dữ liệu Homepage
    // ==============================

    useEffect(() => {
        getHomeData().then((result) => {
            setData(result);
        });
    }, []);

    // ==============================
    // Countdown Flash Sale
    // ==============================

    useEffect(() => {
        const timer = window.setInterval(() => {
            setCountdown((value) => {
                if (value > 0) {
                    return value - 1;
                }

                return INITIAL_COUNTDOWN;
            });
        }, 1000);

        return () => window.clearInterval(timer);
    }, []);

    // Tự động chuyển Banner
    useEffect(() => {
        if (!data?.hero?.length) {
            return;
        }
        const timer = window.setInterval(() => {
            setHeroIndex((value) => {
                return (value + 1) % data.hero.length;
            });
        }, 5000);
        return () => window.clearInterval(timer);
    }, [data]);

    // Loading
    if (!data) {
        return (
            <main className="home-page">
                <section className="home-container home-loading">
                    <div className="skeleton hero-skeleton"/>
                    <div className="skeleton-section-title"/>
                    <div className="product-grid product-grid--4">
                        {Array.from({length: 4}).map((_, index) => (
                            <SkeletonProductCard key={index}/>
                        ))}
                    </div>
                    <div className="skeleton-section-title"/>
                    <div className="product-grid product-grid--4">
                        {Array.from({length: 4}).map((_, index) => (
                            <SkeletonProductCard key={index}/>
                        ))}
                    </div>
                </section>
            </main>
        );
    }

    // Dữ liệu Homepage
    const hero = getHero(data, heroIndex);
    const bestProducts = getBestSellerProducts(
        data,
        activeTab
    );
    const countdownTime = formatCountdown(countdown);

    // Banner
    const handlePreviousHero = () => {
        setHeroIndex(
            (heroIndex - 1 + data.hero.length) % data.hero.length
        );
    };

    const handleNextHero = () => {
        setHeroIndex(
            (heroIndex + 1) % data.hero.length
        );
    };

    // Voucher
    const handlePromotion = (promotion) => {
        const result = handlePromotionAction(promotion);
        if (result === "voucher") {
            setSavedVoucher(promotion.id);
        }
    };

    return (
        <>
            <Header/>
            <main className="home-page">
          {/*A. Banner giới thiệu chính*/}
                <section className="home-container hero">
                    <div className="hero__copy">
                        <span className="hero__badge"> ☁ WORKSHOP MIỄN PHÍ MỖI TUẦN </span>
                        <h1>{hero.title}</h1>
                        <p>{hero.description}</p>
                        <div className="hero__actions">
                            <button className="hero__primary"> Tham gia ngay →</button>
                            <button className="hero__secondary"> Xem lịch workshop ▦</button>
                        </div>
                    </div>

                    <div className="hero__image-wrap">
                        <img src={hero.image} alt={hero.title}/>
                    </div>

                    <button
                        className="hero__arrow hero__arrow--left"
                        onClick={handlePreviousHero}
                        aria-label="Banner trước"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 18L9 12L15 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <button
                        className="hero__arrow hero__arrow--right"
                        onClick={handleNextHero}
                        aria-label="Banner tiếp theo"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 18L15 12L9 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <div className="hero__dots">
                        {data.hero.map((item, index) => (
                            <button key={item.id} className={index === heroIndex ? "active" : ""}
                                    onClick={() => setHeroIndex(index)}
                                    aria-label={`Banner ${index + 1}`}
                            />
                        ))}
                    </div>
                </section>

                {/* B. FLASH SALE */}

                <section className="home-container section-box">
                    <div className="section-heading section-heading--flash">
                        <div className="flash-heading">
                            <span className="flash-label">
                              ⚡ FLASH SALE
                            </span>
                            <span className="countdown-box">
                                {countdownTime.hours}
                            </span>
                            <b>:</b>
                            <span className="countdown-box">
                                {countdownTime.minutes}
                            </span>
                            <b>:</b>
                            <span className="countdown-box countdown-box--orange">
                                    {countdownTime.seconds}
                            </span>
                            <span className="countdown-note">
                                | Kết thúc trong hôm nay
                            </span>
                        </div>

                        <a className="section-link" href="#" >
                            Xem tất cả ưu đãi ›
                        </a>
                    </div>

                    <div className="product-grid product-grid--4">
                        {data.flashSales.map((product) => (
                            <ProductCard key={product.id} product={product} variant="flash" onBuy={() => buyProduct(product)}/>
                        ))}
                    </div>
                </section>

                {/* C. SẢN PHẨM MỚI VỀ*/}
                <section className="home-container section">

                    <div className="section-heading">

                        <div>

                            <span className="section-eyebrow">
                              BỘ SƯU TẬP MÙA NÀY
                            </span>

                            <h2>
                                Sản Phẩm Mới Về
                            </h2>

                        </div>

                        <a className="section-link" href="#">
                            Xem tất cả sản phẩm mới →
                        </a>

                    </div>


                    <div className="product-grid product-grid--4">

                        {data.newProducts
                            .slice(0, 4)
                            .map((product) => (

                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onAdd={() => addToCart(product)}
                                />

                            ))}

                    </div>

                </section>


                {/* =========================================
          D. TOP 8 SẢN PHẨM BÁN CHẠY
      ========================================= */}

                <section className="home-container section">

                    <div className="section-heading section-heading--best">

                        <div>

            <span className="section-eyebrow section-eyebrow--orange">
              ĐƯỢC YÊU THÍCH NHẤT
            </span>

                            <h2>
                                Top Sản Phẩm Bán Chạy
                            </h2>

                        </div>


                        <div className="filter-tabs">

                            {Object.keys(data.bestSellerTabs).map(
                                (tab) => (

                                    <button
                                        key={tab}
                                        className={
                                            activeTab === tab
                                                ? "active"
                                                : ""
                                        }
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </button>

                                )
                            )}

                        </div>

                    </div>


                    <div className="product-grid product-grid--4">

                        {bestProducts
                            .slice(0, 8)
                            .map((product) => (

                                <ProductCard
                                    key={`${activeTab}-${product.id}`}
                                    product={product}
                                    variant="best"
                                    onAdd={() => addToCart(product)}
                                />

                            ))}

                    </div>

                </section>


                {/* =========================================
          E. PROMOTION / VOUCHER
      ========================================= */}

                <section className="home-container promotion-grid">

                    {data.promotions.map((promotion) => (

                        <article
                            key={promotion.id}
                            className="promotion-card"
                            style={{
                                backgroundImage:
                                    `url(${promotion.image})`,
                            }}
                        >

                            <div className="promotion-card__overlay"/>


                            <div className="promotion-card__content">

              <span>
                {promotion.badge}
              </span>

                                <h3>
                                    {promotion.title}
                                </h3>

                                <p>
                                    {promotion.description}
                                </p>


                                <button
                                    onClick={() =>
                                        handlePromotion(promotion)
                                    }
                                >
                                    {
                                        savedVoucher === promotion.id
                                            ? "✓ Đã lưu voucher"
                                            : promotion.button
                                    }

                                    {" →"}

                                </button>

                            </div>

                        </article>

                    ))}

                </section>

            </main>
            <Footer/>
        </>
    );
}