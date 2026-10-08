import { useState } from 'react';

export const useResetPasswordForm = (onSubmitSuccess) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const minLength = password.length >= 8;
  const hasLetterAndNumber = /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  const passwordsMatch = password && confirmPassword && password === confirmPassword;
  const isFormValid = minLength && hasLetterAndNumber && hasUpperCase && hasSpecialChar && passwordsMatch;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid || isLoading) return;    
    setIsLoading(true);
    setApiError('');
    setTimeout(() => {
      setIsLoading(false);
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    }, 1500);
  };
  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  return {
    password,setPassword,confirmPassword,setConfirmPassword,showPassword,togglePassword,showConfirmPassword,toggleConfirmPassword,isLoading,apiError,minLength,hasLetterAndNumber,hasUpperCase,hasSpecialChar,passwordsMatch,isFormValid,handleSubmit
  };
};
