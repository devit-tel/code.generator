var express = require('express')
var app = express()
var api = require('./app/api')

app.use('/', api)
app.listen(3000)
