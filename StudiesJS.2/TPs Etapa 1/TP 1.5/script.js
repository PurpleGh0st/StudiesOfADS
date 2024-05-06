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

países.splice(2, 1)
países.splice(4, 1)
países.push('Portugal', 'Canadá')

console.log(países)