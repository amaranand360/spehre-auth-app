// Email validation
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone number validation (Indian format)
export const validatePhoneNumber = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};

// Password validation
export const validatePassword = (password) => {
  return password.length >= 6;
};

// Strong password validation
export const validateStrongPassword = (password) => {
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return strongPasswordRegex.test(password);
};

// OTP validation
export const validateOTP = (otp) => {
  const otpRegex = /^\d{6}$/;
  return otpRegex.test(otp);
};

// Name validation
export const validateName = (name) => {
  return name.trim().length >= 2;
};

// Check if passwords match
export const validatePasswordMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};

// General required field validation
export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

// Validation helper that returns error message
export const getValidationError = (field, value, confirmValue = null) => {
  switch (field) {
    case 'email':
      if (!validateRequired(value)) return 'Email is required';
      if (!validateEmail(value)) return 'Please enter a valid email address';
      return null;
      
    case 'phone':
      if (!validateRequired(value)) return 'Phone number is required';
      if (!validatePhoneNumber(value)) return 'Please enter a valid 10-digit phone number';
      return null;
      
    case 'password':
      if (!validateRequired(value)) return 'Password is required';
      if (!validatePassword(value)) return 'Password must be at least 6 characters long';
      return null;
      
    case 'strongPassword':
      if (!validateRequired(value)) return 'Password is required';
      if (!validateStrongPassword(value)) return 'Password must contain at least 8 characters with uppercase, lowercase, number and special character';
      return null;
      
    case 'confirmPassword':
      if (!validateRequired(value)) return 'Please confirm your password';
      if (!validatePasswordMatch(confirmValue, value)) return 'Passwords do not match';
      return null;
      
    case 'otp':
      if (!validateRequired(value)) return 'OTP is required';
      if (!validateOTP(value)) return 'Please enter a valid 6-digit OTP';
      return null;
      
    case 'name':
      if (!validateRequired(value)) return 'Name is required';
      if (!validateName(value)) return 'Name must be at least 2 characters long';
      return null;
      
    default:
      if (!validateRequired(value)) return `${field} is required`;
      return null;
  }
};

export default {
  validateEmail,
  validatePhoneNumber,
  validatePassword,
  validateStrongPassword,
  validateOTP,
  validateName,
  validatePasswordMatch,
  validateRequired,
  getValidationError,
};
