const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts', 'root', 'mysql', {
    host: process.env.IPDATABASE,
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso, no banco!')
} catch (err) {
    console.log('Falha ao conectar no banco ' + err)
}

module.exports = sequelize