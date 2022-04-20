export default function loadHome() {
    
    const descriptionText = "Here at Kickin' Chicken, we prepare all food with a desire to serve our beloved customers with traditional and innovative tastes. We put a spin on our menu. Our chicken is hand-breaded, made to order, and never frozen. A good combination of worldly sides made in-house sauces and unique combinations of drinks will suppress your appetite. Our vision is as simple as our menu: quality, freshness, and tastiness.";
    
    const content = document.getElementById("content");
    
    const title1 = document.createElement("h2");
    title1.innerText = "FAMILY OWNED";
    
    const title2 = document.createElement("h3");
    title2.innerText = "FUSION OF FLAVORS";
    
    const title3 = document.createElement("h2");
    title3.innerText = "FRESHLY MADE";

    const description = document.createElement("p");
    description.innerText = descriptionText;
    description.classList.add("description");

    const reserveButton = document.createElement("button");
    reserveButton.innerText = "RESERVE NOW";

    content.appendChild(title1)
    content.appendChild(title2)
    content.appendChild(title3)
    content.appendChild(description)
    content.appendChild(reserveButton)
}
