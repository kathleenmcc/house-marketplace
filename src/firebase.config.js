import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoc_r5rtYj3Aa0BNQjM_U4e8ZeifaLCbo",
  authDomain: "house-marketplace-app-ef171.firebaseapp.com",
  projectId: "house-marketplace-app-ef171",
  storageBucket: "house-marketplace-app-ef171.appspot.com",
  messagingSenderId: "563276599278",
  appId: "1:563276599278:web:269f1980171b4af3a788ff"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()