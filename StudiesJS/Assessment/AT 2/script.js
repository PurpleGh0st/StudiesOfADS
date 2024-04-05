const valor = 4.57

alert("O valor do combustível por litro é de R$ " + valor)

let valor_abastecido = parseInt(prompt("Quantos reais de combustível deseja abastecer?"))
let litros = valor_abastecido / valor

alert("Foram abastecidos " + litros.toFixed(0) + " litros de combustível.")