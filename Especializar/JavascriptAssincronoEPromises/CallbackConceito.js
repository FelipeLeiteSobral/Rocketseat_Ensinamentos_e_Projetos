/*
    # Callback Conceito

    Funções aceitam qualquer tipo de dado como argumento
*/
function imprimirDado(dado){
    console.log("outras tarefas")
    console.log(dado())
}

imprimirDado(()=>{
    return "Olá mundo!"
})
