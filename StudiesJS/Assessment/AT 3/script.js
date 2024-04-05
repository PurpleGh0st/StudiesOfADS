let valor_conta = parseFloat(prompt("Qual o valor da sua conta?"))
const gorjeta = 1.1

const valor_total = valor_conta * gorjeta

alert("O valor total da sua conta junto ao adicional da gorjeta é de: R$" + valor_total.toFixed(2))