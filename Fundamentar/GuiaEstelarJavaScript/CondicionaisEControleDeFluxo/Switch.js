// Switch
let expression = "2"
switch (expression){
    case"a":
        //código
        console.log("a")
        break
    case "b":
        //código
        console.log("b")
        break
    default:
        console.log("default")
        break
}


// Exemplo de calculadora
function calculate(number1, operator, number2) {
    let result
        switch(operator) {
            case "+":
                result = number1 + number2
                break
            case "=":
                result = number1 - number2
                break
            case "*":
                result = number1 * number2
                break
            case "/":
                result = number1 / number2
                break
            default:
                console.log("não implementado")
                break
        }
    return result
}
console.log(calculate(4 , "+" , 2))