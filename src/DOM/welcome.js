/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
// import {credentials} from "../app/googleLogin.js"
// import {  } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { onNavigate } from '../main.js';
import { auth, onAuthStateChanged } from '../app/config.js';
import { templateWelcome } from '../Templates/welcome.js';

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
  div.className = 'Inicio';
  div.id = 'bienvenida';
  // const Bienvenida = ;

  div.innerHTML = templateWelcome;

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
