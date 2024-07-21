const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

// app.use(express.static("public")); 
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

// setting up ejs:
app.set("view engine", "ejs");
// this path globally work.
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.listen(port, () => {
    console.log(`listning on port ${port}.`);
});

// ## passing data to EJS:
// app.get("/rolldice", (req, res) => {
//     res.render("rolldice.ejs");
// })

// ## passing data from database:
app.get("/rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1; // consider this value from database.
    res.render("rolldice.ejs", { num: diceValue });
});


// ## Example :Create a basic template for instagram page base on following route.
// app.get("/ig/:username", (req, res) => {
//     let { username } = req.params;
//     res.render("instagram.ejs", { username });
// });


// ## using Loops in ejs:
// app.get("/ig/:username", (req, res) => {
//     const followers = ["abc", "xyz", "pqr", "stu"];
//     let { username } = req.params;
//     res.render("instagram.ejs", { username, followers });
// });


// ## Instagram page with EJS:
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require('./data.json');
    const data = instaData[username];

    if (data) {
        res.render("instagram.ejs", { data });
    } else {
        res.render("error.ejs")
    }
});
