// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "imagineer-975ae.firebaseapp.com",
  projectId: "imagineer-975ae",
  storageBucket: "imagineer-975ae.appspot.com",
  messagingSenderId: "919081606999",
  appId: "1:919081606999:web:ef3760278c22fe3bfb2812"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);