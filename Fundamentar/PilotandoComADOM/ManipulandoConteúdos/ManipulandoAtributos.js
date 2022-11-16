/*
    # Atributos
    
    Manipulando elementos

    setAttribute
    getAttribute
    removeAttribute 
*/
const header = document.querySelector('header');
header.setAttribute("id","header")
const headerID = document.querySelector('#header')

console.log(headerID)
console.log(header.getAttribute("id"))

header.removeAttribute("id")
console.log(header.getAttribute("id"))