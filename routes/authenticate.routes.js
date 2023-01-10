const { Router } = require('express')
const AuthController = require('../controller/AuthController')

const authenticateRoutes = Router()

authenticateRoutes.get('/entrar', AuthController.login)
authenticateRoutes.get('/cadastrar', AuthController.register)


module.exports = authenticateRoutes