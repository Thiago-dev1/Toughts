const Tought = require('../models/Tought')
const User = require('../models/User')

class ToughtController {
    static async showToughts(req, res) {

        const toughts = await Tought.findAll({raw: true, nest: true, include: [{model: User}]})

        res.render('toughts/home', { toughts }) 
    }

    static async dashboard(req, res) {
        res.render('toughts/dashboard')
    }

    static async addToughts(req, res) {
        res.render('toughts/addTought')
    }

    static async createTought(req, res) {
        const { title } = req.body
        const userId = req.session.userId

        try {
            await Tought.create({title, UserId: userId})

            res.redirect('/toughts/dashboard')
        } catch (err) {
            console.log(err)
        }
    }

}

module.exports = ToughtController