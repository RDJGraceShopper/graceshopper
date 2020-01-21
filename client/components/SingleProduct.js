import React from 'react'
import {connect} from 'react-redux'
import {getSingleProduct} from '../store'
import AddToCartButton from './AddToCartButton'
import RemoveFromCartButton from './RemoveFromCartButton'

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
        <p>${product.price}</p>
        <p>{product.description}</p>
        <AddToCartButton product={product} />
        <RemoveFromCartButton product={product} />
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
