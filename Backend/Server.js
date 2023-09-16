const path =require("path") // for deploy
const express=require("express"); //bringing module, express which is backend web framework
const dotenv=require("dotenv").config() //bringing module dotenv and calling with function config()= that will allow us to have .env file with variables in it.
//now create .env file
const colors=require("colors")
const connectDB=require("./config/db")
const {errorHandler}=require("./Middleware/errorMidleware")
const port= process.env.PORT || 5000 //port server to run on.
//2. in creating route.
const goalrouter=require("./Routes/goalroutes")
const userrouter=require("./Routes/userroutes")

connectDB()

const app=express() //express() creates the instance, The app is instance you created represents your web application.
// It provides methods like get(), post(), use(). that allow you to define *routes* and *middleware*.
// *Routes* are used to handle specific URLs,
// *Middleware* functions are used to perform tasks like parsing request bodies, handling authentication, logging, and more.
// The app instance is responsible for handling incoming HTTP requests and sending back HTTP responses.

app.use(express.json()) // on express we have body parser json()
app.use(express.urlencoded({extended:false})) // for url encoding

// 1. creating Route. (basic way)
// You can define various routes using methods like get(), post().

// app.get("/api/goals",function(req,res){        // app.get() we are listening for request of get method with route of /api/goals.
//     //res.send("Get goals") //not preferred
//     //OR
//     res.json({message: "Get goals"}) // Usualy response we send is in JSON, status we get 200.
//     //OR
//     //res.status(200).json({message: "Get goals"})
// })

// 2. creating route. (proper way)
app.use("/api/goals",goalrouter) //request will hit here and goes look into goalroutes.js.
app.use("/api/users",userrouter) //request will hit here and goes look into goalroutes.js.

// serve frontend // for deploy
if (process.env.NODE_ENV===production){  //setting up condistion if its in production
    app.use(express.static(path.join(__dirname, "../frontend/build"))) // so we need to set our static folder which is build folder

    app.get("*",(req,res)=>res.sendFile(path.resolve(__dirname,"../","frontend","build","index.html")))
}else{
    app.get("/",(req,res)=>res.send("please set to production"))
}

app.use(errorHandler)
 
// the app instance, you use its listen() method to start the server.
app.listen(port, function(){console.log(`Server start on port ${port}`)})