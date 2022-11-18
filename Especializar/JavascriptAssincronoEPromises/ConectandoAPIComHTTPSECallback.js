/*
    # Conectando API com HTPPS e Callback

    irá executar a função de buscar a api depois de certo tempo, pois demanda um pouco mais de tempo e pode ser realizado depois essa tarefa

*/

const https = require("https")
const API = "https://jsonplaceholder.typicode.com/users?_limit=2"
https.get(API, res => {
    console.log(res.statusCode)
})
console.log("concetando API")