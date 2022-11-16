// setTimeout rodar uma função depois de X milissegundos
const timeout = 3000
const finished = () => {console.log('finished')}

setTimeout(finished, timeout)
console.log("Mostrar")