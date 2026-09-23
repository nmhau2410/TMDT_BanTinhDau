import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { useOTPVerification } from '../services/OTPVerificationForm';
import './OTPVerificationPage.css';

const OTPVerificationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};
  const mode = state.mode || 'register'; 
  const email = state.email || 'name@email.com';
  const handleSuccess = (otpString) => {
    console.log('OTP Verified:', otpString);
  };
  const {otp,timeLeft,isLoading,error,inputRefs,formatTime,handleChange,handleKeyDown,handlePaste,handleSubmit,handleResend,isExpired,isButtonDisabled} = useOTPVerification(300, handleSuccess);
  const content = {
    register: {
      badge: 'XÁC THỰC EMAIL',
      title: 'Xác thực email',
      subtitle: 'Chúng tôi đã gửi mã xác thực đến email đăng ký của bạn.',
      btnText: 'XÁC NHẬN'
    },
    'forgot-password': {
      badge: 'XÁC THỰC KHÔI PHỤC',
      title: 'Nhập mã xác thực',
      subtitle: 'Nhập mã đã được gửi đến email để tiếp tục đặt lại mật khẩu.',
      btnText: 'TIẾP TỤC'
    }
  };
  const currentContent = content[mode] || content.register;
  return (
    <AuthLayout>
      <div className="otp-form-content">
        <div className="badge-role">{currentContent.badge}</div>
        {mode === 'forgot-password' && (
           <div className="stepper-dots">
              <span className="dot active"></span>
              <span className="dot active"></span>
              <span className="dot"></span>
           </div>
        )}
        <h2>{currentContent.title}</h2>
        <p className="form-subtitle">{currentContent.subtitle}</p>
        <div className="email-display-box">
          <div className="email-icon">✉️</div>
          <div className="email-info">
            <div className="email-label">Email nhận mã</div>
            <div className="email-value">{email}</div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="otp-form">
          <div className="otp-input-group">
            <div className="otp-label">
              <span>Nhập mã xác thực</span>
              <span className="otp-hint">Mã gồm 6 chữ số</span>
            </div>
            <div className="otp-inputs" onPaste={handlePaste}>
              {otp.map((digit, index) => (
                <input key={index} type="text"maxLength="1"value={digit}ref={el => inputRefs.current[index] = el}onChange={(e) => handleChange(index, e)} onKeyDown={(e) => handleKeyDown(index, e)} className={`otp-digit ${digit ? 'filled' : ''} ${error ? 'error' : ''}`}/>
              ))}
            </div>
            {error && <div className="error-text">{error}</div>}
          </div>
          <div className={`countdown-box ${isExpired ? 'expired' : ''}`}>
            <span className="clock-icon">⏱</span>
            <div className="countdown-text">
              Mã có hiệu lực trong<br/>
              <strong>{formatTime(timeLeft)}</strong>
            </div>
          </div>
          <button type="submit" className={`btn-submit ${isLoading ? 'loading' : ''}`} disabled={isButtonDisabled}>
            {isLoading ? 'ĐANG XỬ LÝ...' : currentContent.btnText}
          </button>
          <div className="resend-hint">
            Không nhận được mã?{' '}
            <button type="button" className="btn-resend" onClick={handleResend}disabled={!isExpired && isLoading}>
              Gửi lại mã
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
export default OTPVerificationPage;
