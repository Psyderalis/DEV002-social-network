// Para elementos referidos al registro de usuario


import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import{auth} from './firebase.js';

import { myFunction } from './lib/index.js';

//import './firebase.js'


const iniciarSesion=document.querySelector('#iniciarSesion-form')

iniciarSesion.addEventListener('submit', async (e)=>{
e.preventDefault(); //investigar

const email=iniciarSesion['correo'].value;
const password=iniciarSesion['contraseña'].value;

try {
const userCredentials= await createUserWithEmailAndPassword(auth, email,password ) 
//const user = userCredential.user;  

} catch (error) {
    console.log (error.message)
    console.log (error.code)
        if(error.code==='auth/invalid-email') {
            
        }


};

});

myFunction();


