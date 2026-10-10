import React, { useMemo, useState } from "react";
import {
    FiSearch,
    FiSliders,
    FiHeart,
    FiChevronDown,
    FiMapPin,
    FiPackage,
    FiCheckCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";

import { productDatabase } from "../../../test/data.js";
import "../css/WorkshopList.css";

const products = productDatabase?.products || [];

const initialWorkshops = [
    {
        id: 1,
        name: "Xưởng Thảo Mộc Hưng Yên",
        category: "tinh-dau-thao-moc",
        categoryName: "Tinh dầu thảo mộc",
        location: "Hưng Yên, Việt Nam",
        origin: "hung-yen",
        rating: 4.9,
        reviews: 4320,
        productsCount: 8,
        description:
            "Chuyên sản xuất tinh dầu thảo mộc nguyên chất với quy trình chưng cất hơi nước truyền thống.",
        image: products.find((p) => p.id === 302)?.image || "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800",
        tags: ["Hơi nước", "Organic", "OEM/ODM"],
        certified: true,
        method: "hoi-nuoc",
    },
    {
        id: 2,
        name: "Xưởng Provence Farm",
        category: "tinh-dau-hoa",
        categoryName: "Tinh dầu hoa",
        location: "Provence, Pháp",
        origin: "phap",
        rating: 4.9,
        reviews: 3180,
        productsCount: 12,
        description:
            "Xưởng chuyên các dòng tinh dầu hoa và thảo mộc cao cấp từ vùng Provence.",
        image: products.find((p) => p.id === 101)?.image || "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=800",
        tags: ["Lavender", "Organic", "Premium"],
        certified: true,
        method: "hoi-nuoc",
    },
    {
        id: 3,
        name: "Xưởng Nông Nguyên",
        category: "tinh-dau-citrus",
        categoryName: "Tinh dầu citrus",
        location: "Bến Tre, Việt Nam",
        origin: "ben-tre",
        rating: 4.8,
        reviews: 2760,
        productsCount: 10,
        description:
            "Nguồn nguyên liệu địa phương, chuyên tinh dầu bưởi và các sản phẩm chiết xuất tự nhiên.",
        image: products.find((p) => p.id === 102)?.image || "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=800",
        tags: ["Ép lạnh", "Bến Tre", "Tự nhiên"],
        certified: true,
        method: "ep-lanh",
    },
    {
        id: 4,
        name: "Xưởng New South Wales",
        category: "tinh-dau-huu-co",
        categoryName: "Tinh dầu hữu cơ",
        location: "New South Wales, Australia",
        origin: "australia",
        rating: 4.9,
        reviews: 2420,
        productsCount: 9,
        description:
            "Xưởng chuyên các dòng tinh dầu hữu cơ Australia, nổi bật với Tea Tree.",
        image: products.find((p) => p.id === 103)?.image || "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800",
        tags: ["Organic", "Tea Tree", "Australia"],
        certified: true,
        method: "hoi-nuoc",
    },
    {
        id: 5,
        name: "Xưởng Đà Lạt Forest",
        category: "huong-thom-nen",
        categoryName: "Hương thơm & nến",
        location: "Đà Lạt, Việt Nam",
        origin: "da-lat",
        rating: 4.8,
        reviews: 1980,
        productsCount: 7,
        description:
            "Các sản phẩm hương thơm lấy cảm hứng từ thiên nhiên Đà Lạt.",
        image: products.find((p) => p.id === 202)?.image || "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=800",
        tags: ["Handmade", "Đà Lạt", "Natural"],
        certified: true,
        method: "thu-cong",
    },
    {
        id: 6,
        name: "Xưởng Citrus Farm",
        category: "tinh-dau-trai-cay",
        categoryName: "Tinh dầu trái cây",
        location: "Việt Nam",
        origin: "viet-nam",
        rating: 4.8,
        reviews: 2150,
        productsCount: 11,
        description:
            "Chuyên tinh dầu cam, chanh và các dòng citrus ép lạnh tự nhiên.",
        image: products.find((p) => p.id === 307)?.image || "https://images.unsplash.com/photo-1512290900676-26c2a6a095ae?q=80&w=800",
        tags: ["Citrus", "Ép lạnh", "Natural"],
        certified: true,
        method: "ep-lanh",
    },
];

const workshopCategories = [
    { value: "tinh-dau-thao-moc", label: "Tinh dầu thảo mộc" },
    { value: "tinh-dau-hoa", label: "Tinh dầu hoa" },
    { value: "tinh-dau-citrus", label: "Tinh dầu citrus" },
    { value: "tinh-dau-huu-co", label: "Tinh dầu hữu cơ" },
    { value: "huong-thom-nen", label: "Hương thơm & nến" },
    { value: "tinh-dau-trai-cay", label: "Tinh dầu trái cây" },
];

const workshopOrigins = [
    { value: "da-lat", label: "Đà Lạt Forest" },
    { value: "ben-tre", label: "Nông sản Bến Tre" },
    { value: "hung-yen", label: "Thảo mộc Hưng Yên" },
    { value: "phap", label: "Nhập khẩu Pháp" },
];

export default function WorkshopList() {
    const [workshops] = useState(initialWorkshops);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [origin, setOrigin] = useState("all");
    const [rating, setRating] = useState("all");
    const [sort, setSort] = useState("default");

    const [selectedTags, setSelectedTags] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const tagOptions = [
        "Hơi nước",
        "Organic",
        "OEM/ODM",
        "Lavender",
        "Ép lạnh",
        "Handmade",
    ];

    const toggleTag = (tag) => {
        setSelectedTags((current) =>
            current.includes(tag)
                ? current.filter((item) => item !== tag)
                : [...current, tag]
        );
    };

    const toggleFavorite = (id) => {
        setFavorites((current) =>
            current.includes(id)
                ? current.filter((favId) => favId !== id)
                : [...current, id]
        );
    };

    const resetFilters = () => {
        setSearch("");
        setCategory("all");
        setOrigin("all");
        setRating("all");
        setSelectedTags([]);
        setSort("default");
    };

    const filteredWorkshops = useMemo(() => {
        let result = [...workshops];

        if (search.trim() !== "") {
            const query = search.toLowerCase();
            result = result.filter(
                (w) =>
                    w.name.toLowerCase().includes(query) ||
                    w.location.toLowerCase().includes(query) ||
                    w.description.toLowerCase().includes(query)
            );
        }

        if (category !== "all") {
            result = result.filter((w) => w.category === category);
        }

        if (origin !== "all") {
            result = result.filter((w) => w.origin === origin);
        }

        if (rating !== "all") {
            result = result.filter((w) => Number(w.rating) >= Number(rating));
        }

        if (selectedTags.length > 0) {
            result = result.filter((w) =>
                selectedTags.some((tag) => w.tags.includes(tag))
            );
        }

        if (sort === "rating") {
            result.sort((a, b) => Number(b.rating) - Number(a.rating));
        } else if (sort === "reviews") {
            result.sort((a, b) => Number(b.reviews) - Number(a.reviews));
        } else if (sort === "products") {
            result.sort((a, b) => Number(b.productsCount) - Number(a.productsCount));
        }

        return result;
    }, [workshops, search, category, origin, rating, selectedTags, sort]);

    return (
        <div className="product-page">
            <Header />

            <main>
                <section className="product-layout">
                    <aside className="product-sidebar">
                        <div className="sidebar-heading">
                            <div>
                                <FiSliders />
                                <strong>Bộ lọc tìm kiếm</strong>
                            </div>
                            <button type="button" onClick={resetFilters}>
                                Đặt lại
                            </button>
                        </div>

                        <div className="filter-section">
                            <h3>DANH MỤC XƯỞNG</h3>

                            <button
                                type="button"
                                className={`filter-check ${category === "all" ? "active" : ""}`}
                                onClick={() => setCategory("all")}
                            >
                                <span className="check-box">
                                    {category === "all" && "✓"}
                                </span>
                                <span>Tất cả xưởng</span>
                                <small>({workshops.length})</small>
                            </button>

                            {workshopCategories.map((item) => (
                                <button
                                    key={item.value}
                                    type="button"
                                    className={`filter-check ${category === item.value ? "active" : ""}`}
                                    onClick={() => setCategory(item.value)}
                                >
                                    <span className="check-box">
                                        {category === item.value && "✓"}
                                    </span>
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>

                        <div className="filter-section">
                            <h3>NÔNG TRẠI & XUẤT XỨ</h3>

                            <label className="radio-filter">
                                <input
                                    type="radio"
                                    name="origin"
                                    checked={origin === "all"}
                                    onChange={() => setOrigin("all")}
                                />
                                <span>Tất cả vùng miền</span>
                            </label>

                            {workshopOrigins.map((item) => (
                                <label key={item.value} className="radio-filter">
                                    <input
                                        type="radio"
                                        name="origin"
                                        checked={origin === item.value}
                                        onChange={() => setOrigin(item.value)}
                                    />
                                    <span>{item.label}</span>
                                </label>
                            ))}
                        </div>

                        <div className="filter-section">
                            <h3>ĐẶC TÍNH & ĐẠT CHUẨN</h3>
                            <div className="scent-tags">
                                {tagOptions.map((tag) => (
                                    <button
                                        type="button"
                                        key={tag}
                                        className={`scent-tag ${selectedTags.includes(tag) ? "active" : ""}`}
                                        onClick={() => toggleTag(tag)}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="filter-section">
                            <h3>ĐÁNH GIÁ SAO</h3>
                            {[5, 4, 3].map((value) => (
                                <label className="rating-filter" key={value}>
                                    <input
                                        type="radio"
                                        name="rating"
                                        checked={rating === String(value)}
                                        onChange={() => setRating(String(value))}
                                    />
                                    <span className="stars">
                                        {"★".repeat(value)}
                                        <span className="empty-stars">
                                            {"★".repeat(5 - value)}
                                        </span>
                                    </span>
                                    <small>(Từ {value} sao)</small>
                                </label>
                            ))}
                        </div>

                        <div className="filter-actions">
                            <button type="button" onClick={() => {}}>
                                Áp dụng
                            </button>
                            <button type="button" onClick={resetFilters}>
                                Đặt lại
                            </button>
                        </div>
                    </aside>

                    <section className="product-results">
                        <div className="product-results-header">
                            <div>
                                <span>
                                    Hiển thị <strong>{filteredWorkshops.length}</strong> xưởng sản xuất phù hợp tiêu chí
                                </span>
                            </div>

                            <div className="results-controls-right">
                                <div className="inline-search-box">
                                    <FiSearch />
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Tìm tên xưởng, địa điểm..."
                                    />
                                </div>

                                <div className="sort-box">
                                    <select
                                        value={sort}
                                        onChange={(e) => setSort(e.target.value)}
                                    >
                                        <option value="default">Sắp xếp</option>
                                        <option value="reviews">Được quan tâm nhất</option>
                                        <option value="rating">Đánh giá cao nhất</option>
                                        <option value="products">Nhiều sản phẩm nhất</option>
                                    </select>
                                    <FiChevronDown />
                                </div>
                            </div>
                        </div>

                        {filteredWorkshops.length > 0 ? (
                            <div className="workshop-grid-layout">
                                {filteredWorkshops.map((workshop) => {
                                    const isFav = favorites.includes(workshop.id);
                                    return (
                                        <article className="workshop-item-card" key={workshop.id}>
                                            <div className="workshop-img-box">
                                                <img src={workshop.image} alt={workshop.name} />
                                                <span className="workshop-badge-verified">
                                                    <FiCheckCircle /> Đã xác minh
                                                </span>
                                                <button
                                                    type="button"
                                                    className={`workshop-btn-fav ${isFav ? "active" : ""}`}
                                                    onClick={() => toggleFavorite(workshop.id)}
                                                >
                                                    <FiHeart />
                                                </button>
                                            </div>

                                            <div className="workshop-info-box">
                                                <span className="workshop-cat-tag">
                                                    {workshop.categoryName}
                                                </span>

                                                <h3 className="workshop-title">{workshop.name}</h3>

                                                <p className="workshop-loc">
                                                    <FiMapPin /> {workshop.location}
                                                </p>

                                                <div className="workshop-rate-row">
                                                    <strong className="rate-star">★ {workshop.rating}</strong>
                                                    <span className="rate-count">
                                                        ({workshop.reviews} đánh giá)
                                                    </span>
                                                </div>

                                                <p className="workshop-desc">{workshop.description}</p>

                                                <div className="workshop-tag-list">
                                                    {workshop.tags.map((tag) => (
                                                        <span key={tag}>{tag}</span>
                                                    ))}
                                                </div>

                                                <div className="workshop-card-bottom">
                                                    <div className="workshop-count-stat">
                                                        <FiPackage />
                                                        <span><strong>{workshop.productsCount}</strong> Sản phẩm</span>
                                                    </div>

                                                    <Link
                                                        to={`/customer/workshop/${workshop.id}`}
                                                        className="btn-link-workshop"
                                                    >
                                                        Xem xưởng →
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="empty-products">
                                <div className="empty-products-icon">
                                    <FiSearch />
                                </div>
                                <h2>Không tìm thấy xưởng phù hợp</h2>
                                <p>Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.</p>
                                <button type="button" onClick={resetFilters} style={{ marginTop: "12px" }}>
                                    Xóa tất cả bộ lọc
                                </button>
                            </div>
                        )}
                    </section>
                </section>
            </main>

            <Footer />
        </div>
    );
}