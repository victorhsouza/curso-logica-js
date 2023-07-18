var readline = require('readline-sync')
console.log("Lanchonete: ")
var pedido = readline.questionInt("10 - X tudo \n11- Bomba\n12 - Dog na chapa ")

switch(pedido){
    case 10:
        console.log("Lanche escolhido: X tudo")
        break
    case 11:
        console.log("Lanche escolhido: Bomba")
        break

    case 12:
        console.log("Lanche escolhido: Dog na chapa")
        break

    default:
        console.log("Pedido incorreto!")
}