//1) Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C.
const a = 5
const b = 8
const c = 10
const soma =
  a + b < c
    ? `A soma de (a=${a}+b=${b})=${a + b} é menor que c=${c}`
    : `A soma de (a=${a}+b=${b})=${a + b} NÃO é menor que c=${c}`
console.log(soma)

//2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos).
const prompt = require('prompt-sync')()
const nome = prompt('Digite seu nome:')
const sexo = prompt('Digite seu sexo(F ou M):').toUpperCase()
const estadoCivil = prompt('Digite seu estado civil:').toUpperCase()

if (sexo === 'F' && estadoCivil === 'CASADA') {
  prompt('Informe o tempo de casada(anos):')
} else {
  console.log('========Resposta=========')
  console.log(`Nome: ${nome}\nSexo: ${sexo}\nEstado Civil: ${estadoCivil}`)
  console.log('=======================')
}

//3) Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar.
let numero = 3
const verificacao =
  numero % 2 === 0 ? `O número ${numero} é par` : `O número ${numero} é impar`
console.log(verificacao)

//4) Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.

const A = 3
const B = 5
const resultado = A === B ? `${A + B}` : `${A * B}`
let C = resultado
console.log(`C é igual a = ${C}`)

//5) Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado.

const numeroA = -2
const result = numeroA > 0 ? numeroA * 2 : numeroA * 3
console.log(`O resultado é: ${result}`)

//6) Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são VERDADEIROS ou FALSOS.

const valor1 = false
const valor2 = false

if (valor1 === true && valor2 === true) {
  console.log('Ambos são verdadeiros')
} else if (valor1 === false && valor2 === false) {
  console.log('Ambos são falsos')
} else {
  console.log('Ambos são diferentes (verdadeiro e falso)')
}

// OU USANDO SWITCH CASE:

const combinacao = `${valor1}-${valor2}`

switch (combinacao) {
  case 'true-true':
    console.log('Ambos são VERDADEIROS.')
    break
  case 'false-false':
    console.log('Ambos são FALSOS.')
    break
  default:
    console.log('Os valores são diferentes (um verdadeiro e outro falso).')
}

//7) Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, imprimir o resultado desta operação.

const n = 3
const resposta = n % 2 === 0 ? n + 5 : n + 8
console.log(resposta)

//8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem decrescente.
const listaNumeros = [2, 13, 4]
const decrescente = listaNumeros.sort((a, b) => b - a)
console.log(decrescente)

//9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
//● para homens: (72.7 * h) – 58;
//● para mulheres: (62.1 * h) – 44.7

const altura1 = parseFloat(prompt('Sua Altura?'))
const sex0 = prompt('Seu Sexo (F OU M)?').toUpperCase()

const pesoIdeal = sex0 === 'F' ? 62.1 * altura1 - 44.7 : 72.7 * altura1 - 58

console.log(`Seu peso ideal é: ${pesoIdeal.toFixed(2)}`)

//10) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2 Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo.

//IMC em adultos Condição
//Abaixo de 18,5 Abaixo do peso
//Entre 18,5 e 25 Peso normal
//Entre 25 e 30 Acima do peso
//Acima de 30 obeso

const peso = 70
const altura = 1.65
const calculoImc = (peso / (altura * altura)).toFixed(2)

switch (true) {
  case calculoImc < 18.5:
    console.log(`IMC ${calculoImc}: Abaixo do peso.`)
    break
  case calculoImc >= 18.5 && calculoImc <= 25:
    console.log(`IMC ${calculoImc}: Peso normal.`)
    break
  case calculoImc >= 25 && calculoImc <= 30:
    console.log(`IMC ${calculoImc}: Acima do peso.`)
    break
  case calculoImc > 30:
    console.log(`IMC ${calculoImc}: Obeso.`)
    break
  default:
    console.log('Não foi possível determinar seu imc.')
}
