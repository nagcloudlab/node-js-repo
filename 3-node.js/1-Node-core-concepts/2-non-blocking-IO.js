const fs = require('fs');


const callback = (err, data) => {
    if (err)
        throw err;
    console.log(data.toString('utf8'))
}
fs.readFile('./veg-menu.txt', callback) // 6s
fs.readFile('./non-veg-menu.txt', callback) // 4s
console.log("do something else..")
