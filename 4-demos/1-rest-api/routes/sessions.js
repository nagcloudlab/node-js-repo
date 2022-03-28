const express = require('express')
const router = express.Router()
const _ = require('lodash')
const mysql = require('mysql2')
const {MongoClient} = require("mongodb");
const sessions = require('../data/sessions.json')

// create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'root123',
//     database: 'training_db'
// });

//
// const mongo_uri = 'mongodb+srv://user1:userone@cluster0.socov.mongodb.net/training_db?retryWrites=true&w=majority'
// const client = new MongoClient(mongo_uri);

// REST - API
router
    .get("/", async (req, res, next) => {

        // static-json
        res.status(200).json(sessions)

        // Mysql
        //const [rows,fields]=await connection.promise().query("select * from sessions")
        // res.status(200).json(rows)

        // MongoDB
        // try {
        //     await client.connect();
        //     const database = client.db('training_db');
        //     const sessions = database.collection('sessions');
        //     const cursor = await sessions.find()
        //     const allValues = await cursor.toArray();
        //     res.status(201).json(allValues)
        // } finally {
        //     // Ensures that the client will close when you finish/error
        //     await client.close();
        // }


    })
    .get("/:sessionId", (req, res, next) => {
        let {sessionId} = req.params
        const session = _.filter(sessions, {id: parseInt(sessionId)})[0]
        if (session) {
            res.status(200).json(session)
        } else {
            res.status(404).json({})
        }
    })
    .post("/", async (req, res, next) => {
        const body = req.body;
        const newSession = {
            id: Math.floor(Math.random() * 1000),
            ...body
        }
        sessions.push(newSession)
        res.status(201).json(newSession)

        // MySQL
        // const [rows, fields] = await connection.promise().execute(`insert into sessions(title)values ('${body.title}')`)
        // if (rows.affectedRows === 1)
        //     res.status(201).json({message: "new session saved."})

        // MongoDB
        // try {
        //     await client.connect();
        //     const database = client.db('training_db');
        //     const sessions = database.collection('sessions');
        //     const savedSession = await sessions.insertOne({
        //         ...body
        //     })
        //     res.status(201).json({message: "new session saved."})
        // } finally {
        //     // Ensures that the client will close when you finish/error
        //     await client.close();
        // }

    })
    .patch("/:sessionId", (req, res, next) => {
        let {sessionId} = req.params
        const body = req.body;
        const sessionIdx = sessions.findIndex(session => session.id === Number.parseInt(sessionId))
        const session = sessions[sessionIdx]
        const updatedSession = {
            ...session,
            ...body
        }
        sessions[sessionIdx] = updatedSession;
        res.status(200).json(updatedSession)
    })
    .delete("/:sessionId", (req, res, next) => {
        let {sessionId} = req.params
        const sessionIdx = sessions.findIndex(session => session.id === Number.parseInt(sessionId))
        sessions.splice(sessionIdx, 1)
        res.status(200).json({message: 'session deleted'})
    })


module.exports = router;