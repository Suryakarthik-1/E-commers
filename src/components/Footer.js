import React from 'react'
import './Footer.css' // Importing the CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Software Marketplace. All rights
          reserved.
        </p>
        {/* Add additional footer content here */}
      </div>
    </footer>
  )
}

export default Footer
