import React from 'react'
import {NavLink} from 'react-router-dom'

const OrderTile = props => {
  const order = props.order
  return (
    <div>
      <h4>Ordered on {order.createdAt}</h4>
      <h4>Fulfilled on {order.updatedAt}</h4>
      <h4>Total: {order.total}</h4>
    </div>
  )
}

export default OrderTile
