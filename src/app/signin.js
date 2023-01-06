/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
// import { async } from "regenerator-runtime"

import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from './firebase.js';

export const login = async (email, password) => {
    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password);
      console.log(credentials);
      console.log('También hace el try :)');
    } catch (error) {
      console.log(error);
    }
  };
