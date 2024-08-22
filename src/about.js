import image from "./about_image.jpg"

const container = document.querySelector("#content");

function setupAboutPage() {
    container.innerHTML = "";

    const about = document.createElement("div");
    about.setAttribute("id", "about-us");

    container.appendChild(about);

    const h3 = document.createElement("h3");
    h3.classList.add("small-text");
    h3.textContent = "About us";
    const h1 = document.createElement("h1");
    h1.classList.add("heading");
    h1.textContent = "Our Story";
    const small = document.createElement("p");
    small.textContent = "A journey for making successful luxury restaurant with the best services"
    const story = document.createElement("div");
    story.setAttribute("id", "story");

    about.append(h3, h1, small, story);

    const aboutImage = document.createElement("img");
    aboutImage.src = image;
    const text = document.createElement("div");
    text.setAttribute("id", "text");

    story.append(aboutImage, text);

    const p1 = document.createElement("p");
    p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat urna id leo euismod rhoncus. Aliquam erat volutpat. Nulla id aliquam neque, at dignissim quam. Praesent et lacus accumsan, consequat nisl a, mattis sapien.";
    const p2 = document.createElement("p");
    p2.textContent = "Nam sodales ullamcorper aliquet. Phasellus ut pretium libero, vitae imperdiet purus. Sed sed tincidunt velit. Aliquam vitae ipsum molestie, vehicula nisi quis, finibus leo.";
    const more = document.createElement("button");
    more.classList.add("button-empty");
    more.textContent = "MORE ABOUT US";

    text.append(p1, p2, more);
};

export { setupAboutPage };