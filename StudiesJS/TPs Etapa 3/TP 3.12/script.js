altura = parseFloat(prompt('Qual a sua altura?'));
peso = parseFloat(prompt('Qual é o seu peso?'));

imc = peso / (altura * altura);

imcTot = imc.toFixed(1);
cond = 'normal'

if (imcTot > 40.0) {
  cond = 'Obesidade Grau 3'
} else if (imcTot > 35.0 && imcTot < 39.9) {
  cond = 'Obesidade Grau 2'
} else if (imcTot > 30.0 && imcTot < 34.9) {
  cond = 'Obesidade Grau 1'
} else if (imcTot > 25.0 && imcTot < 29.9) {
  cond = 'Sobrepeso'
} else if (imcTot > 18.5 && imcTot < 24.9) {
  cond = 'Normal'
} else if (imcTot > 17 && imcTot < 18.4) {
  cond = 'Baixo peso Grau 3'
} else if (imcTot > 16 && imcTot < 16.9) {
  cond = 'Baixo peso Grau 2'
} else if (imcTot < 16) {
  cond = 'Baixo peso Grau 1'
}
mensagem = 'seu imc é ' + imcTot + ' sua condição é ' + cond;

alert(mensagem);