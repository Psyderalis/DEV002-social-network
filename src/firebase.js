// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDb3BKSxjZM5TXlf_Ua8n8PN0oPhlYLmao',
  authDomain: 'laboratoria---social-network.firebaseapp.com',
  projectId: 'laboratoria---social-network',
  storageBucket: 'laboratoria---social-network.appspot.com',
  messagingSenderId: '382226472203',
  appId: '1:382226472203:web:ecfd0e73e33e824e4f960e',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
