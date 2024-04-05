function parametroVazio(parametro) {
  return parametro === null || parametro === undefined || parametro.length === 0;
}

function verificaMinCaracteres(parametro, minimo) {
  return parametro.length >= minimo;
}

function verificaMaxCaracteres(parametro, maximo) {
  return parametro.length <= maximo;
}

function verificaNumInteiro(parametro) {
  return Number.isInteger(parametro);
}

function verificaNumReal(parametro) {
  return typeof parametro === 'number' && !isNaN(parametro);
}

// Teste da função1
console.log("Teste da função parametroVazio:");
console.log(parametroVazio(null)); // Deve retornar true
console.log(parametroVazio("hello")); // Deve retornar false
console.log("\n");

// Teste da função2
console.log("Teste da função verificaMinCaracteres:");
console.log(verificaMinCaracteres("hello", 3)); // Deve retornar true
console.log(verificaMinCaracteres("hi", 5)); // Deve retornar false
console.log("\n");

// Teste da função3
console.log("Teste da função verificaMaxCaracteres:");
console.log(verificaMaxCaracteres("hello", 5)); // Deve retornar true
console.log(verificaMaxCaracteres("hello", 3)); // Deve retornar false
console.log("\n");

// Teste da função4
console.log("Teste da função verificaNumInteiro:");
console.log(verificaNumInteiro(5)); // Deve retornar true
console.log(verificaNumInteiro(5.5)); // Deve retornar false
console.log("\n");

// Teste da função5
console.log("Teste da função verificaNumReal:");
console.log(verificaNumReal(5)); // Deve retornar true
console.log(verificaNumReal("hello")); // Deve retornar false
