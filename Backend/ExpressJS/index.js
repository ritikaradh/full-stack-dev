const express = require("express");
const app = express();
const path = require("path");

// console.dir(app);

//functionality of express.js:
    //01. listen to requests
    //02. respond to requests
    //03. parse request
    //04. match response with routes

const port = 8080;

//Functionality No.01
//listen function is used while the server is listening for request at the port no. xyz
app.listen(port, ()=>{
    // console.log("Hii, Server-side programming started!");
    console.log(`App is listening on port ${port}`);
});


//Functionality No.02
//use function and send function is helpful for sending response from the server side to the client.
// app.use((req, res) => {
//     console.log("new incoming request");
//     res.send("Your request received.");
//     res.send("Your request is processing.Please wait.")
//     //For more, please refer to express.js api documentation.
// });


//Functionality No.04
//Routing: It is process of selecting a path for traffic in a network or between or across multiple networks.
app.get("/", (req, res) => {
    res.send("hello, i am root");
});


//Path parameters
app.get("/:username/:id", (req, res) =>{
    let { username, id } = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}!</h1>`;
    res.send(htmlStr);
});


//Query Strings
app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("No results.");
});


//Understanding POST requests:
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/formsubmission", (req,res)=> {
    res.render("form.ejs");
});

app.post("/formsubmission", (req,res) => {
    let { username , pswd} = req.body; 
    res.send(`Hello ${username.toUpperCase()}`);
});