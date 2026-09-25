const img = {
  lavender: "https://images.unsplash.com/photo-1611073769406-1c7a9fcae4c5?auto=format&fit=crop&w=900&q=85",
};

const product = (id, name, price, origin, image, extra = {}) => ({
  id, name, price, origin, image, ...extra
});

export const homeDatabase = {
  searchSuggestions: [
    "Ngủ ngon",
    "Đuổi muỗi",
    "Trị liệu stress",
    "Sả Java",
    "Máy khuếch tán gốm",
  ],

  hero: [
    {
      id: 1,
      title: "Liệu Pháp Hương Thơm & Nghệ Thuật Pha Chế Tinh Dầu",
      description:
        "Khám phá 24 công thức cân bằng cảm xúc từ thảo mộc hữu cơ nguyên chất dưới sự hướng dẫn từ các chuyên gia Aromatherapy hàng đầu.",
      image: img.workshop,
    },
    {
      id: 2,
      title: "Workshop Aromatherapy miễn phí mỗi tuần",
      description:
        "Học cách phối hương, chọn tinh dầu và xây dựng không gian thư giãn phù hợp với nhu cầu của bạn.",
      image: img.workshop2,
    },
    {
      id: 3,
      title: "Chạm vào thiên nhiên, chăm sóc bản thân",
      description:
        "Những sản phẩm tinh dầu nguyên chất được chọn lọc kỹ càng cho không gian sống lành mạnh.",
      image: img.spa,
    },
  ],

  flashSales: [
    product(101, "Oải Hương True Lavender Pháp", 182000, "Xưởng Provence Farm", img.lavender, {
      category: "THẢO MỘC PHÁP",
      description: "100% Pure French Lavender",
      oldPrice: 280000, progress: 82, stockText: "Còn 18 suất"
    }),
    product(102, "Bưởi Hồng Ép Lạnh Tự Nhiên", 132000, "Xưởng Nông Nguyên Bến Tre", img.citrus, {
      category: "HỌ CAM QUÝT",
      description: "Xưởng Nông Nguyên Bến Tre",
      oldPrice: 220000, progress: 94, stockText: "Sắp hết hàng"
    }),
    product(103, "Tràm Trà Tea Tree Hữu Cơ Úc", 146000, "Xưởng New South Wales", img.teaTree, {
      category: "KHÁNG KHUẨN DỊU NHẸ",
      description: "100% Organic Tea Tree",
      oldPrice: 195000, progress: 65, stockText: "Còn 35 chai"
    }),
    product(104, "Bạc Hà Peppermint Tinh Khiết", 126000, "Xưởng Thảo Mộc Hưng Yên", img.peppermint, {
      category: "HƯƠNG HOA QUYẾN RŨ",
      description: "100% Organic Peppermint",
      oldPrice: 180000, progress: 78, stockText: "Còn 22 chai"
    }),
  ],

  newProducts: [
    product(201, "Tinh Dầu Deep Sleep 10ml", 245000, "Xưởng Provence Farm", img.spa, {
      badge: "Mới", description: "Gỗ tuyết tùng & Cúc La Mã"
    }),
    product(202, "Nến Thơm Rừng Thông Đà Lạt", 320000, "Xưởng Đà Lạt Forest", img.candle, {
      badge: "Mới", description: "Sáp đậu nành, bạc hà ấm áp"
    }),
    product(203, "Tinh Dầu Hoa Nhài Sambac", 290000, "Xưởng Mộc Châu", img.citrus, {
      badge: "Mới", description: "Diên vĩ thanh tú, hương dịu nhẹ"
    }),
    product(204, "Pillow Mist Hoa Cúc & Oải Hương", 185000, "Xưởng Thảo Mộc Huế", img.lavender, {
      badge: "Mới", description: "Xịt thơm gối hỗ trợ ngủ sâu"
    }),
  ],

  bestSellerTabs: {
    "Tất cả": [
      product(301, "Tinh Dầu Sả Chanh Lemongrass Ấn Độ", 145000, "Xưởng Trà Mộc", img.citrus, { rating: "4.9", reviews: "1.8k+", description: "Thanh lọc không khí, khử mùi phòng hiệu quả" }),
      product(302, "Tinh Dầu Bạc Hà Peppermint", 160000, "Xưởng Thảo Mộc Hưng Yên", img.peppermint, { rating: "5.0", reviews: "920+", description: "Giúp tập trung tinh thần, sảng khoái tức thì" }),
      product(303, "Tinh Dầu Tràm Trà Hữu Cơ Úc", 125000, "Xưởng New South Wales", img.teaTree, { rating: "4.9", reviews: "2.4k+", description: "Hương sạch, hỗ trợ làm sạch không gian" }),
      product(304, "Tinh Dầu Bưởi Hồng Ép Lạnh Yên Bái", 155000, "Xưởng Nông Nguyên", img.citrus, { rating: "4.8", reviews: "1.1k+", description: "Tươi mát, hỗ trợ chăm sóc tóc" }),
      product(305, "Tinh Dầu Oải Hương True Lavender", 182000, "Xưởng Provence Farm", img.lavender, { rating: "4.9", reviews: "1.8k+", description: "Hương dịu nhẹ cho không gian nghỉ ngơi" }),
      product(306, "Tinh Dầu Khuynh Diệp Úc", 138000, "Xưởng Botanical Australia", img.teaTree, { rating: "4.8", reviews: "870+", description: "Tươi mát và dễ chịu" }),
      product(307, "Tinh Dầu Cam Ngọt Ép Lạnh", 118000, "Xưởng Citrus Farm", img.citrus, { rating: "4.9", reviews: "1.3k+", description: "Hương cam ngọt, sáng và vui tươi" }),
      product(308, "Tinh Dầu Hoa Nhài Sambac", 290000, "Xưởng Mộc Châu", img.citrus, { rating: "4.8", reviews: "650+", description: "Hương hoa thanh lịch và quyến rũ" }),
    ],
    "Kháng khuẩn": [
      product(303, "Tinh Dầu Tràm Trà Hữu Cơ Úc", 125000, "Xưởng New South Wales", img.teaTree, { rating: "4.9", reviews: "2.4k+", description: "Hương sạch, hỗ trợ làm sạch không gian" }),
      product(302, "Tinh Dầu Bạc Hà Peppermint", 160000, "Xưởng Thảo Mộc Hưng Yên", img.peppermint, { rating: "5.0", reviews: "920+", description: "Mát sạch, dễ chịu" }),
      product(306, "Tinh Dầu Khuynh Diệp Úc", 138000, "Xưởng Botanical Australia", img.teaTree, { rating: "4.8", reviews: "870+", description: "Tươi mát và dễ chịu" }),
      product(301, "Tinh Dầu Sả Chanh Lemongrass", 145000, "Xưởng Trà Mộc", img.citrus, { rating: "4.9", reviews: "1.8k+", description: "Thanh lọc không khí" }),
      product(309, "Tinh Dầu Hương Thảo", 155000, "Xưởng Mediterranean", img.teaTree, { rating: "4.8", reviews: "720+", description: "Hương thảo mộc mạnh mẽ" }),
      product(310, "Tinh Dầu Quế", 175000, "Xưởng Spice Garden", img.citrus, { rating: "4.7", reviews: "610+", description: "Hương ấm áp đặc trưng" }),
      product(311, "Tinh Dầu Sả Java", 135000, "Xưởng Trà Mộc", img.citrus, { rating: "4.8", reviews: "990+", description: "Hương sả thanh sạch" }),
      product(312, "Tinh Dầu Chanh Xanh", 120000, "Xưởng Citrus Farm", img.citrus, { rating: "4.9", reviews: "1.2k+", description: "Tươi mát, sáng không gian" }),
    ],
    "Thư giãn": [
      product(301, "Tinh Dầu Sả Chanh Lemongrass", 145000, "Xưởng Trà Mộc", img.citrus, { rating: "4.9", reviews: "1.8k+", description: "Thanh lọc không khí" }),
      product(305, "Tinh Dầu Oải Hương True Lavender", 182000, "Xưởng Provence Farm", img.lavender, { rating: "4.9", reviews: "1.8k+", description: "Hương dịu nhẹ cho nghỉ ngơi" }),
      product(304, "Tinh Dầu Bưởi Hồng Ép Lạnh", 155000, "Xưởng Nông Nguyên", img.citrus, { rating: "4.8", reviews: "1.1k+", description: "Tươi mát, hỗ trợ chăm sóc tóc" }),
      product(308, "Tinh Dầu Hoa Nhài Sambac", 290000, "Xưởng Mộc Châu", img.citrus, { rating: "4.8", reviews: "650+", description: "Hương hoa thanh lịch" }),
      product(313, "Tinh Dầu Ngọc Lan Tây", 265000, "Xưởng Mộc Châu", img.spa, { rating: "4.8", reviews: "540+", description: "Hương hoa mềm mại" }),
      product(314, "Tinh Dầu Gỗ Tuyết Tùng", 220000, "Xưởng Provence Farm", img.spa, { rating: "4.7", reviews: "430+", description: "Ấm áp và cân bằng" }),
      product(315, "Tinh Dầu Cam Ngọt", 118000, "Xưởng Citrus Farm", img.citrus, { rating: "4.9", reviews: "1.3k+", description: "Hương cam ngọt tươi vui" }),
      product(316, "Tinh Dầu Hoa Hồng", 350000, "Xưởng Botanical", img.lavender, { rating: "4.9", reviews: "390+", description: "Hương hoa sang trọng" }),
    ],
    "Tập trung": [
      product(302, "Tinh Dầu Bạc Hà Peppermint", 160000, "Xưởng Thảo Mộc Hưng Yên", img.peppermint, { rating: "5.0", reviews: "920+", description: "Giúp tập trung tinh thần" }),
      product(301, "Tinh Dầu Sả Chanh Lemongrass", 145000, "Xưởng Trà Mộc", img.citrus, { rating: "4.9", reviews: "1.8k+", description: "Hương tươi sáng" }),
      product(306, "Tinh Dầu Khuynh Diệp Úc", 138000, "Xưởng Botanical Australia", img.teaTree, { rating: "4.8", reviews: "870+", description: "Tươi mát và tỉnh táo" }),
      product(307, "Tinh Dầu Cam Ngọt Ép Lạnh", 118000, "Xưởng Citrus Farm", img.citrus, { rating: "4.9", reviews: "1.3k+", description: "Hương cam sáng và vui tươi" }),
      product(317, "Tinh Dầu Hương Thảo", 155000, "Xưởng Mediterranean", img.teaTree, { rating: "4.8", reviews: "720+", description: "Thảo mộc rõ nét" }),
      product(318, "Tinh Dầu Chanh", 120000, "Xưởng Citrus Farm", img.citrus, { rating: "4.9", reviews: "1.2k+", description: "Tươi mát cho góc làm việc" }),
      product(319, "Tinh Dầu Tràm Gió", 130000, "Xưởng Botanical", img.teaTree, { rating: "4.7", reviews: "510+", description: "Hương xanh tự nhiên" }),
      product(320, "Tinh Dầu Bưởi", 155000, "Xưởng Nông Nguyên", img.citrus, { rating: "4.8", reviews: "1.1k+", description: "Hương citrus dễ chịu" }),
    ],
  },

  promotions: [
    {
      id: 401,
      badge: "TIẾT KIỆM ĐẾN 35%",
      title: "Combo Máy Xông Siêu Âm & Tinh Dầu Trị Liệu",
      description: "Tặng kèm 2 chai tinh dầu khi mua máy khuếch tán gốm cao cấp.",
      button: "Xem ưu đãi combo",
      image: img.spa,
      action: "detail",
    },
    {
      id: 402,
      badge: "BỘ QUÀ TẶNG SANG TRỌNG",
      title: "Hộp Quà Thơm Chữa Lành Cho Người Thương",
      description: "Thiết kế hộp quà theo yêu cầu cá nhân.",
      button: "Lưu voucher",
      image: img.gift,
      action: "voucher",
    },
  ],
};

export default homeDatabase;
