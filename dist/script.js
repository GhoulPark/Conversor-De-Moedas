function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorConvertido = parseFloat(valor);
  var valorEmReal = 0.0;

  var listaMoedas = document.getElementById("moedas");
  var moeda = listaMoedas.options[listaMoedas.selectedIndex].value;

  var mostrarResultado = document.getElementById("resultado");
  mostrarResultado.innerHTML = "Seu resultado em real é R$ " + valorEmReal;

  if (moeda == "Dolar") {
    valorEmReal = valorConvertido * 5.08;
  } else if (moeda == "Euro") {
    valorEmReal = valorConvertido * 5.54;
  } else if (moeda == "Iene") {
    valorEmReal = valorConvertido * 0.043;
  } else if (moeda == "Boliviano") {
    valorEmReal = valorConvertido * 0.74;
  } else if (moeda == "Peso Egipicio") {
    valorEmReal = valorConvertido * 0.32;
  } else if (moeda == "Peso Colombiano") {
    valorEmReal = valorConvertido * 0.0013;
  } else if (moeda == "Bitcoin") {
    valorEmReal = valorConvertido * 190.545;
  }

  console.log(valorEmReal);
  mostrarResultado.value = valorEmReal;
}