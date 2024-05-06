const advogado = {
  nome: 'José',
  horasTrabalhadas: 10,
  valorHora: 30,

  calcularGanho = function calcularSalário(){
    return this.horasTrabalhadas * this.valorHora
  }
}

calcularGanho()