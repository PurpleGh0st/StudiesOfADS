let num1 = parseInt(prompt('Digite o primeiro número:'))
let num2 = parseInt(prompt('Digite o segundo número:'))
let num3 = parseInt(prompt('Digite o terceiro número:'))

const calcular = (num1, num2, num3) => {
  let res = num1 + num2 + num3
  return res
}

console.log(calcular(num1, num2, num3))