let incremento = parseInt(prompt("Informe o valor do incremento (entre 1 e 10):"));

if (isNaN(incremento) || incremento < 1 || incremento > 10) {
    alert("Por favor, insira um valor de incremento válido entre 1 e 10.");
} else {
    let contador = 0;

    let continuar = true;
    while (continuar) {
        console.log("Valor do contador:", contador);
        let resposta = prompt("Deseja continuar incrementando o contador? (Sim/Não)").toLowerCase();
        if (resposta === "não") {
            continuar = false;
        } else if (resposta !== "sim") {
            alert("Por favor, responda com 'Sim' ou 'Não'.");
        }
        contador += incremento;
    }

    alert("O valor final do contador é: " + contador);
}
