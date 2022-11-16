// querySelectorAll()
/*
    Seleciona apenas um, pode ser colocado no parenteses:
    body
    .one
    [src]
*/
const element5 = document.querySelectorAll(".one")
console.log(element5)

element5.forEach(function(el) {console.log(el)}) // não conseguiria ser feito com o GetElement...()