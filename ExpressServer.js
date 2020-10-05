const express = require("express");
const PORT = 9400;
const server = express()
// GET METHOD
server.get("/", (req, res)=>{

    res.status(200).json({report: true,
        msg: "Welcome to Express"});



    res.end();
})

server.get("/id", (req, res)=>{

    res.status(200).json({report: true,
        msg: `This is a View Method $ {req.params.id}`});
    res.end();
})

server.put("/id", (req, res)=>{

    res.status(200).json({report: true,
        msg: "This is a View Method"});
    res.end();
})





server.listen(PORT, () => {
    console.log(`My Server is Running on port: $(PORT)`)
})