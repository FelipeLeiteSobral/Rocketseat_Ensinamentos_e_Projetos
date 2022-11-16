/*
Estrutura de repetição
*/
// for...in
let person = {
    name: 'Felipe',
    age: 25,
    weight: 65
}
for (let property in person){
    console.log(property)
    console.log(person[property])
}


for (let index in person.name){
    console.log(person.name[index])
}