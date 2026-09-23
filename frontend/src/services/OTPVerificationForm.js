import { useState, useEffect, useRef } from 'react';

export const useOTPVerification = (initialTime = 300, onSubmitSuccess) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const inputRefs = useRef([]);
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };
  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
      }
    }
  };
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
    const newOtp = [...otp];
    let lastFilledIndex = -1;
    pastedData.forEach((char, i) => {
      if (!isNaN(char) && char !== ' ') {
        newOtp[i] = char;
        lastFilledIndex = i;
      }
    });
    setOtp(newOtp);
    if (lastFilledIndex >= 0 && lastFilledIndex < 5 && inputRefs.current[lastFilledIndex + 1]) {
      inputRefs.current[lastFilledIndex + 1].focus();
    } else if (lastFilledIndex === 5 && inputRefs.current[5]) {
      inputRefs.current[5].focus();
    }
  };
  const isComplete = otp.every(digit => digit !== '');
  const isExpired = timeLeft === 0;
  const isButtonDisabled = !isComplete || isExpired || isLoading;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isButtonDisabled) return;
    setIsLoading(true);
    setError('');
    setTimeout(() => {
      setIsLoading(false);
      if (onSubmitSuccess) {
        onSubmitSuccess(otp.join(''));
      }
    }, 1500);
  };
  const handleResend = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setTimeLeft(initialTime);
      setOtp(['', '', '', '', '', '']);
      setError('');
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, 1000);
  };
  return {otp,timeLeft,isLoading,error,inputRefs,formatTime,handleChange,
    handleKeyDown,handlePaste,handleSubmit,handleResend,isComplete,isExpired,isButtonDisabled};
};
