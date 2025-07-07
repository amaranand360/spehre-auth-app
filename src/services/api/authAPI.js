import { auth, GoogleSignin } from '../firebase.config';

export const AuthService = {
  // Email/Password Authentication
  signUpWithEmail: async (email, password) => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  signInWithEmail: async (email, password) => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Google Sign-In
  signInWithGoogle: async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
      
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
      // Sign-in the user with the credential
      const userCredential = await auth().signInWithCredential(googleCredential);
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Phone Authentication
  signInWithPhoneNumber: async (phoneNumber) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      return { success: true, confirmation };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Verify OTP
  verifyOTP: async (confirmation, code) => {
    try {
      const userCredential = await confirmation.confirm(code);
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Password Reset
  resetPassword: async (email) => {
    try {
      await auth().sendPasswordResetEmail(email);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Sign Out
  signOut: async () => {
    try {
      await GoogleSignin.signOut();
      await auth().signOut();
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Get Current User
  getCurrentUser: () => {
    return auth().currentUser;
  },

  // Listen to Auth State Changes
  onAuthStateChanged: (callback) => {
    return auth().onAuthStateChanged(callback);
  },
};