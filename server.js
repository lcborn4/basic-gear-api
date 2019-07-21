var express = require("express");
var app = express();

const port = process.env.PORT || 8000;

//going to comment
// var items = require('./data/items').items
var items = require('./data/newitems').items
var plateitems = require('./data/plate/plateitems').plateItems

// var plateHelmets = require('./data/plate/helmets')

//tester
app.get('/', function (req, res) {
    res.send("Hello World");
});

//the items
app.get("/items", (req, res, next) => {
    res.json(items());
});

//the items
app.get("/newitems", (req, res, next) => {
    res.send(plateitems());
});

app.listen(port, () => {
    console.log("App is running on port " + port);
});