# TMDT_BanTinhDau - Website Thương Mại Điện Tử Bán Tinh Dầu

Dự án xây dựng website thương mại điện tử kinh doanh các sản phẩm tinh dầu thiên nhiên được phát triển theo kiến trúc 3 lớp.

## Công Nghệ Sử Dụng (Tech Stack)

- **Frontend:** React (Vite), React Router DOM, Axios, Bootstrap 5, React Icons.
- **Backend:** Java, Spring Boot (Spring Web, Spring Data JPA, Lombok).
- **Database:** MySQL.
- **Công cụ quản lý & đóng gói:** Maven (Backend), npm (Frontend), Git / GitHub.

## Cấu Trúc Dự Án (Project Structure)

```text
TMDT_BanTinhDau/
├── backend/ # Source code Java Spring Boot
│ ├── src/
│ │ ├── main/
│ │ │ ├── java/com/tinhdau/backend/
│ │ │ │ ├── controllers/ # Tiếp nhận Request API từ Frontend
│ │ │ │ ├── services/ # Xử lý logic nghiệp vụ
│ │ │ │ ├── repositories/ # Thao tác với Database (Spring Data JPA)
│ │ │ │ ├── models/ # Các Entity ánh xạ bảng MySQL (User, Product, Order...)
│ │ │ │ └── configs/ # Cấu hình CORS, Security
│ │ │ └── resources/
│ │ │ └── application.properties # Cấu hình kết nối MySQL & Port
│ └── pom.xml # Quản lý dependencies Maven
│
├── frontend/ # Source code React (Vite)
│ ├── public/ # Tài nguyên tĩnh công khai (favicon, logo tab)
│ ├── src/
│ │ ├── assets/ # Hình ảnh tĩnh (banner, logo website, icon)
│ │ ├── components/ # Linh kiện UI tái sử dụng (Header, Footer, ProductCard...)
│ │ ├── pages/ # Các màn hình chính (HomePage, ProductDetailPage, CartPage...)
│ │ ├── services/ # Hàm gọi API kết nối Backend qua Axios (productService.js...)
│ │ ├── App.jsx # Định tuyến đường dẫn
│ │ └── main.jsx # Điểm khởi chạy ứng dụng React
│ ├── package.json # Quản lý thư viện Frontend
│ └── vite.config.js # Cấu hình Vite
│
└── README.md # Tài liệu dự án
```
