import { onNavigate } from "../main.js";

export const Welcome = () => {
    const div = document.createElement("div");
    div.className = "pantalla";
    div.id = "inicio";
    const Bienvenida = `<section class="pantalla" id="bienvenida">
<section class="presentacion" id="">
  <p class="frase" id="">¡Hola {credentials.displayName}, tu cuenta ha sido creada con exito!</p>
  <div class="logo" id=""></div>
  <p class="frase" id="">Recuerda que...</p>
  <p class="frase" id="">Un mundo mejor es aquel donde
    todos los animales tienen amigos
    con los que compartir sus
    aventuras.</p>
</section>
<section class="comenzar" id="">
  <p class="frase" id="frase">¡Lista para ser parte de Petsbook!</p>
  <button id="comenzarBtn">Comenzar</button>
</section>
</section>`;
div.innerHTML = Bienvenida;
const comenzarBtn = div.querySelector("#comenzarBtn");
comenzarBtn.addEventListener("click", () =>{
  onNavigate("/home");
 });
    return div;
};