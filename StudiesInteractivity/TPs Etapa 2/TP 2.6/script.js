let elemento = document.querySelector('#item')

function trocarClasse() {
  let classe = this.parentNode

  classe.className = 'listaSelecionada'
}

elemento.addEventListener('click', trocarClasse)