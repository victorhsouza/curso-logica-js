function situacaoAluno(media){
    if(media >= 6){
        return "Aprovado"
    
    } else if(media >= 4){
        return "Recuperação"
    } else{
        return "Reprovado"
    }
}


var readline = require('readline-sync')
var soma = 0
var nome = readline.question("Nome: ")

for(let c = 1; c <= 4; c++){
    var nota = readline.questionFloat(`Nota ${c}: `)
    soma+=nota
}

var media = soma / 4
var situacao = situacaoAluno(media)

console.log("Nome: " + nome)
console.log("Media: " + media)
console.log("Situacao: " + situacao)

