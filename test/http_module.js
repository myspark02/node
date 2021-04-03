const http = require('http')
console.log(http.METHODS)
console.log(http.STATUS_CODES)

console.log(http.globalAgent)
/*
const server = http.createServer((req, res) => {

})

http.request()
http.get() : Similar to http.request(), but automatically sets the HTTP method to GET, and calls req.end() automatically.

The HTTP module provides 5 classes:
http.Agent
http.ClientRequest
http.Server
http.ServerResponse
http.IncomingMessage
*/