import React from 'react';
import './AuthLayout.css';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="auth-left">
          <div className="auth-left-content">
            <p className="brand-subtitle">Oilia • SÀN KẾT NỐI TINH DẦU</p>
            <h1 className="brand-title">Kết nối khách hàng<br/>với các xưởng tinh dầu</h1>
            <p className="brand-desc">
              Khám phá sản phẩm từ nhiều xưởng cung cấp, theo dõi thông tin 
              nguồn gốc và quản lý đơn hàng tập trung trên Oilia.
            </p>
            <div className="journey-box">
              <p className="journey-title">Hành trình trên Oilia</p>
              <div className="journey-steps">
                <div className="step">
                  <div className="step-icon"></div>
                  <div className="step-text">
                    <strong>Xưởng tinh dầu</strong>
                    <span>Đăng sản phẩm và cung cấp thông tin nguồn gốc</span>
                  </div>
                </div>
                <div className="step">
                  <div className="step-icon"></div>
                  <div className="step-text">
                    <strong>Oilia</strong>
                    <span>Kết nối, hỗ trợ giao dịch và quản lý đơn hàng</span>
                  </div>
                </div>
                <div className="step">
                  <div className="step-icon"></div>
                  <div className="step-text">
                    <strong>Khách hàng</strong>
                    <span>Tìm kiếm, lựa chọn và mua sản phẩm phù hợp</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="footer-text">Mua sắm tinh dầu thuận tiện hơn, trong một trải nghiệm thống nhất.</p>
          </div>
        </div>
        <div className="auth-right">
          {children}
        </div>
      </div>
      <div className="bottom-disclaimer">
        Oilia là nền tảng trung gian giúp khách hàng tiếp cận sản phẩm tinh dầu từ nhiều xưởng cung cấp trong một hệ thống thống nhất.
      </div>
    </div>
  );
};
export default AuthLayout;