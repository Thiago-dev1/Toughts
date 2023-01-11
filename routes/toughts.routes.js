const { Router } = require('express')
const ToughtController = require('../controller/ToughtController')

const toughtsRoutes = Router()

toughtsRoutes.get('/', ToughtController.showToughts)
toughtsRoutes.get('/dashboard', ToughtController.dashboard)
toughtsRoutes.get('/criar', ToughtController.addToughts)

module.exports = toughtsRoutes