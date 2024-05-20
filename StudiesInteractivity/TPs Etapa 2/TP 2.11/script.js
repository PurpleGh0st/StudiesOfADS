let botão = document.createElement('button')
botão.innerText = 'Inserir'

function clicarB(){
  let lista = document.getElementById('lista')
  let item = document.createElement('li')
  item.innerText = 'nova entrada'

  lista.appendChild(item)
}

botão.addEventListener('click', clicarB)
document.body.appendChild(botão)