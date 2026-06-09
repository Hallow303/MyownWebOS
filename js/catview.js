const catWindow = document.querySelector("#cat");
const catHeader = document.querySelector("#catheader");
const catOpen = document.querySelector("#catopen");
const catClose = document.querySelector("#catclose");
const catImage = document.querySelector("#catImage");
const newCatButton = document.querySelector("#newCatButton");

dragElement(catWindow, catHeader);

catOpen.addEventListener("click", () => openWindow(catWindow));
catClose.addEventListener("click", () => closeWindow(catWindow));

newCatButton.addEventListener("click", () => {
    catImage.src = "https://cataas.com/cat?" + Date.now();
});