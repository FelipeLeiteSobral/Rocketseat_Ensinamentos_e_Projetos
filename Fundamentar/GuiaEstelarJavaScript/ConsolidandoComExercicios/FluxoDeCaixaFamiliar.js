/*
    ## Sistema de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        *   Receitas : []
        *   Despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/
let receitas = [5200.00 , 770.00 , 150.00]
let despesas = [1050.50 , 2450.00 , 3030,51]

function caixa(receitas, despesas){
    let soma_receitas = 0
    let soma_despesas = 0
    for (var elemento_receita of receitas){
        soma_receitas += elemento_receita
    }
    for (var elemento_despesa of despesas){
        soma_despesas += elemento_despesa
    }
    let caixa = soma_receitas - soma_despesas
    if(caixa < 0){
        return console.log("Seu saldo está negativo, seu fluxo está de ", caixa.toFixed(2))
    }
    else if(caixa >= 0){
        return console.log("Seu saldo está positivo, seu fluxo está de ", caixa.toFixed(2))
    }
    return console.log("Não foi possível fazer o cálculo de fluxo de caixa")
}
caixa(receitas, despesas)