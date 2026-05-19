const express = require("express");
const app = express();


// console.dir(app);

let port = 3000;

app.listen(port, () => {
    console.log(`app listen on port ${port}`);
})

// app.use((req, res) => {
//     console.log("Request Recieved");
//     // res.send("this is a basic response");
//     res.send({
//         name : "apple",
//         color : "red",
//     });
// });


app.get("/", (req, res) => {
    res.send("this is home path");
});

app.get("/search", (req, res) => {
    res.send("this is search path");
});

app.get("/help", (req, res) => {
    res.send("this is help path");
});

// app.get("*", (req, res) => {
//     res.send("this path does not exists");
// });

app.post("/", (req, res) => {
    res.send("you sent a post request");
});

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}!</h1>`
    res.send(htmlStr);
});

app.get("/searched", (req, res) => {
    let {q} = req.query;
    if(!q) {
        res.send("nothing searched");
    }
    res.send(`These are the results for: ${q}`);
});