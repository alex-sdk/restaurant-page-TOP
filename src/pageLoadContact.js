export default function loadContact() {
    const content = document.getElementById("content")
    const reserveButton = document.createElement("button")
    reserveButton.innerText = "RESERVE NOW";

    const title = document.createElement("div");
    title.innerText = "CONTACT INFO";
    title.classList.add("title")
    const email = document.createElement("div");
    email.innerText = "kickinchicken @email.com"
    const street = document.createElement("div");
    street.innerText = "7401 San Pedro Dr NE";
    const city = document.createElement("div");
    city.innerText = "Albuquerque";
    const state = document.createElement("div");
    state.innerText = "New York";
    const zip = document.createElement("div");
    zip.innerText = "87109";
    const phone = document.createElement("div");
    phone.innerText = "(505) 821-1717";
    const country = document.createElement("div");
    country.innerText = "United States";

    content.appendChild(title)
    content.appendChild(phone)
    content.appendChild(email)
    content.appendChild(street)
    content.appendChild(city)
    content.appendChild(zip)
    content.appendChild(state)
    content.appendChild(reserveButton)
}