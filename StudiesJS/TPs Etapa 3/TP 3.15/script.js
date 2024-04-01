let passoDesejado = parseInt(prompt("Digite o número do passo que deseja receber as instruções:"));


function mostrarInstrucoes(passo) {
  switch (passo) {
    case 1:
      alert("1. Torre os grãos de café até atingirem a coloração desejada.");
      break;
    case 2:
      alert("2. Moa os grãos de café torrados até obter uma textura fina.");
      break;
    case 3:
      alert("3. Encha a cafeteira com água até a marca indicada.");
      break;
    case 4:
      alert("4. Coloque o filtro de papel no suporte e adicione a quantidade desejada de café moído.");
      break;
    case 5:
      alert("5. Feche o compartimento do filtro e coloque a jarra na base da cafeteira.");
      break;
    case 6:
      alert("6. Ligue a cafeteira e aguarde até que o café seja feito.");
      break;
    case 7:
      alert("7. Desligue a cafeteira e aguarde alguns minutos para que o café esfrie um pouco.");
      break;
    case 8:
      alert("8. Sirva o café em xícaras.");
      break;
    
    default:
      alert("Passo não encontrado. Por favor, escolha um número de passo válido.");
      break;
  }
}

for (let passo = passoDesejado; passo <= 8; passo++) {
  mostrarInstrucoes(passo);
}