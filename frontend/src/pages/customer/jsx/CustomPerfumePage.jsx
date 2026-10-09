import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "../css/CustomPerfumePage.css";

const CustomPerfumePage = () => {
    const [selectedBottle, setSelectedBottle] = useState("1. Hổ phách");
    const [selectedLabel, setSelectedLabel] = useState("Minimalist Signature");
    const [customText, setCustomText] = useState("An Nhiên");
    const [selectedVolume, setSelectedVolume] = useState("30ml");
    const [selectedFactory, setSelectedFactory] = useState("Xưởng Đà Lạt Organic");

    const [topRatio, setTopRatio] = useState(30);
    const [midRatio, setMidRatio] = useState(50);
    const [baseRatio, setBaseRatio] = useState(20);

    const ingredients = [
        { id: 1, name: "Cam Bergamot Đồng Nai", note: "Top Note", desc: "Tươi mát, mọng nước" },
        { id: 2, name: "Vỏ Quế Trà Bồng", note: "Base Note", desc: "Ấm nóng, cay, ngọt", hot: true },
        { id: 3, name: "Oải Hương Mộc Châu", note: "Heart Note", desc: "Thư giãn, cân bằng" },
        { id: 4, name: "Trầm Hương Khánh Hòa", note: "Base Note", desc: "Sâu lắng, sang trọng" },
        { id: 5, name: "Gỗ Tuyết Tùng Đà Lạt", note: "Base Note", desc: "Ấm áp, mộc mạc" },
        { id: 6, name: "Hoa Lài Tây Bắc", note: "Heart Note", desc: "Thanh khiết, dịu dàng" },
    ];

    const getBottleClass = () => {
        if (selectedBottle.includes("Đen mờ")) return "bottle-black";
        if (selectedBottle.includes("Trong suốt")) return "bottle-clear";
        return "bottle-amber";
    };

    return (
        <div className="custom-perfume-wrapper">
            <Header />

            <main className="custom-perfume-container">
                <div className="custom-inner">
                    <h1 className="page-title">Thiết Kế Tinh Dầu Cá Nhân Hóa</h1>

                    <div className="custom-perfume-grid">
                        <div className="column-left">
                            <div className="card-box preview-box">
                                <div className="status-dot-container">
                                    <span className="status-dot"></span>
                                    Xem trước mẫu chai thực tế
                                </div>

                                <div className="bottle-mockup">
                                    <div className="bottle-cap"></div>
                                    <div className={`bottle-body ${getBottleClass()}`}>
                                        <p className="brand-title">OILIA ATELIER</p>
                                        <h3 className="product-title">SIGNATURE</h3>
                                        <p className="product-subtitle">Bespoke Blend</p>
                                        <p className="craft-tag">PHA CHẾ THỦ CÔNG</p>
                                        {customText && (
                                            <p className="custom-laser-text">{customText}</p>
                                        )}
                                    </div>
                                </div>

                                <p className="section-subtitle" style={{ marginTop: '0.75rem', textAlign: 'center' }}>
                                    Chai thủy tinh nắp nhỏ giọt - Khắc laser độc bản
                                </p>
                            </div>

                            <div className="card-box">
                                <label className="section-title" style={{ display: 'block' }}>Mẫu vỏ chai:</label>
                                <div className="bottle-options">
                                    {["1. Hổ phách", "2. Đen mờ", "3. Trong suốt"].map((item) => (
                                        <button
                                            key={item}
                                            type="button"
                                            onClick={() => setSelectedBottle(item)}
                                            className={`option-btn ${selectedBottle === item ? "active" : ""}`}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="card-box">
                                <div className="card-header-flex">
                                    <span className="section-title">Bộ sưu tập nhãn</span>
                                </div>

                                <div className="labels-grid">
                                    {[
                                        { name: "Minimalist Signature", desc: "Tối giản sang trọng" },
                                        { name: "Vintage Apothecary", desc: "Cổ điển Pháp" },
                                        { name: "Botanical Line-art", desc: "Nét vẽ thiên nhiên" },
                                        { name: "Modern Gold Foil", desc: "Hiện đại ép kim" },
                                    ].map((label) => (
                                        <div
                                            key={label.name}
                                            onClick={() => setSelectedLabel(label.name)}
                                            className={`label-card ${selectedLabel === label.name ? "active" : ""}`}
                                        >
                                            <p className="label-name">{label.name}</p>
                                            <p className="label-desc">{label.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <p className="section-title">Huy hiệu</p>
                                    <div className="badges-list">
                                        <span className="badge badge-red">Ấn sáp Wax Seal</span>
                                        <span className="badge badge-gray">Handcrafted VN</span>
                                        <span className="badge badge-red-outline">Huy hiệu Hoàng gia</span>
                                    </div>
                                </div>

                                <div style={{ paddingTop: '0.75rem' }}>
                                    <label className="section-title" style={{ display: 'block' }}>
                                        Khắc tên lên nhãn (Khắc laser thực tế):
                                    </label>
                                    <div className="input-flex">
                                        <input
                                            type="text"
                                            value={customText}
                                            onChange={(e) => setCustomText(e.target.value)}
                                            placeholder="Nhập tên của bạn..."
                                            className="text-input"
                                        />
                                        <button type="button" className="action-btn">Tải nhãn .PNG</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column-right">
                            <div className="card-box">
                                <h3 className="section-title" style={{ fontSize: '13px', marginBottom: '2px' }}>KHO NGUYÊN LIỆU TINH TUYỂN</h3>
                                <p className="section-subtitle">Chọn nguyên liệu đưa vào công thức phối hương của riêng bạn</p>

                                <div className="filter-tabs">
                                    <button type="button" className="tab-btn active">Tất cả (16)</button>
                                    <button type="button" className="tab-btn">Mùi thư giãn</button>
                                    <button type="button" className="tab-btn">Mùi sang trọng</button>
                                    <button type="button" className="tab-btn">Mùi thiên nhiên</button>
                                </div>

                                <div className="ingredients-grid">
                                    {ingredients.map((item) => (
                                        <div key={item.id} className="ingredient-card">
                                            {item.hot && <span className="hot-badge">NỔI BẬT</span>}
                                            <h4 className="ing-name">{item.name}</h4>
                                            <p className="ing-desc">{item.desc}</p>
                                            <span className="ing-note">{item.note}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="card-box">
                                <div className="card-header-flex">
                                    <h3 className="section-title" style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span className="status-dot"></span>
                                        PHỐI TỶ LỆ 3 TẦNG HƯƠNG
                                    </h3>
                                    <button type="button" className="btn-reset" onClick={() => { setTopRatio(30); setMidRatio(50); setBaseRatio(20); }}>
                                        Đặt lại mặc định (30-50-20)
                                    </button>
                                </div>

                                <div className="ratio-bar">
                                    <div style={{ width: `${topRatio}%` }} className="bar-top"></div>
                                    <div style={{ width: `${midRatio}%` }} className="bar-mid"></div>
                                    <div style={{ width: `${baseRatio}%` }} className="bar-base"></div>
                                </div>

                                <div className="note-tier-box tier-top">
                                    <div className="tier-header">
                                        <div>
                                            <span className="tier-title">TẦNG 1 • HƯƠNG ĐẦU</span>
                                            <span className="tier-subtext">(Top Notes: Lan tỏa tức thì, 15 – 30 phút)</span>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <span className="tier-percent">{topRatio}%</span>
                                        </div>
                                    </div>
                                    <p className="tier-content">
                                        Cam Bergamot Đồng Nai — <span className="tier-content-desc">Thanh khiết, tươi mát & nâng mood</span>
                                    </p>
                                </div>

                                <div className="note-tier-box tier-mid">
                                    <div className="tier-header">
                                        <div>
                                            <span className="tier-title">TẦNG 2 • HƯƠNG GIỮA</span>
                                            <span className="tier-subtext">(Heart Notes: Trái tim mùi hương, lưu 2 – 4h)</span>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <span className="tier-percent">{midRatio}%</span>
                                        </div>
                                    </div>
                                    <p className="tier-content">
                                        Oải Hương Mộc Châu — <span className="tier-content-desc">Thư giãn, cân bằng cảm xúc</span>
                                    </p>
                                </div>

                                <div className="note-tier-box tier-base">
                                    <div className="tier-header">
                                        <div>
                                            <span className="tier-title">TẦNG 3 • HƯƠNG ĐÁY</span>
                                            <span className="tier-subtext">(Base Notes: Nền tảng bền bỉ, lưu 6 – 8h+)</span>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <span className="tier-percent">{baseRatio}%</span>
                                        </div>
                                    </div>
                                    <p className="tier-content">
                                        Hoàng Đàn Atlas Lâm Viên — <span className="tier-content-desc">Trầm lắng, ấm áp & sâu sắc</span>
                                    </p>
                                </div>
                            </div>

                            <div className="card-box">
                                <h3 className="section-title">DUNG TÍCH ĐIỀU CHẾ</h3>
                                <div className="volume-grid">
                                    {[
                                        { size: "10ml", tag: "Dùng thử", price: "180.000đ" },
                                        { size: "30ml", tag: "Tỷ lệ vàng", price: "385.000đ", isStandard: true },
                                        { size: "50ml", tag: "Tiết kiệm 20%", price: "590.000đ" },
                                    ].map((vol) => (
                                        <div
                                            key={vol.size}
                                            onClick={() => setSelectedVolume(vol.size)}
                                            className={`volume-card ${selectedVolume === vol.size ? "active" : ""}`}
                                        >
                                            {vol.isStandard && <span className="standard-badge">TIÊU CHUẨN</span>}
                                            <p className="vol-size">{vol.size}</p>
                                            <p className="vol-tag">{vol.tag}</p>
                                            <p className="vol-price">{vol.price}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="card-box">
                                <div className="card-header-flex">
                                    <div>
                                        <h3 className="section-title" style={{ margin: 0 }}>XƯỞNG SẢN XUẤT BẢO CHỨNG</h3>
                                        <p className="section-subtitle" style={{ margin: 0, marginTop: '2px' }}>So sánh kỹ thuật & chi phí thực hiện</p>
                                    </div>
                                </div>

                                <div className="factory-grid">
                                    {[
                                        { name: "Xưởng Đà Lạt Organic", rating: "4.9 (1.2k)", loc: "Cao nguyên Lâm Viên", strength: "Chiết xuất Dầu thông đỏ & Oải hương tươi.", price: "385.000đ" },
                                        { name: "Lab Artisans Bảo Lộc", rating: "4.8 (850)", loc: "Lâm Đồng", strength: "Chưng cất lôi cuốn hơi nước phân đoạn.", price: "360.000đ" },
                                        { name: "Viện Hương Liệu Sài Gòn", rating: "4.95 (2.4k)", loc: "TP. Hồ Chí Minh", strength: "Kiểm nghiệm GC-MS & giao nhanh 24h.", price: "420.000đ" },
                                    ].map((fac) => (
                                        <div
                                            key={fac.name}
                                            onClick={() => setSelectedFactory(fac.name)}
                                            className={`factory-card ${selectedFactory === fac.name ? "active" : ""}`}
                                        >
                                            <div>
                                                <h4 className="fac-name">{fac.name}</h4>
                                                <p className="fac-rating">★ {fac.rating}</p>
                                                <p className="fac-loc">{fac.loc}</p>
                                            </div>
                                            <div className="fac-footer">
                                                <p className="fac-strength-text">{fac.strength}</p>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '12px', fontWeight: 'bold' }}>
                                                    <span style={{ color: '#ed2850' }}>{fac.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="summary-card">
                                <div className="summary-header">
                                    <div className="summary-title">
                                        <span>TỔNG KẾT CÔNG THỨC PHỐI HƯƠNG</span>
                                    </div>
                                    <span className="batch-tag">#OL-8492</span>
                                </div>
                                <div className="summary-content">
                                    <p>
                                        Hòa phối 3 nốt: <strong>Cam Bergamot ({topRatio}%) + Oải Hương ({midRatio}%) + Hoàng Đàn ({baseRatio}%)</strong>
                                    </p>
                                    <p>
                                        Dung tích: <strong>Extrait Pur {selectedVolume}</strong> • Bảo chứng: <strong>{selectedFactory}</strong>
                                    </p>
                                </div>

                                <div className="summary-price-row">
                                    <span>Tổng chi phí điều chế:</span>
                                    <strong className="total-price-text">385.000đ</strong>
                                </div>

                                <div className="custom-actions-group">
                                    <button type="button" className="save-formula-btn">
                                        Lưu công thức
                                    </button>
                                    <button type="button" className="submit-custom-btn">
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CustomPerfumePage;