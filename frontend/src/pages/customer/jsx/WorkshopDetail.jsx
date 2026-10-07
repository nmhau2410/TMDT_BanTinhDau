import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

import { productDatabase } from "../../../test/data";

import "../css/WorkshopDetail.css";

const products = productDatabase.products;

export default function WorkshopDetail() {
    const { id } = useParams();

    const [activeTab, setActiveTab] = useState("Tất cả sản phẩm");
    const [quantity, setQuantity] = useState("5kg - 10kg");

    const workshop = {
        id: id || 1,
        name: "Xưởng Thảo Mộc Hưng Yên",
        subtitle:
            "Chưng Cất Dược Liệu Truyền Thống & Tinh Chế Áp Suất Thấp",
        location: "Thôn Thảo Dược, Xã Nghĩa Dân, H. Kim Động, T. Hưng Yên",
        phone: "0988 234 567",
        email: "hopnhan@thaomochungyen.vn",
        rating: "4.9",
        reviews: "4,320",
        sold: "48,500+ lô tinh dầu",
        method: "Hơi Nước",
        capacity: "1,500 Lít/tháng",
        delivery: "24 - 48 Giờ",
        image:
            products.find((p) => p.id === 302)?.image ||
            products[0]?.image,
    };

    const workshopProducts = useMemo(() => {
        const ids = [301, 302, 303, 304, 306, 307, 310, 311];

        return ids
            .map((productId) =>
                products.find((product) => product.id === productId)
            )
            .filter(Boolean);
    }, []);

    const tabs = [
        "Tất cả sản phẩm",
        "Tinh dầu đơn hương",
        "Hydrosol & Nước cất",
        "Can / Phuy sỉ (Bulk Drum)",
    ];

    return (
        <>
            <Header />

            <main className="workshop-detail-page">

                {/* Breadcrumb */}
                <div className="workshop-detail-container">
                    <div className="workshop-detail-breadcrumb">
                        Trang chủ
                        <span>/</span>
                        Xưởng
                        <span>/</span>
                        Xưởng Thảo Mộc Hưng Yên
                    </div>
                </div>

                {/* Workshop information */}
                <section className="workshop-company-section">
                    <div className="workshop-detail-container">

                        <div className="workshop-company-grid">

                            {/* Images */}
                            <div className="workshop-gallery">

                                <div className="workshop-main-image">
                                    <img
                                        src={workshop.image}
                                        alt={workshop.name}
                                    />

                                    <button className="gallery-button">
                                        ↗
                                    </button>

                                    <div className="gallery-caption">
                                        Hệ Thống Lôi Cuốn Hơi Nước
                                        Đóng Kín 8 Giờ
                                    </div>
                                </div>

                                <div className="workshop-thumbnails">
                                    {products.slice(0, 3).map((product, index) => (
                                        <div
                                            className="workshop-thumbnail"
                                            key={product.id}
                                        >
                                            <img
                                                src={product.image}
                                                alt=""
                                            />
                                            <span>
                                                {index === 0
                                                    ? "Cánh đồng nguyên liệu"
                                                    : index === 1
                                                        ? "Phân tích QC"
                                                        : "Khu đóng chai"}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                            </div>

                            {/* Company info */}
                            <div className="workshop-company-info">

                                <div className="workshop-company-title">
                                    <h1>{workshop.name}</h1>
                                    <p>{workshop.subtitle}</p>
                                </div>

                                <div className="workshop-rating-row">
                                    <strong>★★★★★</strong>
                                    <b>{workshop.rating}</b>
                                    <span>
                                        ({workshop.reviews} đánh giá tích cực)
                                    </span>

                                    <i></i>

                                    <span>✓ Đã chứng nhận</span>

                                    <i></i>

                                    <span>
                                        Đã cung ứng: {workshop.sold}
                                    </span>
                                </div>

                                <div className="workshop-contact-box">

                                    <div className="contact-block">
                                        <span>⌖ ĐỊA CHỈ</span>
                                        <strong>{workshop.location}</strong>
                                    </div>

                                    <div className="contact-block">
                                        <span>♧ THÔNG TIN LIÊN HỆ</span>
                                        <strong>
                                            Hotline: {workshop.phone}
                                        </strong>
                                        <strong>{workshop.email}</strong>
                                    </div>

                                </div>

                                <div className="workshop-company-actions">
                                    <a
                                        href="#bulk-order"
                                        className="bulk-button"
                                    >
                                        ◈ Đặt Lô Hàng Số Lượng Lớn
                                    </a>

                                    <button className="consult-button">
                                        ☎ Liên hệ tư vấn xưởng
                                    </button>

                                    <button className="vr-button">
                                        ◉ Tour VR 360°
                                    </button>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>

                {/* Capacity */}
                <section className="workshop-capacity-section">
                    <div className="workshop-detail-container">

                        <div className="workshop-capacity-grid">

                            <div className="capacity-card">
                                <div className="capacity-icon">♧</div>

                                <span>PHƯƠNG PHÁP CHƯNG CẤT</span>

                                <strong>{workshop.method}</strong>

                                <p>
                                    Nguyên liệu được thu hoàn kín
                                    trong 8 giờ bảo toàn 100% ester tự nhiên
                                </p>

                                <small>
                                    ✓ Kiểm soát nhiệt độ 95°C - 98°C
                                </small>
                            </div>

                            <div className="capacity-card">
                                <div className="capacity-icon">▣</div>

                                <span>NĂNG LỰC SẢN XUẤT</span>

                                <strong>
                                    {workshop.capacity}
                                </strong>

                                <p>
                                    Chai bán lẻ 10ml, 30ml, 100ml & Can
                                    phụ nhôm 5kg, 25kg, 180kg
                                </p>

                                <small>
                                    ✓ Có sẵn hàng kho để đơn ổn định
                                </small>
                            </div>

                            <div className="capacity-card">
                                <div className="capacity-icon">▣</div>

                                <span>CHUẨN VẬN HÀNH B2B</span>

                                <strong>
                                    {workshop.delivery}
                                </strong>

                                <p>
                                    Giao hàng toàn quốc, niêm phong
                                    kẹp chì phân xưởng
                                </p>

                                <small>
                                    ✓ Đầy đủ COA, MSDS & Hồ sơ đơn
                                </small>
                            </div>

                        </div>

                    </div>
                </section>

                {/* Products */}
                <section className="workshop-products-section">
                    <div className="workshop-detail-container">

                        <div className="workshop-products-heading">
                            <div>
                                <h2>Sản Phẩm Của Xưởng</h2>
                                <p>
                                    Bộ sưu tập sản phẩm nguyên chất được sản
                                    xuất trực tiếp tại xưởng Hưng Yên.
                                </p>
                            </div>
                        </div>

                        <div className="workshop-product-tabs">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    className={
                                        activeTab === tab ? "active" : ""
                                    }
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="workshop-product-grid">

                            {workshopProducts.map((product) => (
                                <article
                                    className="workshop-product-card"
                                    key={product.id}
                                >
                                    <div className="workshop-product-image">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                        />

                                        <button className="favorite-button">
                                            ♥
                                        </button>
                                    </div>

                                    <div className="workshop-product-content">

                                        <div className="product-rating">
                                            ★ {product.rating}
                                            <span>
                                                ({product.reviews} đã bán)
                                            </span>
                                        </div>

                                        <h3>{product.name}</h3>

                                        <p>
                                            {product.description ||
                                                "Tinh dầu nguyên chất được sản xuất trực tiếp tại xưởng."}
                                        </p>

                                        <span className="product-workshop">
                                            ✓ {workshop.name}
                                        </span>

                                        <div className="product-price-row">
                                            <div>
                                                <strong>
                                                    {product.price?.toLocaleString(
                                                        "vi-VN"
                                                    )}
                                                    đ
                                                </strong>

                                                {product.oldPrice && (
                                                    <del>
                                                        {product.oldPrice.toLocaleString(
                                                            "vi-VN"
                                                        )}
                                                        đ
                                                    </del>
                                                )}
                                            </div>

                                            {product.oldPrice && (
                                                <span className="discount">
                                                    -
                                                    {Math.round(
                                                        (1 -
                                                            product.price /
                                                            product.oldPrice) *
                                                        100
                                                    )}
                                                    %
                                                </span>
                                            )}
                                        </div>

                                        <div className="product-actions">
                                            <button>
                                                ♡ Thêm giỏ
                                            </button>

                                            <button className="buy-button">
                                                Mua ngay
                                            </button>
                                        </div>

                                    </div>
                                </article>
                            ))}

                        </div>

                    </div>
                </section>

                {/* Bulk order */}
                <section
                    className="bulk-order-section"
                    id="bulk-order"
                >
                    <div className="workshop-detail-container">

                        <div className="bulk-order-box">

                            <div className="bulk-order-info">

                                <span className="bulk-eyebrow">
                                    DÀNH CHO KHÁCH HÀNG B2B
                                </span>

                                <h2>
                                    Đặt Lô Hàng Số Lượng Lớn
                                    <br />
                                    Trực Tiếp Từ Xưởng
                                </h2>

                                <p>
                                    Quy đổi từ sản xuất mỹ phẩm, nến thơm
                                    cao cấp, hệ thống spa trị liệu và chuỗi
                                    phân phối cần nguồn nguyên liệu tinh dầu
                                    trực tiếp từ xưởng.
                                </p>

                                <div className="bulk-benefits">

                                    <div>
                                        <b>▣</b>
                                        <span>
                                            <strong>
                                                Chiết Khấu Đến 45%
                                            </strong>
                                            <small>
                                                Báo lô mức giá ổn định theo
                                                hợp đồng 12 tháng.
                                            </small>
                                        </span>
                                    </div>

                                    <div>
                                        <b>✓</b>
                                        <span>
                                            <strong>
                                                Hỗ Trợ Gia Công Tem Nhãn Riêng
                                            </strong>
                                            <small>
                                                OEM/ODM theo yêu cầu của
                                                khách hàng.
                                            </small>
                                        </span>
                                    </div>

                                    <div>
                                        <b>▣</b>
                                        <span>
                                            <strong>
                                                Bảo Hiểm Vận Chuyển Toàn Quốc
                                            </strong>
                                            <small>
                                                Hỗ trợ giao hàng và đóng gói
                                                theo tiêu chuẩn.
                                            </small>
                                        </span>
                                    </div>

                                </div>

                                <div className="bulk-support">
                                    <strong>
                                        Tổng đài tiếp nhận hồ sơ:
                                        <br />
                                        <span>0988 234 567</span>
                                    </strong>

                                    <small>
                                        Hỗ trợ mẫu thử & Hợp đồng 24/7
                                    </small>
                                </div>

                            </div>

                            {/* Form */}
                            <div className="bulk-order-form">

                                <div className="form-row">
                                    <label>
                                        Tên Doanh Nghiệp / Đơn Vị Mua *
                                        <input placeholder="VD: Cty TNHH Aroma Việt Nam" />
                                    </label>

                                    <label>
                                        Họ Và Tên Người Phụ Trách Thu Mua *
                                        <input placeholder="Họ và tên" />
                                    </label>
                                </div>

                                <div className="form-row">
                                    <label>
                                        Số Điện Thoại / Zalo *
                                        <input placeholder="09xx xxx xxx" />
                                    </label>

                                    <label>
                                        Email Nhận Báo Giá Chi Tiết *
                                        <input placeholder="purchasing@company.vn" />
                                    </label>
                                </div>

                                <div className="form-row">
                                    <label>
                                        Dòng Tinh Dầu Cần Đặt Lô *
                                        <input value="Tinh Dầu Bạc Hà Peppermint" readOnly />
                                    </label>

                                    <label>
                                        Sản Lượng Dự Kiến Mua *
                                        <select
                                            value={quantity}
                                            onChange={(e) =>
                                                setQuantity(e.target.value)
                                            }
                                        >
                                            <option>5kg - 10kg</option>
                                            <option>10kg - 30kg</option>
                                            <option>30kg - 100kg</option>
                                            <option>100kg+</option>
                                        </select>
                                    </label>
                                </div>

                                <div className="form-field">
                                    <span>Quy Cách Đóng Gói Yêu Cầu</span>

                                    <div className="package-options">
                                        <label>
                                            <input
                                                type="radio"
                                                name="package"
                                                defaultChecked
                                            />
                                            Phuy nhôm 5kg - 25kg
                                        </label>

                                        <label>
                                            <input
                                                type="radio"
                                                name="package"
                                            />
                                            Can HDPE 10L - 30L
                                        </label>

                                        <label>
                                            <input
                                                type="radio"
                                                name="package"
                                            />
                                            Chai nhỏ OEM nhãn riêng
                                        </label>
                                    </div>
                                </div>

                                <label className="form-field">
                                    Ghi Chú Yêu Cầu
                                    <textarea
                                        rows="4"
                                        placeholder="Ghi rõ yêu cầu về số nồng độ, địa chỉ nhận mẫu..."
                                    />
                                </label>

                                <p className="form-note">
                                    * Cam kết bảo mật thông tin đối tác &
                                    gửi mẫu test miễn phí tận nơi.
                                </p>

                                <button className="submit-bulk">
                                    ▷ Gửi Yêu Cầu Báo Giá & Nhận Mẫu Thử
                                </button>

                            </div>

                        </div>

                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}