const router = require('express').Router()
const {Transaction} = require('../db/models')
module.exports = router

router.get('/:orderId', async (req, res, next) => {
  const order = await Transaction.findAll({
    where: {
      orderId: req.params.orderId
    }
  })
  res.json(order)
})
// Transactions per order route

module.exports = router
