// Para el DOM
// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();
//------------------------------------------------------

//Crear un elemento
const divCreado=document.createElement('div');

//Agregarle un id al elemento creado
divCreado.id='app';

//Seleccionar donde se va a poner el nodo (elemento padre) 
const elementoPadre=document.querySelector('body');


//Pantalla 1 - Inicio de sesión---------------------------
const pantallaInicio = ()=> {

//limpiar el html
elementoPadre.innerHTML='';
//guardar información en el elemento
divCreado.innerHTML=
`<section class="pantalla" id="inicio">

  <section class="presentacion" id="presentacion">
    <div class="logo" id=""></div>
    <div class="nombre" id="">PETSBOOK</div>
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
    <div class="registrate" id="">Regístrate</div>
  </section>

</section>`
 //agregar al elemento padre()body  el nodo(#app)
 elementoPadre.appendChild(divCreado);
//ir a pantalla registrar
 elementoPadre.querySelector('.registrate').addEventListener('click', ()=>{
   pantallaRegistro()});

  return elementoPadre;
}
//llamar a la función
pantallaInicio();


//Pantalla 2 - Registrate --------------------------------
const pantallaRegistro= ()=> {

  //limpiar el html
  elementoPadre.innerHTML='';
  //guardar información en el elemento
  divCreado.innerHTML=
` <section class="pantalla" id="registro">
    <section class="presentacion" id="">
      <div class="logo" id=""></div>
      <div class="nombre" id="">PETSBOOK</div>
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
      <div class="iniciar" id="">Inicia Sesión</div>
    </section>
  </section>`;
  //agregar nodo
  elementoPadre.appendChild(divCreado);
  //ir a pantalla iniciar sesión
  elementoPadre.querySelector('.iniciar').addEventListener('click', ()=>{
    pantallaInicio()});
     
    return elementoPadre;
  }


//--------------------------------------------------------------------------------
/*
const inicioSesion = ` <section class="pantalla" id="inicio">

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
    <div class="registrate" id="" >Regístrate</div>
  </section>

</section>
`;

//Pantalla 2 - Registrarse------------------------------

const registro= ` <section class="pantalla" id="registro">
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
      <div class="iniciar" id="">Inicia Sesión</div>
    </section>
  </section>`;

//Pantalla 3 - Bienvenida--------------------------------

const Bienvenida= `<section class="pantalla" id="bienvenida">
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
</section>`;


//Aplicar funcionalidad-----------------------------------

//crear un elemento
const divCreado=document.createElement('div');
//seleccionar donde se va a poner el nodo - elemento padre
const elementoPadre=document.querySelector('#app');

//--------Creando función que inserte el html
const htmlDinamico=(pantalla) =>{
  
divCreado.innerHTML='';
//guardar información en el elemento
divCreado.innerHTML= pantalla;
//Agregarle una clase al elemento creado
divCreado.className='divCreado';
//agregar nodo
elementoPadre.appendChild(divCreado);


return elementoPadre; 
}

console.log(elementoPadre.querySelector('.iniciar') )
//--------llamando a la función
htmlDinamico(inicioSesion);

//--------Insertando redireccionamiento a la pantalla 2
elementoPadre.querySelector('.registrate').addEventListener('click', ()=>{
  return  htmlDinamico(registro)});

//--------Volviendo a pantalla 1
elementoPadre.querySelector('.iniciar').addEventListener('click', ()=> {
   return   htmlDinamico(inicioSesion)});
   */