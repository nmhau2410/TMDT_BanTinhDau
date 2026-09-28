import {Routes, Route, Navigate} from "react-router-dom";

import LoginPage from "../pages/auth/jsx/LoginPage";
import CustomerRegisterPage from "../pages/auth/jsx/CustomerRegisterPage";
import PartnerRegisterPage from "../pages/auth/jsx/PartnerRegisterPage";

function AuthRoutes() {
    return (<Routes>

            <Route path="login" element={<LoginPage/>} />
            <Route path="register" element={<CustomerRegisterPage/>} />
            <Route path="register-partner" element={<PartnerRegisterPage/>} />

            <Route path="*" element={<Navigate to="/auth/login" replace/>} />

        </Routes>);
}

export default AuthRoutes;