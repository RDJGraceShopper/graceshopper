const router = require('express').Router()
const {User, Order, Product, OrderProduct} = require('../db/models')

// SINGLE ROUTER

router.get('/:id', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.id
      },
      include: [
        // {model: User, as: 'user'},
        {model: Product, as: 'products', through: OrderProduct}
      ]
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

router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body)
    res.json(newOrder)
  } catch (error) {
    next(error)
  }
})

router.delete('/:orderId', async (req, res, next) => {
  try {
    await Order.destroy({
      where: {
        id: req.params.orderId
      }
    })
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

router.put('/:orderId', async (req, res, next) => {
  try {
    const updatedOrder = await Order.update(req.body, {
      returning: true,
      where: {
        id: req.params.orderId
      }
    })
    res.json(updatedOrder)
  } catch (error) {
    next(error)
  }
})

//ORDER OF ROUTES GROUPED BY PATHNAME
//ACCESSIBLE ONLY BY AUTHORIZED USER
//ITEMIZED ORDERS

module.exports = router
