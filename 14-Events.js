/* const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// ON -> Listen an event
// EMIT
// I can have a lot of logic for one event, I can't first emit and then on because I listen for the response and the emit.
customEmitter.on('response', (name, age) => {
    console.log(`data recived from: ${name}, ${age} `);
})

customEmitter.on('response', () => {
    console.log(`other logic`);
})

customEmitter.emit('response', 'jonh', 34) */

const http = require('http');

const server = http.createServer()

server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000, () => console.log('Server running on port: 5000'))
