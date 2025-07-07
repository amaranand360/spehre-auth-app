import { StyleSheet } from 'react-native';
import COLORS from '../utils/constants/colors';
import DIMENSIONS from '../utils/constants/dimensions';

export const globalStyles = StyleSheet.create({
  // Container Styles
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND,
  },
  
  // Text Styles
  title: {
    fontSize: DIMENSIONS.FONT_TITLE,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: DIMENSIONS.SPACING_MD,
  },
  
  subtitle: {
    fontSize: DIMENSIONS.FONT_MD,
    color: COLORS.TEXT_SECONDARY,
    marginBottom: DIMENSIONS.SPACING_LG,
    textAlign: 'center',
  },
  
  bodyText: {
    fontSize: DIMENSIONS.FONT_MD,
    color: COLORS.TEXT_PRIMARY,
    lineHeight: 24,
  },
  
  // Button Styles
  primaryButton: {
    backgroundColor: COLORS.PRIMARY,
    height: DIMENSIONS.BUTTON_HEIGHT,
    borderRadius: DIMENSIONS.BORDER_RADIUS_MD,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: DIMENSIONS.SPACING_MD,
  },
  
  primaryButtonText: {
    color: COLORS.WHITE,
    fontSize: DIMENSIONS.FONT_LG,
    fontWeight: '600',
  },
  
  secondaryButton: {
    backgroundColor: COLORS.WHITE,
    height: DIMENSIONS.BUTTON_HEIGHT,
    borderRadius: DIMENSIONS.BORDER_RADIUS_MD,
    borderWidth: 1,
    borderColor: COLORS.BORDER_DEFAULT,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: DIMENSIONS.SPACING_MD,
  },
  
  secondaryButtonText: {
    color: COLORS.PRIMARY,
    fontSize: DIMENSIONS.FONT_LG,
    fontWeight: '600',
  },
  
  // Input Styles
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.INPUT_BACKGROUND,
    borderRadius: DIMENSIONS.BORDER_RADIUS_MD,
    paddingHorizontal: DIMENSIONS.SPACING_LG,
    marginBottom: DIMENSIONS.SPACING_LG,
    borderWidth: 1,
    borderColor: COLORS.BORDER_DEFAULT,
    height: DIMENSIONS.INPUT_HEIGHT,
  },
  
  inputContainerFocused: {
    borderColor: COLORS.BORDER_FOCUSED,
    backgroundColor: COLORS.PRIMARY_LIGHT,
    borderWidth: 2,
  },
  
  input: {
    flex: 1,
    fontSize: DIMENSIONS.FONT_MD,
    color: COLORS.TEXT_PRIMARY,
    paddingVertical: DIMENSIONS.SPACING_MD,
  },
  
  inputIcon: {
    marginRight: DIMENSIONS.SPACING_MD,
  },
  
  // Card Styles
  card: {
    backgroundColor: COLORS.CARD_BACKGROUND,
    borderRadius: DIMENSIONS.BORDER_RADIUS_MD,
    padding: DIMENSIONS.SPACING_LG,
    marginBottom: DIMENSIONS.SPACING_LG,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  // Layout Styles
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  spaceBetween: {
    justifyContent: 'space-between',
  },
  
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Spacing Styles
  marginTop: {
    marginTop: DIMENSIONS.SPACING_LG,
  },
  
  marginBottom: {
    marginBottom: DIMENSIONS.SPACING_LG,
  },
  
  paddingHorizontal: {
    paddingHorizontal: DIMENSIONS.SPACING_LG,
  },
  
  paddingVertical: {
    paddingVertical: DIMENSIONS.SPACING_LG,
  },
  
  // Shadow Styles
  shadow: {
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default globalStyles;
