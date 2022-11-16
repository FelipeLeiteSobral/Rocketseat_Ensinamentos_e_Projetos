/*
    Function Hoisting
    
    tem a elevação, porem se for guardada em um const, var ou let haverá erro de referência (pois tetará executar algo que não é uma função mas uma variável)
*/
say_my_name()

function say_my_name(){
    console.log("Felipe")
}