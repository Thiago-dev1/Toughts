const Tought = require('../models/Tought')

class ToughtController {
    static async showToughts(req, res) {
        res.render('toughts/home')
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