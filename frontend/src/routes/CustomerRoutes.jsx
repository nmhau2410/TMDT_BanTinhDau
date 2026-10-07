import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import ProductReviewPage from "../pages/customer/jsx/ProductReviewPage";
import ProductPage from "../pages/customer/jsx/ProductPage.jsx";
import ProductDetail from "../pages/customer/jsx/ProductDetail.jsx";
import CartPage from "../pages/customer/jsx/CartPage.jsx";
import AccountPage from "../pages/customer/jsx/AccountPage.jsx";
import ChangePasswordPage from "../pages/customer/jsx/ChangePasswordPage.jsx";
import FavoriteProducts from "../pages/customer/jsx/FavoriteProducts";
import OrdersPage from "../pages/customer/jsx/OrdersPage";
import WorkshopList from "../pages/customer/jsx/WorkshopList";
import WorkshopDetail from "../pages/customer/jsx/WorkshopDetail";
function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductReviewPage />} />
      <Route path="review" element={<ProductReviewPage />} />
      <Route path="review/:id" element={<ProductReviewPage />} />
      <Route path="write-review" element={<ProductReviewPage />} />


      <Route path="products" element={<ProductPage />} />
      <Route path="products/:id" element={<ProductDetail />} />

        {/*//*/}
      <Route path="cart" element={<CartPage />} />
        {/*//*/}
      <Route path="account" element={<AccountPage />}/>
      <Route path="change-password" element={<ChangePasswordPage />} />
        <Route path="favorites" element={<FavoriteProducts />}/>
        <Route path="orders" element={<OrdersPage />}/>
        <Route path="workshop" element={<WorkshopList />} />
        <Route path="workshop/:id" element={<WorkshopDetail />} />

      <Route path="*" element={<Navigate to="review" replace />} />
    </Routes>
  );
}

export default CustomerRoutes;
