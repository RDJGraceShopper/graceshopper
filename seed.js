const db = require('./server/db')
const {green, red} = require('chalk')

const {
  Order,
  Product,
  Shipping,
  Tag,
  User,
  PaymentMethod,
  OrderProduct,
  TagProduct
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
    User.create({
      firstName: 'Steven',
      lastName: 'Strange',
      email: 'docunfamiliar@astralrealm.gov',
      address: '666 Park ave',
      zip: '11221'
    })
    Product.create({
      name: "Thor's Hammer",
      quantity: 1,
      description: "Thor's Hammer",
      price: 50.0
    })
    Order.create({
      price: 30.0,
      shippingCost: 5.0,
      total: 35.0,
      userId: 1
    })
    Order.create({
      price: 35.0,
      shippingCost: 15.0,
      total: 50.0,
      userId: 2
    })
    PaymentMethod.create({
      name: 'Visa',
      orderId: 2
    })
    Tag.create({
      name: 'Thor',
      productId: 1
    })
    Shipping.create({
      trackingNumber: '1',
      orderId: 1
    })
    OrderProduct.create({
      quantity: 3,
      price: 30,
      orderId: 1,
      productId: 1
    })
    TagProduct.create({
      productId: 1,
      tagId: 1
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
