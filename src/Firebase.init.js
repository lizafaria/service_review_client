// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5zTq_OJHIhB7OxgZyIOu1QaIBh_0XBpc",
  authDomain: "assignment-11-final-cc182.firebaseapp.com",
  projectId: "assignment-11-final-cc182",
  storageBucket: "assignment-11-final-cc182.appspot.com",
  messagingSenderId: "87120611263",
  appId: "1:87120611263:web:293881dfb7b7259c3ec30a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
