import axios from 'axios'

// ACTION TYPES

import {
  GOT_ALL_ORDERS,
  GOT_SINGLE_ORDER,
  UPDATED_SINGLE_ORDER,
  GOT_OPEN_ORDER
} from './actionTypes'

// INITIAL STATE

const initialState = {
  selectedOrder: {},
  orders: [],
  openOrder: {}
}

// ACTION CREATORS

const gotOrders = orders => {
  return {
    type: GOT_ALL_ORDERS,
    orders
  }
}

const gotSingleOrder = order => {
  return {
    type: GOT_SINGLE_ORDER,
    order
  }
}

const gotOpenOrder = openOrder => {
  return {
    type: GOT_OPEN_ORDER,
    openOrder
  }
}
// THUNK CREATORS

export const getOrders = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/orders')
      dispatch(gotOrders(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getOrdersForUser = userId => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/users/${userId}/orders`)
      dispatch(gotOrders(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getSingleOrder = orderId => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/orders/${orderId}`)
      dispatch(gotSingleOrder(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}

// open order

export const makeOrder = order => {
  return async dispatch => {
    try {
      const response = await axios.post('/api/orders/', order)
      dispatch(gotOpenOrder(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getOpenOrder = userId => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/users/${userId}/openOrder`)
      dispatch(gotOpenOrder(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const addToOpenOrder = (userId, product, orderId) => {
  return async dispatch => {
    try {
      const response = await axios.post(`/api/orderproducts/`, {
        orderId: orderId,
        product
      })
      dispatch(getOpenOrder(userId))
    } catch (error) {
      console.log(error)
    }
  }
}

export const removeFromOpenOrder = (userId, product, orderId) => {
  return async dispatch => {
    try {
      const response = await axios.delete('/api/orderproducts', {
        orderId: orderId,
        product
      })
      dispatch(getOpenOrder(userId))
    } catch (error) {
      console.log(error)
    }
  }
}

// REDUCERS

export const ordersReducer = (state = initialState.orders, action) => {
  switch (action.type) {
    case GOT_ALL_ORDERS:
      return action.orders

    default:
      return state
  }
}

export const openOrderReducer = (state = initialState.openOrder, action) => {
  switch (action.type) {
    case GOT_OPEN_ORDER:
      return action.openOrder

    default:
      return state
  }
}

export const orderReducer = (state = initialState.selectedOrder, action) => {
  switch (action.type) {
    case GOT_SINGLE_ORDER:
      return action.order
    default:
      return state
  }
}
