/*
    # classList

    Alterando estilos 
    add
    remove
    toggle (interruptor liga/desliga)
*/
const element1 = document.querySelector("body")
element1.classList.add("active", "green")
console.log(element1.classList)
element1.classList.remove("active")
element1.classList.toggle("active")