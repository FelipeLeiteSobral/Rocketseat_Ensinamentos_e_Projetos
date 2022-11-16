/*
    # Encapsulamento

    Dirigir carro       VS      Conhecer motor do carro

    - Colocar numa capsula
    - Agrupamento de funções e variáveis
    - Esconder detalhes de implementação
    - Camada de segurança para os atributos e métodos
*/

// Estrutural

let altura = 50
let largura = 60 

function calcularArea(){
    return (altura * largura)
}
let area = calcularArea()

// Orientado a Objetos
class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }
    get area(){ // area será uma funcionalidade para o Polígono
        return this.#calcularArea()
    }
    #calcularArea(){
        return this.altura * this.largura
    }
}

// criar o objeto
let poligono = new Poligono(50,60)
console.log(poligono.area) // area utilizado na relação dada ao objeto