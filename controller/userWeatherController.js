"use strict"
const { User } = require('../models')
const { comparePass } = require('../helpers/comparePass')
const generateToken = require('../helpers/generateToken')


class UserController {
    static register(req, res, next) {
        const { username, email, password } = req.body
        console.log(req.body)
        User.create({ username, email, password })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                next(err)
            })


    }

    static login(req, res, next) {
        const { email, password } = req.body
        User.findOne({ where: { email: email } })
            .then(data => {
                if (comparePass(password, data.password)) {
                    const token = generateToken(data.id, data.username)
                    res.status(200).json({ token })
                } else {
                    throw (error)
                }
            })
            .catch(err => {
                const error = {
                    msg: 'wrong username / password',
                    status: 404
                }
                if (err) {
                    next(error)
                }
            })

    }
    
    static loginGoogle(req, res, next) {

    }
}



module.exports = UserController
