import loadHome from "./pageLoadHome";
import loadMenu from "./pageLoadMenu";
import loadContact from "./pageLoadContact";
import './reset.css';
import './style.css';

function initialLoad() {
    const content = document.getElementById("content")
    const homeButton = document.getElementById("home");
    const menuButton = document.getElementById("menu");
    const contactButton = document.getElementById("contact");
    
    homeButton.addEventListener("click", () => {
        content.replaceChildren()
        loadHome()
    });

    menuButton.addEventListener("click", () => {
        content.replaceChildren()
        loadMenu()
    });

    contactButton.addEventListener("click", () => {
        content.replaceChildren()
        loadContact()
    })

    loadHome()
}
initialLoad()


