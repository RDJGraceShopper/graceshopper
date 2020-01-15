const router = require('express').Router()
const {Product, Tag} = require('../db/models')
const db = require('../db/')

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
router.post('/', async (req, res, next) => {
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
    const product = await Product.findByPk(req.params.productId)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

// update
router.put('/:productId', async (req, res, next) => {
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
router.delete('/:productId', async (req, res, next) => {
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
