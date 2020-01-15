const router = require('express').Router()
const {Product, Tag} = require('../db/models')
const db = require('../db/db')

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId, {
      include: [
        {
          model: Tag
        }
      ]
    })
    res.json(product)
  } catch (error) {
    next(error)
  }
})

module.exports = router
