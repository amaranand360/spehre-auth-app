// Format phone number for display
export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  
  // Remove all non-digits
  const cleaned = phone.replace(/\D/g, '');
  
  // Format as +91 XXXXX XXXXX
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  
  return phone;
};

// Get last 4 digits of phone number
export const getLastFourDigits = (phone) => {
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.slice(-4);
};

// Format time ago (e.g., "2 hours ago")
export const formatTimeAgo = (date) => {
  const now = new Date();
  const diffInMs = now - new Date(date);
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
  if (diffInMinutes < 1) return 'Just now';
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  if (diffInHours < 24) return `${diffInHours}h ago`;
  if (diffInDays < 7) return `${diffInDays}d ago`;
  
  return new Date(date).toLocaleDateString();
};

// Capitalize first letter
export const capitalizeFirst = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Format name (capitalize each word)
export const formatName = (name) => {
  if (!name) return '';
  return name
    .split(' ')
    .map(word => capitalizeFirst(word))
    .join(' ');
};

// Truncate text with ellipsis
export const truncateText = (text, maxLength = 50) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Format number with commas (e.g., 1,234)
export const formatNumber = (num) => {
  if (!num) return '0';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Format currency (Indian Rupees)
export const formatCurrency = (amount) => {
  if (!amount) return '₹0';
  return `₹${formatNumber(amount)}`;
};

// Remove special characters from string
export const removeSpecialChars = (str) => {
  if (!str) return '';
  return str.replace(/[^a-zA-Z0-9\s]/g, '');
};

// Generate initials from name
export const getInitials = (name) => {
  if (!name) return '';
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .substring(0, 2);
};

// Format file size
export const formatFileSize = (bytes) => {
  if (!bytes) return '0 B';
  
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
};

export default {
  formatPhoneNumber,
  getLastFourDigits,
  formatTimeAgo,
  capitalizeFirst,
  formatName,
  truncateText,
  formatNumber,
  formatCurrency,
  removeSpecialChars,
  getInitials,
  formatFileSize,
};
