import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "../pages/admin/jsx/AdminDashboard";
import AdminWorkshop from "../pages/admin/jsx/AdminWorkshop.jsx";
import AdminCustomer from "../pages/admin/jsx/AdminCustomer.jsx";
import AdminMaterials from "../pages/admin/jsx/AdminMaterials.jsx";
import AdminOrder from "../pages/admin/jsx/AdminOrder.jsx";
import AdminReview from "../pages/admin/jsx/AdminReview.jsx";
import AdminPromotion from "../pages/admin/jsx/AdminPromotion.jsx";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="dashboard" replace />} />

            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="workshops" element={<AdminWorkshop />} />
            <Route path="customers" element={<AdminCustomer />} />
            <Route path="materials" element={<AdminMaterials />} />
            <Route path="orders" element={<AdminOrder />} />
            <Route path="reviews" element={<AdminReview />} />
            <Route path="promotions" element={<AdminPromotion />} />

            <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Routes>
    );
};

export default AdminRoutes;