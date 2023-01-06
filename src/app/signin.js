/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
// import { async } from "regenerator-runtime"
import { auth } from './firebase.js';
// import { } from './main.js'

// const signin = document.querySelector('#loginBtn')
// console.log('holitas')
export const login = () => {
  window.addEventListener('load', function () {
  const signin = document.querySelector('#login');

  signin.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('si lo lee');
    const email = signin['loginEmail'].value;
    const password = signin['loginPassword'].value;
    console.log(email);

    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password);
      console.log(credentials);
      console.log('También hace el try :)');
    } catch (error) {
      console.log(error);
    }
  });
})
};
