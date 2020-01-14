const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  price: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1dbc1935-6542-4ee3-822f-135cff4ba62c/dc4t7jr-629058ee-b6bc-4e8f-8d4d-0f9922e6e7d0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFkYmMxOTM1LTY1NDItNGVlMy04MjJmLTEzNWNmZjRiYTYyY1wvZGM0dDdqci02MjkwNThlZS1iNmJjLTRlOGYtOGQ0ZC0wZjk5MjJlNmU3ZDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XHuQETN6_mnrcBa1vTMtP6b8mIa1Aki_8afh6QQYEVA'
  },
  quantitiy: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Product
