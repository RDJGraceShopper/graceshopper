import React from 'react'
import {connect} from 'react-redux'
import store from '../store'
import {getOrders, getOrdersForUser, getSingleOrder} from '../store'

class Orders extends React.Component {
  componentDidMount() {
    if (this.props.userId) this.props.getOrdersForUser(this.props.userId)
    else this.props.getOrders()
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.orders &&
            this.props.orders.map(order => {
              return (
                <li key={order.id}>
                  <h3>{order.total}</h3>
                </li>
              )
            })}
        </ul>
      </div>
    )
  }
}

// CONNECT COMPONENT TO REDUX STORE

const mapStateToProps = state => {
  return {
    orders: state.orders,
    order: state.order
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrdersForUser: userId => dispatch(getOrdersForUser(userId)),
    getSingleOrder: orderId => dispatch(getSingleOrder(orderId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
