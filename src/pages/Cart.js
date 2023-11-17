import React from 'react'
import './Cart.css' // Make sure to create this CSS file

const Cart = () => {
  // Mock data - replace with real data later
  const cartItems = [
    { id: 1, name: 'Software A', price: '$99', quantity: 1 },
    // Add more cart items as needed
  ]

  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <span>{item.price}</span>
          {/* Add more elements like quantity, remove button, etc. */}
        </div>
      ))}
      {/* Add a checkout button, total price calculation, etc. */}
    </div>
  )
}

export default Cart
