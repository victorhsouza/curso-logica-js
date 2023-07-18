var readline = require('readline-sync')

var nome = readline.question("Nome: ")
var nota1 = readline.questionFloat("Nota 1: ")
var nota2 = readline.questionFloat("Nota 2: ")

var media = (nota1 + nota2)/2
console.log()
console.log(`Nome: ${nome}`)
console.log(`Media: ${media}`)

if(media >= 6 ){
    console.log("Situação: Aprovado!")
} else if(media >= 4 && media < 6 ){
    console.log("Situação: Recuperação")
} else{
    console.log("Situação: Reprovado!")
}
