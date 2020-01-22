import React from 'react'
import axios from 'axios'
import {
  getSingleOrder,
  getOpenOrder,
  deleteOneFromOrder,
  updateOpenOrder
} from '../../store'
import {connect} from 'react-redux'
import RemoveFromCartButton from '../RemoveFromCartButton'

class CartOrderItem extends React.Component {
  // receives product as prop passed down directly
  constructor(props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
    this.removeOneFromCart = this.removeOneFromCart.bind(this)
  }

  async removeOneFromCart(userId, product, orderId) {
    await this.props.removeOneFromCart(userId, product, orderId)
  }

  async addToCart(userId, product, orderId) {
    await this.props.addOneToCart(userId, product, orderId)
  }

  render() {
    let product = this.props.product
    let userId = this.props.userId
    const openOrderId = this.props.openOrder.id

    return (
      <div>
        <h4>{product.name}</h4>
        <p>Price: {product.orderProduct.price / 100}</p>
        <button onClick={() => this.addToCart(userId, product, openOrderId)}>
          +
        </button>
        <p>Quantity: {product.orderProduct.quantity}</p>
        <button
          onClick={() => this.removeOneFromCart(userId, product, openOrderId)}
        >
          -
        </button>
        <RemoveFromCartButton product={product} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    openOrder: state.openOrder,
    order: state.order,
    userId: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrder: orderId => dispatch(getSingleOrder(orderId)),
    getOpenOrder: userId => dispatch(getOpenOrder(userId)),
    removeOneFromCart: (userId, product, orderId) =>
      dispatch(deleteOneFromOrder(userId, product, orderId)),
    addOneToCart: (userId, product, orderId) =>
      dispatch(updateOpenOrder(userId, product, orderId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartOrderItem)
