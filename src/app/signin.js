/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
// import { async } from "regenerator-runtime"

// import {  } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, auth } from './firebase.js';

export const login = async (email, password) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(credentials);
    console.log('También hace el try :)');
  } catch (error) {
    console.log(error);
  }
};

//-----------Google Login---------------------
export const googleLog = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);
  } catch (error) {
    console.log(error.code);
  }
};

