const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

//middlewares

//logger
// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path);
//     console.log(req.time);
//     next();
// });
//similar is Morgan NPM package which is logging.

// app.use((req,res,next)=>{
//     console.log("Hii, I am middleware 2.");
//     next();
// });

// //Custom Error Handling
// app.use((err, req, res, next) => {
//     console.log("-----ERROR-----");
//     next(err);
// });

//authorizing the /api/data route using middleware
const checkToken = (req,res,next) => {
    let {token} = req.query;
    if (token === "giveaccess"){
        next();
    }
    throw new ExpressError(401, "access denied");
};

app.get("/api/data", checkToken, (req,res)=>{
    res.send("data");
});

app.get("/", (req,res)=>{
    res.send("Hi, i am root!");
});

app.get("/err", (req,res) => {
    abcd = abcd;
});

//Custom Error Handling
app.use((err, req, res, next) => {
    let {status=500, message="Some Error Occured"} = err;
    res.status(status).send(message);
});

//404 error
// app.use((req,res)=>{
//     res.send("Page Not Found");
// });

app.listen(8080, ()=>{
    console.log("Server listening to Port 8080");
});