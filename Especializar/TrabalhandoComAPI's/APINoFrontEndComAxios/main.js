const url = "http://localhost:5500/api"

function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

getUsers()

function addNewUsers(newUser){
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

const newUser = {
    name:'FelipeLeiteSobral',
    city:"Berlin",
    avatar:'http://picsum.photos/200/300'
}
//addNewUsers(newUser)

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data;
        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.id
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

getUser(2)

function editUser(id, editedUser) {
    axios.put(`${url}/${id}`, editedUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const editedUser = {
    name: "Joãozin",
    city: "Arapiraca",
    avatar: "https://picsum.photos/200/300"
}

editUser(2, editedUser)

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

deleteUser(14)