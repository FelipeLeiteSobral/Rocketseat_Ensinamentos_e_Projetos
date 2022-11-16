/*
    # Abstração

    Template ou identidade de uma classe que será construída no futuro

    - Atributos e métodos podem ser criados na classe de abstração (Superclass) MAS
    - A implementação dos métodos e atributos, só poderá ser feita na classe que irá herdar essa Abstração
*/
//Definir
class Parafuso { // Superclass abstrata
    constructor(){
        if(this.constructor === Parafuso)
        throw new Error("Classe abstrata não pode ser instânciada")
    }
    get tipo(){
        throw new Error("Método 'get tipo()' precisa ser implementado")
    }
}

class Philips extends Parafuso {
    constructor(){super();}
    get tipo(){
        return "fenda"
    }
}
class Philips extends Parafuso {
    constructor(){super();}
    get tipo(){
        return "philips"
    }
}

class Allen extends Parafuso {}

// Criar e usar
new Parafuso() // classe abstrata não pode ser instânciada
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)
console.log(allen.tipo) // Método 'get tipo()' precisa ser implementado