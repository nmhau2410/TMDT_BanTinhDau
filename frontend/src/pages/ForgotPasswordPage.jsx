import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import './LoginPage.css';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Vui lòng nhập email');
      return;
    }
    if (!validateEmail(email)) {
      setError('Email không hợp lệ');
      return;
    }
    setIsLoading(true);
    setError('');
    setTimeout(() => {
      setIsLoading(false);
      navigate('/verify-otp', { state: { mode: 'forgot-password', email: email } });
    }, 1500);
  };
  return (
    <AuthLayout>
      <div className="form-content forgot-password-content">
        <div className="badge-role">QUÊN MẬT KHẨU</div> 
        <h2>Khôi phục mật khẩu</h2>
        <p className="form-subtitle">Nhập email đã đăng ký để nhận mã xác thực và đặt lại mật khẩu.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="name@email.com" value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
              className={error ? 'input-error' : ''}/>
            {error && <span className="error-text">{error}</span>}
          </div>
          <button type="submit" className={`btn-submit ${isLoading ? 'loading' : ''}`}disabled={!email || isLoading}>
            {isLoading ? 'ĐANG XỬ LÝ...' : 'GỬI MÃ XÁC THỰC'}
          </button>
          <div className="register-hint login-hint">
            Bạn đã nhớ lại mật khẩu? <a href="/login">Đăng nhập</a>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
export default ForgotPasswordPage;
