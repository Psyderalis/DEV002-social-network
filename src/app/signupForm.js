/* eslint-disable import/no-unresolved */
/* eslint-disable no-alert */
/* eslint-disable no-console */
// import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth, createUserWithEmailAndPassword } from './firebase.js';

console.log('algooooo');
export async function signup(email, password) {
  console.log('funciona SignUp');
  try {
    await createUserWithEmailAndPassword(auth, email, password);
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
}
