
"use strict"
const indexRouter = require('./router/indexRouter')
const errorHandling = require('./middleware/errorHandling')
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001
require('dotenv').config()

app
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use('/', indexRouter)
    .use(errorHandling)

app.listen(port, () => { console.log('will be the best team and listerning on port', port) })
