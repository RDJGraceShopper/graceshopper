const Sequelize = require('sequelize')
const db = require('../db')

const TagProduct = db.define('tagProduct', {
  tagId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = TagProduct
