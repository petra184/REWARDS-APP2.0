# Welcome to our Expo app 👋
This project is a React Native application built with Expo. It utilizes several libraries for advanced functionality, including navigation, QR code generation, and Supabase integration.

## Prerequisites
Before starting, ensure you have the following installed:
- **Node.js** (LTS version recommended)
- **npm** or **yarn**
- **Expo CLI**
If you don't have Expo CLI installed globally, you can install it with:
```bash
npm install -g expo-cli
```

## Installation
1. Clone the Repository:
bash
```bash
git clone https://github.com/your-username/your-repo-name.git
```

2. Navigate to the Project Directory:
```bash
cd your-repo-name
```

3. Install Dependencies:
a) Using npm:
```bash
npm install @expo/vector-icons expo-router react-native react-native-webview react-native-qrcode-svg react-native-dropdown-select-list @supabase/supabase-js expo-image-picker @react-navigation/native react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context react-native-svg react-native-svg-transformer
```
b) Using yarn:
```bash
yarn add @expo/vector-icons expo-router react-native react-native-webview react-native-qrcode-svg react-native-dropdown-select-list @supabase/supabase-js expo-image-picker @react-navigation/native react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context react-native-svg react-native-svg-transformer
```

4. Install React Navigation Dependencies: React Navigation requires additional dependencies for gesture handling and animations. Install them with Expo:
```bash
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context react-native-svg
```

5. Ensure Peer Dependencies Are Installed: Some libraries like Expo Router and Supabase may have specific peer dependencies. Run:
```bash
npm install
```
