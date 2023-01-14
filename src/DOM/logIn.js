/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
// import {  } from '../app/firebase.js';
import { googleLog } from '../app/googleLogin.js';
import { login } from '../app/signin.js';
import { onNavigate } from '../main.js';
// import { loginCheck } from '../app/loginCheck.js'

import { onAuthStateChanged, auth } from '../app/config.js';
import './home.js';
import { templateInicio } from '../Templates/logIn.js';
// //Pantalla 1 - Inicio de sesión---------------------------

export const Login = () => {
  const div = document.createElement('div');
  div.className = 'pantalla';
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
    console.log(email, password);
    login(email, password);
    //   onNavigate("/home");
  });

  botonGoogle.addEventListener('click', () => {
    googleLog();
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
