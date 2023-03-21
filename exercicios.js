// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  altura = Number(prompt("Digite a altura:"));
  largura = Number(prompt("Digite a largura:"));
  const area = altura * largura;
  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoDeNascimento) {
  anoAtual = Number(prompt("Digite o ano atual:"));
  anoDeNascimento = Number(prompt("Digite o ano de nascimento:"));
  const idade = anoAtual - anoDeNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = (peso / (altura * altura));
  return imc.toFixed(1);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  nome = prompt("Digite seu nome:");
  idade = Number(prompt("Digite sua idade:"));
  email = prompt("Digite seu email:")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`); 
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  cor1 = prompt("Digite uma cor favorita:");
  cor2 = prompt("Digite outra cor favorita:");
  cor3 = prompt("Digite outra cor favorita:");
  
  let cores = [cor1, cor2, cor3]
  console.log(cores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const maisculas = string.toUpperCase();
  return maisculas;
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const quantidade = custo / valorIngresso;
  return quantidade;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanhoIgual = string1.length === string2.length;
  return tamanhoIgual;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0];
  return primeiroElemento;
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoElemento = array[array.length - 1]; 
  return ultimoElemento;

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}