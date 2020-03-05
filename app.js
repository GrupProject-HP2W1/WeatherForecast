
"use strict"
const indexRouter = require('./router/indexRouter')
const errorHendling = require('./middleware/errorHandling')
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
require('dotenv').config()

app
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use('/', indexRouter)
    .use(errorHendling)

app.listen(port, () => { console.log('will be the best team and listerning on port', port) })
