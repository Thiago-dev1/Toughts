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

}

module.exports = ToughtController