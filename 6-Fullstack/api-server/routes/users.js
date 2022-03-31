var express = require('express');
var router = express.Router();
const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb+srv://user1:userone@cluster0.socov.mongodb.net/shopdb?retryWrites=true&w=majority";

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
      const usersColln = database.collection('users');
      const cursor = await usersColln.find({});
      res.status(200).json(await cursor.toArray())
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  })

module.exports = router;
