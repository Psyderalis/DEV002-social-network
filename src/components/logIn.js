/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
// import {  } from '../app/firebase.js';

//import { googleLog } from '../app/googleLogin.js';
import { login, googleLog } from '../app/signin.js';
import { onNavigate } from '../main.js';
// import { loginCheck } from '../app/loginCheck.js'

import { onAuthStateChanged, auth } from '../app/firebase.js';
import './home.js';
// //Pantalla 1 - Inicio de sesión---------------------------

export const Login = () => {
  const div = document.createElement('div');
  div.className = 'pantalla';
  div.id = 'inicio';
  const pantallaInicio = `
    <section class="presentacion" id="presentacion">
      <img  class="logo" id="">
      <div class="nombre" id="">PETSBOOK</div>
      <p class="frase" id="frase">Un mundo para tu mascota</p>
    </section>
    <section class= 'pantallaCompu'>
      <form class="login" id="login">
        <label for="loginEmail" class="loginEmail" >*Ingrese un correo existente.</label>
        <input type="email" class="datosLogin" id="loginEmail" placeholder="Correo*" value="">
        <label for="loginPassword" class="loginPassword">*Ingrese una contraseña mayor a 5 dígitos.</label>
        <input type="password" class="datosLogin" id="loginPassword" placeholder="Contraseña*" value="">
        <button type="submit" class="loginBtn" id="loginBtn">Iniciar sesión</button>
      </form>
      <div class='google'> Ingresa con 
        <img src='./Imagenes/LogoGoogle.png' id="loginGoogle">
      </div>
      <section class="invitacion" id="invitacion">
        <p class="pregunta" id="preguntas">¿No tienes una cuenta?
        <span class="registrate" id="registrate"  >Regístrate</span></p>
      </section>
    </section>
`;
  div.innerHTML = pantallaInicio;
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
