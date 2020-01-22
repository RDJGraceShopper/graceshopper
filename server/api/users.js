const router = require('express').Router()

const {User, Order} = require('../db/models')
const {
  isAdmin,
  isLoggedInOrIsAdmin,
  duplicateUsers
} = require('./routeProtectors')

//CREATE NEW USER
router.post('/signup', async (req, res, next) => {
  try {
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      address: req.body.address,
      zip: req.body.zip,
      password: req.body.password
    })
    res.status(201).json({message: 'User Created'})
  } catch (error) {
    next(error)
  }
})

router.post('/login', duplicateUsers, async (req, res, next) => {
  const logInUser = await User.find(user => user.email === req.body.email)
  if (logInUser === null) {
    return res.status(400).send('Cannot Find User')
  }
  try {
    //How to compare passwords in crypto
  } catch (error) {
    next(error)
  }
})

//GET ALL USERS
router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// GET USER BY ID
router.get('/:id', isLoggedInOrIsAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [{model: Order, as: 'orders'}]
    })
    res.json(user)
  } catch (error) {
    next(error)
  }
})

//MODIFY USER
router.put('/:id', isLoggedInOrIsAdmin, async (req, res, next) => {
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

// DELETE USER ONLY BY ADMIN
router.delete('/:id', isAdmin, async (req, res, next) => {
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

// GET ORDERS FOR A GIVEN USER
router.get('/:id/orders', async (req, res, next) => {
  try {
    // check if the user exists
    const givenUser = await User.findByPk(req.params.id)
    if (!givenUser)
      throw new Error(`User with id of ${req.params.id} not found`)

    // if the user exists...
    const orders = await Order.findAll({
      where: {
        userId: req.params.id
      }
    })

    res.status(200).send(orders)
  } catch (error) {
    next(error)
  }
})

// GET OPEN ORDER FOR A GIVEN USER

router.get('/:id/openOrder', async (req, res, next) => {
  try {
    // check if the user exists
    const givenUser = await User.findByPk(req.params.id)

    if (!givenUser)
      throw new Error(`User with id of ${req.params.id} not found`)

    // if the user exists...
    const openOrder = await Order.findOne({
      where: {
        userId: req.params.id,
        status: 'Pending'
      }
    })

    res.status(200).send(openOrder)
  } catch (error) {
    next(error)
  }
})

//admins Rights via PUT request check from admin only

module.exports = router
