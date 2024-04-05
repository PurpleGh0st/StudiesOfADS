let p_gasolina = parseFloat(prompt("Digite o preço da gasolina: "))
let p_alcool = parseFloat(prompt("Digite o preço do álcool: "))

const diferenca_p = p_alcool / p_gasolina

if (diferenca_p >= 0.7) {
  alert("É mais vantajoso pensarmos em abastecer a gasolina, pois a diferença de preço é de: R$" + diferenca_p.toFixed(2))
} else {
  alert("É mais vantajoso pensarmos em abastecer a álcool, pois a diferença de preço é de: R$" + diferenca_p.toFixed(2))
} 