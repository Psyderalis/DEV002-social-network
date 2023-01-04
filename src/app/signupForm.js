/* eslint-disable import/no-unresolved */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from './firebase.js';

export const signup = () => {
  const signupForm = document.querySelector('#registro');
  console.log('funciona signup');
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // const signupName = signupForm.signUpName.value
    const signupEmail = signupForm.signUpEmail.value;
    const signupPassword = signupForm.signUpPassword.value;
    console.log(signupEmail, signupPassword);

    try {
      // eslint-disable-next-line max-len
      const userCredential = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
      console.log(userCredential);
      // .then((res) => console.log(res))
      // .catch((err) => console.log(err))
    } catch (error) {
      console.log(error.message);
      console.log(error.code);

      if (error.code === 'auth/email-already-in-use') {
        alert('Este correo ya está en uso');
      } else if (error.code === 'auth/weak-password') {
        alert('Tu contraseña es muy débil');
      } else if (error.code === 'auth/invalid-email') {
        alert('Este correo es inválido');
      }
    }
  });
};
