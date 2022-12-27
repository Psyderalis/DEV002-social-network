export const viewTemplates = () => {
console.log("vistas")

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
      <a id="" href="/home"> 
        <button type="button" class="loginBtn" id="loginBtn">Iniciar sesión</button>
      </a>
    </form>
    <div class="loginGoogle"> Ingresa con Google
    </div>
    <section class="invitacion" id="invitacion">
      <p class="pregunta" id="preguntas">¿No tienes una cuenta?</p>
      <a id="" href="/registro">
        <div class="" id="signUpOption">Regístrate</div>
      </a> 
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
      <a id="" href="/bienvenida">
        <button type="button" class="signUpBtn" id="signUpBtn">Crear cuenta</button>
      </a>
    </form>
    <section class="invitacion" id="invitacion">
      <p class="pregunta" id="preguntas">¿Ya tienes una cuenta?</p>
      <a id="" href="/">
        <div class="" id="signInOption">Inicia Sesión</div>
      </a> 
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
      <a id="" href="/home"> 
        <button>Comenzar</button>
      </a>
    </section>
  </section>
`;
};