var express = require('express');
var router = express.Router();
const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb://localhost:27017";
// Create a new MongoClient
const client = new MongoClient(uri);

router
  .post('/', async function (req, res, next) {
    const reqBody = req.body
    try {
      await client.connect();
      const database = client.db('shopdb');
      const users = database.collection('users');
      const user = await users.insertOne({ ...reqBody });
      console.log(user);
      res.status(201).json(user)
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  })
  .get('/', async function (req, res, next) {
    try {
      await client.connect();
      const database = client.db('shopdb');
      const users = database.collection('users');
      const cursor = await users.find({});
      res.status(200).json(await cursor.toArray())
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  })

module.exports = router;
