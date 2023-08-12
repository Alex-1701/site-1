import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-DYYzVmITckyadKQdiIJrRpJDZbhYKgE",
  authDomain: "site-53973.firebaseapp.com",
  databaseURL: "https://site-53973-default-rtdb.firebaseio.com",
  projectId: "site-53973",
  storageBucket: "site-53973.appspot.com",
  messagingSenderId: "400163482552",
  appId: "1:400163482552:web:5f7b84c8ca5d1cfd0afd4d",
  measurementId: "G-7WLPEHG7LB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
