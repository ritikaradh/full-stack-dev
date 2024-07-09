const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, ()=>{
    console.log("listening to port: 8080");
});

app.get("/", (req, res)=>{
    res.send("Ok!");
});

let posts = [
    {
        id: "5a",
        username: "@tisha",
        status: "Working Hard to Achieve Dreams!"
    },
    {
        id: "5b",
        username: "@ritika",
        status: "I will succeed!",
    },
    {
        id: "5c",
        username: "@teamsrishti",
        status: "We will Build Fashion Spy!"
    }
];

//index route
app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

//create route
app.get("/posts/new", (req, res) => {
    res.render("form.ejs");
});
app.post("/posts", (req, res) => {
    let { username, status } = req.body;
    let newPost = {
        username: username,
        status: status
    };
    posts.push(newPost);
    res.redirect("/posts");
});

//show route
app.get("/posts/:id", (req,res)=>{
    let { id } = req.params;
    let post = posts.find( (p) => id === p.id);
    console.log(post);
    res.render("show.ejs", {post});
});