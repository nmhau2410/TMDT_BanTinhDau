import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductReviewPage from "../pages/customer/jsx/ProductReviewPage";
import ProductPage from "../pages/customer/jsx/ProductPage.jsx";
import ProductDetail from "../pages/customer/jsx/ProductDetail.jsx";
import PersonalizedDesignPage from "../pages/customer/jsx/PersonalizedDesignPage.jsx";
import CheckoutPage from "../pages/customer/jsx/CheckoutPage.jsx";
import CartPage from "../pages/customer/jsx/CartPage.jsx";
import WorkshopListPage from "../pages/customer/jsx/WorkshopListPage.jsx";

function CustomerRoutes() {
  return (
    <Routes>
        <Route path="products" element={<ProductPage />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="customize" element={<PersonalizedDesignPage />} />
        <Route path="customize/:id" element={<PersonalizedDesignPage />} />

        <Route path="review" element={<ProductReviewPage />} />
        <Route path="review/:id" element={<ProductReviewPage />} />
        <Route path="write-review" element={<ProductReviewPage />} />

        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="workshops" element={<WorkshopListPage />} />

        <Route path="*" element={<Navigate to="/products" replace />} />
    </Routes>
  );
}

export default CustomerRoutes;
