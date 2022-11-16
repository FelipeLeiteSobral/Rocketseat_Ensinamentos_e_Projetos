/*
    # First-class function

    - Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções
    - A função poderá ser entendida como uma variável
*/
const say_my_name = () => {console.log('Felipe')}
const runFunction = fn => fn()
runFunction(say_my_name)
runFunction(()=> console.log('discover'))

console.log(runFunction(Math.random()))