const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

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
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chat1 = new Chat(
    {
        from: "neha",
        to: "tisha",
        message: "send me notes.",
        createdAt : new Date(),
    }
);

chat1.save()
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });

//listening
app.listen(port, ()=>{
    console.log(`app is listening at port number ${port}`);
});

//index route
app.get("/chats", async(req,res)=>{
    let chats = await Chat.find();
    res.render("index.ejs", {chats});
});

//new route
app.get("/chats/new", (req,res)=>{
    res.render("new.ejs");
});

//create route
app.post("/chats", (req,res)=>{
    let {from, to, message} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        createdAt: new Date(),
    });
    newChat.save()
        .then((res)=>{
            console.log("chat saved successfuly.")
        })
        .catch((err)=>{
            console.log("Error occured while saving chat", err);
        });
    res.redirect("/chats");
});

//Edit route
app.get("/chats/:id/edit", async(req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

//Update route
app.put("/chats/:id", async(req,res)=>{
    let {id} = req.params;
    let {message : newMsg} = req.body;
    let updatedChat =await Chat.findByIdAndUpdate(
        id, {message : newMsg}, 
        {runValidators: true, new : true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
});

//Destroy route
app.delete("/chats/:id", async(req,res)=>{
    let {id} = req.params;
    let chatDeleted = await Chat.findByIdAndDelete(id);
    console.log("chat deleted.");
    res.redirect("/chats");
});


