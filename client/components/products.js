import React from 'react'
import {connect} from 'react-redux'
import store from '../store'
import {
  getProducts,
  getSingleProduct,
  createProduct,
  removeProduct
} from '../store'

class Products extends React.Component {
  componentDidMount() {
    this.props.getProducts()
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.products &&
            this.props.products.map(product => {
              return (
                <li key={product.id}>
                  <h3>{product.name}</h3>
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
    products: state.productsReducer // WHY???
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
