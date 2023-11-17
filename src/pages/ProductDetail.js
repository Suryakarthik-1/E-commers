import React from 'react'
import './ProductDetail.css' // Make sure to create this CSS file

const ProductDetail = () => {
  // Mock data - replace with real data later
  const product = {
    name: 'Software A',
    description: 'Full description of Software A...',
    price: '$99',
    // Add other product details as needed
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <span className="price">{product.price}</span>
      {/* Add more elements like images, add to cart button, etc. */}
    </div>
  )
}

export default ProductDetail
