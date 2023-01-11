const { Router } = require('express')
const AuthController = require('../controller/AuthController')

const authenticateRoutes = Router()

authenticateRoutes.get('/entrar', AuthController.login)
authenticateRoutes.get('/cadastrar', AuthController.register)

authenticateRoutes.post('/cadastrar', AuthController.createAcconut)
authenticateRoutes.get('/sair', AuthController.logout)


module.exports = authenticateRoutes