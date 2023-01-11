const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts', 'root', 'mysql', {
    host: '172.18.65.8',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso, no banco!')
} catch (err) {
    console.log('Falha ao conectar no banco ' + err)
}

module.exports = sequelize