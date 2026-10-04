import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/workshop/jsx/WorkshopDashboard";
import WorkshopMaterials from "../pages/workshop/jsx/WorkshopMaterials";

function WorkshopRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="dashboard" replace />} />

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="materials" element={<WorkshopMaterials />} />

            <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Routes>
    );
};

export default WorkshopRoutes;