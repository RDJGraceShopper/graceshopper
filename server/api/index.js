const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/orders', require('./orders'))
router.use('/tags', require('./tags'))
router.use('/products', require('./products'))
router.use('/paymentMethods', require('./paymentMethods'))
router.use('/transactions', require('./transactions'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

//CERTAIN ROUTES SHOULD BE ADMIN ONLY
