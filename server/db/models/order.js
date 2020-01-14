const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('product', {
  subTotal: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  shippingCost: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  total: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  }
})

module.exports = Order
