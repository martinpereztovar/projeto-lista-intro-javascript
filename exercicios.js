// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
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
  const idade = anoAtual - anoDeNascimento;
  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(1);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  nome = prompt("Digite seu nome:");
  idade = Number(prompt("Digite sua idade:"));
  email = prompt("Digite seu email:");
  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  cor1 = prompt("Digite uma cor favorita:");
  cor2 = prompt("Digite outra cor favorita:");
  cor3 = prompt("Digite outra cor favorita:");

  let cores = [cor1, cor2, cor3];
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
  const getFirstElement = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = getFirstElement;

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  currentYear = Number(prompt("ano atual: "));
  birthYear = Number(prompt("ano de nascimento: "));
  idYear = Number(prompt("ano de emissao do RG: "));
  const age = currentYear - birthYear;
  let renoval = currentYear - idYear;
  let needRenoval = false;

  if (age <= 20 && renoval >= 5){
    needRenoval = true;
  }
  else if (age > 20 && age <= 50 && renoval >= 10){
    needRenoval = true;
  }
  else if(age > 50 && renoval >= 15){
    needRenoval = true;
  }
  console.log(needRenoval); 
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const multiplo400 = ano % 400 === 0; // true
  const multiplo100 = ano % 100 === 0; // false
  const multiplo4 = ano % 4 === 0; // true

  return multiplo400 || (multiplo4 && !multiplo100);
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const legalAge = prompt("Você tem mais de 18 anos? Responda as perguntas com 'Sim' ou 'não'");
  const completedHichschool = prompt("Você possui ensino médio completo?");
  const availability = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");

  console.log(legalAge === ("sim" || "Sim") && completedHichschool === ("sim" || "Sim") && availability === ("sim" || "Sim"));
}