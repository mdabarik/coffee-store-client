// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBszwSyPGuoOfkAJ9dePjz11sQbRW2FnVU",
  authDomain: "coffee-store-21dc5.firebaseapp.com",
  projectId: "coffee-store-21dc5",
  storageBucket: "coffee-store-21dc5.appspot.com",
  messagingSenderId: "277009313390",
  appId: "1:277009313390:web:353b1f92c7f8d07815807f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;