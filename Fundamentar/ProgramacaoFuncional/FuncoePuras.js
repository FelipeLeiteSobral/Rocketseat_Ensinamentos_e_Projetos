/*
    # Funções Puras

    - Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento
    - Não deverá sofrer nenhuma interferência do mundo externo
    - Se o argumento é o mesmo, p retorno não poderá ser diferente quando a função for chamada novamente
    - Não terá nenhum efeito colateral no seu código
        * Não irá modificar nenhum dado 
        * Não irá guardar nenhum estado 
*/

// Função impura

// Exemplo 1: está dependendo de dado externo que não foi passado como parâmetro
function calculateCircumference(radius) {
    return Math.PI * (radius * 2)
}

// Exemplo 2: está alterando um dado externo
let person = {
    name: "Rafael Camarada",
    age:"jovem"
}

function changeName(name) {
    person.name = name
}

// Função pura
// Exemplo 1:
const calculateCircumference = function (pi, radius) {
    return pi * (radius * 2)
}

// com arrow function
const calculateCircumference = (pi, radius) => pi * (radius * 2)

// Exemplo 2:
const changePersonName = (person, name) => 
({...person, name})