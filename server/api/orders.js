const router = require('express').Router()
const {User, Order} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!

      // attributes: ['id', 'email'],
      include: [{model: User, as: 'user'}]
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

module.exports = router
