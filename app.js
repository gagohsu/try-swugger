const express = require('express')
const path = require('path')
const body = require('body-parser')
const morgan = require('morgan')
let app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use('/docs', express.static(path.join(__dirname, 'public/dist')))

app.use(morgan('dev'))
app.use(body.json())
app.use(body.urlencoded({ extended: false }))

app.disable('x-powered-by')
app.use('/api/v1/', require('./api/v1'))
module.exports = app
