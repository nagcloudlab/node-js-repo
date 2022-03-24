const path = require('path')
const express = require('express')
const app = express();


// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })
// app.get("/css/bootstrap.css", (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'css/bootstrap.css'))
// })
// app.get("/images/tom-jerry-hugs.svg", (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', '/images/tom-jerry-hugs.svg'))
// })

app.use(express.static(path.join(__dirname, 'public')))
app.get("/topics", (req, res, next) => {
    let topics = [
        "javascript",
        "typescript",
        "node.js",
        "express"
    ]
    res.status(200).json(topics)
})

app.listen(3000, () => {
    console.log("server up")
})