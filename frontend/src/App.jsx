import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import CustomerRegisterPage from './pages/CustomerRegisterPage'
import PartnerRegisterPage from './pages/PartnerRegisterPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import OTPVerificationPage from './pages/OTPVerificationPage'
import ResetPasswordPage from './pages/ResetPasswordPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<CustomerRegisterPage />} />
        <Route path="/register-partner" element={<PartnerRegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-otp" element={<OTPVerificationPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App