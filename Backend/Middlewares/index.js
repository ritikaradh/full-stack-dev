const express = require("express");
const app = express();
const ExpressError = require("./ExpressError.js");

const port = 8080;

const adminCheck = (req,res,next) =>{
    const { token } = req.query;
    if(token === "yesadmin"){
        next();
    }
    else{
        throw new ExpressError(403, "You are not admin");
    }
}

app.get("/admin", adminCheck, (req,res)=>{
    res.send("data");
});

//Custom Error Handling
app.use((err, req, res, next)=>{
    let {status=500, message="Internal Error"} = err;
    res.status(status).send(message);
});

app.get("/", (req,res)=>{
    res.send("Hi, I am root");
});

app.listen(port, ()=>{
    console.log(`Server is listening at Port No. ${port}`);
});


