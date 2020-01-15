const User = require('./user')
const Order = require('./order')
const Product = require('./product')
const PaymentMethod = require('./paymentMethod')
const Tag = require('./tag')
const Shipping = require('./shipping')
const OrderProduct = require('./orderProduct')
const TagProduct = require('./tagProduct')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Tag.belongsToMany(Product, {as: 'products', through: TagProduct})
Product.belongsToMany(Tag, {through: TagProduct})

// Tag.belongsTo(Product)
// Product.hasMany(Tag)

PaymentMethod.belongsToMany(User, {as: 'user', through: 'userPaymentMethod'})

Product.belongsToMany(Order, {as: 'orders', through: OrderProduct})
Order.belongsToMany(Product, {as: 'products', through: OrderProduct})

User.hasMany(Order, {constraints: false})
Order.belongsTo(User, {constraints: false, as: 'user'})

Shipping.belongsTo(Order)

PaymentMethod.belongsTo(Order, {as: 'order'})
//Order Reversed ^^^^
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  User,
  Order,
  Product,
  PaymentMethod,
  Tag,
  Shipping,
  OrderProduct,
  TagProduct
}
