const { Router } = require('express')

const { middleware } = require('../../libs/jwt')
let router = Router()
let data = [{
  id: 1,
  cname: '旅遊',
  cdes: '關於旅遊'
},
{
  id: 2,
  cname: '家電',
  cdes: '關於家電'
},
{
  id: 3,
  cname: '器具',
  cdes: '關於器具'
},
{
  id: 4,
  cname: '遊戲',
  cdes: '關於遊戲'
},
{
  id: 5,
  cname: '廚具',
  cdes: '關於廚具'
}
]
let i = data.length + 1
router.use(middleware)
router.get('/', (req, res, next) => {
  res.send(data)
})
router.post('/', (req, res, next) => {
  data.push({ id: i++, cname: req.body.cname, cdes: req.body.cdes })
  res.send({ message: 'ok' })
})
router.put('/:id', (req, res) => {
  data.map((d) => {
    if (d.id === req.params.id) {
      d.cname = req.body.cname
      d.cdes = req.body.cdes
    }
  })
  res.send({ message: 'ok' })
})
router.delete('/:id', (req, res) => {
  let newdata = data.filter((d) => (d.id !== req.params.id))
  data = newdata
  res.send({ message: 'ok' })
})
module.exports = router
