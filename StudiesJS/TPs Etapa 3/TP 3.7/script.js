let sexo = prompt("Digite o sexo: ").toLowerCase().trim();
let idade = parseInt(prompt("Qual a sua idade?"));
let viagens = parseInt(prompt("Quantas viagens você fez?"));

if (sexo === "feminino" && idade >= 35 && viagens <= 3 || sexo === "feminino" && idade >= 30 && viagens <= 2) {
  console.log("Parabéns! Você está apta para participar da promoção.");
} else if (sexo === "masculino" && idade >= 40 && viagens <= 2 || sexo === "masculino" && idade >= 35 && viagens <= 1) {
  console.log("Parabéns! Você está apto para participar da promoção.");
} else {
  console.log("Que pena! Infelizmente você não pode participar da promoção. ");
}
