const http = require('http')
const app = require('./app')

let server = http.createServer(app)
let port = 3000
server.on('error', console.log)
server.on('listening', () => console.log('server is listening on', port))

server.listen(port)
