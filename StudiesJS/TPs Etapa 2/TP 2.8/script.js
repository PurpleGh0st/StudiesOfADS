let escolhaUsuario = prompt("Escolha entre par ou ímpar:").toLowerCase();

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log("O número sorteado foi: " + numeroAleatorio);

if (escolhaUsuario === "par" && numeroAleatorio % 2 === 0) {
  console.log("Ganhou!");
} else {
  if (escolhaUsuario === "ímpar" && numeroAleatorio % 2 !== 0) {
    console.log("Ganhou!");
  } else {
    console.log("Perdeu!");
  }
} 