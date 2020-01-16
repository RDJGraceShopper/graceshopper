import React from 'react'
import {connect} from 'react-redux'
import store from '../store'
import ProductTile from './ProductTile'
import {
  getProducts,
  getSingleProduct,
  createProduct,
  removeProduct
} from '../store'

class Products extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.products &&
            this.props.products.map(product => {
              return <ProductTile product={product} key={product.id} />
            })}
        </ul>
      </div>
    )
  }
}

// CONNECT COMPONENT TO REDUX STORE

const mapStateToProps = state => {
  return {
    products: state.products, // WHY???
    product: state.product
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
