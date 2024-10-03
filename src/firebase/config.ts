/**
 * Firebase Configuration and Initialization
 * 
 * This module sets up and initializes Firebase for the application.
 * It includes configuration for Firebase services and exports initialized instances.
 */

// Import necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Firebase configuration object
// Contains API keys and identifiers for the Firebase project
// Note: In a production environment, these values should be stored securely
// and not exposed in the client-side code
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase application
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services
// These can be imported and used in other parts of the application

/**
 * Firebase Analytics instance
 * Used for collecting and analyzing app usage data
 */
export const analytics = getAnalytics(app);

/**
 * Firebase Authentication instance
 * Used for user authentication services
 */
export const auth = getAuth(app);

// TODO: Add initialization for other Firebase services as needed
// Examples: Firestore, Realtime Database, Cloud Functions, etc.