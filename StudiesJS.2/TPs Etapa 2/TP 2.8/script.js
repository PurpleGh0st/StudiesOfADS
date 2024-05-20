let p1 = Number(prompt('Qual foi a sua primeira nota?'))
let p2 = Number(prompt('Qual foi a sua segunda nota?'))

function notas(p1, p2){
  let res = document.getElementById('resultado')
  let media = (p1 + p2) / 2
  
  if (media >= 5){
    res.innerHTML = 'Aprovado'
  } else {
    res.innerHTML = 'Reprovado'
  }
}

notas(p1, p2)