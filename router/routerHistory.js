const routerHistory = require('express').Router()
const HistoryController = require('../Controllers/HistoryController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authoritation')

routerHistory
    .use(authentication)
    .get('/', authorization, HistoryController.listAll)
    .post('/', authorization, HistoryController.create)
    .delete('/:id', authorization, HistoryController.delete)

module.exports = routerHistory