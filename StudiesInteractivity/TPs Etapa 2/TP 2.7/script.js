let elementos = document.querySelectorAll('p');
let botão = document.querySelector('button');
let card = document.querySelector('#card');

function clicar(){
  var hidden = elementos[0].style.display === 'none'
  
  elementos.forEach(function(elemento) {
    elemento.style.display = hidden ? 'block' : 'none';
  });

  card.style.backgroundColor = hidden ? '' : 'blue';
}

botão.addEventListener('click', clicar);