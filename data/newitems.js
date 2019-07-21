
var clothItems = require('./cloth/clothItems').clothItems
var leatherItems = require('./leather/leatherItems').leatherItems
var plateItems = require('./plate/plateItems').plateItems

module.exports.items = function () {

    let items = [];

    console.log('inside items')

    let cloth = clothItems();
    console.log('cloth items', cloth) //debug
    let leather = leatherItems();
    console.log('leather items', leather) //debug
    let plate = plateItems();
    console.log('plate items', plate) //debug

    cloth.forEach(element => {
        items.push(element)
    });

    leather.forEach(element => {
        items.push(element)
    });

    plate.forEach(element => {
        items.push(element)
    });

    return items;

}
