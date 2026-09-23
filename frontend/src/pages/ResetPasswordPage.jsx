import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { useResetPasswordForm } from '../services/ResetPasswordForm';
import './LoginPage.css';
import './ResetPasswordPage.css';

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSuccess = () => {
    alert('Đổi mật khẩu thành công! Bạn có thể đăng nhập bằng mật khẩu mới.');
    navigate('/login', { replace: true });
  };
  const {
    password,setPassword,confirmPassword,setConfirmPassword,showPassword,togglePassword,showConfirmPassword,toggleConfirmPassword,
    isLoading,apiError,minLength,hasLetterAndNumber,hasUpperCase,hasSpecialChar,passwordsMatch,isFormValid,handleSubmit
  } = useResetPasswordForm(handleSuccess);
  return (
    <AuthLayout>
      <div className="form-content reset-password-content">
        <div className="badge-role">ĐẶT LẠI MẬT KHẨU</div>
        <div className="stepper-dots">
          <span className="dot active"></span>
          <span className="dot active"></span>
          <span className="dot active"></span>
        </div>
        <h2>Tạo mật khẩu mới</h2>
        <p className="form-subtitle">Tạo mật khẩu mới có ít nhất 8 ký tự để bảo vệ tài khoản tốt hơn.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Mật khẩu mới</label>
            <div className="password-input-wrap">
              <input type={showPassword ? "text" : "password"} placeholder="Nhập mật khẩu mới" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <button type="button" className="toggle-password" onClick={togglePassword}>
                {showPassword ? "Ẩn" : "👁"}
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Xác nhận mật khẩu mới</label>
            <div className="password-input-wrap">
              <input type={showConfirmPassword ? "text" : "password"} placeholder="Nhập lại mật khẩu" value={confirmPassword}onChange={(e) => setConfirmPassword(e.target.value)}className={confirmPassword && !passwordsMatch ? 'input-error' : ''}/>
              <button type="button" className="toggle-password" onClick={toggleConfirmPassword}>
                {showConfirmPassword ? "Ẩn" : "👁"}
              </button>
            </div>
            {confirmPassword && !passwordsMatch && (
              <span className="error-text">Mật khẩu không trùng khớp.</span>
            )}
          </div>
          <div className="password-checklist">
            <div className={`check-item ${minLength ? 'valid' : ''}`}>
              <span className="check-icon">{minLength ? '✓' : '•'}</span>
              <span>Ít nhất 8 ký tự</span>
            </div>
            <div className={`check-item ${hasLetterAndNumber ? 'valid' : ''}`}>
              <span className="check-icon">{hasLetterAndNumber ? '✓' : '•'}</span>
              <span>Bao gồm chữ và số</span>
            </div>
            <div className={`check-item ${hasUpperCase ? 'valid' : ''}`}>
              <span className="check-icon">{hasUpperCase ? '✓' : '•'}</span>
              <span>1 ký tự in hoa</span>
            </div>
            <div className={`check-item ${hasSpecialChar ? 'valid' : ''}`}>
              <span className="check-icon">{hasSpecialChar ? '✓' : '•'}</span>
              <span>1 ký tự đặc biệt</span>
            </div>
          </div>
          {apiError && <div className="error-text api-error">{apiError}</div>}
          <button type="submit" className={`btn-submit ${isLoading ? 'loading' : ''}`}disabled={!isFormValid || isLoading}>
            {isLoading ? 'ĐANG XỬ LÝ...' : 'CẬP NHẬT MẬT KHẨU'}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};
export default ResetPasswordPage;
