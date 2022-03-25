const path = require('path')
const express = require('express')
// const logger = require('./middlewares/logger')
const morgan = require('morgan')

const todosRouter=require('./routes/todos')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// app.use(logger)
app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname, 'public')))

app.use("/todos",todosRouter)

app.listen(3000, () => {
    console.log("server up")
})