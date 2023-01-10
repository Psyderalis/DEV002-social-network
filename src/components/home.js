
import { homeE } from '../app/home.js';
import { onNavigate } from "../main.js";
import { logout } from '../app/logout.js'
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
                <div class="menuArriba" id="menuArriba"> 
                    <img id="puntos" src="imagenes/mas.png" width=30px height=30px>
                    <div class="modalPuntos" id="modalPuntos">
                        <div class="logOut" id="logOut">
                            <img id="logoutIcon" class="logoutIcon" src="imagenes/logoutIcon.png" alt="Logout" width=30px height=30px>
                            <p> Cerrar sesión </p>
                        </div>
                        <span id="x" class="x">X</span>
                    </div>
                </div>
            </div>
            <form class="postPorPublicar" id="task-form">
                <img class="fotoDePerfil" src="imagenes/pug.jpg" alt='foto del usuario' >
                <input id='description' class="inputPostPorPublicar" placeholder='¿En qué estás pensando?'>
                <button id='guardar' class="Publicar">Publicar</button>
            </form> 
            <div id='task-container'>
            </div>
            <div id= "logoutQContainer" class="logoutQContainer"></div>
                <div id="logoutQ" class="logoutQ">
                    <p id="xSalir" class="xSalir"> X </p>
                    <p id="Q" class="Q"> ¿Quieres salir de Petsbook? </p>
                    <button id="logoutBtn" class="logoutBtn">Cerrar sesión</button>
                </div>
            </div>

            <div class="footerDeHome">
             <div class = "divIconoHome">
             <img class="iconHome" src="imagenes/home.png" width=25px alt='foto del usuario'>
             </div>
             <img class="fotoDePerfil" src="imagenes/pug.jpg" alt='foto del usuario'>
           </div>

    `;

    div.innerHTML = templateHome;
    const taskContainer = div.querySelector('#task-container');
    console.log(taskContainer)
    const taskForm = div.querySelector('#task-form');
    console.log(taskForm)
    homeE(taskContainer, taskForm);

    const xSalir = div.querySelector("#xSalir");
    const puntos = div.querySelector("#puntos");
    const modalPuntos = div.querySelector("#modalPuntos");
    const logOut = div.querySelector("#logOut")
    const x = div.querySelector("#x")
    const logoutQContainer = div.querySelector("#logoutQContainer")
    const logoutQ = div.querySelector("#logoutQ")
    const logoutBtn = div.querySelector('#logoutBtn')

    logoutBtn.addEventListener('click', () => {
        // div.innerHTML = "";
        logout()
        onNavigate("/");
        console.log('logout')
    });

    puntos.addEventListener("click", function () {
        modalPuntos.style.display = "flex"
    });

    x.addEventListener("click", function () {
        modalPuntos.style.display = "none"
        logoutQ.style.display = "none"
        logoutQContainer.style.display = "none"
    });

    logOut.addEventListener("click", function () {
        logoutQ.style.display = "flex"
        logoutQContainer.style.display = "flex"
        modalPuntos.style.display = "none"
    });

    xSalir.addEventListener("click", function () {
        logoutQContainer.style.display = "none"
        logoutQ.style.display = "none"
        modalPuntos.style.display = "none"
    });
    return div;
};

