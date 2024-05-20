function criarCSS() {
  let style = document.createElement('style');
  style.innerHTML = '.titulo {text-align: center; color: white; background-color: blue;}'
  document.head.appendChild(style);
}

function addClass(){
  let classeNova = document.getElementById('titulo');
  classeNova.classList.toggle('titulo');
}

document.querySelector('h1').addEventListener('click', addClass)

criarCSS();