const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const valor1 = parseFloat(document.getElementById("valor1").value);
  const valor2 = parseFloat(document.getElementById("valor2").value);
  const valor3 = parseFloat(document.getElementById("valor3").value);

  const resultadoCalculo = (valor2 * valor3) / valor1;

  resultado.innerHTML = `El resultado es: ${resultadoCalculo}`;
});
