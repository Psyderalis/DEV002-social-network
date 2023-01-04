/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
// import { async } from "regenerator-runtime"
import { auth } from './firebase.js';
// import { } from './main.js'

// const signin = document.querySelector('#loginBtn')
// console.log('holitas')
export const login = () => {
  const signin = document.querySelector('#login');

  signin.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('si lo lee');
    const email = signin['signin-email'].value;
    const password = signin['signin-password'].value;
    console.log(email);

    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password);
      console.log(credentials);
      console.log('También hace el try :)');
    } catch (error) {
      console.log(error);
    }
  });
};
