/*
    # Promises com axios


*/
import axios from "axios";
axios
    .get("https://api.twitter.com/")
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(error => console.log(error))