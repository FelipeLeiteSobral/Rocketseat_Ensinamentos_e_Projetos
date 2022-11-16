/*
    # Stack

    Tradução de Stack é pilha

    Como uma pilha de livros

        - Linear, um após o outro
        - p último é o primeiro a sair

    # Conceitos
    LIFO: Last In First Out
        - O último elemento a entrar na pilha, aquele elemento do topo da pilha é o primeiro a sair

    # Stack no código

    Métodos fundamentais:
        - push()        Adicionar um elemento à pilha
        - pop()         Remover o elemento do topo da pilha
        - peek()        Obter o elemento do topo da pilha

    Outros métodos poderão ser implementados como size() para mostrar o tamanho da pilha
*/
// Passo 1: Modelando
class Stack {
    constructor(){
        this.data=[];
        this.top= -1
    }
push(value) {
    this.top++
    this.data[this.top] = value
    return this.data
}
pop(){
    if(this.top < 0) return undefined
    const poppedTop = this.data[this.top]
    delete this.data[this.top]
    this.top--
    return poppedTop
}
peek() {
    return this.top >= 0 ? this.data[this.top] : undefined
    }
}

// Passo 2: Utilizando
const stack = new Stack()

//Adicionar dados
stack.push("Learning")
stack.push("Data")
console.log(stack.push("structures"))

// Remover dados
console.log(stack.pop())

// Último valor
console.log(stack.peek())