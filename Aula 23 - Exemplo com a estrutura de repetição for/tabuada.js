var readline = require('readline-sync')
var numero = readline.questionInt("Insira um numero: ")

for(let c = 1; c <= 10; c++){
    var tabuada = numero * c
    console.log(`${numero} x ${c} = ${tabuada}`)
}