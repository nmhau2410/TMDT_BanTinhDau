import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "../pages/admin/jsx/AdminDashboard";
import AdminWorkshop from "../pages/admin/jsx/AdminWorkshop.jsx";
import AdminCustomer from "../pages/admin/jsx/AdminCustomer.jsx";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="dashboard" replace />} />

            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="workshops" element={<AdminWorkshop />} />
            <Route path="customers" element={<AdminCustomer />} />

            <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Routes>
    );
};

export default AdminRoutes;