import React from 'react'
import {connect} from 'react-redux'
import {updateOpenOrder, getOpenOrder} from '../store'

class AddToCartButton extends React.Component {
  constructor(props) {
    super(props)
    this.updateCart = this.updateCart.bind(this)
  }

  async updateCart(userId, product, orderId) {
    if (!orderId) {
      await this.props.getOpenOrder(userId)
      orderId = this.props.openOrder.id
    }

    await this.props.addProductToCart(userId, product, orderId)
  }

  componentDidMount() {}

  render() {
    const userId = this.props.userId
    const product = this.props.product
    const openOrderId = this.props.openOrder.id

    return (
      <div>
        <button onClick={() => this.updateCart(userId, product, openOrderId)}>
          Add To Cart
        </button>
      </div>
    )
  }
}

// CONNECT COMPONENT TO REDUX STORE

const mapStateToProps = state => {
  return {
    userId: state.user.id,
    openOrder: state.openOrder
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: (userId, product, orderId) =>
      dispatch(updateOpenOrder(userId, product, orderId)),
    getOpenOrder: userId => dispatch(getOpenOrder(userId))
  }
}

// hfe
export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton)
