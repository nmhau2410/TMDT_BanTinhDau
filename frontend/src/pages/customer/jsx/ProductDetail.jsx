import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import ProductCard from "../../../components/ProductCard/ProductCard.jsx";
import { productDatabase } from "../../../test/data.js";
import "../css/ProductDetail.css";

const money = (value) =>
    new Intl.NumberFormat("vi-VN").format(value) + "đ";

export default function ProductDetail() {
    const { id } = useParams();

    const product = productDatabase.products.find(
        (item) => Number(item.id) === Number(id)
    ) || productDatabase.products[0];

    const [selectedVariantId, setSelectedVariantId] = useState(
        product?.variants?.[0]?.id
    );
    const [activeImage, setActiveImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [favorite, setFavorite] = useState(false);
    const [open, setOpen] = useState("scent");

    const variant =
        product.variants?.find((item) => item.id === selectedVariantId) ||
        product.variants?.[0] || {
            price: product.price || 185000,
            originalPrice: product.oldPrice || 245000,
            volume: "10ml"
        };

    const images =
        product.images?.length > 0
            ? product.images
            : product.image
                ? [product.image]
                : [];

    const recommendationIds = [307, 306, 305, 301];

    const recommendations = useMemo(() => {
        return recommendationIds
            .map((recId) =>
                productDatabase.products.find((item) => item.id === recId)
            )
            .filter(Boolean)
            .filter((item) => item.id !== product.id);
    }, [product.id]);

    const discount =
        variant?.discount ??
        (variant?.originalPrice
            ? Math.round(
                ((variant.originalPrice - variant.price) /
                    variant.originalPrice) *
                100
            )
            : 0);

    const toggle = (name) => {
        setOpen((current) => (current === name ? "" : name));
    };

    return (
        <>
            <Header />
            <main className="product-detail">
                <div className="pd-wrap">
                    <div className="pd-breadcrumb">
                        <Link to="/">Trang chủ</Link>
                        <span>/</span>
                        <Link to="/products">Tinh dầu đơn hương</Link>
                        <span>/</span>
                        <strong>{product.name}</strong>
                    </div>

                    <section className="pd-card">
                        <div className="pd-gallery">
                            <div className="pd-main-photo">
                                {images[activeImage] && (
                                    <img
                                        src={images[activeImage]}
                                        alt={product.name}
                                    />
                                )}
                            </div>

                            <div className="pd-thumbs">
                                {images.map((src, index) => (
                                    <button
                                        key={`${src}-${index}`}
                                        type="button"
                                        className={activeImage === index ? "active" : ""}
                                        onClick={() => setActiveImage(index)}
                                    >
                                        <img src={src} alt="" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="pd-info">
                            <div className="pd-top-badges">
                                <span className="pd-origin">
                                    {product.origin || "Pháp (Provence)"}
                                </span>
                                <span className="pd-code">
                                    Mã lô QC: #{product.productCode || "OIL-8842"}
                                </span>
                            </div>

                            <div className="pd-title-line">
                                <div>
                                    <h1>{product.name}</h1>
                                    <div className="pd-rating">
                                        <strong>★ {product.rating || "4.9"}</strong>
                                        <span>({product.reviews || "1,240"} đánh giá)</span>
                                        <span className="pd-sold-tag">Đã bán {product.sold || "3,800+"}</span>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className={`pd-favorite ${favorite ? "selected" : ""}`}
                                    onClick={() => setFavorite(!favorite)}
                                    aria-label="Yêu thích"
                                >
                                    ♥
                                </button>
                            </div>

                            <p className="pd-description">
                                {product.description ||
                                    "Tinh dầu chiết xuất 100% nguyên chất từ thực vật tươi theo chuẩn dược dụng, giữ trọn vẹn hợp chất sinh học hỗ trợ thư giãn thần kinh, giảm căng thẳng và làm sạch không khí sống."}
                            </p>

                            <div className="pd-price-area">
                                <div className="pd-price-content">
                                    <strong>{money(variant.price)}</strong>
                                    {variant.originalPrice && (
                                        <del>{money(variant.originalPrice)}</del>
                                    )}
                                    {discount > 0 && (
                                        <span className="pd-sale">-{discount}%</span>
                                    )}
                                </div>
                                <span className="pd-stock">
                                    {product.stockText || "Còn hàng tại kho"}
                                </span>
                            </div>

                            <div className="pd-variant-title">
                                <strong>Dung tích quy chuẩn</strong>
                                <span>ĐÃ CHỌN: {variant.volume}</span>
                            </div>

                            <div className="pd-variants">
                                {product.variants?.map((item) => (
                                    <button
                                        key={item.id}
                                        type="button"
                                        className={variant.id === item.id ? "selected" : ""}
                                        onClick={() => {
                                            setSelectedVariantId(item.id);
                                            setActiveImage(0);
                                        }}
                                    >
                                        <strong>{item.volume}</strong>
                                        <span>{money(item.price)}</span>
                                        {item.discount > 0 && (
                                            <small>-{item.discount}%</small>
                                        )}
                                    </button>
                                ))}
                            </div>

                            <div className="pd-buy">
                                <div className="pd-quantity">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setQuantity((value) => Math.max(1, value - 1))
                                        }
                                    >
                                        −
                                    </button>
                                    <span>{quantity}</span>
                                    <button
                                        type="button"
                                        onClick={() => setQuantity((value) => value + 1)}
                                    >
                                        +
                                    </button>
                                </div>

                                <button type="button" className="pd-cart">
                                    Thêm vào giỏ
                                </button>

                                <button type="button" className="pd-buy-now">
                                    Mua ngay
                                </button>
                            </div>

                            <div className="pd-benefits">
                                <div>100% Thiên nhiên nguyên chất</div>
                                <div>Đổi trả 15 ngày miễn phí</div>
                                <div>Kiểm định COA &amp; MSDS đầy đủ</div>
                            </div>
                        </div>

                        <div className="pd-details">
                            <Accordion
                                title="Cấu trúc tầng hương & Hợp chất trị liệu"
                                open={open === "scent"}
                                onClick={() => toggle("scent")}
                            >
                                <div className="pd-detail-row">
                                    <span>Tầng hương đầu (Top Note):</span>
                                    <strong>Tươi mát, thanh khiết, ngạt ngào hương hoa thảo mộc</strong>
                                </div>
                                <div className="pd-detail-row">
                                    <span>Tầng hương giữa (Heart Note):</span>
                                    <strong>Ấm áp, êm dịu, ngọt nhẹ tự nhiên</strong>
                                </div>
                                <div className="pd-detail-row">
                                    <span>Hợp chất sinh học chính:</span>
                                    <strong>Linalool (&gt;35%), Linalyl Acetate (&gt;40%) - Giúp xoa dịu não bộ</strong>
                                </div>
                            </Accordion>

                            <Accordion
                                title="Xuất xứ nguyên liệu & Công nghệ chưng cất"
                                open={open === "origin"}
                                onClick={() => toggle("origin")}
                            >
                                <p><strong>Vùng trồng:</strong> Nông trường thu hoạch độc quyền tại Hưng Yên &amp; Provence, canh tác hữu cơ không phân bón hóa học.</p>
                                <p><strong>Phương pháp chiết xuất:</strong> Chưng cất lôi cuốn hơi nước áp suất thấp khép kín trong 8 giờ, bảo toàn hoàn hảo thành phần este thiên nhiên nhạy cảm với nhiệt độ.</p>
                            </Accordion>

                            <Accordion
                                title="Hướng dẫn sử dụng & Liệu pháp Aromatherapy"
                                open={open === "usage"}
                                onClick={() => toggle("usage")}
                            >
                                <p><strong>Khuếch tán không khí:</strong> Nhỏ 3 - 5 giọt tinh dầu vào máy phun sương hoặc đèn xông cho diện tích phòng từ 15 - 25m².</p>
                                <p><strong>Massage / Tắm thư giãn:</strong> Pha 2 - 3 giọt tinh dầu cùng 10ml dầu nền (dầu jojoba, hạnh nhân) trước khi thoa lên da.</p>
                                <p><strong>Lưu ý bảo quản:</strong> Bảo quản nơi khô ráo, tránh ánh nắng trực tiếp, đậy kín nắp sau khi sử dụng.</p>
                            </Accordion>
                        </div>
                    </section>
                </div>

                <section className="pd-recommend">
                    <div className="pd-wrap">
                        <div className="pd-recommend-head">
                            <h2>Gợi ý phối hương hoàn hảo</h2>
                            <Link to="/products" className="pd-see-all-btn">
                                Xem tất cả sản phẩm
                            </Link>
                        </div>

                        <div className="pd-products-grid">
                            {recommendations.map((item) => (
                                <ProductCard key={item.id} product={item} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

function Accordion({ title, open, onClick, children }) {
    return (
        <div className={`pd-accordion ${open ? "open" : ""}`}>
            <button
                type="button"
                className="pd-accordion-head"
                onClick={onClick}
            >
                <span>{title}</span>
                <span className="pd-arrow">{open ? "▲" : "▼"}</span>
            </button>

            {open && <div className="pd-accordion-content">{children}</div>}
        </div>
    );
}