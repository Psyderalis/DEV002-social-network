/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable keyword-spacing */
import { GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

import { auth } from './firebase.js';

export const googleLog = () => {
  const botonGoogle = document.getElementById('loginGoogle');
  botonGoogle.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    try{
      const credentials = await signInWithPopup(auth, provider);
      console.log(credentials);
    }catch (error) {
      console.log(error.code);
    }
  });
};
