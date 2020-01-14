const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('product', {
  date: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  total: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = Order
