var c = 1
var readline = require('readline-sync')
var nome = readline.question("Nome: ")
var soma = 0

while(c <= 4){
    var nota = readline.questionFloat(`Nota ${c}: `)
    while(nota < 0 || nota > 10){
        nota = readline.questionFloat("A nota deve ser entre 0 e 10: ")
    }
    soma += nota
    c++
}

var media = soma / 4

console.log(`O aluno ${nome} teve media ${media}`)