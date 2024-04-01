let lado1 = Number(prompt("Escolha o tamanho do primeiro lado:"));
let lado2 = Number(prompt("Escolha o tamanho do segundo lado:"));
let lado3 = Number(prompt("Escolha o tamanho do terceiro lado:"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  console.log("Os lados informados formam um triângulo")
} else {
  console.log("Os lados informados não formam um triângulo")
}