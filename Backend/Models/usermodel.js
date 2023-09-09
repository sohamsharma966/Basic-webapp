const mongoose=require("mongoose")
// mongoose our odm to interact with mongodb
// mongoose also used to create schema 

const userSchema=mongoose.Schema({
    name: {
        type: String,
        required: [true,"please add a name"]
    },
    email: {
        type: String,
        required: [true,"please add an email"],
        unique: true // to set it to unique.
    },
    password: {
        type: String,
        required: [true,"please add a name"]
    }
},
{
    timestamps: true // add time when it created.
})
// userSchema= field we want user to have.
// we passing object by mongoose.Schema and add our fields.

module.exports=mongoose.model("User",userSchema)