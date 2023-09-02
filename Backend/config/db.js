// this file we use to connect to mongodb and we will use mongoose.
const mongoose=require("mongoose")

const connectDB=async()=>{ // all our mongoose methods are asynchronize, they return promise
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI)

        console.log(`mongoDB connected ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)  
    }
}

module.exports=connectDB