import { onNavigate } from "../main.js";

export const Home = () => {
    const div = document.createElement("div");
    const title = document.createElement("h2");

    title.textContent = "Home";

    div.append(title);

    return div;
};