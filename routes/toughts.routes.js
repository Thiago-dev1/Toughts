const { Router } = require('express')
const ToughtController = require('../controller/ToughtController')
const checkAuth = require('../middlewares/auth')

const toughtsRoutes = Router()

toughtsRoutes.get('/', ToughtController.showToughts)
toughtsRoutes.get('/dashboard', checkAuth, ToughtController.dashboard)
toughtsRoutes.get('/criar', checkAuth, ToughtController.addToughts)

module.exports = toughtsRoutes