var readline = require('readline-sync')
var senhaCorreta = 123
for(let c = 1; c <= 3; c++){
    var senha = readline.questionInt("Insira a senha: ")
    if(senha == senhaCorreta){
        console.log("Usuario autenticado!")
        break
    } else if(senha != senhaCorreta && c < 3){
        console.log("Senha incorreta! Tente novamente!")
    }  
    
    if(senha != senhaCorreta && c == 3){
        console.log("Usuario bloqueado! Contato o adm")
    }
}

