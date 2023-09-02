// where we define schema, which will gonna be field for particular resource. like= text field, id.
const mongoose=require("mongoose")

const goalschema=mongoose.Schema({
    text:{
        type: String,
        required: [true, "please add a text value"]
    }
},
{
    timestamps: true
})

module.exports=mongoose.model("goal",goalschema)