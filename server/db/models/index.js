const User = require('./user')
const Order = require('./order')
const Product = require('./product')
const PaymentMethod = require('./paymentMethod')
const Tag = require('./tag')
const Shipping = require('./shipping')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Tag.belongsToMany(Product, {as: 'products', through: 'tag-product'})

PaymentMethod.belongsToMany(User, {as: 'users', through: 'user-paymentMethod'})

Product.belongsToMany(Order, {as: 'orders', through: 'transaction'})
Order.belongsToMany(Product, {as: 'products', through: 'transaction'})

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
  Shipping
}
