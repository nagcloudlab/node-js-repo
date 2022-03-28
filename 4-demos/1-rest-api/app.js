const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors=require('cors')
const sessionsRouter=require('./routes/sessions')

const app = express();

app.use(cors("*"))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/sessions",sessionsRouter)

module.exports = app;
