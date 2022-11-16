/*
    Callback Function

    são basicamente funções dentro de outra função
*/
function say_my_name(name) {
    console.log("antes de executar a callback")
    name()
    console.log("Depois de executar a callback")
}

say_my_name(
    function name(){
        console.log('estou em uma callback')
    }
)