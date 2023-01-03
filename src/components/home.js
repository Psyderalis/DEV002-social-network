import { mainApp, onNavigate } from "../main.js";
import { goToHome } from "./logIn.js";
// Vista de Home de Petsbook

export default () => {
    mainApp.innerHTML = '';
    const templateHome = `
    
    <div id="cabeza">
     <img id= "logoDeVistaHome" src="imagenes/Logo.png" width=50px>
     <span id="etsbook">ETSBOOK</span>
     <img id="mas" src="imagenes/mas.png" width=30px height=30px>
    </div>

    <fieldset class="postPorPublicar" id="postPropio">
        <img class="fotoDePerfil" src="imagenes/pug.jpg" alt='foto del usuario' >
        
        <input class="inputPostPorPublicar" placeholder='¿En qué estás pensando?'>
        <button class="Publicar">Publicar</button>
    </fieldset> 
    
    
    <section class="post">

    <div class="cabezaDePost">
    <img class="fotoDePerfil" src="imagenes/pug.jpg" alt='foto del usuario'>
    <p class="nombreDeUsuario">Manchitas</p>
    <img src="imagenes/mas.png" width=30px height=30px>
    </div>

    <div class="cuerpoDePost">
    <p class="contenido"> Hoy me siento...</p>
    </div>
    <div  class="linea"></div>
    <div class="footerDePost">
    <img src="imagenes/huella.png" width=30px>
    <p>1 Me encanta</p>
    </div>

    </section>
    
    `

    mainApp.innerHTML = templateHome
    goToHome()
}



