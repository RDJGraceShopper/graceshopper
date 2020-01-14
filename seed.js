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
    User.create({
      firstName: 'Peter',
      lastName: 'Parker',
      email: 'peter@mcu.org',
      address: '4 Hanover Square',
      zip: '11221'
    })
    Product.create({
      name: "Thor's Hammer",
      quantity: 1,
      description: "Thor's Hammer",
      price: 50
    })
    Order.create({
      price: 30.0,
      shippingCost: 5.0,
      total: 35.0,
      userId: 1
    })
    PaymentMethod.create({
      name: 'Visa'
    })
    Tag.create({
      name: 'Thor'
    })
    Shipping.create({
      trackingNumber: '1',
      orderId: 1
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
