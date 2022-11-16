/*
    1. Declare uma variável de nome weight

    2. Que tipo de dado é a variável acima?

    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * is_subscribed: Boolean
    
    4. A variável student abaixo é de que tipo de dados?
    4.1 Atribua a ela as mesma propriedades e valores do exercício 3
    4.2 Mostre no console a seguinte mensagem:
    <nome> de idade <age> pesa <weight> kg.
    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

    6. Retribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

    7. Coloque no console o valor da posição zero do Array acima 

    8. Crie um novo student e coloque na posição 1 do Array

    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.
*/

// 1
let weight
// 2
weight = 56.6
console.log(typeof weight);
// 3
    let name = "Josué"
    let age = 17
    let stars = 3.5
    let is_subscribed = true
// 4
let student = {}
console.log(typeof student);

// 4.1
student = {
    name,
    age,
    stars,
    weight,
    is_subscribed
}
console.log(student);

// 4.2
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg`)

// 5
let students = []

// 6
students = [student]

// 7
console.log(students[0])

// 8
const student1 = {
    nome: "Felipe",
    age: 24,
    stars: 5,
    weight: 65,
    is_subscribed:false
}
students = students.concat(student1)
console.log(students[1])

// 9
console.log(a) // o console fará o print de undefined pois a variável var elevará(hoisting) a declaração e posteriormente fará a atualização 
var a=1 