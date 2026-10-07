import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductReviewPage from "../pages/customer/jsx/ProductReviewPage";
import ProductPage from "../pages/customer/jsx/ProductPage.jsx";
import ProductDetail from "../pages/customer/jsx/ProductDetail.jsx";
import PersonalizedDesignPage from "../pages/customer/jsx/PersonalizedDesignPage.jsx";

function CustomerRoutes() {
  return (
    <Routes>
      {/* Trang mặc định → sản phẩm */}
      <Route path="/" element={<Navigate to="products" replace />} />

      {/* Sản phẩm */}
      <Route path="products" element={<ProductPage />} />
      <Route path="products/:id" element={<ProductDetail />} />

      {/* Thiết kế cá nhân hóa */}
      <Route path="customize" element={<PersonalizedDesignPage />} />
      <Route path="customize/:id" element={<PersonalizedDesignPage />} />

      {/* Đánh giá sản phẩm (customer viết đánh giá) */}
      <Route path="review" element={<ProductReviewPage />} />
      <Route path="review/:id" element={<ProductReviewPage />} />
      <Route path="write-review" element={<ProductReviewPage />} />

      <Route path="*" element={<Navigate to="products" replace />} />
    </Routes>
  );
}

export default CustomerRoutes;
