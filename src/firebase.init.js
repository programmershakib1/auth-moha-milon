// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBxFezRWDOst8RaICiKTk0xvbCnbbaaXs",
  authDomain: "auth-moha-milon-19c5e.firebaseapp.com",
  projectId: "auth-moha-milon-19c5e",
  storageBucket: "auth-moha-milon-19c5e.firebasestorage.app",
  messagingSenderId: "399224684728",
  appId: "1:399224684728:web:6a977f8499611dfbe9344d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);