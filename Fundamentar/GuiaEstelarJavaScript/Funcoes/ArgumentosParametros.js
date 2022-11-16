/*
    Functions

    Exemplo (Criar um aplicativo de frases motivacionais)
    Declaration - declaração da função
    Function statement
*/
function create_phrases(){
    console.log("Estudar é muito bom")
    console.log("Paciência e persistência")
    console.log("Revisão é a mãe do aprendizado")  
}

// Executar a função (execute, run, call, invoke)
create_phrases()

// Function expression or function anonymous
// number1 e number2 são parâmetros(parameters)
const sum = function (number1, number2){
    let total = number1 + number2
    return total
}
// 2 e 3 são argumentos (arguments)
sum(2,3) 
let number1 = 35
let number2 = 24
let soma = sum(number1, number2)
console.log(` O primeiro número é ${number1}`)
console.log(` O segundo número é ${number2}`)
console.log(` O primeiro número somado com o segundo é ${sum(number1, number2)}`)