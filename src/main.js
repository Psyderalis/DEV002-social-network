// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

const inicioTemplate = `
<!-- PANTALLA INICIO -->
  <section class="pantalla" id="inicio">
    <section class="presentacion" id="presentacion">
      <div class="logo" id=""></div>
      <p class="frase" id="frase">Un mundo para tu mascota</p>
    </section>

    <form class="login" id="login">
      <label for="loginEmail">*Ingrese un correo existente.</label>
      <input type="email" class="datosLogin" id="loginEmail" placeholder="Correo*" value="">
      <label for="loginPassword">*Ingrese una contraseña mayor a 5 dígitos.</label>
      <input type="password" class="datosLogin" id="loginPassword" placeholder="Contraseña*" value="">
      <button type="submit" class="loginBtn" id="loginBtn">Iniciar sesión</button>
    </form>
    <div class="loginGoogle"> Ingresa con Google

    </div>
    <section class="invitacion" id="invitacion">
      <p class="pregunta" id="preguntas">¿No tienes una cuenta?</p>
      <div class="" id="signUpOption">Regístrate</div>
    </section>
  </section>
`;
const registroTemplate = `
<!-- PANTALLA REGISTRO -->
  <section class="pantalla" id="registro">
    <section class="presentacion" id="">
      <div class="logo" id=""></div>
      <p class="frase" id="frase">Un mundo para tu mascota</p>
    </section>

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
      <div class="" id="signInOption">Inicia Sesión</div>
    </section>
  </section>
`;
const bienvenidaTemplate = `
<!-- PANTALLA BIENVENIDA -->
  <section class="pantalla" id="bienvenida">
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
  </section>
`;

const loginBtn = document.getElementById("loginBtn");
const signUpOption = document.getElementById("signUpOption");
const signInOption = document.getElementById("signInOption");
const signUpBtn = document.getElementById("signUpBtn");

//rutas y contenido de cada una
const routes = {
  '/': inicioTemplate,
  '/registro': registroTemplate,
  '/bienvenida': bienvenidaTemplate,
  '/home': "Home",

};

//obtener la vista según la ruta actual
function getCurrentView() {
  const path = window.location.pathname;
  return routes[path] || '404';
}

//imprimir la vista de la ruta actual en html (div #app)
function showCurrentView() {
  const view = getCurrentView();
  document.getElementById('app').innerHTML = view;
}

//con el evento popstate (cambio de ruta url) llamar a la función anterior
window.addEventListener('popstate', showCurrentView);
showCurrentView();

loginBtn.addEventListener("submit", e => {
  e.preventDefault();
  history.pushState(null, "Home", "/home");
});
signUpOption.addEventListener("click", e => {
  history.pushState(null, "Registro", "/registro");
});
signInOption.addEventListener("click", e => {
  history.pushState(null, "Inicio", "/");
});
signUpBtn.addEventListener("submit", e => {
  e.preventDefault();
  history.pushState(null, "Bienvenida", "/bienvenida");
});



/*
document.getElementById('nav').addEventListener('click', function(event) {
  const target = event.target;
  if (target.tagName === 'A') {
    event.preventDefault();
    window.history.pushState(null, null, target.href);
    showCurrentView();
  }
});





//_______________________________________________
/*

//BOTONES Y NAVEGACIÓN POR RUTA
const loginBtn = document.getElementById("loginBtn");
const signUpOption = document.getElementById("signUpOption");
const backBtn = document.getElementById("backBtn");
const signUpBtn = document.getElementById("signUpBtn");

loginBtn.addEventListener("click", e => {
    history.pushState({}, "Home", "/home");
});
signUpOption.addEventListener("click", e => {
    history.pushState({}, "Sign Up", "/sign-up");
});
backBtn.addEventListener("click", e => {
    history.back();
});
signUpBtn.addEventListener("click", e => {
    history.pushState({}, "Registro exitoso", "/registro-exitoso");
});

// Define un objeto con las rutas de tu aplicación y las vistas correspondientes
const routes = {
  '/': 'signin',
  '/signup': 'signup',
  '/home': 'home',
  '/bienvenida': 'bienvenida'
};

// Obtiene la vista actual a partir de la URL del navegador
function getCurrentView() {
  const path = window.location.pathname;
  return routes[path] || '404';
}

// Muestra la vista actual en la página
function showCurrentView() {
  const view = getCurrentView();
  document.getElementById('app').innerHTML = view;
}

// Escucha los cambios en la URL del navegador y actualiza la vista en consecuencia
window.addEventListener('popstate', showCurrentView);

// Muestra la vista inicial cuando la página se carga por primera vez
showCurrentView();


//FUNCIONES PARA UNA SPA BÁSICA
/*
function navigate(path) {
  window.history.pushState({}, '', path);
}

async function loadRoute(path) {
  const response = await fetch(path);
  const html = await response.text();
  document.getElementById('app').innerHTML = html;
}

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    navigate(link.getAttribute('href'));
    loadRoute(link.getAttribute('href'));
  });
});

window.addEventListener('popstate', () => {
  loadRoute(window.location.pathname);
});

*/