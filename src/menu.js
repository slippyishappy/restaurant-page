import tunaSushi from "./tuna_sushi.png"
import salmonSushi from "./salmon_sushi.png"
import justSushi from "./just_sushi.png"
import imageDivider from "./image_divider.png"
import dragonSushi from "./dragon_sushi.jpg"
import creamySushi from "./creamy_sushi.jpg"
import rollSalmonSushi from "./roll_salmon_sushi.jpg"

const container = document.querySelector("#content");

function setupMenuPage() {
    container.innerHTML = "";

    const specials = document.createElement("div");
    specials.setAttribute("id", "specials");

    container.appendChild(specials);

    const smallTextSpecial = document.createElement("h3");
    smallTextSpecial.classList.add("small-text");
    smallTextSpecial.textContent = "Special Menu";
    const headingSpecial = document.createElement("h1");
    headingSpecial.classList.add("heading");
    headingSpecial.textContent = "Today's Specials";
    const pSpecial = document.createElement("p");
    pSpecial.textContent = "Special menu often comes different everyday, this is our special food for today";
    const cards = document.createElement("div");
    cards.setAttribute("id", "cards");
    
    specials.append(smallTextSpecial, headingSpecial, pSpecial, cards);

    const card1 = document.createElement("div");
    card1.classList.add("card");
    const card2 = document.createElement("div");
    card2.classList.add("card");
    const card3 = document.createElement("div");
    card3.classList.add("card");

    cards.append(card1, card2, card3);

    const tunaImg = document.createElement("img");
    tunaImg.src = tunaSushi;
    const headingMenu1 = document.createElement("h1");
    headingMenu1.classList.add("menu-heading");
    headingMenu1.textContent = "TUNA SUSHI";
    const pMenu1 = document.createElement("p")
    pMenu1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus."
    const buttonOrder1 = document.createElement("button");
    buttonOrder1.classList.add("button-empty");
    buttonOrder1.textContent = "ORDER NOW";

    card1.append(tunaImg, headingMenu1, pMenu1, buttonOrder1);

    const salmonImg = document.createElement("img");
    salmonImg.src = salmonSushi;
    const headingMenu2 = document.createElement("h1");
    headingMenu2.classList.add("menu-heading");
    headingMenu2.textContent = "SALMON SUSHI";
    const pMenu2 = document.createElement("p")
    pMenu2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus."
    const buttonOrder2 = document.createElement("button");
    buttonOrder2.classList.add("button-empty");
    buttonOrder2.textContent = "ORDER NOW";

    card2.append(salmonImg, headingMenu2, pMenu2, buttonOrder2);

    const justImg = document.createElement("img");
    justImg.src = justSushi;
    const headingMenu3 = document.createElement("h1");
    headingMenu3.classList.add("menu-heading");
    headingMenu3.textContent = "JUST SUSHI";
    const pMenu3 = document.createElement("p")
    pMenu3.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus."
    const buttonOrder3 = document.createElement("button");
    buttonOrder3.classList.add("button-empty");
    buttonOrder3.textContent = "ORDER NOW";

    card3.append(justImg, headingMenu3, pMenu3, buttonOrder3);

    const imageDividerSection = document.createElement("img");
    imageDividerSection.src = imageDivider;
    imageDividerSection.style = "width: 100%;";
    container.appendChild(imageDividerSection);

    const menuSection = document.createElement("div");
    menuSection.setAttribute("id", "menu-section");

    container.appendChild(menuSection);

    const smallTextMenu = document.createElement("h3");
    smallTextMenu.classList.add("small-text");
    smallTextMenu.textContent = "Quality Food For You";
    const headingMainMenu = document.createElement("h1");
    headingMainMenu.classList.add("heading");
    headingMainMenu.textContent = "Our Specialities";
    const pMainMenu = document.createElement("p");
    pMainMenu.textContent = "Authentic food from our restaurant served with high quality ingredients";

    menuSection.append(smallTextMenu, headingMainMenu, pMainMenu);

    const specialList = document.createElement("div");
    specialList.setAttribute("id", "special-list");

    container.appendChild(specialList);

    // Item 1
    const item1 = document.createElement("div")
    item1.classList.add("items");
    specialList.appendChild(item1);

    const dragonImg = document.createElement("img");
    dragonImg.src = dragonSushi;
    const description1 = document.createElement("div");
    description1.classList.add("description");
    item1.append(dragonImg, description1);
    
    const menuItem1 = document.createElement("h1");
    menuItem1.classList.add("menu-heading");
    menuItem1.textContent = "Dragon Sushi";
    const ingredientsItem1 = document.createElement("p");
    ingredientsItem1.textContent = "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.";
    const price1 = document.createElement("h2");
    price1.classList.add("menu-heading");
    price1.textContent = "$50";
    description1.append(menuItem1, ingredientsItem1, price1);

    // Item 2
    const item2 = document.createElement("div")
    item2.classList.add("items");
    specialList.appendChild(item2);

    const creamyImg = document.createElement("img");
    creamyImg.src = creamySushi;
    const description2 = document.createElement("div");
    description2.classList.add("description");
    item2.append(description2, creamyImg);
    
    const menuItem2 = document.createElement("h1");
    menuItem2.classList.add("menu-heading");
    menuItem2.textContent = "Creamy Sushi";
    const ingredientsItem2 = document.createElement("p");
    ingredientsItem2.textContent = "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.";
    const price2 = document.createElement("h2");
    price2.classList.add("menu-heading");
    price2.textContent = "$50";
    description2.append(menuItem2, ingredientsItem2, price2);

    // Item 3
    const item3 = document.createElement("div")
    item3.classList.add("items");
    specialList.appendChild(item3);

    const rollImg = document.createElement("img");
    rollImg.src = rollSalmonSushi;
    const description3 = document.createElement("div");
    description3.classList.add("description");
    item3.append(rollImg, description3);
    
    const menuItem3 = document.createElement("h1");
    menuItem3.classList.add("menu-heading");
    menuItem3.textContent = "Roll Salmon Sushi";
    const ingredientsItem3 = document.createElement("p");
    ingredientsItem3.textContent = "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.";
    const price3 = document.createElement("h2");
    price3.classList.add("menu-heading");
    price3.textContent = "$50";
    description3.append(menuItem3, ingredientsItem3, price3);
}

export { setupMenuPage };