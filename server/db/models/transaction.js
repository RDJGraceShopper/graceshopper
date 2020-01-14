const Sequelize = require('sequelize')
const db = require('../db')

const Transaction = db.define('transaction', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  }
})

module.exports = Transaction
