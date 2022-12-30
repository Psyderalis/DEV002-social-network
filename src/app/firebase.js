// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

// Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyAxTIdXRfXDybuXxhquYjdQ8BRa1SqyaMM",
  authDomain: "social-network-app-7c3a3.firebaseapp.com",
  projectId: "social-network-app-7c3a3",
  storageBucket: "social-network-app-7c3a3.appspot.com",
  messagingSenderId: "91410033495",
  appId: "1:91410033495:web:60d293e50eb7c8596a6c12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

