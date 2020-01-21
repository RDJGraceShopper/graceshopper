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

// adding new items to order, increasing quantity of order
router.post('/', async (req, res, next) => {
  try {
    // check if order item already exists
    let oldOrderItem = await OrderProduct.findOne({
      where: {
        orderId: req.body.orderId,
        productId: req.body.productId
      }
    })

    // if an item exists, update its quantity by 1
    if (oldOrderItem) {
      await oldOrderItem.update({
        quantity: oldOrderItem.quantity + 1
      })
      res.status(200).send({id: oldOrderItem.id})
    } else {
      delete req.body.id

      let newOrderItem = await OrderProduct.create(req.body)
      res.status(201).send({id: newOrderItem.id})
    }
  } catch (error) {
    next(error)
  }
})

// remove a single item from order

router.update('/', async (req, res, next) => {
  try {
    let orderItemToUpdate = await OrderProduct.findOne({
      where: {
        productId: req.body.productId,
        orderId: req.body.orderId
      }
    })

    if (!orderItemToUpdate) throw new Error(`Order item not found`)

    if (orderItemToUpdate.quantity === 1) await orderItemToUpdate.destroy()
    else
      await orderItemToUpdate.update({quantity: orderItemToUpdate.quantity - 1})
  } catch (error) {
    console.log(error)
  }
})

// remove a whole product from order
router.delete('/', async (req, res, next) => {
  try {
    let orderItemToDelete = await OrderProduct.findOne({
      where: {
        productId: req.body.productId,
        orderId: req.body.orderId
      }
    })

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
