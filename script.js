function relogio(){
    let tempo = document.getElementById("relogio");
    tempo.innerText = new Date().toLocaleTimeString();
}

relogio();

setInterval(relogio, 1000);

function arrastarJanelas(janela, header) {
    let x = 0;
    let y = 0;
    let mousex = 0;
    let mousey = 0;

    header.onmousedown = iniciarArrastar;

    function iniciarArrastar(event) {
        event.preventDefault();
        mousex = event.clientX;
        mousey = event.clientY;
        document.onmouseup = paraArrastar;
        document.onmousemove = arrastando;
    }

    function arrastando(event){
        event.preventDefault();
        x = mousex - event.clientX;
        y = mousey - event.clientY;
        mousex = event.clientX;
        mousey = event.clientY;
        janela.style.top = janela.offsetTop - y + "px";
        janela.style.left = janela.offsetLeft - x + "px";
    }

    function paraArrastar(){
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


function abrirJanela(windowElement){
    windowElement.style.display = "block";
}

function fechaJanela(windowElement){
    windowElement.style.display = "none";
}

// bem vindo code app

let bemvindo = document.getElementById("bem-vindo");
let bemvindoHeader = document.getElementById("bem-vindo-header");

arrastarJanelas(bemvindo, bemvindoHeader);

document.getElementById("abrir-bem-vindo").onclick = function(){
    bemvindo.style.display = "block";
}

document.getElementById("fecha-bem-vindo").onclick = function(){
    bemvindo.style.display = "none";
}

// ver gatinhos code app

let gato = document.getElementById("gato");
let gatoHeader = document.getElementById("gato-header");

arrastarJanelas(gato, gatoHeader);

document.getElementById("abrir-gato").onclick = function () {
    gato.style.display = "block";
};

document.getElementById("fecha-gato").onclick = function () {
    gato.style.display = "none";
};

document.getElementById("novo-gato").onclick = function () {
    document.getElementById("imagem-gato").src = "https://cataas.com/cat?" + Date.now();
};

// nasa ver coisas code app

let nasa = document.getElementById("nasa-app");
let nasaHeader = document.getElementById("nasa-header");

arrastarJanelas(nasa, nasaHeader);

document.getElementById("abrir-nasa").onclick = function(){
    nasa.style.display = "block";
    let nasaApi = "https://api.nasa.gov/planetary/apod?api_key=WwI50925LfDYijxeckWZk7FpRSRVKP2dQ369PBkm"

    fetch(nasaApi).then(function(responde) {
        if (!responde.ok){
            throw new Error("Erro " + responde.status);
        }
        return responde.json();

    }).then(function(data) {
        document.getElementById("titulo-nasa").innerText = data.title;
        document.getElementById("imagem-nasa").src = data.url;
        document.getElementById("nasa-texto").innerText = data.explanation.slice(0, 350) + "...";
    }).catch(function(error){
        document.getElementById("titulo-nasa").innerText = "Filed";
        document.getElementById("nasa-texto").innerText = error.message;
        document.getElementById("imagem-nasa").src = "https://http.cat/images/500.jpg";
    });
};

document.getElementById("fecha-nasa").onclick = function () {
    nasa.style.display = "none";
};