const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  price: {
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
// ADD STATUS and ADJUST DECIMAL
// ENUM
//price => subtotal
//Updated At
//Purchase Date
module.exports = Order
