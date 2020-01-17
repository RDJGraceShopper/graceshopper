const router = require('express').Router()
const {OrderProduct} = require('../db/models')
module.exports = router

router.get('/:orderId', async (req, res, next) => {
  const order = await OrderProduct.findAll({
    where: {
      id: req.params.orderId
    }
  })
  res.json(order)
})

router.post('/', async (req, res, next) => {
  try {
    delete req.body.id

    let newOrderItem = await OrderProduct.create(req.body)
    res.status(201).send({id: newOrderItem.id})
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    let orderItemToDelete = await OrderProduct.findByPk(req.params.id)

    if (!orderItemToDelete) throw new Error(`Order item not found`)
    else {
      await orderItemToDelete.destroy()
      res.status(204).send()
    }
  } catch (error) {
    next(error)
  }
})
// Transactions per order route

module.exports = router
