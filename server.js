var express = require("express");
var app = express();

const port = process.env.PORT || 8000;

//going to comment
var items = require('./data/items').items

//tester
app.get('/', function (req, res) {
    res.send("Hello World");
});

//the items
app.get("/items", (req, res, next) => {
    res.json(items());
});

app.listen(port, () => {
    console.log("App is running on port " + port);
});