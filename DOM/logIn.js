/* eslint-disable one-var-declaration-per-line */
/* eslint-disable one-var */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
// import {  } from '../app/firebase.js';

import {
  onAuthStateChanged, auth, login, googleLog,
} from '../app/auth.js';
import { onNavigate } from '../main.js';

import './home.js';
import { templateInicio } from '../Templates/logIn.js';
// //Pantalla 1 - Inicio de sesión---------------------------

export const Login = () => {
  const div = document.createElement('div');
  div.className = 'Inicio';
  div.id = 'inicio';
  // const pantallaInicio = ;
  div.innerHTML = templateInicio;
  // ir a pantalla registrar y home

  const loginBtn = div.querySelector('#loginBtn');
  const signinForm = div.querySelector('#login');
  const botonGoogle = div.querySelector('#loginGoogle');
  const registrate = div.querySelector('#registrate');
  // const nombre = div.querySelector("#name-user").value;

  signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signinForm.loginEmail.value;
    const password = signinForm.loginPassword.value;
    let user, displayName, uid, emailUser;

    login(email, password)
      .then((credential) => {
        // if (user1 !== null) {
        //   user1.providerData.forEach((profile) => {
        //     console.log(`Sign-in provider: ${profile.providerId}`);
        //     console.log(`  Provider-specific UID: ${profile.uid}`);
        //     console.log(`  Name: ${profile.displayName}`);
        //     console.log(`  Email: ${profile.email}`);
        //     console.log(`  Photo URL: ${profile.photoURL}`);
        //   });
        // }
        user = credential.user;
        displayName = (user.displayName);
        uid = (user.uid);
        emailUser = (user.email);
        console.log(credential);
        console.log(displayName, emailUser, uid);
        // console.log(emailUser, password);
        // if (user1 !== null) {
        //   // The user object has basic properties such as display name, email, etc.
        //   const displayName1 = user.displayName;
        //   const email1 = user.email;
        //   const photoURL1 = user.photoURL;
        //   const emailVerified1 = user.emailVerified;
        //   // The user's ID, unique to the Firebase project. Do NOT use
        //   // this value to authenticate with your backend server, if
        //   // you have one. Use User.getToken() instead.
        //   const uid1 = user.uid;
        //   console.log(displayName1, email1, photoURL1, emailVerified1, uid1);
        // }
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.code);

        if (error.code === 'auth/weak-password') {
          alert('Tu contraseña es muy débil');
        } else if (error.code === 'auth/invalid-email') {
          alert('Este correo es inválido');
        }
        // Podríamos hacer como último else if que no lleve a home si no esta registrado
        //  o iniciado sesión
      });
    // onNavigate("/home");
  });

  botonGoogle.addEventListener('click', () => {
    googleLog()
      .then((user) => {
        // Aquí llevar al usuario a /home
        const googleUser = (user.user.displayName);
        const googleEmail = (user.user.email);
        const googleUid = (user.user.uid);
        const googlePhotoURL = (user.user.photoURL);
        console.log(googleEmail, googlePhotoURL, googleUid, googleUser);
      });
  });

  registrate.addEventListener('click', () => {
    onNavigate('/registro');
  });

  loginBtn.addEventListener('click', () => {
    onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          onNavigate('/home');
        }
      } catch (error) {
        console.log(error);
      }
    });
  });

  return div;
};
