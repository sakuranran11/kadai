const http = require('http')
const server = http.createServer((request, response) => {
    response.rawListeners('helllo')
    response.setEncoding()
})
server.listen(4000)
console.log("The server is listening...")
