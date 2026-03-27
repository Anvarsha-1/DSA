const express = require("express")

const app = express()
const routers = express.Router()





app.use("/",(req,res,next)=>{
    res.send("home page")
    next()
})

routers.get('/about', (req, res, next) => {
    res.send("about page")
})

app.use("/user",routers)


app.listen(3000,()=>{
    console.log("server running")
})