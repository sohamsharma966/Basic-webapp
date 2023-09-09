const express=require("express")
const {getGoal, postGoal, putGoal, deleteGoal}=require("../Controllers/goalcontroller")
const {protect}=require("../Middleware/authmiddleware")

const router=express.Router() //express.router() is use to make instance, router is instance you created.

module.exports=router //make module and export it.

// 1. earlier
// router.get("/",getGoal) //we made "/" because location is already specified in server.js and getGoal is controller function.
// router.post("/",postGoal)
// router.put("/:id",putGoal)
// router.delete("/:id",deleteGoal)

// 2. now more simpler
router.route("/").get(protect, getGoal).post(protect, postGoal)
router.route("/:id").put(protect, putGoal).delete(protect, deleteGoal)