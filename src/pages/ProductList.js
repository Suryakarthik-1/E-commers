import React from 'react'
import './ProductList.css' // Importing the CSS

const ProductList = () => {
  // Mock data
  const products = [
    {
      id: 1,
      name: 'Software A',
      description: 'Description for Software A',
      price: '$99',
    },
    {
      id: 2,
      name: 'Software B',
      description: 'Description for Software B',
      price: '$149',
    },
    {
      id: 3,
      name: 'Software B',
      description: 'Description for Software B',
      price: '$149',
    },
    {
      id: 4,
      name: 'Software B',
      description: 'Description for Software B',
      price: '$149',
    },
    // Add more products as needed
  ]

  return (
    <div className="product-list">
      <h1>Available Software</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
