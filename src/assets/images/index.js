// Export all images from a single file for easy importing
export { default as logoImage } from './logo.png';
export { default as googleIcon } from './google.png';
export { default as appleIcon } from './apple-logo.png';
export { default as userIcon } from './user.png';
export { default as verificationIcon } from './verification.png';

// Alternative named exports for convenience
export const images = {
  logo: require('./logo.png'),
  google: require('./google.png'),
  apple: require('./apple-logo.png'),
  user: require('./user.png'),
  verification: require('./verification.png'),
};

export default images;
