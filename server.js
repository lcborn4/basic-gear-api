var express = require("express");
var app = express();

const port = process.env.PORT || 8000;


var items = require('./data/items').items

app.get('/', function (req, res) {
    res.send("Hello World");
});

app.get('/favicon.ico', (req, res) => res.status(204));

app.get("/url", (req, res, next) => {
    console.log('items', items)
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.listen(port, () => {
    console.log("Server running on port 3000");
});