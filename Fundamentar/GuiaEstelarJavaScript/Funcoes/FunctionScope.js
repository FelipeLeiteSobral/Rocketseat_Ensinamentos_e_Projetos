/*
    Function Scope

    caso não tenha referência no escopo atual, a variável procura no escopo anterior alguma referência
*/
let subject = "create video"

function create_thing(){
    subject = "study"
    return subject
}
console.log(subject)
console.log(create_thing(subject))
console.log(subject)

let object = "sub solo"

function create_object(object){
    object = "game"
    return object
}
console.log(object)
console.log(create_object(object))
console.log(object)