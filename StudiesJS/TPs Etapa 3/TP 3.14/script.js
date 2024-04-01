function calcularPorcentagens() {

  const votosRat = parseInt(prompt("Digite a quantidade de votos para RoboRat:"));
  const votosSuper = parseInt(prompt("Digite a quantidade de votos para SuperKeyboard:"));
  const votosInvalidos = parseInt(prompt("Digite a quantidade de votos inválidos:"));

  const votosTotais = votosRat + votosSuper + votosInvalidos

  const porcentagemRat = (votosRat / votosTotais) * 100;
  const porcentagmSuper = (votosSuper / votosTotais) * 100;
  const porcentagemInvalidas = (votosInvalidos / votosTotais) * 100;

  const porcentagemValidaRat = (votosRat / (votosTotais - votosInvalidos)) * 100;
  const porcentagemValidaSuper = (votosSuper / (votosTotais - votosInvalidos)) * 100;


  console.log(`Porcentagem de votos para RoboRat: ${porcentagemRat.toFixed(2)}%`);
  console.log(`Porcentagem de votos para SuperKeyboard: ${porcentagmSuper.toFixed(2)}%`);
  console.log(`Porcentagem de votos inválidos: ${porcentagemInvalidas.toFixed(2)}%`);
  console.log(``);
  console.log(`Porcentagem de votos para RoboRat (considerando apenas votos válidos): ${porcentagemValidaRat.toFixed(2)}%`);
  console.log(`Porcentagem de votos para SuperKeyboard (considerando apenas votos válidos): ${porcentagemValidaSuper.toFixed(2)}%`);
  console.log(``);
  console.log(`Novo mascote do time: ${votosRat > votosSuper ? 'RoboRat' : 'SuperKeyboard'}`);
}

calcularPorcentagens();