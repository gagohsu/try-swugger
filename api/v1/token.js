const { Router } = require('express')
const jwt = require('jsonwebtoken')
const { secret } = require('../../libs/jwt')

let router = Router()

router.get('/', (req, res, next) => {
  jwt.sign({
    id: 1
  }, secret, { expiresIn: '1d' }, (err, token) => {
    if (err) {
      return next(err)
    }
    res.send({
      token
    })
  })
})
module.exports = router
