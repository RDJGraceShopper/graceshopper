import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteFromOrder} from '../store'

class RemoveFromCartButton extends Component {
  constructor(props) {
    super(props)
    this.updateCart = this.updateCart.bind(this)
  }

  async updateCart(userId, product, orderId) {
    await this.props.removeProductFromCart(userId, product, orderId)
  }
  componentDidMount() {}

  render() {
    const userId = this.props.userId
    const product = this.props.product
    const openOrderId = this.props.openOrder.id
    console.log('OpenOrder===>', this.props.product)
    return (
      <div>
        <button onClick={() => this.updateCart(userId, product, openOrderId)}>
          Remove From Cart
        </button>
      </div>
    )
  }
}

//Connecting to Redux Store
const mapStateToProps = state => {
  return {
    userId: state.user.id,
    openOrder: state.openOrder
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeProductFromCart: (userId, product, orderId) =>
      dispatch(deleteFromOrder(userId, product, orderId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveFromCartButton)
