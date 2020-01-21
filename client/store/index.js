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

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './product'
export * from './order'
