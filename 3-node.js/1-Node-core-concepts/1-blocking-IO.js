const fs = require('fs');

const vegMenu = fs.readFileSync('./veg-menu.txt') // 6s
console.log(vegMenu.toString('utf8'))

const nonVegMenu = fs.readFileSync('./non-veg-menu.txt') // 4s
console.log(nonVegMenu.toString('utf8'))

console.log("do something else..")
