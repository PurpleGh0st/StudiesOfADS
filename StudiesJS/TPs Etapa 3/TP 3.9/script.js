let consumidor = prompt("Qual o tipo de consumidor?" + "\n" + "1 - Residencial" + "\n" + "2 - Comercial" + "\n" + "3 - Industrial").toLowerCase().trim();
let consumo = parseFloat(prompt("Qual o consumo de água em m³?"));
const taxaR = 5;
const taxaC = 500;
const taxaI = 800;

switch (consumidor){
  case '1':
  case 'residencial':
    console.log("O valor da conta é R$" + (taxaR + consumo * 0.05).toFixed(2));
   break;
  case '2':
  case 'comercial':
    if (consumo <= 80) {
      console.log("O valor da conta é R$" + taxaC.toFixed(2));
    } else {
      console.log("O valor da conta é R$" + (taxaC + (consumo - 80) * 0.25).toFixed(2));
    }
    break;
  case '3':
  case 'industrial':
    if (consumo <= 100) {
      console.log("O valor da conta é R$" + taxaI.toFixed(2));
    } else {
      console.log("O valor da conta é R$" + (taxaI + (consumo - 100) * 0.04).toFixed(2));
    }
    break;
  default:
    console.log("Erro: Opção de consumidor inválida!");
    break;
}