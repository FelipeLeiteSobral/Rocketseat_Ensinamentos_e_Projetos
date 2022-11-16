/*
    # Scope
    
    * Escopo determina a visibilidade de alguma variável no JS

    # Block statement


    vamos iniciar um bloco -> {
        dentro das chaves é um bloco e podemos colocar qualquer código
    } <- vamos fechar o bloco


    O bloco também cirará um novo escopo. Chamamos de "block-scoped"
*/

{
    let x = 0
    console.log(x)
}

/*
    # var

    * var é global e poderá funcionar fora de um escopo de um bloco
    * var é global, e também local
    * hoisting (eleva a variável fazendo ela ser undefined antes da execução do codigo onde a variavel realmente está)
*/
console.log("> existe x antes do bloco? ", x)
{
    var x=0
}
console.log("> existe x depois do bloco? ", x)