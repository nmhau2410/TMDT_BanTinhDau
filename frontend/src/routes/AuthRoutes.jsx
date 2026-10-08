import {Routes, Route, Navigate} from "react-router-dom";

import LoginPage from "../pages/auth/jsx/LoginPage";
import CustomerRegisterPage from "../pages/auth/jsx/CustomerRegisterPage";
import PartnerRegisterPage from "../pages/auth/jsx/PartnerRegisterPage";
import ForgotPasswordPage from "../pages/auth/jsx/ForgotPasswordPage.jsx";
import OTPVerificationPage from "../pages/auth/jsx/OTPVerificationPage.jsx";
import ResetPasswordPage from "../pages/auth/jsx/ResetPasswordPage.jsx";

function AuthRoutes() {
    return (<Routes>

            <Route path="login" element={<LoginPage/>} />
            <Route path="register" element={<CustomerRegisterPage/>} />
            <Route path="register-partner" element={<PartnerRegisterPage/>} />
            <Route path="forgot-password" element={<ForgotPasswordPage/>} />
            <Route path="verify-otp" element={<OTPVerificationPage/>} />
            <Route path="reset-password" element={<ResetPasswordPage/>} />

            <Route path="*" element={<Navigate to="/auth/login" replace/>} />

        </Routes>);
}

export default AuthRoutes;