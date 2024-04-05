function diagnosticarOrcamento (rendaMensal, gastoMoradia, gastoEducacao, gastoTransporte) {
  const percentualMoradia = (gastoMoradia / rendaMensal) * 100
  const percentualEducacao = (gastoEducacao / rendaMensal) * 100
  const percentualTransporte = (gastoTransporte / rendaMensal) * 100
    
  const orcamentoMoradia = percentualMoradia <= 30
  const orcamentoEducacao = percentualEducacao <= 20
  const orcamentoTransporte = percentualTransporte <= 15
  
  const mensagemMoradia = orcamentoMoradia ? "Dentro do orçamento recomendado" : "Está fora do orçamento recomendado"
  const mensagemEducacao = orcamentoEducacao ? "Dentro do orçamento recomendado" : "Está fora do orçamento recomendado"
  const mensagemTransporte = orcamentoTransporte ? "Dentro do orçamento recomendado" : "Está fora do orçamento recomendado"

  alert("Diagnóstico do orçamento:");
  alert(`Gasto com sua moradia: ${mensagemMoradia} - Percentual utilizado: ${percentualMoradia.toFixed(0)}%`);
  alert(`Gasto com sua educação: ${mensagemEducacao} - Percentual utilizado: ${percentualEducacao.toFixed(0)}%`);
  alert(`Gasto com seu transporte: ${mensagemTransporte} - Percentual utilizado: ${percentualTransporte.toFixed(0)}%`);
}

const rendaMensal = parseFloat(prompt("Digite sua renda mensal: "))
const gastoMoradia = parseFloat(prompt("Digite o valor gasto com moradia: "))
const gastoEducacao = parseFloat(prompt("Digite o valor gasto com educação: "))
const gastoTransporte = parseFloat(prompt("Digite o valor gasto com transporte: "))

diagnosticarOrcamento(rendaMensal, gastoMoradia, gastoEducacao, gastoTransporte)