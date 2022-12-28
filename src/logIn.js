import { pantallaRegistro } from "./signUp.js";
import { mainApp } from "./elementos.js";
// Para elementos referidos a iniciar sesión

export const pantallaInicio = ()=> {

//Pantalla 1 - Inicio de sesión---------------------------

//limpiar el html
mainApp.innerHTML='';
//guardar información en el elemento
mainApp.innerHTML=
`<section class="pantalla" id="inicio">

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
    <p class="pregunta" id="preguntas">¿No tienes una cuenta? <span class="registrate" id="">Regístrate</span></p>
  </section>
  </section>

</section>`

//ir a pantalla registrar
 mainApp.querySelector('.registrate').addEventListener('click', ()=>{
   pantallaRegistro()});

  return mainApp;
}
