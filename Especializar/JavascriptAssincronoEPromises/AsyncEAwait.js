/*
    # Async e Await

    - Maneira de se escrever promises
    - Syntactic Sugar

*/
const promessa = new Promise((resolve, reject) => resolve("ok"))

async function start(){
    try{    
        const result = await promessa
        console.log(result)
    }
    catch{
        console.log(error)
        }
    finally{
        console.log("sempre irei executar")
        }
}

start()

/*promessa
    .then((response) => {
        console.log(response)
    })
    .catch(error =>{
        console.log(error)
    })
    .finally(() => {
        console.log("sempre irei executar")
    })
*/