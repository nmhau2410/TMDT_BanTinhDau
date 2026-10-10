import React, { useMemo, useState } from "react";
import {
    FiSearch,
    FiSliders,
    FiHeart,
    FiChevronDown,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../services/CartService.js";
import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer";
import ProductCard from "../../../components/ProductCard/ProductCard.jsx";

import { productDatabase } from "../../../test/data.js";

import "../css/ProductPage.css";

function ProductPage() {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    React.useEffect(() => {
        fetch("http://localhost:8080/api/products")
            .then(res => res.json())
            .then(data => {
                const mapProduct = (p) => ({
                    ...p,
                    category: p.type === "PERFUME" ? "nuoc-hoa" : p.type === "ESSENTIAL_OIL" ? "tinh-dau" : "nen-thom",
                    scent: p.scentNotes,
                    oldPrice: p.salePrice ? p.price : null,
                    price: p.salePrice ? p.salePrice : p.price,
                    origin: p.workshopProvince || "Việt Nam",
                    progress: p.stock > 0 ? Math.round((p.sold / (p.sold + p.stock)) * 100) : 0,
                    reviews: p.sold,
                });
                setProducts(data.map(mapProduct));
            })
            .catch(err => {
                console.error("Error fetching products:", err);
                setProducts(productDatabase?.products || []);
            });
    }, []);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [priceRange, setPriceRange] = useState("all");
    const [rating, setRating] = useState("all");
    const [sort, setSort] = useState("default");

    const [selectedGroups, setSelectedGroups] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const filteredProducts = useMemo(() => {
        let result = [...products];
        if (category !== "all") {
            result = result.filter(
                (product) => product.category === category
            );
        }

        if (priceRange !== "all") {
            const range = productDatabase.priceRanges?.find(
                (item) => item.value === priceRange
            );

            if (range) {
                result = result.filter((product) => {
                    const price = Number(product.price || 0);

                    return (
                        price >= range.min &&
                        price <= range.max
                    );
                });
            }
        }

        if (rating !== "all") {
            result = result.filter(
                (product) =>
                    Number(product.rating || 0) >= Number(rating)
            );
        }
        if (selectedGroups.length > 0) {
            result = result.filter((product) =>
                selectedGroups.includes(product.scent)
            );
        }
        if (sort === "price-asc") {
            result.sort(
                (a, b) =>
                    Number(a.price || 0) -
                    Number(b.price || 0)
            );
        }
        if (sort === "price-desc") {
            result.sort(
                (a, b) =>
                    Number(b.price || 0) -
                    Number(a.price || 0)
            );
        }

        if (sort === "rating") {
            result.sort(
                (a, b) =>
                    Number(b.rating || 0) -
                    Number(a.rating || 0)
            );
        }

        if (sort === "sold") {
            result.sort(
                (a, b) =>
                    Number(b.sold || 0) -
                    Number(a.sold || 0)
            );
        }

        return result;
    }, [
        products,
        search,
        category,
        priceRange,
        rating,
        selectedGroups,
        sort,
    ]);

    const toggleFavorite = (product) => {
        setFavorites((current) => {
            if (current.includes(product.id)) {
                return current.filter(
                    (id) => id !== product.id
                );
            }

            return [...current, product.id];
        });
    };

    const resetFilters = () => {
        setSearch("");
        setCategory("all");
        setPriceRange("all");
        setRating("all");
        setSelectedGroups([]);
        setSort("default");
    };

    const handleAdd = (product) => {
        if (!product) return;

        addToCart(product, 1);

        alert(`Đã thêm "${product.name}" vào giỏ hàng`);
    };

    const handleBuy = (product) => {
        if (!product) return;

        addToCart(product, 1);

        navigate("/cart");
    };

    const toggleGroup = (group) => {
        setSelectedGroups((current) => {
            if (current.includes(group)) {
                return current.filter(
                    (item) => item !== group
                );
            }

            return [...current, group];
        });
    };

    const scentGroups = [
        "Cam Bergamot",
        "Lavender Pháp",
        "Trầm hương",
        "Tuyết tùng",
        "Tràm trà Sa Pa",
    ];

    return (
        <div className="product-page">

            <Header />

            <main>

                <section className="product-layout">

                    <aside className="product-sidebar">

                        <div className="sidebar-heading">

                            <div>
                                <FiSliders />

                                <strong>
                                    Bộ lọc tìm kiếm
                                </strong>
                            </div>

                            <button
                                type="button"
                                onClick={resetFilters}
                            >
                                Đặt lại
                            </button>

                        </div>


                        <div className="filter-section">

                            <h3>
                                DANH MỤC
                            </h3>

                            <button
                                className={
                                    category === "all"
                                        ? "filter-check active"
                                        : "filter-check"
                                }
                                onClick={() =>
                                    setCategory("all")
                                }
                            >
                                <span className="check-box">
                                    {category === "all" && "✓"}
                                </span>

                                <span>
                                    Tất cả sản phẩm
                                </span>

                                <small>
                                    ({products.length})
                                </small>
                            </button>

                            {productDatabase.categories?.map(
                                (item) => (
                                    <button
                                        key={item.value}
                                        className={
                                            category === item.value
                                                ? "filter-check active"
                                                : "filter-check"
                                        }
                                        onClick={() =>
                                            setCategory(item.value)
                                        }
                                    >
                                        <span className="check-box">
                                            {category === item.value && "✓"}
                                        </span>

                                        <span>
                                            {item.label}
                                        </span>
                                    </button>
                                )
                            )}

                        </div>


                        <div className="filter-section">

                            <h3>
                                KHOẢNG GIÁ (VNĐ)
                            </h3>

                            <label className="radio-filter">
                                <input
                                    type="radio"
                                    name="price"
                                    checked={priceRange === "all"}
                                    onChange={() =>
                                        setPriceRange("all")
                                    }
                                />

                                <span>
                                    Tất cả
                                </span>
                            </label>

                            {productDatabase.priceRanges?.map(
                                (item) => (
                                    <label
                                        className="radio-filter"
                                        key={item.value}
                                    >
                                        <input
                                            type="radio"
                                            name="price"
                                            checked={
                                                priceRange === item.value
                                            }
                                            onChange={() =>
                                                setPriceRange(item.value)
                                            }
                                        />

                                        <span>
                                            {item.label}
                                        </span>
                                    </label>
                                )
                            )}

                            <div className="price-inputs">

                                <input
                                    type="text"
                                    placeholder="200.000"
                                />

                                <span>-</span>

                                <input
                                    type="text"
                                    placeholder="700.000"
                                />

                            </div>

                        </div>


                        <div className="filter-section">

                            <h3>
                                NHÓM MÙI
                            </h3>

                            <div className="scent-tags">

                                {scentGroups.map(
                                    (group) => (
                                        <button
                                            type="button"
                                            key={group}
                                            className={
                                                selectedGroups.includes(
                                                    group
                                                )
                                                    ? "scent-tag active"
                                                    : "scent-tag"
                                            }
                                            onClick={() =>
                                                toggleGroup(group)
                                            }
                                        >
                                            {group}
                                        </button>
                                    )
                                )}

                            </div>

                        </div>


                        <div className="filter-section">

                            <h3>
                                ĐÁNH GIÁ SAO
                            </h3>

                            {[5, 4, 3, 2, 1].map(
                                (value) => (
                                    <label
                                        className="rating-filter"
                                        key={value}
                                    >
                                        <input
                                            type="radio"
                                            name="rating"
                                            checked={
                                                rating === String(value)
                                            }
                                            onChange={() =>
                                                setRating(String(value))
                                            }
                                        />

                                        <span className="stars">
                                            {"★".repeat(value)}
                                            <span className="empty-stars">
                                                {"★".repeat(5 - value)}
                                            </span>
                                        </span>

                                        <small>
                                            (Từ {value} sao)
                                        </small>

                                    </label>
                                )
                            )}

                        </div>


                        <div className="filter-section">

                            <h3>
                                NÔNG TRẠI & XUẤT XỨ
                            </h3>

                            <label className="filter-check">
                                <span className="check-box" />
                                <span>
                                    Đà Lạt Organic
                                </span>
                                <small>(14)</small>
                            </label>

                            <label className="filter-check">
                                <span className="check-box" />
                                <span>
                                    Bảo Lộc Farm
                                </span>
                                <small>(8)</small>
                            </label>

                            <label className="filter-check">
                                <span className="check-box" />
                                <span>
                                    Hạ Giang Native
                                </span>
                                <small>(6)</small>
                            </label>

                            <label className="filter-check">
                                <span className="check-box" />
                                <span>
                                    Nhập khẩu Pháp
                                </span>
                                <small>(10)</small>
                            </label>

                        </div>


                        <div className="filter-actions">

                            <button
                                type="button"
                                onClick={() => {}}
                            >
                                Áp dụng
                            </button>

                            <button
                                type="button"
                                onClick={resetFilters}
                            >
                                Đặt lại
                            </button>

                        </div>

                    </aside>


                    <section className="product-results">

                        <div className="product-results-header">

                            <div>
                                <span>
                                    Hiển thị{" "}
                                    <strong>
                                        {filteredProducts.length}
                                    </strong>{" "}
                                    sản phẩm phù hợp tiêu chí
                                </span>
                                <div className="search-suggestions">

                                    {productDatabase.searchSuggestions?.map(
                                        (item) => (
                                            <button
                                                key={item}
                                                type="button"
                                                onClick={() =>
                                                    setSearch(item)
                                                }
                                            >
                                                {item}
                                            </button>
                                        )
                                    )}

                                </div>
                            </div>

                            <div className="sort-box">

                                <select
                                    value={sort}
                                    onChange={(e) =>
                                        setSort(e.target.value)
                                    }
                                >
                                    <option value="default">
                                        Sắp xếp
                                    </option>

                                    <option value="sold">
                                        Bán chạy nhất
                                    </option>

                                    <option value="rating">
                                        Đánh giá cao nhất
                                    </option>

                                    <option value="price-asc">
                                        Giá thấp đến cao
                                    </option>

                                    <option value="price-desc">
                                        Giá cao đến thấp
                                    </option>
                                </select>

                                <FiChevronDown />

                            </div>

                        </div>

                        {filteredProducts.length > 0 ? (

                            <div className="product-grid">

                                {filteredProducts.map(
                                    (product) => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            favorite={favorites.includes(
                                                product.id
                                            )}
                                            onFavorite={() =>
                                                toggleFavorite(product)
                                            }
                                            onAdd={handleAdd}
                                            onBuy={handleBuy}
                                        />
                                    )
                                )}

                            </div>

                        ) : (

                            <div className="empty-products">

                                <div className="empty-products-icon">
                                    <FiSearch />
                                </div>

                                <h2>
                                    Không tìm thấy sản phẩm
                                </h2>

                                <p>
                                    Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.
                                </p>

                            </div>

                        )}

                    </section>

                </section>

            </main>


            <Footer />

        </div>
    );
}

export default ProductPage;