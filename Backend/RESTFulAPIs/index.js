const express = require("express");
const app = express();
const path = require("path");
const { v4 : uuidv4 } = require("uuid");
const port = 8080;
const methodOverride = require('method-override');

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'))


app.listen(port, ()=>{
    console.log("listening to port: 8080");
});

app.get("/", (req, res)=>{
    res.send("Ok!");
});

let posts = [
    {
        id: uuidv4(),
        username: "@tisha",
        status: "Working Hard to Achieve Dreams!"
    },
    {
        id: uuidv4(),
        username: "@ritika",
        status: "I will succeed!",
    },
    {
        id: uuidv4(),
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
        id: uuidv4(),
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

//patch route
app.patch("/posts/:id", (req, res)=> {
    let { id } = req.params;
    let newStatus = req.body.status;
    let post = posts.find( (p) => id  === p.id);
    post.status = newStatus;
    console.log(post);
    res.redirect("/posts")
    // res.send("ok.")
});

//update route
app.get("/posts/:id/edit", (req, res)=>{
    let { id } = req.params;
    let post = posts.find( (p) => id === p.id);
    res.render("edit.ejs", { post });
});

//destroy route
app.delete("/posts/:id", (req, res)=>{
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});


