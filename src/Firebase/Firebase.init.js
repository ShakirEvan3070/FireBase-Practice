// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcoRnVHXjgzIGTAC1r5wj2OD08l_w8Edk",
  authDomain: "simple-firebase-c6de3.firebaseapp.com",
  projectId: "simple-firebase-c6de3",
  storageBucket: "simple-firebase-c6de3.firebasestorage.app",
  messagingSenderId: "412858022117",
  appId: "1:412858022117:web:ece97c2ffb77abd5b47c0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;