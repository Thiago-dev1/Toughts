const { Router } = require('express')
const ToughtController = require('../controller/ToughtController')

const toughtsRoutes = Router()

toughtsRoutes.get('/', ToughtController.showToughts)

module.exports = toughtsRoutes