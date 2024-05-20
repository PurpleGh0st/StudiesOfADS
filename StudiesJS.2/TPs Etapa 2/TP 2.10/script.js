let valor1 = parseInt(prompt('Digite o primeiro valor: '))
let valor2 = parseInt(prompt('Digite o segundo valor: '))

let res = document.querySelector('h1')

const calcular = (valor1, valor2) => {
    let res1 = valor1 * valor1
    let res2 = valor2 * valor2
    let resultado = res1 + res2

    console.log(`O resultado do quadrado de ${valor1} é ${res1} e o resultado do quadrado de ${valor2} é ${res2}. A soma dos resultados é ${resultado}.`)
    
   res.textContent = `O resultado do quadrado de ${valor1} é ${res1} e o resultado do quadrado de ${valor2} é ${res2}. A soma dos resultados é ${resultado}.`
}

calcular(valor1, valor2)