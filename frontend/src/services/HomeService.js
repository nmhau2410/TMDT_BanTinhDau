import homeDatabase from "../test/database";

// Lấy toàn bộ dữ liệu cho Homepage
export async function getHomeData() {
  await new Promise((resolve) => setTimeout(resolve, 650));

  return homeDatabase;
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