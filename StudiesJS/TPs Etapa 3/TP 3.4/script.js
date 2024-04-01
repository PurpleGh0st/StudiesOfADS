let categoria = prompt("Qual a sua categoria?\nA - 5 a 7 \nB - 8 a 11 \nC - 12 a 13 \nD - 14 a 17 \nE - Maior de 18");

let faixaEtaria;
switch(categoria.toUpperCase()) {
  case "A":
    faixaEtaria = "5 a 7";
    break;
  case "B":
    faixaEtaria = "8 a 11";
    break;
  case "C":
    faixaEtaria = "12 a 13";
    break;
  case "D":
    faixaEtaria = "14 a 17";
    break;
  case "E":
    faixaEtaria = "Maior de 18";
    break;
  default:
    faixaEtaria = "Categoria inválida";
    break;
}

alert("Sua categoria é: " + faixaEtaria);