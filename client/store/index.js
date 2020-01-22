import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import {productsReducer as products, productReducer as product} from './product'
import {
  ordersReducer as orders,
  orderReducer as order,
  openOrderReducer as openOrder
} from './order'

const reducer = combineReducers({
  user,
  products,
  product,
  orders,
  order,
  openOrder
})

function saveToLocalStorage(state) {
  try {
    const seralizedState = JSON.stringify(state)
    localStorage.setItem('state', seralizedState)
  } catch (error) {
    console.log(error)
  }
}

function loadFromLocalStorage() {
  try {
    const seralizedState = localStorage.getItem('state')
    if (seralizedState === null) return undefined
    return JSON.parse(seralizedState)
  } catch (error) {
    console.log(error)
    return undefined
  }
}

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const persistedState = loadFromLocalStorage()
const store = createStore(reducer, persistedState, middleware)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
export * from './user'
export * from './product'
export * from './order'
