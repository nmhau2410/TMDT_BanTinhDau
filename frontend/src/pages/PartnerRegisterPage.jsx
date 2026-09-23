import React from 'react';
import AuthLayout from '../components/AuthLayout';
import { useRegisterForm } from '../services/RegisterForm';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const initialData = {factoryName: '',representativeName: '',email: '',phone: '',address: '',password: '',confirmPassword: '',agreed: false};
const validationRules = {
  factoryName: { required: true },
  representativeName: { required: true },
  email: { required: true, isEmail: true },
  phone: { required: true, isPhone: true },
  address: { required: true },
  password: { required: true, minLength: 6 },
  confirmPassword: { required: true, matchField: 'password', matchMessage: 'Mật khẩu không khớp' }
};
const PartnerRegisterPage = () => {
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
        <div className="badge-role">ĐĂNG KÝ XƯỞNG SẢN XUẤT</div>
        <h2>Đăng ký trở thành đối tác xưởng</h2>
        <p className="form-subtitle">Đăng ký thông tin xưởng chưng cất để bắt đầu kết nối chuỗi cung ứng và nhận đơn gia công trên Oilia.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group-sm">
            <label>TÊN XƯỞNG *</label>
            <input type="text" name="factoryName"placeholder="Xưởng Chưng Cất Đà..." value={formData.factoryName} onChange={handleChange} className={errors.factoryName && formData.factoryName !== '' ? 'input-error' : ''}/>
            {errors.factoryName && formData.factoryName !== '' && <span className="error-text">{errors.factoryName}</span>}
          </div>
          <div className="form-grid-2">
            <div className="form-group-sm">
              <label>HỌ VÀ TÊN NGƯỜI ĐẠI DIỆN *</label>
              <input type="text" name="representativeName" placeholder="Nguyễn Văn A" value={formData.representativeName} onChange={handleChange} className={errors.representativeName && formData.representativeName !== '' ? 'input-error' : ''}/>
              {errors.representativeName && formData.representativeName !== '' && <span className="error-text">{errors.representativeName}</span>}
            </div>
            <div className="form-group-sm">
              <label>EMAIL LIÊN HỆ CÔNG VIỆC *</label>
              <input type="email" name="email" placeholder="xuong@dalatorganic.vn" value={formData.email} onChange={handleChange} className={errors.email && formData.email !== '' ? 'input-error' : ''}/>
              {errors.email && formData.email !== '' && <span className="error-text">{errors.email}</span>}
            </div>
          </div>
          <div className="form-group-sm">
            <label>SỐ ĐIỆN THOẠI LIÊN HỆ *</label>
            <input type="tel" name="phone" placeholder="09xxxxxxxx" value={formData.phone} onChange={handleChange} className={errors.phone && formData.phone !== '' ? 'input-error' : ''}/>
            {errors.phone && formData.phone !== '' && <span className="error-text">{errors.phone}</span>}
          </div>
          <div className="form-group-sm form-grid-full">
            <label>ĐỊA CHỈ XƯỞNG *</label>
            <input type="text" name="address"placeholder="Thung lũng Mộc Châu, Sơn La hoặc Lâm Viên, Đà Lạt" value={formData.address} onChange={handleChange} className={errors.address && formData.address !== '' ? 'input-error' : ''}/>
            {errors.address && formData.address !== '' && <span className="error-text">{errors.address}</span>}
          </div>
          <div className="form-grid-2">
            <div className="form-group-sm">
              <label>MẬT KHẨU *</label>
              <div className="password-input-wrap">
                <input type={showPassword ? "text" : "password"} name="password"placeholder="Nhập mật khẩu" value={formData.password}onChange={handleChange}className={errors.password && formData.password !== '' ? 'input-error' : ''}/>
                <button type="button" className="toggle-password" onClick={togglePassword}>
                  {showPassword ? "Ẩn" : "👁"}
                </button>
              </div>
              {errors.password && formData.password !== '' && <span className="error-text">{errors.password}</span>}
            </div>
            <div className="form-group-sm">
              <label>XÁC NHẬN MẬT KHẨU *</label>
              <div className="password-input-wrap">
                <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword"placeholder="Nhập lại mật khẩu" value={formData.confirmPassword}onChange={handleChange}className={errors.confirmPassword && formData.confirmPassword !== '' ? 'input-error' : ''}/>
                <button type="button" className="toggle-password" onClick={toggleConfirmPassword}>
                  {showConfirmPassword ? "Ẩn" : "👁"}
                </button>
              </div>
              {errors.confirmPassword && formData.confirmPassword !== '' && <span className="error-text">{errors.confirmPassword}</span>}
            </div>
          </div>
          <label className="checkbox-container-sm" style={{ marginTop: '0.5rem' }}>
            <input type="checkbox" name="agreed"checked={formData.agreed}onChange={handleChange}/>
            <span>Tôi đồng ý với <a href="/partner-terms">Điều khoản hợp tác xưởng</a> và <a href="/gcms-rules">Quy chuẩn kiểm định chất lượng GC/MS</a> của Oilia.</span>
          </label>
          <button type="submit" className={`btn-submit-sm ${isLoading ? 'loading' : ''}`} disabled={!isFormValid || isLoading}>
            {isLoading ? 'ĐANG XỬ LÝ...' : 'ĐĂNG KÝ HỢP TÁC XƯỞNG'}
          </button>
          <div className="register-hint">
            Đã có tài khoản? <a href="/login">Đăng nhập</a>
          </div>
          <div className="register-hint" style={{ marginTop: '0.5rem' }}>
            Đăng ký làm khách hàng mua sắm? <a href="/register">Đăng ký Khách hàng</a>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
export default PartnerRegisterPage;
