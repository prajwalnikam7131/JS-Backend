const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override');

const port = 8080;

// for understanding data for express:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set override package
app.use(methodOverride('_method'));

// set up view/ejs folder/file:
app.set("view engines", "ejs");
app.set("views", path.join(__dirname, "views"));

// set up static files:
app.use(express.static(path.join(__dirname, "public")));

// there is no database thats why we create a array.
let posts = [
    {
        id: uuidv4(),
        username: "Prajwal",
        content: "I Love Coding!"
    },
    {
        id: uuidv4(),
        username: "Raftaar",
        content: "I Love Programming!"
    },
    {
        id: uuidv4(),
        username: "Ram",
        content: "I Love swimming!"
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts }); // posts is array
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = (req.body);
    let id = uuidv4();
    posts.push({ id, username, content });
    // res.send("Post uploading... started.");
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});


app.listen(port, () => {
    console.log(`server is listening on port : 8080`);
});
