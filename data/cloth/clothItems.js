
var helmets = require('./helmets')
var chests = require('./chests')
var legs = require('./legs')
var boots = require('./boots')
var gauntlets = require('./gauntlets')

module.exports.clothItems = function () {

    let items = [];

    helmets.forEach(element => {
        items.push(element)
    });

    chests.forEach(element => {
        items.push(element)
    });

    legs.forEach(element => {
        items.push(element)
    });

    boots.forEach(element => {
        items.push(element)
    });

    gauntlets.forEach(element => {
        items.push(element)
    });

    return items;

};