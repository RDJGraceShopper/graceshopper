const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  shippingCost: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  total: {
    type: Sequelize.INTEGER,
    defaultValue: 0
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
