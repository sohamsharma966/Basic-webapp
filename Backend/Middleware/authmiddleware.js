const jwt=require("jsonwebtoken")
const asyncHandler=require("express-async-handler")
const User=require("../Models/usermodel")

const protect=asyncHandler(async(req,res,next)=>{
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            // get token from header
            token=req.headers.authorization.split(" ")[1]
    
            // verify token
            const decode=jwt.verify(token,process.env.JWT_SECRET)
    
            // Get user from the token
            req.user=await User.findById(decode.id).select("-password") // select -password will exclude the password.
    
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error("not authorised")
        }
    }
    
    if(!token){
        res.status(401)
        throw new Error("not authorised, no token")
    }

})

module.exports={
    protect
}


