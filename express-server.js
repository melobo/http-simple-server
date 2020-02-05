
const express = require('express')
const app = express()

app.get('/', (request, response) => {
    console.log('GET /')
    response.status(200)
    response.send('Hola GET')
})

app.post('/', (request, response) => {
    console.log('POST /')
    response.status(200)
    response.send('Hola POST')
})

app.get('/cesar', (request, response) => {
    console.log('GET /cesar')
    response.status(200)
    response.send('Hola Cesar GET')
})

app.post('/cesar', (request, response) => {
    console.log('POST /cesar')
    response.status(200)
    response.send('Hola Cesar POST')
})

app.get('/cesar/name', (request, response) => {
    response.send('Cesar')
})

app.get('/middlewares', (request, response, next) => {
    console.log('MIDDLEWARE 1')
    next()
}, (request, response, next) => {
    console.log('MIDDLEWARE 2')
    next()
}, (request, response, next) => {
    console.log('MIDDLEWARE 3')
    next()
}, (request, response) => {
    response.send('FIN :C')
})

app.get('/koders/:id', (request, response) => {
    console.log('KODER ID: ', request.params.id)
    response.send(`Koder (${request.params.id})`)
})

app.listen(8080, () => {
    console.log('APP listening')
})