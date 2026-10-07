import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthRoutes from "./AuthRoutes";
import CustomerRoutes from "./CustomerRoutes";
import WorkshopRoutes from "./WorkshopRoutes";
import AdminRoutes from "./AdminRoutes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/customer/*" element={<CustomerRoutes />} />
        <Route path="/review/*" element={<CustomerRoutes />} />
        <Route path="/write-review" element={<CustomerRoutes />} />
        <Route path="/workshop/*" element={<WorkshopRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;