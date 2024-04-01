let valorCompra = parseFloat(prompt("Digite o valor total da compra em R$:"));
let tipoConsumidor = prompt("Digite o código do tipo de consumidor (A para gestante, B para aposentado, C para pensionista):").toUpperCase();
let desconto = 0;

if (valorCompra >= 80) {
  switch (tipoConsumidor) {
    case 'A':
      desconto = 0.2;
      break;
    case 'B':
      desconto = 0.15;
      break;
    case 'C':
      desconto = 0.1;
      break;
    default:
      console.log("Erro: Tipo de consumidor inválido.");
      break;
  }
} else {
  switch (tipoConsumidor) {
    case 'A':
      desconto = 0.15;
      break;
    case 'B':
      desconto = 0.1;
      break;
    case 'C':
      desconto = 0.05;
      break;
    default:
      console.log("Erro: Tipo de consumidor inválido.");
      break;
  }
}
let valorFinal = valorCompra - (valorCompra * desconto);
alert("Valor final da compra: R$" + valorFinal.toFixed(2));