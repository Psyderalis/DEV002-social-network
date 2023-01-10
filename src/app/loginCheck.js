import {  onNavigate  } from '../main.js'


export const loginCheck = (user) => {
    if (user) {
        onNavigate("/home");

    } else {
        alert('Ingresa sesión')
    }
}
