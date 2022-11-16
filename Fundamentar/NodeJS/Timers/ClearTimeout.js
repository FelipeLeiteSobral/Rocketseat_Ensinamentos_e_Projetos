// clearTimeout cancelar um timeOut
const timeout = 3000
const finished = () => {console.log('finished')}

let timer = setTimeout(finished, timeout)
clearTimeout(timer)