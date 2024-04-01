let cargo = prompt("Qual o seu cargo?").trim();
let salario = parseFloat(prompt("Qual o seu salário?"));

let salarioAtualizado;
switch (cargo.toLowerCase()) {
  case "estagiário": 
    salarioAtualizado = salario * 1.10;
    break
  case "trainee":
    salarioAtualizado = salario * 1.09;
    break
  case "júnior":
    salarioAtualizado = salario * 1.08;
    break
  case "pleno":
    salarioAtualizado = salario * 1.07;
    break
  case "sênior":
    salarioAtualizado = salario * 1.06;
    break
  default:
    alert("Cargo desconhecido");
    break
}

if (salarioAtualizado) {
  let diferenca = salarioAtualizado - salario;
  alert("O aumento foi de " + diferenca.toFixed(2) + " reais.");
  alert("O valor total do salário atualizado é: " + salarioAtualizado.toFixed(2) + " reais.");
} else {
  alert("Não foi possível calcular o aumento salarial.");
}