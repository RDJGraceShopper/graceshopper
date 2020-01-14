const db = require('./server/db')
const {green, red} = require('chalk')

const {
  Order,
  Product,
  Shipping,
  Tag,
  User,
  PaymentMethod,
  Transaction
} = require('./server/db/models')

const seed = async () => {
  await db.sync({force: true}).then(() => {
    Order.create({
      price: 30.0,
      // userId: 1,
      shippingCost: 5.0,
      total: 35.0
    })
    Product.create({
      name: "Thor's Hammer",
      quantity: 1,
      description: "Thor's Hammer",
      price: 50
    })
    User.create({
      firstName: 'Amy',
      lastName: 'Wong',
      email: 'amy@mu.edu',
      address: '5 Hanover Square',
      zip: '11221'
    })
    PaymentMethod.create({
      name: 'Philip'
    })
    Tag.create({
      name: 'Guenter'
    })
    Shipping.create({
      trackingNumber: '1'
    })
    Transaction.create({
      quantity: 3,
      price: 30,
      orderId: 1,
      productId: 1
    })
  })
  // seed your database here!

  console.log(green('Seeding success!'))
  db.close()
}

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'))
  console.error(err)
  db.close()
})
