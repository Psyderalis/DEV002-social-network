/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
// import {credentials} from "../app/googleLogin.js"
// import {  } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { onNavigate } from '../main.js';
import { auth, onAuthStateChanged } from '../app/firebase.js';

// Pantalla 3 - Bienvenida--------------------------------
export const Welcome = () => {
  onAuthStateChanged(auth, async (user) => {
    try {
      if (!user) {
        onNavigate('/registro');
      }
    } catch (error) {
      console.log(error);
    }
  });

  const div = document.createElement('div');
  div.className = 'pantalla';
  div.id = 'bienvenida';
  const Bienvenida = `
    <section class="presentacion" id="">
      <p id="hola-bienvenida"></p>
      <p >Recuerda que...</p>
      <p >Un mundo mejor es aquel donde
          todos los animales tienen amigos
          con los que compartir sus
          aventuras.</p>
    </section>
    <section class="comenzar" id="">
      <p class="frase" id="frase">¡Lista para ser parte de Petsbook!</p>
      <button class="comenzarBtn" id="comenzarBtn">Comenzar</button>
    </section>
  `;

  div.innerHTML = Bienvenida;

  const holaBienv = div.querySelector('#hola-bienvenida');
  console.log(holaBienv);
  // obtengo el valor del local storage
  const nombreObtenido = localStorage.getItem('Nombre');

  holaBienv.innerHTML = `¡Hola ${nombreObtenido}, tu cuenta ha sido creada con exito!`;

  const comenzarBtn = div.querySelector('#comenzarBtn');
  comenzarBtn.addEventListener('click', () => {
    onNavigate('/home');
  });
  return div;
};
