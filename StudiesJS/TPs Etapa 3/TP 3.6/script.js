let altura = parseFloat(prompt("Digite sua altura: ")).toFixed(2);
let sexo = prompt("Digite seu sexo: ").toLowerCase().trim();

pesoIdealH = ((72.7 * altura) - 58).toFixed(2)
pesoIdealM = ((62.1 * altura) - 44.7).toFixed(2)

/* Com if 
let mensagem;
if (sexo === "masculino") {
  mensagem = ("Seu peso ideal é: " + pesoIdealH);
} else if (sexo === "feminino") {
  mensagem = ("Seu peso ideal é: " + pesoIdealM);
} else {
  mensagem = ("Sexo inválido");
}

console.log(mensagem);
*/

/* Com ternário */
let mensagem = (sexo === "masculino") ? ("Seu peso ideal é: " + pesoIdealH) : (sexo === "feminino") ? ("Seu peso ideal é: " + pesoIdealM) : ("Sexo inválido");

console.log(mensagem);