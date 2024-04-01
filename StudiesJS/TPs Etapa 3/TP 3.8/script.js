let numero1 = parseInt(prompt("Digite o primeiro número:"));
let numero2 = parseInt(prompt("Digite o segundo número:"));
const operacao = prompt("Digite a operação (+, -, *, /):");

switch (operacao){
  case "+":
    console.log("Resultado: " + (numero1 + numero2));
    break; 
  case "-":
    console.log("Resultado: " + (numero1 - numero2));
    break;
  case "*":
    console.log("Resultado: " + (numero1 * numero2));
    break;
  case "/":
    if (numero2 !== 0) {
      console.log("Resultado: " + (numero1 / numero2).toFixed(2)); 
    } else {
      console.log("Erro: a divisão por zero não é permitida.");
    }
    break;
  default:
    console.log("Ops, operação inválida!");
    break;
}
