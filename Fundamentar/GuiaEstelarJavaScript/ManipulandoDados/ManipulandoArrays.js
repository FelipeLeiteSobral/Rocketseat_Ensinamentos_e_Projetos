/*
    Manipulando Arrays
*/
let techs = ["html", "css", "js", "react", "linux"]
//    1. Adicionar um item no fim
techs.push("nodejs")
console.log(techs)
//    2. Adicionar um item no começo
techs.unshift("sql")
console.log(techs)
//    3. remover do fim
techs.pop()
console.log(techs)
//    4. remover do começo
techs.shift()
console.log(techs)
//    5. pegar somente alguns elementos do array(intervalo que você deseja)
techs.slice(1,3)
console.log(techs)
//    6. remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 2)
console.log(techs)
//    7. encontrar a posição de um elemento no array
let index = techs.indexOf("html")
console.log(techs)