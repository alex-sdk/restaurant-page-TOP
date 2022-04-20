export default function loadMenu() {
    const content = document.getElementById("content");
    
    const title = document.createElement('h2');
    title.innerText = "MENU SPECIALTIES";
    title.classList.add("menuTitle");

    const item1 = document.createElement("h3")
    item1.innerText = "King Ranch Chicken Casserole";
    const price1 = document.createElement("h3");
    price1.innerText = "$14.99";

    const item2 = document.createElement("h3")
    item2.innerText = "Chicken Cordon Bleu";
    const price2 = document.createElement("h3");
    price2.innerText = "$13.99";

    const item3 = document.createElement("h3")
    item3.innerText = "Kickin Chicken Parmesan";
    const price3 = document.createElement("h3");
    price3.innerText = "$12.99";
    
    const item4 = document.createElement("h3")
    item4.innerText = "Stir-Fried Chicken Salad";
    const price4 = document.createElement("h3");
    price4.innerText = "$11.99";

    const item5 = document.createElement("h3")
    item5.innerText = "Spicy Crispy Chicken Sandwhich";
    const price5 = document.createElement("h3");
    price5.innerText = "$11.99";

    const item6 = document.createElement("h3")
    item6.innerText = "Rotiserie Chicken";
    const price6 = document.createElement("h3");
    price6.innerText = "$20.99";

    const item7 = document.createElement("h3")
    item7.innerText = "Crispy Fried Chicken";
    const price7 = document.createElement("h3");
    price7.innerText = "$14.99";

    const reserveButton = document.createElement("button");
    reserveButton.innerText = "RESERVE NOW";

    content.appendChild(title)
    content.appendChild(item1)
    content.appendChild(price1)
    content.appendChild(item2)
    content.appendChild(price2)
    content.appendChild(item3)
    content.appendChild(price3)
    content.appendChild(item4)
    content.appendChild(price4)
    content.appendChild(item5)
    content.appendChild(price5)
    content.appendChild(item6)
    content.appendChild(price6)
    content.appendChild(item7)
    content.appendChild(price7)
    content.appendChild(reserveButton)
}