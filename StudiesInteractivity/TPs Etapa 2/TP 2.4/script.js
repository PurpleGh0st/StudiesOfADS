function criarCSS() {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.texto { text-align: center; font-weight: bold; }';
    document.head.appendChild(style);
}

function addTexto() {
    let elemento = document.querySelector("p");
    elemento.classList.add("texto");
}

document.querySelector("button").addEventListener("click", addTexto);

criarCSS();