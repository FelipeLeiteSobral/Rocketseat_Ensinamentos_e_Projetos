/*
    # Polimorfismo

    Quando um objeto estende de outro (herança) talvez haja a necessidade de reescrever uma ou mais características (atributos e métodos) nesse novo objeto

    Recriaremos então um método (ou mais) da classe herdada

    Polimorfismo significa muitas formas
*/

class Atleta {
    peso;
    categoria;

    constructor(peso) {
        this.peso =peso;
    }

definirCategoria() {
    if (this.peso <= 50){
        this.categoria = "infantil"
    }
    else if (this.peso <= 50){
        this.categoria = "juvenil"
    }
    else {
        this.categoria = "adulto"
    }
}
}

class Lutador extends Atleta {
    constructor(peso) {
        super(peso);}

    definirCategoria() {
        if (this.peso <= 54){
            this.categoria = "pluma"
        }
        else if (this.peso <= 60){
            this.categoria = "leve"
        }
        else if (this.peso <=75){
            this.categoria = "meio-leve"
        }
        else{
            this.categoria = "pesado"
        }
    }
}