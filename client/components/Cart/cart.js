import React, {Component} from 'react'
import axios from 'axios'
import {
  gotSingleOrder,
  getSingleOrder,
  completeOrder,
  makeOrder,
  updateOpenOrder,
  getOpenOrder
} from '../../store'
import {connect} from 'react-redux'
import CartOrderItem from './CartOrderItem'

class Cart extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   products: [],
    //   checkedOut: false
    // }
    this.submitOrder = this.submitOrder.bind(this)
  }

  async submitOrder() {
    await this.props.completeOrder(this.props.userId, this.props.openOrder)

    // this.setState({products: []})
  }

  async componentDidMount() {
    if (!this.props.openOrder.id)
      if (this.props.userId) {
        await this.props.getOpenOrder(this.props.userId)
      } else {
        await this.props.makeOrder({})
      }

    await this.props.getOrder(this.props.openOrder.id)
  }

  render() {
    const products = this.props.openOrder.products
    if (products) {
      return (
        <div>
          <h1>This is my cart</h1>
          <ul>
            {products.map(product => {
              return (
                <li key={product.id}>
                  <CartOrderItem product={product} />
                </li>
              )
            })}
          </ul>

          <h2>Order total price: {this.props.openOrder.total / 100}</h2>
          <button onClick={() => this.submitOrder()}>Submit</button>
        </div>
      )
    } else {
      return (
        <div>
          <h1>No items in cart</h1>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    openOrder: state.openOrder,
    order: state.order
    // userId: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrder: orderId => dispatch(getSingleOrder(orderId)),
    gotOrder: order => dispatch(gotSingleOrder(order)),
    makeOrder: order => dispatch(makeOrder(order)),
    getOpenOrder: userId => dispatch(getOpenOrder(userId)),
    completeOrder: (userId, orderId) => dispatch(completeOrder(userId, orderId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
