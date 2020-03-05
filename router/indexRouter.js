"use strict"
const Router = require('express').Router()
const userRouter = require('./userRouter')
const weatherRouter = require('./userRouter')

Router
    .use('/user', userRouter)
    // .use('/weather', weatherRouter)

module.exports = Router