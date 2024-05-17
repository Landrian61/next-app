import React from 'react'
import AddToCart from './addToCart'

const productList = () => {
  return (
    <div>
        <div>
            <h1>Product List</h1>
            <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
            </ul>
            <AddToCart />
        </div>
    </div>
  )
}

export default productList