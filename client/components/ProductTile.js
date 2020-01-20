import React from 'react'
import {NavLink} from 'react-router-dom'

const ProductTile = props => {
  const product = props.product
  return (
    <div>
      <NavLink to={`/products/${product.id}`}>
        <img src={product.imageURL} className="product_tile" />
        <h3>{product.name}</h3> <p>{product.price}</p>
      </NavLink>
    </div>
  )
}

export default ProductTile