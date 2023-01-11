function checkAuth(req, res, next) {
    
    const userId = req.session.userId

    if(!userId) {
        res.redirect('/entrar')
    }

    next()
}

module.exports = checkAuth