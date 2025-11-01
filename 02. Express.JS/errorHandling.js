import express from "express"

const app = express()

const PORT = 3000

app.use(express.json())

// Handle uncaught exception in express app
process.on("uncaughtException", (err)=>{
    console.log(err);
    process.exit(1)
})

process.on("unhandledRejection", (reason, promise)=>{
    console.log(reason);
})

app.get("/", (req,res)=>{
    res.send("Hello Express!")
})

// Synchronous Error
app.get("/sync-error", (req,res,next)=>{
    try{
        throw new error("Something went wrong")
    }catch(error){
        next(error)
    }
})

// Asynchronous Error
app.get("/async-error", async (req,res,next)=>{
    try{
        await promise.reject(new Error("Async error occurred"))
    }catch(error){
        next(error)
    }
})

app.use((err,req,res,next)=>{
    console.error(err.message);
    console.log(err.stack);
    res.status(500).json({message: err.message})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})