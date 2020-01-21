import axios from 'axios'

// ACTION TYPES

import {ADD_TO_CART, REMOVE_FROM_CART, GOT_CART} from './actionTypes'

// INITIAL STATE

const initialState = {
  cart: [],
  item: {}
}

// ACTION CREATORS

const gotCart = cart => {
  return {
    type: GOT_CART,
    cart
  }
}

const removeFromCart = item => {
  return {
    type: REMOVE_FROM_CART,
    item
  }
}

const addToCart = item => {
  return {
    type: ADD_TO_CART,
    item
  }
}

// THUNK CREATORS

//get Cart full of Items
export const getCart = (orderId, product) => {
  return async dispatch => {
    try {
      const response = await axios.get('')
      dispatch(gotCart(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}

//Add an item
export const removingFromCart = (orderId, product) => {
  return async dispatch => {
    return async dispatch => {
      try {
        await axios.delete('')
        dispatch(gotCar())
      } catch (error) {
        console.log(error)
      }
    }
  }
}

//Remove an item
export const addingToCart = (orderId, product) => {
  return async dispatch => {
    try {
      await axios.post()
      dispatch(gotCart())
    } catch (error) {
      console.log(error)
    }
  }
}

// CART REDUCER

export const cartReducer = function(state = initialState.cart, action) {
  switch (action.type) {
    case GOT_CART:
      return [action.cart]

    default:
      return state
  }
}
