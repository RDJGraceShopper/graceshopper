const router = require('express').Router()
const {PaymentMethod} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const payments = await PaymentMethod.findAll()
    res.json(payments)
  } catch (error) {
    next(error)
  }
})

module.exports = router
