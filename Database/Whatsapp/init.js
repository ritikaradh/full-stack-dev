const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(()=>{
        console.log("connection successful!");
    })
    .catch((err)=>{
        console.log(err);
    });

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

Chat.insertMany([
    {
        from: "neha",
        to: "preeti",
        message: "send me pics.",
        createdAt : new Date(),
    },
    {
        from: "sneha",
        to: "priyansh",
        message: "send me dates.",
        createdAt : new Date(),
    },
    {
        from: "tisha",
        to: "ritika",
        message: "hey, you replaced me?",
        createdAt : new Date(),
    },
    {
        from: "ritika",
        to: "tisha",
        message: "yes i did. you were good for nothing.",
        createdAt : new Date(),
    },
    {
        from: "tisha",
        to: "ritika",
        message: "but i was you.",
        createdAt : new Date(),
    },
    {
        from: "riitka",
        to: "tisha",
        message: "no, you were just an emotional fool and now i am emotionless.",
        createdAt : new Date(),
    },
    {
        from: "tisha",
        to: "ritika",
        message: "okay.",
        createdAt : new Date(),
    }
]);