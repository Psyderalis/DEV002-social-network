/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
//   signInWithEmailAndPassword,
// } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   doc,
//   getDoc,
//   updateDoc,
//   onSnapshot,
// } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
// import {  };
// Your web app's Firebase configuration
//  const firebaseConfig = {
//   apiKey: "AIzaSyAxTIdXRfXDybuXxhquYjdQ8BRa1SqyaMM",
//   authDomain: "social-network-app-7c3a3.firebaseapp.com",
//   projectId: "social-network-app-7c3a3",
//   storageBucket: "social-network-app-7c3a3.appspot.com",
//   messagingSenderId: "91410033495",
//   appId: "1:91410033495:web:60d293e50eb7c8596a6c12",
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// SignUpForm
// export { createUserWithEmailAndPassword };
// GoogleLogin
// export { GoogleAuthProvider, signInWithPopup };
// logOut
// export { signOut };
// signin
// export { signInWithEmailAndPassword };
// firestore
// export const conFirestore = getFirestore();
import {
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
} from './config.js';

export const saveTask = (description) => {
  // console.log(description);
  addDoc(collection(conFirestore, 'tasks'), {
    description,
    likes: [],
  });
};

// export const getTasks = () => getDocs(collection(conFirestore, 'tasks')); // no se utiliza

export const onGetTasks = (funcion) => onSnapshot(collection(conFirestore, 'tasks'), funcion);

export const deleteTask = (id) => deleteDoc(doc(conFirestore, 'tasks', id));

export const getTask = (id) => getDoc(doc(conFirestore, 'tasks', id));

export const updateTask = (id, nuevosCampos) => {
  updateDoc(doc(conFirestore, 'tasks', id), nuevosCampos);
};

// -----LIKES----------------------

export const giveLike = (id, nuevoLike) => {
  updateDoc(doc(conFirestore, 'tasks', id), {
    likes:
      arrayUnion(
        nuevoLike,
      ),
  });
  // .then(() => console.log("+1 like"))
  // .catch((error) => console.error("Error", error));
};

export const disLike = (id, viejoLike) => {
  updateDoc(doc(conFirestore, 'tasks', id), {
    likes:
      arrayRemove(
        viejoLike,
      ),
  });
  // .then(() => console.log("-1 like"))
  // .catch((error) => console.error("Error", error));
};

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

// export const giveLike = (uid) => {
//   addDoc(collection(conFirestore, "likes"), {
//     userId: uid,
//     like: true,
//   })
// };

// observador
// export { onAuthStateChanged };
