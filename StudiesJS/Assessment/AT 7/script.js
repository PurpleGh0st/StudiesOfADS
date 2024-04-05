let numero1 = parseInt(prompt("Digite o primeiro número:"))
let numero2 = parseInt(prompt("Digite o segundo número:"))
let numero3 = parseInt(prompt("Digite o terceiro número:"))

if (numero1 > numero2 && numero1 > numero3) {
  alert("O maior número é o primeiro número: " + numero1)
} else if (numero2 > numero1 && numero2 > numero3) {
  alert("O maior número é o segundo número: " + numero2)
} else {
  alert("O maior número é o terceiro número: " + numero3)
}

if (numero1 < numero2 && numero1 < numero3) {
  alert("O menor número é o primeiro número: " + numero1)
} else if (numero2 < numero1 && numero2 < numero3) {
  alert("O menor número é o segundo número: " + numero2)
} else {
  alert("O menor número é o terceiro número: " + numero3)
}
