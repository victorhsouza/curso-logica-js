var readline = require('readline-sync')
var numero = readline.questionInt("Informe um numero: ")

if(numero % 2 == 0){
    console.log("O numero é par")
}else{
    console.log("O numero é impar")
}