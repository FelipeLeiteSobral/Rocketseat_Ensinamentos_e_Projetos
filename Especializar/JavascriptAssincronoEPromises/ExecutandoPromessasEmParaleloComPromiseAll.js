/*
    # Executando Promessas em Paralelo com promise all

    a axios substitui de baixo dos panos o fetch
*/
import axios from 'axios';

Promise.all([
    axios.get("https://api.github.com/users/maykbrito"),
    axios.get("https://api.github.com/users/maykbrito/repos")
])
.then ( response => {
    console.log(response[0].data.login)
    console.log(response[1].data.length)
})
.catch(error => console.log(error.message))