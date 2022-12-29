import { onNavigate } from "../main.js";

export const Welcome = () => {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const buttonGo = document.createElement("button");

    buttonGo.textContent = "Comenzar";
    title.textContent = "Bienvenida a la mejor red social";

    buttonGo.addEventListener("click", () =>{
        onNavigate("/home");
    })

    div.append(title, buttonGo);

    return div;
};