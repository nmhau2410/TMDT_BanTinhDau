const API_BASE = import.meta.env?.VITE_API_URL || "http://localhost:8080";
const CART_KEY = "oilia_cart";
const HERO_SLIDES = [
    {
        id: 1,
        title: "Tự tay pha mùi hương của riêng bạn",
        description:
            "Tham gia workshop pha chế nước hoa cùng nghệ nhân, mang về chai hương mang dấu ấn của chính bạn.",
        image: "https://picsum.photos/seed/oilia-hero-1/1200/700",
    },
    {
        id: 2,
        title: "Nến thơm sáp đậu nành thủ công",
        description:
            "Học đổ nến, chọn mùi và trang trí cốc nến theo phong cách riêng, phù hợp làm quà tặng.",
        image: "https://picsum.photos/seed/oilia-hero-2/1200/700",
    },
    {
        id: 3,
        title: "Tinh dầu thiên nhiên cho không gian sống",
        description:
            "Khám phá bộ sưu tập tinh dầu nguyên chất từ các xưởng đối tác trên khắp cả nước.",
        image: "https://picsum.photos/seed/oilia-hero-3/1200/700",
    },
];

const PROMOTIONS = [
    {
        id: 1,
        type: "voucher",
        badge: "VOUCHER",
        title: "Giảm 10% đơn đầu tiên",
        description: "Nhập mã OILIA10 khi thanh toán cho đơn hàng đầu tiên của bạn.",
        button: "Lưu voucher",
        image: "https://picsum.photos/seed/oilia-promo-1/800/500",
    },
    {
        id: 2,
        type: "link",
        link: "/products",
        badge: "QUÀ TẶNG",
        title: "Set quà tặng đóng hộp sẵn",
        description: "Nến, tinh dầu và nước hoa đóng hộp quà, giao tận tay người nhận.",
        button: "Xem ngay",
        image: "https://picsum.photos/seed/oilia-promo-2/800/500",
    },
];
const TYPE_LABELS = {
    PERFUME: "Nước hoa",
    ESSENTIAL_OIL: "Tinh dầu",
    CANDLE: "Nến thơm",
};

export function formatVnd(value) {
    if (value === null || value === undefined) {
        return "";
    }

    return `${new Intl.NumberFormat("vi-VN").format(Number(value))}đ`;
}
function adaptProduct(p) {
    const hasSale = p.salePrice !== null && p.salePrice !== undefined;
    const currentPrice = hasSale ? p.salePrice : p.price;
    const oldPrice = hasSale ? p.price : null;

    const stock = p.stock ?? 0;
    const sold = p.sold ?? 0;

    const progress =
        sold + stock > 0 ? Math.round((sold / (sold + stock)) * 100) : 0;
    const categoryLabel = (TYPE_LABELS[p.type] || p.type || "").toUpperCase();
    const shortDescription = p.description
        ? p.description.split(/(?<=[.!?])\s/)[0]
        : "";
    return {
        id: p.id,
        name: p.name,
        image: p.image,
        price: currentPrice,
        oldPrice,
        badge: p.discountPercent ? `-${p.discountPercent}%` : "",
        categoryLabel,
        description: shortDescription,
        origin: [p.workshopName, p.workshopProvince].filter(Boolean).join(" · "),
        progress,
        stockText: stock > 0 ? `Còn ${stock} sản phẩm` : "Hết hàng",
        rating: p.rating != null ? Number(p.rating).toFixed(1) : undefined,
        reviews: sold,
        sku: p.sku,
        fullDescription: p.description,
        scentNotes: p.scentNotes,
        volume: p.volume,
        type: p.type,
        images: p.images || [],
        stock,
        sold,
        workshopId: p.workshopId,
    };
}

function adaptList(list) {
    return (list || []).map(adaptProduct);
}
export async function getHomeData() {
    const base = {
        hero: HERO_SLIDES,
        promotions: PROMOTIONS,
        flashSales: [],
        newProducts: [],
        bestSellerTabs: { "Tất cả": [] },
    };

    try {
        const response = await fetch(`${API_BASE}/api/home`);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const api = await response.json();

        const bestSellerTabs = {};
        Object.entries(api.bestSellerTabs || {}).forEach(([tab, list]) => {
            bestSellerTabs[tab] = adaptList(list);
        });

        return {
            ...base,
            flashSales: adaptList(api.flashSales),
            newProducts: adaptList(api.newProducts),
            bestSellerTabs: Object.keys(bestSellerTabs).length
                ? bestSellerTabs
                : base.bestSellerTabs,
        };
    } catch (error) {
        console.error("Không tải được sản phẩm trang chủ:", error);
        return base;
    }
}

export function getHero(data, index) {
    const slides = data?.hero || [];
    return slides[index] || slides[0] || { title: "", description: "", image: "" };
}

export function getBestSellerProducts(data, tab) {
    return data?.bestSellerTabs?.[tab] || [];
}
export function formatCountdown(totalSeconds) {
    const safe = Math.max(0, Number(totalSeconds) || 0);
    const pad = (n) => String(n).padStart(2, "0");

    return {
        hours: pad(Math.floor(safe / 3600)),
        minutes: pad(Math.floor((safe % 3600) / 60)),
        seconds: pad(safe % 60),
    };
}
function readCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
        return [];
    }
}

function writeCart(cart) {
    try {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
        window.dispatchEvent(new Event("cart:updated"));
    } catch (error) {
        console.error("Không lưu được giỏ hàng:", error);
    }
}

export function addToCart(product) {
    const cart = readCart();
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity: 1,
        });
    }

    writeCart(cart);
}

export function buyProduct(product) {
    addToCart(product);
    window.location.assign("/cart");
}
export function handlePromotionAction(promotion) {
    if (promotion.type === "voucher") {
        return "voucher";
    }

    if (promotion.link) {
        window.location.assign(promotion.link);
    }

    return "link";
}