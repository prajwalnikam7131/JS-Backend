const express = require('express')
const app = express();

let port = 3000; // 8080

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

// app.use((req, res) => {
//     console.log('request received');

//     res.send("This is a basic response");
// });

app.get("/", (req, res) => {
    res.send("This is root Path.");
});
// app.get("/search", (req, res) => {
//     res.send("you are in search page.");
// });
// app.get("/login", (req, res) => {
//     res.send("you are in login page.");
// });
// app.get("*", (req, res) => {
//     res.send("This path does not exist.");
// });

// app.post("/", (req, res) => {
//     res.send("sending a post request.");
// });

// path parameters:
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params; // destructuring
    res.send(`Welcome to the page of ${username}.`);
});

// query string:
app.get("/search", (req, res) => {
    let { q } = req.query; // destructuring

    if (!q) {
        res.send("<h1>nothing search.</h1>");
    }
    res.send(`<h1>search result for query: ${q}.</h1>`);
});