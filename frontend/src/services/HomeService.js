import homeDatabase from "../test/data.js";

export async function getHomeData() {
  try {
    const response = await fetch("http://localhost:8080/api/home");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    const mapProduct = (p) => ({
      ...p,
      oldPrice: p.salePrice ? p.price : null,
      price: p.salePrice ? p.salePrice : p.price,
      origin: p.workshopProvince || "Việt Nam",
      progress: p.stock > 0 ? Math.round((p.sold / (p.sold + p.stock)) * 100) : 0,
      reviews: p.sold,
    });
    
    // Merge API data with mock data to supply missing fields like hero and promotions
    return {
      ...homeDatabase,
      ...data,
      flashSales: (data.flashSales || []).map(mapProduct),
      newProducts: (data.newProducts || []).map(mapProduct),
      bestSellerTabs: Object.fromEntries(
        Object.entries(data.bestSellerTabs || {}).map(([key, products]) => [key, products.map(mapProduct)])
      ),
      hero: data.hero || homeDatabase.hero,
      promotions: data.promotions || homeDatabase.promotions
    };
  } catch (error) {
    console.error("Error fetching home data:", error);
    // Fallback to mock data if API fails or for testing without BE
    return homeDatabase;
  }
}

// Lấy danh sách sản phẩm bán chạy theo tab
export function getBestSellerProducts(data, activeTab) {
  return data?.bestSellerTabs?.[activeTab] || [];
}

// Lấy banner hiện tại
export function getHero(data, heroIndex) {
  if (!data?.hero?.length) {
    return null;
  }

  return data.hero[heroIndex];
}

// Format thời gian countdown
export function formatCountdown(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(remainingSeconds).padStart(2, "0"),
  };
}

// Xử lý thêm sản phẩm vào giỏ
export function addToCart(product) {
  window.alert(`Đã thêm "${product.name}" vào giỏ hàng.`);
}

// Xử lý mua ngay
export function buyProduct(product) {
  window.alert(`Mua ngay: ${product.name}`);
}

// Xử lý promotion / voucher
export function handlePromotionAction(promotion) {
  if (promotion.action === "voucher") {
    window.alert("Đã lưu voucher vào ưu đãi của bạn.");
    return "voucher";
  }

  window.alert(`Xem chi tiết: ${promotion.title}`);
  return "detail";
}