/*
    Function() construction

    * expressão new
    * criar novo objeto
    * this keyword

*/
function person(name, age) {
    this.nome = name
    this.idade = age
}// THIS irá criar uma propriedade para o objeto
const felipe = new person("Felipe", 24,)
const joao = new person("João", 5,)

console.log(joao)
console.log(felipe)