// eslint-disable-next-line import/no-cycle
import { mainApp } from '../main.js';
// Pantalla 3 - Bienvenida--------------------------------

export default () => {
  mainApp.innerHTML = '';
  const Bienvenida = `<section class="pantalla" id="bienvenida">
<section class="presentacion" id="">
  <p class="frase" id="">¡Hola NOMBRE, tu cuenta ha sido creada con exito!</p>
  <div class="logo" id=""></div>
  <p class="frase" id="">Recuerda que...</p>
  <p class="frase" id="">Un mundo mejor es aquel donde
    todos los animales tienen amigos
    con los que compartir sus
    aventuras.</p>
</section>

<section class="comenzar" id="">
  <p class="frase" id="frase">¡Lista para ser parte de Petsbook!</p>
  <button>Comenzar</button>
</section>
</section>`;

  mainApp.innerHTML = Bienvenida;

  // //ir a pantalla home
  // mainApp.querySelector('.registrate').addEventListener('click', ()=>{
  //    onNavigate('/registro')});

  return mainApp;
};
