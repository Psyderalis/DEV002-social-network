// import { pantallaInicio } from "./logIn.js";
//import { signup } from '../app/signupForm.js'; **
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

// Pantalla 2 - Registrate --------------------------------
  export const Register = () => {
    const div = document.createElement("div");
    div.className = "pantalla";
    div.id = "inicio";
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
            <button type="submit" class="signUpBtn" id="signUpBtn">Crear cuenta</button>
        </form>
        <section class="invitacion" id="invitacion">
            <p class="pregunta" id="preguntas">¿Ya tienes una cuenta?</p>
            <div class="iniciar" id="iniciar">Inicia Sesión</div>
        </section>
    </section>
  `;
  div.innerHTML = pantallaRegistro;

  // ir a pantalla home e iniciar sesión
  const signUpBtn = div.querySelector("#signUpBtn");
  const iniciar = div.querySelector("#iniciar");

  signUpBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    onNavigate("/bienvenida");
   });
   iniciar.addEventListener("click", () =>{
    onNavigate("/");
   });

  //signup();

  return div;
};
