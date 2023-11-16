const numeroTabuada = document.getElementById("numeroTabuada");
const ateNumero = document.getElementById("ateNumero");
const numeroEscolhido = document.getElementById("numeroEscolhido");
const formCalcular = document.querySelector("form");
const inputs = document.querySelectorAll("input");
let listaNumeros = [];

formCalcular.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const li = document.querySelectorAll("li");
  li.forEach( (li) => {
    li.remove()
  })
  
  numeroEscolhido.innerText = numeroTabuada.value;

  calcular(ateNumero);

  inputs.forEach((input) => {
    input.value = "";
  });
});

function calcular(ateNumero) {
  for (let index = 0; index < ateNumero.value; index++) {
    let resultado = numeroTabuada.value * (index + 1);
    let resultadoFormatado = `${numeroTabuada.value} x ${
      index + 1
    } = ${resultado}\n`;
    gerarTabuada(resultadoFormatado);
    listaNumeros.push(resultado);
  }
}

function gerarTabuada(conteudo) {
  const ulTabuada = document.getElementById("tabuada");
  const textoRemover = document.getElementById("text");
  if (textoRemover) {
    textoRemover.remove();
  }

  const li = document.createElement("li");
  li.textContent = conteudo;
  ulTabuada.appendChild(li);
}
