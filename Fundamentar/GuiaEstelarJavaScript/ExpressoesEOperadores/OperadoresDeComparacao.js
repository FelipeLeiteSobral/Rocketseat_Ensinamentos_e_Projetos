/*
    Operadores de comparação

    Irá comparar valores e retornar um Boolean como resposta à comparação

    o "estritamente" levará em consideração o type do valor 
*/

let one = 1
let two = 2

// ==       igual a
console.log("1" == one)
console.log(1 == two)

//          != diferente de
console.log(1 != two)
console.log("2" != two)
console.log(2 != two)

// ===      estritamente igual
console.log( one === "1")
console.log( one === 1)

// !==      estritamente diferente de
console.log( two !== 2)
console.log( two !== "2")

// >        Maior que
console.log( one > two)

// <        Menor que
console.log( one < two)

// <=       Menor igual
console.log( one <= two)

// >=       Maior igual
console.log( one >= one)