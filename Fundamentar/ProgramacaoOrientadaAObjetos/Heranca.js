/*
    #Herança

    Pais e filhos
    Objetos podem herdar, ou estender, características bases
    Uma cópia de atributos e métodos de outra classe

    # Saiba

    Um objeto pode estender de outro objeto que pode estender de outro objeto
    Fácil reutilização de código
*/

class Veiculo {
    rodas =4;
    mover(direcao){}
    virar(direcao){}
}

class Moto extends Veiculo{
    constructor(){
        super(); // puxar atributos e métodos do pai
        this.rodas =2;
    }
}