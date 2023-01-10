const { Router } = require('express')
const ToughtController = require('../controller/ToughtController')
const toughtsRoutes = require('./toughts.routes')

const router = Router()

router.use('/', ToughtController.showToughts)
router.use('/toughts' ,toughtsRoutes)


module.exports = router