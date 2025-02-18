# Gurucool_Assignment

Guru App :
A React Native mobile application with bottom tab navigation using React Navigation.

Features
Bottom Tab Navigation (Home, Settings, Profile)
Uses React Native Vector Icons for tab icons

Prerequisites :
Ensure you have the following installed before running the app:
Node.js (>=18)
React Native CLI
Android Studio (for Android development)
JDK 11 or higher
Physical Device or Emulator setup

Installation & Running the App Locally

Clone the repository:
git clone https://github.com/aniljoshi89/Gurucool_Assignment.git
cd guru

Install dependencies:
npm install

Start Metro bundler:
npm run start

Run the app on Android:
npm run android

Dependencies
The following libraries are used in the app:
React Navigation:
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack

Additional dependencies:
npm install react-native-safe-area-context react-native-screens react-native-vector-icons

For Android, make sure to link vector icons manually if necessary:
npx react-native link react-native-vector-icons

Development Dependencies

Babel & ESLint:

npm install --save-dev @babel/core @babel/preset-env @babel/runtime eslint prettier

Testing:

npm install --save-dev jest @types/jest react-test-renderer @types/react-test-renderer

Building APK
To generate a debug APK:
cd android
./gradlew assembleDebug

The generated APK will be found at:
android/app/build/outputs/apk/debug/app-debug.apk

Additional Notes
The app uses React Native Vector Icons for tab icons.
Ensure Android Studio is set up correctly with SDK 30+.
If running on a real device, enable USB Debugging in Developer Options.

Author: Anil Joshi
