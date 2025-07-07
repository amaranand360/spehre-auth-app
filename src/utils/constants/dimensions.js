import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const DIMENSIONS = {
  // Screen Dimensions
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  
  // Common Spacing
  SPACING_XS: 4,
  SPACING_SM: 8,
  SPACING_MD: 12,
  SPACING_LG: 16,
  SPACING_XL: 20,
  SPACING_XXL: 24,
  
  // Border Radius
  BORDER_RADIUS_SM: 8,
  BORDER_RADIUS_MD: 12,
  BORDER_RADIUS_LG: 16,
  BORDER_RADIUS_XL: 20,
  BORDER_RADIUS_CIRCLE: 50,
  
  // Component Sizes
  BUTTON_HEIGHT: 50,
  INPUT_HEIGHT: 50,
  HEADER_HEIGHT: 60,
  TAB_BAR_HEIGHT: 80,
  
  // Icon Sizes
  ICON_XS: 16,
  ICON_SM: 20,
  ICON_MD: 24,
  ICON_LG: 32,
  ICON_XL: 40,
  
  // Font Sizes
  FONT_XS: 12,
  FONT_SM: 14,
  FONT_MD: 16,
  FONT_LG: 18,
  FONT_XL: 20,
  FONT_XXL: 24,
  FONT_TITLE: 28,
  FONT_HEADER: 32,
};

export default DIMENSIONS;
