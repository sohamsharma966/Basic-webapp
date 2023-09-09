// one create register user.
// other create login user.
// another create get information of user.
const express=require("express")
const router=express.Router()
const {registerUser, loginUser, getme}=require("../Controllers/usercontoller")
const {protect}=require("../Middleware/authmiddleware")

router.post("/", registerUser)
router.post("/login", loginUser)
router.get("/me", protect, getme)

module.exports=router