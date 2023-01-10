const Tought = require('../models/Tought')

class ToughtController {
    static async showToughts(req, res) {
        res.render('toughts/home')
    }

}

module.exports = ToughtController