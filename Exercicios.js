// Exercícios práticos com for e arrays!

// 1) Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
// Exemplo: recebendo ["banana", "gatinho", "brócolis"] deve imprimir no console:
// índice 0, elemento "banana"
// índice 1, elemento "gatinho"
// índice 2, elemento "brócolis"

const arrei = ["banana", "gatinho", "brócolis"]

function imprimeIndiceEElemento(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`índice ${i}, elemento ${arr[i]}`)
  }
}

imprimeIndiceEElemento(arrei)

// 2) Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
// Exemplo: recebendo [10,11,12] deve retornar 33

const arrNums = [10,11,12,10,11,12,10,11,12,10,11,12]

function soma(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}

console.log(soma(arrNums))

// 3) Crie uma função que receba uma array de números inteiros e retorne outra array somente com os elementos maiores que 5.
// Exemplo, recebendo [88,55,0,2,85,81,24,12] deve retornar [ 88, 55, 85, 81, 24, 12 ]

function maioresQueCinco(arr) {
  const numerosMaiores = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      numerosMaiores.push(arr[i])
    }
  }
  return numerosMaiores
}

console.log(maioresQueCinco([88,55,0,2,85,81,24,12]))

// 4) Modifique a função anterior para que receba, além da array, o número para comparação (não deixar mais fixo como número 5).
// Exemplo, recebendo ([88,55,0,2,85,81,24,12], 20) deve retornar [ 88, 55, 85, 81, 24 ]

function maioresQueNumero(arr, num) {
  const numerosMaiores = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      numerosMaiores.push(arr[i])
    }
  }
  return numerosMaiores
}

console.log(maioresQueNumero([88,55,0,2,85,81,24,12], 20))

// 5) Crie uma função que receba uma array de números inteiros e retorne o maior número encontrado.
// Exemplo: recebendo [56, 12, 168, 66] deve retornar 168
// EXTRA: Pesquisar uma maneira iniciar com o menor número possível (dica: não é zero)

const arrMaiores = [56, 12, 168, 66]

function imprimeMaior (arr){
    let maior = 0

    for (let i=0; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i]
        }
    }
    return `o maior numero e ${maior}`
}

console.log (imprimeMaior(arrMaiores))

// 6) Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: "o menor número é X e o maior número é Y".
// Exemplo, recebendo [5, 37, 18, 59, 12, -5] a função deve retornar "o maior número é 59 e o menor número é -5"
const arrMenoresMaiores = [5,37,18,59,12,-5]

function imprimeMaiorMenor (arr){
    let maior = 0
    let menor = 0

    for (let i=0; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i]
        }
        if (arr [i] < menor){
            menor = arr [i]
        }
    }
    return `o maior numero e ${maior} e o menor numero e ${menor}`
}

console.log (imprimeMaiorMenor(arrMenoresMaiores))

//7) Crie uma função que receba 3 parâmetros: o nome de um livro, a quantidade de páginas e a autoria. Retorne um objeto no formato: {titulo: "nome do livro", paginas: "número de páginas", autoria: "nome da pessoa"}

// Exemplo: 
// objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles') 

// retorna o objeto:
// {
//   titulo: 'Antes do Baile Verde', 
//   paginas: 234,
//   autoria: 'Lygia Fagundes Telles'
// }

function objLivro(titulo, paginas, autoria) {
  return ({
    titulo, // mesma coisa que titulo: titulo
    paginas,
    autoria
  }) // parenteses para retornar o objeto diretamente
}

console.log(objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles'))

// 8) Aproveite a função acima em outra função, que deve retornar a seguinte frase: "O livro XXXX foi escrito por XXX e tem XXX páginas". Você deve utilizar a função que já está pronta, e não reescrever a lógica dela dentro dessa nova função.
function objLivro(titulo, paginas, autoria) {
  const obj= {
    titulo,
    paginas,
    autoria
  } 
  return `O livro ${obj.titulo} foi escrito por ${obj.autoria}  e tem ${obj.paginas} páginas`
}

console.log(objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles'))
// 9) Crie uma função que receba um objeto como o abaixo:

// const pessoa = {
//   nome: 'Nazaré',
//   sobrenome: 'Tedesco',
// }

// Dado um objeto que tem uma propriedade 'nome' e uma propriedade 'sobrenome', a função deve retornar um novo objeto com as mesmas propriedades que o objeto recebido e mais uma propriedade, chamada 'nomeCompleto', cujo valor é uma string com o nome e sobrenome separados por um espaço.

// Exemplo de retorno:
// {
//   nome: 'Nazaré',
//   sobrenome: 'Tedesco',
//   nomeCompleto: 'Nazaré Tedesco'
// }

function pessoas(nome,sobrenome){
  nomeCompleto = nome + " " + sobrenome
  return ({
      nome,
      sobrenome,
      nomeCompleto
  })
}

console.log(pessoas('Nazaré','Tedesco'))

// 10) Crie uma função que receba o objeto abaixo e o nome de uma das chaves, e retorne a soma de todos os elementos do array que for selecionado através da chave.

const objArrays = {
  array1: [1, 2, 3],
  array2: [5, 6, 7, 8],
  array3: [9, 9, 9],
}

function somaArray(obj, chave) {
  let total = 0
  const arr = obj[chave]
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}
// forEach não retorna nada, só faz
function somaArrayForEach(obj, chave) {
  let total = 0
  obj[chave].forEach( function(indice) {
    total += indice
  })
  return total
}
// map SEMPRE retorna uma array
function somaArrayMap(obj, chave) {
  let total = 0
  const arrResultados = obj[chave].map( function(indice) {
    total += indice
    return total
  })
  return arrResultados
}

console.log(somaArray(objArrays, 'array2')) // 26
console.log(somaArrayForEach(objArrays, 'array2')) // 26
console.log(somaArrayMap(objArrays, 'array2')) // [ 5, 11, 18, 26 ]