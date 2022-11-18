/*
    # O que é uma Promise

    É a promessa de que algo acontecerá no futuro

    É um objeto JavaScript com a promessa de que algo será realizado
    É usado para operações assíncronas
        - Carregar um arquivo
        - Leitura de dados de uma API

    Uma promise poderá ser:

        Pending: Estado inicial, assim que o Objeto da promessa é iniciado
        Fulfilled: A promessa foi concluída com sucesso
        Rejected: A promessa foi rejeitada, houve um erro
        Settled: Seja com sucesso ou com erro, ela foi finalmente concluída

*Pode dar certo ou pode dar errado, mas irá acontecer

*/

// Em código
let aceitar = true
console.log("pedir uber")
const promessa = new Promise((resolve, reject) =>{
    if (aceitar){
        return resolve("carro chegou")
    }
    return reject("carro chegou")
})

promessa.then(result => console.log(result))
promessa.catch(err => console.log(err))
promessa.finally(()=> console.log("finalizada"))

console.log("aguardando")