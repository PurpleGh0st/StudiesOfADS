var países = []

function adicionarPaís(país){
  países.push(país)
}

adicionarPaís('Brasil')
adicionarPaís('França')
adicionarPaís('Itália')
adicionarPaís('Japão')
adicionarPaís('Rússia')
adicionarPaís('China')

document.write(`Tamanho do array: ${países.length} <br>`)

países.splice(2, 1)

console.log(países)