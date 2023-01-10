const { Router } = require('express')
const ToughtController = require('../controller/ToughtController')
const authenticateRoutes = require('./authenticate.routes')
const toughtsRoutes = require('./toughts.routes')

const router = Router()

router.use('/', toughtsRoutes)
router.use('/toughts' ,toughtsRoutes)
router.use(authenticateRoutes)

module.exports = router