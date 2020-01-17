import axios from 'axios'

// ACTION TYPES

import {ADD_TO_CART, REMOVE_FROM_CART, GOT_CART} from './actionTypes'

// INITIAL STATE

const initialState = {}

// ACTION CREATORS

const gotCart = cart => {
  return {
    type: GOT_CART,
    cart
  }
}

// THUNK CREATORS

const addToCart = (orderId, product) => {
  return async dispatch => {}
}
