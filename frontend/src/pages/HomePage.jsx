import React, { useEffect, useState } from "react";

import HomeProductCard from "../components/HomeProductCard/HomeProductCard";
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
import { Link } from "react-router-dom";
const INITIAL_COUNTDOWN = 2 * 3600 + 45 * 60 + 18;

export default function HomePage() {

    const [data, setData] = useState(null);

    const [activeTab, setActiveTab] = useState("Tất cả");

    const [heroIndex, setHeroIndex] = useState(0);

    const [savedVoucher, setSavedVoucher] = useState(null);

    const [countdown, setCountdown] = useState(
        INITIAL_COUNTDOWN
    );

    /* ==============================
       LẤY DỮ LIỆU HOMEPAGE
    ============================== */

    useEffect(() => {

        getHomeData().then((result) => {
            setData(result);
        });

    }, []);


    /* ==============================
       COUNTDOWN FLASH SALE
    ============================== */

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


    /* ==============================
       AUTO SLIDE BANNER
    ============================== */

    useEffect(() => {

        if (!data?.hero?.length) {
            return;
        }

        const timer = window.setInterval(() => {

            setHeroIndex((value) => {

                return (
                    (value + 1) %
                    data.hero.length
                );

            });

        }, 5000);

        return () => {
            window.clearInterval(timer);
        };

    }, [data]);


    /* ==============================
       LOADING
    ============================== */

    if (!data) {

        return (
            <>
                <Header />

                <main className="home-page">

                    <section className="home-container home-loading">

                        <div className="skeleton hero-skeleton" />

                        <div className="skeleton-section-title" />

                        <div className="product-grid product-grid--4">

                            {Array.from({ length: 4 }).map(
                                (_, index) => (
                                    <SkeletonProductCard
                                        key={index}
                                    />
                                )
                            )}

                        </div>


                        <div className="skeleton-section-title" />

                        <div className="product-grid product-grid--4">

                            {Array.from({ length: 4 }).map(
                                (_, index) => (
                                    <SkeletonProductCard
                                        key={index}
                                    />
                                )
                            )}

                        </div>

                    </section>

                </main>

                <Footer />
            </>
        );
    }


    /* ==============================
       DATA
    ============================== */

    const hero = getHero(
        data,
        heroIndex
    );

    const bestProducts =
        getBestSellerProducts(
            data,
            activeTab
        );

    const countdownTime =
        formatCountdown(countdown);


    /* ==============================
       HERO
    ============================== */

    const handlePreviousHero = () => {

        setHeroIndex(
            (heroIndex - 1 + data.hero.length) %
            data.hero.length
        );

    };


    const handleNextHero = () => {

        setHeroIndex(
            (heroIndex + 1) %
            data.hero.length
        );

    };


    /* ==============================
       PROMOTION
    ============================== */

    const handlePromotion = (promotion) => {

        const result =
            handlePromotionAction(
                promotion
            );

        if (result === "voucher") {

            setSavedVoucher(
                promotion.id
            );

        }

    };


    return (
        <>
            <Header />

            <main className="home-page">

                {/* =====================================================
                    A. HERO BANNER
                ===================================================== */}

                <section className="home-container hero">

                    <div className="hero__copy">

                        <span className="hero__badge">
                            ☁ WORKSHOP MIỄN PHÍ MỖI TUẦN
                        </span>

                        <h1>
                            {hero.title}
                        </h1>

                        <p>
                            {hero.description}
                        </p>

                        <div className="hero__actions">

                            <Link
                                to="/customer/products"
                                className="hero__primary"
                                type="button"
                            >
                                Xem sản phẩm →
                            </Link>

                            <Link
                                to="/customer/customize"
                                className="hero__secondary"
                                type="button"
                            >
                                ✦ Thiết kế cá nhân hóa
                            </Link>

                        </div>

                    </div>


                    <div className="hero__image-wrap">

                        <img
                            src={hero.image}
                            alt={hero.title}
                        />

                    </div>


                    {/* PREVIOUS */}

                    <button
                        className="hero__arrow hero__arrow--left"
                        onClick={handlePreviousHero}
                        aria-label="Banner trước"
                        type="button"
                    >

                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
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


                    {/* NEXT */}

                    <button
                        className="hero__arrow hero__arrow--right"
                        onClick={handleNextHero}
                        aria-label="Banner tiếp theo"
                        type="button"
                    >

                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
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


                    {/* DOTS */}

                    <div className="hero__dots">

                        {data.hero.map(
                            (item, index) => (

                                <button
                                    key={item.id}
                                    type="button"
                                    className={
                                        index === heroIndex
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        setHeroIndex(index)
                                    }
                                    aria-label={
                                        `Banner ${index + 1}`
                                    }
                                />

                            )
                        )}

                    </div>

                </section>


                {/* =====================================================
                    B. FLASH SALE
                ===================================================== */}

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


                        <Link
                            className="section-link"
                            to="/customer/products"
                        >
                            Xem tất cả ưu đãi ›
                        </Link>

                    </div>


                    <div className="product-grid product-grid--4">

                        {data.flashSales
                            ?.slice(0, 4)
                            .map((product) => (

                                <HomeProductCard
                                    key={product.id}
                                    product={product}
                                    variant="flash"
                                    onBuy={() =>
                                        buyProduct(product)
                                    }
                                />

                            ))}

                    </div>

                </section>


                {/* =====================================================
                    C. SẢN PHẨM MỚI VỀ
                ===================================================== */}

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


                        <Link
                            className="section-link"
                            to="/customer/products"
                        >
                            Xem tất cả sản phẩm mới →
                        </Link>

                    </div>


                    <div className="product-grid product-grid--4">

                        {data.newProducts
                            ?.slice(0, 4)
                            .map((product) => (

                                <HomeProductCard
                                    key={product.id}
                                    product={product}
                                    variant="new"
                                    onAdd={() =>
                                        addToCart(product)
                                    }
                                />

                            ))}

                    </div>

                </section>
                <section className="home-container">
                    <div className="personalize-banner">
                        <div className="personalize-banner__text">
                            <span className="personalize-banner__badge">✦ OILIA ATELIER · MỚI</span>
                            <h2>Thiết kế tinh dầu <em>độc bản</em> của riêng bạn</h2>
                            <p>Chọn nguyên liệu, phối tỷ lệ 3 tầng hương, khắc tên laser — tất cả trong một giao diện trực quan.</p>
                            <Link to="/customer/customize" className="personalize-banner__btn">
                                Bắt đầu sáng tạo →
                            </Link>
                        </div>
                        <div className="personalize-banner__icons">
                            <div className="pb-icon">Nguyên liệu tự nhiên</div>
                            <div className="pb-icon">18 nốt hương</div>
                            <div className="pb-icon">Khắc tên laser</div>
                            <div className="pb-icon">3 xưởng uy tín</div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    D. TOP 8 SẢN PHẨM BÁN CHẠY
                ===================================================== */}

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

                            {Object.keys(
                                data.bestSellerTabs || {}
                            ).map((tab) => (

                                <button
                                    key={tab}
                                    type="button"
                                    className={
                                        activeTab === tab
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        setActiveTab(tab)
                                    }
                                >
                                    {tab}
                                </button>

                            ))}

                        </div>

                    </div>


                    <div className="product-grid product-grid--4">

                        {bestProducts
                            ?.slice(0, 8)
                            .map((product) => (

                                <HomeProductCard
                                    key={`${activeTab}-${product.id}`}
                                    product={product}
                                    variant="best"
                                    onAdd={() =>
                                        addToCart(product)
                                    }
                                />

                            ))}

                    </div>

                </section>


                {/* =====================================================
                    E. PROMOTION / VOUCHER
                ===================================================== */}

                <section className="home-container promotion-grid">

                    {data.promotions?.map(
                        (promotion) => (

                            <article
                                key={promotion.id}
                                className="promotion-card"
                                style={{
                                    backgroundImage:
                                        `url(${promotion.image})`,
                                }}
                            >

                                <div className="promotion-card__overlay" />


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
                                        type="button"
                                        onClick={() =>
                                            handlePromotion(
                                                promotion
                                            )
                                        }
                                    >

                                        {
                                            savedVoucher ===
                                            promotion.id
                                                ? "✓ Đã lưu voucher"
                                                : promotion.button
                                        }

                                        {" →"}

                                    </button>

                                </div>

                            </article>

                        )
                    )}

                </section>

            </main>

            <Footer />
        </>
    );
}