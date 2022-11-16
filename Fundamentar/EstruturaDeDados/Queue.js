/*
    # Queue
    Tradução de Queue é fila

    Como uma fila em uma loja ou restaurante

    Linear
    
    O primeiro a entrar na fila é o primeiro a sair

    # Conceitos

    FIFO: First In First Out
        - O primeiro elemento a entrar na fila é o primeiro a sair dela
    Front (frente) é a referencia do primeiro elemento a entrar na fila
    Back (fundo) é a referencia do último a entrar na fila

    # Queue no código

    Métodos fundamentais
        - enqueue: adicionar um elemento ao final da fila
        - dequeue: remover o primeiro elemento ao entrar na fila

    Outros métodos poderão ser implementados como size() para mostrar o tamanho da fila ou front() para pegar o primeiro elemento da fila, dentre tantos outros.
*/

// Passo 1: Modelando
class Queue {
    constructor(){
        this.data = [];
    }
    enqueue(item) {
        this.data.push( item );
        console.log( `${item} chegou na fila!`);
    }
    dequeue() {
        const item = this.data.shift();
        console.log( `${item} saiu na fila!`);
    }
}

// Passo 2: Utilizando
const fila = new Queue();
fila.enqueue("Mariana")
fila.enqueue("Mario")
fila.enqueue("Josué")
fila.enqueue("João")
fila.enqueue("Felipe")
fila.dequeue()
fila.dequeue()
fila.dequeue()
fila.dequeue()
fila.dequeue()