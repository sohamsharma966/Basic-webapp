const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const asyncHandler=require("express-async-handler")
const User=require("../Models/usermodel")
const { json } = require("express")

// @desc     Register new user
// @route    Post api/users         // Register user
// @acess    Public
const registerUser=asyncHandler(async(req,res)=>{
    const{name, email, password}=req.body     // when we send request we gonna have some body data, by cosnt {} i am desctructuring it.

    if(!name || !email || !password){
        res.status(400)
        throw new Error("please add all fields")
    }

    // check if user exists
    const userexists=await User.findOne({email}) // await javascript there and check in user model if email exists?

    // if return value in userexists, then user already exist.
    if(userexists){
        res.status(400)
        throw new Error("user already exists")
    }

    // encrypt the password
    const salt=await bcrypt.genSalt(10)
    const hashedpassword=await bcrypt.hash(password,salt)

    // create user
    const user=await User.create({
        name,
        email,
        password: hashedpassword
    })

    // confirm user was created.
    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    } else{
        res.status(400)
        throw new Error("Invalid user data")
    }

})

// @desc     Autenticate a user
// @route    Post api/users/login   // Login user
// @acess    Public
const loginUser=asyncHandler(async(req,res)=>{
    const {email, password}=req.body

    // check for user email.
    const user=await User.findOne({email}) // provide database access of that email to var user.

    // check password (authentication)
    if (user && (await bcrypt.compare(password, user.password))){ // compare plane password of login password and database password
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    }else{
        res.status(400)
        throw new Error("Invalid credentials")
    }
})

// @desc     Get user data
// @route    Get api/users/me       // because we will be sending the token and get the id from that token. 
// @acess    Private                // how to protec the route we will see here.
const getme=asyncHandler(async(req,res)=>{
    const{_id, name, email}=await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        name,
        email
    })
})

// Generate JWT token
const generateToken=(id)=>{ // we gonna put user id in (id)
    return jwt.sign({id},process.env.JWT_SECRET,{    // added id as payload
        expiresIn:"30d"
    })
}

module.exports={
    registerUser,
    loginUser,
    getme
}