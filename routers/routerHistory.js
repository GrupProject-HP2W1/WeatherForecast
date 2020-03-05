const routerHistory = require('express').Router()
const HistoryController = require('../Controllers/HistoryController')

routerHistory.get('/', HistoryController.listAll)
routerHistory.post('/', HistoryController.create)
routerHistory.delete('/:id', HistoryController.delete)

module.exports = routerHistory