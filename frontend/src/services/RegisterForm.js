import { useState, useEffect } from 'react';

export const useRegisterForm = (initialData, validationRules, onSubmitSuccess) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const validate = (data) => {
    let newErrors = {};
    let valid = true;
    for (const field in validationRules) {
      const rules = validationRules[field];
      const value = data[field];
      if (rules.required && (!value || value.toString().trim() === '')) {
        newErrors[field] = 'Vui lòng nhập trường này';
        valid = false;
      } else if (rules.isEmail && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors[field] = 'Email không hợp lệ';
          valid = false;
        }
      } else if (rules.isPhone && value) {
        const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
        if (!phoneRegex.test(value)) {
          newErrors[field] = 'Số điện thoại không hợp lệ';
          valid = false;
        }
      } else if (rules.matchField && value) {
        if (value !== data[rules.matchField]) {
          newErrors[field] = rules.matchMessage || 'Mật khẩu không khớp';
          valid = false;
        }
      } else if (rules.minLength && value) {
        if (value.length < rules.minLength) {
          newErrors[field] = `Độ dài tối thiểu là ${rules.minLength} ký tự`;
          valid = false;
        }
      }
    }
    setErrors(newErrors);
    return valid;
  };
  useEffect(() => {
    const isValid = validate(formData);
    setIsFormValid(isValid && formData.agreed);
  }, [formData]);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (onSubmitSuccess) {
        onSubmitSuccess(formData);
      } else {
        alert('Đăng ký thành công!');
      }
    }, 1500);
  };
  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  return {formData,errors,showPassword,showConfirmPassword,isLoading,isFormValid,handleChange,handleSubmit,togglePassword,toggleConfirmPassword};
};
