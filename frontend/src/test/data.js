const img = {
};

const product = (id, name, price, origin, image, extra = {}) => ({
    id,
    name,
    price,
    origin,
    image,
    ...extra,
});

/*
|--------------------------------------------------------------------------
| DỮ LIỆU SẢN PHẨM
|--------------------------------------------------------------------------
*/

const products = [
    product(
        101,
        "Oải Hương True Lavender Pháp",
        182000,
        "Xưởng Provence Farm",
        img.lavender,
        {
            category: "Thư giãn",
            categoryLabel: "THẢO MỘC PHÁP",
            description: "100% Pure French Lavender",
            oldPrice: 280000,
            progress: 82,
            stockText: "Còn 18 suất",
            badge: "Mới",
            rating: "4.9",
            reviews: "1.8k+",
            sold: "1.8k",
            productCode: "PF-101",
            images: [img.lavender, img.lavender, img.lavender, img.lavender],
            variants: [
                {id: 1, volume: "10ml", price: 182000, originalPrice: 280000, discount: 35},
                {id: 2, volume: "30ml", price: 320000, originalPrice: 400000, discount: 20},
                {id: 3, volume: "50ml", price: 480000, originalPrice: 560000, discount: 14},
            ],
            scent: "Linalool và Linalyl Acetate tự nhiên",
            ingredients: "100% tinh dầu Lavender nguyên chất.",
            originDetail: "Hoa oải hương được thu hái tại vùng Provence, Pháp.",
            distillation: "Chưng cất hơi nước từ hoa oải hương tươi.",
            usage: "Nhỏ 3–5 giọt vào máy khuếch tán hoặc pha loãng với dầu nền.",
        }
    ),

    product(
        102,
        "Bưởi Hồng Ép Lạnh Tự Nhiên",
        132000,
        "Xưởng Nông Nguyên Bến Tre",
        img.citrus,
        {
            category: "Chăm sóc tóc",
            categoryLabel: "HỌ CAM QUÝT",
            description: "Tinh dầu bưởi ép lạnh tự nhiên",
            oldPrice: 220000,
            progress: 94,
            stockText: "Sắp hết hàng",
            rating: "4.8",
            reviews: "1.1k+",
            sold: "1.1k",
            productCode: "BT-102",
            images: [img.citrus, img.citrus, img.citrus, img.citrus],
            variants: [
                {id: 1, volume: "10ml", price: 132000, originalPrice: 220000, discount: 40},
                {id: 2, volume: "30ml", price: 280000, originalPrice: 390000, discount: 28},
                {id: 3, volume: "50ml", price: 420000, originalPrice: 550000, discount: 24},
            ],
            scent: "Hương citrus tươi sáng, mọng nước",
            ingredients: "Tinh dầu vỏ bưởi hồng ép lạnh.",
            originDetail: "Nguồn nguyên liệu từ vùng trồng Bến Tre.",
            distillation: "Ép lạnh vỏ quả để giữ lại hợp chất thơm tự nhiên.",
            usage: "Dùng với máy khuếch tán hoặc pha loãng trước khi dùng trên da.",
        }
    ),

    product(
        103,
        "Tràm Trà Tea Tree Hữu Cơ Úc",
        146000,
        "Xưởng New South Wales",
        img.teaTree,
        {
            category: "Kháng khuẩn",
            categoryLabel: "KHÁNG KHUẨN DỊU NHẸ",
            description: "100% Organic Tea Tree",
            oldPrice: 195000,
            progress: 65,
            stockText: "Còn 35 chai",
            rating: "4.9",
            reviews: "2.4k+",
            sold: "2.4k",
            productCode: "NSW-103",
            images: [img.teaTree, img.teaTree, img.teaTree, img.teaTree],
            variants: [
                {id: 1, volume: "10ml", price: 146000, originalPrice: 195000, discount: 25},
                {id: 2, volume: "30ml", price: 330000, originalPrice: 420000, discount: 21},
                {id: 3, volume: "50ml", price: 490000, originalPrice: 590000, discount: 17},
            ],
            scent: "Hương thảo mộc xanh, sạch và mạnh mẽ",
            ingredients: "100% tinh dầu Tea Tree hữu cơ.",
            originDetail: "Trồng và thu hoạch tại New South Wales, Australia.",
            distillation: "Chưng cất hơi nước từ lá tràm trà.",
            usage: "Khuếch tán trong phòng hoặc pha loãng với dầu nền.",
        }
    ),

    product(
        104,
        "Bạc Hà Peppermint Tinh Khiết",
        126000,
        "Xưởng Thảo Mộc Hưng Yên",
        img.peppermint,
        {
            category: "Tập trung",
            categoryLabel: "HƯƠNG BẠC HÀ TƯƠI MÁT",
            description: "100% Organic Peppermint",
            oldPrice: 180000,
            progress: 78,
            stockText: "Còn 22 chai",
            rating: "5.0",
            reviews: "920+",
            sold: "2.4k",
            productCode: "HY-104",
            images: [img.peppermint, img.peppermint, img.peppermint, img.peppermint],
            variants: [
                {id: 1, volume: "10ml", price: 126000, originalPrice: 180000, discount: 30},
                {id: 2, volume: "30ml", price: 290000, originalPrice: 390000, discount: 26},
                {id: 3, volume: "50ml", price: 430000, originalPrice: 560000, discount: 23},
            ],
            scent: "Menthol tự nhiên, mát và sảng khoái",
            ingredients: "Menthol tự nhiên 46.8%, Menthone 24.2%.",
            originDetail: "Nguồn dược liệu thu hái thủ công tại Hưng Yên.",
            distillation: "Chưng cất lôi cuốn hơi nước từ lá bạc hà.",
            usage: "Khuếch tán bằng máy xông hoặc pha loãng với dầu nền.",
        }
    ),

    product(
        201,
        "Tinh Dầu Deep Sleep 10ml",
        245000,
        "Xưởng Provence Farm",
        img.spa,
        {
            category: "Thư giãn",
            badge: "Mới",
            description: "Gỗ tuyết tùng & Cúc La Mã",
            rating: "4.9",
            reviews: "320+",
            sold: "320",
            productCode: "PF-201",
            images: [img.spa, img.spa, img.spa],
            variants: [
                {id: 1, volume: "10ml", price: 245000, originalPrice: 290000, discount: 16},
                {id: 2, volume: "30ml", price: 590000, originalPrice: 690000, discount: 14},
            ],
            scent: "Ấm áp, dịu nhẹ và sâu lắng",
            ingredients: "Cúc La Mã, gỗ tuyết tùng và Lavender.",
            originDetail: "Phối hương tại Provence Farm.",
            distillation: "Các thành phần tinh dầu được chưng cất riêng và phối theo công thức.",
            usage: "Khuếch tán 3–5 giọt trước khi ngủ.",
        }
    ),

    product(
        202,
        "Nến Thơm Rừng Thông Đà Lạt",
        320000,
        "Xưởng Đà Lạt Forest",
        img.candle,
        {
            category: "Thư giãn",
            badge: "Mới",
            description: "Sáp đậu nành, bạc hà ấm áp",
            rating: "4.8",
            reviews: "280+",
            sold: "280",
            productCode: "DL-202",
            images: [img.candle, img.candle, img.candle],
            variants: [
                {id: 1, volume: "100g", price: 320000, originalPrice: 360000, discount: 11},
                {id: 2, volume: "200g", price: 520000, originalPrice: 590000, discount: 12},
            ],
            scent: "Thông xanh, bạc hà và gỗ",
            ingredients: "Sáp đậu nành và tinh dầu thiên nhiên.",
            originDetail: "Sản xuất thủ công tại Đà Lạt.",
            distillation: "Không áp dụng.",
            usage: "Đốt nến 1–2 giờ mỗi lần sử dụng.",
        }
    ),

    product(
        203,
        "Tinh Dầu Hoa Nhài Sambac",
        290000,
        "Xưởng Mộc Châu",
        img.citrus,
        {
            category: "Thư giãn",
            badge: "Mới",
            description: "Diên vĩ thanh tú, hương dịu nhẹ",
            rating: "4.8",
            reviews: "650+",
            sold: "650",
            productCode: "MC-203",
            images: [img.citrus, img.citrus, img.citrus],
            variants: [
                {id: 1, volume: "10ml", price: 290000, originalPrice: 340000, discount: 15},
                {id: 2, volume: "30ml", price: 690000, originalPrice: 790000, discount: 13},
            ],
            scent: "Hương hoa trắng thanh lịch",
            ingredients: "Chiết xuất hoa Nhài Sambac.",
            originDetail: "Nguồn nguyên liệu từ vùng Mộc Châu.",
            distillation: "Chiết xuất và phối hương theo mẻ nhỏ.",
            usage: "Dùng với máy khuếch tán hoặc pha loãng với dầu nền.",
        }
    ),

    product(
        204,
        "Pillow Mist Hoa Cúc & Oải Hương",
        185000,
        "Xưởng Thảo Mộc Huế",
        img.lavender,
        {
            category: "Thư giãn",
            badge: "Mới",
            description: "Xịt thơm gối hỗ trợ ngủ sâu",
            rating: "4.9",
            reviews: "410+",
            sold: "410",
            productCode: "HUE-204",
            images: [img.lavender, img.lavender, img.lavender],
            variants: [
                {id: 1, volume: "50ml", price: 185000, originalPrice: 220000, discount: 16},
                {id: 2, volume: "100ml", price: 290000, originalPrice: 340000, discount: 15},
            ],
            scent: "Oải hương và hoa cúc dịu nhẹ",
            ingredients: "Hydrosol hoa cúc, Lavender và hương tự nhiên.",
            originDetail: "Sản xuất tại xưởng thảo mộc Huế.",
            distillation: "Chưng cất hơi nước và phối chế dạng mist.",
            usage: "Xịt 2–3 lần lên gối trước khi ngủ.",
        }
    ),

    product(
        301,
        "Tinh Dầu Sả Chanh Lemongrass Ấn Độ",
        145000,
        "Xưởng Trà Mộc",
        img.citrus,
        {
            category: "Kháng khuẩn",
            rating: "4.9",
            reviews: "1.8k+",
            sold: "1.8k",
            description: "Thanh lọc không khí, khử mùi phòng hiệu quả",
            productCode: "TM-301",
            images: [img.citrus, img.citrus, img.citrus, img.citrus],
            variants: [
                {id: 1, volume: "10ml", price: 145000, originalPrice: 175000, discount: 17},
                {id: 2, volume: "30ml", price: 340000, originalPrice: 390000, discount: 13},
                {id: 3, volume: "50ml", price: 510000, originalPrice: 590000, discount: 14},
            ],
            scent: "Citrus tươi sáng và hương sả rõ nét",
            ingredients: "Citral tự nhiên và tinh dầu sả chanh.",
            originDetail: "Nguyên liệu chọn lọc từ vùng trồng thảo mộc.",
            distillation: "Chưng cất hơi nước.",
            usage: "Khuếch tán 3–5 giọt để làm thơm không gian.",
        }
    ),

    product(
        302,
        "Tinh Dầu Bạc Hà Peppermint",
        160000,
        "Xưởng Thảo Mộc Hưng Yên",
        img.peppermint,
        {
            category: "Tập trung",
            rating: "5.0",
            reviews: "920+",
            sold: "2.4k",
            description: "Giúp tập trung tinh thần, sảng khoái tức thì",
            productCode: "HY-8832",
            oldPrice: 195000,
            images: [img.peppermint, img.peppermint, img.peppermint, img.peppermint],
            variants: [
                {id: 1, volume: "10ml", price: 160000, originalPrice: 195000, discount: 18},
                {id: 2, volume: "30ml", price: 390000, originalPrice: 450000, discount: 13},
                {id: 3, volume: "50ml", price: 580000, originalPrice: 650000, discount: 11},
            ],
            scent: "Menthol tự nhiên 46.8%, Menthone 24.2%",
            ingredients: "100% tinh dầu bạc hà nguyên chất.",
            originDetail: "Nguồn dược liệu thu hái thủ công tại Xưởng Thảo Mộc Hưng Yên.",
            distillation: "Ứng dụng phương pháp chưng cất lôi cuốn hơi nước.",
            usage: "Khuếch tán bằng máy xông, nhỏ 2 giọt vào bồn tắm hoặc pha loãng với dầu jojoba.",
        }
    ),

    product(
        303,
        "Tinh Dầu Tràm Trà Hữu Cơ Úc",
        125000,
        "Xưởng New South Wales",
        img.teaTree,
        {
            category: "Kháng khuẩn",
            rating: "4.9",
            reviews: "2.4k+",
            sold: "2.4k",
            description: "Hương sạch, hỗ trợ làm sạch không gian",
            productCode: "NSW-303",
            images: [img.teaTree, img.teaTree, img.teaTree],
            variants: [
                {id: 1, volume: "10ml", price: 125000, originalPrice: 155000, discount: 19},
                {id: 2, volume: "30ml", price: 300000, originalPrice: 360000, discount: 17},
                {id: 3, volume: "50ml", price: 450000, originalPrice: 520000, discount: 13},
            ],
            scent: "Thảo mộc xanh và sạch",
            ingredients: "100% Tea Tree hữu cơ.",
            originDetail: "New South Wales, Australia.",
            distillation: "Chưng cất hơi nước.",
            usage: "Khuếch tán trong phòng hoặc pha loãng với dầu nền.",
        }
    ),

    product(
        304,
        "Tinh Dầu Bưởi Hồng Ép Lạnh Yên Bái",
        155000,
        "Xưởng Nông Nguyên",
        img.citrus,
        {
            category: "Thư giãn",
            rating: "4.8",
            reviews: "1.1k+",
            sold: "1.1k",
            description: "Tươi mát, hỗ trợ chăm sóc tóc",
            productCode: "YB-304",
            images: [img.citrus, img.citrus, img.citrus],
            variants: [
                {id: 1, volume: "10ml", price: 155000, originalPrice: 180000, discount: 14},
                {id: 2, volume: "30ml", price: 350000, originalPrice: 420000, discount: 17},
                {id: 3, volume: "50ml", price: 520000, originalPrice: 600000, discount: 13},
            ],
            scent: "Citrus tươi mát",
            ingredients: "Tinh dầu vỏ bưởi ép lạnh.",
            originDetail: "Vùng nguyên liệu Yên Bái.",
            distillation: "Ép lạnh.",
            usage: "Khuếch tán hoặc pha loãng trước khi sử dụng.",
        }
    ),

    product(
        305,
        "Tinh Dầu Oải Hương True Lavender",
        182000,
        "Xưởng Provence Farm",
        img.lavender,
        {
            category: "Thư giãn",
            rating: "4.9",
            reviews: "1.8k+",
            sold: "1.8k",
            description: "Hương dịu nhẹ cho không gian nghỉ ngơi",
            productCode: "PF-305",
            images: [img.lavender, img.lavender, img.lavender],
            variants: [
                {id: 1, volume: "10ml", price: 182000, originalPrice: 220000, discount: 17},
                {id: 2, volume: "30ml", price: 420000, originalPrice: 490000, discount: 14},
                {id: 3, volume: "50ml", price: 620000, originalPrice: 720000, discount: 14},
            ],
            scent: "Hoa oải hương mềm mại",
            ingredients: "100% Lavender nguyên chất.",
            originDetail: "Provence, Pháp.",
            distillation: "Chưng cất hơi nước.",
            usage: "Khuếch tán trước khi nghỉ ngơi.",
        }
    ),

    product(
        306,
        "Tinh Dầu Khuynh Diệp Úc",
        138000,
        "Xưởng Botanical Australia",
        img.teaTree,
        {
            category: "Kháng khuẩn",
            rating: "4.8",
            reviews: "870+",
            sold: "870",
            description: "Tươi mát và dễ chịu",
            productCode: "BA-306",
            images: [img.teaTree, img.teaTree, img.teaTree],
            variants: [
                {id: 1, volume: "10ml", price: 138000, originalPrice: 165000, discount: 16},
                {id: 2, volume: "30ml", price: 320000, originalPrice: 380000, discount: 16},
                {id: 3, volume: "50ml", price: 480000, originalPrice: 550000, discount: 13},
            ],
            scent: "Xanh mát và thanh sạch",
            ingredients: "Tinh dầu khuynh diệp Úc.",
            originDetail: "Australia.",
            distillation: "Chưng cất hơi nước.",
            usage: "Khuếch tán hoặc sử dụng theo hướng dẫn pha loãng.",
        }
    ),

    product(
        307,
        "Tinh Dầu Cam Ngọt Ép Lạnh",
        118000,
        "Xưởng Citrus Farm",
        img.citrus,
        {
            category: "Tập trung",
            rating: "4.9",
            reviews: "1.3k+",
            sold: "1.3k",
            description: "Hương cam ngọt, sáng và vui tươi",
            productCode: "CF-307",
            images: [img.citrus, img.citrus, img.citrus],
            variants: [
                {id: 1, volume: "10ml", price: 118000, originalPrice: 145000, discount: 19},
                {id: 2, volume: "30ml", price: 280000, originalPrice: 330000, discount: 15},
                {id: 3, volume: "50ml", price: 420000, originalPrice: 490000, discount: 14},
            ],
            scent: "Cam ngọt tươi sáng",
            ingredients: "Tinh dầu vỏ cam ép lạnh.",
            originDetail: "Citrus Farm.",
            distillation: "Ép lạnh.",
            usage: "Khuếch tán để tạo không gian tươi vui.",
        }
    ),

    product(
        308,
        "Tinh Dầu Hoa Nhài Sambac",
        290000,
        "Xưởng Mộc Châu",
        img.citrus,
        {
            category: "Thư giãn",
            rating: "4.8",
            reviews: "650+",
            sold: "650",
            description: "Hương hoa thanh lịch và quyến rũ",
            productCode: "MC-308",
            images: [img.citrus, img.citrus, img.citrus],
            variants: [
                {id: 1, volume: "10ml", price: 290000, originalPrice: 340000, discount: 15},
                {id: 2, volume: "30ml", price: 690000, originalPrice: 790000, discount: 13},
            ],
            scent: "Hương hoa trắng thanh lịch",
            ingredients: "Chiết xuất hoa Nhài Sambac.",
            originDetail: "Mộc Châu.",
            distillation: "Chiết xuất và phối hương theo mẻ nhỏ.",
            usage: "Khuếch tán hoặc pha loãng với dầu nền.",
        }
    ),

    product(
        309,
        "Tinh Dầu Hương Thảo",
        155000,
        "Xưởng Mediterranean",
        img.teaTree,
        {
            category: "Kháng khuẩn",
            rating: "4.8",
            reviews: "720+",
            sold: "720",
            description: "Hương thảo mộc mạnh mẽ",
            productCode: "MED-309",
            images: [img.teaTree, img.teaTree],
            variants: [
                {id: 1, volume: "10ml", price: 155000, originalPrice: 185000, discount: 16},
                {id: 2, volume: "30ml", price: 360000, originalPrice: 420000, discount: 14},
            ],
            scent: "Thảo mộc rõ nét",
            ingredients: "Tinh dầu Rosemary.",
            originDetail: "Mediterranean.",
            distillation: "Chưng cất hơi nước.",
            usage: "Khuếch tán trong không gian làm việc.",
        }
    ),

    product(
        310,
        "Tinh Dầu Quế",
        175000,
        "Xưởng Spice Garden",
        img.citrus,
        {
            category: "Kháng khuẩn",
            rating: "4.7",
            reviews: "610+",
            sold: "610",
            description: "Hương ấm áp đặc trưng",
            productCode: "SG-310",
            images: [img.citrus, img.citrus],
            variants: [
                {id: 1, volume: "10ml", price: 175000, originalPrice: 210000, discount: 17},
                {id: 2, volume: "30ml", price: 400000, originalPrice: 460000, discount: 13},
            ],
            scent: "Quế ấm, ngọt và cay nhẹ",
            ingredients: "Tinh dầu quế.",
            originDetail: "Spice Garden.",
            distillation: "Chưng cất hơi nước.",
            usage: "Khuếch tán với liều lượng thấp.",
        }
    ),

    product(
        311,
        "Tinh Dầu Sả Java",
        135000,
        "Xưởng Trà Mộc",
        img.citrus,
        {
            category: "Kháng khuẩn",
            rating: "4.8",
            reviews: "990+",
            sold: "990",
            description: "Hương sả thanh sạch",
            productCode: "TM-311",
            images: [img.citrus, img.citrus],
            variants: [
                {id: 1, volume: "10ml", price: 135000, originalPrice: 160000, discount: 16},
                {id: 2, volume: "30ml", price: 315000, originalPrice: 360000, discount: 13},
            ],
            scent: "Sả tươi và thanh sạch",
            ingredients: "Tinh dầu sả Java.",
            originDetail: "Nguồn nguyên liệu chọn lọc.",
            distillation: "Chưng cất hơi nước.",
            usage: "Khuếch tán để làm thơm không gian.",
        }
    ),

    product(
        312,
        "Tinh Dầu Chanh Xanh",
        120000,
        "Xưởng Citrus Farm",
        img.citrus,
        {
            category: "Kháng khuẩn",
            rating: "4.9",
            reviews: "1.2k+",
            sold: "1.2k",
            description: "Tươi mát, sáng không gian",
            productCode: "CF-312",
            images: [img.citrus, img.citrus],
            variants: [
                {id: 1, volume: "10ml", price: 120000, originalPrice: 145000, discount: 17},
                {id: 2, volume: "30ml", price: 285000, originalPrice: 330000, discount: 14},
            ],
            scent: "Chanh xanh tươi sáng",
            ingredients: "Tinh dầu chanh xanh.",
            originDetail: "Citrus Farm.",
            distillation: "Ép lạnh.",
            usage: "Khuếch tán trong phòng.",
        }
    ),

    product(
        313,
        "Tinh Dầu Ngọc Lan Tây",
        265000,
        "Xưởng Mộc Châu",
        img.spa,
        {
            category: "Thư giãn",
            rating: "4.8",
            reviews: "540+",
            sold: "540",
            description: "Hương hoa mềm mại",
            productCode: "MC-313",
            images: [img.spa, img.spa],
            variants: [
                {id: 1, volume: "10ml", price: 265000, originalPrice: 310000, discount: 15},
                {id: 2, volume: "30ml", price: 620000, originalPrice: 720000, discount: 14},
            ],
            scent: "Hoa ngọt, mềm và sâu",
            ingredients: "Tinh dầu Ngọc Lan Tây.",
            originDetail: "Mộc Châu.",
            distillation: "Chưng cất hơi nước.",
            usage: "Khuếch tán vào buổi tối.",
        }
    ),

    product(
        314,
        "Tinh Dầu Gỗ Tuyết Tùng",
        220000,
        "Xưởng Provence Farm",
        img.spa,
        {
            category: "Thư giãn",
            rating: "4.7",
            reviews: "430+",
            sold: "430",
            description: "Ấm áp và cân bằng",
            productCode: "PF-314",
            images: [img.spa, img.spa],
            variants: [
                {id: 1, volume: "10ml", price: 220000, originalPrice: 260000, discount: 15},
                {id: 2, volume: "30ml", price: 520000, originalPrice: 590000, discount: 12},
            ],
            scent: "Gỗ khô, ấm và sâu",
            ingredients: "Tinh dầu gỗ tuyết tùng.",
            originDetail: "Provence Farm.",
            distillation: "Chưng cất hơi nước.",
            usage: "Phối hương với Lavender hoặc khuếch tán.",
        }
    ),

    product(
        315,
        "Tinh Dầu Cam Ngọt",
        118000,
        "Xưởng Citrus Farm",
        img.citrus,
        {
            category: "Tập trung",
            rating: "4.9",
            reviews: "1.3k+",
            sold: "1.3k",
            description: "Hương cam ngọt tươi vui",
            productCode: "CF-315",
            images: [img.citrus, img.citrus],
            variants: [
                {id: 1, volume: "10ml", price: 118000, originalPrice: 145000, discount: 19},
                {id: 2, volume: "30ml", price: 280000, originalPrice: 330000, discount: 15},
            ],
            scent: "Cam ngọt và tươi sáng",
            ingredients: "Tinh dầu cam ngọt.",
            originDetail: "Citrus Farm.",
            distillation: "Ép lạnh.",
            usage: "Khuếch tán trong phòng học tập và làm việc.",
        }
    ),

    product(
        316,
        "Tinh Dầu Hoa Hồng",
        350000,
        "Xưởng Botanical",
        img.lavender,
        {
            category: "Thư giãn",
            rating: "4.9",
            reviews: "390+",
            sold: "390",
            description: "Hương hoa sang trọng",
            productCode: "BOT-316",
            images: [img.lavender, img.lavender],
            variants: [
                {id: 1, volume: "10ml", price: 350000, originalPrice: 410000, discount: 15},
                {id: 2, volume: "30ml", price: 820000, originalPrice: 920000, discount: 11},
            ],
            scent: "Hoa hồng ngọt và sang trọng",
            ingredients: "Tinh dầu hoa hồng.",
            originDetail: "Botanical.",
            distillation: "Chiết xuất và cô đặc.",
            usage: "Khuếch tán với lượng nhỏ.",
        }
    ),

    product(
        317,
        "Tinh Dầu Hương Thảo",
        155000,
        "Xưởng Mediterranean",
        img.teaTree,
        {
            category: "Tập trung",
            rating: "4.8",
            reviews: "720+",
            sold: "720",
            description: "Thảo mộc rõ nét",
            productCode: "MED-317",
            images: [img.teaTree, img.teaTree],
            variants: [
                {id: 1, volume: "10ml", price: 155000, originalPrice: 185000, discount: 16},
                {id: 2, volume: "30ml", price: 360000, originalPrice: 420000, discount: 14},
            ],
            scent: "Hương thảo mộc mạnh mẽ",
            ingredients: "Tinh dầu Rosemary.",
            originDetail: "Mediterranean.",
            distillation: "Chưng cất hơi nước.",
            usage: "Khuếch tán trong không gian làm việc.",
        }
    ),

    product(
        318,
        "Tinh Dầu Chanh",
        120000,
        "Xưởng Citrus Farm",
        img.citrus,
        {
            category: "Tập trung",
            rating: "4.9",
            reviews: "1.2k+",
            sold: "1.2k",
            description: "Tươi mát cho góc làm việc",
            productCode: "CF-318",
            images: [img.citrus, img.citrus],
            variants: [
                {id: 1, volume: "10ml", price: 120000, originalPrice: 145000, discount: 17},
                {id: 2, volume: "30ml", price: 285000, originalPrice: 330000, discount: 14},
            ],
            scent: "Chanh tươi sáng",
            ingredients: "Tinh dầu chanh.",
            originDetail: "Citrus Farm.",
            distillation: "Ép lạnh.",
            usage: "Khuếch tán trong góc làm việc.",
        }
    ),

    product(
        319,
        "Tinh Dầu Tràm Gió",
        130000,
        "Xưởng Botanical",
        img.teaTree,
        {
            category: "Tập trung",
            rating: "4.7",
            reviews: "510+",
            sold: "510",
            description: "Hương xanh tự nhiên",
            productCode: "BOT-319",
            images: [img.teaTree, img.teaTree],
            variants: [
                {id: 1, volume: "10ml", price: 130000, originalPrice: 155000, discount: 16},
                {id: 2, volume: "30ml", price: 300000, originalPrice: 350000, discount: 14},
            ],
            scent: "Xanh, mát và tự nhiên",
            ingredients: "Tinh dầu tràm gió.",
            originDetail: "Botanical.",
            distillation: "Chưng cất hơi nước.",
            usage: "Khuếch tán với liều lượng phù hợp.",
        }
    ),

    product(
        320,
        "Tinh Dầu Bưởi",
        155000,
        "Xưởng Nông Nguyên",
        img.citrus,
        {
            category: "Tập trung",
            rating: "4.8",
            reviews: "1.1k+",
            sold: "1.1k",
            description: "Hương citrus dễ chịu",
            productCode: "NN-320",
            images: [img.citrus, img.citrus],
            variants: [
                {id: 1, volume: "10ml", price: 155000, originalPrice: 180000, discount: 14},
                {id: 2, volume: "30ml", price: 350000, originalPrice: 420000, discount: 17},
            ],
            scent: "Bưởi tươi và thanh mát",
            ingredients: "Tinh dầu vỏ bưởi.",
            originDetail: "Xưởng Nông Nguyên.",
            distillation: "Ép lạnh.",
            usage: "Khuếch tán hoặc pha loãng với dầu nền.",
        }
    ),
];

/*
|--------------------------------------------------------------------------
| Hàm lấy sản phẩm theo ID
|--------------------------------------------------------------------------
*/

const getProduct = (id) =>
    products.find((item) => item.id === id);

/*
|--------------------------------------------------------------------------
| Dữ liệu Homepage
|--------------------------------------------------------------------------
*/

export const homeDatabase = {
    products,

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
        getProduct(101),
        getProduct(102),
        getProduct(103),
        getProduct(104),
    ],

    newProducts: [
        getProduct(201),
        getProduct(202),
        getProduct(203),
        getProduct(204),
    ],

    bestSellerTabs: {
        "Tất cả": [
            getProduct(301),
            getProduct(302),
            getProduct(303),
            getProduct(304),
            getProduct(305),
            getProduct(306),
            getProduct(307),
            getProduct(308),
        ],

        "Kháng khuẩn": [
            getProduct(303),
            getProduct(302),
            getProduct(306),
            getProduct(301),
            getProduct(309),
            getProduct(310),
            getProduct(311),
            getProduct(312),
        ],

        "Thư giãn": [
            getProduct(301),
            getProduct(305),
            getProduct(304),
            getProduct(308),
            getProduct(313),
            getProduct(314),
            getProduct(315),
            getProduct(316),
        ],

        "Tập trung": [
            getProduct(302),
            getProduct(301),
            getProduct(306),
            getProduct(307),
            getProduct(317),
            getProduct(318),
            getProduct(319),
            getProduct(320),
        ],
    },

    promotions: [
        {
            id: 401,
            badge: "TIẾT KIỆM ĐẾN 35%",
            title: "Combo Máy Xông Siêu Âm & Tinh Dầu Trị Liệu",
            description:
                "Tặng kèm 2 chai tinh dầu khi mua máy khuếch tán gốm cao cấp.",
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
