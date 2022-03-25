const express = require('express')
const router = express.Router()
const _ = require('lodash')

const sessions = require('../data/sessions.json')

// query ==> GET,HEAD
// mutate ==> POST,PUT,PATCH,DELETE

router
    .get("/", (req, res, next) => {
        res.status(200).json(sessions)
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

module.exports = router;