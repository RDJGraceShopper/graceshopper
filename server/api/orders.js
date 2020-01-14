const router = require('express').Router()
const {User, Order} = require('../db/models')

// SINGLE ROUTER

router.get('/:id', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.id
      },
      include: [{model: User, as: 'user'}]
    })

    res.status(200).send(order)
  } catch (err) {
    next(err)
  }
})

// GET ALL ROUTERS
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!

      // attributes: ['id', 'email'],
      include: [{model: User, as: 'user'}]
    })

    res.status(200).send(orders)
  } catch (err) {
    next(err)
  }
})

module.exports = router
