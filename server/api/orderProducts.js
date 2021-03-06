const router = require('express').Router()
const {OrderProduct, Order} = require('../db/models')
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
  // method which updates order total
  let updateOrderTotal = async (orderId, price) => {
    let orderToUpdate = await Order.findByPk(req.body.orderId)
    await orderToUpdate.update({
      total: Number(orderToUpdate.total) + Number(price)
    })
  }

  try {
    let finalOrderItem
    // check if order item already exists
    let oldOrderItem = await OrderProduct.findOne({
      where: {
        orderId: req.body.orderId,
        productId: req.body.product.id
      }
    })

    // if an item exists, update its quantity by 1
    if (oldOrderItem) {
      await oldOrderItem.update({
        quantity: oldOrderItem.quantity + 1,
        price: req.body.product.price
      })

      updateOrderTotal(req.body.orderId, oldOrderItem.price)
      res.status(200).send(oldOrderItem)
    } else {
      delete req.body.id

      let newOrderItem = await OrderProduct.create({
        orderId: req.body.orderId,
        productId: req.body.product.id,
        price: req.body.product.price,
        quantity: 1
      })

      updateOrderTotal(req.body.orderId, newOrderItem.price)
      res.status(201).send(newOrderItem)
    }
  } catch (error) {
    next(error)
  }
})

// remove a single item from order

// router.put('/', async (req, res, next) => {
//   try {
//     let orderItemToUpdate = await OrderProduct.findOne({
//       where: {
//         productId: req.body.productId,
//         orderId: req.body.orderId
//       }
//     })

//     if (!orderItemToUpdate) throw new Error(`Order item not found`)

//     if (orderItemToUpdate.quantity === 1) await orderItemToUpdate.destroy()
//     else
//       await orderItemToUpdate.update({ quantity: orderItemToUpdate.quantity - 1 })
//   } catch (error) {
//     console.log(error)
//   }
// })

//comment

// remove a whole product from order
router.put('/', async (req, res, next) => {
  let updateOrderTotal = async (orderId, price) => {
    let orderToUpdate = await Order.findByPk(req.body.orderId)
    await orderToUpdate.update({
      total: Number(orderToUpdate.total) - Number(price)
    })
  }

  try {
    let orderItemToDelete = await OrderProduct.findOne({
      where: {
        productId: req.body.product.id,
        orderId: req.body.orderId
      }
    })

    if (!orderItemToDelete) throw new Error(`Order item not found`)
    // if we only want to delete one
    else if (req.body.quantity && Number(orderItemToDelete.quantity) > 1) {
      await orderItemToDelete.update({
        quantity: Number(orderItemToDelete.quantity) - Number(req.body.quantity)
      })
      await updateOrderTotal(req.body.orderId, orderItemToDelete.price)
      res.status(201).send()
    } else {
      await updateOrderTotal(
        req.body.orderId,
        Number(orderItemToDelete.price) * Number(orderItemToDelete.quantity)
      )
      await orderItemToDelete.destroy()
      res.status(204).send()
    }
  } catch (error) {
    next(error)
  }
})
// Transactions per order route

module.exports = router
