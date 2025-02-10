import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// This is like a api key to communicate with firebase database

const firebaseConfig = {
  apiKey: "AIzaSyD1-Gss7NjlmFhnI4th9s5yY3ZwgMl3210",
  authDomain: "employee-management-e40e6.firebaseapp.com",
  projectId: "employee-management-e40e6",
  storageBucket: "employee-management-e40e6.firebasestorage.app",
  messagingSenderId: "188493804903",
  appId: "1:188493804903:web:c60a8b1a1ee02fcf5c2bc2",
  measurementId: "G-KMR9SX1MTC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//we are connecting our application to database
export const db=getFirestore(app);