export const templateRegister = `
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
            <button type="" class="signUpBtn" id="signUpBtn">Crear cuenta</button>
        </form>
        <section class="invitacion" id="invitacion">
            <p class="pregunta" id="preguntas">¿Ya tienes una cuenta?</p>
            <div class="iniciar" id="iniciar">Inicia Sesión</div>
        </section>
    </section>
</section>
  `;
