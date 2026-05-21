const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`app listen on the ${port}`)
});

app.get("/register", (req, res) => {
    const {user, password} = req.query;
    res.send(`Standard GET Request. Welcome ${user}!`);
});

app.post("/register", (req, res) => {
    res.send("Standard POST Request");
});