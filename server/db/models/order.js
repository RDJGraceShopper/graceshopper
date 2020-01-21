const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  price: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0.0
  },
  shippingCost: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0.0
  },
  total: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0.0
  },
  status: {
    type: Sequelize.ENUM('Pending', 'Completed'),
    allowNull: false,
    defaultValue: 'Pending'
  }
})
// ADD STATUS and ADJUST DECIMAL
// ENUM
//price => subtotal
//Updated At
//Purchase Date
module.exports = Order
