const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

//GET ALL USERS
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// GET USER BY ID
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.json(user)
  } catch (error) {
    next(error)
  }
})

//CREATE NEW USER
router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.status(201).send(newUser)
  } catch (error) {
    next(error)
  }
})

//MODIFY USER
router.put('/:id', async (req, res, next) => {
  try {
    const updateUser = await User.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    res.send(updateUser)
  } catch (error) {
    next(error)
  }
})

// DELETE USER
router.delete('/:id', async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
