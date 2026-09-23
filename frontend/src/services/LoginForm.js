import { useState, useEffect } from 'react';

export const useLoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    const validate = () => {
      let newErrors = {};
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email) {
        newErrors.email = 'Vui lòng nhập email';
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Email không đúng định dạng';
      }
      if (!formData.password) {
        newErrors.password = 'Vui lòng nhập mật khẩu';
      }
      setErrors(newErrors);
      setIsFormValid(Object.keys(newErrors).length === 0 && formData.email && formData.password);
    };
    validate();
  }, [formData]);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Đăng nhập thành công!');}, 1500);
  };
  return {formData,errors,showPassword,isLoading,isFormValid,handleChange,handleSubmit,togglePassword};
};