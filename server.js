var express = require("express");
var app = express();
var items = require('./data/items').items

app.get('/', function (req, res) {
    res.send("Hello World");
});

app.get('/favicon.ico', (req, res) => res.status(204));

app.get("/url", (req, res, next) => {
    console.log('items', items)
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});