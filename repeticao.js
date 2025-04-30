//1) Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 1 até 500
let soma = 0
for (let i = 1; i <= 500; i++) {
  if (i % 2 !== 0 && i % 3 === 0) {
    soma += i
  }
}
console.log(
  `A soma dos números ímpares múltiplos de 3 entre 1 e 500 é: ${soma}`
)

//2) Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar :
//a. A menor altura do grupo;
//b. A maior altura do grupo;
const pessoas = [
  { nome: 'Ana', altura: 1.65 },
  { nome: 'Bruno', altura: 1.72 },
  { nome: 'Carla', altura: 1.58 },
  { nome: 'Daniel', altura: 1.8 },
  { nome: 'Eduarda', altura: 1.75 },
  { nome: 'Felipe', altura: 1.68 },
  { nome: 'Giovana', altura: 1.6 },
  { nome: 'Henrique', altura: 1.77 },
  { nome: 'Isabela', altura: 1.7 },
  { nome: 'João', altura: 1.82 },
  { nome: 'Karina', altura: 1.55 },
  { nome: 'Lucas', altura: 1.66 },
  { nome: 'Marina', altura: 1.73 },
  { nome: 'Nicolas', altura: 1.79 },
  { nome: 'Olívia', altura: 1.69 }
]
//==============SOLUCAO2================//
const pessoaAlta = pessoas.reduce(
  (acumulador, pessoa) => {
    if (pessoa.altura > acumulador.pMaisAlta.altura) {
      acumulador.pMaisAlta = pessoa
    }

    if (pessoa.altura < acumulador.pMaisBaixa.altura) {
      acumulador.pMaisBaixa = pessoa
    }

    return acumulador
  },
  {
    pMaisAlta: pessoas[0],
    pMaisBaixa: pessoas[0]
  }
)
console.log('Pessoa mais alta:', pessoaAlta.pMaisAlta)
console.log('Pessoa mais Baixa:', pessoaAlta.pMaisBaixa)
//==============SOLUCAO1================//
let maisAlta = pessoas[0]
let maisBaixa = pessoas[0]
for (const pessoa of pessoas) {
  if (pessoa.altura > maisAlta.altura) {
    maisAlta = pessoa
  }

  if (pessoa.altura < maisBaixa.altura) {
    maisBaixa = pessoa
  }
}
console.log('Pessoa mais alta:', maisAlta)
console.log('Pessoa mais baixa:', maisBaixa)

//3) Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores negativos e o percentual de valores negativos e positivos.
const prompt = require('prompt-sync')()
let soma1 = 0
let qtdPositivos = 0
let qtdNegativos = 0
let totalValores = 0

while (true) {
  const valor = parseFloat(prompt('Digite um valor (ou 0 para encerrar):'))

  if (valor === 0) {
    break
  }

  soma1 += valor

  if (valor > 0) {
    qtdPositivos++
  } else if (valor < 0) {
    qtdNegativos++
  }
  totalValores++
}

const calcMedia = soma1 / totalValores
const percentualPositivo = (qtdPositivos / totalValores) * 100
const percentualNegativo = (qtdNegativos / totalValores) * 100

console.log(`Média aritmética: ${calcMedia.toFixed(2)}`)
console.log(`Quantidade de valores positivos: ${qtdPositivos}`)
console.log(`Quantidade de valores negativos: ${qtdNegativos}`)
console.log(
  `Percentual de valores positivos: ${percentualPositivo.toFixed(2)}%`
)
console.log(
  `Percentual de valores negativos: ${percentualNegativo.toFixed(2)}%`
)

//4) Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve terminar quando for lido um número negativo.

let contador0a25 = 0
let contador26a50 = 0
let contador51a75 = 0
let contador76a100 = 0

while (true) {
  const numero = parseInt(
    prompt('Digite um número (ou um número negativo para encerrar):')
  )

  if (numero < 0) {
    break
  }
  //pode ser usado switch case no lugar dos if's
  if (numero >= 0 && numero <= 25) {
    contador0a25++
  } else if (numero >= 26 && numero <= 50) {
    contador26a50++
  } else if (numero >= 51 && numero <= 75) {
    contador51a75++
  } else if (numero >= 76 && numero <= 100) {
    contador76a100++
  }
}
console.log(`Números no intervalo [0-25]: ${contador0a25}`)
console.log(`Números no intervalo [26-50]: ${contador26a50}`)
console.log(`Números no intervalo [51-75]: ${contador51a75}`)
console.log(`Números no intervalo [76-100]: ${contador76a100}`)

//5) Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos. Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos números lidos. O número que encerrará a leitura será zero.

let somaPares = 0
let somaTotais = 0
let quantidadePares = 0
let quantidadeImpares = 0
let totalValoresLidos = 0

while (true) {
  const digito = parseInt(prompt('Digite um número (ou 0 para encerrar):'))

  if (digito === 0) {
    break
  }

  somaTotais += digito
  totalValoresLidos++

  if (numero % 2 === 0) {
    somaPares += numero
    quantidadePares++
  } else {
    quantidadeImpares++
  }
}
const mediaPares = quantidadePares > 0 ? somaPares / quantidadePares : 0
const mediaGeral = totalValoresLidos > 0 ? somaTotais / totalValoresLidos : 0

console.log(`Quantidade de números pares: ${quantidadePares}`)
console.log(`Quantidade de números ímpares: ${quantidadeImpares}`)
console.log(`Média dos números pares: ${mediaPares.toFixed(2)}`)
console.log(`Média geral dos números: ${mediaGeral.toFixed(2)}`)

//6) Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200.

for (let index = 100; index < 200; index++) {
  if (index % 2 !== 0) {
    console.log(index)
  }
}

//7) Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de N. Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N.

//const N = parseInt(prompt('Digite um número de 1 a 10: '))
const N = 2

if (N >= 1 && N <= 10) {
  for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${N} = ${i * N}`)
  }
} else {
  console.log('Número inválido. Digite um valor entre 1 e 10.')
}

//8) Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em P.A. contendo 10 valores

const A = parseInt(prompt('Digite o valor inicial (A): '))
const R = parseInt(prompt('Digite a razão (R): '))

console.log('Os 10 primeiros termos da P.A. são:')
for (let i = 0; i < 10; i++) {
  const termo = A + i * R //representa a formula P.A
  console.log(termo)
}

//9) Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em P.G. contendo 10 valores.
const a = 2
const r = 3

console.log(`Sequência em P.G. com A = ${a} e R = ${r}:`)
for (let i = 0; i < 10; i++) {
  const termo2 = a * Math.pow(r, i) // fórmula da P.G.
  console.log(`Termo ${i + 1}: ${termo2}`)
}

//10) Escreva um algoritmo que leia um valor inicial A e imprima a seqüência de valores do cálculo de A! e o seu resultado. Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120

const A1 = 5
let resultado = 1
let sequencia = ''

for (let i = A1; i > 0; i--) {
  resultado *= i
  sequencia += i + (i > 1 ? ' x ' : '')
}

console.log(`${A1}! = ${sequencia} = ${resultado}`)
