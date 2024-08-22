const container = document.querySelector("#content");

function setupHomePage() {
    container.innerHTML = "";

    const heroSection = document.createElement("div");
    heroSection.setAttribute("id", "hero");

    container.appendChild(heroSection);
    
    const header = document.createElement("div");
    header.setAttribute("id", "header");

    heroSection.appendChild(header);

    const h3 = document.createElement("h3");
    h3.classList.add("small-text-hero");
    h3.innerText = "Best sushi in town";
    const h1 = document.createElement("h1");
    h1.classList.add("heading-hero");
    h1.innerText = "Taste the rich flavor of high quality sushi";
    const p = document.createElement("p");
    p.textContent = "We only use the five star quality for our menu, come and get the richness in every food we serve."

    heroSection.append(h3, h1, p);

    const menuButton = document.createElement("button");
    menuButton.classList.add("button-filled", "menu");
    menuButton.textContent = "GO TO MENU";

    heroSection.appendChild(menuButton);
}

export { setupHomePage };