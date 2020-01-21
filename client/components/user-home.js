import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import OrderTile from './OrderTile'
import {getOrdersForUser, getOpenOrder, makeOrder} from '../store/order'

/**
 * COMPONENT
 */

class UserHome extends React.Component {
  componentDidMount() {
    this.props.getOrdersForUser(this.props.user.id)

    // get the open order or create a new one
    this.props.getOpenOrder(this.props.user.id)

    if (!this.props.openOrder.id) {
      this.props.makeOrder({userId: this.props.user.id})
    }
  }

  render() {
    const user = this.props.user
    const orders = this.props.orders

    return (
      <div>
        <h3>
          Welcome, {user.firstName} {user.lastName}
        </h3>
        <h3>Your order history</h3>
        <ul>
          {orders &&
            orders.map(order => {
              return (
                <li key={order.id}>
                  <OrderTile order={order} />
                </li>
              )
            })}
        </ul>
      </div>
    )
  }
}

// export const UserHome = (props) => {
//   const user = props.user
//   // await props.getOrdersForUser(user.id)
//   const orders = props.orders

//   return (
//     <div>
//       <h3>Welcome, {user.firstName} {user.lastName}</h3>
//       <h3>Your order history</h3>
//       <ul>
//         {orders && orders.map((order) => {
//           return (
//             <li key={order.id}>
//               <OrderTile order={order} />
//             </li>
//           )
//         }
//         )}
//       </ul>
//     </div>
//   )
// }

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    orders: state.orders,
    openOrder: state.openOrder
  }
}

const mapDispatch = dispatch => {
  return {
    getOrdersForUser: userId => dispatch(getOrdersForUser(userId)),
    makeOrder: order => dispatch(makeOrder(order)),
    getOpenOrder: userId => dispatch(getOpenOrder(userId))
  }
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
