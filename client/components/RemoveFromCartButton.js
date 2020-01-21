import React, {Component} from 'react'
import {connect} from 'react-redux'
import {removeFromOpenOrder} from '../store'

class RemoveFromCartButton extends Component {
  updateCart = async (userId, product, orderId) => {
    await this.props.removeProductFromCart(userId, product, orderId)
  }

  componentDidMount() {}

  render() {
    const userId = this.props.userId
    const product = this.props.product
    const openOrderId = this.props.openOrderId
    const quantity = this.props.quantity
    return (
      <div>
        <button onClick={() => this.updateCart(userId, product, openOrderId)}>
          Remove From Cart
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.id,
    openOrder: state.openOrder
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeProductFromCart: (userId, product, orderId) => {
      dispatch(removeFromOpenOrder(userId, product, orderId))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveFromCartButton)
