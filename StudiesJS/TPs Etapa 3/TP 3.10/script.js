let preco = parseFloat(prompt("Qual o preço da fita?"));
let categoria = prompt("Qual a categoria da fita?" + "\n" + "1 - Comum" + "\n" + "2 - Lançamento").toLowerCase().trim();
let diaSemana = prompt("Qual é o dia da semana?" + "\n" + "1 - Domingo" + "\n" + "2 - Segunda-feira" + "\n" + "3 - Terça-feira" + "\n" + "4 - Quarta-feira" + "\n" + "5 - Quinta-feira" + "\n" + "6 - Sexta-feira" + "\n" + "7 - Sábado").toLowerCase().trim();

if (categoria === "1" || categoria === "comum" || categoria === "2" || categoria === "lançamento") {
  switch(diaSemana) {
    case '1':
    case 'domingo':
      if(categoria === "1" || categoria === "comum") {
        console.log("O valor do aluguel da fita é: " + preco.toFixed(2));
      } else {
        console.log("O valor do aluguel da fita é: " + (preco + (preco * 0.15)));
      }
      break;
      
    case '2':
    case 'segunda-feira':
      if(categoria === "1" || categoria === "comum") {
        console.log("O valor do aluguel da fita é: " + (preco - (preco * 0.40).toFixed(2)));
      } else {
        console.log("O valor do aluguel da fita é: " + (preco + (preco * 0.15)));
      }
      break;
      
    case '3':
    case 'terça-feira':
      if(categoria === "1" || categoria === "comum") {
        console.log("O valor do aluguel da fita é: " + (preco - (preco * 0.40).toFixed(2)));
      } else {
        console.log("O valor do aluguel da fita é: " + (preco + (preco * 0.15)));
      }
      break;
      
    case '4':
    case 'quarta-feira':
      if(categoria === "1" || categoria === "comum") {
        console.log("O valor do aluguel da fita é: " + preco.toFixed(2));
      } else {
        console.log("O valor do aluguel da fita é: " + (preco + (preco * 0.15)));
      }
      break;
      
    case '5':
    case 'quinta-feira':
      if(categoria === "1" || categoria === "comum") {
        console.log("O valor do aluguel da fita é: " + (preco - (preco * 0.40).toFixed(2)));
      } else {
        console.log("O valor do aluguel da fita é: " + (preco + (preco * 0.15)));
      }
      break;
      
    case '6':
    case 'sexta-feira':
      if(categoria === "1" || categoria === "comum") {
        console.log("O valor do aluguel da fita é: " + preco.toFixed(2));
      } else {
        console.log("O valor do aluguel da fita é: " + (preco + (preco * 0.15)));
      }
      break;
      
    case '7':
    case 'sábado':
      if(categoria === "1" || categoria === "comum") {
        console.log("O valor do aluguel da fita é: " + preco.toFixed(2));
      } else {
        console.log("O valor do aluguel da fita é: " + (preco + (preco * 0.15)));
      }
      break;
      
    default:
        console.log("Erro: Dia da semana inválido");
      break;
  }
} else {
  console.log("Erro: Categoria inválida");
}

