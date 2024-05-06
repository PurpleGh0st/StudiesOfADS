const notas =[]

notas.push(10,5,6,8,7,3);
const notasFatiadas = notas.slice(2,4);

document.write("tamanho do array: " + notas.length + "<br>");
document.write("Terceiro item do array: " + notasFatiadas[0] + "<br>");
document.write("Quarto item do array: " + notasFatiadas[1] + "<br>");

console.log("tamanho array: " + notas.length);
console.log("Terceiro item do array: " + notasFatiadas[0]);
console.log("Quarto item do array: " +notasFatiadas[1]);
console.log("Espalhamento do array: ", ...notas);
console.log("Array completo: " + notas);

const notasReversas = notas.slice().reverse();
console.log("Array notas invertido:", notasReversas);

const NotasOrdenadas = notas.slice().sort((a, b) => a - b);
console.log("Array notas em ordem crescente:", NotasOrdenadas);
