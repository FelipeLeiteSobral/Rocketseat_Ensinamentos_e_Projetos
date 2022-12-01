const url = "http://localhost:5500/api"

function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data)) // transformar json em string
    .catch(err => console.error(err))
}

function getUser(){
    fetch(`${url}/1`)
    .then(response=> response.json())
    .then(userData => {
        userName.textContent = userData.name
        userCity.textContent = userData.city
        userAvatar.src = userData.avatar
    })
    .catch(err => console.error(err))
}

function addUser(newUser,){
    fetch(url, {
        method:"POST",
        body: JSON.stringify(newUser),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
    name:"Olivia Zars",
    avatar:"https://picsum.photos/200/300",
    city:"Aracaju"
}

addUser(newUser)

function updateUser(updateUser,id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const updatedUser = {
    name: "Felipe Leite",
    avatar: "https://picsum.photos/200/300", 
    city: "Aracaju"

}

function deleteUser(id){
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers:{
        "Content-Type":"application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}


updateUser(updateUser, 2)
getUsers()
getUser()
deleteUser(10)