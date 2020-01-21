import React from 'react'
import {connect} from 'react-redux'
import {updateOpenOrder} from '../store'

class AddToCartButton extends React.Component {
  constructor(props) {
    super(props)
    this.updateCart = this.updateCart.bind(this)
  }

  async updateCart(userId, productId, orderId) {
    // console.log(`${userId} ${productId} ${orderId}`)
    this.props.addProductToCart(userId, productId, orderId)
  }

  componentDidMount() {}

  render() {
    const userId = this.props.userId
    const productId = this.props.productId
    const openOrderId = this.props.openOrder.id

    return (
      <div>
        <button onClick={() => this.updateCart(userId, productId, openOrderId)}>
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
    addProductToCart: (userId, productId, orderId) =>
      dispatch(updateOpenOrder(userId, productId, orderId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton)
