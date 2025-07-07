# Spehrea - Source Code Structure

This document explains the organized folder structure of the Spehrea React Native application.

## 📁 Folder Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Common components (Button, Input, etc.)
│   ├── forms/           # Form-specific components
│   └── cards/           # Card components
├── screens/             # Screen components organized by feature
│   ├── auth/           # Authentication screens
│   └── main/           # Main app screens
├── navigation/          # Navigation configuration
├── services/           # API and external services
│   ├── api/           # API calls
│   └── firebase/      # Firebase configuration
├── hooks/              # Custom React hooks
├── context/            # React Context providers
├── utils/              # Utility functions and constants
│   ├── helpers/       # Helper functions
│   └── constants/     # App constants
├── styles/             # Global styles and themes
└── assets/             # Static assets (images, fonts, etc.)
```

## 🎯 Key Benefits

### 1. **Feature-Based Organization**
- Related screens are grouped together
- Easy to locate and maintain code
- Clear separation of concerns

### 2. **Reusable Components**
- Common components can be shared across screens
- Consistent UI/UX throughout the app
- Easier to maintain and update

### 3. **Centralized Configuration**
- All constants in one place
- Global styles for consistency
- Easy to modify app-wide settings

### 4. **Scalable Architecture**
- Easy to add new features
- Clear structure for team collaboration
- Maintainable codebase

## 📝 Usage Examples

### Importing Constants
```javascript
import { COLORS, DIMENSIONS, STRINGS } from '../utils/constants';
// or
import COLORS from '../utils/constants/colors';
```

### Importing Helper Functions
```javascript
import { validateEmail, formatPhoneNumber } from '../utils/helpers';
// or
import validation from '../utils/helpers/validation';
```

### Using Global Styles
```javascript
import globalStyles from '../styles/globalStyles';

// In your component
<View style={globalStyles.container}>
  <Text style={globalStyles.title}>Title</Text>
</View>
```

## 🔧 Migration Notes

The old structure has been reorganized as follows:

- `screens/` → `src/screens/auth/` and `src/screens/main/`
- `assets/` → `src/assets/`
- `utils/` → `src/services/api/` and `src/utils/helpers/`
- `firebase.config.js` → `src/services/firebase/config.js`

All import paths have been updated accordingly.

## 🚀 Next Steps

1. **Add more reusable components** as the app grows
2. **Implement custom hooks** for common logic
3. **Add context providers** for global state management
4. **Create more helper functions** as needed
5. **Add unit tests** following the same structure

This structure follows React Native best practices and will scale well as the application grows!
