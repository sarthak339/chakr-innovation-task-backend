const express = require('express')
const bodyParser = require('body-parser')
const API_PORT = process.env.API_PORT
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const router = express.Router()

app.use(router)

const Controller = require('../controllers')
router.get('/api/core/testing', Controller.testing.testing)

module.exports = {
  init: async function () {
    app.listen(API_PORT, () => {
      console.log('Listening app on port ' + API_PORT)
    })
  },
}
