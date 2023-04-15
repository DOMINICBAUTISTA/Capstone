// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwEX7CCJoEClJ3FTZ3KxVMU6GiAlBblz8",
  authDomain: "react-authenticator-d0fa0.firebaseapp.com",
  projectId: "react-authenticator-d0fa0",
  storageBucket: "react-authenticator-d0fa0.appspot.com",
  messagingSenderId: "119915869316",
  appId: "1:119915869316:web:ca7503cdbb0f3864bd3ed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);