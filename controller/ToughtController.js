const Tought = require('../models/Tought')

class ToughtController {
    static async showToughts(req, res) {
        res.render('home')
    }

}

module.exports = ToughtController