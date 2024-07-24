const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

// set up view/ejs folder/file:
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// set up static files:
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extendec: true }));

main()
    .then((res) => {
        console.log("connection successful");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Index Route:
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", { chats });
})
// New Route:
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})
// create Route:
app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    newChat.save()
        .then((res) => {
            console.log("chat was saved.");
        })
        .catch(err => console.log(err));
    res.redirect("/chats");
})

app.get("/", (req, res) => {
    console.log("root is working.");
})

app.listen(8080, () => {
    console.log("server is listening on port 8080.");
})