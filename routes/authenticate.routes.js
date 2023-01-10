const { Router } = require('express')
const AuthController = require('../controller/AuthController')

const authenticateRoutes = Router()

authenticateRoutes.get('/entrar', AuthController.login)

module.exports = authenticateRoutes