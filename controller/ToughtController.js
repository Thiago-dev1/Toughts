const Tought = require('../models/Tought')
const User = require('../models/User')

const { Op } = require('sequelize')
 
class ToughtController {
    static async showToughts(req, res) {

        let search = ''

        if(req.query.search) {
            search = req.query.search
        }

        let order = 'DESC'

        if(req.query.order == 'old') {
            order = 'ASC'
        } else {
            order = 'DESC'
        }

        const toughts = await Tought.findAll({
            raw: true, 
            nest: true, 
            include: [{model: User}],
            where: { title: {[Op.like]: `%${search}%`} },
            order: [['createdAt', order]]
        })

        res.render('toughts/home', { toughts, search }) 
    }

    static async dashboard(req, res) {
        const userId = req.session.userId

        const toughts = await Tought.findAll({where: {userId: userId}, raw: true})

        res.render('toughts/dashboard', {toughts})
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

    static async edit(req, res) {
        const { id } = req.params


        try {

            const tought = await Tought.findOne({where: {id: id}, raw: true})


            res.render('toughts/editTought', { tought })
        } catch (err) {
            console.log(err)
        }
    }

    static async editPost(req, res) {
        const { id } = req.params
        const { title } = req.body

        const userId = req.session.userId

        try {

            await Tought.update({title: title}, {where: {id: id, UserId: userId}})

            res.redirect('/toughts/dashboard')
        } catch (err) {
            console.log(err)
        }
    }
    
    static async delete(req, res) {
        const { id } = req.params
        const userId = req.session.userId

        try {

            await Tought.destroy({where: {id : id, UserId: userId}})

            res.redirect('/toughts/dashboard')
        } catch (err) {
            console.log(err)
        }

    }

}

module.exports = ToughtController