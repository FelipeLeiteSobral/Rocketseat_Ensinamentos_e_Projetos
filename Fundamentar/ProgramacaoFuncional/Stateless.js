/* 
    # Stateless 

    - Não guarda estado
    - A função só conhece dados entregues a ela
    - A resposta não poderá variar

*/

let number = 2

// Stateful function
function square(){
    return number * number
}

number = square()

// Stateless function

const square = n => n*n

console.log(square(2))