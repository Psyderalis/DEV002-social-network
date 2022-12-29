import { onNavigate } from "../main.js";

export const Login = () => {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const button = document.createElement("button");
    const buttonRegister = document.createElement("button");
    const inputEmail = document.createElement("input");
    const inputPass = document.createElement("input");


    button.textContent = "Entrar";
    buttonRegister.textContent = "Regístrate"
    title.textContent = "Inicia Sesión"

    button.addEventListener("click", () =>{
        onNavigate("/home");
    });
    buttonRegister.addEventListener("click", () =>{
        onNavigate("/register");
    });
   

    div.append(title, inputEmail, inputPass, button, buttonRegister);

    return div;
}; 
