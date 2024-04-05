const categoria = prompt("Digite a categoria da sua carteira de motorista: (A, B, C, D ou E)").toUpperCase().trim();

if (categoria.length === 1) {
  switch (categoria) {
    case 'A': 
      alert("Você pode conduzir: Motos e triciclos");
      break;
    case 'B':
      alert("Você pode conduzir: Carros de passeio");
      break;
    case 'C':
      alert("Você pode conduzir: Veículos de carga acima de 3,5 toneladas");
      break;
    case 'D':
      alert("Você pode conduzir: Veículos com mais de 8 passageiros");
      break;
    case 'E':
      alert("Você pode conduzir: Veículos com unidade acoplada acima de 6 toneladas");
      break;
  
    default:
      alert("Categoria inválida");
      break;
  }  
} else {
    alert("Por favor, digite apenas uma categoria por vez.");
}
