function calcularRaiz() {
  //Cria referência aos elementos da página
  let inNumero = document.getElementById('inNumero')
  let outResposta = document.getElementById('outResposta')

  //Obtem conteúdo do campo de entrada
  let numero = Number(inNumero.value)

  //Se não preencheu ou NaN
  if (numero == 0 || isNaN(numero)) {
    alert('Informe um número válido')
    inNumero.focus()
    return
  }
  //Calcula a raiz quadrada do número
  let raiz = Math.sqrt(numero)

  //Senão, exibe mensagem que não há raiz exata para o número digitado
  if (raiz == Math.floor(raiz)) {
    outResposta.textContent = 'Raiz: ' + raiz
  } else {
    outResposta.textContent = 'Não há raiz exata para ' + numero
  }
}
//cria referência ao elemento btExibir e registra evento que irá carregar a função
let btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', calcularRaiz)