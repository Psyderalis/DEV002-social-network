//import {credentials} from "../app/googleLogin.js" 
import { onNavigate } from "../main.js";
import "./logIn.js";
import "./signUp.js"

// Pantalla 3 - Bienvenida--------------------------------
export const Welcome = () => {
  const div = document.createElement("div");
  div.className = "pantalla";
  div.id = "bienvenida";
  const Bienvenida = `
    <section class="presentacion" id="">
      <p class="nombre-usuario" id="nombre-usuario"></p>
      // ¡Hola Manchitas, tu cuenta ha sido creada con exito!
      <div class="logo" id=""></div>
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
  
  //obtengo el valor del local storage
  let nombreObtenido = localStorage.getItem('épimoo');

  let cc = div.querySelector("#nombre-usuario");
  cc.innerHTML = '¡Hola ' + nombreObtenido + ', tu cuenta ha sido creada con exito!';
 

  const comenzarBtn = div.querySelector("#comenzarBtn");
  comenzarBtn.addEventListener("click", () => {
    onNavigate("/home");
  });
 div.innerHTML = Bienvenida;
  

  return div;

};
