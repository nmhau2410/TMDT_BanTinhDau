import React from 'react';
import AuthLayout from '../components/AuthLayout';
import { useLoginForm } from '../services/LoginForm'; 
import './LoginPage.css';

const LoginPage = () => {
  const {
    formData,
    errors,
    showPassword,
    isLoading,
    isFormValid,
    handleChange,
    handleSubmit,
    togglePassword
  } = useLoginForm();
  return (
    <AuthLayout>
      <div className="form-content">
        <div className="badge-role">TÀI KHOẢN KHÁCH HÀNG</div>
        <h2>Chào mừng bạn trở lại</h2>
        <p className="form-subtitle">Đăng nhập để tiếp tục mua sắm và quản lý đơn hàng tinh dầu của bạn.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email</label>
            <input type="text" name="email"placeholder="name@email.com" value={formData.email}onChange={handleChange}className={errors.email && formData.email !== '' ? 'input-error' : ''}/>
            {errors.email && formData.email !== '' && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <div className="password-input-wrap">
              <input type={showPassword ? "text" : "password"} name="password"placeholder="Nhập mật khẩu" value={formData.password}onChange={handleChange}className={errors.password && formData.password !== '' ? 'input-error' : ''}/>
              <button type="button" className="toggle-password"onClick={togglePassword}>{showPassword ? "Ẩn" : "👁"} </button>
            </div>
            {errors.password && formData.password !== '' && <span className="error-text">{errors.password}</span>}
          </div>
          <div className="form-actions-row">
            <label className="checkbox-container">
              <input type="checkbox" name="remember"checked={formData.remember}onChange={handleChange}/>
              <span className="checkmark"></span>
              Ghi nhớ đăng nhập
            </label>
            <a href="/forgot-password" className="forgot-link">Quên mật khẩu?</a>
          </div>
          <button type="submit" className={`btn-submit ${isLoading ? 'loading' : ''}`}disabled={!isFormValid || isLoading}>
            {isLoading ? 'ĐANG XỬ LÝ...' : 'ĐĂNG NHẬP'}
          </button>
          <div className="divider"><span>hoặc</span></div>
          <div className="register-hint">
            Bạn chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
export default LoginPage;