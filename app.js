const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hello/:id', (req, res) => {
    let id = req.params.id;
    res.send(`Hello there, I know your ID is ${id}`)
})

app.get('/name', (req, res) => {
    let id = req.query.id
    res.send(`Hell there with id of ${id}`)
})

let server = app.listen(port, () => {
    console.log('express server is running...')
})

server.on('SIGTERM', () => {
    console.log('express server is being terminated...')
})