export const templateRegister = `
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
  `;
