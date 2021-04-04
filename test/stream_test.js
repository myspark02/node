const http = require('http')
const fs = require('fs')

// const server = http.createServer(function(req, res) {
//   fs.readFile(__dirname + '/data.txt', (err, data) => {
//     res.end(data)
//   })
// })

// const server = http.createServer((req, res) => {
//     const stream = fs.createReadStream(__dirname + '/data.txt')
//     stream.pipe(res)
//   })
//   server.listen(4000)

  // How to create a readable stream
const Stream = require('stream')
const readableStream = new Stream.Readable()
readableStream._read = () => {}
// readableStream.push('A')


// const readableStream2 = new Stream.Readable({
//     read() {}
//   })

// readableStream2.push('Data')

const writableStream = new Stream.Writable()
writableStream._write = (chunk, encoding, next) => {
    console.log(chunk.toString())
    next()
  }

// readableStream2.pipe(writableStream)

// process.stdin.pipe(writableStream)

readableStream.pipe(writableStream)

readableStream.push('Hi!')
readableStream.push('scpark!')

// readableStream.on('readable', () => {
//     console.log(readableStream.read())
// })

// writableStream.write('hey!\n')

// writableStream.end()
// readableStream.push('Still there?')

const {Transform} = require('stream')
const TransformStream = new Transform;

TransformStream._transform = (chunk, encoding, callback) => {
    console.log(chunk.toString().toUpperCase());
    callback();
}

process.stdin.pipe(TransformStream);

if (1 == '1') console.log("1=='1'")

if (1==='1') console.log("1==='1'")

console.log(['production', 'development'].indexOf(process.env.NODE_ENV))
console.log('NODE_ENV:', process.env.NODE_ENV)