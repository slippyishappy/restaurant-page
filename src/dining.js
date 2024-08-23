import fineImg from "./fine_dining.jpg"
import goldImg from "./gold_dining.jpg"
import royalImg from "./royal_dining.jpg"

const container = document.querySelector("#content");

function setupDiningPage() {
    container.innerHTML = "";

    const diningHeader = document.createElement("div");
    diningHeader.setAttribute("id", "dining-header");
    container.appendChild(diningHeader);

    const chooseEvent = document.createElement("h3");
    chooseEvent.classList.add("small-text");
    chooseEvent.textContent = "Choose Your Event";
    const diningEvents = document.createElement("h1");
    diningEvents.classList.add("heading");
    diningEvents.textContent = "Dining Events";
    const explanation = document.createElement("p");
    explanation.textContent = "We provide dining event for your special day with your important people";
    diningHeader.append(chooseEvent, diningEvents, explanation);

    // Options

    const optionsContainer = document.createElement("div");
    container.appendChild(optionsContainer);

    const option1 = document.createElement("div");
    option1.classList.add("option");
    const option2 = document.createElement("div");
    option2.classList.add("option");
    const option3 = document.createElement("div");
    option3.classList.add("option");
    optionsContainer.append(option1, option2, option3);

    const description1 = document.createElement("div");
    description1.classList.add("description-dining");
    const fineDining = document.createElement("img");
    fineDining.src = fineImg;
    const description2 = document.createElement("div");
    description2.setAttribute("id", "gold");
    const goldDining = document.createElement("img");
    goldDining.src = goldImg;
    const description3 = document.createElement("div");
    description3.classList.add("description-dining");
    const royalDining = document.createElement("img");
    royalDining.src = royalImg;
    option1.append(description1, fineDining);
    option2.append(description2, goldDining);
    option3.append(description3, royalDining);

    const heading1 = document.createElement("h1");
    heading1.classList.add("menu-heading");
    heading1.textContent = "Fine Dining";
    const content1 = document.createElement("p");
    content1.innerHTML = `Bottle of Champagne <br> Fine Sushi Tower For 2+ <br> Dessert`;
    const price1 = document.createElement("h2");
    price1.classList.add("menu-heading");
    price1.textContent = "$500";
    description1.append(heading1, content1, price1);

    const heading2 = document.createElement("h1");
    heading2.classList.add("menu-heading");
    heading2.textContent = "Gold Dining";
    const content2 = document.createElement("p");
    content2.innerHTML = `Bottle of Champagne <br> Secret Menu Sushi For 2+ <br> Dessert`;
    const price2 = document.createElement("h2");
    price2.classList.add("menu-heading");
    price2.textContent = "$1000";
    description2.append(heading2, content2, price2);

    const heading3 = document.createElement("h1");
    heading3.classList.add("menu-heading");
    heading3.textContent = "Royalty Dining";
    const content3 = document.createElement("p");
    content3.innerHTML = `Bottle of Luxury Champagne <br> Special Menu Sushi For 2+ <br> Royal Dessert`;
    const price3 = document.createElement("h2");
    price3.classList.add("menu-heading");
    price3.textContent = "$1500";
    description3.append(heading3, content3, price3);
}

export { setupDiningPage };