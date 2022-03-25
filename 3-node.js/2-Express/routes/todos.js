const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router()

const todos = [
    {id: 1, title: 'todo-1', completed: false},
    {id: 2, title: 'todo-2', completed: true},
    {id: 3, title: 'todo-3', completed: false},
    {id: 4, title: 'todo-4', completed: false},
    {id: 5, title: 'todo-5', completed: false},
]

router
    .route("/")
    .get((req, res, next) => {
        const {limit} = req.query
        if (!limit) {
            // res.status(200).json(todos)
            res.render('todos',{todos}) // ssr
        } else {
            res.status(200).json(todos.slice(0, limit))

        }
    })
    .post((req, res, next) => {
        const body = req.body
        let todo = {
            id: todos.length + 1,
            title: body.title,
            completed: false
        }
        todos.push(todo)
        res.status(201).json(todo)
    })

router.param("id", (req, res, next) => {
    const {id} = req.params
    req.todoId = Number.parseInt(id)
    next()
})

router
    .route("/:id")
    .get((req, res, next) => {
        const {id} = req.params
        const todo = todos.find(todo => todo.id === req.todoId)
        if (todo)
            res.status(200).json(todo)
        else
            res.status(404).json({message: "todo not found"})
    })
    .delete((req, res, next) => {
        const idx = todos.findIndex(todo => todo.id === req.todoId)
        if (idx !== -1) {
            todos.splice(idx, 1)
            res.status(200).json({message: 'deleted'})
        } else {
            res.status(404).json({message: 'todo not found'})
        }
    })

module.exports = router;


