import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
// import { async } from 'regenerator-runtime';
import { auth } from '../app/firebase.js'; 
import './app/signupForm.js'
import './app/logout.js'


onAuthStateChanged(auth, async (user) => {
    console.log(user)
})

// Para el DOM
// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
myFunction();
//------------------------------------------------------

// import logIn from './components/logIn.js';
// import signUp from './components/signUp.js';
// import welcome from './components/welcome.js';
// import home from './components/home.js';

import { Login } from './components/logIn.js'
import { Welcome } from './components/welcome.js';
import { Register } from './components/signUp.js';
import { Home } from './components/home.js';


//export const mainApp = document.getElementById('app');
const root = document.getElementById('root');

const routes = {
    '/': Login,
    '/registro': Register,
    '/bienvenida': Welcome,
    '/home': Home,
};

export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname,
    );

    //mainTrue.appendChild(routes[pathname]());
    root.removeChild(root.firstChild)
    root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
    //mainTrue.append(component());
    root.removeChild(root.firstChild);
    root.append(component());
};

root.appendChild(component());

