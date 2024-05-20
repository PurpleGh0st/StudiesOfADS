let nome = prompt("Qual o nome do seu time?")
let vitorias = Number(prompt("Quantas vitórias o seu time tem?"))
let derrotas = Number(prompt("Quantas derrotas o seu time tem?"))
let empates = Number(prompt("Quantos empates o seu time tem?"))

function calculaPontos(vitorias, empates, derrotas){
  let pontosV = vitorias * 3
  let pontosE = empates * 1
  let pontosD = derrotas * 0

  let pontosTotais = pontosV + pontosE + pontosD
  let pontosMedia = pontosTotais / (vitorias + derrotas + empates)

  console.log(`O time ${nome} tem ${pontosTotais} pontos e a média de pontos por jogo é ${pontosMedia.toFixed(0)}`)
}

calculaPontos(vitorias, empates, derrotas)