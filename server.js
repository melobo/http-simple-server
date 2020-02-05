const http = require('http')

const server = http.createServer((request, response) => {
    console.log('REQUEST :D')
    console.log('header', request.url)
    if (request.url === '/cesar') {
        response.write('Hola Cesar')
    } else {
        response.write('No eres Cesar')
    }
    response.write(request.method)
    response.end()
})

server.listen(8080, () => {
    console.log('server is listening in localhost:8080')
})