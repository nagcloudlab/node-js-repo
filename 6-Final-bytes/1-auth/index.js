
const { response } = require('express');
const express = require('express')
const jwt = require('jsonwebtoken');
// var session = require('express-session')

const app = express()
// app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }))


function generateAccessToken(payload) {
    return jwt.sign(payload, "asdfqwerty", { expiresIn: '30s' });
}

app.post("/auth", (req, res) => {
    //after authentication
    const user = {
        email: "nag@mail.com",
        role: 'TRAINER'
    }
    // req.session.user = user;
    // res.status(200).send("auth successful")
    const jwtToken = generateAccessToken(user)
    res.status(200).json({ access_token: jwtToken })
})

app.get("/public", (req, res) => {
    res.status(200).send("public-resource")
})

app.get("/private", (req, res) => {
    // if (!req.session.user) {
    //     res.status(403).json("unauthrozed..")
    //     return
    // }
    // console.log(req.session.user)
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log(token)
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, "asdfqwerty", (err, user) => {
        console.log(err)
        if (err) return res.sendStatus(403)
        console.log(user)
        res.status(200).send("private-resource")
    })
})

app.listen(3000, () => {
    console.log("server-up")
})