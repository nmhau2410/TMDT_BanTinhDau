import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductReviewPage from "../pages/customer/jsx/ProductReviewPage";

function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductReviewPage />} />
      <Route path="review" element={<ProductReviewPage />} />
      <Route path="review/:id" element={<ProductReviewPage />} />
      <Route path="write-review" element={<ProductReviewPage />} />
      <Route path="*" element={<Navigate to="review" replace />} />
    </Routes>
  );
}

export default CustomerRoutes;
