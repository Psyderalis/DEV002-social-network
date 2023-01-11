//import {credentials} from "../app/googleLogin.js" 
import { onNavigate } from "../main.js";

// Pantalla 3 - Bienvenida--------------------------------
export const Welcome = () => {
  const div = document.createElement("div");
  div.className = "pantalla";
  div.id = "bienvenida";
  const Bienvenida = `
    <section class="presentacion" id="">
      <p >¡Hola NOMBRE, tu cuenta ha sido creada con exito!</p>
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
  div.innerHTML = Bienvenida;
  const comenzarBtn = div.querySelector("#comenzarBtn");
  comenzarBtn.addEventListener("click", () => {
    onNavigate("/home");
  });
  return div;
};
