// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

const productsTemplate = 'this products';
const cartTemplate = 'this cart';
const checkoutTemplate = 'this checkout';

//rutas y contenido de cada una
const routes = {
  '/': 'home',
  '/products': productsTemplate,
  '/cart': cartTemplate,
  '/checkout': checkoutTemplate
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