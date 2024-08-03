const express = require("express");
const app = express();

//middlewares

//logger
app.use((req,res,next)=>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path);
    console.log(req.time);
    next();
});
//similar is Morgan NPM package which is logging.

app.use((req,res,next)=>{
    console.log("Hii, I am middleware 2.");
    next();
});

//authorizing the /api/data route using middleware
const checkToken = (req,res,next) => {
    let {token} = req.query;
    if (token === "giveaccess"){
        next();
    }
    throw new Error("access denied");
}

app.get("/api/data", checkToken, (req,res)=>{
    res.send("data");
})

app.get("/", (req,res)=>{
    res.send("Hi, i am root!");
});

//404 error
app.use((req,res)=>{
    res.send("Page Not Found");
});

app.listen(8080, ()=>{
    console.log("Server listening to Port 8080");
});