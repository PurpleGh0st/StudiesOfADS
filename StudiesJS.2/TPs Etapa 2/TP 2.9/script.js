let graus = prompt("Digite a temperatura em graus Celsius: ");

function temperatura(){
  let texto = document.getElementById('resultado')
  let F = 1.8 * graus + 32

  texto.innerHTML = `A temperatura em Fahrenheit é: ${F}`
}

temperatura()