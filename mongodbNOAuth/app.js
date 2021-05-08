const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const morgan = require('morgan') // for logging
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const appRouter = require('./routes/index')
const path = require('path')

// Load config
dotenv.config({path: './mongodbNOAuth/config/config.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

const app = express()

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
}

// Handlebars Helpers
const {formatDate} = require('./helpers/hbs')

// Handlebars
app.engine('.hbs', 
    exphbs({
        helpers: {
            formatDate,
          },
        defaultLayout: 'main', 
        extname: '.hbs'
    }))

app.set('view engine', '.hbs')
app.set('views', 'mongodbNOAuth/views')

// Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false, // don't save session if nothing is modified.
    saveUninitialized: false,  // don't create session until something is stored.
    store: MongoStore.create({ mongoUrl : process.env.MONGO_URI }), 
   // cookie: { secure: true }  // <- comments out, because it won't work without https
  }))
 
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Static folder
app.use(express.static(path.join(__dirname, 'public')))
console.log(__dirname)

// Routes
app.use('/', appRouter)
app.use('/auth', require('./routes/auth'))
app.use('/stories', require('./routes/stories'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})
