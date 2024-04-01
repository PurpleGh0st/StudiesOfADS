let x;

do {
  x = parseInt(prompt("Digite o valor de x:"));
} while (isNaN(x) || x <= 0 || !Number.isInteger(x));

let a = parseInt(prompt("Digite o valor de a:"));
let b = parseInt(prompt("Digite o valor de b:"));
let c = parseInt(prompt("Digite o valor de c:"));

if (x === 1) {
  
  [a, b, c] = [a, b, c].sort((x, y) => x - y);
  
  console.log("Os valores de A, B e C em ordem crescente são:");
  console.log("A: " + a);
  console.log("B: " + b);
  console.log("C: " + c);
} else if (x === 2) {
  
  [a, b, c] = [a, b, c].sort((x, y) => y - x);
  
  console.log("Os valores de A, B e C em ordem decrescente são:");
  console.log("A: " + a);
  console.log("B: " + b);
  console.log("C: " + c);
} else if (x === 3) {
  
  let max = Math.max(a, b, c);
  let min = Math.min(a, b, c);
  let mediano = [a, b, c].filter(num => num !== max && num !== min)[0];
  
  [a, b, c] = [min, max, mediano];
  
  console.log("O maior valor foi colocado entre os outros dois:");
  console.log("A: " + a);
  console.log("B: " + b);
  console.log("C: " + c);
} else {
  
  console.log("X não corresponde a nenhuma das opções especificadas.");
}


