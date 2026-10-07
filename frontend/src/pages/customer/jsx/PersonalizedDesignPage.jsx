import React, { useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import "../css/PersonalizedDesignPage.css";

/* ============================================================
   MOCK DATA
============================================================ */
const ALL_INGREDIENTS = [
  // Top Notes
  { id: "t1", name: "Cam Bergamot Đồng Nai", layer: "top", scent: "Tươi mát, mọng nước", desc: "Thanh khiết, tươi mát & nâng mood", tags: ["Citrus", "Tươi mát"] },
  { id: "t2", name: "Chanh Vàng Sicily", layer: "top", scent: "Sáng, sắc nét", desc: "Khai vị sảng khoái, năng động", tags: ["Citrus", "Sắc nét"] },
  { id: "t3", name: "Bưởi Hồng Đào", layer: "top", scent: "Ngọt nhẹ, chua thanh", desc: "Dịu nhẹ, nữ tính, tinh tế", tags: ["Citrus", "Ngọt"] },
  { id: "t4", name: "Vỏ Quế Trà Bồng", layer: "top", scent: "Ấm nồng, cay nhẹ, ngọt", desc: "Khởi đầu ấm áp, gợi cảm giác quen thuộc", tags: ["Spicy", "Ấm"] },
  { id: "t5", name: "Hồ Tiêu Đen", layer: "top", scent: "Cay, nóng, mạnh mẽ", desc: "Cá tính, bí ẩn", tags: ["Spicy", "Mạnh"] },
  { id: "t6", name: "Bạc Hà Đà Lạt", layer: "top", scent: "Mát lạnh, sảng khoái", desc: "Khai vị mát mẻ, thư giãn", tags: ["Fresh", "Mát lạnh"] },
  // Heart Notes
  { id: "h1", name: "Oải Hương Mộc Châu", layer: "heart", scent: "Hoa, thư thái, ngọt nhẹ", desc: "Thư giãn, cân bằng nhịp sinh học", tags: ["Floral", "Thư thái"] },
  { id: "h2", name: "Hoa Hồng Đà Lạt", layer: "heart", scent: "Hoa hồng kinh điển", desc: "Lãng mạn, nữ tính, sang trọng", tags: ["Floral", "Lãng mạn"] },
  { id: "h3", name: "Ylang Ylang Java", layer: "heart", scent: "Ngọt ngào, quyến rũ", desc: "Gợi cảm, phương Đông bí ẩn", tags: ["Floral", "Quyến rũ"] },
  { id: "h4", name: "Cỏ Vetiver Bến Tre", layer: "heart", scent: "Đất, rễ cây, khói nhẹ", desc: "Ổn định, trưởng thành, sâu sắc", tags: ["Earthy", "Gỗ"] },
  { id: "h5", name: "Sả Chanh Phú Quốc", layer: "heart", scent: "Thảo mộc, tươi xanh", desc: "Năng lượng tích cực, không gian sạch", tags: ["Herbal", "Tươi"] },
  { id: "h6", name: "Jasmine Sambac", layer: "heart", scent: "Hoa lài ngọt ngào, dịu dàng", desc: "Nữ tính tối thượng, quyến rũ", tags: ["Floral", "Ngọt"] },
  // Base Notes
  { id: "b1", name: "Hoàng Đàn Atlas Lâm Viên", layer: "base", scent: "Gỗ ấm, khói, đất", desc: "Trầm lắng, âm ấp & định hình cấu trúc", tags: ["Woody", "Trầm"] },
  { id: "b2", name: "Trầm Hương Khánh Hòa", layer: "base", scent: "Khói linh thiêng, gỗ thiêng", desc: "Thiền định, thanh tịnh, bền lâu", tags: ["Woody", "Thiêng liêng"] },
  { id: "b3", name: "Xạ Hương Trắng", layer: "base", scent: "Sạch, ấm, gần gũi", desc: "Kết thúc hoàn hảo, da thịt ấm", tags: ["Musk", "Sạch"] },
  { id: "b4", name: "Vani Madagascar", layer: "base", scent: "Ngọt ngào, kem, ấm áp", desc: "Ngọt dịu, dễ chịu, phổ quát", tags: ["Sweet", "Ngọt"] },
  { id: "b5", name: "Hổ Phách Đỏ", layer: "base", scent: "Nhựa cây, ấm, bao bọc", desc: "Sang trọng, bền bỉ, mê hoặc", tags: ["Resinous", "Sang trọng"] },
  { id: "b6", name: "Gỗ Đàn Hương Ấn Độ", layer: "base", scent: "Kem, gỗ mịn, ấm áp", desc: "Thư thái, thanh lịch, cao cấp", tags: ["Woody", "Kem"] },
];

const WORKSHOPS = [
  { id: "w1", name: "Xưởng Đà Lạt Organic", location: "Lâm Đồng", badge: "KHUYÊN DÙNG", badgeColor: "#38a169", rating: 4.9, reviews: 1321, strengths: "Chiết xuất Đầu tông đỏ & Oải hương tươi hữu cơ", time: "2d – 48h", price: 385000 },
  { id: "w2", name: "Lab Artisans Bảo Lộc", location: "Lâm Đồng", badge: "GIÁ TỐT NHẤT", badgeColor: "#d69e2e", rating: 4.8, reviews: 690, strengths: "Chưng cất tối giản cuốn hoạt nước phân đoạn cổ truyền", time: "3 – 4 ngày", price: 360000 },
  { id: "w3", name: "Viện Hương Liệu Sài Gòn", location: "TP. Hồ Chí Minh", badge: "CHUẨN KIỂM NGHIỆM", badgeColor: "#3182ce", rating: 4.95, reviews: 412, strengths: "Sắc ký GC-MS & hoàn thiện giải hóa tốc 24h", time: "Siêu tốc 24h", price: 420000 },
];

const LABEL_TEMPLATES = [
  { id: "l1", name: "Minimalist Signature", desc: "Tinh tế, Thanh lịch", color: "#2d3748", preview: "MS" },
  { id: "l2", name: "Vintage Apothecary", desc: "Cổ điển, Sang trọng", color: "#744210", preview: "VA" },
  { id: "l3", name: "Botanical Line-art", desc: "Hoa tiết thực vật, tự nhiên", color: "#276749", preview: "BL" },
  { id: "l4", name: "Modern Gold Foil", desc: "Nền đen mờ + Ép kim vàng", color: "#1a1a2e", preview: "GF" },
];

const BOTTLE_SHAPES = [
  { id: "s1", name: "Hổ phách", color: "#b7791f" },
  { id: "s2", name: "Đen mờ", color: "#2d3748" },
  { id: "s3", name: "Trong suốt", color: "#e2e8f0" },
];

const CONCENTRATIONS = [
  { id: "c1", ml: "10ml", label: "Dùng thử", price: 180000 },
  { id: "c2", ml: "30ml", label: "Tiêu chuẩn", price: 385000, highlight: true },
  { id: "c3", ml: "50ml", label: "Tiết kiệm 20%", price: 590000 },
];

const SCENT_LAYERS = [
  { key: "top", label: "Tầng 1 · Hương Đầu", sub: "Top Notes: Lan tỏa tức thì, 15 – 30 phút", color: "#f6ad55", accentBg: "#fffaf0" },
  { key: "heart", label: "Tầng 2 · Hương Giữa", sub: "Heart Notes: Trái tim mùi hương, lưu 2 – 4h", color: "#fc8181", accentBg: "#fff5f5" },
  { key: "base", label: "Tầng 3 · Hương Đáy", sub: "Base Notes: Nền tảng bền bỉ, lưu 6 – 8h+", color: "#68d391", accentBg: "#f0fff4" },
];

/* ============================================================
   HELPERS
============================================================ */
function money(val) {
  return new Intl.NumberFormat("vi-VN").format(val) + "đ";
}
function Star({ size = 12, filled }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill={filled ? "#f6ad55" : "#e2e8f0"}>
      <polygon points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7" />
    </svg>
  );
}
function Stars({ rating, size = 12 }) {
  return (
    <span style={{ display: "inline-flex", gap: 1 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={size} filled={i <= Math.round(rating)} />
      ))}
    </span>
  );
}

/* ============================================================
   INGREDIENT CARD
============================================================ */
function IngredientCard({ item, selected, onSelect }) {
  return (
    <div
      className={`pds-ingredient-card${selected ? " selected" : ""}`}
      onClick={() => onSelect(item)}
      title={item.desc}
    >
      <div className="pds-ing-top">
        <span className="pds-ing-name">{item.name}</span>
        {selected && <span className="pds-ing-check">✓</span>}
      </div>
      <span className="pds-ing-scent">{item.scent}</span>
      <div className="pds-ing-tags">
        {item.tags.map((t) => (
          <span key={t} className="pds-ing-tag">{t}</span>
        ))}
      </div>
      <div className="pds-ing-drag">⠿ Kéo hoặc chọn</div>
    </div>
  );
}

/* ============================================================
   LAYER RATIO SLIDER
============================================================ */
function LayerSlider({ layer, value, onChange, ingredient, onSwap }) {
  const colorMap = { top: "#f6ad55", heart: "#fc8181", base: "#68d391" };
  return (
    <div className="pds-layer-row" style={{ "--layer-color": colorMap[layer.key] }}>
      <div className="pds-layer-header">
        <div className="pds-layer-info">
          <span className="pds-layer-label">{layer.label}</span>
          <span className="pds-layer-sub">{layer.sub}</span>
        </div>
        <span className="pds-layer-pct">{value}%</span>
      </div>
      <div className="pds-layer-ingredient">
        {ingredient ? (
          <span className="pds-layer-ing-name">
            <b>{ingredient.name}</b> — {ingredient.desc}
          </span>
        ) : (
          <span className="pds-layer-ing-empty">Chưa chọn nguyên liệu</span>
        )}
        <button className="pds-swap-btn" onClick={onSwap}>Đổi nốt</button>
      </div>
      <input
        type="range"
        min="10"
        max="70"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="pds-range"
        style={{ "--pct": `${value}%`, "--color": colorMap[layer.key] }}
      />
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */
export default function PersonalizedDesignPage() {
  const [selected, setSelected] = useState({ top: null, heart: null, base: null });
  const [ratios, setRatios] = useState({ top: 30, heart: 50, base: 20 });
  const [filterLayer, setFilterLayer] = useState("all");
  const [bottleShape, setBottleShape] = useState("s1");
  const [labelTemplate, setLabelTemplate] = useState("l1");
  const [engraveName, setEngraveName] = useState("");
  const [concentration, setConcentration] = useState("c2");
  const [workshop, setWorkshop] = useState("w1");
  const dragItem = useRef(null);

  const handleSelectIngredient = useCallback((item) => {
    setSelected((prev) => ({ ...prev, [item.layer]: item }));
  }, []);

  const handleRatioChange = (layer, val) => {
    setRatios((prev) => {
      const others = Object.keys(prev).filter((k) => k !== layer);
      const remaining = 100 - val;
      const total = others.reduce((s, k) => s + prev[k], 0);
      const newRatios = { ...prev, [layer]: val };
      if (total > 0) {
        others.forEach((k) => {
          newRatios[k] = Math.round((prev[k] / total) * remaining);
        });
      } else {
        const each = Math.floor(remaining / others.length);
        others.forEach((k, i) => {
          newRatios[k] = i === 0 ? remaining - each * (others.length - 1) : each;
        });
      }
      return newRatios;
    });
  };

  const handleSwap = (layer) => {
    setSelected((prev) => ({ ...prev, [layer]: null }));
  };

  const selectedConcentration = CONCENTRATIONS.find((c) => c.id === concentration);
  const selectedWorkshop = WORKSHOPS.find((w) => w.id === workshop);
  const selectedBottle = BOTTLE_SHAPES.find((b) => b.id === bottleShape);
  const selectedLabel = LABEL_TEMPLATES.find((l) => l.id === labelTemplate);
  const formulaCode = `#OL-${8492}`;

  const filteredIngredients = ALL_INGREDIENTS.filter((item) => {
    if (filterLayer !== "all" && item.layer !== filterLayer) return false;
    return true;
  });

  const formulaSummary = SCENT_LAYERS.map((l) => ({
    layer: l,
    ingredient: selected[l.key],
    pct: ratios[l.key],
  }));

  return (
    <div className="pds-page">
      <Header />

      <main className="pds-main">
        {/* BREADCRUMB */}
        <div className="pds-breadcrumb">
          <Link to="/customer/products">Trang chủ</Link>
          <span>/</span>
          <strong>Thiết kế tinh dầu cá nhân hóa</strong>
        </div>

        {/* HERO */}
        <div className="pds-hero">
          <div className="pds-hero-text">
            <div className="pds-hero-badge">OILIA ATELIER · HAUTE PARFUMERIE</div>
            <h1>Thiết kế tinh dầu <em>cá nhân hóa</em></h1>
            <p>Sáng tạo công thức phối hương độc bản, lựa chọn tỷ lệ 3 tầng hương và xưởng sản xuất phù hợp nhất.</p>
          </div>
          <div className="pds-hero-steps">
            {["Chọn nguyên liệu", "Phối tỷ lệ hương", "Tuỳ chỉnh chai & nhãn", "Chọn xưởng & đặt hàng"].map((s, i) => (
              <div key={i} className="pds-step">
                <span className="pds-step-num">{i + 1}</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BODY */}
        <div className="pds-body">

          {/* LEFT — BOTTLE PREVIEW */}
          <aside className="pds-bottle-panel">
            <div className="pds-panel-label">Mẫu chai & nhãn thiết kế</div>

            {/* Bottle visualization */}
            <div className="pds-bottle-wrap">
              <div className="pds-bottle-drop-zone">
                <div
                  className="pds-bottle-body"
                  style={{
                    background:
                      selectedBottle?.id === "s3"
                        ? "linear-gradient(135deg,rgba(242,248,255,0.9),rgba(210,225,240,0.7))"
                        : selectedBottle?.id === "s2"
                        ? "linear-gradient(135deg,#2d3748,#1a202c)"
                        : "linear-gradient(135deg,#d69e2e,#b7791f)"
                  }}
                >
                  <div className="pds-bottle-neck" />
                  <div className="pds-bottle-cap" />
                  <div className="pds-bottle-label-preview" style={{ background: selectedLabel?.color, color: "#fff" }}>
                    <div className="pds-bottle-brand">OILIA ATELIER</div>
                    <div className="pds-bottle-title">SIGNATURE</div>
                    <div className="pds-bottle-subtitle">{engraveName || "Bespoke Blend"}</div>
                    <div className="pds-bottle-sub2">HOA HƯƠNG THỦ CÔNG</div>
                    <div className="pds-bottle-code">{selectedLabel?.preview}</div>
                  </div>
                  <div className="pds-bottle-layers">
                    <div className="pds-blay pds-blay-base" style={{ height: `${ratios.base}%` }} />
                    <div className="pds-blay pds-blay-heart" style={{ height: `${ratios.heart}%` }} />
                    <div className="pds-blay pds-blay-top" style={{ height: `${ratios.top}%` }} />
                  </div>
                </div>
              </div>
              <div className="pds-bottle-note">
                Chai thuỷ tinh nắp nhỏ gọn · <strong>Khắc laser độc bản</strong>
              </div>
            </div>

            {/* Bottle shape */}
            <div className="pds-bottle-shapes">
              <div className="pds-sub-label">Màu vỏ:</div>
              {BOTTLE_SHAPES.map((s) => (
                <button
                  key={s.id}
                  className={`pds-shape-btn${bottleShape === s.id ? " active" : ""}`}
                  style={{ "--shape-color": s.color }}
                  onClick={() => setBottleShape(s.id)}
                >
                  {s.name}
                </button>
              ))}
            </div>

            {/* Labels */}
            <div className="pds-labels-section">
              <div className="pds-section-title">
                Bộ sưu tập nhãn
                <small>4 mẫu sẵn có</small>
              </div>
              <p className="pds-labels-desc">Chọn mẫu nhãn bên dưới để thay đổi phong cách hiển thị trên chai.</p>
              <div className="pds-label-grid">
                {LABEL_TEMPLATES.map((l) => (
                  <div
                    key={l.id}
                    className={`pds-label-card${labelTemplate === l.id ? " active" : ""}`}
                    onClick={() => setLabelTemplate(l.id)}
                  >
                    <div className="pds-label-thumb" style={{ background: l.color, color: "#fff" }}>{l.preview}</div>
                    <div className="pds-label-info">
                      <div className="pds-label-name">{l.name}</div>
                      <div className="pds-label-desc">{l.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stamps */}
            <div className="pds-stamps">
              <div className="pds-sub-label">Huy hiệu</div>
              <div className="pds-stamp-row">
                <div className="pds-stamp red">Ấn sáp đỏ Wax Seal</div>
                <div className="pds-stamp">Handcrafted VN</div>
                <div className="pds-stamp">Huy hiệu Hoàng gia</div>
              </div>
            </div>

            {/* Name engrave */}
            <div className="pds-engrave-section">
              <div className="pds-section-title">
                Khắc tên lên nhãn <em>(Xem trước)</em>:
              </div>
              <div className="pds-engrave-row">
                <input
                  type="text"
                  className="pds-engrave-input"
                  placeholder="Nhập tên cần khắc"
                  value={engraveName}
                  onChange={(e) => setEngraveName(e.target.value)}
                  maxLength={30}
                />
              </div>
            </div>
          </aside>

          {/* RIGHT — DESIGN PANEL */}
          <div className="pds-design-panel">

            {/* SECTION 1: KHO NGUYÊN LIỆU */}
            <section className="pds-section" id="section-ingredients">
              <div className="pds-section-head">
                <div>
                  <h2>Kho nguyên liệu tuyển chọn</h2>
                  <p>Chọn các nguyên liệu tương ứng cho các tầng hương của bạn</p>
                </div>
                <span className="pds-count-badge">Tất cả ({ALL_INGREDIENTS.length})</span>
              </div>

              {/* Layer filter tabs */}
              <div className="pds-layer-tabs">
                {[
                  { key: "all", label: "Tất cả" },
                  { key: "top", label: "Hương thư giãn" },
                  { key: "heart", label: "Hương sang trọng" },
                  { key: "base", label: "Hương quý phái" },
                ].map((t) => (
                  <button
                    key={t.key}
                    className={`pds-layer-tab${filterLayer === t.key ? " active" : ""}`}
                    onClick={() => setFilterLayer(t.key)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Ingredient grid */}
              <div className="pds-ingredient-grid">
                {filteredIngredients.map((item) => (
                  <IngredientCard
                    key={item.id}
                    item={item}
                    selected={Object.values(selected).some((s) => s?.id === item.id)}
                    onSelect={handleSelectIngredient}
                  />
                ))}
              </div>
            </section>

            {/* SECTION 2: PHỐI TỶ LỆ 3 TẦNG HƯƠNG */}
            <section className="pds-section" id="section-ratios">
              <div className="pds-section-head">
                <div>
                  <h2>Phối tỷ lệ 3 tầng hương</h2>
                </div>
                <button className="pds-reset-btn" onClick={() => setRatios({ top: 30, heart: 50, base: 20 })}>
                  Đặt lại mặc định (30-50-20)
                </button>
              </div>

              {/* Ratio bar overview */}
              <div className="pds-ratio-overview">
                <div className="pds-ratio-bar-wrap">
                  <div className="pds-ratio-seg seg-top" style={{ width: `${ratios.top}%` }}>
                    <span>Tầng đầu ({ratios.top}%)</span>
                  </div>
                  <div className="pds-ratio-seg seg-heart" style={{ width: `${ratios.heart}%` }}>
                    <span>Tầng giữa ({ratios.heart}%)</span>
                  </div>
                  <div className="pds-ratio-seg seg-base" style={{ width: `${ratios.base}%` }}>
                    <span>Tầng đáy ({ratios.base}%)</span>
                  </div>
                </div>
              </div>

              {/* Layer sliders */}
              <div className="pds-layers-list">
                {SCENT_LAYERS.map((layer) => (
                  <LayerSlider
                    key={layer.key}
                    layer={layer}
                    value={ratios[layer.key]}
                    onChange={(val) => handleRatioChange(layer.key, val)}
                    ingredient={selected[layer.key]}
                    onSwap={() => handleSwap(layer.key)}
                  />
                ))}
              </div>
            </section>

            {/* SECTION 3: DUNG TÍCH ĐIỀU CHẾ */}
            <section className="pds-section" id="section-concentration">
              <div className="pds-section-head">
                <h2>Dung tích điều chế</h2>
              </div>
              <div className="pds-concentration-grid">
                {CONCENTRATIONS.map((c) => (
                  <div
                    key={c.id}
                    className={`pds-conc-card${concentration === c.id ? " selected" : ""}${c.highlight ? " highlight" : ""}`}
                    onClick={() => setConcentration(c.id)}
                  >
                    <div className="pds-conc-ml">{c.ml}</div>
                    <div className="pds-conc-label">{c.label}</div>
                    <div className="pds-conc-price">{money(c.price)}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 4: XƯỞNG SẢN XUẤT */}
            <section className="pds-section" id="section-workshop">
              <div className="pds-section-head">
                <div>
                  <h2>Xưởng sản xuất</h2>
                  <p>So sánh năng lực kỹ thuật, chi phí & thời gian kiểm định GC-MS</p>
                </div>
              </div>
              <div className="pds-workshop-grid">
                {WORKSHOPS.map((w) => (
                  <div
                    key={w.id}
                    className={`pds-workshop-card${workshop === w.id ? " selected" : ""}`}
                    onClick={() => setWorkshop(w.id)}
                  >
                    <div className="pds-ws-badge" style={{ background: w.badgeColor }}>{w.badge}</div>
                    <div className="pds-ws-rating">
                      <Stars rating={w.rating} />
                      <span className="pds-ws-score">{w.rating}</span>
                      <span className="pds-ws-reviews">({w.reviews})</span>
                    </div>
                    <div className="pds-ws-name">{w.name}</div>
                    <div className="pds-ws-location">{w.location}</div>
                    <div className="pds-ws-strength-title">Thế mạnh:</div>
                    <div className="pds-ws-strength">{w.strengths}</div>
                    <div className="pds-ws-time">{w.time}</div>
                    <div className="pds-ws-price">{money(w.price)}</div>
                    {workshop === w.id && <div className="pds-ws-check">✓</div>}
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 5: TỔNG KẾT CÔNG THỨC */}
            <section className="pds-section pds-summary-section" id="section-summary">
              <div className="pds-summary-top">
                <h2>Tổng kết công thức phối hương</h2>
                <span className="pds-formula-code">Mã lô: {formulaCode}</span>
              </div>
              <div className="pds-summary-body">
                <div className="pds-summary-formula">
                  {formulaSummary.map(({ layer, ingredient, pct }, idx) => (
                    <span key={layer.key} className={`pds-sf-item sf-${layer.key}`}>
                      {ingredient ? (
                        <><strong>{ingredient.name}</strong> ({pct}%){idx < formulaSummary.length - 1 ? " + " : ""}</>
                      ) : (
                        <em>Chưa chọn tầng {layer.key}</em>
                      )}
                    </span>
                  ))}
                </div>
                <div className="pds-summary-workshop">
                  Xưởng sản xuất: <strong>{selectedWorkshop?.name}</strong> — {selectedWorkshop?.location}
                </div>
              </div>

              <div className="pds-order-bar">
                <div className="pds-order-info">
                  <div className="pds-order-price">{money(selectedConcentration?.price ?? 0)}</div>
                  <div className="pds-order-desc">{selectedConcentration?.ml} · {selectedWorkshop?.name}</div>
                </div>
                <div className="pds-order-actions">
                  <button className="pds-btn-save">Lưu công thức</button>
                  <button className="pds-btn-order">Đặt hàng ngay</button>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
