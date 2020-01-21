import React from 'react'
import {NavLink} from 'react-router-dom'
import AddToCartButton from './AddToCartButton'

const ProductTile = props => {
  const product = props.product
  return (
    <div>
      <NavLink to={`/products/${product.id}`}>
        <img src={product.imageURL} className="product_tile" />
        <h3>{product.name}</h3> <p>{product.price}</p>
      </NavLink>
      <AddToCartButton productId={product.id} />
    </div>
  )
}

export default ProductTile
