import React from 'react';
import AuthLayout from '../components/AuthLayout';
import { useRegisterForm } from '../services/RegisterForm';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const initialData = { fullName: '', email: '',phone: '',password: '',confirmPassword: '',agreed: false};
const validationRules = {
  fullName: { required: true },
  email: { required: true, isEmail: true },
  phone: { required: true, isPhone: true },
  password: { required: true, minLength: 6 },
  confirmPassword: { required: true, matchField: 'password', matchMessage: 'Mật khẩu không khớp' }
};
const CustomerRegisterPage = () => {
  const navigate = useNavigate();
  const handleSuccess = (data) => {
    navigate('/verify-otp', { state: { mode: 'register', email: data.email } });
  };
  const {
    formData,errors,showPassword,showConfirmPassword,isLoading,isFormValid,handleChange,handleSubmit,togglePassword,toggleConfirmPassword
  } = useRegisterForm(initialData, validationRules, handleSuccess);
  return (
    <AuthLayout>
      <div className="register-form-content">
        <div className="badge-role">ĐĂNG KÝ KHÁCH HÀNG</div>
        <h2>Tạo tài khoản mới</h2>
        <p className="form-subtitle">Đăng ký để mua sắm tinh dầu từ nhiều xưởng cung cấp và quản lý đơn hàng của bạn trên Oilia.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group-sm">
            <label>Họ và tên</label>
            <input type="text"name="fullName"placeholder="Nguyễn Văn A"value={formData.fullName}onChange={handleChange}className={errors.fullName && formData.fullName !== '' ? 'input-error' : ''}/>
            {errors.fullName && formData.fullName !== '' && <span className="error-text">{errors.fullName}</span>}
          </div>
          <div className="form-group-sm">
            <label>Email</label>
            <input type="email" name="email" placeholder="name@email.com" value={formData.email} onChange={handleChange} className={errors.email && formData.email !== '' ? 'input-error' : ''}/>
            {errors.email && formData.email !== '' && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="form-group-sm">
            <label>Số điện thoại</label>
            <input type="tel" name="phone" placeholder="09xxxxxxxx" value={formData.phone} onChange={handleChange}className={errors.phone && formData.phone !== '' ? 'input-error' : ''}/>
            {errors.phone && formData.phone !== '' && <span className="error-text">{errors.phone}</span>}
          </div>
          <div className="form-group-sm">
            <label>Mật khẩu</label>
            <div className="password-input-wrap">
              <input type={showPassword ? "text" : "password"} name="password" placeholder="Nhập mật khẩu" value={formData.password} onChange={handleChange} className={errors.password && formData.password !== '' ? 'input-error' : ''}/>
              <button type="button" className="toggle-password" onClick={togglePassword}>
                {showPassword ? "Ẩn" : "👁"}
              </button>
            </div>
            {errors.password && formData.password !== '' && <span className="error-text">{errors.password}</span>}
          </div>
          <div className="form-group-sm">
            <label>Xác nhận mật khẩu</label>
            <div className="password-input-wrap">
              <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Nhập lại mật khẩu" value={formData.confirmPassword} onChange={handleChange} className={errors.confirmPassword && formData.confirmPassword !== '' ? 'input-error' : ''}/>
              <button type="button" className="toggle-password" onClick={toggleConfirmPassword}>
                {showConfirmPassword ? "Ẩn" : "👁"}
              </button>
            </div>
            {errors.confirmPassword && formData.confirmPassword !== '' && <span className="error-text">{errors.confirmPassword}</span>}
          </div>
          <label className="checkbox-container-sm">
            <input type="checkbox" name="agreed" checked={formData.agreed} onChange={handleChange}/>
            <span>Tôi đồng ý với <a href="/terms">Điều khoản sử dụng</a> và <a href="/privacy">Chính sách bảo mật</a></span>
          </label>
          <button type="submit" className={`btn-submit-sm ${isLoading ? 'loading' : ''}`} disabled={!isFormValid || isLoading}>
            {isLoading ? 'ĐANG XỬ LÝ...' : 'ĐĂNG KÝ'}
          </button>
          <div className="register-hint">
            Đã có tài khoản? <a href="/login">Đăng nhập</a>
          </div>
          <div className="register-hint" style={{ marginTop: '0.5rem' }}>
            Bạn là chủ xưởng chưng cất? <a href="/register-partner">Đăng ký Đối tác</a>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
export default CustomerRegisterPage;
