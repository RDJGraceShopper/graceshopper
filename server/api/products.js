const router = require('express').Router()
const {Product} = require('../db/models')
const {isAdmin} = require('./routeProtectors')

// ALL PRODUCTS

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

//SINGLE PRODUCT CRUD

// create
router.post('/', isAdmin, async (req, res, next) => {
  try {
    // prevent posting explicit id
    delete req.body.id

    let newProduct = await Product.create(req.body)
    res.status(201).send(newProduct)
  } catch (error) {
    next(error)
  }
})

// read
router.get('/:productId', async (req, res, next) => {
  try {
    const magic = await Object.keys(Product.prototype)
    const product = await Product.findByPk(req.params.productId)
    const tags = await product.getTags()
    res.json({product, magic, tags})
  } catch (error) {
    next(error)
  }
})

// update
router.put('/:productId', isAdmin, async (req, res, next) => {
  try {
    const prodToUpdate = await Product.findByPk(req.params.productId)

    if (!prodToUpdate)
      throw new Error(`Product with id ${req.params.productId} not found`)
    else {
      // prevent updating id
      delete req.body.id

      await prodToUpdate.update(req.body)
      res.status(200).send(prodToUpdate)
    }
  } catch (error) {
    next(error)
  }
})

// delete
router.delete('/:productId', isAdmin, async (req, res, next) => {
  try {
    let prodToDelete = await Product.findByPk(req.params.productId)

    if (!prodToDelete) next()
    else {
      await prodToDelete.destroy()
      res.status(204).send()
    }
  } catch (error) {
    next(error)
  }
})

//MODEL METHOD TO CHECK QUANT AT 0

module.exports = router
