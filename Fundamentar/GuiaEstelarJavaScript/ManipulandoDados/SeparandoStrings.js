/*
    Manipulando Strings e Arrays

    Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque "_"
    *       .split      --> irá separar o texto na letra ou espaço desejado
*/
let phrase = "Eu quero um teste"
let my_array = phrase.split(" ")
let this_array = phrase.split("e") 
console.log(my_array, this_array)
let phrase_with_underscore = my_array.join("_")
console.log(phrase_with_underscore)