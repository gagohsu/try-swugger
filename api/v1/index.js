const { Router } = require('express')

let router = Router()
router.use('/token', require('./token'))
router.use('/class', require('./class'))
module.exports = router
