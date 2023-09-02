const errorHandler=(err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500 // : mean else print that

    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack // print stack: null when site is in production mode.
    })
}

module.exports={
    errorHandler
}