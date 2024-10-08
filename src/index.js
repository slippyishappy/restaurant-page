import "./style.css";
import { setupHomePage } from "./home.js";
import { setupMenuPage } from "./menu.js";
import { setupAboutPage } from "./about.js"
import { setupDiningPage } from "./dining.js";

setupHomePage();

const home = document.querySelector("#logo");
const menu = document.querySelectorAll(".menu");
const dining = document.querySelector("#dining");
const about = document.querySelector("#about");

home.addEventListener("click", setupHomePage);

menu.forEach(button => {
    button.addEventListener("click", setupMenuPage);
});

dining.addEventListener("click", setupDiningPage);

about.addEventListener("click", setupAboutPage);