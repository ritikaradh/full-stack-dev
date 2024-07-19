const mongoose = require("mongoose");

main()
 .then((res) =>{
    console.log("connection successful!");
    console.log(typeof(res));
 })
 .catch((err) => {
    console.log("error");
 });

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number
});