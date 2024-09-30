// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUQabtRqc0LGPgU8q9QeuA61o2WFu5Ctc",
  authDomain: "codemaster-6141c.firebaseapp.com",
  projectId: "codemaster-6141c",
  storageBucket: "codemaster-6141c.appspot.com",
  messagingSenderId: "456978068931",
  appId: "1:456978068931:web:526759fa0e374ff0747976",
  measurementId: "G-NZ6C1J931Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);