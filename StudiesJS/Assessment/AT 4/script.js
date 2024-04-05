let qnt_doces = parseInt(prompt("Digite a quantidade de doces fabricados: "))
let qnt_caixas = parseInt(prompt("Qual o número de doces suportados em uma única caixa?"))

let caixas_completas = Math.trunc(qnt_doces / qnt_caixas)

alert("Serão necessárias " + caixas_completas + " caixas completas para comportar todos os doces fabricados.")