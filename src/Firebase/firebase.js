// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-oJ4sqCjC5e2KIxL_TGEgaiGLtLE5WKQ",
  authDomain: "e-commerce-fc17e.firebaseapp.com",
  projectId: "e-commerce-fc17e",
  storageBucket: "e-commerce-fc17e.firebasestorage.app",
  messagingSenderId: "149979501736",
  appId: "1:149979501736:web:dde8ed597897dfdbcf9e9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
