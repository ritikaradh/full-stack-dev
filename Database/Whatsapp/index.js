const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set(path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(methodOverride("_method"));

app.use(express.urlencoded({extended: true}));


main()
    .then(()=>{
        console.log("Connection Successful!");
    })
    .catch((err)=>{
        console.log("Error occured ", err);
    });

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

// let chat1 = new Chat(
//     {
//         from: "neha",
//         to: "tisha",
//         message: "send me notes.",
//         createdAt : new Date(),
//     }
// );

// chat1.save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

//index route
app.get("/chats", async(req,res,next)=>{
    try{
        let chats = await Chat.find();
        res.render("index.ejs", {chats});
    }
    catch(err){
        next(err);
    }
});

//new route
app.get("/chats/new", async(req,res,next)=>{
    try{
        res.render("new.ejs");
    }catch(err){
        next(err);
    }
});

//create route
app.post("/chats", async(req,res, next)=>{
    try{
        let {from, to, message} = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            message: message,
            createdAt: new Date(),
        });
        await newChat.save();
        res.redirect("/chats");
    }catch(err){
        next(err);
    }    
});

function asyncWrap(fn) {
    return function (req, res, next) {
        fn (req, res, next).catch((err)=>next(err));
    };
}

//New- Show Route
app.get("/chats/:id", asyncWrap(async(req,res,next)=>{
    try{
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if(!chat){
            next(new ExpressError(404, "Chat not found"));
        }
        else{
            res.render("edit.ejs", {chat});
        }  
    }catch(err){
        next(err);
    }
}));

//Edit route
app.get("/chats/:id/edit", async(req,res,next)=>{
    try{
        let {id} = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", {chat});
    }catch(err){
        next(err);
    }
});

//Update route
app.put("/chats/:id", async(req,res,next)=>{
    try{
        let {id} = req.params;
        let {message : newMsg} = req.body;
        let updatedChat =await Chat.findByIdAndUpdate(
            id, {message : newMsg}, 
            {runValidators: true, new : true}
        );
        console.log(updatedChat);
        res.redirect("/chats");
    }catch(err){
        next(err);
    }
});

//Destroy route
app.delete("/chats/:id", async(req,res,next)=>{
    try{
        let {id} = req.params;
        let chatDeleted = await Chat.findByIdAndDelete(id);
        console.log("chat deleted.");
        res.redirect("/chats");
    }catch(err){
        next(err);
    }
});

//Custom Error Handling
app.use((err, req, res, next) => {
    let { status=500, message="Internal Error"} = err;
    res.status(status).send(message);
});

//listening
app.listen(port, ()=>{
    console.log(`app is listening at port number ${port}`);
});