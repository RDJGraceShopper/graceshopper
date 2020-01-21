import React, {Component} from 'react'
import axios from 'axios'
import {getSingleOrder} from '../../store'
import {connect} from 'react-redux'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    await this.props.getOrder(this.props.openOrderId)

    this.setState({products: this.props.order.products})
  }

  render() {
    const products = this.state.products

    return (
      <div>
        <h1>This is my cart</h1>
        <ul>
          {products.map(product => {
            return (
              <li key={product.id}>
                <h4>{product.name}</h4>
                <p>Price: {product.orderProduct.price / 100}</p>
                <p>Quantity: {product.orderProduct.quantity}</p>
              </li>
            )
          })}
        </ul>
        <h2>Order total price: {this.props.order.total / 100}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    openOrderId: state.openOrder.id,
    order: state.order
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrder: orderId => dispatch(getSingleOrder(orderId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
