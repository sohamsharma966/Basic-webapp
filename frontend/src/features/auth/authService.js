// authservice.js is for making the http request and sending the data back and setting any data in local storage.
import axios from "axios" // use for http request, previous done by postman now within our application

const API_URL="/api/user/"

// register user
const register=async(userData)=>{
    const response = await axios.post(API_URL,userData) // we request server and put response in response var.

    if(response.data){ // axios put data inside object of respsonse's data.
        localStorage.setItem("user", JSON.stringify(response.data)) // include our token
    } 

    return response.data
}

const authService = {
    register
}

export default authService

