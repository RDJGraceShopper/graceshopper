import axios from 'axios'
import history from '../history'

// ACTION TYPES

import {
  GOT_ALL_PRODUCTS,
  GOT_SINGLE_PRODUCT,
  UPDATED_SINGLE_PRODUCT,
  REMOVE_PRODUCT
} from './actionTypes'

// INITIAL STATE

const initialState = {
  products: [],
  selectedProduct: {}
}

// ACTION CREATORS

const gotProducts = products => {
  return {
    type: GOT_ALL_PRODUCTS,
    products
  }
}

const gotSingleProduct = product => {
  return {
    type: GOT_SINGLE_PRODUCT,
    product
  }
}

// THUNK CREATORS

// get all products thunk
export const getProducts = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/products')
      console.log(response.data)
      dispatch(gotProducts(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}

// create product thunk
export const createProduct = product => {
  return async dispatch => {
    try {
      const response = await axios.post('/api/products', product)
      dispatch(getProducts())
    } catch (error) {
      console.log(error)
    }
  }
}

// delete product thunk
export const removeProduct = productId => {
  return async dispatch => {
    try {
      await axios.delete(`/api/products/${productId}`)
      dispatch(getProducts())
    } catch (error) {
      console.log(error)
    }
  }
}

// update product thunk ****

// get single product thunk
export const getSingleProduct = productId => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/products/${productId}`)
      dispatch(gotSingleProduct(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}

// REDUCERS

// products reducer
export const productsReducer = function(state = initialState.products, action) {
  switch (action.type) {
    case GOT_ALL_PRODUCTS:
      console.log(action.products)
      return [...action.products]
    default:
      return state
  }
}

// product reducer
export const productReducer = function(
  state = initialState.selectedProduct,
  action
) {
  switch (action.type) {
    case GOT_SINGLE_PRODUCT:
      return action.product
    default:
      return state
  }
}
