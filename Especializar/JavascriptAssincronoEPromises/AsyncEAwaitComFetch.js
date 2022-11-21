/*
    # Promises com axios


fetch("https://api.github.com/users/maykbrito")
.then(response => response.json())
.then(data => fetch(data.respos_url))
.then(res => res.json)
.then(d => console.log(d))
.catch(err => console.log(err))
*/

async function start(){
    try{
        const response = await fetch(`https://api.github.com/users/maykbrito`)
        const user = await response.json();
        const reposResponse = await fetch(user.respos_url);
        const repos = await reposResponse.json();
        console.log(repos)
    }
    catch(error) {
        console.log(error);
    }
}

start()