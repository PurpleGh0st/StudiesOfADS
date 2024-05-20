let botão = document.createElement('button')
botão.innerText = 'Inserir'

function clicarB(){
  let texto = document.createElement('h2')
  let div = document.getElementById('container')
  
  texto.innerText = 'Inserido'
  div.appendChild(texto)
}

document.body.appendChild(botão)
botão.addEventListener('click', clicarB)