
//import { homeE } from '../app/home.js'; **
//import { onNavigate } from '../main.js'; **

// Vista de Home de Petsbook

export const Home = () => {
    const div = document.createElement("div");
    div.className = "home";
    div.id = "home";
    const templateHome = `
            <div id="cabeza">
                <div class='head'><img id= "logoDeVistaHome" src="imagenes/Logo.png" width=50px>
                    <span id="etsbook">ETSBOOK</span>
                </div>
                <img id="mas" src="imagenes/mas.png" width=30px height=30px>
            </div>
            <form class="postPorPublicar" id="task-form">
                <img class="fotoDePerfil" src="imagenes/pug.jpg" alt='foto del usuario' >
                <input id='description' class="inputPostPorPublicar" placeholder='¿En qué estás pensando?'>
                <button id='guardar' class="Publicar">Publicar</button>
            </form> 
            <div id='task-container'>
            </div>
    `;
div.innerHTML = templateHome;
//homeE();

    return div;
};

