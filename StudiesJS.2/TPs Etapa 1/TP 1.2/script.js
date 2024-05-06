var países = []

function adicionarPaís(país){
  países.push(país)
}

adicionarPaís('Brasil')
adicionarPaís('França')
adicionarPaís('Itália')
adicionarPaís('Japão')
adicionarPaís('Rússia')

console.log(países)

document.write(`Tamanho do array: ${países.length} <br>`)

países[2] = 'Alemanha'