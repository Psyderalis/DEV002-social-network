/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
// import { async } from "regenerator-runtime"

// import {  } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { signInWithEmailAndPassword, auth } from './config.js';

export const login = async (email, password) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(credentials);
    console.log('También hace el try :)');
  } catch (error) {
    console.log(error);
  }
};

// const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

// login(email.value, password.value)
//             .then((credential) => {
//                 user = credential.user;
//                 displayName = (user.displayName);
//                 uid = (user.id);
//                 emailUser = (user.email);
//                 console.log(displayName, emailUser, uid)
//             })
//             .catch((error) => {
//                 console.log(error.message);
//                 console.log(error.code);

//                 if (error.code === 'auth/weak-password') {
//                     alert('Tu contraseña es muy débil');
//                 } else if (error.code === 'auth/invalid-email') {
//                     alert('Este correo es inválido');
//                 }
// Podríamos hacer como último else if que no lleve a login si no esta registrado o iniciado sesión
//             });

//     });
