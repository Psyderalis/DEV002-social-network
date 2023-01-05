//import { onNavigate } from "../main.js";

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
      <span class="registrate" id=""  >Regístrate</span></p>
    </section>
  </section>
  `;
  div.innerHTML = pantallaInicio;
    // const title = document.createElement("h2");
    // const button = document.createElement("button");
    // const buttonRegister = document.createElement("button");
    // const inputEmail = document.createElement("input");
    // const inputPass = document.createElement("input");


    // button.textContent = "Entrar";
    // buttonRegister.textContent = "Regístrate"
    // title.textContent = "Inicia Sesión"

    // button.addEventListener("click", () =>{
    //     onNavigate("/home");
    // });
    // buttonRegister.addEventListener("click", () =>{
    //     onNavigate("/register");
    // });
   
    return div;
}; 
