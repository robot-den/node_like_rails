// Webserver
const express = require('express')
const app = express()
const port = 3000

// Database connection, ORM and models
const knex = require('knex')
const { Model } = require('objection')
const knexConfig = require('./knexfile')
const db = knex(knexConfig[process.env.NODE_ENV || 'development'])
Model.knex(db)

// Set view engine
app.set('view engine', 'pug')

// Middleware to parse request params before handling
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// support for DELETE and PATCH REST methods
const methodOverride = require('method-override')
app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

// Routing
const router = require('./routes')
app.use('/', router)

// Run webserver
app.listen(port, () => console.log(`Listening on port ${port}`))
