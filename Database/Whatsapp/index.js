const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const momgoose = mongoose();
const port = 8080;

app.set("view engine", "ejs");
app.set(path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.static(path.join(__dirname, "public/css")));

main()
    .then(()=>{
        console.log("Connection Successful!");
    })
    .catch((err)=>{
        console.log("Error occured ", err);
    });

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//listening
app.listen(port, ()=>{
    console.log(`app is listening at port number ${port}`);
});

//index route
app.get("/", (req,res)=>{
    res.send("Request received.");
});