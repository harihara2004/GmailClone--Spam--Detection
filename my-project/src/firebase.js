// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABgqDBnLsbegrFolzp6mB2A1Yfu4hZrE4",
  authDomain: "spam-f50aa.firebaseapp.com",
  projectId: "spam-f50aa",
  storageBucket: "spam-f50aa.firebasestorage.app",
  messagingSenderId: "913752230203",
  appId: "1:913752230203:web:abba306453a4205a8b4f1e",
  measurementId: "G-PW126C95R9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
export const db=getFirestore(app);
export const provider =new GoogleAuthProvider();


