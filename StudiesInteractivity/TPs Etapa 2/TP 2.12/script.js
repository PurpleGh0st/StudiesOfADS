let close = document.getElementById('close')
let div = document.getElementById('modal')
let btn = document.querySelector('button')

div.classList.add('hide')

function clicarB(){
  div.style.display = 'block'
}

function clicarX(){
  div.style.display = 'none'
}

btn.addEventListener('click', clicarB)
close.addEventListener('click', clicarX)