function obterHoraAtual(){
  let dataAtual = new Date();
  let hora = dataAtual.getHours();
  let minuto = dataAtual.getMinutes();
  let segundo = dataAtual.getSeconds();
  
  return `${hora}:${minuto}:${segundo}`;
}

const horaAtual = obterHoraAtual();
alert("Horário atual: " + horaAtual);