import React, {Component} from 'react'
import Cart from './Cart'
import {connect} from 'react-redux'
import {
  completeOrder,
  getSingleOrder,
  makeOrder,
  updateOpenOrder,
  getOpenOrder
} from '../../store'

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.submitOrder = this.submitOrder.bind(this)
  }

  async submitOrder() {
    await this.props.completeOrder(this.props.userId, this.props.openOrder.id)
  }

  render() {
    const openOrder = this.props.openOrder
    const userId = this.props.userId

    return (
      <div>
        <h1>This is my modal/popup for checkout</h1>
        <Cart />
        <button onClick={() => this.submitOrder()}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    openOrder: state.openOrder,
    userId: state.user.id
  }
}

const mapStateToDispatch = dispatch => {
  return {
    getOrder: orderId => dispatch(getSingleOrder(orderId)),
    makeOrder: order => dispatch(makeOrder(order)),
    getOpenOrder: userId => dispatch(getOpenOrder(userId)),
    completeOrder: (userId, orderId) => dispatch(completeOrder(userId, orderId))
  }
}

export default Checkout
