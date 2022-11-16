// clearInterval cancelar um setInterval registrado
const timeout = 1000
const checking = () => {console.log('checking')}

let interval = setInterval(checking, timeout)

setTimeout(() => clearInterval(interval), 3000); // irá imprimir 2 vezes

