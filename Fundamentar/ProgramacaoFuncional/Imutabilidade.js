/*
    # Imutabilidade

    - Uma variável
    - Se você precisar mudar uma variável, você não muda, você cria uma nova
*/

// Exemplo JS
const cart = {
    quantity: 2,
    total: 200,
}

//bad
cart.quantity = 3

//good
const newCart = {
    ...cart, quantity: 3
}

// Exemplo em React JS
const [amount, setAmount]= useState(0)

//bad
amount = 2

//good
setAmount(2)