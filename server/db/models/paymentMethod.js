const Sequelize = require('sequelize')
const db = require('../db')

const PaymentMethod = db.define('paymentMethod', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = PaymentMethod
