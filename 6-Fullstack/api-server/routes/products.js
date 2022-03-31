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
    })
    .get('/', async function (req, res, next) {
        try {
            await client.connect();
            const database = client.db('shopdb');
            const productsColln = database.collection('products');
            //const cursor = await productsColln.find({});
            //res.status(200).json(await cursor.toArray())

            const cursor = await productsColln.aggregate([
                { $unwind: "$comments" },
                {
                    $lookup: {
                        from: "users",
                        localField: "comments.user_id",
                        foreignField: "_id",
                        as: "comments.user"
                    }
                },
                {
                    $unwind: {
                        path: '$comments.user'
                    }
                },
                {
                    $group: {
                        _id: "$_id",
                        comments: { $push: "$comments" }
                    }
                },
                {
                    $lookup: {
                        from: 'products',
                        localField: '_id',
                        foreignField: '_id',
                        as: "product"
                    }
                },
                {
                    $unwind: {
                        path: '$product'
                    }
                },
                {
                    $addFields: {
                        "product.comments": '$comments'
                    }
                },
                {
                    $replaceRoot: {
                        newRoot: '$product'
                    }
                }
            ])

            res.status(200).json(await cursor.toArray())

        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    })

module.exports = router;
