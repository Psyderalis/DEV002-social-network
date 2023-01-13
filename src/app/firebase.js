/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
// import {  };
// Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyAxTIdXRfXDybuXxhquYjdQ8BRa1SqyaMM",
  authDomain: "social-network-app-7c3a3.firebaseapp.com",
  projectId: "social-network-app-7c3a3",
  storageBucket: "social-network-app-7c3a3.appspot.com",
  messagingSenderId: "91410033495",
  appId: "1:91410033495:web:60d293e50eb7c8596a6c12",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// SignUpForm
export { createUserWithEmailAndPassword };
// GoogleLogin
export { GoogleAuthProvider, signInWithPopup };
// logOut
export { signOut };
// signin
export { signInWithEmailAndPassword };
// firestore
export const conFirestore = getFirestore();

export const saveTask = (description) => {
    console.log(description);
    addDoc(collection(conFirestore, 'tasks'), { description });
};

export const getTasks = () => getDocs(collection(conFirestore, 'tasks'));

export const onGetTasks = (funcion) => onSnapshot(collection(conFirestore, 'tasks'), funcion);

export const deleteTask = (id) => deleteDoc(doc(conFirestore, 'tasks', id));

export const getTask = (id) => getDoc(doc(conFirestore, 'tasks', id));

export const updateTask = (id, nuevosCampos) => {
    updateDoc(doc(conFirestore, 'tasks', id), nuevosCampos);
};

// export const userState = (user) => onAuthStateChanged(auth, (user));

// observador
export { onAuthStateChanged };
