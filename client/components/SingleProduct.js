import React from 'react'
import {connect} from 'react-redux'
import store from '../store'
import {getSingleProduct} from '../store'
import AddToCartButton from './AddToCartButton'
import {Link} from 'react-router-dom'

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.productId)
  }

  render() {
    let product = this.props.product
    return (
      <div>
        <img src={product.imageURL} className="product_single_view" />
        <h2>{product.name}</h2>
        <p>${product.price / 100}</p>
        <p>{product.description}</p>
        <AddToCartButton product={product} />
        <Link to="/products">Back To Products</Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    product: state.product
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleProduct: productId => dispatch(getSingleProduct(productId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
