import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/workshop/jsx/WorkshopDashboard";
import WorkshopMaterials from "../pages/workshop/jsx/WorkshopMaterials";
import WorkshopReviews from "../pages/workshop/jsx/WorkshopReviews";
import WorkshopCategories from "../pages/workshop/jsx/WorkshopCategories";
import WorkshopOrders from "../pages/workshop/jsx/WorkshopOrders";

function WorkshopRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="dashboard" replace />} />

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<WorkshopOrders />} />
            <Route path="materials" element={<WorkshopMaterials />} />
            <Route path="reviews" element={<WorkshopReviews />} />
            <Route path="categories" element={<WorkshopCategories />} />

            <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Routes>
    );
};

export default WorkshopRoutes;