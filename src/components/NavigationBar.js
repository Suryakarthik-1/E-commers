import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        {/* Add other navigation links as needed */}
      </ul>
    </nav>
  )
}

export default NavigationBar