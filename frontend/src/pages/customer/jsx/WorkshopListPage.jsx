import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import "../css/WorkshopListPage.css";

const workshops = [
    { id: 1, name: "Xuong Provence Farm", location: "Da Lat, Lam Dong", rating: 4.9, reviews: 312, products: 28, specialty: "Tinh dau hoa oai huong, hoa hong", badge: "Premium", desc: "Xuong chuyen san xuat tinh dau hoa tu nguyen lieu nhap khau truc tiep tu Phap va Bun-ga-ri." },
    { id: 2, name: "Xuong Da Lat Organic", location: "Da Lat, Lam Dong", rating: 4.8, reviews: 241, products: 34, specialty: "Tinh dau citrus, buoi, chanh", badge: "Organic", desc: "100% nguyen lieu huu co chung nhan USDA. Quy trinh ep lanh khong pha huy hoat chat." },
    { id: 3, name: "Xuong Botanical Australia", location: "TP Ho Chi Minh", rating: 4.7, reviews: 187, products: 21, specialty: "Tinh dau khuynh diep, tram tra", badge: "Imported", desc: "Phan phoi chinh thuc tinh dau nguyen chat tu Uc. Kiem dinh qua phong thi nghiem doc lap." },
    { id: 4, name: "Xuong Nordic Blend", location: "Ha Noi", rating: 4.8, reviews: 276, products: 19, specialty: "Tinh dau Bac Au, tung tuyết", badge: "Artisan", desc: "Cong thuc phoi huong theo truyen thong Bac Au. Moi lo san pham deu co so hieu rieng." },
    { id: 5, name: "Xuong Herb Garden", location: "Hue", rating: 4.6, reviews: 143, products: 16, specialty: "Tinh dau thao duoc, sa giang", badge: "Herbal", desc: "Vuon duoc lieu rong 5 hecta tai Hue. Chuyen san xuat tinh dau thao moc truyen thong Viet Nam." },
    { id: 6, name: "Xuong Mekong Delta", location: "Can Tho", rating: 4.7, reviews: 198, products: 23, specialty: "Tinh dau sa, xa, ot", badge: "Local", desc: "Khai thac nguyen lieu vung DBSCL. Chuong trinh hon tac nong dan ben vung." },
];

const BADGE_COLOR = {
    Premium: "#7c3aed",
    Organic: "#16a34a",
    Imported: "#0284c7",
    Artisan: "#b45309",
    Herbal: "#059669",
    Local: "#d97706",
};

export default function WorkshopListPage() {
    const [search, setSearch] = useState("");

    const filtered = workshops.filter(
        (w) =>
            w.name.toLowerCase().includes(search.toLowerCase()) ||
            w.specialty.toLowerCase().includes(search.toLowerCase()) ||
            w.location.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="wl-page">
            <Header />
            <main className="wl-main">
                {/* HERO */}
                <div className="wl-hero">
                    <div className="wl-hero__content">
                        <span className="wl-hero__badge">NETWORK</span>
                        <h1>Mang luoi Xuong San Xuat</h1>
                        <p>Ket noi truc tiep voi {workshops.length} xuong uy tin, dam bao chat luong nguyen lieu va quy trinh san xuat minh bach.</p>
                        <div className="wl-hero__stats">
                            <div><strong>{workshops.length}</strong><span>Xuong doi tac</span></div>
                            <div><strong>100%</strong><span>Kiem dinh chat luong</span></div>
                            <div><strong>1.5k+</strong><span>San pham</span></div>
                        </div>
                    </div>
                </div>

                {/* SEARCH */}
                <div className="wl-search-bar">
                    <input
                        type="text"
                        placeholder="Tim xuong theo ten, chuyen mon, khu vuc..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {search && (
                        <button type="button" onClick={() => setSearch("")}>✕</button>
                    )}
                </div>

                {/* GRID */}
                <div className="wl-grid">
                    {filtered.map((w) => (
                        <article key={w.id} className="wl-card">
                            <div className="wl-card__header">
                                <div className="wl-card__avatar">
                                    {w.name.charAt(0)}
                                </div>
                                <span
                                    className="wl-card__badge"
                                    style={{ background: BADGE_COLOR[w.badge] }}
                                >
                                    {w.badge}
                                </span>
                            </div>

                            <div className="wl-card__body">
                                <h2 className="wl-card__name">{w.name}</h2>
                                <div className="wl-card__location">📍 {w.location}</div>
                                <p className="wl-card__desc">{w.desc}</p>
                                <div className="wl-card__specialty">
                                    <span>🌿</span> {w.specialty}
                                </div>
                            </div>

                            <div className="wl-card__footer">
                                <div className="wl-card__stats">
                                    <span>⭐ {w.rating}</span>
                                    <span>({w.reviews} danh gia)</span>
                                    <span>•</span>
                                    <span>{w.products} san pham</span>
                                </div>
                                <Link
                                    to={`/workshops/${w.id}`}
                                    className="wl-card__btn"
                                >
                                    Xem chi tiet →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="wl-empty">
                        <div>🔍</div>
                        <h3>Khong tim thay xuong</h3>
                        <p>Thu thay doi tu khoa tim kiem.</p>
                    </div>
                )}
            </main>
        </div>
    );
}
