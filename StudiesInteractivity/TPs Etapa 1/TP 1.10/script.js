const circulo = {
  raio: prompt(Number("Digite o raio do círculo: ")),
  circunferência: function calcularCircunferência(){
    return Math.PI * this.raio * 2
  },
  área: function calcularÁrea(){
    return Math.PI * (this.raio ** 2)
  }
}

console.log(circulo.circunferência().toFixed(2))
console.log(circulo.área().toFixed(2))