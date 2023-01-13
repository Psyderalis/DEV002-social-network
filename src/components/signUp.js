/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
// import { signup } from '../app/signupForm.js'; **

// import {  } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { onNavigate } from '../main.js';
import { signup } from '../app/signupForm.js';
import { auth, onAuthStateChanged } from '../app/firebase.js';

// Pantalla 2 - Registrate --------------------------------
export const Register = () => {
  const div = document.createElement('div');
  div.className = 'pantalla';
  div.id = 'inicio';
  const pantallaRegistro = `
    <section class="presentacion" id="">
        <div class="logo" id=""></div>
        <div class="nombre" id="">PETSBOOK</div>
        <p class="frase" id="frase">Un mundo para tu mascota</p>
    </section>
    <section class= 'pantallaCompu'>
        <form class="registro" id="registro">
            <label for="signUpName">*Ingrese el nombre de su mascota.</label>
            <input type="text" class="datosRegistro" id="signUpName" placeholder="Nombre*" value="">
            <label for="signUpEmail">*Ingrese un correo existente.</label>
            <input type="email" class="datosRegistro" id="signUpEmail" placeholder="Correo*" value="">
            <label for="signUpPassword">*Ingrese una contraseña mayor a 5 dígitos.</label>
            <input type="password" class="datosRegistro" id="signUpPassword" placeholder="Contraseña*" value="">
            <button type="" class="signUpBtn" id="signUpBtn">Crear cuenta</button>
        </form>
        <section class="invitacion" id="invitacion">
            <p class="pregunta" id="preguntas">¿Ya tienes una cuenta?</p>
            <div class="iniciar" id="iniciar">Inicia Sesión</div>
        </section>
    </section>
  `;
  div.innerHTML = pantallaRegistro;
  const signUpBtn = div.querySelector('#signUpBtn');
  const iniciar = div.querySelector('#iniciar');

  iniciar.addEventListener('click', () => {
    onNavigate('/');
  });

  signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const signupForm = div.querySelector('#registro');

    // // signupForm.addEventListener("submit", (e) => {
    //   e.preventDefault()
    const email = signupForm.signUpEmail.value;
    const password = signupForm.signUpPassword.value;
    console.log(email, password);
    signup(email, password);

    // });
    console.log(':(');

    localStorage.clear();

    // obtengo el valor del input
    const valor = div.querySelector('#signUpName').value;
    console.log(valor);
    // guardo el valor del nombre en el local storage con la clave 'épimoo' para que no se pierda
    localStorage.setItem('Nombre', valor);

    onAuthStateChanged(auth, async (user) => {
      console.log('ónauth');
      try {
        console.log('try');
        if (user) {
          onNavigate('/bienvenida');
          console.log('if');
        }
      } catch (error) {
        console.log(error);
        console.log('catch');
      }
    });
  });

  return div;
};
