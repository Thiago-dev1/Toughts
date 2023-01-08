const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileSttore = require('session-file-store')(session)
const flash = require('express-flash')


const conn = require('./db/conn')


const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(session({
    name: 'session',
    secret: 'banana',
    resave: false,
    saveUninitialized: false,
    store: new FileSttore({
        logFn: function() {},
        path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),
    cookie: {
        secure: false,
        maxAge: 360000,
        expires: new Date(Date.now() + 360000),
        httpOnly: true
    }
}))

app.use(flash())


app.use((req, res, next) => {
    if(req.session.userId) {
        res.locals.session = req.session
    }

    next()
})


app.get('/', (req, res) => {
    res.render('home')
})

conn
    .sync()
    .then(() =>{
        app.listen(3000, () => console.log('Server ON'))
    })
    .catch((err) => console.log(err))