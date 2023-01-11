const Tought = require('../models/Tought')

class ToughtController {
    static async showToughts(req, res) {
        res.render('toughts/home')
    }

    static async dashboard(req, res) {
        res.render('toughts/dashboard')
    }

}

module.exports = ToughtController