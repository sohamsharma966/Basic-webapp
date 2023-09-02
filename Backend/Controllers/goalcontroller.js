const asyncHandler=require("express-async-handler")
const Goal=require("../Models/goalmodel") // we use mmongoose methos on goal to create or read in database.

// @desc     Get goal
// @route    GET api/goals
// @acess    Private  
const getGoal=asyncHandler(async(req,res)=>{
    const goals=await Goal.find()   // get database through our mongoose model.
    res.status(200).json(goals)
})

// @desc     Set goal
// @route    POST api/goals
// @acess    Private  
const postGoal=asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("please add text field")
    }

    const goals=await Goal.create({
        text: req.body.text
    })

    res.status(201).json(goals)
})

// @desc     Update goal
// @route    PUT api/goals/:id
// @acess    Private  
const putGoal=asyncHandler(async(req,res)=>{
    const goals=await Goal.findById(req.params.id)
    
    if(!goals){
        res.status(400)
        throw new Error("goal not found")
    }

    const updatedGoal=await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(updatedGoal)
})

// @desc     Delete goal
// @route    DELETE api/goals
// @acess    Private  
const deleteGoal=asyncHandler(async(req,res)=>{
    const goals=await Goal.findById(req.params.id)
    
    if(!goals){
        res.status(400)
        throw new Error("goal not found")
    }

    await goals.remove()

    res.status(200).json({id: req.params.id}) //this will tell which id will get delete
})


module.exports={getGoal, postGoal, putGoal, deleteGoal}