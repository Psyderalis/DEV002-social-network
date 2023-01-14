/* eslint-disable import/no-unresolved */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAxTIdXRfXDybuXxhquYjdQ8BRa1SqyaMM',
  authDomain: 'social-network-app-7c3a3.firebaseapp.com',
  projectId: 'social-network-app-7c3a3',
  storageBucket: 'social-network-app-7c3a3.appspot.com',
  messagingSenderId: '91410033495',
  appId: '1:91410033495:web:60d293e50eb7c8596a6c12',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google
const providerGoogle = new GoogleAuthProvider(app);

// firestore
const conFirestore = getFirestore();

// para Firebase
export {
  app,
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  providerGoogle,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
};
// para Firestore
export {
  conFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
};
