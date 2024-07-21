const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

// setting ejs:
app.set("view engine", "ejs");

// setting a static files:
app.use(express.static("public/css"));
app.use(express.static("public/js"));


// set views directory as a global:
app.set("views", path.join(__dirname, "/views"));

// setting a staic files in globally:
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));


app.listen(port, () => {
    console.log(`server listning on port ${port}`);
});


app.get("/", (req, res) => {
    res.render('home.ejs');
});


app.get("*", (req, res) => {
    res.render('error.ejs');
});