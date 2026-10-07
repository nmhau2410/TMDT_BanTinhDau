import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";

import { productDatabase } from "../../../test/data.js";

import "../css/WorkshopList.css";

const products = productDatabase.products;

const workshops = [
    {
        id: 1,
        name: "Xưởng Thảo Mộc Hưng Yên",
        shortName: "THẢO MỘC HƯNG YÊN",
        location: "Hưng Yên, Việt Nam",
        category: "Tinh dầu thảo mộc",
        rating: "4.9",
        reviews: "4,320",
        products: 8,
        description:
            "Chuyên sản xuất tinh dầu thảo mộc nguyên chất với quy trình chưng cất hơi nước truyền thống.",
        image: products.find((p) => p.id === 302)?.image,
        tags: ["Hơi nước", "Organic", "OEM/ODM"],
    },
    {
        id: 2,
        name: "Xưởng Provence Farm",
        shortName: "PROVENCE FARM",
        location: "Provence, Pháp",
        category: "Tinh dầu hoa",
        rating: "4.9",
        reviews: "3,180",
        products: 12,
        description:
            "Xưởng chuyên các dòng tinh dầu hoa và thảo mộc cao cấp từ vùng Provence.",
        image: products.find((p) => p.id === 101)?.image,
        tags: ["Lavender", "Organic", "Premium"],
    },
    {
        id: 3,
        name: "Xưởng Nông Nguyên",
        shortName: "NÔNG NGUYÊN",
        location: "Bến Tre, Việt Nam",
        category: "Tinh dầu citrus",
        rating: "4.8",
        reviews: "2,760",
        products: 10,
        description:
            "Nguồn nguyên liệu địa phương, chuyên tinh dầu bưởi và các sản phẩm chiết xuất tự nhiên.",
        image: products.find((p) => p.id === 102)?.image,
        tags: ["Ép lạnh", "Bến Tre", "Tự nhiên"],
    },
    {
        id: 4,
        name: "Xưởng New South Wales",
        shortName: "NEW SOUTH WALES",
        location: "New South Wales, Australia",
        category: "Tinh dầu hữu cơ",
        rating: "4.9",
        reviews: "2,420",
        products: 9,
        description:
            "Xưởng chuyên các dòng tinh dầu hữu cơ Australia, nổi bật với Tea Tree.",
        image: products.find((p) => p.id === 103)?.image,
        tags: ["Organic", "Tea Tree", "Australia"],
    },
    {
        id: 5,
        name: "Xưởng Đà Lạt Forest",
        shortName: "ĐÀ LẠT FOREST",
        location: "Đà Lạt, Việt Nam",
        category: "Hương thơm & nến",
        rating: "4.8",
        reviews: "1,980",
        products: 7,
        description:
            "Các sản phẩm hương thơm lấy cảm hứng từ thiên nhiên Đà Lạt.",
        image: products.find((p) => p.id === 202)?.image,
        tags: ["Handmade", "Đà Lạt", "Natural"],
    },
    {
        id: 6,
        name: "Xưởng Citrus Farm",
        shortName: "CITRUS FARM",
        location: "Việt Nam",
        category: "Tinh dầu trái cây",
        rating: "4.8",
        reviews: "2,150",
        products: 11,
        description:
            "Chuyên tinh dầu cam, chanh và các dòng citrus ép lạnh tự nhiên.",
        image: products.find((p) => p.id === 307)?.image,
        tags: ["Citrus", "Ép lạnh", "Natural"],
    },
];

const categories = [
    "Tất cả",
    "Tinh dầu thảo mộc",
    "Tinh dầu hoa",
    "Tinh dầu citrus",
    "Tinh dầu hữu cơ",
    "Hương thơm & nến",
];

export default function WorkshopList() {
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("Tất cả");

    const filteredWorkshops = useMemo(() => {
        return workshops.filter((workshop) => {
            const matchKeyword =
                workshop.name
                    .toLowerCase()
                    .includes(keyword.toLowerCase()) ||
                workshop.location
                    .toLowerCase()
                    .includes(keyword.toLowerCase());

            const matchCategory =
                category === "Tất cả" ||
                workshop.category === category;

            return matchKeyword && matchCategory;
        });
    }, [keyword, category]);

    return (
        <>
            <Header />

            <main className="workshop-list-page">

                {/* Breadcrumb */}
                <div className="workshop-container">
                    <div className="workshop-breadcrumb">
                        Trang chủ <span>/</span> Xưởng
                    </div>
                </div>

                {/* Search / Filter */}
                <section className="workshop-filter-section">
                    <div className="workshop-container">

                        <div className="workshop-filter-top">
                            <div>
                                <h2>Danh sách xưởng</h2>
                                <p>
                                    Khám phá các xưởng đang hợp tác cùng Oilia
                                </p>
                            </div>

                            <div className="workshop-search">
                                <span>⌕</span>
                                <input
                                    value={keyword}
                                    onChange={(e) =>
                                        setKeyword(e.target.value)
                                    }
                                    placeholder="Tìm kiếm xưởng..."
                                />
                            </div>
                        </div>

                        <div className="workshop-category-tabs">
                            {categories.map((item) => (
                                <button
                                    key={item}
                                    className={
                                        category === item ? "active" : ""
                                    }
                                    onClick={() => setCategory(item)}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                    </div>
                </section>

                {/* Workshop grid */}
                <section className="workshop-grid-section">
                    <div className="workshop-container">

                        <div className="workshop-result-count">
                            <span>
                                Hiển thị{" "}
                                <strong>{filteredWorkshops.length}</strong>{" "}
                                xưởng
                            </span>

                            <button className="workshop-sort">
                                Phổ biến nhất ▾
                            </button>
                        </div>

                        <div className="workshop-grid">
                            {filteredWorkshops.map((workshop) => (
                                <article
                                    className="workshop-card"
                                    key={workshop.id}
                                >
                                    <div className="workshop-card-image">
                                        <img
                                            src={workshop.image}
                                            alt={workshop.name}
                                        />

                                        <span className="workshop-verified">
                                            ✓ Đã xác minh
                                        </span>
                                    </div>

                                    <div className="workshop-card-body">

                                        <span className="workshop-card-category">
                                            {workshop.category}
                                        </span>

                                        <h3>{workshop.name}</h3>

                                        <p className="workshop-card-location">
                                            ⌖ {workshop.location}
                                        </p>

                                        <div className="workshop-card-rating">
                                            <strong>★ {workshop.rating}</strong>
                                            <span>
                                                ({workshop.reviews} đánh giá)
                                            </span>
                                        </div>

                                        <p className="workshop-card-description">
                                            {workshop.description}
                                        </p>

                                        <div className="workshop-card-tags">
                                            {workshop.tags.map((tag) => (
                                                <span key={tag}>{tag}</span>
                                            ))}
                                        </div>

                                        <div className="workshop-card-footer">
                                            <div>
                                                <strong>
                                                    {workshop.products}
                                                </strong>
                                                <span>Sản phẩm</span>
                                            </div>

                                            <Link to={`/customer/workshop/${workshop.id}`}>
                                                Xem xưởng →
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}