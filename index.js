const iconMenuElement = document.getElementById("toogle-menu");
const mainMenuElement = document.getElementById("main-menu");

console.log(iconMenuElement)
console.log(mainMenuElement)

iconMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle("main-menu--show")
});