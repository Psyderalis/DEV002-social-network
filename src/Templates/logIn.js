export const templateInicio = `
  <div class="InicioFilter"></div>
  <div class="fondo"></div>
  <section class='loginOculto'>
      <div class="frasePagina"> Un lugar dónde compartir, hablar y conocer mucho más sobre el mundo de las mascotas.
      <br>Sé parte de esta gran comunidad y sé la voz de tu adorada mascota.
      </div>
      <div class="imagenesPagina">
      <img  class="imagenUno" >
      <img  class="imagenDos" >
      <img  class="imagenTres" >
      </div>
  </section>

  <section class="pantalla">
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
        <span class="registrate" id="registrate"  >Regístrate</span></p>
      </section>
    </section>
  </section>
`;
