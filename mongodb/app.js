const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

const app = express()

// Import Routes
const postsRoute = require('./routes/posts')


//Middlewares
/*
app.use('/posts', () =>{
    console.log('Middleware for posts request...')
})
*/
app.use(cors())
app.use(bodyParser.json())
app.use('/posts', postsRoute)


// ROUTES
app.get('/', (req, res) => {
    res.send('Hello Node.js & MongoDB')
})


// Connect to DB

mongoose.connect(process.env.DB_URL, {useNewUrlParser:true, useUnifiedTopology:true}, ()=> {
    console.log('Connected to DB!!')
})

// Start Server and Listening to Client Requests
const port = 3000
app.listen(port);