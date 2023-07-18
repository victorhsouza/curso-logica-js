var readline = require("readline-sync")
var nome = readline.question("Qual seu nome?")
var numero = readline.questionFloat("Digite um numero: ")
var numero2 = readline.questionFloat("Digite outro numero: ")

var soma = numero + numero2

console.log(`${nome} a soma dos valores informados é ${soma}`)