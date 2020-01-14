const Sequelize = require('sequelize')
const db = require('../db')

const Shipping = db.define('shipping', {
  trackingNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Shipping
