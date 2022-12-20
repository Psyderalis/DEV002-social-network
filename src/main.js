// Este es el punto de entrada de tu aplicacion

/*import { myFunction } from './lib/index.js';

myFunction();
*/

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