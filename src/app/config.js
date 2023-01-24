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
  arrayUnion,
  arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAjyGpBnFkNz9XI9lv5Y8KoXzMGxZjPh-c',
  authDomain: 'petsbook-m.firebaseapp.com',
  projectId: 'petsbook-m',
  storageBucket: 'petsbook-m.appspot.com',
  messagingSenderId: '27668527572',
  appId: '1:27668527572:web:dea1d8d03f6e422236be41',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google
const providerGoogle = new GoogleAuthProvider(app);

// firestore
const conFirestore = getFirestore();

// para Firebase (auth.js)
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
// para Firestore (firestore.js)
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
  arrayUnion,
  arrayRemove,
};
