const jwt = require('jsonwebtoken')
const secret = 'jljosiajfosjfpjvcpjsdpfojpsdjfsjdfp'

module.exports.secret = secret

module.exports.middleware = (req, res, next) => {
  let token = req.get('Authorization')
  jwt.verify(token, secret, (err, payload) => {
    if (err) {
      res.status(401)
      res.send({
        message: 'err'
      })
      return
    };
    req.user = {
      id: payload.id
    }
    next()
  })
}
