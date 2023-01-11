const { Router } = require('express')
const ToughtController = require('../controller/ToughtController')

const toughtsRoutes = Router()

toughtsRoutes.get('/', ToughtController.showToughts)
toughtsRoutes.get('/dashboard', ToughtController.dashboard)

module.exports = toughtsRoutes