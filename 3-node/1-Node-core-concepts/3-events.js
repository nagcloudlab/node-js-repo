

const EventEmitter = require('events').EventEmitter


//--------------------------------------------------
// door
//--------------------------------------------------

class Door extends EventEmitter {
    open() {
        console.log("door opened..")
        this.emit('open', null, { number: 1, floor: 2 })
    }
    close() {
        console.log("door closed..")
        this.emit('close', null, { number: 1, floor: 2 })
    }
}

const door1 = new Door();

//--------------------------------------------------
// light
//--------------------------------------------------

door1.on('open', (err, data) => {
    if (err) throw err;
    let { number, floor } = data;
    console.log(`light ON - number : ${number} - floor: ${floor}`)
})
door1.on('close', (err, data) => {
    if (err) throw err;
    let { number, floor } = data;
    console.log(`light OFF - number : ${number} - floor: ${floor}`)
})
//--------------------------------------------------
// fan
//--------------------------------------------------

door1.on('open', (err, data) => {
    if (err) throw err;
    let { number, floor } = data;
    console.log(`fan ON - number : ${number} - floor: ${floor}`)
})
door1.on('close', (err, data) => {
    if (err) throw err;
    let { number, floor } = data;
    console.log(`fan OFF - number : ${number} - floor: ${floor}`)
})

//--------------------------------------------------

setTimeout(() => {
    door1.open()
    setTimeout(() => {
        door1.close()
    }, 2000)
}, 2000)

//--------------------------------------------------

// every action in node.js is an event

// e.g

// file-open
// file-close
// request
// .....

//--------------------------------------------------

