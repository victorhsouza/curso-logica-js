var sexo = "M"

if(sexo == "M"){
    console.log("Sexo masculino")
} else if(sexo == "F"){
    console.log("Sexo feminino")
}

switch(sexo){
    case "M":
        console.log("sexo masculino")
        break

    case "F":
        console.log("sexo feminino!")
        break

    default:
        console.log("Sexo invalido")
}