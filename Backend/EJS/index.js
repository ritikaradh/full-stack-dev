const express = require("express");
const app = express();

//making view directory available at the backend directory
const path = require("path");

let port = 8080;

//setting template i.e., view engine to ejs
app.set("view engine", "ejs");

//making view  available at the backend not only for EJS directory
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public/javascript")));
app.use(express.static(path.join(__dirname, "public/css")))

app.listen(port, () => {
    console.log(`port is listening at port number ${port}`);
});

// app.get("/:name", (req,res) => {
//     // let customers = ["Priya", "Ritika", "Tisha", "Anjali", "Eshita", "Munmun"];
//     // randIdx = Math.floor(Math.random()*customers.length)
//     // let name = customers[randIdx];
//     //For the time being, consider this data to be coming from the database.

//     let { name } = req.params;

//     res.render("home.ejs", {CustomerName: name});
//     console.log("home page rendered successfully.")
// });

// app.get("/fashion-spy", (req,res) => {
//     res.send("Fashion Spy- personalized for YOU!");
// });

// app.get("/recommendations", (req,res) => {
//     try{
//         res.send("Recommendations");
//     }catch(e){
//         res.send("Try again later!");
//     }  
// });


//Instagram

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    if(data){
        res.render("instagram.ejs", {data});
    }
    else{
        res.render("error.ejs");
    } 
});






