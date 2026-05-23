// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmdvnQKDgNrzW2d5FPPagYe7VTMAunWus",
  authDomain: "saralaedu-ac00c.firebaseapp.com",
  projectId: "saralaedu-ac00c",
  storageBucket: "saralaedu-ac00c.firebasestorage.app",
  messagingSenderId: "11762129423",
  appId: "1:11762129423:web:8028b147746589b05f217a",
  measurementId: "G-0TZYH93D2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
