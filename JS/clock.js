const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function setClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`
}

function init () {
    setClock();
    setInterval(setClock, 1000);
}

init()