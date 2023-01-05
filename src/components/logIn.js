/* eslint-disable indent */
// import { googleLog } from '../app/googleLogin.js'; **
// // eslint-disable-next-line import/no-cycle
 import { onNavigate } from '../main.js'; 
// import { login } from '../app/signin.js'; **
// import { pantallaRegistro } from "./signUp.js";

// Para elementos referidos a iniciar sesión
// //Pantalla 1 - Inicio de sesión---------------------------


export const Login = () => {
  const div = document.createElement("div");
  div.className = "pantalla";
  div.id = "inicio";
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
const loginBtn = div.querySelector("#loginBtn");
const registrate = div.querySelector("#registrate");
console.log(registrate)

loginBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  onNavigate("/home");
 });
registrate.addEventListener("click", () =>{
     onNavigate("/registro");
    });

//  googleLog();
//  login();
  return div;
}; 


//________________________
//  export default () => {
//   mainApp.innerHTML = '';
//   const pantallaInicio = `<section class="pantalla" id="inicio">

//   <section class="presentacion" id="presentacion">
//     <img  class="logo" id="">
//     <div class="nombre" id="">PETSBOOK</div>
//     <p class="frase" id="frase">Un mundo para tu mascota</p>
//   </section>

//   <section class= 'pantallaCompu'>
//     <form class="login" id="login">
//       <label for="loginEmail" class="loginEmail" >*Ingrese un correo existente.</label>
//       <input type="email" class="datosLogin" id="loginEmail" placeholder="Correo*" value="">
//       <label for="loginPassword" class="loginPassword">*Ingrese una contraseña mayor a 5 dígitos.</label>
//       <input type="password" class="datosLogin" id="loginPassword" placeholder="Contraseña*" value="">
//       <button type="submit" class="loginBtn" id="loginBtn">Iniciar sesión</button>
//     </form>

//     <div class='google'> Ingresa con 
//     <img src='./Imagenes/LogoGoogle.png' id="loginGoogle">
//     </div>

//     <section class="invitacion" id="invitacion">
//       <p class="pregunta" id="preguntas">¿No tienes una cuenta?
//       <span class="registrate" id=""  >Regístrate</span></p>
//     </section>
//   </section>

// </section>`;

// mainApp.innerHTML = pantallaInicio;

// // ir a pantalla registrar
// mainApp.querySelector('.registrate').addEventListener('click', () => {
//    onNavigate('/registro');
// });

// googleLog();
// login();
// return mainApp;
// };
// __________________
// //  ir a pantalla de home
// export const goToHome = () => {
//   // eslint-disable-next-line no-import-assign
//  // mainApp = '';
//   mainApp.querySelector('.loginBtn').addEventListener('click', () => {
//   onNavigate('/home');

// return mainApp;
// });
// };
