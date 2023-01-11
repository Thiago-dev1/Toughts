const { hash } = require('bcryptjs')
const User = require('../models/User')

class AuthController {
    static login(req, res) {
       return res.render('auth/login')
    }

    static register(req, res) { 
       return res.render('auth/register')
    }

    static async createAcconut(req, res) {
        const { name, email, password, passwordChecks } = req.body

        const verifyPassword = password == passwordChecks

        const data = {name, email, password, passwordChecks, message: ''}

        if(!verifyPassword) {
            // req.flash('message', 'As senhas não conferem, tente novamente!')

            data.message = 'As senhas são diferentes!!'

            res.render('auth/register', {data} )
            return
        }

        const alreadyExistsEmail = await User.findOne({where: {email : email}})

        if (alreadyExistsEmail) {
            data.message = 'Email já existe tente outro!!'

            res.render('auth/register', {data} )
            return
        }

        const passwordHash = await hash(password, 8)

        try {
            const user = await User.create({name, email, password: passwordHash})
            
            req.session.userId = user.id

            req.session.save(() => {
                res.redirect('/')
            })
        } catch (err) {
            console.log(err)
        }       
    }

    static logout(req, res) {
        req.session.destroy()
        res.redirect('/entrar')
    }
}

module.exports = AuthController