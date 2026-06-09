const welcomeWindow = document.querySelector("#welcome");
const welcomeHeader = document.querySelector("#welcomeheader");
const welcomeOpen = document.querySelector("#welcomeopen");
const welcomeClose = document.querySelector("#welcomeclose");

dragElement(welcomeWindow, welcomeHeader);

welcomeOpen.addEventListener("click", () => openWindow(welcomeWindow));
welcomeClose.addEventListener("click", () => closeWindow(welcomeWindow));