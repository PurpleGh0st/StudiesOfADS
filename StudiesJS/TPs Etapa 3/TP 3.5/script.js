let peso = parseFloat(prompt("Quantos kilos pesam os seus peixes?"));

if(peso > 50) {
  let excesso = peso - 50;
  let multa = excesso * 4;
  console.log("Você pescou " + peso + " kilos de peixe, e a multa é de R$" + multa);
} else {
  console.log("Você pescou " + peso + " kilos de peixe, e não tem multa");
}