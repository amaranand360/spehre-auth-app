# Spehrea - App

Spehrea is a React Native mobile application This is an assignment project showcasing modern React Native development practices with Firebase authentication.

## ✨ Features

### 🔐 **Authentication System**
- **Email/Password Login** - Traditional login with email and password
- **Phone Number Authentication** - OTP-based verification using Firebase
- **Google Sign-In** - Quick login with Google account
- **Password Creation** - Set up new passwords for accounts

### 🏠 **Home Dashboard**
- **Stats Overview** - View connections, applications, and study groups
- **Quick Actions** - Fast access to find peers, internships, jobs, and study groups


### 📱 **Bottom Navigation**
- **Home** - Dashboard with stats and activities
- **Explore** - Discover new opportunities and connections
- **Messages** - Communication hub with recent conversations
- **Profile** - User account management and settings

### 🎨 **UI/UX Features**
- **Modern Design** - Clean and intuitive interface
- **Blue Theme** - Consistent color scheme throughout
- **Focus Highlighting** - Input fields highlight when active
- **Profile Menu** - Dropdown menu with logout option

## 🛠️ Tech Stack

- **React Native** - Cross-platform mobile development
- **Firebase Authentication** - User authentication and management
- **React Navigation** - Screen navigation and routing
- **Vector Icons** - Material Design icons
- **Linear Gradient** - Beautiful gradient backgrounds
- **Google Sign-In** - Google authentication integration

## 📱 Screens Overview

### Authentication Flow
1. **Welcome Screen** - App introduction and getting started
2. **Login Screen** - Email/password and social login options
3. **Phone Number Screen** - Enter phone number for OTP verification
4. **OTP Verification Screen** - Enter 6-digit verification code
5. **Password Creation Screen** - Set up new password

### Main App
6. **Home Screen** - Dashboard with stats, activities, and navigation

## 🚀 Getting Started

### Prerequisites
- Node.js 
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/amaranand360/spehre-auth-app.git
```

2. **Install dependencies**
```bash
npm install
```

3. **Install iOS dependencies (iOS only)**
```bash
cd ios && pod install && cd ..
```

4. **Start Metro bundler**
```bash
npx react-native start
```

5. **Run the app**
```bash
# For Android
npx react-native run-android

# For iOS
npx react-native run-ios
```

## 🧪 Demo Credentials

### For Testing Login Features

#### **Email/Password Login**
- **Email:** `amaranand806@gmail.com`
- **Password:** `123456`

#### **Phone Number Authentication**
- **Phone Number:** `8292772484`
- **OTP Code:** `123456`

#### **Google Sign-In**
- Use any valid Google account
- Google authentication is fully functional



## 🎥 Demo Video

Watch the complete app demonstration: [Demo Video Link]

## � Project Structure

```
Spehrea/
├── src/                           # Main source directory
│   ├── screens/                   # Screen components
│   │   ├── auth/                 # Authentication screens
│   │   └── main/                 # Main app screens
│   ├── navigation/               # Navigation configuration
│   ├── services/                 # API and Firebase services
│   ├── utils/                    # Utility functions and constants
│   ├── styles/                   # Global styles and themes
│   └── assets/                   # Images and static assets
├── android/                      # Android platform files
├── ios/                          # iOS platform files
└── package.json                  # Dependencies and scripts
```

