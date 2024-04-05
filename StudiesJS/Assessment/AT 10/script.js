const categoria = prompt("Digite sua categoria:" + "\n" + "Criança" + "\n" + "Adolescente" + "\n" + "Jovem" + "\n" + "Adulto" + "\n" + "Idoso").toLocaleLowerCase().trim();

switch (categoria){
  case 'criança':
    alert("Sua idade é de 0 a 12 anos");
    break;
  case 'adolescente':
    alert("Sua idade é de 13 a 18 anos");
    break;
  case 'jovem':
    alert("Sua idade é de 19 a 35 anos");
    break;
  case 'adulto':
    alert("Sua idade é de 36 a 59 anos");
    break;
  case 'idoso':
    alert("Sua idade é de 60 anos ou mais");
    break;

  default:
    alert("Categoria inválida");
    break;
}