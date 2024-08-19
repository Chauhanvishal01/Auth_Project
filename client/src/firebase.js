// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-63808.firebaseapp.com",
  projectId: "auth-63808",
  storageBucket: "auth-63808.appspot.com",
  messagingSenderId: "777005249546",
  appId: "1:777005249546:web:318fa361b86dc2a7785bf3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);